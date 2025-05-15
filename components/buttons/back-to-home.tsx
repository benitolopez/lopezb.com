"use client";

import Link from "next/link";

export default function BackToHome() {
  return (
    <Link
      href="/"
      className="bg-black text-white hover:bg-blue-600 py-3 px-5 rounded-md  focus:outline-none "
    >
      Back to home
    </Link>
  );
}
