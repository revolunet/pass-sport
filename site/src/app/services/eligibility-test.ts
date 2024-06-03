import {
  ConfirmPayload,
  ConfirmResponseBody,
  ConfirmResponseErrorBody,
  SearchPayload,
  SearchResponseBody,
  SearchResponseErrorBody,
} from 'types/EligibilityTest';

import * as Sentry from '@sentry/nextjs';
import { addQrCodeToConfirmResponse } from './qr-code';

export const buildLCAConfirmUrl = (data: ConfirmPayload, isUsingApiV1: boolean): URL => {
  const domain = process.env.LCA_API_URL;

  if (!domain) {
    throw new Error('Error: LCA_API_URL is not set');
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

  const baseUrl = isUsingApiV1
    ? `${domain}/gw/psp-server/beneficiaires/confirm`
    : `${domain}/apim/api-asso-admin/passsport/beneficiaires/confirm`;

  const url = new URL(baseUrl);
  url.search = params.toString();

  return url;
};

export const buildLCASearchUrl = (data: SearchPayload, isUsingApiV1: boolean): URL => {
  const domain = process.env.LCA_API_URL;

  if (!domain) {
    throw new Error('Error: LCA_API_URL is not set');
  }

  const params = new URLSearchParams();
  params.append('nom', data.beneficiaryLastname);
  params.append('prenom', data.beneficiaryFirstname);
  params.append('dateNaissance', data.beneficiaryBirthDate);
  params.append('codeInsee', data.recipientResidencePlace);

  const baseUrl = isUsingApiV1
    ? `${domain}/gw/psp-server/beneficiaires/search`
    : `${domain}/apim/api-asso-admin/passsport/beneficiaires/search`;

  const url = new URL(baseUrl);
  url.search = params.toString();

  return url;
};

export const fetchQrCode = async (
  payload: ConfirmPayload,
): Promise<ConfirmResponseBody | ConfirmResponseErrorBody> => {
  const authenticationKey = process.env.LCA_API_KEY;

  if (!authenticationKey) {
    throw new Error('LCA authentication key is missing');
  }

  const url: URL = buildLCAConfirmUrl(payload, true);
  const url2 = buildLCAConfirmUrl(payload, false);

  const [response1, response2] = await Promise.all([
    fetch(url),
    fetch(url2, { headers: { 'X-Gravitee-Api-Key': authenticationKey } }),
  ]);

  if (!response2.ok && !response1.ok) {
    throw new Error(
      `Request to LCA api on /confirm has failed. API V1: Response status is ${response1.status}; Response body is ${JSON.stringify(await response1.json())}. API V2: Response status is ${response2.status}; Response body is ${JSON.stringify(await response2.json())}`,
    );
  }

  const response = !response2.ok ? response1 : response2;
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

export const fetchEligible = async (payload: SearchPayload) => {
  const authenticationKey = process.env.LCA_API_KEY;

  if (!authenticationKey) {
    throw new Error('LCA authentication key is missing');
  }

  const url: URL = buildLCASearchUrl(payload, true);
  const url2: URL = buildLCASearchUrl(payload, false);

  const [response1, response2] = await Promise.all([
    fetch(url),
    fetch(url2, { headers: { 'X-Gravitee-Api-Key': authenticationKey } }),
  ]);

  if (!response2.ok && !response1.ok) {
    throw new Error(
      `Request to LCA api on /search has failed. API V1: Response status is ${response1.status}; Response body is ${JSON.stringify(await response1.json())}. API V2: Response status is ${response2.status}; Response body is ${JSON.stringify(await response2.json())}`,
    );
  }

  const response = !response2.ok ? response1 : response2;
  const responseBody = (await response.json()) as SearchResponseBody | SearchResponseErrorBody;

  if ('message' in responseBody) {
    Sentry.withScope((scope) => {
      scope.setLevel('warning');
      scope.setExtra('responseBody', responseBody);
      scope.captureMessage('Unexpected response on LCA POST api/eligibility-test/search');
    });
  }

  return responseBody;
};
