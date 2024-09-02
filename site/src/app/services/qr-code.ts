import {
  ConfirmResponseBody,
  EnhancedConfirmResponseBody,
  EnhancedConfirmResponseBodyItem,
} from 'types/EligibilityTest';
import * as Sentry from '@sentry/nextjs';
import { encrypt } from '@/utils/decryption';
import { formatDate } from '@/utils/date';

export const addQrCodeToConfirmResponse = (
  responseBody: ConfirmResponseBody,
): EnhancedConfirmResponseBody => {
  const qrcodeUrl = buildQRCodeUrl(responseBody);
  const enhancedEligible: EnhancedConfirmResponseBodyItem = { ...responseBody[0], qrcodeUrl };

  return [enhancedEligible];
};

/**
 * Build the complete url found in the qr code
 */
export const buildQRCodeUrl = (data: ConfirmResponseBody) => {
  try {
    if (!process.env.QR_CODE_BASE_URL) {
      throw new Error('Error : QR_CODE_BASE_URL missing');
    }

    if (!process.env.BASE_64_KEY) {
      throw new Error('BASE_64_KEY missing');
    }

    const queryToEncrypt = buildQuery(data);

    const encryptedQuery = encrypt(queryToEncrypt, process.env.BASE_64_KEY);

    return `${process.env.QR_CODE_BASE_URL}#${encodeURIComponent(encryptedQuery)}`;
  } catch (e) {
    Sentry.withScope((scope) => {
      scope.captureException(e);
      scope.setLevel('error');
      scope.captureMessage("Erreur lors de la construction de l'URL du qr code");
    });
    return '';
  }
};

const capitalizeFirstLetter = (text: string) => {
  const lowercase = text.toLowerCase();
  return lowercase[0].toUpperCase() + lowercase.slice(1);
};

export const buildQuery = (data: ConfirmResponseBody) => {
  const eligible = data[0];
  const { nom, prenom, genre, date_naissance, id_psp } = eligible;

  const query = new URLSearchParams();
  query.append('bp', capitalizeFirstLetter(prenom));
  query.append('bn', capitalizeFirstLetter(nom));
  query.append('bg', genre);
  query.append('bdn', formatDate(date_naissance));
  query.append('c', id_psp);

  return query.toString();
};
