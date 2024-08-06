'use client';

import { useEffect } from 'react';

export function useAxeptio({
  vimeoURL,
  videoId,
  nonce,
}: {
  vimeoURL: string;
  videoId: string;
  nonce?: string;
}) {
  useEffect(() => {
    const initCrisp = (): void => {
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = '4b9daa5d-5805-4ad9-9a8e-4cfc112b11e5';
      (function (d: Document, s: string) {
        const t = d.getElementsByTagName(s)[0];
        const e = d.createElement(s);
        e.async = true;
        e.src = 'https://client.crisp.chat/l.js';
        if (t.parentNode) {
          t.parentNode.insertBefore(e, t);
        }
      })(document, 'script');
    };

    const initAxeptio = (): void => {
      if (!window.axeptioSettings) {
        // Définition des paramètres de configuration pour Axeptio
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
          e.nonce = nonce;
          if (t.parentNode) {
            t.parentNode.insertBefore(e, t);
          }
        })(document, 'script');
      }

      if (!window._axcb) {
        window._axcb = [];
      }

      window._axcb.push(function (sdk) {
        sdk.on('cookies:complete', function (choices) {
          // hide on given vendor consent choices
          document.querySelectorAll('[data-hide-on-vendor-consent]').forEach((el) => {
            const vendor = el.getAttribute('data-hide-on-vendor-consent');
            el.style.display = vendor && choices[vendor] ? 'none' : 'inherit';
          });

          // add vimeo iframe src
          document
            .querySelectorAll(`iframe#${videoId}[data-requires-vendor-consent]`)
            .forEach((el) => {
              const vendor = el.getAttribute('data-requires-vendor-consent');
              if (vendor && choices[vendor]) {
                el.setAttribute('src', vimeoURL);
                el.style.display = 'block';
              } else {
                el.style.display = 'none';
              }
            });

          // init crisp on accept
          if (!!choices['crisp']) {
            initCrisp();
            if (window.$crisp) {
              window.$crisp.push(['do', 'chat:open']);
            }
          }
        });
      });
    };

    initAxeptio();
  });
}
