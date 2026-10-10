"use client";

import { useEffect, useRef } from "react";
import { site } from "@/content/site";

/** Dark-theme full-screen film. Native <dialog> gives focus trap + Esc. */
export function VideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      data-theme="dark"
      aria-label="Dovmant film"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-surface-100 p-0 text-ink backdrop:bg-black"
    >
      <div className="relative flex h-full w-full items-center justify-center p-[var(--gutter)]">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-[var(--gutter)] z-10 rounded-pill border border-ink px-5 py-2 text-[15px] hover:bg-ink hover:text-surface-100"
        >
          Close
        </button>
        {open &&
          (site.filmVideo ? (
            <video className="max-h-full max-w-full" controls playsInline preload="metadata">
              <source src="/video/film.mp4" type="video/mp4" />
            </video>
          ) : (
            <p className="max-w-[40ch] text-[20px] leading-[26px]">
              The film is not published yet. [TBD]
            </p>
          ))}
      </div>
    </dialog>
  );
}
