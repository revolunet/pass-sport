import { z } from 'zod';
import Crisp from 'crisp-api';

export function initCrispClient() {
  const envSchema = z.object({
    CRISP_IDENTIFIER: z.string(),
    CRISP_KEY: z.string(),
    CRISP_WEBSITE: z.string(),
  });

  const envVars = envSchema.parse({
    CRISP_IDENTIFIER: process.env.CRISP_IDENTIFIER,
    CRISP_KEY: process.env.CRISP_KEY,
    CRISP_WEBSITE: process.env.CRISP_WEBSITE,
  });

  const crispClient = new Crisp();

  crispClient.setTier('plugin');
  crispClient.authenticate(envVars.CRISP_IDENTIFIER, envVars.CRISP_KEY);

  return {
    envVars,
    crispClient,
  };
}
