// import type { CollectionEntry } from "astro:content";

// /**
//  * Utilitats per treballar amb col·leccions de contingut
//  */

// export function sortPostsByDate<T extends CollectionEntry<"blog">>(
//   posts: T[],
// ): T[] {
//   return posts.sort(
//     (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
//   );
// }

// export function getFeaturedPosts<T extends CollectionEntry<"blog">>(
//   posts: T[],
//   count = 3,
// ): T[] {
//   return sortPostsByDate(posts).slice(0, count);
// }

// export function getPostsByTag<T extends CollectionEntry<"blog">>(
//   posts: T[],
//   tag: string,
// ): T[] {
//   return posts.filter((post) => post.data.tags?.includes(tag));
// }

// /**
//  * Utilitats per dates
//  */

// export function formatDate(date: Date, locale = "ca-ES"): string {
//   return date.toLocaleDateString(locale, {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });
// }

// export function formatDateShort(date: Date, locale = "ca-ES"): string {
//   return date.toLocaleDateString(locale, {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   });
// }

// export function getReadingTime(text: string): number {
//   const wordsPerMinute = 200;
//   const words = text.trim().split(/\s+/).length;
//   return Math.ceil(words / wordsPerMinute);
// }

// /**
//  * Utilitats per SEO
//  */

// export function generateMetaDescription(
//   content: string,
//   maxLength = 160,
// ): string {
//   if (content.length <= maxLength) return content;

//   const truncated = content.substring(0, maxLength - 3);
//   const lastSpace = truncated.lastIndexOf(" ");

//   return lastSpace > 0
//     ? truncated.substring(0, lastSpace) + "..."
//     : truncated + "...";
// }

// export function generateSlug(text: string): string {
//   return text
//     .toLowerCase()
//     .normalize("NFD")
//     .replace(/[\u0300-\u036f]/g, "") // Remove accents
//     .replace(/[^a-z0-9\s-]/g, "") // Remove special chars
//     .trim()
//     .replace(/\s+/g, "-") // Replace spaces with hyphens
//     .replace(/-+/g, "-"); // Remove multiple hyphens
// }

// /**
//  * Utilitats per arrays i objectes
//  */

// export function chunk<T>(array: T[], size: number): T[][] {
//   const chunks: T[][] = [];
//   for (let i = 0; i < array.length; i += size) {
//     chunks.push(array.slice(i, i + size));
//   }
//   return chunks;
// }

// export function unique<T>(array: T[]): T[] {
//   return [...new Set(array)];
// }

// /**
//  * Utilitats per classes CSS
//  */

// export function cn(...classes: (string | undefined | null | false)[]): string {
//   return classes.filter(Boolean).join(" ");
// }

// export function getActiveClass(
//   isActive: boolean,
//   activeClass = "active",
//   inactiveClass = "",
// ): string {
//   return isActive ? activeClass : inactiveClass;
// }
