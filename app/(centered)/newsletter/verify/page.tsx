import type { Metadata } from "next";
import BackToHome from "@/components/buttons/back-to-home";
import Image from "next/image";

export const metadata = {
  title: "Confirm Your Email Address - Benito Lopez",
  description:
    "Confirm your email address to complete your newsletter subscription.",
  robots: {
    index: false,
    follow: false,
  },
};
export default function NewsletterConfirm() {
  return (
    <div className="page">
      <div className="max-w-[420px] text-center ">
        <Image
          src={`/avatars/me.jpg`}
          width="80"
          height="80"
          className="rounded-full mb-5 mx-auto"
          alt="Benito Lopez"
        />
        <h1 className="title leading-7 text-2xl font-bold text-black mb-5">
          One more step!
        </h1>
        <p className="leading-7 text-gray-900 mb-10">
          A verification email is on its way to your inbox. The email should
          arrive shortly. If it doesn't appear in your primary inbox, please
          check your promotions or spam folders.
        </p>

        <BackToHome />
      </div>
    </div>
  );
}
