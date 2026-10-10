"use client";

import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

export type Step = { title: string; note: string; part?: string };

export function NumberedSteps({
  steps,
  onActive,
  className,
}: {
  steps: Step[];
  onActive?: (part: string | undefined) => void;
  className?: string;
}) {
  return (
    <ol className={cn("border-t border-line", className)}>
      {steps.map((s, i) => (
        <Reveal as="li" key={s.title} index={i}>
          <div
            tabIndex={onActive ? 0 : undefined}
            onMouseEnter={() => onActive?.(s.part)}
            onFocus={() => onActive?.(s.part)}
            className="grid grid-cols-[64px_1fr] items-baseline gap-x-4 gap-y-3 border-b border-line py-8 transition-colors hover:bg-surface-300/60 md:grid-cols-12 md:py-10"
          >
            <span className="display font-light text-accent text-step-no md:col-span-2">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="display text-step md:col-span-6">{s.title}</h3>
            <p className="col-start-2 max-w-[44ch] text-[13px] leading-[18px] text-ink-muted md:col-span-4 md:col-start-auto">
              {s.note}
            </p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
