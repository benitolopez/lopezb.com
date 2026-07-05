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
          Hey there. I’m a software engineer based in Italy. I build web
          products, developer tools, and pragmatic software.
        </p>

        <p className="leading-7 text-gray-950 mb-5">
          I have 10+ years of experience building web products,
          WordPress/WooCommerce systems, and long-term commercial software used
          by thousands of people worldwide.
        </p>

        <h2 className="leading-7 text-black mt-12 mb-5 font-bold text-xl">
          Current focus
        </h2>

        <p className="leading-7 text-gray-950 mb-5">
          I’m currently focused on AI engineering and developer tools.
        </p>

        <p className="leading-7 text-gray-950 mb-5">
          My main project is{" "}
          <a
            href="https://ker.dev"
            className="text-gray-950 underline underline-offset-4 decoration-1 decoration-gray-400"
          >
            ker
          </a>
          , where I’m building an AI coding-agent daemon from first principles.
          I’m using it to study the practical parts of agent systems: model
          streaming, durable sessions, tool use, event logs, context ownership,
          and the boundary between an agent runtime and its clients.
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
            An AI coding-agent daemon. ker is designed as a daemon that owns the
            agent session while clients connect to it. I’m building it to
            explore how coding agents should handle conversations, coding
            sessions, model context, tool use, and user control.
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
            HyperLogLog, Bloom filters, Count-Min Sketch, and Top-K. I built it
            to explore lower-level systems work, data structures, and the
            tradeoffs behind approximate counting and membership queries.
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
            is a simple tool for storing and sharing private snippets without
            relying on a third-party service. It reflects my interest in small,
            focused developer tools that solve a specific workflow problem.
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
            A JavaScript date-range picker for hotel and booking websites. Hotel
            Datepicker was built around the constraints of real booking flows:
            minimum stays, disabled dates, check-in/check-out rules,
            localization, and date-range selection. It has been used by many
            hotel and hospitality websites over the years.
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
            A WordPress booking plugin for hotel websites. WP Hotelier provides
            room management, bookings, rates, seasonal pricing, and
            hotel-specific reservation flows inside WordPress. It represents a
            large part of my experience building product software for real
            businesses and non-technical users.
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
            A commercial WordPress theme and long-running product used by a
            large customer base. My work on Uncode has included backend systems,
            advanced customization features, WooCommerce integrations, and React
            components for the WordPress Block Editor. It is where much of my
            long-term experience with production software, compatibility,
            maintenance, and user-facing product work comes from.
          </p>
        </div>

        <h2 className="leading-7 text-black mt-12 mb-5 font-bold text-xl">
          WordPress
        </h2>

        <p className="leading-7 text-gray-950 mb-5">
          Over the past decade, I’ve built a significant presence in the
          WordPress ecosystem. I’ve created themes, plugins, and custom
          solutions that power thousands of websites worldwide.
        </p>

        <p className="leading-7 text-gray-950 mb-5">
          Throughout my WordPress journey, I achieved Elite Author status on
          Envato’s marketplace with Lollum Themes, and I’m currently part of the
          team behind{" "}
          <a
            href="https://undsgn.com/uncode/"
            className="text-gray-950 underline underline-offset-4 decoration-1 decoration-gray-400"
          >
            Uncode
          </a>
          , one of the most popular WordPress themes on the market. My work
          mainly focuses on backend development, React components for the Block
          Editor, and advanced WooCommerce features.
        </p>

        <p className="leading-7 text-gray-950 mb-5">
          Alongside team projects, I also build and maintain independent
          WordPress products, including{" "}
          <a
            href="https://wphotelier.com/"
            className="text-gray-950 underline underline-offset-4 decoration-1 decoration-gray-400"
          >
            WP Hotelier
          </a>
          , a hotel booking plugin focused on helping small hotels and B&Bs
          manage bookings directly through WordPress.
        </p>

        <h2 className="leading-7 text-black mt-12 mb-5 font-bold text-xl">
          Personal
        </h2>

        <p className="leading-7 text-gray-950 mb-5">
          Born in Switzerland, raised in Spain, and living in Italy, I'm a
          father of two with diverse interests. Music is a big part of my life —
          I enjoy playing guitar, particularly exploring jazz, experimental,
          noise, electronic, and ambient genres. I also spend time reading books
          and comics.
        </p>

        <p className="leading-7 text-gray-950 mb-5">
          Mathematics is another big passion, and after taking a few years away
          from formal education, I decided to return to academia and am now
          pursuing a BSc in Mathematics.
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
