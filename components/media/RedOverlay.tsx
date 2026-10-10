"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

export type OverlayKind = "bottom-half" | "bottom-third" | "none";

/**
 * Accent block laid over the imagery; the parent must be `relative isolate`.
 *
 * Class names are written out in full. Tailwind scans the source text, so a
 * class assembled by interpolation is never generated — that silently removed
 * the block from every page once.
 *
 * The viewport target is the full-size wrapper: a scaled-to-zero element has a
 * zero-height intersection rect and would not reliably trigger on its own.
 */
export function RedOverlay({
  kind,
  immediate,
  tone,
}: {
  kind: Exclude<OverlayKind, "none">;
  /** paint with the server HTML and animate in CSS — for above-the-fold blocks */
  immediate?: boolean;
  /** near-black imagery: multiply would leave the block invisible */
  tone?: "dark";
}) {
  const reduce = useReducedMotion();
  const height = kind === "bottom-half" ? "50%" : "33.333%";
  const block = cn(
    "pointer-events-none absolute inset-x-0 bottom-0 origin-bottom bg-accent-overlay",
    tone !== "dark" && "mix-blend-multiply",
  );

  if (immediate) return <div aria-hidden className={cn("overlay-in", block)} style={{ height }} />;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      initial={reduce ? "shown" : "hidden"}
      whileInView="shown"
      viewport={{ once: true }}
    >
      <motion.div
        className={block}
        style={{ height }}
        variants={{ hidden: { scaleY: 0 }, shown: { scaleY: 1 } }}
        transition={{ duration: 0.6, ease: EASE }}
      />
    </motion.div>
  );
}
