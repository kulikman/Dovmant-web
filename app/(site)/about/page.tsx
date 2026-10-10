import type { Metadata } from "next";
import { PageCta } from "@/components/sections/PageCta";
import { PageHero } from "@/components/sections/PageHero";
import { PortraitRow } from "@/components/sections/PortraitRow";
import { Timeline } from "@/components/sections/Timeline";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { about as a } from "@/content/pages";

export const metadata: Metadata = {
  title: "About",
  description: "Who we are and what we are building.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title={a.title} lead={a.lead} image={a.hero} />
      <Section>
        <div className="grid grid-cols-12 gap-x-6 gap-y-6">
          <div className="col-span-12 flex flex-col gap-6 md:col-span-5">
            <SquareMarker tone="accent" />
            <SectionHeading text={a.missionHeading} size="h1" />
          </div>
          <p className="col-span-12 max-w-[52ch] text-[20px] leading-[26px] md:col-span-7">
            {a.missionText}
          </p>
        </div>
      </Section>
      <Section>
        <SectionHeading text={a.timelineHeading} size="h2" className="mb-10" />
        <Timeline items={a.timeline} />
      </Section>
      <Section bleed>
        <div className="px-[var(--gutter)]">
          <SectionHeading text={a.teamHeading} size="h1" className="mb-10 md:mb-16" />
        </div>
        <PortraitRow people={a.team} />
      </Section>
      <Section>
        <SectionHeading text={a.advisorsHeading} size="h2" className="mb-10" />
        <ul className="border-t border-line">
          {a.advisors.map((ad, i) => (
            <li
              key={i}
              className="flex flex-wrap items-baseline justify-between gap-4 border-b border-line py-5"
            >
              <p className="text-[20px] leading-[26px]">{ad.name}</p>
              <p className="text-[13px] leading-[18px] text-ink-muted">{ad.role}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section>
        <div className="grid grid-cols-12 gap-x-6 gap-y-6">
          <div className="col-span-12 md:col-span-5">
            <SectionHeading text={a.careersHeading} size="h2" />
          </div>
          <p className="col-span-12 max-w-[48ch] text-[20px] leading-[26px] md:col-span-7">
            {a.careersText}
          </p>
        </div>
      </Section>
      <PageCta title="JOIN {US}" label="Write to us" href="/contact" />
    </>
  );
}
