import { cn } from "@/lib/cn";

export function SquareMarker({
  tone = "ink",
  size = 14,
  className,
}: {
  tone?: "ink" | "accent";
  size?: 12 | 14 | 16;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn("inline-block shrink-0", tone === "accent" ? "bg-accent" : "bg-ink", className)}
      style={{ width: size, height: size }}
    />
  );
}
