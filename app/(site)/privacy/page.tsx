import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { legal } from "@/content/legal";

export const metadata: Metadata = { title: "Privacy" };

export default function Page() {
  return <LegalPage doc={legal["privacy"]} />;
}
