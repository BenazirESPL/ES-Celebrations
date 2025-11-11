"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

/**
 * PrefetchPages component aggressively prefetches all main pages
 * on mount to eliminate first-navigation delay
 */
export default function PrefetchPages() {
  const router = useRouter()

  useEffect(() => {
    // Prefetch all main pages immediately on mount
    const pagesToPrefetch = [
      '/about',
      '/services',
      '/approach',
      '/contact',
    ]

    // Small delay to not block initial render
    const timer = setTimeout(() => {
      pagesToPrefetch.forEach(page => {
        router.prefetch(page)
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [router])

  return null
}