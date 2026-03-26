import type { ImageMetadata } from "astro";

/**
 * Estructura d'un servei einzell
 * Utilitzat al component Serveis.astro
 */
export interface Service {
  num: string;
  icon: ImageMetadata;
  title: string;
  desc: string;
  href: string;
  features?: string[];
}
