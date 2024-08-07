'use client';

import { useEffect } from 'react';
import { CookiesCompleteChoice } from '../../../global';

export function useAxeptio({ vimeoURL, videoId }: { vimeoURL: string; videoId: string }) {
  const initAxeptio = (): void => {
    if (window.axeptioSettings) {
      return;
    }

    // Configuration axeptio
    window.axeptioSettings = {
      clientId: '6662b7369f1ba1b27006fc0a',
      cookiesVersion: 'pass sport-fr-EU_Cp',
    };

    // Chargement asynchrone du script Axeptio
    (function (d: Document, s: string) {
      const t = d.getElementsByTagName(s)[0];
      const e = d.createElement(s);
      e.async = true;
      e.src = 'https://static.axept.io/sdk-slim.js';
      if (t.parentNode) {
        t.parentNode.insertBefore(e, t);
      }
    })(document, 'script');
  };

  const toggleVimeoIframeSrc = (onCompleteChoice: CookiesCompleteChoice) => {
    document.querySelectorAll(`iframe#${videoId}[data-requires-vendor-consent]`).forEach((el) => {
      const vendor = el.getAttribute('data-requires-vendor-consent');
      if (vendor && onCompleteChoice[vendor]) {
        el.setAttribute('src', vimeoURL);
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    });
  };

  // hide or reveal on given vendor consent choices
  const toggleVendorConsentButton = (onCompleteChoice: CookiesCompleteChoice) => {
    document.querySelectorAll('[data-hide-on-vendor-consent]').forEach((el) => {
      const vendor = el.getAttribute('data-hide-on-vendor-consent');
      el.style.display = vendor && onCompleteChoice[vendor] ? 'none' : 'inherit';
    });
  };

  const registerAxeptioEvent = () => {
    if (!window._axcb) {
      window._axcb = [];
    }

    window._axcb.push(function (sdk) {
      sdk.on('cookies:complete', function (choices) {
        const onCompleteChoice = choices as CookiesCompleteChoice;
        toggleVendorConsentButton(onCompleteChoice);
        toggleVimeoIframeSrc(onCompleteChoice);
      });
    });
  };

  useEffect(() => {
    initAxeptio();
    registerAxeptioEvent();
  });
}
