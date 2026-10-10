import type { LegalDoc } from "@/content/legal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <Section className="pt-8">
      <SquareMarker className="mb-8" />
      <SectionHeading as="h1" size="h1" text={doc.title} immediate />
      <p className="mt-6 text-[13px] leading-[18px] text-ink-muted">Last updated: {doc.updated}</p>
      <div className="mt-16 max-w-[70ch] border-t border-line">
        {doc.sections.map((s) => (
          <section key={s.h} className="border-b border-line py-8">
            <h2 className="display text-step">{s.h}</h2>
            <p className="mt-4 text-[16px] leading-6 text-ink-muted">{s.p}</p>
          </section>
        ))}
      </div>
    </Section>
  );
}
