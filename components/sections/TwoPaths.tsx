import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ImageSlot } from "@/components/media/ImageSlot";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { paths } from "@/content/home";

export function TwoPaths() {
  return (
    <Section>
      <SectionHeading text={paths.heading} size="h1" className="mb-10 md:mb-16" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {paths.items.map((p, i) => (
          <Reveal key={p.title} index={i}>
            <Link href={p.href} className="group block">
              <ImageSlot id={p.image} aspect="4/5" overlay={p.overlay ? "bottom-half" : "none"} />
              <div className="mt-4 flex items-start justify-between gap-6 border-b border-line pb-5">
                <div>
                  <h3 className="display text-step">{p.title}</h3>
                  <p className="mt-3 max-w-[40ch] text-[13px] leading-[18px] text-ink-muted">
                    {p.text}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="text-[40px] leading-none transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  ↗
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
