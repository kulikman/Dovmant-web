import type { Metadata } from "next";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { contactPage } from "@/content/about";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Research enquiries, procurement and grants, general contact.",
};

export default function ContactPage() {
  return (
    <Section className="pt-8">
      <SquareMarker tone="accent" size={16} className="mb-8" />
      <SectionHeading as="h1" size="h1" text={contactPage.title} immediate />
      <p className="mt-6 max-w-[44ch] text-[20px] leading-[26px]">{contactPage.lead}</p>

      <div className="mt-16">
        {contactPage.branches.map((b) => (
          <section
            key={b.heading}
            className="grid grid-cols-12 gap-x-6 gap-y-8 border-t border-line py-12"
          >
            <div className="col-span-12 flex flex-col gap-6 md:col-span-5">
              <SectionHeading text={b.heading} size="h2" />
              <p className="max-w-[40ch] text-[16px] leading-6 text-ink-muted">{b.text}</p>
              {"details" in b && b.details && (
                <dl className="mt-2 text-[13px] leading-[18px]">
                  {b.details.map(([k, v]) => (
                    <div key={k} className="flex gap-3 border-b border-line py-2">
                      <dt className="w-[140px] shrink-0 text-ink-muted">{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
            <div className="col-span-12 md:col-span-7">
              <EnquiryForm kind={b.form} />
            </div>
          </section>
        ))}
      </div>

      <address className="mt-12 border-t border-line pt-8 text-[13px] leading-[18px] text-ink-muted not-italic">
        <p>{site.address}</p>
        <p className="mt-3">
          <a href={`mailto:${site.email}`} className="link">
            {site.email}
          </a>
        </p>
        <p className="mt-3">
          <a href={site.linkedin} className="link" rel="noreferrer">
            LinkedIn ↗
          </a>
        </p>
      </address>
    </Section>
  );
}
