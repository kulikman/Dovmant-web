import type { Metadata } from "next";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { investors } from "@/content/about";

export const metadata: Metadata = {
  title: "Investor Relations",
  description:
    "Our thesis on why the exoskeleton category has not produced a venture outcome, and what we are doing differently.",
};

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        title={investors.title}
        lead={investors.paragraphs[0]}
        image="page-hero-investors"
      />

      <Section>
        <div className="grid grid-cols-12 gap-x-6 gap-y-8 border-y border-ink py-10">
          <SquareMarker tone="accent" size={16} className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-10">
            {investors.paragraphs.slice(1).map((p, i) => (
              <Reveal key={i} index={i}>
                <p className="mb-6 max-w-[62ch] text-[20px] leading-[26px] last:mb-0">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="deck">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 flex flex-col gap-6 md:col-span-5">
            <SectionHeading text={investors.cta.heading} size="h1" />
            <p className="max-w-[40ch] text-[16px] leading-6 text-ink-muted">
              {investors.cta.text}
            </p>
          </div>
          <div className="col-span-12 md:col-span-7">
            <EnquiryForm kind="deck" />
          </div>
        </div>
      </Section>
    </>
  );
}
