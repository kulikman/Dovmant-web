"use client";

import { useState } from "react";
import { RedOverlay } from "@/components/media/RedOverlay";
import { images } from "@/content/images";
import { HeroVideo } from "@/components/media/HeroVideo";
import { VideoModal } from "@/components/media/VideoModal";
import { ArrowSquare } from "@/components/ui/ArrowSquare";

export function HeroMedia() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative isolate h-full w-full overflow-hidden bg-surface-300">
      <HeroVideo />
      <RedOverlay kind="bottom-half" immediate tone={images["hero-render"].tone} />
      <ArrowSquare
        label="Watch the film"
        onClick={() => setOpen(true)}
        className="absolute bottom-0 left-0 z-10"
        size={72}
      />
      <VideoModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
