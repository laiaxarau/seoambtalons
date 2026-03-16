# 🏗️ Arquitectura del Projecte - SEO amb Talons

## 📁 Estructura Refactoritzada

```
src/
├── config/           # Configuracions centralitzades
│   ├── site.ts       # Configuració del lloc (SEO, autor, xarxes)
│   └── navigation.ts # Configuració de navegació
├── data/             # Dades centralitzades
│   ├── services.ts   # Dades dels serveis
│   └── ticker.ts     # Dades del ticker
├── types/            # Tipus TypeScript
│   ├── head.types.ts
│   ├── nav.types.ts
│   ├── service.types.ts
│   └── ticker.types.ts
├── utils/            # Utilitats i helpers
│   └── index.ts      # Funcions comunes
├── components/       # Components organitzats per funcionalitat
│   ├── common/       # Components reutilitzables
│   ├── home/         # Components de la pàgina principal
│   └── seo/          # Components SEO
├── layouts/          # Layouts de pàgina
└── pages/            # Pàgines del lloc
```

## 🎯 Beneficis de la Refactorització

### ✅ **Centralització de Dades**

- Totes les constants en `config/`
- Dades dels components en `data/`
- Fàcil manteniment i actualitzacions

### ✅ **TypeScript Fort**

- Types centralitzats i reutilitzables
- Millor IntelliSense i detecció d'errors
- Documentació integrada

### ✅ **Components Organitzats**

- Agrupats per funcionalitat
- Eliminats components sense ús
- Imports més clars

### ✅ **Utilitats Reutilitzables**

- Funcions comunes per dates, SEO, arrays
- Lògica compartida
- Menys codi duplicat

## 🚀 Com Utilitzar

### Importar Configuració

```typescript
import { siteConfig } from "@/config/site";
import { navigationConfig } from "@/config/navigation";
```

### Importar Dades

```typescript
import { servicesData, servicesUtils } from "@/data/services";
import { tickerData, tickerUtils } from "@/data/ticker";
```

### Importar Utilitats

```typescript
import { sortPostsByDate, formatDate, generateMetaDescription } from "@/utils";
```

### Importar Types

```typescript
import type { Service, NavItem, HeadProps } from "@/types";
```

## 📋 Àrees de Millora Futura

- [ ] **Testing**: Afegir tests unitaris i d'integració
- [ ] **Performance**: Optimitzacions d'imatges i lazy loading
- [ ] **Accessibility**: Millores d'a11y i ARIA labels
- [ ] **i18n**: Suport per múltiples idiomes
- [ ] **CMS**: Integració amb sistema de gestió de continguts
- [ ] **Analytics**: Millor tracking i mètriques
