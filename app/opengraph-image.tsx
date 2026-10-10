import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Dovmant — programmable lower-limb exoskeleton for locomotion research";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg("Locomotion research instrument");
}
