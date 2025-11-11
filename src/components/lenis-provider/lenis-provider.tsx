'use client'

import { ReactLenis, useLenis } from 'lenis/react'
import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface LenisProviderProps {
  children: ReactNode
}

interface NavigatorWithMemory extends Navigator {
  deviceMemory?: number
}

/**
 * Component to handle scroll restoration on route changes
 */
function ScrollRestoration() {
  const pathname = usePathname()
  const lenis = useLenis()

  useEffect(() => {
    // Scroll to top on route change
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    }
  }, [pathname, lenis])

  return null
}

export default function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    // Performance optimization: Detect low-end devices
    const isLowEndDevice = () => {
      if (typeof window === 'undefined') return false
      
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReducedMotion) return true
      
      // Check device memory (if available)
      const deviceMemory = (navigator as NavigatorWithMemory).deviceMemory
      if (deviceMemory && deviceMemory < 4) return true
      
      // Check hardware concurrency (CPU cores)
      const hardwareConcurrency = navigator.hardwareConcurrency
      if (hardwareConcurrency && hardwareConcurrency < 4) return true
      
      return false
    }

    // Log device capability for debugging
    if (isLowEndDevice()) {
      console.log('Low-end device detected: Using optimized Lenis settings')
    }
  }, [])

  return (
    <ReactLenis
      root
      autoRaf={true}
      options={{
        lerp: 0.1,              // Smoothness factor (lower = smoother but more CPU)
        duration: 1.2,          // Animation duration
        smoothWheel: true,      // Smooth wheel scrolling
        wheelMultiplier: 1,     // Wheel sensitivity
        touchMultiplier: 2,     // Touch sensitivity
        infinite: false,        // No infinite scroll
        orientation: 'vertical', // Vertical scrolling only
        gestureOrientation: 'vertical', // Vertical gestures only
        syncTouch: false,       // Don't sync touch (better performance)
        syncTouchLerp: 0.1,     // Touch lerp when synced
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      }}
    >
      <ScrollRestoration />
      {children}
    </ReactLenis>
  )
}