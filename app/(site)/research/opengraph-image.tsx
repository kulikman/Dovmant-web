import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const alt = "Dovmant — Research";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg(
    "Research",
    "We place instruments with laboratories. You write the protocol and own the data.",
  );
}
