import type { Metadata } from "next";
import { ImageSlot } from "@/components/media/ImageSlot";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { PageHero } from "@/components/sections/PageHero";
import { ThreeUp } from "@/components/sections/ThreeUp";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { performance as p } from "@/content/performance";

export const metadata: Metadata = {
  title: "Performance Research",
  description:
    "A controllable, repeatable load and a measurable data stream for performance laboratories. No recovery claims.",
};

export default function PerformancePage() {
  return (
    <>
      <PageHero title={p.title} lead={p.lead} image="page-hero-performance" />

      <Section>
        <SectionHeading text={p.scenarios.heading} size="h1" className="mb-10 md:mb-16" />
        <ThreeUp items={p.scenarios.items} numbered />
      </Section>

      <Section>
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-6">
            <ImageSlot
              id="sprint-trial"
              aspect="3/2"
              overlay="bottom-third"
              sizes="(min-width:768px) 45vw, 100vw"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <ImageSlot id="lab-console" aspect="16/9" sizes="(min-width:768px) 45vw, 100vw" />
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-12 gap-x-6 gap-y-8 border-y border-ink py-10">
          <div className="col-span-12 flex flex-col gap-6 md:col-span-5">
            <SquareMarker tone="accent" size={16} />
            <SectionHeading text={p.noClaims.heading} size="h2" />
          </div>
          <p className="col-span-12 max-w-[52ch] text-[20px] leading-[26px] md:col-span-7">
            {p.noClaims.text}
          </p>
        </div>
      </Section>

      <Section id="evaluation">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 flex flex-col gap-6 md:col-span-5">
            <SectionHeading text={p.cta.heading} size="h1" />
            <p className="max-w-[40ch] text-[20px] leading-[26px]">{p.cta.text}</p>
          </div>
          <div className="col-span-12 md:col-span-7">
            <EnquiryForm kind="performance-evaluation" />
          </div>
        </div>
      </Section>
    </>
  );
}
