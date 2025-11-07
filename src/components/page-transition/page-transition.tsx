"use client";

import { ReactNode, useEffect, useState } from 'react';
import styles from './page-transition.module.css';

interface PageTransitionProps {
  children: ReactNode;
  variant?: 'fade' | 'slide-up' | 'slide-down' | 'zoom' | 'stagger';
  delay?: number;
  duration?: number;
}

export default function PageTransition({
  children,
  variant = 'fade',
  delay = 0,
  duration = 600
}: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay + 50);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`${styles.pageTransition} ${styles[variant]} ${isVisible ? styles.visible : ''}`}
      style={{
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}
