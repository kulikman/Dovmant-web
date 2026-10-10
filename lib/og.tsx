import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * The device drawing, inlined as a data URI. While the artwork is a stand-in it
 * comes from /public/images/art; once the real render lands, point this at the
 * file set in content/images.ts.
 */
function deviceDataUri() {
  try {
    const file = join(process.cwd(), "public/images/art/device-standalone.svg");
    return `data:image/svg+xml;base64,${readFileSync(file).toString("base64")}`;
  } catch {
    return null;
  }
}

/**
 * One OG template: the device on the page background with the wordmark and the
 * page name. No claims, no sentences — the card carries no statement that could
 * be read as a claim about the instrument.
 */
export function renderOg(title: string) {
  const device = deviceDataUri();
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#F2F2F2",
        color: "#111111",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          flex: 1,
        }}
      >
        <div style={{ display: "flex", width: 24, height: 24, background: "#C1121F" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, letterSpacing: "-0.03em", lineHeight: 0.9, fontWeight: 600 }}>
            DOVMANT
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 30,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              color: "#5C5C5C",
            }}
          >
            {title}
          </div>
        </div>
      </div>
      {device ? (
        // next/image does not exist inside an ImageResponse; satori renders this tag.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={device} width={420} height={630} style={{ objectFit: "cover" }} alt="" />
      ) : (
        <div style={{ display: "flex", width: 420, height: 630, background: "#DCDCDC" }} />
      )}
    </div>,
    ogSize,
  );
}
