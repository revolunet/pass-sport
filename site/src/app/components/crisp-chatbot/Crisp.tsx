'use client';
import crispChatBotSVG from '@/images/crisp-chatbot.svg';
import Image from 'next/image';
import styles from './crisp.module.scss';
import { useEffect } from 'react';
import { Choice, CookiesCompleteChoice, OverlayOpenCookiesChoice } from '../../../../global';

export const Crisp = () => {
  useEffect(() => {
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
        if (t.parentNode) {
          t.parentNode.insertBefore(e, t);
        }
      })(document, 'script');
    }
  });

  const openAxeptio = () => {
    if (window.axeptioSDK) {
      window.axeptioSDK.requestConsent('crisp');
      if (!window._axcb) {
        window._axcb = [];
      }

      window._axcb.push(function (sdk) {
        sdk.on('cookies:complete', function (choices: Choice) {
          const onCompleteChoice = choices as CookiesCompleteChoice;
          if (onCompleteChoice['crisp']) {
            window.$crisp?.push(['do', 'chat:open']);
          }
        });

        sdk.on('overlayOpenCookies', function (choices: Choice) {
          const onOverlayOpenCookies = choices as OverlayOpenCookiesChoice;
          // add timeout to wait for overlay to be visible
          setTimeout(() => {
            document
              .getElementById('axeptio_overlay')
              // @ts-ignore
              ?.firstChild?.shadowRoot.querySelector(
                `#${onOverlayOpenCookies.highlightVendor}-normal-switch`,
              )
              ?.focus();
          }, 70);
        });
      });
    }
  };
  return (
    <button
      id="crisp-chatbot"
      data-hide-on-vendor-consent="crisp"
      onClick={openAxeptio}
      className={styles['crisp-image-wrapper']}
      aria-label="Accepter les cookies Crisp et tchater avec une personne du support utilisateur"
    >
      <Image
        className={styles['crisp-img']}
        src={crispChatBotSVG}
        alt="Tchater avec une personne du support"
      />
    </button>
  );
};

export default Crisp;
