import React from "react";
import type { Metadata } from "next";
import "@/app/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Benito Lopez",
  description:
    "Software engineer building web products, developer tools, AI agents, and pragmatic systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-JE6RKLYY68" />
    </html>
  );
}
