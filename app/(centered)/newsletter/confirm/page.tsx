import type { Metadata } from "next";
import BackToHome from "@/components/buttons/back-to-home";
import Image from "next/image";

export const metadata = {
  title: "Subscription confirmed - Benito Lopez",
  description:
    "You've successfully subscribed to the WordPress development newsletter.",
  robots: {
    index: false,
    follow: false,
  },
};
export default function NewsletterConfirm() {
  return (
    <div className="page">
      <div className="max-w-[455px] text-center ">
        <Image
          src={`/avatars/me.jpg`}
          width="80"
          height="80"
          className="rounded-full mb-5 mx-auto"
          alt="Benito Lopez"
        />
        <h1 className="title leading-7 text-2xl font-bold text-black mb-5">
          You're all set!
        </h1>
        <p className="leading-7 text-gray-800 mb-10">
          Thank you for confirming your subscription to my WordPress deep dives
          newsletter. You'll now receive in-depth articles on advanced WordPress
          development, performance optimization techniques, and technical
          insights straight to your inbox.
        </p>

        <BackToHome />
      </div>
    </div>
  );
}
