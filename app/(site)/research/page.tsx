import type { Metadata } from "next";
import { PageCta } from "@/components/sections/PageCta";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { research as r } from "@/content/pages";

export const metadata: Metadata = {
  title: "Research",
  description: "Publications and research partnerships.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHero title={r.title} lead={r.lead} image={r.hero} />
      <Section>
        <SectionHeading text={r.tableHeading} size="h2" className="mb-10" />
        <table className="w-full border-t border-line text-left text-[16px] leading-6">
          <thead>
            <tr className="border-b border-line text-[12px] leading-4 uppercase text-ink-muted">
              <th scope="col" className="py-3 pr-4 font-medium">
                Title
              </th>
              <th scope="col" className="py-3 pr-4 font-medium">
                Institution
              </th>
              <th scope="col" className="py-3 pr-4 font-medium">
                Year
              </th>
              <th scope="col" className="py-3 pr-4 font-medium">
                Status
              </th>
              <th scope="col" className="py-3 font-medium">
                PDF
              </th>
            </tr>
          </thead>
          <tbody>
            {r.rows.map((row, i) => (
              <tr
                key={i}
                className="border-b border-line transition-colors hover:bg-surface-300/60"
              >
                <td className="py-4 pr-4">{row.title}</td>
                <td className="py-4 pr-4 text-ink-muted">{row.institution}</td>
                <td className="py-4 pr-4 text-ink-muted">{row.year}</td>
                <td className="py-4 pr-4 text-ink-muted">{row.status}</td>
                <td className="py-4">
                  {row.pdf ? (
                    <a href={row.pdf} className="link">
                      PDF ↘
                    </a>
                  ) : (
                    <span className="text-ink-muted">[TBD]</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
      <Section>
        <div className="grid grid-cols-12 gap-x-6 gap-y-6">
          <div className="col-span-12 md:col-span-6">
            <SectionHeading text={r.partnershipHeading} size="h2" />
          </div>
          <p className="col-span-12 max-w-[48ch] text-[20px] leading-[26px] md:col-span-6">
            {r.partnershipText}
          </p>
        </div>
      </Section>
      <PageCta title="WORK WITH {US}" label="Contact the research team" href="/contact" />
    </>
  );
}
