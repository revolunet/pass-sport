import {
  ConfirmResponseBody,
  EnhancedConfirmResponseBody,
  EnhancedConfirmResponseBodyItem,
} from 'types/EligibilityTest';

export const addQrCodeToConfirmResponse = (
  responseBody: ConfirmResponseBody,
): EnhancedConfirmResponseBody => {
  const qrcodeUrl = 'fake-qrcode-url';
  const enhancedEligible: EnhancedConfirmResponseBodyItem = { ...responseBody[0], qrcodeUrl };

  return [enhancedEligible];
};
