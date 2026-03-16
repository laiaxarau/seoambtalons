import type { ImageMetadata } from "astro";

/**
 * Props per al component SEOHead
 * Amb suport opcional per a imatges personalitzades
 */
export interface HeadProps {
  title: string;
  description: string;
  image?: ImageMetadata;
  canonical?: string;
  ogImage?: string;
}
