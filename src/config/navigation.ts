import type { NavItem } from "../types/nav.types";

/**
 * Configuració de la navegació del lloc
 * Centralitza tots els enllaços del menú
 */

export const navigationConfig = {
  main: [
    { label: "Inici", href: "/", icon: "home" },
    { label: "Serveis", href: "/serveis", icon: "services" },
    { label: "Per a qui", href: "/per-a-qui", icon: "users" },
    { label: "Qui sóc", href: "/about", icon: "success" },
    { label: "Blog", href: "/blog", icon: "blog" },
    { label: "Contacte", href: "/contacte", icon: "contact" },
  ] as NavItem[],

  footer: [
    { label: "Política de privacitat", href: "/privacitat" },
    { label: "Termes i condicions", href: "/termes" },
    { label: "Cookies", href: "/cookies" },
  ] as NavItem[],

  social: [
    {
      label: "Twitter",
      href: "https://twitter.com/seoambtalons",
      icon: "twitter",
      ariaLabel: "Segueix-nos a Twitter",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/company/seoambtalons",
      icon: "linkedin",
      ariaLabel: "Connecta amb nosaltres a LinkedIn",
    },
    {
      label: "Instagram",
      href: "https://instagram.com/seoambtalons",
      icon: "instagram",
      ariaLabel: "Segueix-nos a Instagram",
    },
  ] as NavItem[],
} as const;
