"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { ImageSlot } from "./ImageSlot";
import { site } from "@/content/site";

/** Poster paints first; the video mounts after first paint and fades in only once it can play. */
export function HeroVideo() {
  const reduce = useReducedMotion();
  const [mount, setMount] = useState(false);
  const [ready, setReady] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (reduce || !site.heroVideo) return;
    const start = () => setMount(true);
    if ("requestIdleCallback" in window) {
      const h = window.requestIdleCallback(start, { timeout: 2000 });
      return () => window.cancelIdleCallback(h);
    }
    const t = setTimeout(start, 600);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <div className="absolute inset-0">
      <ImageSlot
        id="hero-render"
        priority
        still
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="h-full w-full"
        aspect="auto"
      />
      {mount && !reduce && (
        <video
          ref={ref}
          className="bw absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
          style={{ opacity: ready ? 1 : 0 }}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          onLoadedData={() => setReady(true)}
          aria-hidden
        >
          <source src="/video/hero-vertical.webm" type="video/webm" media="(max-width: 767px)" />
          <source src="/video/hero-vertical.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source src="/video/hero.webm" type="video/webm" />
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}
