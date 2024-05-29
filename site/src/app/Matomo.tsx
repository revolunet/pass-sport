'use client';
import init, { push } from '@socialgouv/matomo-next';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

let IS_MATOMO_INITIALIZED: boolean = false;

export default function Matomo() {
  // Matomo init
  useEffect(() => {
    if (!IS_MATOMO_INITIALIZED) {
      init({
        url: process.env.NEXT_PUBLIC_MATOMO_URL || '',
        siteId: process.env.NEXT_PUBLIC_MATOMO_SITE_ID || '',
      });
    }
    IS_MATOMO_INITIALIZED = true;
  }, []);

  const location = usePathname();
  const [previousURL, setPreviousURL] = useState<string>();

  // track basic navigation
  useEffect(() => {
    if (previousURL) {
      push(['setReferrerUrl', previousURL]);
    }

    const { pathname } = window.location;

    let updatedPathName = pathname;
    let regex = /\/v2\/code\/scan\/.*/;

    if (regex.test(pathname)) {
      updatedPathName = pathname.replace(regex, `/v2/code/scan/24-xxxx-xxxx`);
    }

    push(['setCustomUrl', updatedPathName]);
    push(['trackPageView']);

    setPreviousURL(window.location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return <></>;
}
