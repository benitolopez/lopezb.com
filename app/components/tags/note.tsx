import * as React from "react";

export default function Note({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="note rounded-md leading-7 text-gray-800 mb-5 border p-5 text-sm">
      {title && <strong className="font-bold text-gray-950">{title}:</strong>}
      <div className="m-0">{children}</div>
    </div>
  );
}
