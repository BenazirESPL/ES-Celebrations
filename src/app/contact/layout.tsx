import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with ES Celebrations to start planning your dream event. Reach out via Instagram, LinkedIn, or our contact form — we\'d love to hear from you.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | ES Celebrations',
    description: 'Get in touch with ES Celebrations to start planning your dream event. Reach out via Instagram, LinkedIn, or our contact form — we\'d love to hear from you.',
    url: 'https://escelebrations.com/contact',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Contact ES Celebrations',
      },
    ],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
