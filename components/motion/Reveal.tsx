"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

type Props = {
  children: ReactNode;
  className?: string;
  /** index in a group → 60ms stagger */
  index?: number;
  as?: "div" | "li" | "section" | "article" | "p";
};

export function Reveal({ children, className, index = 0, as = "div" }: Props) {
  const reduce = useReducedMotion();
  const M = motion[as];
  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }
  return (
    <M
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{
        duration: 0.4,
        ease: EASE,
        delay: Math.min(index, 8) * 0.06,
      }}
    >
      {children}
    </M>
  );
}
