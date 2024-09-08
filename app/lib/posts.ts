/**
 * This module handles the retrieval and processing of blog posts.
 * It includes functions to fetch all posts and to paginate them.
 * The posts are sourced from a directory based on the blog slug constant.
 */
import { promises as fs } from "fs";
import path from "path";
import { BLOG_SLUG } from "@/app/lib/constants";

export type Post = {
  slug: string;
  title: string;
  date: string;
};

/**
 * Fetches all posts from the blog directory, extracts their metadata,
 * and sorts them from newest to oldest based on the publish date.
 *
 * @returns {Promise<Post[]>} A promise that resolves to an array of posts.
 */
export async function getPosts(): Promise<Post[]> {
  const blogDirPath = path.join(process.cwd(), `app/${BLOG_SLUG}/(posts)`);

  // Retrieve slugs from post routes by filtering directories
  const slugs = (await fs.readdir(blogDirPath, { withFileTypes: true })).filter(
    (dirent) =>
      dirent.isDirectory() &&
      !dirent.name.startsWith("[") &&
      dirent.name !== "page"
  );

  // Retrieve metadata from MDX files
  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(
        `./../${BLOG_SLUG}/(posts)/${name}/page.mdx`
      );
      return { slug: name, ...metadata };
    })
  );

  // Sort posts from newest to oldest based on the publish date
  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return posts;
}

/**
 * Fetches a paginated subset of posts.
 *
 * @param {Object} params - The pagination parameters.
 * @param {number} params.page - The current page number.
 * @param {number} params.limit - The number of posts per page.
 * @returns {Promise<{ posts: Post[]; total: number }>} A promise that resolves to an object containing the paginated posts and total post count.
 */
export async function getPaginatedPosts({
  page,
  limit,
}: {
  page: number;
  limit: number;
}): Promise<{ posts: Post[]; total: number }> {
  const allPosts = await getPosts();

  // Get a subset of posts pased on page and limit
  const paginatedPosts = allPosts.slice((page - 1) * limit, page * limit);

  return {
    posts: paginatedPosts,
    total: allPosts.length,
  };
}
