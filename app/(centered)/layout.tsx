import React from "react";

export default function CenteredLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="main flex items-center justify-center min-h-screen px-4">
        {children}
      </main>
    </>
  );
}
