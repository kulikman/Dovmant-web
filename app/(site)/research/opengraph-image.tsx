import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const alt = "Dovmant — Research";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg("Research");
}
