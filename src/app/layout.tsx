import type { Metadata } from "next";
import "./globals.css"; // Injects your Tailwind utility layers globally

export const metadata: Metadata = {
  title: "UTask App",
  description: "Connecting users with vetted professional artisans",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-950">{children}</body>
    </html>
  );
}
