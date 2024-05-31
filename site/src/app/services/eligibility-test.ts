import {
  ConfirmPayload,
  ConfirmResponseBody,
  ConfirmResponseErrorBody,
} from 'types/EligibilityTest';

import * as Sentry from '@sentry/nextjs';
import { addQrCodeToConfirmResponse } from './qr-code';

export const buildLCAConfirmUrl = (data: ConfirmPayload): URL => {
  const domain = process.env.NEXT_PUBLIC_LCA_API_URL;

  if (!domain) {
    throw new Error('Error: NEXT_PUBLIC_LCA_API_URL is not set');
  }

  const params = new URLSearchParams();
  params.append('id', data.id);
  params.append('situation', data.situation);
  params.append('organisme', data.organisme);

  const allocataireName = data.recipientLastname;
  if (allocataireName) {
    params.append('allocataireName', allocataireName);
  }

  const allocataireSurname = data.recipientFirstname;
  if (allocataireSurname) {
    params.append('allocataireSurname', allocataireSurname);
  }

  const matricule = data.recipientCafNumber;
  if (matricule) {
    params.append('matricule', matricule);
  }

  const recipientBirthPlace = data.recipientBirthPlace;
  if (recipientBirthPlace) {
    params.append('codeInseeBirth', recipientBirthPlace);
  }

  const recipientBirthDate = data.recipientBirthDate;
  if (recipientBirthDate) {
    params.append('allocataireBirthDate', recipientBirthDate);
  }

  const recipientBirthCountry = data.recipientBirthCountry;
  if (recipientBirthCountry) {
    params.append('codeIso', recipientBirthCountry);
  }

  const baseUrl = `${domain}/gw/psp-server/beneficiaires/confirm`;
  const url = new URL(baseUrl);
  url.search = params.toString();

  return url;
};

export const fetchQrCode = async (
  payload: ConfirmPayload,
): Promise<ConfirmResponseBody | ConfirmResponseErrorBody> => {
  const url: URL = buildLCAConfirmUrl(payload);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Request to LCA api on /confirm has failed. Response status is ${response.status}. Response body is ${JSON.stringify(await response.json())}`,
    );
  }
  const responseBody = (await response.json()) as ConfirmResponseBody | ConfirmResponseErrorBody;

  if ('message' in responseBody) {
    Sentry.withScope((scope) => {
      scope.setLevel('warning');
      scope.setExtra('responseBody', responseBody);
      scope.captureMessage('Unexpected response on LCA POST api/eligibility-test/confirm');
    });
    return responseBody;
  }
  if (responseBody instanceof Array && responseBody.length === 0) {
    return responseBody;
  }
  const enhancedResponse = addQrCodeToConfirmResponse(responseBody);
  return enhancedResponse;
};
