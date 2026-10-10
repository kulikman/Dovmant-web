import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const alt = "Dovmant — Rehabilitation";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg("Rehabilitation", "A device intended to support therapist-led gait training.");
}
