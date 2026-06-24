import type { Metadata } from "next";
import BackToHome from "@/components/buttons/back-to-home";
import Image from "next/image";

export const metadata = {
  title: "Subscription Confirmed - Benito Lopez",
  description: "You've successfully subscribed to my newsletter.",
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
        <p className="leading-7 text-gray-950 mb-10">
          Thank you for confirming your subscription to my newsletter. You'll
          now receive important product updates, feature announcements, and key
          information straight to your inbox.
        </p>

        <BackToHome />
      </div>
    </div>
  );
}
