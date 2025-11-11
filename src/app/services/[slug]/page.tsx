"use client";

import { useState, useCallback, useRef } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import InfiniteScroll from 'react-infinite-scroll-component';
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

const IMAGES_PER_PAGE = 12;

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

  const [displayedImages, setDisplayedImages] = useState(
    service.images.slice(0, IMAGES_PER_PAGE)
  );
  const [hasMore, setHasMore] = useState(
    service.images.length > IMAGES_PER_PAGE
  );

  const fetchMoreData = () => {
    const currentLength = displayedImages.length;
    const newImages = service.images.slice(
      currentLength,
      currentLength + IMAGES_PER_PAGE
    );

    if (newImages.length === 0) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setDisplayedImages((prev) => {
        const updated = [...prev, ...newImages];
        // Check if we've loaded all images
        if (updated.length >= service.images.length) {
          setHasMore(false);
        }
        return updated;
      });
    }, 300);
  };

  return (
    <div className={styles.container}>
      <Navigation />

      {/* Preload first batch of images */}
      {service.images.slice(0, IMAGES_PER_PAGE).map((image, index) => (
        <link
          key={`preload-${index}`}
          rel="preload"
          as="image"
          href={image}
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

        {/* Masonry Gallery with Infinite Scroll */}
        <main className={styles.main}>
          <InfiniteScroll
            dataLength={displayedImages.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={
              <div className={styles.loader}>
                <div className={styles.loaderSpinner}></div>
                <p>Loading more beautiful moments...</p>
              </div>
            }
            endMessage={
              <div className={styles.endMessage}>
                You&apos;ve reached the end of our {service.title.toLowerCase()} gallery
              </div>
            }
            scrollThreshold={0.9}
            style={{ overflow: 'visible' }}
          >
            <Masonry
              breakpointCols={breakpointCols}
              className={styles.masonryGrid}
              columnClassName={styles.masonryColumn}
            >
              {displayedImages.map((image, index) => (
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
                    priority={index < 6}
                    loading={index < 6 ? 'eager' : 'lazy'}
                  />
                </div>
              ))}
            </Masonry>
          </InfiniteScroll>
        </main>
      </PageTransition>

      <Footer />
    </div>
  );
}
