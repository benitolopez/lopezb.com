import NewsletterForm from "@/components/forms/newsletter";
import Link from "next/link";

export default function Home() {
  return (
    <div className="page">
      <h1 className="title leading-15 text-3xl font-bold text-black">
        Benito Lopez
      </h1>
      <div className="content mt-8">
        <p className="leading-7 text-gray-900 mb-5">
          Hey there 👋. I’m a{" "}
          <a
            href="https://github.com/benitolopez"
            className="text-red-700 hover:underline"
          >
            software engineer
          </a>{" "}
          who enjoys building products and tools for the web.
        </p>

        <p className="leading-7 text-gray-900 mb-5">
          I work across the full stack to build web applications, tools, and
          long-term commercial products used by thousands of people worldwide.
          Over the years, this has meant working on backend systems, APIs,
          frontend interfaces, product features, and the maintenance work needed
          to keep software useful over time.
        </p>

        <p className="leading-7 text-gray-900 mb-5">
          I’ve been working remotely for 10+ years, which has taught me to be
          self-directed and communicate clearly.
        </p>

        <h2 className="leading-7 text-black mt-12 mb-5 font-bold text-xl">
          WordPress
        </h2>

        <p className="leading-7 text-gray-900 mb-5">
          Over the past decade, I’ve built a significant presence in the
          WordPress ecosystem. I’ve created themes, plugins, and custom
          solutions that power thousands of websites worldwide.
        </p>

        <p className="leading-7 text-gray-900 mb-5">
          Throughout my WordPress journey, I achieved Elite Author status on
          Envato’s marketplace with Lollum Themes, and I’m currently part of the
          team behind{" "}
          <a
            href="https://undsgn.com/uncode/"
            className="text-red-700 hover:underline"
          >
            Uncode
          </a>
          , one of the most popular WordPress themes on the market. My work
          mainly focuses on backend development, React components for the Block
          Editor, and advanced WooCommerce features.
        </p>

        <p className="leading-7 text-gray-900 mb-5">
          Alongside team projects, I also build and maintain independent
          WordPress products, including{" "}
          <a
            href="https://wphotelier.com/"
            className="text-red-700 hover:underline"
          >
            WP Hotelier
          </a>
          , a hotel booking plugin focused on helping small hotels and B&Bs
          manage bookings directly through WordPress.
        </p>

        <h2 className="leading-7 text-black mt-12 mb-5 font-bold text-xl">
          Projects
        </h2>

        <ul className="leading-7 text-gray-900 mb-5">
          <li className="mb-2">
            <a
              href="https://github.com/benitolopez/limite"
              className="text-red-700 hover:underline"
            >
              Limite
            </a>{" "}
            - A probabilistic data structures server written in Go. Supports
            HyperLogLog, Bloom filters, Count-Min Sketch, and Top-K while
            speaking the Redis protocol.
          </li>
          <li className="mb-2">
            <a
              href="https://hoteldatepicker.org/"
              className="text-red-700 hover:underline"
            >
              Hotel Datepicker
            </a>{" "}
            - A pure JavaScript date range picker for hotels or booking
            websites. It was tricky but fun to develop!
          </li>
          <li className="mb-2">
            <a
              href="https://ssnipp.com/"
              className="text-red-700 hover:underline"
            >
              ssnipp
            </a>{" "}
            - A minimal private code-sharing tool I built as a lightweight
            alternative to Pastebin for quickly sharing snippets with clients.
          </li>
        </ul>

        <h2 className="leading-7 text-black mt-12 mb-5 font-bold text-xl">
          Personal
        </h2>

        <p className="leading-7 text-gray-900 mb-5">
          Born in Switzerland, raised in Spain, and living in Italy, I'm a
          father of two with diverse interests. Music is a big part of my life —
          I enjoy playing guitar, particularly exploring jazz, experimental,
          noise, electronic, and ambient genres. I also spend time reading books
          and comics.
        </p>

        <p className="leading-7 text-gray-900 mb-5">
          Mathematics is another big passion, and after taking a few years away
          from formal education, I decided to return to academia and am now
          pursuing a BSc in Mathematics.
        </p>

        <h2 className="leading-7 text-black mt-12 mb-5 font-bold text-xl">
          Connect
        </h2>

        <p className="leading-7 text-gray-900 mb-5">
          Reach me at{" "}
          <a
            href="https://twitter.com/LopezBenito"
            className="text-red-700 hover:underline"
          >
            @LopezBenito
          </a>
          , view my code on{" "}
          <a
            href="https://github.com/benitolopez"
            className="text-red-700 hover:underline"
          >
            GitHub
          </a>
          , or write me at{" "}
          <a
            href="mailto:hello@lopezb.com"
            className="text-red-700 hover:underline"
          >
            hello@lopezb.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
