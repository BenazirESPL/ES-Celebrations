"use client";

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Masonry from 'react-masonry-css';
import Navigation from '@/components/navigation/navigation';
import Footer from '@/components/footer/footer';
import PageTransition from '@/components/page-transition/page-transition';
import { getServiceBySlug } from '@/data/services';
import { blurDataURLs } from '@/lib/image-utils';
import styles from './service-gallery.module.css';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

const breakpointCols = {
  default: 3,
  1200: 3,
  900: 2,
  600: 1,
};

export default function ServiceGalleryPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <Navigation />

      {/* Preload all images in background */}
      {service.images.map((image, index) => (
        <link
          key={`preload-${index}`}
          rel="preload"
          as="image"
          href={image}
          // Prioritize first 12 images
          fetchPriority={index < 12 ? 'high' : 'low'}
        />
      ))}

      <PageTransition variant="fade" duration={600}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <Image
            src={service.featuredImage}
            alt={service.title}
            fill
            priority
            quality={90}
            className={styles.heroImage}
            sizes="100vw"
            placeholder="blur"
            blurDataURL={blurDataURLs.landscape}
          />
        </div>

        {/* Title Overlay */}
        <div className={styles.heroOverlay}>
          <div className={styles.heroInnerOverlay}>
            <h1 className={styles.heroTitle}>{service.title}</h1>
          </div>
        </div>

        {/* Masonry Gallery - All Images Loaded */}
        <main className={styles.main}>
          <Masonry
            breakpointCols={breakpointCols}
            className={styles.masonryGrid}
            columnClassName={styles.masonryColumn}
          >
            {service.images.map((image, index) => (
              <div key={`${image}-${index}`} className={styles.masonryCard}>
                <Image
                  src={image}
                  alt={`${service.title} - Image ${index + 1}`}
                  width={800}
                  height={600}
                  quality={85}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  className={styles.masonryImage}
                  placeholder="blur"
                  blurDataURL={blurDataURLs.photo}
                  priority={index < 12}
                  loading={index < 12 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </Masonry>
        </main>
      </PageTransition>

      <Footer />
    </div>
  );
}
