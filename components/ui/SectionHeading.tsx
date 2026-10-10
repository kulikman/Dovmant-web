"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";
import { parseRich, stripRich } from "@/lib/rich";

const sizes = {
  hero: "text-hero",
  h1: "text-h1",
  h2: "text-h2",
  step: "text-step",
} as const;

type Props = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "div";
  size?: keyof typeof sizes;
  /** indent each following line (stepped headline) */
  stepped?: boolean;
  /** CSS-only reveal on load (no hydration wait) — for the hero/LCP */
  immediate?: boolean;
  className?: string;
};

export function SectionHeading({
  text,
  as: Tag = "h2",
  size = "h2",
  stepped,
  immediate,
  className,
}: Props) {
  const reduce = useReducedMotion();
  const lines = parseRich(text);
  return (
    <Tag className={cn("display", sizes[size], className)} aria-label={stripRich(text)}>
      {lines.map((segs, i) => {
        const inner = segs.map((s, j) => (
          <span key={j} className={cn(s.accent && "accent", s.light && "light")}>
            {s.text}
          </span>
        ));
        const indent = stepped ? { paddingLeft: `${i * 0.7}em` } : undefined;
        return (
          <span key={i} aria-hidden className="block overflow-hidden pb-[0.06em]" style={indent}>
            {immediate ? (
              <span className="line-in block" style={{ animationDelay: `${i * 80}ms` }}>
                {inner}
              </span>
            ) : reduce ? (
              <span className="block">{inner}</span>
            ) : (
              <motion.span
                className="block"
                initial={{ y: "105%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
              >
                {inner}
              </motion.span>
            )}
          </span>
        );
      })}
    </Tag>
  );
}
