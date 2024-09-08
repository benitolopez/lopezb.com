const snippets = [
  {
    snippet: `
\`\`\`text
npx create-next-app@latest
\`\`\`
`,
  },
  {
    snippet: `
\`\`\`text
npm install @next/mdx @mdx-js/loader @mdx-js/react
\`\`\`
`,
  },
  {
    snippet: `
\`\`\`tsx {4} showLineNumbers
import nextMDX from "@next/mdx";

const withMDX = nextMDX({
  extension: /\\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default withMDX(nextConfig);
\`\`\`
`,
  },
  {
    snippet: `
\`\`\`tsx {4} showLineNumbers
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
\`\`\`
`,
  },
  {
    snippet: `
\`\`\`tsx {4} showLineNumbers
export const metadata = {
  title: "Hello world",
  description: "Your description here",
  date: "2024-01-01T00:00:00Z",
  categories: ["javascript"],
};
\`\`\`
`,
  },
  {
    snippet: `
\`\`\`md {4} showLineNumbers
# Heading

## Sub-heading

# Alternative heading

## Alternative sub-heading

Paragraphs are separated
by a blank line.

Two spaces at the end of a line  
produce a line break.
\`\`\`
`,
  },
  {
    snippet: `
\`\`\`js {4} showLineNumbers
import { promises as fs } from "fs";
import path from "path";

export type Post = {
  slug: string;
  title: string;
  date: string;
  categories: string[];
};

export async function getPosts(): Promise<Post[]> {
  const blogDirPath = path.join(process.cwd(), \`app/blog/(posts)\`);

  const slugs = (await fs.readdir(blogDirPath, { withFileTypes: true })).filter(
    (dirent) =>
      dirent.isDirectory() &&
      !dirent.name.startsWith("[") &&
      dirent.name !== "page"
  );

  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(\`./../blog/(posts)/\${name}/page.mdx\`);
      return { slug: name, ...metadata };
    })
  );

  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return posts;
}
\`\`\`
`,
  },
  {
    snippet: `
\`\`\`tsx {4} showLineNumbers
import { type Post } from "@/app/lib/posts";
import Link from "next/link";
import { parseISO, format } from "date-fns";

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <>
      {posts.map(({ slug, title, date }) => (
        <div key={slug}>
          <h2>
            <Link href={\`/blog/\${slug}\`}>{title}</Link>
          </h2>
          <span>{format(parseISO(date), "MMMM d, yyyy")}</span>
        </div>
      ))}
    </>
  );
}
\`\`\`
`,
  },
  {
    snippet: `
\`\`\`text
npm install date-fns
\`\`\`
`,
  },
  {
    snippet: `
\`\`\`tsx {4} showLineNumbers
import Posts from "@/app/components/posts";
import { getPosts } from "@/app/lib/posts";

export default async function Page() {
  const posts = await getPosts();

  return <Posts posts={posts} />;
}
\`\`\`
`,
  },
  {
    snippet: `
\`\`\`ts {4} showLineNumbers
export const CATEGORIES = [
  {
    id: "react",
    name: "React",
  },
  {
    id: "javascript",
    name: "JavaScript",
  },
  {
    id: "wordpress",
    name: "WordPress",
  },
] as const;
\`\`\`
`,
  },
  {
    snippet: `
\`\`\`tsx {4} showLineNumbers
import { CATEGORIES } from "@/app/lib/constants";

export type Category = {
  id: string;
  name: string;
};

export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

export function getCategoryURL(id: string): string {
  return \`/category/\${id}\`;
}
\`\`\`
`,
  },
  {
    snippet: `
\`\`\`ts {4} showLineNumbers
import { promises as fs } from "fs";
import path from "path";

export type Post = {
  slug: string;
  title: string;
  date: string;
  categories: string[];
};

export async function getPosts(): Promise<Post[]> {
  const blogDirPath = path.join(process.cwd(), \`app/blog/(posts)\`);

  const slugs = (await fs.readdir(blogDirPath, { withFileTypes: true })).filter(
    (dirent) =>
      dirent.isDirectory() &&
      !dirent.name.startsWith("[") &&
      dirent.name !== "page"
  );

  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(\`./../blog/(posts)/\${name}/page.mdx\`);
      return { slug: name, ...metadata };
    })
  );

  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return posts;
}

// New function
export async function getPostsByCategory({
  category,
}: {
  category: string;
}): Promise<Post[]> {
  const allPosts = await getPosts();

  const posts = allPosts.filter((post) => post.categories?.includes(category));

  return posts;
}
\`\`\`
`,
  },
  {
    snippet: `
\`\`\`tsx {4} showLineNumbers
import { type Post } from "@/app/lib/posts";
import Link from "next/link";
import { parseISO, format } from "date-fns";
import { CATEGORIES } from "@/app/lib/constants";
import { Category, getCategoryURL } from "@/app/lib/categories";

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <>
      {posts.map(({ slug, title, date, categories }) => (
        <div key={slug}>
          <h2>
            <Link href={\`/blog/\${slug}\`}>{title}</Link>
          </h2>
          <span>{format(parseISO(date), "MMMM d, yyyy")}</span>
          {categories && categories.length > 0 && (
            <div>
              <span>Categories:</span>
              {categories.map((catId: string) => {
                const category = CATEGORIES.find((c) => c.id === catId) as
                  | Category
                  | undefined;

                if (!category) {
                  return null;
                }

                return (
                  <a href={getCategoryURL(category.id)} key={category.id}>
                    {category.name}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </>
  );
}
\`\`\`
`,
  },
  {
    snippet: `
\`\`\`tsx {4} showLineNumbers
import Posts from "@/app/components/posts";
import { getPostsByCategory } from "@/app/lib/posts";
import { CATEGORIES } from "@/app/lib/constants";
import { notFound } from "next/navigation";
import { Category, getCategoryById } from "@/app/lib/categories";

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;

  const categoryData = getCategoryById(category);

  if (categoryData === undefined) {
    return notFound();
  }

  const posts = await getPostsByCategory({ category });

  return <Posts posts={posts} />;
}

export function generateStaticParams() {
  return CATEGORIES.map((category: Category) => ({
    category: category.id,
  }));
}
\`\`\`
`,
  },
  {
    snippet: `
\`\`\`text
npm install rehype-pretty-code rehype-stringify @rehype-pretty/transformer
\`\`\`
`,
  },
  {
    snippet: `
\`\`\`ts {4} showLineNumbers
import nextMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: "min-light",
};

const withMDX = nextMDX({
  extension: /\\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default withMDX(nextConfig);
\`\`\`
`,
  },
  {
    snippet: `
\`\`\`tsx {4} showLineNumbers
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";

export async function Code({ code }: { code: string }) {
  const highlightedCode = await highlightCode(code);
  return (
    <section
      dangerouslySetInnerHTML={{
        __html: highlightedCode,
      }}
    />
  );
}

async function highlightCode(code: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: "min-light",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    })
    .use(rehypeStringify)
    .process(code);

  return String(file);
}
\`\`\`
`,
  },
  {
    snippet: `
\`\`\`tsx {4} showLineNumbers
<Code code={\`
\\\`\\\`\\\`jsx {4} showLineNumbers
// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
console.log('Listening on 127.0.0.1:3000');
});
\\\`\\\`\\\`
\`} />
\`\`\`
`,
  },
];

export default snippets;
