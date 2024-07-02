import { MutableRefObject, useEffect } from 'react';

// Workaround for accessibility
// Add a specific role for ul and li elements (if 'none', the voiceover doesn't enumerate the "list")
export function useUpdateList({
  parentRef,
  role,
  listSelector,
}: {
  parentRef: MutableRefObject<HTMLDivElement | null>;
  role: 'none'; // extensible later
  listSelector: string;
}) {
  useEffect(() => {
    if (parentRef?.current) {
      const listElement = parentRef.current.querySelector(listSelector);

      if (!listElement) {
        return;
      }

      listElement.setAttribute('role', role);
      listElement.querySelectorAll('li').forEach((listElement) => {
        listElement.setAttribute('role', role);
      });
    }
    // Execute only once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
