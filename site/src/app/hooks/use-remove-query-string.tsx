import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { UrlQueryParameters } from '../constants/search-query-params';

export function useRemoveQueryString() {
  const searchParams = useSearchParams();

  return useCallback(
    (key: UrlQueryParameters) => {
      if (searchParams === null) return '';

      const params = new URLSearchParams(searchParams);
      params.delete(key);

      return params.toString();
    },
    [searchParams],
  );
}
