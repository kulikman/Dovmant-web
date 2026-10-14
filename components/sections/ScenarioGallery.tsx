"use client";

import { useRef } from "react";
import { ImageSlot } from "@/components/media/ImageSlot";
import type { ImageSlotId } from "@/content/images";

export type ScenarioItem = { id: ImageSlotId; caption: string; overlay?: boolean };

export function ScenarioGallery({ items }: { items: ScenarioItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) =>
    ref.current?.scrollBy({
      left: dir * Math.min(400, ref.current.clientWidth * 0.8),
      behavior: "smooth",
    });
  return (
    <div>
      <div className="mb-6 flex justify-end gap-2 px-[var(--gutter)] text-[28px] leading-none">
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scroll(-1)}
          className="grid h-12 w-12 place-items-center border border-ink hover:bg-ink hover:text-surface-100"
        >
          <span aria-hidden>←</span>
        </button>
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scroll(1)}
          className="grid h-12 w-12 place-items-center border border-ink hover:bg-ink hover:text-surface-100"
        >
          <span aria-hidden>→</span>
        </button>
      </div>
      <div
        ref={ref}
        tabIndex={0}
        role="region"
        aria-label="Wearing scenarios — scroll horizontally"
        className="scrollbar-none flex snap-x snap-mandatory scroll-pl-[var(--gutter)] gap-4 overflow-x-auto px-[var(--gutter)] pb-2"
      >
        {items.map((it) => (
          <figure key={it.id} className="w-[82vw] shrink-0 snap-start sm:w-[420px] lg:w-[480px]">
            <ImageSlot
              id={it.id}
              aspect="4/5"
              overlay={it.overlay ? "bottom-third" : "none"}
              sizes="380px"
            />
            <figcaption className="mt-3 text-[15px] leading-5">{it.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
