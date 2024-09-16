import { useEffect } from 'react';

export function useEnhanceCrispChatBox() {
  const replaceSpanByPElement = (document: Document, element: Element | null) => {
    if (!element) {
      return;
    }

    // Create a new <span> element
    const pElement = document.createElement('p');

    // Copy the class names from the <p> to the <span>
    pElement.className = element.className;

    // Transfer the inner content (text or HTML) from the <p> to the <span>
    pElement.innerHTML = element.innerHTML;

    // Replace the <p> with the <span>
    element.replaceWith(pElement);
  };

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      const { body } = document;

      const spanElements = [
        'span.cc-raag8.cc-co79q.cc-361jl', // "Des question ? Discutons !"
        'span.cc-pprhn cc-co79q cc-olo99', // "Temps d'attente"
        'span.cc-5fqy2 cc-361jl', // "Réseau hors-ligne. Reconnexion."
        'span.cc-svcf5 cc-olo99', // "Aucun message ne peut être échangé pour le moment"
        'span.cc-sy17c cc-361jl cc-co79q', // "Articles fréquemment lus"
        'span.cc-dvx9d', // "Comment puis-je vous aider à propos de pass Sport ?"
      ];
      spanElements.forEach((e) => replaceSpanByPElement(document, body.querySelector(e)));

      const helpdeskFormElement = document.querySelector(
        'form[name="form_helpdesk"] input[name="helpdesk_search"]',
      );

      if (helpdeskFormElement) {
        helpdeskFormElement.setAttribute('aria-label', "Trouver un article d'aide");
      }
    });

    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    }

    return () => observer.disconnect();
  }, []);
}
