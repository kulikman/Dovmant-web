import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { NumberedSteps } from "@/components/sections/NumberedSteps";
import { PageHero } from "@/components/sections/PageHero";
import { StatGrid } from "@/components/sections/StatGrid";
import { Timeline } from "@/components/sections/Timeline";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { investors as inv } from "@/content/investors";
import { DataRoomRequest } from "@/components/sections/DataRoomRequest";

export const metadata: Metadata = {
  title: "Investors",
  description: "Investor relations — thesis, market, traction and the current round.",
};

function Points({ heading, points }: { heading: string; points: string[] }) {
  return (
    <Section>
      <div className="grid grid-cols-12 gap-x-6 gap-y-8">
        <div className="col-span-12 md:col-span-5">
          <SectionHeading text={heading} size="h1" />
        </div>
        <ul className="col-span-12 border-t border-line md:col-span-7">
          {points.map((p, i) => (
            <Reveal as="li" key={i} index={i}>
              <div className="flex gap-4 border-b border-line py-5">
                <SquareMarker tone="accent" size={12} className="mt-2" />
                <p className="max-w-[52ch] text-[20px] leading-[26px]">{p}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default function InvestorsPage() {
  return (
    <>
      <PageHero title={inv.title} lead={inv.lead} image="page-hero-investors">
        <p className="max-w-[44ch] border-t border-ink pt-5 text-[16px] leading-6 text-ink-muted">
          {inv.thesis}
        </p>
      </PageHero>

      <Points heading={inv.problem.heading} points={inv.problem.points} />
      <Points heading={inv.solution.heading} points={inv.solution.points} />

      <Section>
        <SectionHeading text={inv.market.heading} size="h1" className="mb-10 md:mb-16" />
        <StatGrid stats={inv.market.stats} />
      </Section>

      <Section>
        <SectionHeading text={inv.competitive.heading} size="h1" className="mb-10 md:mb-16" />
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 md:col-span-7">
            <div className="relative aspect-square w-full border border-line">
              <span className="absolute top-1/2 left-0 h-px w-full bg-line" />
              <span className="absolute top-0 left-1/2 h-full w-px bg-line" />
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[12px] leading-4 uppercase">
                {inv.competitive.axes.y[0]}
              </span>
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[12px] leading-4 uppercase">
                {inv.competitive.axes.y[1]}
              </span>
              <span className="absolute top-1/2 -left-4 -translate-x-full -translate-y-1/2 text-[12px] leading-4 uppercase">
                {inv.competitive.axes.x[0]}
              </span>
              <span className="absolute top-1/2 -right-4 translate-x-full -translate-y-1/2 text-[12px] leading-4 uppercase">
                {inv.competitive.axes.x[1]}
              </span>
              <span className="absolute top-[28%] left-[30%] block h-4 w-4 bg-accent" />
              <span className="absolute top-[28%] left-[30%] mt-6 block text-[13px] leading-[18px]">
                Dovmant [TBD]
              </span>
            </div>
          </div>
          <p className="col-span-12 max-w-[40ch] text-[16px] leading-6 text-ink-muted md:col-span-5">
            {inv.competitive.note}
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeading text={inv.traction.heading} size="h1" className="mb-10" />
        <Timeline items={inv.traction.items} />
      </Section>

      <Points heading={inv.model.heading} points={inv.model.points} />

      <Section>
        <SectionHeading text={inv.gtm.heading} size="h1" className="mb-10 md:mb-16" />
        <NumberedSteps steps={inv.gtm.steps} />
      </Section>

      <Section>
        <SectionHeading text={inv.roadmap.heading} size="h1" className="mb-10" />
        <Timeline items={inv.roadmap.items} />
      </Section>

      <Section>
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 md:col-span-5">
            <SectionHeading text={inv.team.heading} size="h1" />
          </div>
          <div className="col-span-12 md:col-span-7">
            <p className="max-w-[48ch] text-[20px] leading-[26px]">{inv.team.note}</p>
            <Button href="/about" variant="outline" arrow="→" className="mt-6">
              Meet the team
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading text={inv.round.heading} size="h1" className="mb-10 md:mb-16" />
        <StatGrid stats={inv.round.stats} />
        <ul className="mt-10 border-t border-line">
          {inv.round.useOfFunds.map((u, i) => (
            <li
              key={i}
              className="flex items-baseline justify-between gap-6 border-b border-line py-5"
            >
              <p className="text-[20px] leading-[26px]">{u.title}</p>
              <p className="text-[13px] leading-[18px] text-ink-muted">{u.note}</p>
            </li>
          ))}
        </ul>
      </Section>

      <DataRoomRequest />
    </>
  );
}
