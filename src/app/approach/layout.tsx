import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Approach & Themes',
  description: 'Discover the creative themes and thoughtful approach ES Celebrations brings to every event. From neon nights to pastel dreams — we craft experiences that tell your story.',
  alternates: {
    canonical: '/approach',
  },
  openGraph: {
    title: 'Our Approach & Themes | ES Celebrations',
    description: 'Discover the creative themes and thoughtful approach ES Celebrations brings to every event. From neon nights to pastel dreams — we craft experiences that tell your story.',
    url: 'https://escelebrations.com/approach',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ES Celebrations Approach & Themes',
      },
    ],
  },
}

export default function ApproachLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
