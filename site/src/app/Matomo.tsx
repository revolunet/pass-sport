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

  const pathname = usePathname();
  const [previousURL, setPreviousURL] = useState<string>();

  // track basic navigation
  useEffect(() => {
    if (!pathname) return;

    if (previousURL) {
      push(['setReferrerUrl', previousURL]);
    }

    let updatedPathName = pathname.concat();
    let regex = /\/code\/scan\/.*/;

    if (regex.test(pathname)) {
      updatedPathName = pathname.replace(regex, `/code/scan/24-xxxx-xxxx`);
    }

    push(['setCustomUrl', updatedPathName]);
    push(['trackPageView']);

    setPreviousURL(updatedPathName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return <></>;
}
