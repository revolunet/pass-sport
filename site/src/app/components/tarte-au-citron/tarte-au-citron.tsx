'use client';

import Script from 'next/script';

export const TarteAuCitron = () => {
  return (
    <Script
      src="https://tarteaucitron.io/load.js?domain=localhost%2Fv2&uuid=19b13211bfb1bd1efd6f804a26674ed864265114"
      strategy="beforeInteractive"
    />
  );
};

export default TarteAuCitron;
