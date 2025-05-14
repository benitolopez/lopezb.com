import * as React from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";

export async function Code({ code, file }: { code: string; file: string }) {
  const highlightedCode = await highlightCode(code);
  return (
    <div className="text-[13px] border my-8 pb-5 rounded-md">
      {file && (
        <p className="text-[13px] text-gray-500 border-b py-2 px-5 bg-gray-50">
          File: {file}
        </p>
      )}
      <section
        className="px-5 pt-5"
        dangerouslySetInnerHTML={{
          __html: highlightedCode,
        }}
      />
    </div>
  );
}

async function highlightCode(code: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: "min-light",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    })
    .use(rehypeStringify)
    .process(code);

  return String(file);
}
