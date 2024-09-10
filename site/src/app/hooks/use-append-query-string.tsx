import { useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { UrlQueryParameters } from '../constants/search-query-params';

export type UseAppendQueryStringPairs = { key: UrlQueryParameters; value: string }[];

export function useAppendQueryString() {
  const searchParams = useSearchParams();

  return useCallback(
    (pairs: UseAppendQueryStringPairs) => {
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
