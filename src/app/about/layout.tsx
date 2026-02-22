import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Meet the team behind ES Celebrations. With a passion for creating unforgettable moments, we bring creativity, precision, and heart to every event we plan.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | ES Celebrations',
    description: 'Meet the team behind ES Celebrations. With a passion for creating unforgettable moments, we bring creativity, precision, and heart to every event we plan.',
    url: 'https://escelebrations.com/about',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'About ES Celebrations',
      },
    ],
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
