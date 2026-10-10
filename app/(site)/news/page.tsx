import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { newsItems, newsPage } from "@/content/news";

export const metadata: Metadata = {
  title: "News",
  description: "Company updates and research notes.",
};

export default function NewsPage() {
  return (
    <Section className="pt-8">
      <SquareMarker className="mb-8" />
      <SectionHeading as="h1" size="h1" text={newsPage.title} immediate />
      <p className="mt-6 max-w-[48ch] text-[20px] leading-[26px]">{newsPage.lead}</p>

      {newsItems.length === 0 ? (
        <p className="mt-16 text-[16px] leading-6 text-ink-muted">{newsPage.empty}</p>
      ) : (
        <ul className="mt-16 border-t border-line">
          {newsItems.map((n, i) => (
            <Reveal as="li" key={n.slug} index={i}>
              <article className="border-b border-line transition-colors hover:bg-surface-300/60">
                <Link
                  href={`/news/${n.slug}`}
                  className="group grid grid-cols-12 items-baseline gap-x-6 gap-y-3 py-8"
                >
                  <p className="col-span-12 text-[12px] leading-4 uppercase text-ink-muted md:col-span-2">
                    {n.date}
                  </p>
                  <h2 className="display col-span-12 text-step md:col-span-6">{n.title}</h2>
                  <p className="col-span-12 text-[13px] leading-[18px] text-ink-muted md:col-span-3">
                    {n.summary}
                  </p>
                  <span
                    aria-hidden
                    className="col-span-12 text-[28px] leading-none transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 md:col-span-1 md:justify-self-end"
                  >
                    ↗
                  </span>
                </Link>
              </article>
            </Reveal>
          ))}
        </ul>
      )}
    </Section>
  );
}
