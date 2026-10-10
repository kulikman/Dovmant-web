import type { Metadata } from "next";
import Link from "next/link";
import { ImageSlot } from "@/components/media/ImageSlot";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { ArrowSquare } from "@/components/ui/ArrowSquare";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { NumberedSteps } from "@/components/sections/NumberedSteps";
import { ProductDiagram } from "@/components/sections/ProductDiagram";
import { StatGrid } from "@/components/sections/StatGrid";

export const metadata: Metadata = { title: "Styleguide", robots: { index: false, follow: false } };

const swatches = [
  ["surface-100", "bg-surface-100", "#F2F2F2"],
  ["surface-200", "bg-surface-200", "#E8E8E8"],
  ["surface-300", "bg-surface-300", "#DCDCDC"],
  ["line", "bg-line", "#CFCFCF"],
  ["ink", "bg-ink", "#111111"],
  ["ink-muted", "bg-ink-muted", "#5C5C5C"],
  ["accent", "bg-accent", "#C1121F"],
  ["steel", "bg-steel", "#8C8C8C"],
] as const;

const h = (t: string) => (
  <h2 className="mb-6 flex items-center gap-3 text-[12px] leading-4 font-medium uppercase">
    <SquareMarker size={12} /> {t}
  </h2>
);

export default function Styleguide() {
  return (
    <>
      <Section className="pb-0">
        <h1 className="display text-h2">Styleguide</h1>
        <p className="mt-4 max-w-[52ch] text-[16px] leading-6 text-ink-muted">
          Internal reference: tokens, type scale and every shared component in one place. Not linked
          from the site and excluded from search.
        </p>
      </Section>
      <Section>
        {h("Colour")}
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {swatches.map(([n, c, hex]) => (
            <li key={n}>
              <div className={`${c} h-24 border border-line`} />
              <p className="mt-2 text-[13px] leading-[18px]">
                {n} <span className="text-ink-muted">{hex}</span>
              </p>
            </li>
          ))}
        </ul>
      </Section>
      <Section>
        {h("Type")}
        <SectionHeading as="p" size="hero" text="HERO {120}" />
        <SectionHeading as="p" size="h1" text="H1 ~LIGHT~ MEDIUM" className="mt-6" />
        <SectionHeading as="p" size="h2" text="OUR {TEAM}" className="mt-6" />
        <SectionHeading as="p" size="h2" text={"LET’S\nGET IN\nTOUCH"} stepped className="mt-6" />
        <p className="mt-8 text-[20px] leading-[26px]">Lead 20/26 — Inter 400.</p>
        <p className="mt-2 text-[16px] leading-6">Body 16/24 — Inter 400.</p>
        <p className="mt-2 text-[13px] leading-[18px] text-ink-muted">Small 13/18 — muted.</p>
        <p className="mt-2 text-[12px] leading-4 uppercase">Label 12/16</p>
      </Section>
      <Section>
        {h("Buttons, links, markers")}
        <div className="flex flex-wrap items-center gap-4">
          <Button>Request a lab evaluation</Button>
          <Button variant="filled" arrow="→">
            Filled
          </Button>
          <Link href="/system" className="link">
            Underlined link
          </Link>
          <SquareMarker /> <SquareMarker tone="accent" />
          <ArrowSquare label="Example" href="/system" size={72} />
        </div>
      </Section>
      <Section>
        {h("Image slot + overlay")}
        <div className="grid max-w-[900px] grid-cols-2 gap-4">
          <ImageSlot id="hero-render" overlay="bottom-half" />
          <ImageSlot id="lab-gait-trial" overlay="bottom-third" />
        </div>
      </Section>
      <Section>
        {h("Numbered steps")}
        <NumberedSteps
          steps={[
            { title: "Step one", note: "[TBD] note" },
            { title: "Step two", note: "[TBD] note" },
          ]}
        />
      </Section>
      <Section>
        {h("Stat grid")}
        <StatGrid
          stats={[
            { value: "[TBD]", label: "[TBD] label", note: "[TBD] note", source: "[TBD]" },
            { value: "[TBD]", label: "[TBD] label" },
            { value: "[TBD]", label: "[TBD] label" },
          ]}
        />
      </Section>
      <Section>
        {h("FAQ")}
        <div className="max-w-[640px]">
          <FAQAccordion
            items={[
              { q: "[TBD] Question one?", a: "[TBD] Answer." },
              { q: "[TBD] Question two?", a: "[TBD] Answer." },
            ]}
          />
        </div>
      </Section>
      <Section>
        {h("Form + diagram")}
        <div className="grid gap-12 md:grid-cols-2">
          <EnquiryForm kind="general" />
          <ProductDiagram describe />
        </div>
      </Section>
    </>
  );
}
