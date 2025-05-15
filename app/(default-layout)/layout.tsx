import React from "react";
import Navigation from "@/components/nav/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />
      <main className="main container mx-auto px-12 my-12 max-w-3xl">
        {children}
      </main>
    </>
  );
}
