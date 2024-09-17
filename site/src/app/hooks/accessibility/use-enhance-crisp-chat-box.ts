import { useEffect } from 'react';

export function useEnhanceCrispChatBox() {
  const replaceSpanByPElement = (document: Document, element: Element | null) => {
    if (!element || element.tagName === 'p') {
      return;
    }

    const pElement = document.createElement('p');
    pElement.className = element.className;
    pElement.innerHTML = element.innerHTML;
    pElement.style.setProperty('margin', '0', 'important');
    element.replaceWith(pElement);
  };

  const showInvisbleCloseButton = (crisp: Element) => {
    const invisbleCloseButton = crisp.querySelector('span[aria-label="Fermer le chat"]');

    if (invisbleCloseButton) {
      invisbleCloseButton.style.setProperty('display', 'inherit', 'important');
    }
  };

  const addMissingAriaLabel = (crisp: Element) => {
    const helpdeskFormElement = crisp.querySelector(
      'form[name="form_helpdesk"] input[name="helpdesk_search"]',
    );

    if (helpdeskFormElement) {
      helpdeskFormElement.setAttribute('aria-label', "Trouver un article d'aide");
    }
  };

  const replaceSpansWithParagraph = (body: Element) => {
    const spans = body.querySelectorAll('span');

    if (spans.length == 0) {
      return;
    }

    const leafSpans = Array.from(spans).filter(
      (span) => span.childNodes[0] && span.childNodes[0].nodeType === Node.TEXT_NODE,
    );

    const spanElementsToReplace = [
      'Comment pouvons-nous vous aider ?',
      'Des questions ? Discutons !',
      "Temps d'attente",
      'Réseau hors-ligne. Reconnexion',
      'Aucun message ne peut être échangé pour le moment',
      'Articles fréquemment lus',
    ];
    spanElementsToReplace.forEach((spanText) =>
      leafSpans.forEach((span) => {
        if (span.innerHTML?.trim().includes(spanText)) {
          replaceSpanByPElement(document, span);
        }
      }),
    );
  };

  const altTextToConnectedIcon = (crisp: Element) => {
    const iconElement = crisp.querySelector('[style*="https://image.crisp.chat/avatar/website"]');
    // @ts-ignore
    if (iconElement) {
      iconElement.setAttribute('aria-label', 'Une personne du support est en ligne');
    }
  };

  const addMissingAriaHiddenOnIcons = (crisp: Element) => {
    const chatIconElement = crisp.querySelector('a[data-mode="chat"]')?.childNodes[0];
    chatIconElement?.setAttribute('aria-hidden', true);

    const helpdeskIconElement = crisp.querySelector('a[data-mode="helpdesk"]')?.childNodes[0];
    helpdeskIconElement?.setAttribute('aria-hidden', true);
  };

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      const crispElement = document.querySelector('#crisp-chatbox');
      if (!crispElement) {
        return;
      }

      replaceSpansWithParagraph(crispElement); // https://www.notion.so/Audit-avec-tickets-notion-526ecd6d84764c0c84844c2e41071fe2?p=100d86210f7a8080b2f0eb52f62dd987&pm=s
      addMissingAriaLabel(crispElement); // https://www.notion.so/Audit-avec-tickets-notion-526ecd6d84764c0c84844c2e41071fe2?p=100d86210f7a80489d28e2f132d6390d&pm=s
      showInvisbleCloseButton(crispElement); // https://www.notion.so/Audit-avec-tickets-notion-526ecd6d84764c0c84844c2e41071fe2?p=100d86210f7a80489d28e2f132d6390d&pm=s
      addMissingAriaHiddenOnIcons(crispElement); // https://www.notion.so/Audit-avec-tickets-notion-526ecd6d84764c0c84844c2e41071fe2?p=100d86210f7a80c08fabd9ab4743f14c&pm=s
      altTextToConnectedIcon(crispElement); // https://www.notion.so/Audit-avec-tickets-notion-526ecd6d84764c0c84844c2e41071fe2?p=8c7385434e564946ac9e76bf86ef3f68&pm=s
    });

    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
