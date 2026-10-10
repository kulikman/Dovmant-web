import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const alt = "Dovmant — Technology";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg("Technology", "Sensing, an AI motion model, actuation and data.");
}
