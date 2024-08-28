// global.d.ts

export {};

declare global {
  export interface Window {
    $crisp?: any[];
    CRISP_WEBSITE_ID: string;
    tarteaucitron?: TarteAuCitronSDK;
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

interface TarteAuCitronSDK {
  userInterface?: {
    openPanel: () => {};
  };
  job?: string[];
  triggerJobsAfterAjaxCall?: VoidFunction;
  initEvents: { loadEvent: (isOldBrowser: boolean) => void };
}
