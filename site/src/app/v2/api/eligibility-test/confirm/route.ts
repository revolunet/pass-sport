import { buildLCAConfirmUrl } from '@/app/services/eligibility-test';
import { addQrCodeToConfirmResponse } from '@/app/services/qr-code';
import { NextResponse } from 'next/server';
import {
  ConfirmPayload,
  ConfirmResponseBody,
  ConfirmResponseErrorBody,
} from 'types/EligibilityTest';
import { zfd } from 'zod-form-data';
import z from 'zod';
import * as Sentry from '@sentry/nextjs';

const schema = zfd.formData({
  id: z.string(),
  situation: z.string(),
  organisme: z.string(),
  recipientLastname: z.string().optional(),
  recipientFirstname: z.string().optional(),
  recipientCafNumber: z.string().optional(),
  recipientBirthPlace: z.string().optional(),
  recipientBirthDate: z.string().optional(),
  recipientBirthCountry: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const payload: ConfirmPayload = schema.parse(formData);

    const url: URL = buildLCAConfirmUrl(payload);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Request to LCA api on /confirm has failed. Response status is ${response.status}. Response body is ${await response.json()}`,
      );
    }

    const responseBody = (await response.json()) as ConfirmResponseBody | ConfirmResponseErrorBody;

    if ('message' in responseBody) {
      Sentry.withScope((scope) => {
        scope.setLevel('warning');
        scope.setExtra('responseBody', responseBody);
        scope.captureMessage('Unexpected response on LCA POST api/eligibility-test/confirm');
      });
      return NextResponse.json(responseBody);
    }

    const enhancedResponse = addQrCodeToConfirmResponse(responseBody);
    return NextResponse.json(enhancedResponse);
  } catch (e) {
    Sentry.withScope((scope) => {
      scope.setLevel('error');
      scope.captureMessage('Technical error on LCA POST api/eligibility-test/confirm');
      scope.captureException(e);
    });
    return NextResponse.json('Internal error', { status: 500 });
  }
}
