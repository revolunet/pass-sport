import { useEffect } from 'react';

// todo: To refactor if time permits
export function useEnhanceCookieManagerAccessibility() {
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      const { body } = document;

      const img = body.querySelector('img[title="Cookies (fenêtre modale)"]');
      const button = body.querySelector('button[id="tarteaucitronManager"]');
      const button2 = body.querySelector('button[id="tarteaucitronBack"]');
      const info = body.querySelector('div[id="tarteaucitronInfo"]');
      const othersSection = body.querySelector(
        'li[id="tarteaucitronServicesTitle_other"] > div[class="tarteaucitronTitle"]',
      );

      const duplicatedPanelCookie = body.querySelector('div#tac_title.tac_visually-hidden');

      if (img) {
        img.removeAttribute('title');
      }

      if (button) {
        button.removeAttribute('aria-label');
        button.removeAttribute('title');
      }

      if (button2) {
        button2.removeAttribute('title');
        button2.setAttribute('aria-label', 'Fermer la modale');
      }

      if (info) {
        const newNode = document.createElement('p');
        newNode.setAttribute('id', 'tarteaucitronInfo');
        newNode.textContent = info.textContent;

        info.replaceWith(newNode);
      }

      if (othersSection) {
        othersSection.classList.add('tarteaucitronHidden');
      }

      if (duplicatedPanelCookie) {
        duplicatedPanelCookie.remove();
      }
    });

    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
