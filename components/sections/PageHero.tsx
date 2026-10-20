import type { ReactNode } from "react";
import { ImageSlot } from "@/components/media/ImageSlot";
import { FullBleed } from "@/components/media/FullBleed";
import { images, type ImageSlotId } from "@/content/images";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";

type Props = {
  title: string;
  lead: string;
  image: ImageSlotId;
  cta?: { label: string; href: string };
  children?: ReactNode;
};

/**
 * The same band as the home hero, at half the height: image across the viewport,
 * type over it. Type is light over a delivered render — those sit on near-black —
 * and stays ink over a stand-in drawing, which is light. The scrim covers the
 * cases in between.
 */
export function PageHero({ title, lead, image, cta, children }: Props) {
  const onDark = images[image].tone === "dark";

  return (
    <section>
      <FullBleed>
        <div className="relative isolate h-[46vh] min-h-[320px] overflow-hidden md:h-[58vh]">
          <div className="absolute inset-0">
            <ImageSlot
              id={image}
              aspect="auto"
              priority
              still
              sizes="100vw"
              objectPosition="50% 35%"
              className="h-full w-full"
            />
          </div>
          <div
            aria-hidden
            className={
              onDark
                ? "absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent"
                : "absolute inset-0 bg-gradient-to-r from-surface-100/90 via-surface-100/50 to-transparent"
            }
          />
          <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end gap-5 px-[var(--gutter)] pb-8 md:pb-12">
            <SquareMarker tone="accent" size={14} />
            <SectionHeading
              as="h1"
              size="h1"
              text={title}
              immediate
              className={onDark ? "text-surface-100" : undefined}
            />
          </div>
        </div>
      </FullBleed>

      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-6 gap-y-8 px-[var(--gutter)] py-[var(--section)]">
        <p className="col-span-12 max-w-[52ch] text-[20px] leading-[26px] md:col-span-7">{lead}</p>
        <div className="col-span-12 flex flex-col items-start gap-6 md:col-span-5">
          {cta && (
            <Button href={cta.href} variant="filled" arrow="→">
              {cta.label}
            </Button>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
