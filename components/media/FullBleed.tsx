import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Breaks out of the 1440 container to the full viewport width. Used for the
 * image bands, which carry the site now that the renders are the strongest
 * thing we have.
 */
export function FullBleed({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative left-1/2 w-screen -translate-x-1/2", className)}>{children}</div>
  );
}
