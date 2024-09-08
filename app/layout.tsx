import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/nav/navigation";

export const metadata: Metadata = {
  title: "Benito Lopez",
  description:
    "Software engineer with deep experience in front-end and back-end development. Passionate about solving problems and continuous learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="main container mx-auto px-12 my-12 max-w-3xl">
          {children}
        </main>
      </body>
    </html>
  );
}
