import type { Metadata } from "next";
import BackToHome from "@/components/buttons/back-to-home";
import Image from "next/image";

export const metadata = {
  title: "Question submitted - Benito Lopez",
  description:
    "Your question has been successfully submitted and will be reviewed.",
  robots: {
    index: false,
    follow: false,
  },
};
export default function AMAConfirm() {
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
          Question received!
        </h1>
        <p className="leading-7 text-gray-800 mb-10">
          Thank you for submitting your question. I've received your message and
          will respond as soon as possible.
        </p>

        <BackToHome />
      </div>
    </div>
  );
}
