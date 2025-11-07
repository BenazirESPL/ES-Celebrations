"use client"

import Image from "next/image"
import Navigation from "@/components/navigation/navigation"
import Footer from "@/components/footer/footer"
import PageTransition from "@/components/page-transition/page-transition"
import { blurDataURLs } from "@/lib/image-utils"
import styles from "./approach.module.css"

// Note: Metadata should be added in a layout.tsx or moved to server component
// For now, using client component for interactivity

export default function ApproachPage() {
  return (
    <div className={styles.container}>
      <Navigation />

      <PageTransition variant="fade" duration={600}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />
          <Image
            src="/gallery/weddings/_DSC9286.webp"
            alt="ES Celebrations Approach"
            fill
            className={styles.heroImage}
            priority
            quality={90}
            sizes="100vw"
            placeholder="blur"
            blurDataURL={blurDataURLs.landscape}
          />
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>OUR APPROACH</h1>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className={styles.philosophySection}>
          <div className={styles.philosophyContainer}>
            <h2 className={styles.philosophyHeadline}>
              Because every celebration deserves to feel extraordinary.
            </h2>

            <div className={styles.philosophyContent}>
              <p className={styles.philosophyText}>
                At ES Celebrations, we believe every event is a story waiting to be told. It is a reflection of individuality, emotion, and elegance. Our process begins with understanding our clients deeply, their vision, style, and the sentiment behind every celebration.
              </p>

              <p className={styles.philosophyText}>
                We combine creativity with precision to design experiences that are visually stunning and flawlessly executed. Every element, from concept to décor, logistics to hospitality, is thoughtfully curated to ensure harmony and perfection.
              </p>

              <p className={styles.philosophyText}>
                Our philosophy is simple. We do not just plan events; we craft moments that linger, timeless, heartfelt, and unforgettable.
              </p>
            </div>
          </div>
        </section>

        {/* Signature Process Section */}
        <section className={styles.processSection}>
          <div className={styles.processContainer}>
            <h2 className={styles.sectionTitle}>OUR SIGNATURE PROCESS</h2>

            <div className={styles.processList}>
              {/* Step 1 */}
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Discovery and Consultation</h3>
                  <p className={styles.stepDescription}>
                    We begin by understanding your vision, preferences, and the emotions you want your event to convey. This step involves detailed discussions where clients share ideas, inspirations, and expectations. We deliver a clear roadmap and initial suggestions that set the foundation for a personalized celebration.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Concept and Design</h3>
                  <p className={styles.stepDescription}>
                    Our creative team transforms your vision into a unique concept and design. From themes, décor, and color palettes to experiential elements, we present mood boards and visual mockups for client feedback. Every detail is designed to reflect your style and story.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Planning and Logistics</h3>
                  <p className={styles.stepDescription}>
                    We handle all operational planning, including vendor coordination, timelines, budgets, and permits. Clients are kept informed at every stage, approving key decisions while we ensure seamless organization behind the scenes.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Production and Execution</h3>
                  <p className={styles.stepDescription}>
                    The concept comes to life as our team manages on-site setup, décor, technical requirements, and staff coordination. We deliver a flawless experience, handling every detail so clients can fully enjoy the celebration stress-free.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Post-Event Wrap Up</h3>
                  <p className={styles.stepDescription}>
                    After the event, we oversee take-down, vendor settlements, and event review. Clients receive a final recap, photographs, and any feedback documentation. We ensure the experience concludes smoothly, leaving lasting impressions and cherished memories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Our Approach Works */}
        <section className={styles.whySection}>
          <div className={styles.whyContainer}>
            <h2 className={styles.sectionTitle}>WHY OUR APPROACH WORKS</h2>

            <div className={styles.whyGrid}>
              <div className={styles.whyCard}>
                <h3 className={styles.whyTitle}>Attention to Detail</h3>
                <p className={styles.whyText}>
                  Every element is meticulously planned and executed. From the smallest décor piece to the grandest installation, nothing is overlooked.
                </p>
              </div>

              <div className={styles.whyCard}>
                <h3 className={styles.whyTitle}>Vendor Curation</h3>
                <p className={styles.whyText}>
                  We work only with trusted, premium vendors who share our commitment to excellence. Our relationships ensure quality, reliability, and seamless collaboration.
                </p>
              </div>

              <div className={styles.whyCard}>
                <h3 className={styles.whyTitle}>Transparent Communication</h3>
                <p className={styles.whyText}>
                  We keep you informed at every step. Clear communication, regular updates, and collaborative decision-making ensure your vision is realized exactly as you imagined.
                </p>
              </div>

              <div className={styles.whyCard}>
                <h3 className={styles.whyTitle}>Seamless On-Site Management</h3>
                <p className={styles.whyText}>
                  Our experienced team handles every aspect of event day execution. You relax and enjoy while we ensure everything runs flawlessly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Thematic Gallery Section */}
        <section className={styles.gallerySection}>
          <div className={styles.galleryContainer}>
            <h2 className={styles.sectionTitle}>THEMATIC GALLERY</h2>
            <p className={styles.galleryIntro}>Explore Our Signature Themes</p>

            <div className={styles.themesList}>
              {/* Pastel Theme */}
              <div className={styles.themeCard}>
                <div className={styles.themeImageWrapper}>
                  <Image
                    src="/gallery/themes/pastel/08406.webp"
                    alt="Pastel Theme Decor - Soft, elegant baby shower and engagement decorations"
                    fill
                    className={styles.themeImage}
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={blurDataURLs.photo}
                  />
                </div>
                <div className={styles.themeContent}>
                  <h3 className={styles.themeTitle}>Pastel Theme Decor</h3>
                  <p className={styles.themeDescription}>
                    Soft, elegant, and timeless. Our pastel themes create dreamy atmospheres perfect for baby showers, engagements, and intimate celebrations.
                  </p>
                </div>
              </div>

              {/* Blue Haldi Theme */}
              <div className={styles.themeCard}>
                <div className={styles.themeImageWrapper}>
                  <Image
                    src="/gallery/themes/blue-haldi/9192.webp"
                    alt="Blue Theme Haldi - Refreshing twist on traditional Haldi ceremony"
                    fill
                    className={styles.themeImage}
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={blurDataURLs.photo}
                  />
                </div>
                <div className={styles.themeContent}>
                  <h3 className={styles.themeTitle}>Blue Theme Haldi</h3>
                  <p className={styles.themeDescription}>
                    A refreshing twist on traditional Haldi ceremonies. Vibrant blue décor creates a unique and memorable celebration.
                  </p>
                </div>
              </div>

              {/* Carnival Theme */}
              <div className={styles.themeCard}>
                <div className={styles.themeImageWrapper}>
                  <Image
                    src="/gallery/themes/carnival/1693.webp"
                    alt="Carnival Theme Haldi - Fun, vibrant pool party celebration"
                    fill
                    className={styles.themeImage}
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={blurDataURLs.photo}
                  />
                </div>
                <div className={styles.themeContent}>
                  <h3 className={styles.themeTitle}>Carnival Theme Haldi</h3>
                  <p className={styles.themeDescription}>
                    Fun, vibrant, and full of energy. Our carnival-themed celebrations bring joy, color, and excitement to every moment.
                  </p>
                </div>
              </div>

              {/* Neon Theme */}
              <div className={styles.themeCard}>
                <div className={styles.themeImageWrapper}>
                  <Image
                    src="/gallery/themes/neon/56.webp"
                    alt="Neon Theme Sangeet - Bold, modern dance celebration"
                    fill
                    className={styles.themeImage}
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={blurDataURLs.photo}
                  />
                </div>
                <div className={styles.themeContent}>
                  <h3 className={styles.themeTitle}>Neon Theme Sangeet</h3>
                  <p className={styles.themeDescription}>
                    Bold, modern, and electrifying. Neon themes create high-energy atmospheres perfect for sangeet nights and dance celebrations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageTransition>

      <Footer />
    </div>
  )
}
