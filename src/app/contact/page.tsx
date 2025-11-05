"use client"

import Image from "next/image"
import Navigation from "@/components/navigation/navigation"
import Footer from "@/components/footer/footer"
import { Linkedin, Instagram } from "lucide-react"
import { blurDataURLs } from "@/lib/image-utils"
import styles from "./contact.module.css"

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <Navigation />
      
      <div className={styles.heroSection}>
        {/* Optimized background image using Next.js Image */}
        <Image
          src="/gallery/contact/contact-min.png"
          alt="Contact background"
          fill
          priority
          quality={90}
          className={styles.heroImage}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurDataURLs.landscape}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        
        {/* Dark overlay for better text readability */}
        <div className={styles.heroOverlay} />
        
        <div className={styles.contactOverlay}>
          <h1 className={styles.title}>Contact</h1>
          <p className={styles.subtitle}>&quot;Let&apos;s Start Planning Your Celebration&quot;</p>
          
          <div className={styles.contactDetails}>
            <h2 className={styles.detailsTitle}>Get in Touch</h2>
            
            <p className={styles.address}>
              Office Address - Sf-114, Omkar-2, Station Rd, beside Lords Plaza,<br />
              GIDC, Ankleshwar GIDC, Ankleshwar, Gujarat 393002
            </p>
            
            <p className={styles.contactInfo}>
              Phone: <a href="tel:+919925044514" className={styles.link}>99250 44514</a>
            </p>
            
            <p className={styles.contactInfo}>
              Email: <a href="mailto:Hello@entertainmentsportz.com" className={styles.link}>
                Hello@entertainmentsportz.com
              </a>
            </p>
            
            <div className={styles.socialLinks}>
              {/* <a 
                href="https://www.linkedin.com/company/entertainmentsportz" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="LinkedIn"
              >
                <Linkedin size={32} />
              </a> */}
              <a 
                href="https://www.instagram.com/entertainmentsportz" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Instagram"
              >
                <Instagram size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}