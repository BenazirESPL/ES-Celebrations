"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import styles from "./footer.module.css"

export default function Footer() {
  const pathname = usePathname()
  const isContactPage = pathname === "/contact"

  return (
    <footer className={styles.footer}>
      <div className={styles.divider1} />
      <div className={styles.divider} />
      
      <div className={styles.content}>
        {/* Left Side - Logo */}
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image
              src="/es_text.png"
              alt="ES Celebrations"
              width={180}
              height={180}
              className={styles.logoImage}
            />
          </div>
        </div>

        {/* Right Side - Links and Social */}
        <div className={styles.right}>
          <div className={styles.links}>
            {!isContactPage && (
              <Link href="/contact" className={styles.link}>
                CONTACT
              </Link>
            )}
            <span className={styles.linkDivider}>FOLLOW US ON SOCIAL</span>
            
            <div className={styles.socialIcons}>
              <a
                href="https://www.instagram.com/escelebration/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/es-celebrations/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} ES Celebrations. All rights reserved.
        </p>
        <div className={styles.bottomLinks}>
          <Link href="/privacy" className={styles.bottomLink}>
            Privacy Policy
          </Link>
          <Link href="/terms" className={styles.bottomLink}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
