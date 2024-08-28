'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const TarteAuCitron = () => {
  const domain = process.env.NEXT_PUBLIC_TARTEAUCITRON_DOMAIN;
  const pathname = usePathname();

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
        window.tarteaucitron?.initEvents.loadEvent(false);
      }}
    />
  );
};

export default TarteAuCitron;
