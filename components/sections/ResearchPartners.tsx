import { Reveal } from "@/components/motion/Reveal";
import { ImageSlot } from "@/components/media/ImageSlot";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { research } from "@/content/home";
import Link from "next/link";

export function ResearchPartners() {
  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading text={research.heading} size="h1" />
        <Link href={research.link.href} className="link">
          {research.link.label} →
        </Link>
      </div>
      <ul className="mt-10 grid grid-cols-2 gap-px border-y border-line md:grid-cols-4">
        {research.logos.map((l) => (
          <li key={l} className="p-6">
            <ImageSlot id={l} aspect="3/1" still />
          </li>
        ))}
      </ul>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
        {research.studies.map((s, i) => (
          <Reveal key={i} index={i}>
            <article className="border-t border-ink pt-5">
              <p className="text-[12px] leading-4 uppercase text-ink-muted">{s.institution}</p>
              <h3 className="display mt-3 text-step">{s.title}</h3>
              <p className="mt-4 max-w-[48ch] text-[16px] leading-6">{s.finding}</p>
              <a href={s.pdf} className="link mt-5 inline-block text-[15px]">
                PDF ↘
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
