import { defineMiddleware } from 'astro:middleware';

const COMING_SOON_ROUTES = [
  '/serveis',
  '/blog',
  '/contacte',
  '/per-a-qui',
  '/casos-exit',
];

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);
  
  if (COMING_SOON_ROUTES.includes(url.pathname)) {
    return context.redirect('/coming-soon');
  }
  
  return next();
});