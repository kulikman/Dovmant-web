import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ImageSlot } from "@/components/media/ImageSlot";
import { paths } from "@/content/home";

/** Image-led fork into the two pages that matter. */
export function TwoCards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {paths.items.map((p, i) => (
        <Reveal key={p.title} index={i}>
          <Link href={p.href} className="group block">
            <ImageSlot
              id={p.image}
              aspect="4/3"
              overlay={p.overlay ? "bottom-third" : "none"}
              sizes="(min-width: 768px) 46vw, 100vw"
            />
            <div className="mt-5 flex items-start justify-between gap-6 border-t border-ink pt-5">
              <div>
                <h2 className="display text-step">{p.title}</h2>
                <p className="mt-3 max-w-[44ch] text-[16px] leading-6 text-ink-muted">{p.text}</p>
              </div>
              <span
                aria-hidden
                className="text-[40px] leading-none transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              >
                ↗
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
