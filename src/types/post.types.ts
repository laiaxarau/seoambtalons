/**
 * Items per els Post del Blog
 * Array de strings per a l'efecte scroll infinit
 */
export type Post = {
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  mainImage?: string;
  body: { children: { text: string }[] }[];
};
