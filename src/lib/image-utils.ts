/**
 * Image optimization utilities for Next.js
 * Provides blur placeholders and image loading optimizations
 */

// Shimmer effect SVG for loading placeholders
export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#e8e4df" offset="20%" />
      <stop stop-color="#f5f1ed" offset="50%" />
      <stop stop-color="#e8e4df" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#e8e4df" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

// Convert string to base64
export const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

// Generate blur data URL for images
export const getBlurDataURL = (width: number = 700, height: number = 475) =>
  `data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`

// Common blur data URLs for different aspect ratios
export const blurDataURLs = {
  // 16:9 landscape (hero images, videos)
  landscape: getBlurDataURL(1920, 1080),
  // 3:2 standard photo
  photo: getBlurDataURL(900, 600),
  // 4:3 standard
  standard: getBlurDataURL(800, 600),
  // 1:1 square
  square: getBlurDataURL(600, 600),
  // 2:3 portrait
  portrait: getBlurDataURL(600, 900),
}
