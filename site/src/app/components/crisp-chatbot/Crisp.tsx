'use client';
import crispChatBotSVG from '@/images/crisp-chatbot.svg';
import Image from 'next/image';
import { useEffect } from 'react';
import { Choice, CookiesCompleteChoice, OverlayOpenCookiesChoice } from '../../../../global';
import styles from './crisp.module.scss';

export const Crisp = () => {
  useEffect(() => {
    initAxeptio();
    registerAxeptioEvents();
  });

  const initAxeptio = (): void => {
    if (window.axeptioSettings) {
      return;
    }

    // Configuration axeptio
    window.axeptioSettings = {
      clientId: '6662b7369f1ba1b27006fc0a',
      cookiesVersion: 'pass sport-fr-EU_Cp',
    };

    // Chargement asynchrone du script axeptio
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

  const initCrisp = (): void => {
    if (window.CRISP_WEBSITE_ID) {
      return;
    }

    // Configuration pour Crisp
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = '4b9daa5d-5805-4ad9-9a8e-4cfc112b11e5';

    // Chargement asynchrone du script Crisp
    (function (d: Document, s: string) {
      const t = d.getElementsByTagName(s)[0];
      const e = d.createElement(s);
      e.async = true;
      e.src = 'https://client.crisp.chat/l.js';
      if (t.parentNode) {
        t.parentNode.insertBefore(e, t);
      }
    })(document, 'script');

    window.$crisp.push(
      onCrispEventUpdateAria('session:loaded', 'Ouvrir le chat', 'Ouvrir le tchat botte'),
      onCrispEventUpdateAria('chat:opened', 'Fermer le chat', 'Fermer le tchat botte'),
      onCrispEventUpdateAria('chat:closed', 'Ouvrir le chat', 'Ouvrir le tchat botte'),
    );
  };

  const onCrispEventUpdateAria = (
    event: string,
    crispAria: string,
    betterAria: string,
  ): [string, string, () => void] => {
    return [
      'on',
      event,
      () => {
        setTimeout(() => {
          const chatBotButton = document.querySelector(`a[aria-label="${crispAria}"]`);
          chatBotButton?.setAttribute('aria-label', betterAria);
        }, 500);
      },
    ];
  };

  const focusOnVendorConsentToggle = (onOverlayOpenCookies: OverlayOpenCookiesChoice) => {
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
  };
  // init crisp if crisp cookie accepted
  const initCrispIfConsentOk = (onCompleteChoice: CookiesCompleteChoice) => {
    if (onCompleteChoice['crisp']) {
      initCrisp();
    }
  };

  // hide or reveal on given vendor consent choices
  const toggleVendorConsentButton = (onCompleteChoice: CookiesCompleteChoice) => {
    document.querySelectorAll('[data-hide-on-vendor-consent]').forEach((el) => {
      const vendor = el.getAttribute('data-hide-on-vendor-consent');
      el.style.display = vendor && onCompleteChoice[vendor] ? 'none' : 'inherit';
    });
  };

  const registerAxeptioEvents = () => {
    if (!window._axcb) {
      window._axcb = [];
    }
    window._axcb.push(function (sdk) {
      sdk.on('cookies:complete', function (choices: Choice) {
        const onCompleteChoice = choices as CookiesCompleteChoice;
        toggleVendorConsentButton(onCompleteChoice);
        initCrispIfConsentOk(onCompleteChoice);
      });

      sdk.on('overlayOpenCookies', function (choices: Choice) {
        const onOverlayOpenCookies = choices as OverlayOpenCookiesChoice;
        focusOnVendorConsentToggle(onOverlayOpenCookies);
      });
    });
  };

  // open chat only once
  const openChatIfCrispConsent = (onCompleteChoice: CookiesCompleteChoice) => {
    if (onCompleteChoice['crisp']) {
      window.$crisp?.push(['do', 'chat:open']);
    }
  };

  const requestConsentAndOpenChat = () => {
    if (window.axeptioSDK) {
      window.axeptioSDK.requestConsent('crisp');
      window.axeptioSDK.on('cookies:complete', function (choices: Choice) {
        const onCompleteChoice = choices as CookiesCompleteChoice;
        openChatIfCrispConsent(onCompleteChoice);
      });
    }
  };
  return (
    <button
      id="crisp-chatbot"
      data-hide-on-vendor-consent="crisp"
      onClick={requestConsentAndOpenChat}
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
