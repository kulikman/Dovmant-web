import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { legal } from "@/content/legal";

export const metadata: Metadata = {
  title: "Research Use Statement",
  description: "Dovmant is a research instrument, not a medical device.",
};

export default function Page() {
  return <LegalPage doc={legal["research-use"]} />;
}
