import type { Metadata } from "next";
import { ImageSlot } from "@/components/media/ImageSlot";
import { NumberedSteps } from "@/components/sections/NumberedSteps";
import { PageCta } from "@/components/sections/PageCta";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { sports as s } from "@/content/pages";

export const metadata: Metadata = {
  title: "Sports",
  description: "Dovmant for training, load management and return to play.",
};

export default function SportsPage() {
  return (
    <>
      <PageHero
        title={s.title}
        lead={s.lead}
        image={s.hero}
        cta={{ label: "Book a demo", href: "/contact" }}
      />
      <Section>
        <SectionHeading text={s.scenariosHeading} size="h1" className="mb-10 md:mb-16" />
        <NumberedSteps steps={s.scenarios} />
      </Section>
      <Section>
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-6">
            <ImageSlot
              id="wear-sport-return"
              aspect="4/5"
              overlay="bottom-half"
              sizes="(min-width:768px) 45vw, 100vw"
            />
          </div>
          <div className="col-span-12 flex flex-col gap-6 md:col-span-6 md:justify-center">
            <SquareMarker tone="accent" />
            <SectionHeading text={s.caseHeading} size="h2" />
            <p className="max-w-[44ch] text-[20px] leading-[26px]">{s.caseText}</p>
          </div>
        </div>
      </Section>
      <Section>
        <ImageSlot id="app-dashboard" aspect="16/10" sizes="100vw" />
      </Section>
      <PageCta title="BRING IT TO {YOUR TEAM}" label="Book a demo" href="/contact" />
    </>
  );
}
