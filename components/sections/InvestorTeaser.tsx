import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { investorTeaser } from "@/content/home";

export function InvestorTeaser() {
  return (
    <section className="mx-auto max-w-[1440px] px-[var(--gutter)] py-[var(--section)]">
      <div className="flex flex-col items-start justify-between gap-8 border-y border-ink py-10 md:flex-row md:items-end">
        <div className="flex flex-col gap-6">
          <SquareMarker size={14} />
          <SectionHeading text={investorTeaser.heading} size="h2" />
        </div>
        <Link href={investorTeaser.cta.href} className="link text-[20px] leading-[26px]">
          {investorTeaser.cta.label} →
        </Link>
      </div>
    </section>
  );
}
