import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const alt = "Dovmant — The System";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg(
    "The System",
    "Actuation, sensing, control and data layers, and what a researcher can change in each.",
  );
}
