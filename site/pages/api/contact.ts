import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { ContactRequestBody } from '../../types/Contact';
import { initCrispClient } from 'utils/crisp';

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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const jsonBody = JSON.parse(req.body);
  const { isProRequest, firstname, lastname, email, reason, message }: ContactRequestBody =
    contactFormSchema.parse(jsonBody);

  const conversation = await crispClient.website.createNewConversation(envVars.CRISP_WEBSITE);

  const byWhoSegment = isProRequest ? 'Pro' : 'Particulier';

  await crispClient.website.updateConversationMetas(
    envVars.CRISP_WEBSITE,
    conversation.session_id,
    {
      nickname: `${firstname} ${lastname}`,
      email,
      data: { email },
      segments: [byWhoSegment, reason.slice(0, MAX_LENGTH_REASON)],
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

  return res.status(201).end();
}
