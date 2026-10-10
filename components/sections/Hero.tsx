import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { hero } from "@/content/home";
import { site } from "@/content/site";
import { HeroMedia } from "./HeroMedia";
import { ImageSlot } from "@/components/media/ImageSlot";

export function Hero() {
  return (
    <section className="mx-auto max-w-[1440px] px-[var(--gutter)] pb-[var(--section)]">
      <div className="grid grid-cols-12 gap-x-6 gap-y-8 lg:min-h-[86vh]">
        {/* headline first on mobile, bottom-left on desktop */}
        <div className="order-1 col-span-12 flex flex-col justify-end lg:order-2 lg:col-span-7 lg:pb-4">
          <SectionHeading as="h1" size="hero" text="DOVMANT" immediate />
        </div>

        {/* small reference thumbnail, top-left */}
        <div className="order-0 col-span-4 hidden lg:col-span-2 lg:row-start-1 lg:block lg:self-start lg:pt-10">
          <ImageSlot id="detail-sensors" aspect="4/3" sizes="160px" className="w-[160px]" />
        </div>

        {/* claim column */}
        <div className="order-2 col-span-12 flex flex-col gap-5 lg:order-1 lg:col-span-4 lg:col-start-4 lg:row-start-1 lg:justify-start lg:pt-10">
          <SquareMarker size={14} />
          <SectionHeading
            as="p"
            size="h2"
            text={hero.claim}
            className="max-w-[20ch] !text-[clamp(20px,1.9vw,26px)] leading-[1.2]"
            immediate
          />
          <Link href={hero.moreInfo.href} className="link w-fit text-[15px]">
            {hero.moreInfo.label}
            <span className="sr-only"> {hero.moreInfo.about}</span>
          </Link>
          <p className="mt-6 max-w-[38ch] text-[13px] leading-[18px] text-ink-muted lg:mt-auto">
            {site.heroNote}
          </p>
          <Link href={hero.contact.href} className="link w-fit text-[15px]">
            {hero.contact.label}
          </Link>
        </div>

        {/* media */}
        <div className="order-3 col-span-12 lg:order-3 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1">
          <div className="relative flex gap-3">
            <div className="aspect-4/5 w-full md:aspect-16/10 lg:aspect-auto lg:h-[86vh]">
              <HeroMedia />
            </div>
            <p
              aria-hidden
              className="hidden shrink-0 self-start text-[12px] leading-4 tracking-[0.1em] uppercase lg:block"
              style={{ writingMode: "vertical-rl" }}
            >
              {hero.label}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
