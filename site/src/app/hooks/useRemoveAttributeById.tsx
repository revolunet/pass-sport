import { useEffect } from 'react';

export function useRemoveAttributeById(elementId: string, attribute: string) {
  useEffect(() => {
    const node = document.querySelector(`#${elementId}`);

    if (node) {
      node.removeAttribute(attribute);
    }
  }, [elementId, attribute]);
}
