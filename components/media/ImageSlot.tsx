import Image from "next/image";
import { images, slotFile, type ImageSlotId } from "@/content/images";
import { cn } from "@/lib/cn";
import { RedOverlay, type OverlayKind } from "./RedOverlay";

type Props = {
  id: ImageSlotId;
  aspect?: string;
  alt?: string;
  overlay?: OverlayKind;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** disable inner hover zoom (e.g. non-interactive hero) */
  still?: boolean;
  /** overlay paints with the server HTML (above the fold) */
  overlayImmediate?: boolean;
};

export function ImageSlot({
  id,
  aspect,
  alt,
  overlay = "none",
  priority,
  sizes = "(min-width: 1024px) 40vw, 100vw",
  className,
  still,
  overlayImmediate,
}: Props) {
  const def = images[id];
  const file = slotFile(def);
  const generated = !def.src && Boolean(def.art);
  const ratio = (aspect ?? def.aspect).replace("/", " / ");
  return (
    <div
      className={cn("group relative isolate overflow-hidden bg-surface-300", className)}
      style={{ aspectRatio: ratio }}
      data-slot={id}
      data-generated={generated || undefined}
    >
      {file ? (
        <Image
          src={file}
          alt={alt ?? def.alt}
          fill
          sizes={sizes}
          priority={priority}
          unoptimized={file.endsWith(".svg")}
          className={cn(
            "bw object-cover",
            !still &&
              "transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.02]",
          )}
        />
      ) : (
        <div role="img" aria-label={alt ?? def.alt} className="absolute inset-0 p-4 text-ink-muted">
          <p className="text-[12px] leading-4 font-medium tracking-wide uppercase">{id}</p>
          <p className="mt-1 max-w-[28ch] text-[13px] leading-[18px]">{def.description}</p>
        </div>
      )}
      {overlay !== "none" && (
        <RedOverlay kind={overlay} immediate={overlayImmediate} tone={def.tone} />
      )}
    </div>
  );
}
