import { MutableRefObject, useEffect } from 'react';

// Workaround for accessibility
// It replaces the title attributes with aria-label attributes
export function useReplaceTitlesByAriaLabels({
  parentRef,
  elementsToUpdate,
}: {
  parentRef: MutableRefObject<HTMLDivElement | null>;
  elementsToUpdate: {
    selector: string;
    ariaLabel: string;
  }[];
}) {
  useEffect(() => {
    if (parentRef?.current) {
      for (const { selector, ariaLabel } of elementsToUpdate) {
        const element = document.querySelector(selector);

        if (element) {
          element.removeAttribute('title');
          element.setAttribute('aria-label', ariaLabel);
        }
      }
    }
    // Execute only once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
