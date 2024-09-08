import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="title leading-7 text-2xl mt-12 mb-6 font-bold text-black">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="leading-7 text-black mt-12 mb-5 font-bold text-xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="leading-7 text-black mt-12 mb-4 font-bold text-lg">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="leading-7 text-black mt-12 mb-3 font-bold">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="leading-7 text-gray-800 mb-5">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="leading-7 text-gray-800 mb-5 pl-3 list-disc marker:text-gray-300">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="leading-7 text-gray-800 mb-5 pl-4 list-decimal marker:text-gray-400">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="mb-2">{children}</li>,
    pre: ({ children }) => (
      <pre className="text-[13px] border my-8 p-5 rounded-md">{children}</pre>
    ),
    a: ({ children, ...props }) => (
      <a className="text-blue-600 hover:underline" {...props}>
        {children}
      </a>
    ),
    ...components,
  };
}
