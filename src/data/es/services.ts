import auditSeo from "../../assets/icons/audit-seo.svg";
import seoLocal from "../../assets/icons/seo-local.svg";
import seoEcommerce from "../../assets/icons/seo-ecommerce.svg";
import contentStrategy from "../../assets/icons/content-strategy.svg";
import seoTechnical from "../../assets/icons/seo-technical.svg";
import linkBuilding from "../../assets/icons/link-building.svg";
import type { Service } from "../../types/service.types";

export const servicesDataEs: Service[] = [
  {
    num: "01",
    icon: auditSeo,
    title: "Auditoría SEO",
    desc: "Analizamos tu web de arriba abajo para detectar exactamente por dónde se escapa tu tráfico y cómo recuperarlo.",
    href: "/es/trabaja-conmigo",
    features: [
      "Análisis completo de la estructura web",
      "Auditoría técnica SEO",
      "Análisis de palabras clave",
      "Informe detallado con recomendaciones",
    ],
  },
  {
    num: "02",
    icon: seoLocal,
    title: "SEO Local",
    desc: "Aparece cuando tus clientas te buscan cerca. Optimizamos tu Google Business y las palabras clave locales.",
    href: "/es/trabaja-conmigo",
    features: [
      "Optimización de Google My Business",
      "Palabras clave locales",
      "Schema markup local",
      "Gestión de reseñas",
    ],
  },
  {
    num: "03",
    icon: seoEcommerce,
    title: "SEO para E-commerce",
    desc: "Posicionamos tus fichas de producto y categorías para atraer clientes que ya quieren comprar.",
    href: "/es/trabaja-conmigo",
    features: [
      "Optimización de fichas de producto",
      "Estructura de categorías SEO-friendly",
      "Schema markup de producto",
      "Optimización de conversiones",
    ],
  },
  {
    num: "04",
    icon: contentStrategy,
    title: "Estrategia de Contenidos",
    desc: "Creamos un plan de contenidos que posiciona y conecta con tu público. Tu blog, tu voz.",
    href: "/es/trabaja-conmigo",
    features: [
      "Análisis de palabras clave para contenido",
      "Calendario editorial",
      "Estrategia de contenido inbound",
      "Optimización on-page",
    ],
  },
  {
    num: "05",
    icon: seoTechnical,
    title: "SEO Técnico",
    desc: "Velocidad, estructura e indexación. Que Google pueda rastrear y entender tu web sin obstáculos.",
    href: "/es/trabaja-conmigo",
    features: [
      "Optimización de velocidad",
      "Mejora de Core Web Vitals",
      "Optimización móvil",
      "Corrección de errores de indexación",
    ],
  },
  {
    num: "06",
    icon: linkBuilding,
    title: "Link Building",
    desc: "Conseguimos que webs de calidad hablen de tu negocio. Autoridad real que Google valora y premia.",
    href: "/es/trabaja-conmigo",
    features: [
      "Análisis de perfil de enlaces",
      "Estrategia de link building ético",
      "Relaciones con influencers",
      "Monitoreo de enlaces",
    ],
  },
];
