"use client"

import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/footer/footer';
import PageTransition from '@/components/page-transition/page-transition';
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
                  className={styles.card}
                  prefetch={true}
                >
                  <div className={styles.imageContainer}>
                    <Image
                      src={service.featuredImage}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={styles.image}
                      priority={index < 2}
                      quality={85}
                      placeholder="blur"
                      blurDataURL={blurDataURLs.photo}
                    />
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
