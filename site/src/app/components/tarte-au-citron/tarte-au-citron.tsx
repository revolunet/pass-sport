'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { SKIP_LINKS_ID } from '@/app/constants/skip-links';
import { useHandleCrispPlaceholderButton } from '@/app/components/tarte-au-citron/hooks/use-handle-crisp-placeholder-button';
import {
  PASS_SPORT_URI,
  SUPPORT_COOKIE_KEY,
  SUPPORT_COOKIE_NAME,
  SUPPORT_COOKIE_READ_MORE_URL,
  WAITING_STATE,
} from '@/app/constants/cookie-manager';

export const TarteAuCitron = () => {
  const domain = process.env.NEXT_PUBLIC_TARTEAUCITRON_DOMAIN;
  const pathname = usePathname();

  useHandleCrispPlaceholderButton();

  useEffect(() => {
    const isModalRendered = document.getElementById('tarteaucitron');
    const tarteaucitron = window.tarteaucitron;

    if (tarteaucitron && isModalRendered) {
      tarteaucitron.triggerJobsAfterAjaxCall?.();
    }
  }, [pathname]);

  if (!domain) {
    console.error('Environment variable NEXT_PUBLIC_TARTEAUCITRON_DOMAIN is missing');
    return null;
  }

  return (
    <Script
      src={`https://tarteaucitron.io/load.js?domain=${domain}&uuid=19b13211bfb1bd1efd6f804a26674ed864265114`}
      strategy="afterInteractive"
      onLoad={() => {
        const tac = window.tarteaucitron;

        if (tac) {
          tac.services[SUPPORT_COOKIE_KEY] = {
            key: SUPPORT_COOKIE_KEY,
            type: 'support',
            name: SUPPORT_COOKIE_NAME,
            needConsent: true,
            cookies: [SUPPORT_COOKIE_KEY],
            defaultState: WAITING_STATE,
            readmoreLink: SUPPORT_COOKIE_READ_MORE_URL,
            uri: PASS_SPORT_URI,
            js: () => {},
            fallback: () => {},
          };

          tac?.initEvents.loadEvent(false);
        }

        window.addEventListener('tac.root_available', function () {
          const tac = window.tarteaucitron;

          if (tac) {
            (tac.job = tac.job || []).push(SUPPORT_COOKIE_KEY);
          }
        });

        // Handle crisp placeholder button
        // When the consent is not given, the placeholder should appear, otherwise it should be hidden
        // Need a timeout in order to wait for the state to be populated...
        setTimeout(() => {
          if (tac?.state?.crisp) {
            const el = document.getElementById(SKIP_LINKS_ID.chatbot);

            if (el) {
              el.style.display = 'none';
            }
          }
        }, 500);
      }}
    />
  );
};

export default TarteAuCitron;
