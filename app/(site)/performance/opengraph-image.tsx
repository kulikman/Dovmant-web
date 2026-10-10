import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const alt = "Dovmant — Performance";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg("Performance", "A controllable, repeatable load and a measurable data stream.");
}
