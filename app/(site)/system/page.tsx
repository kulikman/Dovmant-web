import type { Metadata } from "next";
import Link from "next/link";
import { ImageSlot } from "@/components/media/ImageSlot";
import { PageHero } from "@/components/sections/PageHero";
import { ProductDiagram } from "@/components/sections/ProductDiagram";
import { ThreeUp } from "@/components/sections/ThreeUp";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { system } from "@/content/system";

export const metadata: Metadata = {
  title: "The System",
  description:
    "Actuation, sensing, control and data layers of the Dovmant lower-limb exoskeleton, and what a researcher can change in each.",
};

export default function SystemPage() {
  return (
    <>
      <PageHero
        title={system.title}
        lead={system.lead}
        image="page-hero-system"
        cta={{ label: "Full specification", href: "/specifications" }}
      />

      <Section>
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-5">
            <ProductDiagram describe />
          </div>
          <div className="col-span-12 md:col-span-7">
            <ImageSlot
              id="exploded-view"
              aspect="16/9"
              overlay="bottom-third"
              sizes="(min-width:768px) 55vw, 100vw"
            />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading text={system.modes.heading} size="h1" className="mb-10 md:mb-16" />
        <ThreeUp items={system.modes.items} numbered />
        <p className="mt-8 text-[13px] leading-[18px] text-ink-muted">{system.modes.note}</p>
      </Section>

      <Section>
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 flex flex-col gap-6 md:col-span-5">
            <SquareMarker tone="accent" />
            <SectionHeading text={system.control.heading} size="h1" />
          </div>
          <div className="col-span-12 md:col-span-7">
            <p className="max-w-[52ch] text-[20px] leading-[26px]">{system.control.text}</p>
            <p className="mt-6 text-[13px] leading-[18px] text-ink-muted">{system.control.note}</p>
          </div>
        </div>
      </Section>

      <Section>
        {/* Only delivered frames go here. detail-sensors and sync-port-detail join
            the row once they are shot — a photograph beside a drawing reads as a fault. */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <ImageSlot id="detail-hip-actuator" aspect="1/1" sizes="(min-width:768px) 46vw, 100vw" />
          <ImageSlot id="detail-fit-straps" aspect="1/1" sizes="(min-width:768px) 46vw, 100vw" />
        </div>
      </Section>

      <Section>
        <SectionHeading text={system.data.heading} size="h1" className="mb-8" />
        <p className="mb-10 max-w-[52ch] text-[20px] leading-[26px]">{system.data.text}</p>
        <ul className="border-t border-line">
          {system.data.logged.map((channel) => (
            <li
              key={channel}
              className="flex items-center gap-4 border-b border-line py-4 text-[16px] leading-6 transition-colors hover:bg-surface-300/60"
            >
              <SquareMarker size={12} />
              {channel}
            </li>
          ))}
        </ul>
        <Link href="/specifications" className="link mt-10 inline-block text-[20px] leading-[26px]">
          Request the specification →
        </Link>
      </Section>
    </>
  );
}
