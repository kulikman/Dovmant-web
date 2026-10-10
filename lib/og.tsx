import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * One editorial OG template: square marker, wordmark, page title in accent,
 * one line of context. Kept on the light tokens so it matches the site.
 */
export function renderOg(title: string, subtitle: string) {
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
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ display: "flex", width: 24, height: 24, background: "#C1121F" }} />
        <div style={{ display: "flex", fontSize: 24, letterSpacing: "-0.03em", fontWeight: 600 }}>
          DOVMANT
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: title.length > 22 ? 84 : 112,
            letterSpacing: "-0.03em",
            lineHeight: 0.95,
            fontWeight: 600,
            textTransform: "uppercase",
            color: "#C1121F",
          }}
        >
          {title}
        </div>
        <div style={{ marginTop: 28, fontSize: 26, color: "#5C5C5C", maxWidth: 900 }}>
          {subtitle}
        </div>
      </div>
    </div>,
    ogSize,
  );
}
