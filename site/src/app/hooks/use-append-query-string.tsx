import { useCallback } from 'react';
import { useSearchParams } from 'next/navigation';

export function useAppendQueryString() {
  const searchParams = useSearchParams();

  return useCallback(
    (pairs: { key: string; value: string }[]) => {
      if (searchParams === null) return '';

      const params = new URLSearchParams(searchParams);

      pairs.forEach(({ key, value }) => {
        if (value === '') {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      });

      return params.toString();
    },
    [searchParams],
  );
}
