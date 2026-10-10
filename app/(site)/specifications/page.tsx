import type { Metadata } from "next";
import { ImageSlot } from "@/components/media/ImageSlot";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { PageHero } from "@/components/sections/PageHero";
import { SpecsTable } from "@/components/sections/SpecsTable";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { specifications as spec } from "@/content/specifications";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Specification Sheet",
  description:
    "Full technical parameters, interfaces, delivery terms and quotation request. Built for instrumentation grant applications.",
};

export default function SpecificationsPage() {
  return (
    <>
      <PageHero title={spec.title} lead={spec.lead} image="page-hero-specifications">
        <div className="flex flex-wrap items-center gap-4">
          {site.specSheetUrl ? (
            <Button href={site.specSheetUrl} variant="filled" arrow={null}>
              Download specification (PDF) ↓
            </Button>
          ) : (
            <p className="text-[15px] text-ink-muted">
              Specification PDF: [TBD] — request it below.
            </p>
          )}
          <Button href="#quotation" arrow="→">
            Request a quotation
          </Button>
        </div>
      </PageHero>

      <Section>
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-5">
            <ImageSlot id="device-standalone" aspect="4/5" sizes="(min-width:768px) 40vw, 100vw" />
          </div>
          <div className="col-span-12 flex flex-col justify-center gap-6 md:col-span-7">
            <SquareMarker />
            <p className="max-w-[48ch] text-[20px] leading-[26px]">
              Every parameter below is measured on the instrument you receive. Values still marked
              [TBD] are not published yet rather than estimated.
            </p>
          </div>
        </div>
      </Section>

      {spec.tables.map((t) => (
        <Section key={t.heading}>
          <SectionHeading text={t.heading} size="h2" className="mb-8" />
          <SpecsTable rows={t.rows} caption={t.heading} />
        </Section>
      ))}

      <Section>
        <SectionHeading text={spec.commercial.heading} size="h1" className="mb-8" />
        <p className="mb-10 max-w-[52ch] text-[20px] leading-[26px]">{spec.commercial.text}</p>
        <SpecsTable rows={spec.commercial.rows} caption="Commercial terms" />
      </Section>

      <Section id="quotation">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 flex flex-col gap-6 md:col-span-5">
            <SquareMarker tone="accent" size={16} />
            <SectionHeading text={spec.grants.heading} size="h1" />
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
