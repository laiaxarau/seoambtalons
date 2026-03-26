import type { NavItem } from "../types/nav.types";

import { linkedIn, x, instagram } from "../assets/icons/socials";

/**
 * Configuració de la navegació del lloc
 * Centralitza tots els enllaços del menú
 */

export const navigationConfig = {
  main: [
    { label: "Inici", href: "/" },
    // { label: "Serveis", href: "/serveis", icon: "services" },
    // { label: "Per a qui", href: "/per-a-qui", icon: "users" },
    { label: "Qui sóc", href: "/qui-soc" },
    { label: "Treballa amb mi", href: "/treballa-amb-mi" },
    // { label: "Contacte", href: "/contacte" },
    // { label: "Blog", href: "/blog", icon: "blog" },
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
      icon: x,
      ariaLabel: "Segueix-nos a Twitter",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/company/seoambtalons",
      icon: linkedIn,
      ariaLabel: "Connecta amb nosaltres a LinkedIn",
    },
    {
      label: "Instagram",
      href: "https://instagram.com/seoambtalons",
      icon: instagram,
      ariaLabel: "Segueix-nos a Instagram",
    },
  ] as NavItem[],
} as const;
