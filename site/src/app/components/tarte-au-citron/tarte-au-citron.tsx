'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { SKIP_LINKS_ID } from '@/app/constants/skip-links';
import { useHandleCrispPlaceholderButton } from '@/app/components/tarte-au-citron/hooks/use-handle-crisp-placeholder-button';

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
      src={`https://tarteaucitron.io/load.js?domain=${domain}&uuid=87ec01317bc9206511e49d480f832148b39f59e6`}
      strategy="afterInteractive"
      onLoad={() => {
        const tac = window.tarteaucitron;

        if (tac) {
          tac?.initEvents.loadEvent(false);
        }

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
