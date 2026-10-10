import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { testimonials } from "@/content/home";
import { TestimonialCard } from "./TestimonialCard";

export function Testimonials() {
  const [first, ...rest] = testimonials.items;
  return (
    <Section bleed>
      <div className="scrollbar-none flex snap-x gap-4 overflow-x-auto px-[var(--gutter)] lg:grid lg:grid-cols-[1fr_1.1fr_1fr_1fr] lg:items-end lg:overflow-visible">
        <Reveal>
          <TestimonialCard t={first} />
        </Reveal>
        <div className="hidden pb-24 lg:block">
          <SectionHeading text={testimonials.heading} size="h2" />
          <SquareMarker tone="accent" size={14} className="mt-6" />
        </div>
        {rest.map((t, i) => (
          <Reveal key={t.id} index={i + 1}>
            <TestimonialCard t={t} />
          </Reveal>
        ))}
      </div>
      <div className="px-[var(--gutter)] pt-10 lg:hidden">
        <SectionHeading text={testimonials.heading} size="h2" />
      </div>
    </Section>
  );
}
