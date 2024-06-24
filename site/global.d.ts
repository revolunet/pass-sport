// global.d.ts

interface AxeptioSDK {
  on(event: string, callback: (choices: Record<string, boolean>) => void): void;
  requestConsent(vendor: string);
}

interface Window {
  axeptioSDK?: AxeptioSDK;
  axeptioSettings?: {
    clientId: string;
    cookiesVersion: string;
  };
  _axcb?: ((sdk: AxeptioSDK) => void)[];
}
