/**
 * Performance optimization utilities
 */

/**
 * Preload critical resources
 */
export function preloadImages(urls: string[]): void {
  if (typeof window === 'undefined') return;

  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
}

/**
 * Lazy load images with Intersection Observer
 */
export function setupLazyLoading(selector: string = 'img[data-src]'): () => void {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return () => {};
  }

  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;

          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.01,
    }
  );

  const images = document.querySelectorAll(selector);
  images.forEach(img => imageObserver.observe(img));

  return () => {
    images.forEach(img => imageObserver.unobserve(img));
  };
}

/**
 * Optimize animations for 60fps
 */
export function optimizeAnimation(callback: (timestamp: number) => void): () => void {
  let rafId: number;
  let lastTime = 0;
  const fps = 60;
  const interval = 1000 / fps;

  const animate = (timestamp: number) => {
    const delta = timestamp - lastTime;

    if (delta >= interval) {
      lastTime = timestamp - (delta % interval);
      callback(timestamp);
    }

    rafId = requestAnimationFrame(animate);
  };

  rafId = requestAnimationFrame(animate);

  return () => {
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
  };
}

/**
 * Check if reduced motion is preferred
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get optimal image quality based on connection
 */
export function getOptimalImageQuality(): number {
  if (typeof window === 'undefined' || !('connection' in navigator)) {
    return 85;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const connection = (navigator as any).connection;
  const effectiveType = connection?.effectiveType;

  switch (effectiveType) {
    case '4g':
      return 90;
    case '3g':
      return 75;
    case '2g':
      return 60;
    case 'slow-2g':
      return 50;
    default:
      return 85;
  }
}

/**
 * Defer non-critical scripts
 */
export function deferScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.body.appendChild(script);
  });
}

/**
 * Measure performance timing
 */
export function measurePerformance(name: string, fn: () => void): void {
  if (typeof window === 'undefined' || !window.performance) return;

  const startMark = `${name}-start`;
  const endMark = `${name}-end`;
  const measureName = `${name}-measure`;

  performance.mark(startMark);
  fn();
  performance.mark(endMark);
  performance.measure(measureName, startMark, endMark);

  const measure = performance.getEntriesByName(measureName)[0];
  console.log(`${name}: ${measure.duration.toFixed(2)}ms`);

  // Clean up
  performance.clearMarks(startMark);
  performance.clearMarks(endMark);
  performance.clearMeasures(measureName);
}

/**
 * RequestIdleCallback polyfill
 */
export const requestIdleCallback =
  (typeof window !== 'undefined' && 'requestIdleCallback' in window)
    ? window.requestIdleCallback
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    : (cb: any) => {
        const start = Date.now();
        return setTimeout(() => {
          cb({
            didTimeout: false,
            timeRemaining: () => Math.max(0, 50 - (Date.now() - start)),
          });
        }, 1) as unknown as number;
      };

/**
 * CancelIdleCallback polyfill
 */
export const cancelIdleCallback =
  (typeof window !== 'undefined' && 'cancelIdleCallback' in window)
    ? window.cancelIdleCallback
    : (id: number) => clearTimeout(id);
