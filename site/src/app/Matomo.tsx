'use client';
import init, { push } from '@socialgouv/matomo-next';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function Matomo() {
  const isInitialLoad = useRef(true);

  const transformQrCodeUrl = (): string => {
    const { pathname } = window.location;

    let updatedPathName = pathname;
    let regex = /\/code\/scan\/.*/;

    if (regex.test(pathname)) {
      updatedPathName = pathname.replace(regex, `/code/scan/24-xxxx-xxxx`);
    }
    return updatedPathName;
  };

  // Initialize matomo. init() will also send the current page viewed to matomo server
  useEffect(() => {
    init({
      url: process.env.NEXT_PUBLIC_MATOMO_URL || '',
      siteId: process.env.NEXT_PUBLIC_MATOMO_SITE_ID || '',
      onInitialization: () => {
        push(['setCustomUrl', transformQrCodeUrl()]);
      },
      disableCookies: true,
    });
  }, []);

  const location = usePathname();
  const [previousURL, setPreviousURL] = useState<string>();

  // Track navigation from one page to another for SPA
  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
    } else {
      if (previousURL) {
        push(['setReferrerUrl', previousURL]);
      }

      let updatedPathName = transformQrCodeUrl();
      push(['setCustomUrl', updatedPathName]);
      push(['trackPageView']);

      setPreviousURL(updatedPathName);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return <></>;
}
