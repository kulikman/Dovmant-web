import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

// Variable fonts: one file per family covers 300–600, instead of five static files.
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Dovmant — Programmable Lower-Limb Exoskeleton for Locomotion Research",
    template: "%s — Dovmant",
  },
  description:
    "A research instrument with programmable torque, open telemetry and a transparent mode. Built for biomechanics and performance laboratories.",
  openGraph: { siteName: site.name, type: "website" },
};

export const viewport: Viewport = { themeColor: "#f2f2f2" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${interTight.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
