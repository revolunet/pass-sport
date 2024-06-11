import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export function useRemoveQueryString() {
  const searchParams = useSearchParams();

  return useCallback(
    (key: string) => {
      if (searchParams === null) return '';

      const params = new URLSearchParams(searchParams);
      params.delete(key);

      return params.toString();
    },
    [searchParams],
  );
}
