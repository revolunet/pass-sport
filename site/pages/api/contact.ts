import Crisp from 'crisp-api';
import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { ContactRequestBody } from '../../types/Contact';

// Check envs are defiend
if (typeof process.env.CRISP_IDENTIFIER !== 'string') {
  throw new Error('CRISP_IDENTIFIER environement is not defined');
}

if (typeof process.env.CRISP_KEY !== 'string') {
  throw new Error('CRISP_KEY environement is not defined');
}

// Create crisp client
const CrispClient = new Crisp();
CrispClient.setTier('plugin');
CrispClient.authenticate(process.env.CRISP_IDENTIFIER, process.env.CRISP_KEY);

// Zod schema validation for contact form
const schema = z.object({
  email: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  message: z.string(),
  reason: z.string(),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const jsonBody = JSON.parse(req.body);
  const objectBody: ContactRequestBody = schema.parse(jsonBody);
  const conversation = await CrispClient.website.createNewConversation(process.env.CRISP_WEBSITE);
  await CrispClient.website.updateConversationMetas(
    process.env.CRISP_WEBSITE,
    conversation.session_id,
    {
      nickname: `${objectBody.firstname} ${objectBody.lastname}`,
      email: objectBody.email,
      data: { email: objectBody.email },
      segments: [objectBody.reason],
    },
  );
  await CrispClient.website.sendMessageInConversation(
    process.env.CRISP_WEBSITE,
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
