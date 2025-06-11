import type { Metadata } from "next";
import AskMeAnythingForm from "@/components/forms/ask-me-anything";

export const metadata: Metadata = {
  title: "Ask Me Anything - Benito Lopez",
  description:
    "Have a WordPress question? Ask me anything about WordPress development, coding problem, custom themes, plugins, and technical challenges.",
};

export default function AskMeAnything() {
  return (
    <div className="page">
      <h1 className="title leading-7 text-2xl font-bold text-black">
        Ask me anything!
      </h1>
      <div className="content mt-8">
        <p className="leading-7 text-gray-800 mb-5">
          Got a WordPress question? I'm here to help.
        </p>

        <p className="leading-7 text-gray-800 mb-5">
          Whether you're stuck on a coding problem, need architecture advice, or
          want guidance on the best approach for a specific WordPress challenge,
          feel free to reach out. I respond to every question personally via
          email -{" "}
          <strong className="font-bold text-black italic">
            completely free of charge
          </strong>
          .
        </p>

        <p className="leading-7 text-gray-800 mb-5">
          I'm Benito, a WordPress specialist with 10+ years building themes,
          plugins, and custom solutions that power thousands of sites. My
          experience spans deep WooCommerce development, custom post types,
          Block Editor components, performance optimization, and solving complex
          architectural challenges across the entire WordPress ecosystem.
        </p>

        <h2 className="leading-7 text-black mt-12 mb-5 font-bold text-xl">
          What you can ask
        </h2>

        <p className="leading-7 text-gray-800 mb-5">
          Feel free to reach out with code help like debugging issues,
          implementation questions, or{" "}
          <em className="italic">"how would you approach this?"</em> scenarios.
          I can also assist with architecture decisions such as plugin vs theme
          functionality, database design, and performance considerations.
          Whether you need guidance on WordPress best practices covering
          security, optimization, and development workflows, or technical help
          with custom post types, hooks, APIs, and any WordPress development
          topic, I'm here to help. I also provide general advice on choosing the
          right tools, planning complex projects, or anything else
          WordPress-related.
        </p>

        <h2 className="leading-7 text-black mt-12 mb-5 font-bold text-xl">
          How it works
        </h2>

        <p className="leading-7 text-gray-800 mb-5">
          Submit your question using the form below. I'll respond directly to
          your email with a detailed answer. If you're open to it, I may ask
          permission to publish your question (anonymously) and my response in
          the Q&A section of this site to help other developers facing similar
          challenges.
        </p>

        <p className="leading-7 text-gray-800 mb-5">
          All questions are welcome, from quick clarifications to complex
          architectural discussions. No question is too basic or too advanced.
        </p>

        <AskMeAnythingForm />
      </div>
    </div>
  );
}
