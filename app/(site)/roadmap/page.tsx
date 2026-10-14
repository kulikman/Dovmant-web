import type { Metadata } from "next";
import { DeckBlock } from "@/components/sections/DeckBlock";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { PageHero } from "@/components/sections/PageHero";
import { RoadmapPhases } from "@/components/sections/RoadmapPhases";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { roadmap } from "@/content/roadmap";
import { investors } from "@/content/investors";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "What exists, what is being built and what each step unlocks — the instrument, control and data, evidence, commercial terms and compliance groundwork.",
};

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        title={roadmap.title}
        lead={roadmap.lead}
        image="page-hero-roadmap"
        cta={{ label: "Investor relations", href: "/investors" }}
      />

      <Section>
        <RoadmapPhases />
        <p className="mt-10 max-w-[70ch] text-[13px] leading-[18px] text-ink-muted">
          {roadmap.caveat}
        </p>
      </Section>

      <DeckBlock />

      <Section id="contact">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 flex flex-col gap-6 md:col-span-5">
            <SquareMarker tone="accent" size={16} />
            <SectionHeading text={investors.contact.heading} size="h1" />
            <p className="max-w-[40ch] text-[20px] leading-[26px]">{investors.contact.text}</p>
          </div>
          <div className="col-span-12 md:col-span-7">
            <EnquiryForm kind="investor" />
          </div>
        </div>
      </Section>
    </>
  );
}
