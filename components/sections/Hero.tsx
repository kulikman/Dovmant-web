"use client";

import { useState } from "react";
import { ImageSlot } from "@/components/media/ImageSlot";
import { FullBleed } from "@/components/media/FullBleed";
import { VideoModal } from "@/components/media/VideoModal";
import { ArrowSquare } from "@/components/ui/ArrowSquare";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { hero } from "@/content/home";
import { site } from "@/content/site";

/**
 * A full-bleed band with the device, the wordmark over it and the claim beside.
 * The renders are shot on near-black, so light type sits on them directly; the
 * scrim is there for the frames where it does not.
 */
export function Hero() {
  const [film, setFilm] = useState(false);

  return (
    <section className="mx-auto max-w-[1440px] px-[var(--gutter)]">
      <FullBleed>
        <div className="relative isolate h-[72vh] min-h-[520px] overflow-hidden bg-ink md:h-[86vh]">
          <div className="absolute inset-0">
            <ImageSlot
              id="hero-band"
              aspect="auto"
              priority
              still
              sizes="100vw"
              objectPosition="50% 50%"
              className="h-full w-full"
            />
          </div>
          {/* keeps the headline legible on any frame that is not already dark */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"
          />

          <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end gap-6 px-[var(--gutter)] pb-10 md:pb-16">
            <SquareMarker tone="accent" size={16} />
            <SectionHeading
              as="h1"
              size="hero"
              text="DOVMANT"
              immediate
              className="text-surface-100"
            />
            <p className="max-w-[46ch] text-[20px] leading-[26px] text-surface-100">
              {site.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                href={hero.contact.href}
                variant="filled"
                arrow="↘"
                className="!border-surface-100 !bg-surface-100 !text-ink hover:!bg-accent hover:!text-on-accent"
              >
                {hero.contact.label}
              </Button>
              <Button
                href={hero.moreInfo.href}
                arrow="→"
                className="!border-surface-100 !text-surface-100 hover:!bg-surface-100 hover:!text-ink"
              >
                {hero.moreInfo.label}
              </Button>
            </div>
          </div>

          <ArrowSquare
            label="Watch the film"
            onClick={() => setFilm(true)}
            tone="light"
            className="absolute right-0 bottom-0 z-10"
            size={72}
          />
          <p
            aria-hidden
            className="absolute top-[var(--gutter)] right-[var(--gutter)] z-10 hidden text-[12px] leading-4 tracking-[0.1em] text-surface-100 uppercase lg:block"
            style={{ writingMode: "vertical-rl" }}
          >
            {hero.label}
          </p>
        </div>
      </FullBleed>

      <VideoModal open={film} onClose={() => setFilm(false)} />

      <div className="grid grid-cols-12 gap-x-6 gap-y-6 py-[var(--section)]">
        <div className="col-span-12 md:col-span-7">
          <SectionHeading as="p" size="h2" text={hero.claim} immediate />
        </div>
        <p className="col-span-12 max-w-[40ch] self-end text-[16px] leading-6 text-ink-muted md:col-span-4 md:col-start-9">
          {site.heroNote}
        </p>
      </div>
    </section>
  );
}
