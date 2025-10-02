import { useCallback, useMemo } from 'react';

export const usePerformance = () => {
  const memoizedCallback = useCallback((fn: Function) => {
    return (...args: any[]) => fn(...args);
  }, []);

  const debounce = useMemo(() => {
    return (func: Function, delay: number) => {
      let timeoutId: NodeJS.Timeout;
      return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
      };
    };
  }, []);

  const throttle = useMemo(() => {
    return (func: Function, limit: number) => {
      let inThrottle: boolean;
      return (...args: any[]) => {
        if (!inThrottle) {
          func(...args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    };
  }, []);

  return { memoizedCallback, debounce, throttle };
};