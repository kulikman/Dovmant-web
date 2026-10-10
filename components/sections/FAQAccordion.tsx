"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";

export type FaqItem = { q: string; a: string };

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();
  return (
    <ul className="border-t border-line">
      {items.map((it, i) => {
        const isOpen = open === i;
        const panel = `${base}-p${i}`;
        const btn = `${base}-b${i}`;
        return (
          <li key={it.q} className="border-b border-line">
            <h3>
              <button
                id={btn}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panel}
                onClick={() => setOpen(isOpen ? null : i)}
                className={cn(
                  "flex w-full items-start justify-between gap-6 py-5 text-left text-faq font-medium transition-colors hover:bg-surface-300/60",
                  isOpen ? "text-accent" : "text-ink",
                )}
              >
                <span>{it.q}</span>
                <span aria-hidden className="shrink-0 pt-1 text-[20px] leading-none">
                  {isOpen ? "↑" : "↓"}
                </span>
              </button>
            </h3>
            <div
              id={panel}
              role="region"
              aria-labelledby={btn}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-[var(--ease-out)]",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-[60ch] pb-6 text-[13px] leading-[18px] text-accent">{it.a}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
