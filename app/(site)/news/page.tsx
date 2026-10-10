import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { news } from "@/content/pages";

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
      <ul className="mt-16 border-t border-line">
        {news.items.map((n, i) => (
          <Reveal as="li" key={i} index={i}>
            <article className="grid grid-cols-12 gap-x-6 gap-y-3 border-b border-line py-8">
              <p className="col-span-12 text-[12px] leading-4 uppercase text-ink-muted md:col-span-2">
                {n.date}
              </p>
              <h2 className="display col-span-12 text-step md:col-span-6">{n.title}</h2>
              <p className="col-span-12 text-[13px] leading-[18px] text-ink-muted md:col-span-4">
                {n.text}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
