import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mustard Seed",
  description: "Mustard seed records",
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
