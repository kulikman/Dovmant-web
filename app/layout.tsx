import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { site } from "@/content/site";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { StructuredData } from "@/components/StructuredData";
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
  // Lift both this and the note in robots.ts once counsel has signed off the
  // legal pages — see docs/todo.md 1.2.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#f2f2f2" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${interTight.variable} ${inter.variable}`}>
      <body>
        {children}
        <StructuredData />
        {/* Cookieless and first-party, so the cookie page stays accurate. Both are
            served by the Vercel edge, which does not exist locally — loading them
            outside a deployment only produces 404s in the console. */}
        {process.env.VERCEL === "1" && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  );
}
