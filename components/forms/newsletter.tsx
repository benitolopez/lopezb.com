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
      <div className="bg-black mt-12 mb-5 p-6 md:p-12 rounded-md">
        <h2 className="leading-7 text-white mb-5 font-bold text-xl">
          Stay updated on WordPress deep dives
        </h2>
        <p className="leading-7 text-gray-300 mb-5">
          Join my newsletter for in-depth WordPress articles exploring advanced
          development techniques, performance optimization, and under-the-hood
          insights. I'll be sharing real-world solutions and technical deep
          dives.
        </p>
        <form action={action}>
          {state?.errors?.email && (
            <span className="my-2 block text-white text-sm">
              {state.errors.email.join(", ")}
            </span>
          )}
          <div className="relative">
            <input
              type="text"
              name="email"
              id="email"
              required
              className="block w-full py-2 px-5 text-gray-800 placeholder:text-gray-400 rounded-md bg-white focus:outline-gray-400 outline-offset-0 h-[60px]"
              placeholder="Enter your email address"
              defaultValue={state?.values?.email || ""}
              aria-invalid={state?.errors?.email ? "true" : "false"}
            />

            <button
              type="submit"
              className="py-3 px-5 rounded-md bg-black focus:outline-none text-left hover:bg-blue-500 text-white top-[3px] right-[3px] absolute h-[54px]"
            >
              Subscribe
            </button>
          </div>
          {state?.response?.message && (
            <span className="mt-4 block text-white text-sm">
              {state.response?.message}
            </span>
          )}
        </form>
      </div>
    </>
  );
}
