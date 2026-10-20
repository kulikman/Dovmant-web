import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { legal } from "@/content/legal";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "How this site is built and tested against WCAG 2.1 AA, and what is not yet verified.",
};

export default function Page() {
  return <LegalPage doc={legal.accessibility} />;
}
