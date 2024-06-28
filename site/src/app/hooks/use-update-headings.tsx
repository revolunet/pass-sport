import { MutableRefObject, useEffect } from 'react';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export function useUpdateHeadings({
  parentRef,
  level,
  selector,
}: {
  parentRef: MutableRefObject<HTMLDivElement | null>;
  level: HeadingLevel;
  selector: string[];
}) {
  useEffect(() => {
    if (parentRef?.current) {
      const headings = parentRef.current.querySelectorAll(selector.join(','));

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
