"use client";

import { useActionState } from "react";
import { submitAMAQuestion } from "@/actions/forms";
import Link from "next/link";

export default function AskMeAnythingForm() {
  const [state, action, pending] = useActionState(submitAMAQuestion, undefined);

  return (
    <>
      <div className="border mt-12 p-6 md:p-12 rounded-md">
        <form action={action}>
          <label
            htmlFor="name"
            className="block text-sm font-bold text-black mb-3"
          >
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="block border w-full py-2 px-5 text-gray-800 placeholder:text-gray-500 rounded-md bg-gray-50 focus:outline-blue-500 outline-offset-0 sm:h-[50px]"
            placeholder="Your name"
            defaultValue={state?.values?.name || ""}
            aria-invalid={state?.errors?.name ? "true" : "false"}
          />

          {state?.errors?.name && (
            <span className="mt-2 block text-red-500 text-sm">
              {state.errors.name.join(", ")}
            </span>
          )}

          <label
            htmlFor="email"
            className="block text-sm font-bold text-black mb-3 mt-6"
          >
            Email:
          </label>
          <input
            type="text"
            name="email"
            id="email"
            required
            className="block border w-full py-2 px-5 text-gray-800 placeholder:text-gray-500 rounded-md bg-gray-50 focus:outline-blue-500 outline-offset-0 sm:h-[50px]"
            placeholder="your@email.com"
            defaultValue={state?.values?.email || ""}
            aria-invalid={state?.errors?.email ? "true" : "false"}
          />

          {state?.errors?.email && (
            <span className="mt-2 block text-red-500 text-sm">
              {state.errors.email.join(", ")}
            </span>
          )}

          <label
            htmlFor="url"
            className="block text-sm font-bold text-black mb-3 mt-6"
          >
            Website/Project URL (optional):
          </label>
          <input
            type="text"
            name="url"
            id="url"
            className="block border w-full py-2 px-5 text-gray-800 placeholder:text-gray-500 rounded-md bg-gray-50 focus:outline-blue-500 outline-offset-0 sm:h-[50px]"
            placeholder="https://example.com"
            defaultValue={state?.values?.url || ""}
            aria-invalid={state?.errors?.url ? "true" : "false"}
          />

          {state?.errors?.url && (
            <span className="mt-2 block text-red-500 text-sm">
              {state.errors.url.join(", ")}
            </span>
          )}

          <label
            htmlFor="experience"
            className="block text-sm font-bold text-black mb-3 mt-6"
          >
            WordPress experience level:
          </label>
          <select
            key={state?.values?.experience || ""}
            name="experience"
            id="experience"
            required
            className="bg-gray-50 border text-gray-800 rounded-md focus:outline-blue-500 block w-full py-2 px-5 sm:h-[50px] has-[option.placeholder:checked]:text-gray-500"
            defaultValue={state?.values?.experience || ""}
            aria-invalid={state?.errors?.experience ? "true" : "false"}
          >
            <option value="" disabled className="placeholder">
              Select your experience level
            </option>
            <option
              value="beginner"
              // selected={state?.values?.experience === "beginner"}
            >
              Beginner
            </option>
            <option
              value="intermediate"
              // selected={state?.values?.experience === "intermediate"}
            >
              Intermediate
            </option>
            <option
              value="advanced"
              // selected={state?.values?.experience === "advanced"}
            >
              Advanced
            </option>
          </select>

          {state?.errors?.experience && (
            <span className="mt-2 block text-red-500 text-sm">
              {state.errors.experience.join(", ")}
            </span>
          )}

          <label
            htmlFor="message"
            className="block text-sm font-bold text-black mb-3 mt-6"
          >
            Question:
          </label>
          <textarea
            name="message"
            id="message"
            required
            defaultValue={state?.values?.message || ""}
            placeholder="Describe your WordPress challenge, include relevant code snippets (use Pastebin, GitHub, etc.), context about your project, or any details that might help me provide a better answer..."
            className="block border w-full py-3 px-5 text-gray-800 placeholder:text-gray-500 rounded-md bg-gray-50 focus:outline-blue-500 outline-offset-0 sm:h-[200px] leading-7"
          ></textarea>

          {state?.errors?.message && (
            <span className="mt-2 block text-red-500 text-sm">
              {state.errors.message.join(", ")}
            </span>
          )}

          <p className=" text-gray-800 mb-5 mt-6">
            Code snippets pasted directly into this form may prevent your
            message from being delivered. Instead, please use external services
            like{" "}
            <a
              href="https://pastebin.com/"
              className="text-blue-600 hover:underline"
            >
              Pastebin
            </a>
            ,{" "}
            <a
              href="https://gist.github.com/"
              className="text-blue-600 hover:underline"
            >
              GitHub Gist
            </a>
            , or{" "}
            <a
              href="https://codepen.io/"
              className="text-blue-600 hover:underline"
            >
              CodePen
            </a>{" "}
            to share your code, then include the link in your message.
          </p>

          <label className="leading-7 text-gray-800 mb-5 flex items-center mt-4">
            <input
              type="checkbox"
              name="subscribe"
              id="subscribe"
              className="mr-2"
              defaultChecked={state?.values?.subscribe ?? true}
            />
            <span>Subscribe me to the WordPress newsletter</span>
          </label>

          <button
            type="submit"
            disabled={pending}
            className={`mt-6 py-3 px-5 rounded-md hover:bg-black focus:outline-none w-full text-left bg-blue-500 text-white h-[60px] flex items-center justify-center ${
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
              "Submit question"
            )}
          </button>

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
