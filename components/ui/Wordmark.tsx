import Link from "next/link";
import { cn } from "@/lib/cn";

/** Stacked two-line wordmark: DOV / MANT■ */
export function Wordmark({ className, href = "/" }: { className?: string; href?: string }) {
  return (
    <Link
      href={href}
      aria-label="Dovmant — home"
      className={cn(
        "font-display inline-block text-[22px] leading-[0.86] font-semibold tracking-[-0.03em] uppercase",
        className,
      )}
    >
      <span aria-hidden className="block">
        DOV
      </span>
      <span aria-hidden className="flex items-end gap-1">
        MANT
        <span className="mb-[0.08em] inline-block h-[0.2em] w-[0.2em] bg-accent" />
      </span>
    </Link>
  );
}
