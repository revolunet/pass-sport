import { styles } from '@/app/v2/test-eligibilite/components/step-one-form/styles.module.scss';
import { boolean } from 'zod';
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
