'use client';
import init from '@socialgouv/matomo-next';
import { useEffect } from 'react';
import { cache } from 'react';

export default function Matomo() {
  useEffect(() => {
    // prevent matomo init more than once
    cache(() =>
      init({
        url: process.env.NEXT_PUBLIC_MATOMO_URL || '',
        siteId: process.env.NEXT_PUBLIC_MATOMO_SITE_ID || '',
      }),
    );
  }, []);
  return <></>;
}
