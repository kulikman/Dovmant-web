import Link from "next/link";
import { footerColumns, researchUseNotice, site } from "@/content/site";
import { ImageSlot } from "@/components/media/ImageSlot";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { Wordmark } from "@/components/ui/Wordmark";

/**
 * Five link columns need room: squeezed into half the panel they ran into each
 * other, "PROGRAMMES" into "COMPANY". They now take nine of twelve, and the
 * render sits beside the wordmark rather than over the bottom-right corner, so
 * the research-use notice runs the full width of the panel.
 */
export function Footer() {
  return (
    <footer className="mx-auto max-w-[1440px] px-[var(--gutter)] pb-24 md:pb-[var(--gutter)]">
      <div className="relative overflow-hidden rounded-frame bg-surface-200 px-6 pt-10 pb-0 md:px-10">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 flex flex-col justify-between gap-8 md:col-span-3">
            <Wordmark className="text-[40px] md:text-[56px]" />
            <address className="text-[13px] leading-[18px] text-ink-muted not-italic">
              <p className="max-w-[26ch]">{site.address}</p>
              <p className="mt-4">
                <a href={`mailto:${site.email}`} className="link">
                  {site.email}
                </a>
              </p>
              <p className="mt-4">
                <a href={site.linkedin} className="link" rel="noreferrer">
                  LinkedIn ↗
                </a>
              </p>
            </address>
            <SquareMarker tone="accent" size={16} />
          </div>

          <div className="col-span-12 grid grid-cols-2 gap-x-6 gap-y-8 text-[13px] leading-[18px] sm:grid-cols-3 md:col-span-9 lg:grid-cols-5">
            {footerColumns.map((c) => (
              <nav key={c.title} aria-label={c.title}>
                <p className="mb-3 text-[12px] leading-4 font-medium uppercase">{c.title}</p>
                <ul className="space-y-2">
                  {c.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link href={l.href} className="link-quiet text-ink-muted hover:text-ink">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-8 border-t border-line pt-6 pb-6">
          <div className="col-span-12 flex flex-col justify-between gap-8 md:col-span-9">
            <p className="text-[13px] leading-[18px] text-ink-muted">{researchUseNotice}</p>
            <p className="text-[13px] leading-[18px] text-ink-muted">
              © {new Date().getFullYear()} Dovmant. {site.legalEntity}
            </p>
          </div>
          <div className="col-span-12 md:col-span-3">
            <ImageSlot
              id="footer-render"
              aspect="16/10"
              overlay="bottom-third"
              sizes="320px"
              still
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
