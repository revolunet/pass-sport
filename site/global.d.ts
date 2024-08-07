// global.d.ts

export {};

declare global {
  export interface Window {
    $crisp?: any[];
    CRISP_WEBSITE_ID: string;
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

export type CookiesCompleteChoice = Record<string, boolean>;

export interface OverlayOpenCookiesChoice {
  currentStepIndex: number;
  highlightVendor: 'vimeo' | 'crisp';
  steps: any[];
}

export type Choice = CookiesCompleteChoice | OverlayOpenCookiesChoice;

interface AxeptioSDK {
  on(event: string, callback: (choices: Choice) => void): void;
  requestConsent(vendor: string): boolean;
  userPreferencesManager: {
    choices: CookiesCompleteChoice;
  };
}
