import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const alt = "Dovmant — Sports";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg("Sports", "Training, load management and return to play.");
}
