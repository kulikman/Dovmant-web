"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE } from "@/components/motion/Reveal";

export type OverlayKind = "bottom-half" | "bottom-third" | "none";

/** accent block laid over B&W imagery; parent must be `relative isolate`. */
export function RedOverlay({ kind }: { kind: Exclude<OverlayKind, "none"> }) {
  const reduce = useReducedMotion();
  const h = kind === "bottom-half" ? "50%" : "33.333%";
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 origin-bottom bg-accent-overlay mix-blend-multiply"
      style={{ height: h }}
      initial={reduce ? false : { scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: EASE }}
    />
  );
}
