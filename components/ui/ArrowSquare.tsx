import Link from "next/link";
import { cn } from "@/lib/cn";

type Common = { label: string; className?: string; size?: number };

export function ArrowSquare(
  props: Common & ({ href: string; onClick?: never } | { onClick: () => void; href?: never }),
) {
  const { label, className, size = 80 } = props;
  const cls = cn(
    "grid place-items-center bg-ink text-surface-100 text-[28px] leading-none transition-colors hover:bg-accent hover:text-on-accent",
    className,
  );
  const style = { width: size, height: size };
  if ("href" in props && props.href)
    return (
      <Link href={props.href} aria-label={label} className={cls} style={style}>
        <span aria-hidden>↗</span>
      </Link>
    );
  return (
    <button type="button" aria-label={label} onClick={props.onClick} className={cls} style={style}>
      <span aria-hidden>↗</span>
    </button>
  );
}
