import { Reveal } from "@/components/motion/Reveal";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { cn } from "@/lib/cn";

export type ThreeUpItem = { title: string; text: string };

/** Hairline-separated statements. Columns on desktop, stacked rows on mobile. */
export function ThreeUp({
  items,
  numbered,
  className,
}: {
  items: ThreeUpItem[];
  numbered?: boolean;
  className?: string;
}) {
  return (
    <ul className={cn("grid grid-cols-1 md:grid-cols-3", className)}>
      {items.map((it, i) => (
        <Reveal as="li" key={it.title} index={i}>
          <div
            className={cn(
              "flex h-full flex-col gap-5 border-t border-line py-6 md:py-0 md:pr-8 md:pl-6",
              i === 0 && "md:pl-0",
              i > 0 && "md:border-l md:border-l-line",
            )}
          >
            {numbered ? (
              <span className="display text-step-no font-light text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
            ) : (
              <SquareMarker tone={i === 0 ? "accent" : "ink"} size={14} />
            )}
            <h3 className="display text-step">{it.title}</h3>
            <p className="max-w-[44ch] text-[16px] leading-6 text-ink-muted">{it.text}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
