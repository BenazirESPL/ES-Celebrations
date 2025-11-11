"use client"

import { useRouter } from 'next/navigation'
import NextLink from 'next/link'
import type { ComponentProps } from 'react'

type LinkProps = ComponentProps<typeof NextLink>

/**
 * Custom Link component that uses the View Transitions API
 * Falls back to regular navigation if not supported
 */
export default function Link({ href, children, ...props }: LinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if View Transitions API is supported
    if (!document.startViewTransition) {
      // Let Next.js handle the navigation normally
      return
    }

    // Prevent default navigation
    e.preventDefault()

    // Start view transition
    document.startViewTransition(() => {
      router.push(href.toString())
    })
  }

  return (
    <NextLink href={href} onClick={handleClick} {...props}>
      {children}
    </NextLink>
  )
}