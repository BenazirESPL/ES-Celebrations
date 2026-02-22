import type { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

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

export default function ServiceSlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
