// only to be used on a server component
import crypto from 'crypto';
import * as Sentry from '@sentry/nextjs';

export function base64Decode(data: string) {
  return Buffer.from(data, 'base64');
}

// from base64 encrypted data to base64 string decrypted
export function decryptData(base64Data: string, base64Key: string) {
  try {
    const algorithm = 'aes-256-cbc';
    const inputEncoding = 'base64';
    const outputEncoding = 'utf8';

    const key = base64Decode(base64Key);
    const encryptedData = base64Decode(base64Data);

    // Split IV and the encrypted text
    const iv = encryptedData.slice(0, 16); // AES.block_size of 16 bytes
    const ct = encryptedData.slice(16);

    const decipher = crypto.createDecipheriv(algorithm, key, iv);

    // @ts-ignore
    let decrypted = decipher.update(ct, inputEncoding, outputEncoding);
    // @ts-ignore
    decrypted += decipher.final('utf8');

    return decrypted as string;
  } catch (err) {
    Sentry.withScope((scope) => {
      scope.captureException(err);
      scope.setLevel('error');
      scope.captureMessage('Erreur lors de la decryption du code');
    });
    return null;
  }
}

// from unencrypted string in base64 to encrypted base64
export function encrypt(dataToEncrypt: string, base64Key: string): string {
  const algorithm = 'aes-256-cbc';
  const secretBuffer = Buffer.from(base64Key, 'base64');
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, secretBuffer, iv);
  const encrypted = cipher.update(dataToEncrypt, 'utf8');
  const final = cipher.final();
  const result = Buffer.concat([iv, encrypted, final]);

  return result.toString('base64');
}
