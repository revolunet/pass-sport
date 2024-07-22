import { useEffect, useState } from 'react';
import { CodeApiResponse } from '../../../../../../pages/api/code';

export function useGetDecryptedCode() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [response, setResponse] = useState<CodeApiResponse | null>(null);

  useEffect(() => {
    const encryptedParams = window.location.hash.replace('#', '');

    fetch('/api/code', {
      method: 'POST',
      body: JSON.stringify({ encrypted: encryptedParams }),
    })
      .then((r) => r.json())
      .then((json) => {
        if ('error' in json) {
          setResponse(null);
          setError(true);
        } else {
          setResponse(json);
          setError(false);
        }
      })
      .catch(() => {
        setResponse(null);
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    error,
    response,
    isLoading,
  };
}
