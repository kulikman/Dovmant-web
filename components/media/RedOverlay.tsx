"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE } from "@/components/motion/Reveal";

export type OverlayKind = "bottom-half" | "bottom-third" | "none";

/**
 * Accent block laid over B&W imagery; parent must be `relative isolate`.
 * The viewport target is the full-size wrapper — a scaled-to-zero element has a
 * zero-height intersection rect and would not reliably trigger on its own.
 */
export function RedOverlay({ kind }: { kind: Exclude<OverlayKind, "none"> }) {
  const reduce = useReducedMotion();
  const height = kind === "bottom-half" ? "50%" : "33.333%";
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      initial={reduce ? "shown" : "hidden"}
      whileInView="shown"
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute inset-x-0 bottom-0 origin-bottom bg-accent-overlay mix-blend-multiply"
        style={{ height }}
        variants={{ hidden: { scaleY: 0 }, shown: { scaleY: 1 } }}
        transition={{ duration: 0.6, ease: EASE }}
      />
    </motion.div>
  );
}
