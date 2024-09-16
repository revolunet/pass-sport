'use client';
import crispChatBotSVG from '@/images/crisp-chatbot.svg';
import Image from 'next/image';
import styles from './crisp.module.scss';
import { SKIP_LINKS_ID } from '../../constants/skip-links';
import { useEnhanceCrispChatBox } from '../../hooks/accessibility/use-enhance-crisp-chat-box';

export const Crisp = () => {
  useEnhanceCrispChatBox();
  return (
    <button
      id={`${SKIP_LINKS_ID.chatbot}`}
      className={styles['crisp-image-wrapper']}
      onClick={() => {
        if (window.tarteaucitron && window.tarteaucitron.userInterface) {
          window.tarteaucitron.userInterface.openPanel();
        }
      }}
    >
      <Image
        alt="Accepter les cookies Crisp chat et échanger avec une personne du support utilisateur"
        className={styles['crisp-img']}
        src={crispChatBotSVG}
      />
    </button>
  );
};

export default Crisp;
