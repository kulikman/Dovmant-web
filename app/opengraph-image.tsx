import { ImageResponse } from "next/og";

export const alt = "Dovmant — programmable lower-limb exoskeleton for locomotion research";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#F2F2F2",
        color: "#111111",
        padding: 64,
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", width: 24, height: 24, background: "#C1121F" }} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 128, letterSpacing: "-0.03em", lineHeight: 0.9, fontWeight: 600 }}>
          DOVMANT
        </div>
        <div style={{ marginTop: 24, fontSize: 28, color: "#5C5C5C" }}>
          Programmable lower-limb exoskeleton for locomotion research
        </div>
      </div>
    </div>,
    size,
  );
}
