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
      url: "https://lopezb.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://lopezb.com/blog/how-to-create-a-static-blog-with-nextjs-and-markdown",
      lastModified: new Date("2024-09-08"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
