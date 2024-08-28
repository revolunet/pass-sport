import { useEffect } from 'react';
import { SKIP_LINKS_ID } from '@/app/constants/skip-links';

const ALLOWED_KEY = 'crisp_allowed';
const DISALLOWED_KEY = 'crisp_disallowed';

// Remove the crisp placeholder button whenever the consent is given for cookie related to crisp
// Add back the crisp placeholder button whenever the consent is withdrawn
export function useHandleCrispPlaceholderButton() {
  useEffect(() => {
    const handlerAllowed = () => {
      const el = document.getElementById(SKIP_LINKS_ID.chatbot);

      if (el) {
        el.style.display = 'none';
      }
    };

    const handlerDisallowed = () => {
      const el = document.getElementById(SKIP_LINKS_ID.chatbot);

      if (el) {
        el.style.display = 'block';
      }
    };

    document.addEventListener(ALLOWED_KEY, handlerAllowed);
    document.addEventListener(DISALLOWED_KEY, handlerDisallowed);

    // Remove event listeners once the component is unmounted
    return () => {
      document.removeEventListener(ALLOWED_KEY, handlerAllowed);
      document.removeEventListener(DISALLOWED_KEY, handlerDisallowed);
    };
  });
}
