import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const alt = "Dovmant — News";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg("News", "Company updates and research notes.");
}
