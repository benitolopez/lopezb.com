/**
 * This module defines constants used throughout the blog page and
 * its associated menu. It includes the blog page slug, menu links,
 * and the number of posts displayed per page.
 */

/**
 * The blog page slug.
 * @constant
 */
export const BLOG_SLUG = "articles" as const;

/**
 * The menu's links.
 * @constant
 */
export const MENU_LINKS = [
  {
    id: "home",
    name: "Home",
    href: "/",
  },
  {
    id: "articles",
    name: "Articles",
    href: `/${BLOG_SLUG}`,
  },
] as const;
