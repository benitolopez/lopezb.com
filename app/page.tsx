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
          constantly learning.
        </p>

        <p className="leading-7 text-gray-800 mb-5">
          As a WordPress specialist, I've spent the last decade building themes,
          plugins, and custom solutions that power thousands of websites
          worldwide. Throughout my WordPress journey, I achieved Elite Author
          status on Envato's marketplace (Lollum themes) and now I'm part of the
          team behind{" "}
          <a
            href="https://undsgn.com/uncode/"
            className="text-blue-600 hover:underline"
          >
            Uncode
          </a>
          , one of the most popular WordPress themes on the market.
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
