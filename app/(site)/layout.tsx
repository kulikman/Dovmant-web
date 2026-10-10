import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileCta } from "@/components/layout/MobileCta";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-surface-100"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <MobileCta />
    </>
  );
}
