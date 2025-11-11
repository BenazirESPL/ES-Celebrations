'use client'

import { useLenis as useReactLenis } from 'lenis/react'
import Lenis from 'lenis'
import { useCallback } from 'react'

/**
 * Hook to access Lenis instance and add scroll callbacks
 * @param callback - Function to call on scroll with scroll data
 * @param deps - Dependencies array for the callback
 */
export function useLenis(
  callback?: (lenis: Lenis) => void,
  deps: readonly unknown[] = []
) {
  // Memoize callback to prevent unnecessary re-renders
  const memoizedCallback = useCallback(
    (lenis: Lenis) => {
      if (callback) {
        // Use requestAnimationFrame for better performance
        requestAnimationFrame(() => callback(lenis))
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  )

  const lenis = useReactLenis(callback ? memoizedCallback : undefined, deps as unknown[])
  return lenis
}

/**
 * Hook to scroll to a specific target with optimized performance
 */
export function useScrollTo() {
  const lenis = useReactLenis()

  const scrollTo = useCallback(
    (
      target: string | number | HTMLElement,
      options?: {
        offset?: number
        duration?: number
        easing?: (t: number) => number
        immediate?: boolean
      }
    ) => {
      if (lenis) {
        lenis.scrollTo(target, options)
      }
    },
    [lenis]
  )

  return scrollTo
}

/**
 * Hook to stop/start Lenis scrolling with memoized functions
 */
export function useLenisControl() {
  const lenis = useReactLenis()

  const stop = useCallback(() => {
    lenis?.stop()
  }, [lenis])

  const start = useCallback(() => {
    lenis?.start()
  }, [lenis])

  return { stop, start, lenis }
}