import Link from "next/link";
import { FaqContact } from "@/components/sections/FaqContact";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ThreeUp } from "@/components/sections/ThreeUp";
import { TwoCards } from "@/components/sections/TwoCards";
import { ImageSlot } from "@/components/media/ImageSlot";
import { FullBleed } from "@/components/media/FullBleed";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { claims, investorStrip, programme, scenarios, specNote } from "@/content/home";

export default function Home() {
  return (
    <>
      <Hero />

      <Section className="pt-0">
        <TwoCards />
      </Section>

      <Section>
        <SectionHeading text={claims.heading} size="h1" className="mb-10 md:mb-16" />
        <ThreeUp items={claims.items} />
      </Section>

      {/* the macros are the closest thing we have to the hardware itself */}
      <Section bleed className="py-0">
        <FullBleed>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <ImageSlot id="detail-hip-actuator" aspect="4/3" sizes="50vw" />
            <ImageSlot id="detail-fit-straps" aspect="4/3" overlay="bottom-third" sizes="50vw" />
          </div>
        </FullBleed>
      </Section>

      <HowItWorks />

      <Section>
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 md:col-span-5">
            <SectionHeading text={scenarios.heading} size="h1" />
          </div>
          <p className="col-span-12 max-w-[52ch] text-[16px] leading-6 text-ink-muted md:col-span-7">
            {scenarios.lead}
          </p>
        </div>
        <ol className="mt-10 border-t border-line md:mt-16">
          {scenarios.items.map((s, i) => (
            <Reveal as="li" key={s.title} index={i}>
              <div className="grid grid-cols-12 items-baseline gap-x-6 gap-y-2 border-b border-line py-6 transition-colors hover:bg-surface-300/60">
                <span className="display col-span-2 text-step-no font-light text-accent md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display col-span-10 text-step md:col-span-5">{s.title}</h3>
                <p className="col-span-12 max-w-[52ch] text-[16px] leading-6 text-ink-muted md:col-span-6">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 flex flex-col gap-6 md:col-span-5">
            <SquareMarker tone="accent" />
            <SectionHeading text={specNote.heading} size="h1" />
          </div>
          <div className="col-span-12 md:col-span-7">
            <p className="max-w-[52ch] text-[20px] leading-[26px]">{specNote.text}</p>
            <Link href={specNote.link.href} className="link mt-8 inline-block text-[15px]">
              {specNote.link.label} →
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 flex flex-col gap-6 md:col-span-5">
            <SquareMarker tone="accent" />
            <SectionHeading text={programme.heading} size="h1" />
          </div>
          <div className="col-span-12 md:col-span-7">
            <p className="max-w-[52ch] text-[20px] leading-[26px]">{programme.text}</p>
            <Link href={programme.link.href} className="link mt-8 inline-block text-[15px]">
              {programme.link.label} →
            </Link>
          </div>
        </div>
      </Section>

      <section className="mx-auto max-w-[1440px] px-[var(--gutter)] py-[var(--section)]">
        <div className="flex flex-col items-start justify-between gap-8 border-y border-ink py-10 md:flex-row md:items-end">
          <SectionHeading text={investorStrip.heading} size="h2" className="max-w-[18ch]" />
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
            <Link href={investorStrip.cta.href} className="link text-[20px] leading-[26px]">
              {investorStrip.cta.label} →
            </Link>
            <Link href={investorStrip.secondary.href} className="link text-[20px] leading-[26px]">
              {investorStrip.secondary.label} →
            </Link>
          </div>
        </div>
      </section>

      <FaqContact />
    </>
  );
}
