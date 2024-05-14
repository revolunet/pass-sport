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
});

const MAX_LENGTH_REASON = 80;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const jsonBody = JSON.parse(req.body);
  const objectBody: ContactRequestBody = contactFormSchema.parse(jsonBody);
  const conversation = await crispClient.website.createNewConversation(envVars.CRISP_WEBSITE);
  await crispClient.website.updateConversationMetas(
    envVars.CRISP_WEBSITE,
    conversation.session_id,
    {
      nickname: `${objectBody.firstname} ${objectBody.lastname}`,
      email: objectBody.email,
      data: { email: objectBody.email },
      segments: [objectBody.reason.slice(0, MAX_LENGTH_REASON)],
    },
  );

  await crispClient.website.sendMessageInConversation(
    envVars.CRISP_WEBSITE,
    conversation.session_id,
    {
      type: 'text',
      from: 'user',
      origin: 'urn:pass-sport',
      content: objectBody.message,
    },
  );

  return res.status(201).end();
}
