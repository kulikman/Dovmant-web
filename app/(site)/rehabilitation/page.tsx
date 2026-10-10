import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { NumberedSteps } from "@/components/sections/NumberedSteps";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { ImageSlot } from "@/components/media/ImageSlot";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { rehabilitation as r } from "@/content/pages";

export const metadata: Metadata = {
  title: "Rehabilitation",
  description: "Dovmant in therapist-led gait training.",
};

export default function RehabilitationPage() {
  return (
    <>
      <PageHero
        title={r.title}
        lead={r.lead}
        image={r.hero}
        cta={{ label: "Join the pilot", href: "#pilot" }}
      />
      <Section>
        <SectionHeading text={r.indicationsHeading} size="h1" className="mb-10 md:mb-16" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {r.indications.map((i, idx) => (
            <Reveal key={idx} index={idx}>
              <article className="h-full border-t border-ink pt-5">
                <h3 className="display text-step">{i.title}</h3>
                <p className="mt-4 text-[16px] leading-6 text-ink-muted">{i.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-4">
            <ImageSlot
              id="wear-rehab-stairs"
              aspect="4/5"
              overlay="bottom-half"
              sizes="(min-width:768px) 32vw, 100vw"
            />
          </div>
          <div className="col-span-12 md:col-span-8">
            <SectionHeading text={r.protocolHeading} size="h2" className="mb-10" />
            <NumberedSteps steps={r.protocol} />
          </div>
        </div>
      </Section>
      <Section id="pilot">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-5">
            <SectionHeading text={r.pilotHeading} size="h1" />
            <p className="mt-6 max-w-[40ch] text-[20px] leading-[26px]">{r.pilotText}</p>
          </div>
          <div className="col-span-12 md:col-span-7">
            <ContactForm intent="rehab-pilot" />
          </div>
        </div>
      </Section>
      <Section>
        <SectionHeading text="CLINICIAN {QUESTIONS}" size="h2" className="mb-10" />
        <div className="max-w-[760px]">
          <FAQAccordion items={r.faq} />
        </div>
      </Section>
    </>
  );
}
