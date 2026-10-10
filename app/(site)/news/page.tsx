import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { news } from "@/content/about";

export const metadata: Metadata = {
  title: "News",
  description: "Company updates and research notes.",
};

export default function NewsPage() {
  return (
    <Section className="pt-8">
      <SquareMarker className="mb-8" />
      <SectionHeading as="h1" size="h1" text={news.title} immediate />
      <p className="mt-6 max-w-[48ch] text-[20px] leading-[26px]">{news.lead}</p>
      <p className="mt-16 max-w-[60ch] border-t border-line pt-8 text-[16px] leading-6 text-ink-muted">
        {news.empty}
      </p>
    </Section>
  );
}
