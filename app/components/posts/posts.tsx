import { type Post } from "@/app/lib/posts";
import Link from "next/link";
import { parseISO, format } from "date-fns";
import { BLOG_SLUG } from "@/app/lib/constants";

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <>
      {posts.map(({ slug, title, date }) => (
        <div className="mb-5" key={slug}>
          <h2 className="title leading-7 text-black mb-2 font-bold text-xl">
            <Link href={`/${BLOG_SLUG}/${slug}`}>{title}</Link>
          </h2>
          <span className="date text-gray-500">
            {format(parseISO(date), "MMMM d, yyyy")}
          </span>
        </div>
      ))}
    </>
  );
}
