import type { Metadata } from "next";
import { ImageSlot } from "@/components/media/ImageSlot";
import { NumberedSteps } from "@/components/sections/NumberedSteps";
import { PageCta } from "@/components/sections/PageCta";
import { PageHero } from "@/components/sections/PageHero";
import { ProductDiagram } from "@/components/sections/ProductDiagram";
import { SpecsTable } from "@/components/sections/SpecsTable";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { technology as t } from "@/content/pages";

export const metadata: Metadata = {
  title: "Technology",
  description: "How the Dovmant exoskeleton senses, decides and assists.",
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        title={t.title}
        lead={t.lead}
        image={t.hero}
        cta={{ label: "Request a demo", href: "/contact" }}
      />
      <Section>
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-5">
            <ProductDiagram describe />
          </div>
          <div className="col-span-12 md:col-span-7">
            <ImageSlot
              id="exploded-view"
              aspect="16/10"
              overlay="bottom-third"
              sizes="(min-width:768px) 55vw, 100vw"
            />
          </div>
        </div>
      </Section>
      <Section>
        <SectionHeading text={t.aiHeading} size="h1" className="mb-10 md:mb-16" />
        <NumberedSteps steps={t.ai} />
      </Section>
      <Section>
        <div className="grid grid-cols-3 gap-3">
          {t.details.map((d) => (
            <ImageSlot key={d} id={d} aspect="1/1" sizes="(min-width:768px) 30vw, 33vw" />
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeading text={t.specsHeading} size="h2" className="mb-10" />
        <SpecsTable rows={t.specs} />
      </Section>
      <PageCta title="SEE IT {IN PERSON}" label="Request a demo" href="/contact" />
    </>
  );
}
