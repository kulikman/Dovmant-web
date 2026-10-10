import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { legal } from "@/content/legal";

export const metadata: Metadata = { title: "Cookies" };

export default function Page() {
  return <LegalPage doc={legal["cookies"]} />;
}
