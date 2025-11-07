"use client"

import Image from "next/image"
import Navigation from "@/components/navigation/navigation"
import Footer from "@/components/footer/footer"
import PageTransition from "@/components/page-transition/page-transition"
import { blurDataURLs } from "@/lib/image-utils"
import styles from "./about.module.css"

// Note: Metadata export doesn't work in client components
// Consider moving to a server component or using next/head for dynamic meta tags

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <Navigation />

      <div className={styles.content}>
        {/* Left Side - Scrollable Content */}
        <PageTransition variant="fade" duration={800}>
          <div className={styles.leftSection}>
            {/* About Section */}
            <PageTransition variant="slide-up" delay={100} duration={700}>
              <section className={styles.section}>
                {/* <h2 className={styles.pageTitle}>ABOUT</h2> */}
                <div className={styles.textContent}>
                  <p className={styles.paragraph}>
                    ES Celebrations began with a shared passion for creating unforgettable experiences. What started as intimate gatherings has evolved into a distinguished event management company known for creative concepts, flawless execution, and a deeply personalized touch.
                  </p>

                  <p className={styles.paragraph}>
                    We specialize in weddings and social celebrations—moments where emotions, stories, and dreams come alive. From the sparkle in a bride&apos;s eye to the laughter at milestone celebrations, these emotions fuel our creativity and inspire us to craft experiences that are as unique as the people behind them.
                  </p>

                  <p className={styles.paragraph}>
                    With over 100+ successful events, a trusted network of premium vendors, and a client-first approach, we continue to redefine celebration artistry through innovation, elegance, and heartfelt storytelling.
                  </p>
                </div>
              </section>
            </PageTransition>

            {/* Vision & Mission */}
            <PageTransition variant="slide-up" delay={200} duration={700}>
              <section className={styles.section}>
                <h3 className={styles.sectionTitle}>VISION & MISSION</h3>

                <div className={styles.visionMission}>
                  <div className={styles.vmItem}>
                    <h4 className={styles.vmLabel}>Vision</h4>
                    <p className={styles.vmText}>
                      To be the trusted name in creating soulful, beautiful celebrations that leave enduring memories.
                    </p>
                  </div>

                  <div className={styles.vmItem}>
                    <h4 className={styles.vmLabel}>Mission</h4>
                    <p className={styles.vmText}>
                      To curate, design, and execute events that reflect each client&apos;s uniqueness with care, creativity, and integrity.
                    </p>
                  </div>
                </div>
              </section>
            </PageTransition>

            {/* Values */}
            <PageTransition variant="slide-up" delay={300} duration={700}>
              <section className={styles.section}>
                <h3 className={styles.sectionTitle}>OUR VALUES</h3>
                <div className={styles.valuesList}>
                  <span className={styles.valueItem}>Personalization</span>
                  <span className={styles.valueItem}>Excellence</span>
                  <span className={styles.valueItem}>Transparency</span>
                  <span className={styles.valueItem}>Warmth</span>
                  <span className={styles.valueItem}>Reliability</span>
                </div>
              </section>
            </PageTransition>

            {/* Team */}
            <PageTransition variant="slide-up" delay={400} duration={700}>
              <section className={styles.section}>
                <h3 className={styles.sectionTitle}>THE MINDS BEHIND THE MAGIC</h3>
                <p className={styles.teamIntro}>
                  Every extraordinary celebration begins with a visionary team. At ES Celebrations, our strength lies in the people who dream, design, and deliver moments that linger long after the lights dim.
                </p>

                <div className={styles.teamList}>
                  <div className={styles.teamMember}>
                    <h4 className={styles.memberName}>Karan Rughani</h4>
                    <p className={styles.memberRole}>Founder</p>
                    <p className={styles.memberBio}>
                      With an innate flair for design and detail, Karan envisioned ES Celebrations as a brand that transforms dreams into exquisite realities. His discerning eye for aesthetics and uncompromising standards of excellence continue to redefine celebration artistry.
                    </p>
                  </div>

                  <div className={styles.teamMember}>
                    <h4 className={styles.memberName}>Viral Kanabar</h4>
                    <p className={styles.memberRole}>Co-Founder</p>
                    <p className={styles.memberBio}>
                      A visionary strategist with an entrepreneurial spirit, Viral brings balance and brilliance to every celebration. His ability to merge creative imagination with structured planning ensures every event is executed flawlessly and remembered beautifully.
                    </p>
                  </div>

                  <div className={styles.teamMember}>
                    <h4 className={styles.memberName}>Benazir Niyariya</h4>
                    <p className={styles.memberRole}>Head of Business Operations</p>
                    <p className={styles.memberBio}>
                      The powerhouse behind seamless operations, Benazir orchestrates every detail with precision and grace. Her people-first approach ensures that every event unfolds effortlessly—reflecting our promise of perfection.
                    </p>
                  </div>

                  <div className={styles.teamMember}>
                    <h4 className={styles.memberName}>Yukta Maru</h4>
                    <p className={styles.memberRole}>Client Relationship Manager</p>
                    <p className={styles.memberBio}>
                      Poised and personable, Yukta embodies warmth and professionalism. As the bridge between clients and creative teams, she ensures every vision is understood, refined, and brought to life with care.
                    </p>
                  </div>

                  <div className={styles.teamMember}>
                    <h4 className={styles.memberName}>Mohammed Hamza</h4>
                    <p className={styles.memberRole}>Head of Creations</p>
                    <p className={styles.memberBio}>
                      A creative visionary leading our design narrative, Hamza&apos;s artistry and innovation turn spaces into mesmerizing experiences. He continues to push the boundaries of imagination in event design and décor.
                    </p>
                  </div>
                </div>
              </section>
            </PageTransition>

            {/* Why Work With Us */}
            <PageTransition variant="slide-up" delay={500} duration={700}>
              <section className={styles.section}>
                <h3 className={styles.sectionTitle}>WHY WORK WITH US</h3>

                <div className={styles.whyList}>
                  <div className={styles.whyItem}>
                    <h4 className={styles.whyTitle}>Vendor Relationships</h4>
                    <p className={styles.whyText}>
                      Trusted partnerships with the finest names in the industry ensure unmatched quality and seamless collaboration.
                    </p>
                  </div>

                  <div className={styles.whyItem}>
                    <h4 className={styles.whyTitle}>Quality Control</h4>
                    <p className={styles.whyText}>
                      Every detail is refined, reviewed, and perfected—because excellence is never negotiable.
                    </p>
                  </div>

                  <div className={styles.whyItem}>
                    <h4 className={styles.whyTitle}>Client Experience</h4>
                    <p className={styles.whyText}>
                      We curate experiences that feel effortless, personal, and nothing short of extraordinary.
                    </p>
                  </div>

                  <div className={styles.whyItem}>
                    <h4 className={styles.whyTitle}>Full-Service Support</h4>
                    <p className={styles.whyText}>
                      From concept to curtain call, our team manages every element with precision, creativity, and grace.
                    </p>
                  </div>
                </div>
              </section>
            </PageTransition>
          </div>
        </PageTransition>

        {/* Right Side - Fixed Image */}
        <PageTransition variant="fade" delay={200} duration={1000}>
          <div className={styles.rightSection}>
            <Image
              src="/gallery/about/NIA08259.webp"
              alt="ES Celebrations Team"
              className={styles.image}
              width={600}
              height={900}
              priority
              placeholder="blur"
              blurDataURL={blurDataURLs.portrait}
              quality={85}
            />
          </div>
        </PageTransition>
      </div>

      <Footer />
    </div>
  )
}
