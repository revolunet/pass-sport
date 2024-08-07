'use client';
import crispChatBotSVG from '@/images/crisp-chatbot.svg';
import Image from 'next/image';
import styles from './crisp.module.scss';

export const Crisp = () => {
  const openAxeptio = () => {
    if (window.axeptioSDK) {
      window.axeptioSDK.requestConsent('crisp');
      if (!window._axcb) {
        window._axcb = [];
      }

      window._axcb.push(function (sdk) {
        sdk.on('cookies:complete', function (choices) {
          if (choices['crisp']) {
            window.$crisp?.push(['do', 'chat:open']);
          }
        });

        sdk.on('overlayOpenCookies', function (choices) {
          setTimeout(() => {
            document
              .getElementById('axeptio_overlay')
              // @ts-ignore
              ?.firstChild?.shadowRoot.querySelector('#crisp-normal-switch')
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
      aria-label="Tchater avec une personne du support"
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
