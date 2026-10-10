import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const alt = "Dovmant — Investors";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg("Investors");
}
