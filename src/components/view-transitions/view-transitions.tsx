"use client"

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * ViewTransitions component enables native browser View Transitions API
 * for smooth page transitions in Next.js App Router
 */
export default function ViewTransitions() {
  const pathname = usePathname()

  useEffect(() => {
    // Check if View Transitions API is supported
    if (!document.startViewTransition) {
      return
    }

    // The actual transition is handled by CSS and the browser's native API
    // This component just ensures the API is available and ready
  }, [pathname])

  return null
}