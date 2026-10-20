import type { Metadata } from "next";
import { ImageSlot } from "@/components/media/ImageSlot";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { NumberedSteps } from "@/components/sections/NumberedSteps";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { specifications as spec } from "@/content/specifications";

export const metadata: Metadata = {
  title: "Specification",
  description:
    "The full technical specification, a quotation and the paperwork a grants office needs, issued to a named institution on request.",
};

export default function SpecificationsPage() {
  return (
    <>
      <PageHero title={spec.title} lead={spec.lead} image="page-hero-specifications">
        <div className="flex flex-wrap items-center gap-4">
          <Button href="#request" variant="filled" arrow="→">
            Request the specification
          </Button>
        </div>
      </PageHero>

      <Section>
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-5">
            <ImageSlot id="device-standalone" aspect="4/5" sizes="(min-width:768px) 40vw, 100vw" />
          </div>
          <div className="col-span-12 flex flex-col justify-center gap-6 md:col-span-7">
            <SquareMarker tone="accent" />
            <SectionHeading text={spec.why.heading} size="h2" />
            <p className="max-w-[52ch] text-[20px] leading-[26px]">{spec.why.text}</p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading text={spec.covers.heading} size="h1" className="mb-8" />
        <p className="mb-10 max-w-[52ch] text-[16px] leading-6 text-ink-muted">
          {spec.covers.note}
        </p>
        <ul className="grid grid-cols-1 gap-x-10 border-t border-line md:grid-cols-2">
          {spec.covers.items.map((item, i) => (
            <Reveal as="li" key={item.title} index={i}>
              <div className="flex h-full flex-col gap-3 border-b border-line py-6">
                <div className="flex items-center gap-3">
                  <SquareMarker size={12} tone={i === 0 ? "accent" : "ink"} />
                  <h3 className="display text-step">{item.title}</h3>
                </div>
                <p className="max-w-[52ch] text-[16px] leading-6 text-ink-muted">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading text={spec.how.heading} size="h1" className="mb-10 md:mb-16" />
        <NumberedSteps steps={spec.how.steps} />
      </Section>

      <Section id="request">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 flex flex-col gap-6 md:col-span-5">
            <SquareMarker tone="accent" size={16} />
            <SectionHeading text={spec.grants.heading} size="h2" />
            <p className="max-w-[42ch] text-[20px] leading-[26px]">{spec.grants.text}</p>
            <p className="max-w-[42ch] text-[13px] leading-[18px] text-ink-muted">
              {spec.grants.note}
            </p>
          </div>
          <div className="col-span-12 md:col-span-7">
            <EnquiryForm kind="quotation" />
          </div>
        </div>
      </Section>
    </>
  );
}
