'use client';
import crispChatBotSVG from '@/images/crisp-chatbot.svg';
import Image from 'next/image';
import styles from './crisp.module.scss';
import { SKIP_LINKS_ID } from '../../constants/skip-links';

export const Crisp = () => {
  return (
    <button
      id={`${SKIP_LINKS_ID.chatbot}`}
      className={styles['crisp-image-wrapper']}
      aria-label="Accepter les cookies Crisp et tchater avec une personne du support utilisateur"
      onClick={() => {
        if (window.tarteaucitron && window.tarteaucitron.userInterface) {
          window.tarteaucitron.userInterface.openPanel();
        }
      }}
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
