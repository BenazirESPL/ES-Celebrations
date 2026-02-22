import type { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'

interface ServiceLayoutProps {
  children: React.ReactNode
  params: { slug: string }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | ES Celebrations`,
      description: service.description,
      url: `https://escelebrations.com/services/${service.slug}`,
      images: [
        {
          url: service.featuredImage,
          width: 1200,
          height: 800,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | ES Celebrations`,
      description: service.description,
      images: [service.featuredImage],
    },
  }
}

export default function ServiceSlugLayout({ children }: ServiceLayoutProps) {
  return <>{children}</>
}
