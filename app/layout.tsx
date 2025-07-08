import React from "react";
import type { Metadata } from "next";
import "@/app/globals.css";
import { FathomAnalytics } from "./fathom";

export const metadata: Metadata = {
  title: "Benito Lopez",
  description:
    "Full-stack software engineer building web applications, tools, and open source projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FathomAnalytics />
        {children}
      </body>
    </html>
  );
}
