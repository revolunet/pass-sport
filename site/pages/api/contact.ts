import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { ContactRequestBody } from '../../types/Contact';
import { initCrispClient } from 'utils/crisp';
import { decryptData } from '@/utils/decryption';
import { AUTHORIZED_VENDORS_KEY } from '@/app/constants/cookie-manager';

const { crispClient, envVars } = initCrispClient();
const contactFormSchema = z.object({
  email: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  message: z.string(),
  reason: z.string(),
  isProRequest: z.boolean(),
});

const MAX_LENGTH_REASON = 80;
const SUPPORT_COOKIE_KEY = process.env.NEXT_PUBLIC_COOKIE_SUPPORT_KEY as string;
const BASE_64_KEY_FOR_SUPPORT_COOKIE = process.env.BASE_64_KEY_FOR_SUPPORT_COOKIE as string;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let attempts = null;

  if (
    SUPPORT_COOKIE_KEY in req.cookies &&
    typeof req.cookies[SUPPORT_COOKIE_KEY] === 'string' &&
    hasGivenConsentForSupportCookie(req.cookies)
  ) {
    const encryptedBase64Value = req.cookies[SUPPORT_COOKIE_KEY];

    if (typeof encryptedBase64Value === 'string') {
      const decryptedSupportCookieValue = decryptData(
        encryptedBase64Value,
        BASE_64_KEY_FOR_SUPPORT_COOKIE,
      );

      if (typeof decryptedSupportCookieValue === 'string') {
        attempts = JSON.parse(Buffer.from(decryptedSupportCookieValue, 'base64').toString());
      }
    }
  }

  const jsonBody = JSON.parse(req.body);
  const { isProRequest, firstname, lastname, email, reason, message }: ContactRequestBody =
    contactFormSchema.parse(jsonBody);

  const conversation = await crispClient.website.createNewConversation(envVars.CRISP_WEBSITE);

  const byWhoSegment = isProRequest ? 'Pro' : 'Particulier';
  const failedAttemptSegment = hasGivenConsentForSupportCookie(req.cookies)
    ? 'tentative-code'
    : null;

  await crispClient.website.updateConversationMetas(
    envVars.CRISP_WEBSITE,
    conversation.session_id,
    {
      nickname: `${firstname} ${lastname}`,
      email,
      data: { email },
      segments: [byWhoSegment, reason.slice(0, MAX_LENGTH_REASON), failedAttemptSegment].filter(
        Boolean,
      ),
    },
  );

  await crispClient.website.sendMessageInConversation(
    envVars.CRISP_WEBSITE,
    conversation.session_id,
    {
      type: 'text',
      from: 'user',
      origin: 'urn:pass-sport',
      content: message,
    },
  );

  // Writing private note, with all attempts
  if (attempts !== null) {
    await crispClient.website.sendMessageInConversation(
      envVars.CRISP_WEBSITE,
      conversation.session_id,
      {
        type: 'note',
        from: 'operator',
        origin: 'urn:pass-sport',
        content: formatNote(attempts),
      },
    );
  }

  return res.status(201).end();
}

function hasGivenConsentForSupportCookie(cookies: NextApiRequest['cookies']) {
  return cookies[AUTHORIZED_VENDORS_KEY]?.includes(`${SUPPORT_COOKIE_KEY}=true`);
}

function formatNote(attempts: object[]) {
  let mapping: { [key: string]: string } = {
    attemptNumber: 'Tentative numéro',
    beneficiaryLastname: 'Nom du bénéficiaire',
    beneficiaryFirstname: 'Prénom du bénéficiaire',
    beneficiaryBirthDate: 'Date de naissance du bénéficiaire',
    recipientResidencePlace: 'Lieu de résidence',
    recipientLastname: `Nom de l'allocataire`,
    recipientFirstname: `Prénom de l'allocataire`,
    recipientCafNumber: `Matricule CAF de l'allocataire`,
    recipientBirthPlace: `Lieu de naissance de l'allocataire`,
    recipientBirthCountry: `Pays de naissance de l'allocataire`,
    step: 'Etape du formulaire',
  };

  let formattedNote = attempts.map((obj, index) => {
    // Augment the object to add the attempt number key/value pair
    let _attempts = { attemptNumber: index + 1, ...obj };

    return Object.keys(_attempts)
      .map((key) => {
        const _key = mapping[key] ? mapping[key] : key;
        const value = _attempts[key as keyof typeof _attempts];

        return `${_key} -> ${value}`;
      })
      .join('\n');
  });

  return formattedNote.join('\n\n');
}
