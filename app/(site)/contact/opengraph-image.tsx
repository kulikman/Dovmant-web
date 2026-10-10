import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const alt = "Dovmant — Contact";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg("Contact", "Talk to the Dovmant team.");
}
