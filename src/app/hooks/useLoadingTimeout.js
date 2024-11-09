import { useState, useEffect } from 'react';

export default function useLoadingTimeout(delay = 1000) {
  const [timeoutDone, setTimeoutDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeoutDone(true);
    }, delay);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timeout);
  }, [delay]);

  return timeoutDone;
}