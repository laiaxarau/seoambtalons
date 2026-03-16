// Re-exporta la configuració del lloc per compatibilitat
// TODO: Migrar gradualment tots els imports a @/config/site
import { siteConfig } from './config/site';

export { siteConfig };
export { siteConfig as SITE_CONFIG };

export const SITE_TITLE = siteConfig.title;
export const SITE_DESCRIPTION = siteConfig.description;

// Re-exporta configuracions addicionals
export { navigationConfig } from "./config/navigation";
export { servicesData, servicesUtils } from "./data/services";
export { tickerData, tickerUtils } from "./data/ticker";
