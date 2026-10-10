import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const alt = "Dovmant — Specifications";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg(
    "Specifications",
    "Parameters, interfaces, delivery terms and a quotation request.",
  );
}
