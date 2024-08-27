'use client';

import Script from 'next/script';

export const TarteAuCitron = () => {
  const domain = process.env.NEXT_PUBLIC_TARTEAUCITRON_DOMAIN;
  if (!domain) {
    console.error('Environment variable NEXT_PUBLIC_TARTEAUCITRON_DOMAIN is missing');
    return null;
  }

  return (
    <Script
      src={`https://tarteaucitron.io/load.js?domain=${domain}&uuid=19b13211bfb1bd1efd6f804a26674ed864265114`}
      strategy="beforeInteractive"
    />
  );
};

export default TarteAuCitron;
