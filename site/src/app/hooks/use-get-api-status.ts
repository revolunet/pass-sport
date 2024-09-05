import { useState, useEffect, useCallback } from 'react';

// Custom hook to poll third api's status
const useGetApiStatus = ({ url, interval = 10_000 }: { url: string; interval?: number }) => {
  const [error, setError] = useState<boolean>(false);

  const checkApiStatus = useCallback(async () => {
    try {
      await fetch(url);
      setError(false);
    } catch (err) {
      setError(true);
    }
  }, [url]);

  useEffect(() => {
    // Polling every `interval` milliseconds
    const intervalId = setInterval(() => {
      checkApiStatus();
    }, interval);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [url, interval, checkApiStatus]);

  return { error };
};

export default useGetApiStatus;
