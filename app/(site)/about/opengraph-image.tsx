import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const alt = "Dovmant — About";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg("About", "Who we are and what we are building.");
}
