import { MutableRefObject, useEffect } from 'react';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

// Workaround for accessibility
// Update headings level in order to be compliant with accessibility (headings level order matter)
export function useUpdateHeadings({
  parentRef,
  level,
  headingSelectors,
}: {
  parentRef: MutableRefObject<HTMLDivElement | null>;
  level: HeadingLevel;
  headingSelectors: string[];
}) {
  useEffect(() => {
    if (parentRef?.current) {
      const headings = parentRef.current.querySelectorAll(headingSelectors.join(','));

      if (headings?.length <= 0) {
        return;
      }

      headings.forEach((heading) => {
        heading.setAttribute('aria-level', String(level));
      });
    }
    // Execute only once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
