import Link from "next/link";
import { FaqContact } from "@/components/sections/FaqContact";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SpecCards } from "@/components/sections/SpecCards";
import { ThreeUp } from "@/components/sections/ThreeUp";
import { WearGallery } from "@/components/sections/WearGallery";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { claims, investorStrip, programme, scenarios, specHighlights } from "@/content/home";

export default function Home() {
  return (
    <>
      <Hero />

      <Section>
        <SectionHeading text={claims.heading} size="h1" className="mb-10 md:mb-16" />
        <ThreeUp items={claims.items} />
        <p className="mt-8 text-[13px] leading-[18px] text-ink-muted">{claims.note}</p>
      </Section>

      <HowItWorks />

      <Section bleed>
        <div className="px-[var(--gutter)]">
          <SectionHeading text={scenarios.heading} size="h1" className="mb-10 md:mb-16" />
        </div>
        <WearGallery items={scenarios.items} />
      </Section>

      <Section>
        <SectionHeading text={specHighlights.heading} size="h1" className="mb-10 md:mb-16" />
        <SpecCards items={specHighlights.items} />
        <Link
          href={specHighlights.link.href}
          className="link mt-10 inline-block text-[20px] leading-[26px]"
        >
          {specHighlights.link.label} →
        </Link>
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
