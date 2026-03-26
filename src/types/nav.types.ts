import type { SvgComponent } from "astro/types";

/**
 * Tipus per als elements de navegació
 */
export interface NavItem {
  label: string;
  href: string;
  icon?: ImageMetadata;
  ariaLabel?: string;
}
