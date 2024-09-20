'use client';

import SkipLinks from '@codegouvfr/react-dsfr/SkipLinks';
import { SKIP_LINKS_ID } from '@/app/constants/skip-links';
import React from 'react';
import { useIsProVersion } from '@/app/hooks/use-is-pro-version';
import { usePathname } from 'next/navigation';

const SkipLinksWrapper = () => {
  const isProVersion = useIsProVersion();
  const pathname = usePathname();

  const eligibilityTestSkipLink =
    pathname &&
    [
      !isProVersion ? '/v2/accueil' : '',
      '/v2/tout-savoir-sur-le-pass-sport',
      '/v2/trouver-un-club',
      '/v2/une-question',
      '/v2/politique-de-confidentialite',
      '/v2/mentions-legales',
      '/v2/reglement-du-jeu-concours-numero-1-pass-sport',
      '/v2/reglement-du-jeu-concours-numero-2-pass-sport',
    ].includes(pathname)
      ? {
          label: "Test d'éligibilité",
          anchor: `#${SKIP_LINKS_ID.eligibilityTestButton}`,
        }
      : null;

  const findAClubSkipLink =
    pathname && ['/v2/tout-savoir-sur-le-pass-sport', '/v2/accueil'].includes(pathname)
      ? {
          label: 'Trouver un club',
          anchor: `#${SKIP_LINKS_ID.findClubButton}`,
        }
      : null;

  const contactUsLink =
    pathname && ['/v2/une-question', '/v2/pro/une-question'].includes(pathname)
      ? {
          label: 'Nous contacter par mail',
          anchor: `#${SKIP_LINKS_ID.contactUsByMail}`,
        }
      : null;

  const handleSkipLinkClick = (e: MouseEvent) => {
    if (!(e.target as HTMLAnchorElement)?.href.includes(`#${SKIP_LINKS_ID.chatbot}`)) {
      return;
    }

    if (window.tarteaucitron?.state?.crisp) {
      // Crisp cookies already accepted
      focusOnCrispMessageTextBox();
    } else {
      // Crisp cookies not accepted
      focusOnTacAcceptCrispCookies();
    }

    function focusOnTacAcceptCrispCookies() {
      // retrieve fake image
      const el: HTMLElement | null = document?.querySelector(`#${SKIP_LINKS_ID.chatbot}`);

      // click on crisp fake image to open cookie managment
      el?.click();
    }

    function focusOnCrispMessageTextBox() {
      // open chatbox
      const crispChatBox: HTMLElement | null = document.querySelector(
        'a[aria-label="Ouvrir le chat"]',
      );
      if (crispChatBox) {
        crispChatBox.click();
      }

      // putting the focus at the end of the event loop
      setTimeout(() => {
        const textarea: HTMLElement | null = document.querySelector(
          '#crisp-chatbox textarea[name="message"]',
        );
        textarea?.focus();
      }, 0);
    }
  };

  return (
    <SkipLinks
      links={[
        {
          label: 'Aller au contenu',
          anchor: `#${SKIP_LINKS_ID.mainContent}`,
        },
        ...(eligibilityTestSkipLink ? [eligibilityTestSkipLink] : []),
        ...(findAClubSkipLink ? [findAClubSkipLink] : []),
        ...(contactUsLink ? [contactUsLink] : []),
        { label: 'Ouvrir le tchat', anchor: `#${SKIP_LINKS_ID.chatbot}` },
        {
          label: 'Pied de page',
          anchor: `#${SKIP_LINKS_ID.footer}`,
        },
      ]}
      // @ts-ignore
      onClick={(e: MouseEvent) => handleSkipLinkClick(e)}
    />
  );
};

export default SkipLinksWrapper;
