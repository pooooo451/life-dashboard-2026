import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Life Dashboard 2026 🎀",
  description: "Cozy life tracking dashboard with Sanrio-inspired design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-sanrio-pink/20 via-sanrio-purple/20 to-sanrio-blue/20">
        {children}
      </body>
    </html>
  );
}
