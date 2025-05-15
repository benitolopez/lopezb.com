import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Benito Lopez",
  description:
    "Full-stack developer with expertise in WordPress, web applications, and open source projects. 10+ years of remote work experience.",
};

export default function About() {
  return (
    <div className="page">
      <h1 className="title leading-7 text-2xl font-bold text-black">
        About me
      </h1>
      <div className="content mt-8">
        <p className="leading-7 text-gray-800 mb-5">
          I'm a software engineer with 10+ years of experience building web
          applications. I work across the full stack to build web applications
          and tools that solve real problems. While I specialize in WordPress
          development, my work spans frontend, backend, and everything in
          between.
        </p>

        <p className="leading-7 text-gray-800 mb-5">
          I've been working remotely for 10+ years, which has taught me to be
          self-directed and communicate clearly. I enjoy diving deep into
          technical challenges, whether it's optimizing performance, building
          custom features, or figuring out elegant solutions to complex
          problems.
        </p>

        <h2 className="leading-7 text-black mt-12 mb-5 font-bold text-xl">
          Projects and Selected Works
        </h2>

        <ul className="leading-7 text-gray-800 mb-5">
          <li className="mb-2">
            <a
              href="https://undsgn.com/uncode/"
              className="text-blue-600 hover:underline"
            >
              Uncode
            </a>{" "}
            - Top seller WordPress theme. I mainly deal with the backend, React
            (building components for the Block Editor) and the development of
            advanced and custom features for WooCommerce.
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
          <li className="mb-2">
            <a
              href="https://ssnipp.com/"
              className="text-blue-600 hover:underline"
            >
              ssnipp
            </a>{" "}
            - Minimalist and private code snippet sharer written in Go. I use it
            to share snippets with my clients.
          </li>
        </ul>

        <h2 className="leading-7 text-black mt-12 mb-5 font-bold text-xl">
          Personal
        </h2>

        <p className="leading-7 text-gray-800 mb-5">
          Born in Switzerland, raised in Spain, and living in Italy, I'm a
          father of two with diverse interests. Music plays a significant role
          in my life — I enjoy playing guitar, particularly exploring jazz,
          experimental, noise, electronic, and ambient genres. I also spend time
          reading books and comics.
        </p>

        <p className="leading-7 text-gray-800 mb-5">
          Mathematics is another big passion, and after taking a few years away
          from formal education, I decided to return to academia and am now
          pursuing a BSc in Mathematics.
        </p>

        <h2 className="leading-7 text-black mt-12 mb-5 font-bold text-xl">
          Connect
        </h2>

        <p className="leading-7 text-gray-800 mb-5">
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
