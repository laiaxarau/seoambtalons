import type { TickerItem } from "../types/ticker.types";

/**
 * Dades per al component Ticker (scroll infinit)
 * Paraules clau i serveis que es mostren en bucle
 */

export const tickerData: TickerItem[] = [
  "SEO Estratègic",
  "Auditoria SEO",
  "SEO Local",
  "E-commerce SEO",
  "Continguts SEO",
  "Link Building",
  "SEO Tècnic",
  "Posicionament Web",
  "Google Analytics",
  "Google Search Console",
  "Paraules Clau",
  "Core Web Vitals",
  "Mobile First",
  "UX/UI Design",
  "Màrqueting Digital",
  "Dones Emprenedores",
];

/**
 * Utilitats per al ticker
 */
export const tickerUtils = {
  getDoubled: () => [...tickerData, ...tickerData],
  getRandom: (count = 5) => {
    const shuffled = [...tickerData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  },
} as const;
