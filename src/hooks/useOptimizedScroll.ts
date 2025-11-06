import { useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook for optimized scroll handling using requestAnimationFrame
 * Prevents scroll jank and improves performance
 */
export function useOptimizedScroll(callback: (scrollY: number) => void) {
  const rafId = useRef<number | undefined>(undefined);
  const ticking = useRef<boolean>(false);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      ticking.current = true;

      rafId.current = requestAnimationFrame(() => {
        callback(window.scrollY);
        ticking.current = false;
      });
    }
  }, [callback]);

  useEffect(() => {
    // Use passive event listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleScroll]);
}

/**
 * Debounce function for expensive operations
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useDebounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T {
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  return useCallback(
    ((...args) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    }) as T,
    [callback, delay]
  );
}

/**
 * Throttle function for scroll/resize events
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useThrottle<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T {
  const lastRun = useRef(Date.now());

  return useCallback(
    ((...args) => {
      const now = Date.now();

      if (now - lastRun.current >= delay) {
        callback(...args);
        lastRun.current = now;
      }
    }) as T,
    [callback, delay]
  );
}
