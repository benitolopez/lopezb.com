import * as React from "react";

export default function Note({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <aside className="note mb-5 rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-600">
      {title && (
        <strong className="mb-1 block font-semibold text-gray-950">
          {title}
        </strong>
      )}
      <div>{children}</div>
    </aside>
  );
}
