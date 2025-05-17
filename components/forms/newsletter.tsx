"use client";

import { useActionState } from "react";
import { subscribeToNewsletter } from "@/actions/forms";
import Link from "next/link";

export default function NewsletterForm() {
  const [state, action, pending] = useActionState(
    subscribeToNewsletter,
    undefined
  );

  return (
    <>
      <div className="border mt-12 mb-5 p-6 md:p-12 rounded-md">
        <h2 className="leading-7 text-black mb-5 font-bold text-xl">
          Stay updated on WordPress deep dives
        </h2>
        <p className="leading-7 text-gray-800 mb-5">
          Join my newsletter for in-depth WordPress articles exploring advanced
          development techniques, performance optimization, and under-the-hood
          insights. I'll be sharing real-world solutions and technical deep
          dives.
        </p>
        <form action={action}>
          <div className="relative">
            <input
              type="text"
              name="email"
              id="email"
              required
              className="block border w-full py-2 px-5 text-gray-800 placeholder:text-gray-800 rounded-md bg-gray-50 focus:outline-gray-400 outline-offset-0 h-[60px]"
              placeholder="Enter your email address"
              defaultValue={state?.values?.email || ""}
              aria-invalid={state?.errors?.email ? "true" : "false"}
            />
            <button
              type="submit"
              className="py-3 px-5 rounded-md hover:bg-black focus:outline-none text-left bg-blue-500 text-white top-[5px] right-[5px] absolute h-[50px]"
            >
              Subscribe
            </button>
          </div>
          {state?.errors?.email && (
            <span className="mt-4 block text-red-500 font-bold text-sm">
              {state.errors.email.join(", ")}
            </span>
          )}
          {state?.response?.message && (
            <span className="mt-4 block text-red-500 text-sm font-bold">
              {state.response?.message}
            </span>
          )}
        </form>
      </div>
    </>
  );
}
