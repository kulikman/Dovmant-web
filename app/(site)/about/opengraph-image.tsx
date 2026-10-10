import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const alt = "Dovmant — About";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg(
    "About",
    "Why we are building an exoskeleton meant to be measured. Denver, Colorado.",
  );
}
