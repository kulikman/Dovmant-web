import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background: "#111111",
        color: "#F2F2F2",
        fontSize: 118,
        fontWeight: 600,
        letterSpacing: "-0.03em",
        fontFamily: "sans-serif",
      }}
    >
      D
      <div
        style={{
          position: "absolute",
          right: 18,
          bottom: 18,
          width: 28,
          height: 28,
          background: "#C1121F",
        }}
      />
    </div>,
    size,
  );
}
