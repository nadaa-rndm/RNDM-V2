import type { Metadata } from "next";
import { meta } from "@/lib/content";
import { Roboto_Mono, Tourney } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-mono",
});

/** Fallback for the display face while At Amiga loads, and for missing glyphs. */
const tourney = Tourney({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-tourney",
});

const display = localFont({
  src: "./fonts/AtAmiga.woff",
  weight: "400 800",
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${mono.variable} ${tourney.variable} ${display.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
