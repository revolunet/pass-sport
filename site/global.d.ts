// global.d.ts

export {};

declare global {
  export interface Window {
    axeptioSDK?: AxeptioSDK;
    axeptioSettings?: {
      clientId: string;
      cookiesVersion: string;
    };
    _axcb?: ((sdk: AxeptioSDK) => void)[];
  }

  export interface Element {
    style: {
      display: 'none' | 'inherit' | 'block';
    };
  }

  export interface HTMLElement {
    async: boolean;
    src: string;
  }
}

interface AxeptioSDK {
  on(event: string, callback: (choices: Record<string, boolean>) => void): void;
  requestConsent(vendor: string);
}
