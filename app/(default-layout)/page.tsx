import NewsletterForm from "@/components/forms/newsletter";
import Link from "next/link";

export default function Home() {
  return (
    <div className="page">
      <h1 className="title leading-15 text-3xl font-bold text-black">
        Benito Lopez
      </h1>
      <div className="content mt-8">
        <p className="leading-7 text-gray-950 mb-5">
          Hey there. I’m a software engineer based in Italy with 10+ years of
          experience building web products, developer tools, WordPress and
          WooCommerce systems, and commercial software.
        </p>

        <p className="leading-7 text-gray-950 mb-5">
          I’m currently focused on AI engineering, and my main project is{" "}
          <a
            href="https://ker.dev"
            className="text-gray-950 underline underline-offset-4 decoration-1 decoration-gray-400"
          >
            ker
          </a>
          , a minimal coding agent.
        </p>

        <h2 className="leading-7 text-black mt-12 mb-5 font-bold text-xl">
          Projects
        </h2>

        <div>
          <h3 className="leading-7 text-gray-950 mb-2 font-bold">
            <a
              href="https://ker.dev"
              className="underline underline-offset-4 decoration-1 decoration-gray-400"
            >
              ker
            </a>
          </h3>

          <p className="leading-7 text-gray-950 mb-5">
            A minimal coding agent. ker runs as a long-lived daemon that owns
            the conversation state while a thin HTTP client sends prompts to it.
            It has durable sessions, queued prompts, bounded tool output, and
            context compaction. Written in TypeScript.
          </p>

          <h3 className="leading-7 text-gray-950 mb-2 font-bold ">
            <a
              href="https://github.com/benitolopez/limite"
              className="underline underline-offset-4 decoration-1 decoration-gray-400"
            >
              Limite
            </a>
          </h3>

          <p className="leading-7 text-gray-950 mb-5">
            A network service for probabilistic data structures. Limite is a
            single Go binary that speaks the Redis protocol and exposes
            HyperLogLog, Bloom filters, Count-Min Sketch, and Top-K.
          </p>

          <h3 className="leading-7 text-gray-950 mb-2 font-bold ">
            <a
              href="https://github.com/benitolopez/ssnipp"
              className="underline underline-offset-4 decoration-1 decoration-gray-400"
            >
              ssnipp
            </a>
          </h3>

          <p className="leading-7 text-gray-950 mb-5">
            A small self-hosted code snippet sharing tool written in Go. ssnipp
            stores and shares private snippets without relying on a third-party
            service.
          </p>

          <h3 className="leading-7 text-gray-950 mb-2 font-bold ">
            <a
              href="https://hoteldatepicker.org"
              className="underline underline-offset-4 decoration-1 decoration-gray-400"
            >
              Hotel Datepicker
            </a>
          </h3>

          <p className="leading-7 text-gray-950 mb-5">
            A JavaScript date-range picker for hotel and booking websites. It
            handles minimum stays, disabled dates, check-in/check-out rules,
            localization, and date-range selection.
          </p>

          <h3 className="leading-7 text-gray-950 mb-2 font-bold ">
            <a
              href="https://wphotelier.com"
              className="underline underline-offset-4 decoration-1 decoration-gray-400"
            >
              WP Hotelier
            </a>
          </h3>

          <p className="leading-7 text-gray-950 mb-5">
            A WordPress booking plugin for hotel websites. It provides room
            management, bookings, rates, seasonal pricing, and hotel-specific
            reservation flows inside WordPress.
          </p>

          <h3 className="leading-7 text-gray-950 mb-2 font-bold ">
            <a
              href="https://undsgn.com/uncode"
              className="underline underline-offset-4 decoration-1 decoration-gray-400"
            >
              Uncode
            </a>
          </h3>

          <p className="leading-7 text-gray-950 mb-5">
            A commercial WordPress theme. My work on Uncode covers backend
            systems, advanced customization features, WooCommerce integrations,
            and React components for the WordPress Block Editor.
          </p>
        </div>

        <h2 className="leading-7 text-black mt-12 mb-5 font-bold text-xl">
          WordPress
        </h2>

        <p className="leading-7 text-gray-950 mb-5">
          I’ve worked in the WordPress ecosystem for over a decade, building
          themes, plugins, and custom solutions. I reached Elite Author status
          on Envato’s marketplace with Lollum Themes, and I’m currently part of
          the team behind{" "}
          <a
            href="https://undsgn.com/uncode/"
            className="text-gray-950 underline underline-offset-4 decoration-1 decoration-gray-400"
          >
            Uncode
          </a>
          . Alongside team projects, I build and maintain my own WordPress
          products, including{" "}
          <a
            href="https://wphotelier.com/"
            className="text-gray-950 underline underline-offset-4 decoration-1 decoration-gray-400"
          >
            WP Hotelier
          </a>
          .
        </p>

        <h2 className="leading-7 text-black mt-12 mb-5 font-bold text-xl">
          Personal
        </h2>

        <p className="leading-7 text-gray-950 mb-5">
          Born in Switzerland, raised in Spain, and living in Italy. I’m a
          father of two. I play guitar (mostly jazz, experimental, noise,
          electronic, and ambient) and I read books and comics.
        </p>

        <p className="leading-7 text-gray-950 mb-5">
          I’m also pursuing a BSc in Mathematics.
        </p>

        <h2 className="leading-7 text-black mt-12 mb-5 font-bold text-xl">
          Connect
        </h2>

        <p className="leading-7 text-gray-950 mb-5">
          Reach me at{" "}
          <a
            href="https://twitter.com/LopezBenito"
            className="text-gray-950 underline underline-offset-4 decoration-1 decoration-gray-400"
          >
            @LopezBenito
          </a>
          , view my code on{" "}
          <a
            href="https://github.com/benitolopez"
            className="text-gray-950 underline underline-offset-4 decoration-1 decoration-gray-400"
          >
            GitHub
          </a>
          , or write me at{" "}
          <a
            href="mailto:hello@lopezb.com"
            className="text-gray-950 underline underline-offset-4 decoration-1 decoration-gray-400"
          >
            hello@lopezb.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
