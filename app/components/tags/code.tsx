import * as React from "react";

export default function CodeTag({ children }: { children: React.ReactNode }) {
  return (
    <code className="bg-gray-100 text-sm rounded-md p-1 before:content-['`'] after:content-['`'] content-['']">
      {children}
    </code>
  );
}
