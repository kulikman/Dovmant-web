import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { DeckBlock } from "@/components/sections/DeckBlock";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { PageHero } from "@/components/sections/PageHero";
import { ThreeUp } from "@/components/sections/ThreeUp";
import { Timeline } from "@/components/sections/Timeline";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { investors as inv } from "@/content/investors";

export const metadata: Metadata = {
  title: "Investor Relations",
  description:
    "Our thesis on why the exoskeleton category has not produced a venture outcome, and what we are doing differently.",
};

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        title={inv.title}
        lead={inv.lead}
        image="page-hero-investors"
        cta={{ label: "The roadmap", href: "/roadmap" }}
      />

      <Section>
        <div className="grid grid-cols-12 gap-x-6 gap-y-8 border-y border-ink py-10">
          <div className="col-span-12 flex flex-col gap-6 md:col-span-4">
            <SquareMarker tone="accent" size={16} />
            <SectionHeading text={inv.thesis.heading} size="h1" />
          </div>
          <div className="col-span-12 md:col-span-8">
            {inv.thesis.paragraphs.map((p, i) => (
              <Reveal key={i} index={i}>
                <p className="mb-6 max-w-[62ch] text-[20px] leading-[26px] last:mb-0">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading text={inv.why.heading} size="h1" className="mb-10 md:mb-16" />
        <ThreeUp items={inv.why.items} numbered />
      </Section>

      <Section>
        <SectionHeading text={inv.market.heading} size="h1" className="mb-8" />
        <p className="mb-10 max-w-[60ch] text-[16px] leading-6 text-ink-muted">{inv.market.note}</p>
        <table className="w-full border-t border-line text-left text-[16px] leading-6">
          <caption className="sr-only">Market</caption>
          <thead>
            <tr className="border-b border-line text-[12px] leading-4 text-ink-muted uppercase">
              <th scope="col" className="py-3 pr-4 font-medium">
                Segment
              </th>
              <th scope="col" className="py-3 pr-4 font-medium">
                Figure
              </th>
              <th scope="col" className="py-3 font-medium">
                Source
              </th>
            </tr>
          </thead>
          <tbody>
            {inv.market.rows.map(([segment, figure, source]) => (
              <tr
                key={segment}
                className="border-b border-line transition-colors hover:bg-surface-300/60"
              >
                <td className="py-4 pr-4">{segment}</td>
                <td className="py-4 pr-4">{figure}</td>
                <td className="py-4 text-ink-muted">{source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section>
        <SectionHeading text={inv.model.heading} size="h1" className="mb-10 md:mb-16" />
        <ThreeUp items={inv.model.items} />
      </Section>

      <Section>
        <SectionHeading text={inv.traction.heading} size="h1" className="mb-8" />
        <p className="mb-10 max-w-[60ch] text-[16px] leading-6 text-ink-muted">
          {inv.traction.note}
        </p>
        {inv.traction.items.length === 0 ? (
          <p className="max-w-[60ch] border-t border-line pt-8 text-[20px] leading-[26px]">
            {inv.traction.empty}
          </p>
        ) : (
          <Timeline
            items={inv.traction.items.map((t) => ({ year: t.date, title: t.title, note: t.note }))}
          />
        )}
      </Section>

      <Section>
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 md:col-span-5">
            <SectionHeading text={inv.round.heading} size="h1" />
          </div>
          <p className="col-span-12 max-w-[52ch] text-[20px] leading-[26px] md:col-span-7">
            {inv.round.text}
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 md:col-span-5">
            <SectionHeading text={inv.team.heading} size="h1" />
          </div>
          <div className="col-span-12 md:col-span-7">
            <p className="max-w-[52ch] text-[20px] leading-[26px]">{inv.team.text}</p>
            <Button href={inv.team.link.href} arrow="→" className="mt-6">
              {inv.team.link.label}
            </Button>
          </div>
        </div>
      </Section>

      <DeckBlock />

      <Section id="contact">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 flex flex-col gap-6 md:col-span-5">
            <SectionHeading text={inv.contact.heading} size="h1" />
            <p className="max-w-[40ch] text-[20px] leading-[26px]">{inv.contact.text}</p>
            <Link href="/roadmap" className="link w-fit text-[15px]">
              See the roadmap →
            </Link>
          </div>
          <div className="col-span-12 md:col-span-7">
            <EnquiryForm kind="investor" />
          </div>
        </div>
      </Section>
    </>
  );
}
