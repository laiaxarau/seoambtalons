import auditSeo from "../../assets/icons/audit-seo.svg";
import seoLocal from "../../assets/icons/seo-local.svg";
import seoEcommerce from "../../assets/icons/seo-ecommerce.svg";
import contentStrategy from "../../assets/icons/content-strategy.svg";
import seoTechnical from "../../assets/icons/seo-technical.svg";
import linkBuilding from "../../assets/icons/link-building.svg";
import type { Service } from "../../types/service.types";

export const servicesDataEn: Service[] = [
  {
    num: "01",
    icon: auditSeo,
    title: "SEO Audit",
    desc: "We analyse your website from top to bottom to pinpoint exactly where your traffic is leaking and how to get it back.",
    href: "/en/work-with-me",
    features: [
      "Full website structure analysis",
      "Technical SEO audit",
      "Keyword analysis",
      "Detailed report with recommendations",
    ],
  },
  {
    num: "02",
    icon: seoLocal,
    title: "Local SEO",
    desc: "Show up when your clients search nearby. We optimise your Google Business profile and local keywords.",
    href: "/en/work-with-me",
    features: [
      "Google My Business optimisation",
      "Local keywords",
      "Local schema markup",
      "Review management",
    ],
  },
  {
    num: "03",
    icon: seoEcommerce,
    title: "E-commerce SEO",
    desc: "We position your product pages and categories to attract customers who are already ready to buy.",
    href: "/en/work-with-me",
    features: [
      "Product page optimisation",
      "SEO-friendly category structure",
      "Product schema markup",
      "Conversion optimisation",
    ],
  },
  {
    num: "04",
    icon: contentStrategy,
    title: "Content Strategy",
    desc: "We create a content plan that ranks and connects with your audience. Your blog, your voice.",
    href: "/en/work-with-me",
    features: [
      "Content keyword analysis",
      "Editorial calendar",
      "Inbound content strategy",
      "On-page optimisation",
    ],
  },
  {
    num: "05",
    icon: seoTechnical,
    title: "Technical SEO",
    desc: "Speed, structure and indexation. So Google can crawl and understand your website without obstacles.",
    href: "/en/work-with-me",
    features: [
      "Speed optimisation",
      "Core Web Vitals improvement",
      "Mobile optimisation",
      "Indexation error fixes",
    ],
  },
  {
    num: "06",
    icon: linkBuilding,
    title: "Link Building",
    desc: "We get quality websites talking about your business. Real authority that Google values and rewards.",
    href: "/en/work-with-me",
    features: [
      "Link profile analysis",
      "Ethical link building strategy",
      "Influencer outreach",
      "Link monitoring",
    ],
  },
];
