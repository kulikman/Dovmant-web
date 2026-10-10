import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  variant?: "filled" | "outline";
  arrow?: "→" | "↗" | "↘" | null;
  href?: string;
  children: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button({
  variant = "outline",
  arrow = "↘",
  href,
  children,
  className,
  ...rest
}: Props) {
  const cls = cn(
    "inline-flex items-center gap-2 rounded-pill px-6 py-3 text-[15px] leading-5 font-medium transition-colors duration-200",
    variant === "filled"
      ? "bg-ink text-surface-100 border border-ink hover:bg-accent hover:border-accent hover:text-on-accent"
      : "border border-ink text-ink hover:bg-ink hover:text-surface-100",
    className,
  );
  const content = (
    <>
      {children}
      {arrow && <span aria-hidden>{arrow}</span>}
    </>
  );
  if (href)
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  return (
    <button className={cls} {...rest}>
      {content}
    </button>
  );
}
