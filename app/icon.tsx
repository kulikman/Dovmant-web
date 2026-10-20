import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** The wordmark reduced to its first letter, with the accent square it carries. */
export default function Icon() {
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
        fontSize: 24,
        fontWeight: 600,
        letterSpacing: "-0.03em",
        fontFamily: "sans-serif",
      }}
    >
      D
      <div
        style={{
          position: "absolute",
          right: 3,
          bottom: 3,
          width: 6,
          height: 6,
          background: "#C1121F",
        }}
      />
    </div>,
    size,
  );
}
