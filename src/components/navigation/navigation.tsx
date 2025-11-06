"use client"

import { useState, useEffect, memo, useCallback } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import styles from "./navigation.module.css"

const AnimatedMenuIcon = memo(({ isOpen }: { isOpen: boolean }) => {
  // Optimized transition configs
  const lineTransition = { duration: 0.25, ease: "easeInOut" } as const;
  const opacityTransition = { duration: 0.15 } as const;

  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <motion.line
        x1="5"
        y1="6"
        x2="19"
        y2="6"
        animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        transition={lineTransition}
      />
      <motion.line
        x1="2"
        y1="12"
        x2="22"
        y2="12"
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={opacityTransition}
      />
      <motion.line
        x1="5"
        y1="18"
        x2="19"
        y2="18"
        animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        transition={lineTransition}
      />
    </svg>
  );
});
AnimatedMenuIcon.displayName = "AnimatedMenuIcon"

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const menuItems = [
    { label: "ABOUT", href: "/about" },
    { label: "SERVICES", href: "/services" },
    { label: "APPROACH", href: "/approach" },
    { label: "CONTACT", href: "/contact" }
  ]

  // Close menu when pathname changes (after navigation completes)
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Memoized toggle handler to prevent unnecessary re-renders
  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  // Get current page name
  let currentPage = menuItems.find(item => item.href === pathname)?.label || ""

  if(pathname.includes('services')) currentPage = 'SERVICES'

  return (
    <header className={isHomePage ? styles.header : styles.headerColor}>
      <div className={styles.headerContent}>
        {/* Left Side - Menu Button and Page Name */}
        <div className={styles.leftSection}>
          <button onClick={handleMenuToggle} className={styles.menuButton} aria-label="Toggle menu">
            <AnimatedMenuIcon isOpen={isMenuOpen} />
          </button>
          {!isHomePage && currentPage && (
            <span className={styles.pageName}>{currentPage}</span>
          )}
        </div>

        {/* Logo - centered on home, right-aligned on other pages */}
        <Link
          href="/"
          className={isHomePage ? styles.logo : styles.logoSmall}
          // className={styles.logo}
        >
          <Image
            src="/es_horizontal.png"
            alt="ES Celebrations"
            width={isHomePage ? 200 : 150}
            height={isHomePage ? 60 : 45}
            priority
            className={styles.logoImage}
          />
        </Link>
      </div>

      {/* Mobile Menu with Framer Motion */}
      {isMenuOpen && (
        <motion.nav
          className={styles.mobileMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {/* Close Button */}
          <button onClick={() => setIsMenuOpen(false)} className={styles.closeButton} aria-label="Close menu">
            <AnimatedMenuIcon isOpen={true} />
          </button>

          {/* Logo at Top */}
          <div>
            <Link href="/" className={styles.menuLogo}>
            {/* <Link href="/" className={isHomePage ? styles.menuLogo : styles.menuLogoOpen}> */}
              <Image
                src="/es_horizontal.png"
                alt="ES Celebrations"
                width={250}
                height={75}
                className={styles.menuLogoImageHome}
                // className={isHomePage ? styles.menuLogoImageHome : styles.menuLogoImage}
              />
            </Link>
          </div>

          {/* Menu Items - Vertical Stack */}
          <div className={styles.menuItems}>
            {menuItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
              return (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className={`${styles.menuLink} ${isActive ? styles.menuLinkActive : ''}`}
                    prefetch={true}
                  >
                    {item.label}
                  </Link>
                </div>
              )
            })}
          </div>
        </motion.nav>
      )}
    </header>
  )
}

export default memo(Navigation)
Navigation.displayName = "Navigation"
