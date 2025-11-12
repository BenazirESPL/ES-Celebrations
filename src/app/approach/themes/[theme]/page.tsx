"use client";

import { useState, useCallback } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'react-masonry-css';
import Navigation from '@/components/navigation/navigation';
import Footer from '@/components/footer/footer';
import PageTransition from '@/components/page-transition/page-transition';
import { blurDataURLs } from '@/lib/image-utils';
import styles from './theme-gallery.module.css';
import './theme-gallery-creative.css';

// Theme-specific style configurations
const themeStyles: Record<string, string> = {
  'pastel': styles.pastelTheme,
  'blue-haldi': styles.blueHaldiTheme,
  'carnival': styles.carnivalTheme,
  'neon': styles.neonTheme,
};

interface ThemePageProps {
  params: {
    theme: string;
  };
}

const IMAGES_PER_PAGE = 12;

const breakpointCols = {
  default: 3,
  1200: 3,
  900: 2,
  600: 1,
};

// Theme data configuration
const themeData: Record<string, {
  title: string;
  description: string;
  featuredImage: string;
  images: string[];
}> = {
  'pastel': {
    title: 'Pastel Theme Decor',
    description: 'Soft, elegant, and timeless. Our pastel themes create dreamy atmospheres perfect for baby showers, engagements, and intimate celebrations.',
    featuredImage: '/gallery/themes/pastel/08406.webp',
    images: [
      '/gallery/themes/pastel/08406.webp',
      '/gallery/themes/pastel/compressed_NJ 0654.webp',
      '/gallery/themes/pastel/compressed_NJ 0667.webp',
      '/gallery/themes/pastel/compressed_NJ 2529.webp',
      '/gallery/themes/pastel/compressed_Screenshot 2025-11-13 at 12.webp',
      '/gallery/themes/pastel/compressed_Screenshot 2025-11-13 at 12 (1).webp',
      '/gallery/themes/pastel/compressed_Screenshot 2025-11-13 at 12 (2).webp',
      '/gallery/themes/pastel/compressed_Screenshot 2025-11-13 at 12 (3).webp',
      '/gallery/themes/pastel/compressed_Screenshot 2025-11-13 at 12 (4).webp',
      '/gallery/themes/pastel/compressed_Screenshot 2025-11-13 at 12 (5).webp',
      '/gallery/themes/pastel/compressed_Screenshot 2025-11-13 at 12 (6).webp',
    ],
  },
  'blue-haldi': {
    title: 'Blue Theme Haldi',
    description: 'A refreshing twist on traditional Haldi ceremonies. Vibrant blue décor creates a unique and memorable celebration.',
    featuredImage: '/gallery/themes/blue-haldi/9192.webp',
    images: [
      '/gallery/themes/blue-haldi/9192.webp',
      '/gallery/themes/blue-haldi/compressed_MS_09188.webp',
      '/gallery/themes/blue-haldi/compressed_MS_09191.webp',
      '/gallery/themes/blue-haldi/compressed_MS_09195.webp',
      '/gallery/themes/blue-haldi/compressed_MS_09197.webp',
      '/gallery/themes/blue-haldi/compressed_MS_09198.webp',
    ],
  },
  'carnival': {
    title: 'Carnival Theme Haldi',
    description: 'Fun, vibrant, and full of energy. Our carnival-themed celebrations bring joy, color, and excitement to every moment.',
    featuredImage: '/gallery/themes/carnival/1693.webp',
    images: [
      '/gallery/themes/carnival/1693.webp',
      '/gallery/themes/carnival/1646817680132.jpg',
      '/gallery/themes/carnival/1646817680593.jpg',
      '/gallery/themes/carnival/1646817681013.jpg',
      '/gallery/themes/carnival/1646817686477.jpg',
      '/gallery/themes/carnival/1646817707299.jpg',
      '/gallery/themes/carnival/1646817709809.jpg',
      '/gallery/themes/carnival/1646817720775.jpg',
      '/gallery/themes/carnival/1646817721693.jpg',
      '/gallery/themes/carnival/1646817724361.jpg',
      '/gallery/themes/carnival/1646817726714.jpg',
      '/gallery/themes/carnival/1646817731921.jpg',
    ],
  },
  'neon': {
    title: 'Neon Theme Sangeet',
    description: 'Bold, modern, and electrifying. Neon themes create high-energy atmospheres perfect for sangeet nights and dance celebrations.',
    featuredImage: '/gallery/themes/neon/56.webp',
    images: [
      '/gallery/themes/neon/56.webp',
      '/gallery/themes/neon/compressed_Manb (11).jpg',
      '/gallery/themes/neon/compressed_Manb (54).webp',
      '/gallery/themes/neon/compressed_Manb (55).webp',
      '/gallery/themes/neon/compressed_Manb (62).webp',
    ],
  },
};

export default function ThemeGalleryPage({ params }: ThemePageProps) {
  const theme = themeData[params.theme];

  if (!theme) {
    notFound();
  }

  const [displayedImages, setDisplayedImages] = useState(
    theme.images.slice(0, IMAGES_PER_PAGE)
  );
  const [hasMore, setHasMore] = useState(
    theme.images.length > IMAGES_PER_PAGE
  );

  const fetchMoreData = useCallback(() => {
    const currentLength = displayedImages.length;
    const newImages = theme.images.slice(
      currentLength,
      currentLength + IMAGES_PER_PAGE
    );

    if (newImages.length === 0) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setDisplayedImages((prev) => [...prev, ...newImages]);
    }, 300);
  }, [displayedImages.length, theme.images]);

  const themeClass = themeStyles[params.theme] || '';

  return (
    <div className={`${styles.container} ${themeClass}`}>
      <Navigation />

      {/* Preload first batch of images */}
      {theme.images.slice(0, IMAGES_PER_PAGE).map((image, index) => (
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
          <div className={styles.heroOverlay} />
          <div className={styles.heroPattern} />
          <Image
            src={theme.featuredImage}
            alt={theme.title}
            fill
            priority
            quality={90}
            className={styles.heroImage}
            sizes="100vw"
            placeholder="blur"
            blurDataURL={blurDataURLs.landscape}
          />
          <div className={styles.heroContent}>
            <div className={styles.heroTitleWrapper}>
              <h1 className={styles.heroTitle}>{theme.title}</h1>
              <div className={styles.heroAccent} />
            </div>
            <p className={styles.heroDescription}>{theme.description}</p>
          </div>
        </div>

        {/* Masonry Gallery with Infinite Scroll */}
        <main className={styles.main}>
          <div className={styles.galleryHeader}>
            <h2 className={styles.galleryTitle}>Gallery</h2>
            <div className={styles.galleryDivider} />
          </div>
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
                You&apos;ve reached the end of our {theme.title.toLowerCase()} gallery
              </div>
            }
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
                    alt={`${theme.title} - Image ${index + 1}`}
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