import React from "react";
import Navigation from "@/components/nav/navigation";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />
      <main className="main container mx-auto px-6 my-6 md:px-8 md:my-8 lg:px-12 lg:my-12 max-w-[45rem]">
        {children}
      </main>
    </>
  );
}
