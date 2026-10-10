import type { Metadata } from "next";
import { ImageSlot } from "@/components/media/ImageSlot";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { PageHero } from "@/components/sections/PageHero";
import { SplitTable } from "@/components/sections/SplitTable";
import { ThreeUp } from "@/components/sections/ThreeUp";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { research as r } from "@/content/research";

export const metadata: Metadata = {
  title: "Research Partnerships",
  description:
    "We place instruments with laboratories. You write the protocol, hold the IRB approval, own the data and publish.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHero
        title={r.title}
        lead={r.lead}
        image="page-hero-research"
        cta={{ label: "Request a lab evaluation", href: "#evaluation" }}
      />

      <Section>
        <SectionHeading text={r.split.heading} size="h1" className="mb-10 md:mb-16" />
        <SplitTable left={r.split.left} right={r.split.right} rows={r.split.rows} />
      </Section>

      <Section>
        <SectionHeading text={r.routes.heading} size="h1" className="mb-10 md:mb-16" />
        <ThreeUp items={r.routes.items} numbered />
      </Section>

      <Section>
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-5">
            <ImageSlot
              id="lab-instrumentation"
              aspect="3/2"
              overlay="bottom-third"
              sizes="(min-width:768px) 40vw, 100vw"
            />
          </div>
          <div className="col-span-12 flex flex-col gap-6 md:col-span-7 md:justify-center">
            <SquareMarker tone="accent" />
            <SectionHeading text={r.integration.heading} size="h2" />
            <p className="max-w-[48ch] text-[20px] leading-[26px]">{r.integration.text}</p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading text={r.publications.heading} size="h1" className="mb-10" />
        {r.publications.rows.length === 0 ? (
          <p className="max-w-[60ch] border-t border-line pt-8 text-[20px] leading-[26px]">
            {r.publications.empty}
          </p>
        ) : (
          <table className="w-full border-t border-line text-left text-[16px] leading-6">
            <thead>
              <tr className="border-b border-line text-[12px] leading-4 text-ink-muted uppercase">
                {r.publications.columns.map((c) => (
                  <th key={c} scope="col" className="py-3 pr-4 font-medium">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {r.publications.rows.map((row, i) => (
                <tr key={i} className="border-b border-line">
                  {row.map((cell, j) => (
                    <td key={j} className="py-4 pr-4">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Section>

      <Section id="evaluation">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 flex flex-col gap-6 md:col-span-5">
            <SectionHeading text={r.cta.heading} size="h1" stepped />
            <p className="max-w-[40ch] text-[20px] leading-[26px]">{r.cta.text}</p>
          </div>
          <div className="col-span-12 md:col-span-7">
            <EnquiryForm kind="lab-evaluation" />
          </div>
        </div>
      </Section>
    </>
  );
}
