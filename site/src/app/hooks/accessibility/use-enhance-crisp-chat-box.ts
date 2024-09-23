import { useEffect } from 'react';

export function useEnhanceCrispChatBox() {
  const replaceSpanByPElement = (document: Document, element: Element | null) => {
    if (!element || element.tagName.toLowerCase() !== 'span') {
      return;
    }

    const pElement = document.createElement('p');
    pElement.className = element.className;
    pElement.innerHTML = element.innerHTML;
    if (!element.textContent?.startsWith('pass Sport')) {
      pElement.style.setProperty('margin', '0', 'important');
    } else {
      pElement.style.setProperty('color', 'black', 'important');
    }
    element.replaceWith(pElement);
  };

  const showInvisbleCloseButton = (crisp: Element) => {
    const invisbleCloseButton = crisp.querySelector('span[aria-label="Fermer le chat"]');

    if (invisbleCloseButton) {
      invisbleCloseButton.style.setProperty('display', 'inherit', 'important');

      invisbleCloseButton.childNodes[0].setAttribute('aria-hidden', true);
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

  const getTextNodesRecursively = (parentNode: Element): Array<Element> => {
    const result: Array<Element> = [];

    function traverse(node: Node) {
      if (node.nodeType === Node.TEXT_NODE) {
        // Check if the text node is not empty
        if (
          node.nodeValue &&
          node.nodeValue.trim() !== '' &&
          node.parentNode &&
          // @ts-ignore
          node.parentNode.tagName.toLowerCase() === 'span' &&
          node.textContent !== 'Bot' &&
          node.textContent !== '(' &&
          node.textContent !== 'Édité' &&
          node.textContent !== ')'
        ) {
          result.push(node.parentNode as Element);
        }
      } else if (node.childNodes.length > 0) {
        for (let child of node.childNodes) {
          traverse(child); // Recursively traverse child nodes
        }
      }
    }

    traverse(parentNode);
    return result;
  };

  const replaceConversationTextNodeWithParagraph = (crisp: Element) => {
    const parentElements: NodeListOf<Element> = crisp.querySelectorAll(
      'div[tabindex="-1"][aria-live="polite"][aria-relevant="additions"]',
    );
    if (!parentElements || parentElements.length == 0) {
      return;
    }
    const textNodes = Array.from(parentElements)
      .map((element: Element) => getTextNodesRecursively(element))
      .reduce((acc: Element[], nodes: Element[]) => acc.concat(nodes), []);

    textNodes.forEach((e) => replaceSpanByPElement(document, e));
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
      'Des questions ? Discutons !',
      "Temps d'attente",
      'Réseau hors-ligne. Reconnexion',
      'Aucun message ne peut être échangé pour le moment',
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
    if (iconElement && iconElement.parentNode?.children[1]) {
      iconElement.parentNode?.children[1].setAttribute(
        'aria-label',
        'Une personne du support est en ligne',
      );
    }
  };

  const preciseAriaLabelOnSend = (crisp: Element) => {
    const sendElement = crisp.querySelector('span[aria-label="Envoyer"]');
    // @ts-ignore
    if (sendElement) {
      sendElement.setAttribute('aria-label', 'Envoyer mon message');
    }
  };

  const addMissingAriaHiddenOnIcons = (crisp: Element) => {
    const chatIconElement = crisp.querySelector('a[data-mode="chat"]')?.childNodes[0];
    if (chatIconElement?.textContent === '') {
      chatIconElement?.setAttribute('aria-hidden', true);
    }
  };

  const removeUnecessaryAria = (crisp: Element) => {
    const continuByEmailElement = crisp.querySelector(
      'a[aria-label="email"][data-channel="email"][target="_parent"]',
    );
    if (continuByEmailElement) {
      continuByEmailElement.removeAttribute('aria-label');
    }
  };

  const addAriaLabelOnEmailInput = (crisp: Element) => {
    const emailInput = crisp.querySelector('input[name="message_field_identity-email"]');
    if (!emailInput) {
      return;
    }
    const validateButton = emailInput?.parentNode?.childNodes[1];
    if (validateButton && (validateButton as Element).tagName.toLowerCase() === 'a') {
      validateButton.setAttribute('aria-label', 'Valider votre adresse email');
    }
  };

  const removeWarnMessage = (crisp: Element) => {
    const warnText = crisp.querySelector('a[data-type="warn_prompt"][tabindex="0"][role="alert"]');
    if (!warnText) {
      return;
    }
    warnText.remove();
  };

  const mutators = [
    replaceConversationTextNodeWithParagraph, // https://www.notion.so/Audit-avec-tickets-notion-526ecd6d84764c0c84844c2e41071fe2?p=100d86210f7a8080b2f0eb52f62dd987&pm=s
    replaceSpansWithParagraph, // https://www.notion.so/Audit-avec-tickets-notion-526ecd6d84764c0c84844c2e41071fe2?p=100d86210f7a8080b2f0eb52f62dd987&pm=s
    addMissingAriaLabel, // https://www.notion.so/Audit-avec-tickets-notion-526ecd6d84764c0c84844c2e41071fe2?p=100d86210f7a80489d28e2f132d6390d&pm=s
    showInvisbleCloseButton, // https://www.notion.so/Audit-avec-tickets-notion-526ecd6d84764c0c84844c2e41071fe2?p=100d86210f7a80489d28e2f132d6390d&pm=s
    addMissingAriaHiddenOnIcons, // https://www.notion.so/Audit-avec-tickets-notion-526ecd6d84764c0c84844c2e41071fe2?p=100d86210f7a80c08fabd9ab4743f14c&pm=s
    altTextToConnectedIcon, // https://www.notion.so/Audit-avec-tickets-notion-526ecd6d84764c0c84844c2e41071fe2?p=8c7385434e564946ac9e76bf86ef3f68&pm=s
    preciseAriaLabelOnSend, // https://www.notion.so/Audit-avec-tickets-notion-526ecd6d84764c0c84844c2e41071fe2?p=10559c9edecc4eac81f340d6f691bb39&pm=s
    removeUnecessaryAria, // https://www.notion.so/Audit-avec-tickets-notion-526ecd6d84764c0c84844c2e41071fe2?p=d1ce0c6e2f4241b89ad2811f90f4c463&pm=s
    addAriaLabelOnEmailInput, // https://www.notion.so/Audit-avec-tickets-notion-526ecd6d84764c0c84844c2e41071fe2?p=7b2db07ce2ad4360b664be87b444064f&pm=s
    removeWarnMessage, // https://www.notion.so/Audit-avec-tickets-notion-526ecd6d84764c0c84844c2e41071fe2?p=dabdf168d0cd4016876e9c142bc77a28&pm=s
  ];

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      const crispElement = document.querySelector('#crisp-chatbox');
      if (!crispElement) {
        return;
      }
      mutators.forEach((fn) => {
        try {
          fn(crispElement);
        } catch (error) {
          console.error(`Error while mutating crisp chatbot with ${fn.name}:`, error);
        }
      });
    });

    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
