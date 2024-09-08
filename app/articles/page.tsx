import Posts from "@/app/components/posts/posts";
import { getPosts } from "@/app/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Sharing thoughts on software development, life, and the journey through the tech world.",
};

export default async function Page() {
  const posts = await getPosts();

  return (
    <div className="page">
      <h1 className="title leading-7 text-2xl font-bold text-black">
        Articles
      </h1>
      <div className="content mt-8">
        <Posts posts={posts} />
      </div>
    </div>
  );
}
