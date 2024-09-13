import { MutableRefObject, useEffect } from 'react';

export function useUpdateTitleIframe({
  parentRef,
  title,
  targetSelector = 'iframe',
}: {
  parentRef: MutableRefObject<HTMLDivElement | null>;
  title: string;
  targetSelector?: string;
}) {
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      const node = parentRef.current?.querySelector(targetSelector);

      if (node) {
        node.setAttribute('title', title);
      }
    });

    if (parentRef.current) {
      observer.observe(parentRef.current, { childList: true, subtree: true });
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
