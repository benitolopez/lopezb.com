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
              className="block border w-full py-2 px-5 text-gray-800 placeholder:text-gray-800 rounded-md bg-gray-50 focus:outline-blue-500 outline-offset-0 sm:h-[60px]"
              placeholder="Enter your email address"
              defaultValue={state?.values?.email || ""}
              aria-invalid={state?.errors?.email ? "true" : "false"}
            />
            <button
              type="submit"
              disabled={pending}
              className={`mt-3 sm:mt-0 w-full sm:w-auto py-3 px-5 rounded-md hover:bg-black focus:outline-none text-left bg-blue-500 text-white top-[5px] right-[5px] sm:absolute h-[50px] flex items-center justify-center ${
                pending ? "cursor-not-allowed hover:bg-blue-500" : ""
              }`}
            >
              {pending ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="1"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Processing...</span>
                </>
              ) : (
                "Subscribe"
              )}
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
