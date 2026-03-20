/**
 * Configuració global del lloc web
 * Centralitza totes les dades i constants del projecte
 */

export const siteConfig = {
  // Informació bàsica
  name: "SEO amb Talons",
  title: "SEO amb talons",
  description:
    "SEO estratègic per a dones emprenedores que volen créixer a Google sense perdre el seu estil.",
  url: "https://seoambtalons.cat",
  ogImage: "/images/og-default.jpg",

  // Autor i contacte
  author: {
    name: "Laia Xarau",
    email: "info@seoambtalons.cat",
    bio: "Especialista en SEO per a dones emprenedores",
    knowsAbout: [
      "SEO",
      "Estratègia de continguts",
      "SEO tècnic",
      "Màrqueting digital",
    ],
  },

  // Xarxes socials
  social: {
    twitter: "https://twitter.com/seoambtalons",
    linkedin: "https://linkedin.com/company/seoambtalons",
    instagram: "https://instagram.com/seoambtalons",
  },

  // Metadades SEO
  keywords: [
    "SEO",
    "posicionament web",
    "dones emprenedores",
    "Google",
    "màrqueting digital",
    "estrategia digital",
  ],

  // Configuració del blog
  blog: {
    postsPerPage: 9,
    featuredPostsCount: 3,
  },
} as const;

export type SiteConfig = typeof siteConfig;
