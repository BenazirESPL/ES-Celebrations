"use client"

import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/footer/footer';
import PageTransition from '@/components/page-transition/page-transition';
import ShinyText from '@/components/shiny-text/shiny-text';
import { services } from '@/data/services';
import { blurDataURLs } from '@/lib/image-utils';
import styles from './services.module.css';
import Navigation from '@/components/navigation/navigation';

export default function ServicesPage() {
  return (
    <div className={styles.container}>
      <Navigation/>
      <PageTransition variant="fade" duration={600}>
        <main className={styles.main}>
          {/* Hero Section */}
          <div className={styles.hero}>
            <h1 className={styles.heroTitle}>
              <ShinyText text="Our Services" speed={5} />
            </h1>
            <p className={styles.heroDescription}>
              From intimate celebrations to grand affairs, we craft unforgettable experiences 
              tailored to your vision. Explore our comprehensive event planning and design services.
            </p>
          </div>

          {/* Services Grid */}
          <div className={styles.grid}>
            {services.map((service, index) => (
              <PageTransition
                key={service.id}
                variant="stagger"
                delay={index * 100}
                duration={600}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className={`${styles.card} ${index === 0 ? styles.featured : ''} ${service.slug === 'baby-showers' ? styles.babyShower : ''}`}
                  prefetch={true}
                >
                  <div className={styles.imageContainer}>
                    <Image
                      src={service.featuredImage}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={styles.image}
                      priority={index < 2}
                      quality={85}
                      placeholder="blur"
                      blurDataURL={blurDataURLs.photo}
                    />
                    <div className={styles.overlay}>
                      <div className={styles.overlayContent}>
                        <h3 className={styles.cardTitle}>{service.title}</h3>
                        <p className={styles.cardDescription}>{service.description}</p>
                        <span className={styles.exploreLink}>
                          Explore Service
                          <svg className={styles.arrow} width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.labelContainer}>
                    <span className={styles.label}>{service.title}</span>
                  </div>
                </Link>
              </PageTransition>
            ))}
          </div>
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}
