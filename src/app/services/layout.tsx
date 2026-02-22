import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore ES Celebrations\' full range of event services — from luxury weddings and milestone celebrations to baby showers and bespoke décor styling.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Our Services | ES Celebrations',
    description: 'Explore ES Celebrations\' full range of event services — from luxury weddings and milestone celebrations to baby showers and bespoke décor styling.',
    url: 'https://escelebrations.com/services',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ES Celebrations Services',
      },
    ],
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
