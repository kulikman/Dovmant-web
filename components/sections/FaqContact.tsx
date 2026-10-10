import { ImageSlot } from "@/components/media/ImageSlot";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { contact, faq } from "@/content/home";
import { ContactForm } from "./ContactForm";
import { FAQAccordion } from "./FAQAccordion";

export function FaqContact() {
  return (
    <>
      <Section id="contact" className="pb-0">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <SquareMarker tone="accent" size={16} className="col-span-12 md:hidden" />
          <p className="col-span-12 max-w-[30ch] text-[13px] leading-[18px] md:col-span-3 md:self-center">
            {contact.text}
          </p>
          <div className="col-span-12 md:col-span-4">
            <SectionHeading text={contact.heading} size="h1" stepped />
          </div>
          <div className="col-span-12 md:col-span-5">
            <ContactForm intent="home" />
          </div>
        </div>
      </Section>
      <Section id="faq">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-5">
            <ImageSlot id="faq-render" aspect="4/5" overlay="bottom-half" />
          </div>
          <div className="col-span-12 md:col-span-7 md:pl-10">
            <SectionHeading text={faq.heading} size="h2" className="mb-10 md:mb-16" />
            <FAQAccordion items={faq.items} />
          </div>
        </div>
      </Section>
    </>
  );
}
