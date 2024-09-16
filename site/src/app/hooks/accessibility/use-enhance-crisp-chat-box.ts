import { useEffect } from 'react';

export function useEnhanceCrispChatBox() {
  const replaceSpanByPElement = (document: Document, element: Element | null) => {
    if (!element) {
      return;
    }

    const pElement = document.createElement('p');
    pElement.className = element.className;
    pElement.innerHTML = element.innerHTML;
    element.replaceWith(pElement);
  };

  const showInvisbleCloseButton = (body: HTMLElement) => {
    const invisbleCloseButton = body.querySelector('span.cc-9nfaa.cc-17cww');

    if (invisbleCloseButton) {
      // @ts-ignore
      invisbleCloseButton.style.setProperty('display', 'inherit', 'important');
    }
  };

  const addMissingAriaLabel = (body: HTMLElement) => {
    const helpdeskFormElement = body.querySelector(
      'form[name="form_helpdesk"] input[name="helpdesk_search"]',
    );

    if (helpdeskFormElement) {
      helpdeskFormElement.setAttribute('aria-label', "Trouver un article d'aide");
    }
  };

  const replaceSpansWithParagraph = (body: HTMLElement) => {
    const spanElements = [
      'span.cc-raag8.cc-co79q.cc-361jl', // "Des question ? Discutons !"
      'span.cc-pprhn cc-co79q cc-olo99', // "Temps d'attente"
      'span.cc-5fqy2 cc-361jl', // "Réseau hors-ligne. Reconnexion."
      'span.cc-svcf5 cc-olo99', // "Aucun message ne peut être échangé pour le moment"
      'span.cc-sy17c cc-361jl cc-co79q', // "Articles fréquemment lus"
      'span.cc-dvx9d', // "Comment puis-je vous aider à propos de pass Sport ?"
    ];
    spanElements.forEach((e) => replaceSpanByPElement(document, body.querySelector(e)));
  };

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      const { body } = document;

      replaceSpansWithParagraph(body); // https://www.notion.so/Audit-avec-tickets-notion-526ecd6d84764c0c84844c2e41071fe2?p=100d86210f7a8080b2f0eb52f62dd987&pm=s
      addMissingAriaLabel(body); // https://www.notion.so/Audit-avec-tickets-notion-526ecd6d84764c0c84844c2e41071fe2?p=100d86210f7a80489d28e2f132d6390d&pm=s
      showInvisbleCloseButton(body); // https://www.notion.so/Audit-avec-tickets-notion-526ecd6d84764c0c84844c2e41071fe2?p=100d86210f7a80489d28e2f132d6390d&pm=s
    });

    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    }

    return () => observer.disconnect();
  }, []);
}
