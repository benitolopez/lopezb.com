export default function Home() {
  return (
    <div className="page">
      <h1 className="title leading-7 text-2xl font-bold text-black">
        Benito Lopez
      </h1>
      <div className="content mt-8">
        <p className="leading-7 text-gray-800 mb-5">
          Hey there 👋, I’m Benito. I’m a{" "}
          <a
            href="https://github.com/benitolopez"
            className="text-blue-600 hover:underline"
          >
            software engineer
          </a>{" "}
          with over 10 years of experience and a solid front-end and back-end
          development background. I’m passionate about solving problems and
          constantly learning. Over the years, I’ve worked on various projects,
          from contributing to{" "}
          <a
            href="https://undsgn.com/uncode/"
            className="text-blue-600 hover:underline"
          >
            popular products
          </a>{" "}
          to building a{" "}
          <a
            href="https://wphotelier.com/"
            className="text-blue-600 hover:underline"
          >
            successful SaaS business
          </a>
          . I enjoy taking on challenges, developing custom features, and
          staying updated with the latest technologies.
        </p>
        <p className="leading-7 text-gray-800 mb-5">
          I also love math, and after a few years of wavering, I decided to go
          back to studying and am now pursuing a BSc in Mathematics.
        </p>

        <h2 className="leading-7 text-black mt-12 mb-5 font-bold text-xl">
          Projects and Selected Works
        </h2>

        <ul className="leading-7 text-gray-800 mb-5">
          <li className="mb-2">
            <a
              href="https://wphotelier.com/"
              className="text-blue-600 hover:underline"
            >
              WP Hotelier
            </a>{" "}
            - A WordPress booking plugin for building hotel websites. It’s my
            first SaaS and it’s growing, enough to pay my bills.
          </li>
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
          Born in Switzerland, raised in Spain, and living in Italy. I’m a
          father of two. I love music and play guitar, focusing on jazz,
          experimental, noise, electronic, and ambient genres. Additionally, I
          enjoy reading books.
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
