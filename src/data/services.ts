import type { Service } from "../types/service.types";
import auditSeo from "../assets/icons/audit-seo.svg";
import seoLocal from "../assets/icons/seo-local.svg";
import seoEcommerce from "../assets/icons/seo-ecommerce.svg";
import contentStrategy from "../assets/icons/content-strategy.svg";
import seoTechnical from "../assets/icons/seo-technical.svg";
import linkBuilding from "../assets/icons/link-building.svg";

/**
 * Dades dels serveis oferts
 * Centralitza tota la informació dels serveis en un sol lloc
 */

export const servicesData: Service[] = [
  {
    num: "01",
    icon: auditSeo,
    title: "Auditoria SEO",
    desc: "Analitzem el teu web de dalt a baix per detectar exactament per on s'escapa el teu tràfic i com recuperar-lo.",
    href: "/serveis/auditoria-seo",
    features: [
      "Anàlisi completa de l'estructura del web",
      "Auditoria tècnica SEO",
      "Anàlisi de paraules clau",
      "Informe detallat amb recomanacions",
    ],
  },
  {
    num: "02",
    icon: seoLocal,
    title: "SEO Local",
    desc: "Apareix quan les teves clientes et busquen a prop. Optimitzem el teu Google Business i les paraules clau locals.",
    href: "/serveis/seo-local",
    features: [
      "Optimització de Google My Business",
      "Paraules clau locals",
      "Schema markup local",
      "Gestió de ressenyes",
    ],
  },
  {
    num: "03",
    icon: seoEcommerce,
    title: "SEO per a E-commerce",
    desc: "Posicionem les teves fitxes de producte i categories per atraure clients que ja volen comprar.",
    href: "/serveis/seo-ecommerce",
    features: [
      "Optimització de fitxes de producte",
      "Estructura de categories SEO-friendly",
      "Schema markup de producte",
      "Optimització de conversions",
    ],
  },
  {
    num: "04",
    icon: contentStrategy,
    title: "Estratègia de Continguts",
    desc: "Creem un pla de continguts que posiciona i connecta amb el teu públic. El teu blog, la teva veu.",
    href: "/serveis/continguts-seo",
    features: [
      "Anàlisi de paraules clau per contingut",
      "Calendari editorial",
      "Estratègia de contingut inbound",
      "Optimització on-page",
    ],
  },
  {
    num: "05",
    icon: seoTechnical,
    title: "SEO Tècnic",
    desc: "Velocitat, estructura i indexació. Que Google pugui rastrejar i entendre el teu web sense obstacles.",
    href: "/serveis/seo-tecnic",
    features: [
      "Optimització de velocitat",
      "Millora de Core Web Vitals",
      "Optimització mòbil",
      "Correcció d'errors d'indexació",
    ],
  },
  {
    num: "06",
    icon: linkBuilding,
    title: "Link Building",
    desc: "Aconseguim que webs de qualitat parlin del teu negoci. Autoritat real que Google valora i premia.",
    href: "/serveis/linkbuilding",
    features: [
      "Anàlisi de perfil d'enllaços",
      "Estratègia de link building ètic",
      "Relacions amb influencers",
      "Monitoratge d'enllaços",
    ],
  },
];

/**
 * Utilitats per treballar amb les dades dels serveis
 */
export const servicesUtils = {
  getBySlug: (slug: string) =>
    servicesData.find((service) => service.href === `/serveis/${slug}`),
  getFeatured: (count = 3) => servicesData.slice(0, count),
  getAll: () => servicesData,
} as const;
