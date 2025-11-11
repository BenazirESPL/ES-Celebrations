'use client'

import { useRef, useEffect } from 'react'
import { useLenis, useScrollTo } from '@/hooks/useLenis'

/**
 * Example component showing how to use Lenis for scroll animations
 * You can use this pattern in any component that needs scroll-based animations
 */
export function ScrollAnimationExample() {
  const elementRef = useRef<HTMLDivElement>(null)
  const scrollTo = useScrollTo()

  // Example 1: Track scroll progress
  useLenis((lenis) => {
    // Access scroll data: lenis.scroll, lenis.limit, lenis.velocity, etc.
    const progress = lenis.progress // 0 to 1
    
    // Apply animations based on scroll
    if (elementRef.current) {
      elementRef.current.style.opacity = String(progress)
    }
  })

  // Example 2: Scroll to element on click
  const handleScrollToTop = () => {
    scrollTo(0, { duration: 1.5 })
  }

  const handleScrollToElement = () => {
    scrollTo('#target-section', { 
      offset: -100, // offset from top
      duration: 1.2 
    })
  }

  return (
    <div>
      <div ref={elementRef}>
        {/* This element will fade in as you scroll */}
        Scroll-animated content
      </div>
      
      <button onClick={handleScrollToTop}>
        Scroll to Top
      </button>
      
      <button onClick={handleScrollToElement}>
        Scroll to Section
      </button>
    </div>
  )
}

/**
 * Example: Parallax effect with Lenis
 */
export function ParallaxExample() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useLenis((lenis) => {
    if (parallaxRef.current) {
      const speed = 0.5 // Adjust for parallax speed
      parallaxRef.current.style.transform = `translateY(${lenis.scroll * speed}px)`
    }
  })

  return (
    <div ref={parallaxRef} style={{ willChange: 'transform' }}>
      Parallax content
    </div>
  )
}

/**
 * Example: Fade in on scroll
 */
export function FadeInOnScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useLenis((lenis) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const elementTop = rect.top
    
    // Calculate visibility (0 to 1)
    const visibility = Math.max(0, Math.min(1, 
      (windowHeight - elementTop) / (windowHeight * 0.5)
    ))

    ref.current.style.opacity = String(visibility)
    ref.current.style.transform = `translateY(${(1 - visibility) * 50}px)`
  })

  return (
    <div 
      ref={ref}
      style={{ 
        willChange: 'opacity, transform',
        transition: 'opacity 0.1s, transform 0.1s'
      }}
    >
      {children}
    </div>
  )
}