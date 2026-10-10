import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Section({
  children,
  className,
  id,
  bleed,
  label,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  /** no side padding — child handles its own (horizontal scrollers) */
  bleed?: boolean;
  label?: string;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn(
        "mx-auto max-w-[1440px] py-[var(--section)]",
        !bleed && "px-[var(--gutter)]",
        className,
      )}
    >
      {children}
    </section>
  );
}
