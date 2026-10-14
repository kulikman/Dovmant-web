import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const alt = "Dovmant — Roadmap";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg("Roadmap");
}
