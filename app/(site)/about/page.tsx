import type { Metadata } from "next";
import { PageCta } from "@/components/sections/PageCta";
import { PageHero } from "@/components/sections/PageHero";
import { PortraitRow } from "@/components/sections/PortraitRow";
import { Timeline } from "@/components/sections/Timeline";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { about as a } from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who we are and why we are building an exoskeleton meant to be measured. Denver, Colorado.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title={a.title} lead={a.lead} image="page-hero-about" />

      <Section>
        <div className="grid grid-cols-12 gap-x-6 gap-y-6">
          <div className="col-span-12 flex flex-col gap-6 md:col-span-5">
            <SquareMarker tone="accent" />
            <SectionHeading text={a.mission.heading} size="h1" />
          </div>
          <p className="col-span-12 max-w-[52ch] text-[20px] leading-[26px] md:col-span-7">
            {a.mission.text}
          </p>
        </div>
      </Section>

      {/* A timeline goes up only with three or more confirmed milestones. */}
      {a.timeline.items.length >= 3 && (
        <Section>
          <SectionHeading text={a.timeline.heading} size="h2" className="mb-10" />
          <Timeline items={a.timeline.items} />
        </Section>
      )}

      <Section bleed={a.team.people.length > 0}>
        <div className={a.team.people.length > 0 ? "px-[var(--gutter)]" : undefined}>
          <SectionHeading text={a.team.heading} size="h1" className="mb-10 md:mb-16" />
          {a.team.people.length === 0 && (
            <p className="max-w-[52ch] text-[16px] leading-6 text-ink-muted">{a.team.note}</p>
          )}
        </div>
        {a.team.people.length > 0 && <PortraitRow people={a.team.people as never} />}
      </Section>

      {a.advisors.items.length > 0 && (
        <Section>
          <SectionHeading text={a.advisors.heading} size="h2" className="mb-10" />
          <ul className="border-t border-line">
            {a.advisors.items.map((ad) => (
              <li
                key={ad.name}
                className="flex flex-wrap items-baseline justify-between gap-4 border-b border-line py-5"
              >
                <p className="text-[20px] leading-[26px]">{ad.name}</p>
                <p className="text-[13px] leading-[18px] text-ink-muted">{ad.role}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section>
        <div className="grid grid-cols-12 gap-x-6 gap-y-6">
          <div className="col-span-12 md:col-span-5">
            <SectionHeading text={a.location.heading} size="h2" />
          </div>
          <p className="col-span-12 max-w-[48ch] text-[20px] leading-[26px] md:col-span-7">
            {a.location.text}
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-12 gap-x-6 gap-y-6">
          <div className="col-span-12 md:col-span-5">
            <SectionHeading text={a.careers.heading} size="h2" />
          </div>
          <p className="col-span-12 max-w-[48ch] text-[20px] leading-[26px] md:col-span-7">
            {a.careers.text}
          </p>
        </div>
      </Section>

      <PageCta
        title="WORK WITH {US}"
        label="Request a lab evaluation"
        href="/research#evaluation"
      />
    </>
  );
}
