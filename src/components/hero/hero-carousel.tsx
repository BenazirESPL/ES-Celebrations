"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import Image from "next/image"
import { blurDataURLs } from "@/lib/image-utils"
import "swiper/css"
import "swiper/css/effect-fade"
import styles from "./hero-carousel.module.css"

const heroImages = [
  {
    url: "/gallery/hero/main-hero.webp",
    alt: "Luxury event celebration"
  },
  {
    url: "/gallery/hero/PJP_5627.webp",
    alt: "Spectacular event moment"
  },
  {
    url: "/gallery/hero/SH4A7372.webp",
    alt: "Elegant celebration"
  },
  {
    url: "/gallery/hero/_MBP0726-min.webp",
    alt: "Beautiful wedding celebration"
  },
  {
    url: "/gallery/hero/DHA_4994aa-min.webp",
    alt: "Luxury event celebration"
  },
  {
    url: "/gallery/hero/HPZ_4079-min.webp",
    alt: "Elegant event setup"
  },
  {
    url: "/gallery/hero/i-S63mDVR-X3-min.webp",
    alt: "Stunning celebration moment"
  },
  {
    url: "/gallery/hero/RJR_8210-min.webp",
    alt: "Spectacular event"
  },
  {
    url: "/gallery/hero/RJR_8687-min.webp",
    alt: "Elegant wedding moment"
  },
  {
    url: "/gallery/hero/SDB_3496-min.webp",
    alt: "Beautiful event setup"
  },
  {
    url: "/gallery/hero/ZUR_2723-min.webp",
    alt: "Luxury celebration"
  }
]

export default function HeroCarousel() {
  return (
    <div className={styles.carouselContainer}>
      {/* Preload first 3 hero images for instant display */}
      {heroImages.slice(0, 3).map((image, index) => (
        <link
          key={`preload-${index}`}
          rel="preload"
          as="image"
          href={image.url}
        />
      ))}

      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false
        }}
        loop={true}
        speed={1500}
        className={styles.swiper}
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.slideBackground}>
              <Image
                src={image.url}
                alt={image.alt}
                fill
                priority={index === 0}
                quality={90}
                sizes="100vw"
                placeholder="blur"
                blurDataURL={blurDataURLs.landscape}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
              <div className={styles.overlay} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}