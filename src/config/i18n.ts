/**
 * Configuració multilingüe
 * Defineix l'estructura d'URLs per a cada idioma i el mapa de pàgines.
 *
 * Per activar un idioma: canvia `available: false` → `true` a `availableLocales`
 * i crea les pàgines corresponents a src/pages/es/ o src/pages/en/
 */

export const locales = ["ca", "es", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ca";

/** Canvia a true quan les traduccions estiguin publicades */
export const availableLocales: Record<Locale, boolean> = {
  ca: true,
  es: false,
  en: false,
};

/**
 * Mapa d'URLs per locale.
 * Clau: pathname canònic en català (sense trailing slash, excepte arrel "/")
 * Valor: URL absoluta per cada locale
 *
 * Conveni de slugs:
 *   CA (arrel)  → /slug-en-catala
 *   ES          → /es/slug-en-castella
 *   EN          → /en/slug-in-english
 */
export const hreflangMap: Record<string, Record<Locale, string>> = {
  "/": {
    ca: "https://seoambtalons.cat/",
    es: "https://seoambtalons.cat/es/",
    en: "https://seoambtalons.cat/en/",
  },
  "/sobre-mi": {
    ca: "https://seoambtalons.cat/sobre-mi",
    es: "https://seoambtalons.cat/es/sobre-mi",
    en: "https://seoambtalons.cat/en/about",
  },
  "/treballa-amb-mi": {
    ca: "https://seoambtalons.cat/treballa-amb-mi",
    es: "https://seoambtalons.cat/es/trabaja-conmigo",
    en: "https://seoambtalons.cat/en/work-with-me",
  },
  "/contacte": {
    ca: "https://seoambtalons.cat/contacte",
    es: "https://seoambtalons.cat/es/contacto",
    en: "https://seoambtalons.cat/en/contact",
  },
  "/blog": {
    ca: "https://seoambtalons.cat/blog",
    es: "https://seoambtalons.cat/es/blog",
    en: "https://seoambtalons.cat/en/blog",
  },
};

/**
 * Retorna les URLs alternatives actives per a un pathname donat.
 * Només inclou locales marcats com `available: true`.
 *
 * Per a paths dinàmics (p.ex. /blog/slug) que no estan al mapa,
 * retorna null → no es renderitzen tags hreflang (correcte fins que hi hagi traducció).
 */
export function getActiveAlternates(
  pathname: string
): { locale: Locale; href: string }[] | null {
  // Normalitza: elimina trailing slash excepte l'arrel
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const alternates = hreflangMap[normalized];

  if (!alternates) return null;

  return (Object.entries(alternates) as [Locale, string][])
    .filter(([locale]) => availableLocales[locale])
    .map(([locale, href]) => ({ locale, href }));
}
