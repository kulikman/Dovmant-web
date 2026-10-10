import type { ReactNode } from "react";
import { ImageSlot } from "@/components/media/ImageSlot";
import type { ImageSlotId } from "@/content/images";
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

export function PageHero({ title, lead, image, cta, children }: Props) {
  return (
    <section className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-6 gap-y-10 px-[var(--gutter)] pt-8 pb-[var(--section)] md:min-h-[78vh]">
      <div className="col-span-12 flex flex-col justify-end gap-8 md:col-span-7">
        <SquareMarker size={14} />
        <SectionHeading as="h1" size="h1" text={title} immediate />
        <p className="max-w-[44ch] text-[20px] leading-[26px]">{lead}</p>
        {cta && (
          <div>
            <Button href={cta.href} variant="filled" arrow="→">
              {cta.label}
            </Button>
          </div>
        )}
        {children}
      </div>
      <div className="col-span-12 md:col-span-5">
        <ImageSlot
          id={image}
          aspect="4/5"
          overlay="bottom-half"
          priority
          className="w-full"
          sizes="(min-width: 768px) 40vw, 100vw"
        />
      </div>
    </section>
  );
}
