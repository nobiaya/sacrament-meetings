import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sacrament Meeting Planner",
  description: "Plan and manage sacrament meetings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}