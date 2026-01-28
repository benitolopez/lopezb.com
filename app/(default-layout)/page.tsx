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
          Hey there 👋, I’m{" "}
          <Link href="/about" className="text-blue-600 hover:underline">
            Benito
          </Link>
          . I’m a{" "}
          <a
            href="https://github.com/benitolopez"
            className="text-blue-600 hover:underline"
          >
            software engineer
          </a>{" "}
          with a solid front-end and back-end development background. I’m
          passionate about solving problems and constantly learning.
        </p>

        <p className="leading-7 text-gray-900 mb-5">
          I work across the full stack to build web applications and tools that
          solve real problems. While I have deep expertise in various
          technologies, my work spans frontend, backend, and everything in
          between. I've been working remotely for 10+ years, which has taught me
          to be self-directed and communicate clearly.
        </p>

        <h2 className="leading-7 text-black mt-12 mb-5 font-bold text-xl">
          WordPress
        </h2>

        <p className="leading-7 text-gray-900 mb-5">
          Over the past decade, I've built a significant presence in the
          WordPress ecosystem. I've created themes, plugins, and custom
          solutions that power thousands of websites worldwide. Throughout my
          WordPress journey, I achieved Elite Author status on Envato's
          marketplace (Lollum Themes) and now I'm part of the team behind{" "}
          <a
            href="https://undsgn.com/uncode/"
            className="text-blue-600 hover:underline"
          >
            Uncode
          </a>
          , one of the most popular WordPress themes on the market. I mainly
          deal with the backend, React (building components for the Block
          Editor) and the development of advanced and custom features for
          WooCommerce.
        </p>

        <h2 className="leading-7 text-black mt-12 mb-5 font-bold text-xl">
          Projects and Selected Works
        </h2>

        <ul className="leading-7 text-gray-900 mb-5">
          <li className="mb-2">
            <a
              href="https://github.com/benitolopez/limite"
              className="text-blue-600 hover:underline"
            >
              Limite
            </a>{" "}
            - A probabilistic data structures server written in Go. HyperLogLog,
            Bloom filters, Count-Min Sketch, and Top-K speaking Redis protocol.
          </li>
          <li className="mb-2">
            <a
              href="https://wphotelier.com/"
              className="text-blue-600 hover:underline"
            >
              WP Hotelier
            </a>{" "}
            - A WordPress booking plugin for building hotel websites.
          </li>
          <li className="mb-2">
            <a
              href="https://hoteldatepicker.org/"
              className="text-blue-600 hover:underline"
            >
              Hotel Datepicker
            </a>{" "}
            - A pure JavaScript date range picker for hotels or booking
            websites. It was tricky but fun to develop!
          </li>
        </ul>

        <h2 className="leading-7 text-black mt-12 mb-5 font-bold text-xl">
          Personal
        </h2>

        <p className="leading-7 text-gray-900 mb-5">
          Born in Switzerland, raised in Spain, and living in Italy, I'm a
          father of two with diverse interests. Music plays a significant role
          in my life — I enjoy playing guitar, particularly exploring jazz,
          experimental, noise, electronic, and ambient genres. I also spend time
          reading books and comics.
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
            className="text-blue-600 hover:underline"
          >
            @LopezBenito
          </a>
          , view my code on{" "}
          <a
            href="https://github.com/benitolopez"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          , or write me at{" "}
          <a
            href="mailto:hello@lopezb.com"
            className="text-blue-600 hover:underline"
          >
            hello@lopezb.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
