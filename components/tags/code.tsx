import * as React from "react";

export default function CodeTag({ children }: { children: React.ReactNode }) {
  return (
    <code className="bg-white text-sm rounded-md p-1 before:content-['`'] after:content-['`'] content-['']">
      {children}
    </code>
  );
}
