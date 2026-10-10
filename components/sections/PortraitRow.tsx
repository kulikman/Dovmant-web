import { ImageSlot } from "@/components/media/ImageSlot";
import type { ImageSlotId } from "@/content/images";

export type Portrait = { id: ImageSlotId; name: string; role: string; h?: string };

const heights: Record<string, string> = {
  tall: "h-[320px] md:h-[440px]",
  mid: "h-[260px] md:h-[360px]",
  short: "h-[220px] md:h-[300px]",
};

export function PortraitRow({ people }: { people: Portrait[] }) {
  return (
    <div
      tabIndex={0}
      role="region"
      aria-label="Portraits — scroll horizontally"
      className="scrollbar-none flex snap-x scroll-pl-[var(--gutter)] items-end gap-3 overflow-x-auto px-[var(--gutter)] pb-2"
    >
      {people.map((p, i) => (
        <figure key={p.id} className="w-[58vw] shrink-0 snap-start sm:w-[220px]">
          <div className={heights[p.h ?? "mid"]}>
            <ImageSlot
              id={p.id}
              aspect="auto"
              overlay={i === 2 ? "bottom-third" : "none"}
              sizes="220px"
              className="h-full w-full"
            />
          </div>
          <figcaption className="mt-3">
            <p className="text-[15px] leading-5">{p.name}</p>
            <p className="text-[13px] leading-[18px] text-ink-muted">{p.role}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
