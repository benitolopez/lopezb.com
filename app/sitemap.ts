import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://lopezb.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://lopezb.com/articles",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://lopezb.com/articles/pds-a-go-server-and-an-honest-look-at-llm-assisted-development",
      lastModified: new Date("2026-01-02"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://lopezb.com/articles/how-to-create-a-static-blog-with-nextjs-and-markdown",
      lastModified: new Date("2025-09-08"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://lopezb.com/articles/claude-code-my-most-trusted-coworker-and-my-worst-enemy",
      lastModified: new Date("2025-07-24"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://lopezb.com/articles/on-writing",
      lastModified: new Date("2025-08-27"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://lopezb.com/articles/my-complicated-relationship-with-side-projects",
      lastModified: new Date("2025-12-02"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
