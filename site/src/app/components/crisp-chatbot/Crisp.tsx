'use client';
import crispChatBotSVG from '@/images/crisp-chatbot.svg';
import Image from 'next/image';
import styles from './crisp.module.scss';

export const Crisp = () => {
  const openAxeptio = () => {
    window.axeptioSDK && window.axeptioSDK.requestConsent('crisp');
  };
  return (
    <button
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
