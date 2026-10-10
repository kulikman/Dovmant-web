import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { legal } from "@/content/legal";

export const metadata: Metadata = { title: "Medical Disclaimer" };

export default function Page() {
  return <LegalPage doc={legal["medical-disclaimer"]} />;
}
