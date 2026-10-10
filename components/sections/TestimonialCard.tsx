import { ImageSlot } from "@/components/media/ImageSlot";
import type { ImageSlotId } from "@/content/images";

export type Testimonial = {
  id: ImageSlotId;
  name: string;
  quote: string;
  overlay?: boolean;
};

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="w-[70vw] shrink-0 snap-start sm:w-[300px] lg:w-auto">
      <ImageSlot
        id={t.id}
        aspect="3/4"
        overlay={t.overlay ? "bottom-half" : "none"}
        sizes="320px"
      />
      <figcaption className="mt-3">
        <p className="text-[18px] leading-6">{t.name}</p>
        <blockquote className="mt-2 max-w-[34ch] text-[13px] leading-[18px] text-ink-muted">
          {t.quote}
        </blockquote>
      </figcaption>
    </figure>
  );
}
