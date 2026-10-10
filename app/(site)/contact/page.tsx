import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { ImageSlot } from "@/components/media/ImageSlot";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { contactPage } from "@/content/pages";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Contact", description: "Talk to the Dovmant team." };

export default function ContactPage() {
  return (
    <Section className="pt-8">
      <div className="grid grid-cols-12 gap-x-6 gap-y-10">
        <div className="col-span-12 flex flex-col gap-6 md:col-span-5">
          <SquareMarker tone="accent" size={16} />
          <SectionHeading as="h1" size="h1" text={contactPage.title} stepped immediate />
          <p className="max-w-[36ch] text-[20px] leading-[26px]">{contactPage.lead}</p>
          <address className="mt-6 text-[13px] leading-[18px] text-ink-muted not-italic">
            <p>{site.address}</p>
            <p className="mt-3">{site.phone}</p>
            <p className="mt-3">{site.email}</p>
          </address>
        </div>
        <div className="col-span-12 md:col-span-7">
          <ContactForm intent="contact-page" />
          <div className="mt-16 hidden md:block">
            <ImageSlot id="wear-everyday-walk" aspect="16/10" overlay="bottom-third" sizes="55vw" />
          </div>
        </div>
      </div>
    </Section>
  );
}
