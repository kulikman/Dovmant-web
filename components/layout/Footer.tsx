import Link from "next/link";
import { footerColumns, legalLinks, researchUseNotice, site } from "@/content/site";
import { ImageSlot } from "@/components/media/ImageSlot";
import { SquareMarker } from "@/components/ui/SquareMarker";
import { Wordmark } from "@/components/ui/Wordmark";

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1440px] px-[var(--gutter)] pb-24 md:pb-[var(--gutter)]">
      <div className="relative overflow-hidden rounded-frame bg-surface-200 px-6 pt-10 pb-0 md:px-10">
        <div className="grid grid-cols-12 gap-y-10 gap-x-6">
          <div className="col-span-12 flex flex-col justify-between gap-8 md:col-span-3">
            <Wordmark className="text-[40px] md:text-[56px]" />
            <SquareMarker tone="accent" size={16} />
          </div>
          <address className="col-span-12 text-[13px] leading-[18px] text-ink-muted not-italic md:col-span-3">
            <p>{site.address}</p>
            <p className="mt-4">{site.phone}</p>
            <p className="mt-4">{site.email}</p>
          </address>
          <div className="col-span-12 grid grid-cols-2 gap-6 text-[13px] leading-[18px] md:col-span-6 md:grid-cols-4 md:pr-[220px]">
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
        <p className="mt-16 max-w-[90ch] border-t border-line pt-6 text-[13px] leading-[18px] text-ink-muted md:pr-[220px]">
          {researchUseNotice}
        </p>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-4 pb-6 text-[13px] leading-[18px] text-ink-muted">
          <p>
            © {new Date().getFullYear()} Dovmant. {site.legalEntity}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 md:pr-[220px]">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute right-0 bottom-0 hidden w-[200px] md:block">
          <ImageSlot id="footer-render" aspect="1/1" overlay="bottom-half" sizes="200px" still />
        </div>
      </div>
    </footer>
  );
}
