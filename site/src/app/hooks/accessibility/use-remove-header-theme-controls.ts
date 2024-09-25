import { RefObject, useEffect } from 'react';

// Accessibility workaround to remove theme controls components that are injected around the react-dsfr header component
export function useRemoveHeaderThemeControls(headerRef: RefObject<HTMLElement>) {
  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.querySelector('#fr-theme-modal-hidden-control-button')?.remove();
      headerRef.current.querySelector('#fr-theme-modal')?.remove();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
