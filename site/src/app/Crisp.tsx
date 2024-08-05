'use client';

import { useEffect } from 'react';

export const Crisp = () => {
  useEffect(() => {
    const initCrisp = (): void => {
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = '4b9daa5d-5805-4ad9-9a8e-4cfc112b11e5';
      (function (d: Document, s: string) {
        const t = d.getElementsByTagName(s)[0];
        const e = d.createElement(s);
        e.async = true;
        e.src = 'https://client.crisp.chat/l.js';
        if (t.parentNode) {
          t.parentNode.insertBefore(e, t);
        }
      })(document, 'script');
    };

    initCrisp();
  });
  return <></>;
};

export default Crisp;
