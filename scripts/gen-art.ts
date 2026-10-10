/**
 * Generates the stand-in artwork that fills the image slots until real
 * photography exists. Run with `npm run art`.
 *
 * These are deliberately abstract: motion studies, schematics, textures and
 * geometric portraits. Nothing here depicts the Dovmant device, a real person
 * or a real organisation — see the "no invented facts" rule in CLAUDE.md.
 * Real files always win: set `src` in content/images.ts and the artwork is
 * ignored.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { images, type ImageSlotId } from "../content/images";

const OUT = "public/images/art";

/* ── palette (greys only; the red block is added in CSS) ─────────────────── */
const BG = "#E6E6E6";
const FAINT = "#D2D2D2";
const SOFT = "#BDBDBD";
const MID = "#9A9A9A";
const DARK = "#5E5E5E";
const INK = "#2E2E2E";

/** Deterministic per-slot randomness, so regenerating gives identical files. */
function rng(seed: string) {
  let h = 2166136261;
  for (const ch of seed) {
    h ^= ch.charCodeAt(0);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    return ((h >>> 0) % 10000) / 10000;
  };
}

const svg = (w: number, h: number, body: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img">` +
  `<rect width="${w}" height="${h}" fill="${BG}"/>${body}</svg>`;

/** Ruler ticks down the left edge — the editorial "measured" feel. */
const ticks = (w: number, h: number, step = 48) => {
  let out = "";
  for (let y = step; y < h; y += step) {
    const long = y % (step * 4) === 0;
    out += `<line x1="0" y1="${y}" x2="${long ? 28 : 14}" y2="${y}" stroke="${SOFT}" stroke-width="2"/>`;
  }
  out += `<line x1="0" y1="${h - 1}" x2="${w}" y2="${h - 1}" stroke="${SOFT}" stroke-width="2"/>`;
  return out;
};

/**
 * One leg in the sagittal plane, drawn as two segments and three joints.
 * `phase` walks the limb through a stride.
 */
function limb(
  x: number,
  groundY: number,
  scale: number,
  phase: number,
  tone: string,
  weight: number,
) {
  const hipY = groundY - 520 * scale;
  const thigh = 230 * scale;
  const shank = 240 * scale;

  const joint = (cx: number, cy: number, r: number) =>
    `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${(r * scale).toFixed(1)}" fill="${BG}" stroke="${tone}" stroke-width="${weight}"/>`;

  /** One leg; the two legs of a stride are half a cycle apart. */
  const leg = (offset: number, lighter: boolean) => {
    const hipAngle = Math.sin(phase + offset) * 0.5 - 0.1;
    const kneeAngle = Math.max(0, Math.sin(phase + offset + 1.1)) * 0.9;
    const kneeX = x + Math.sin(hipAngle) * thigh;
    const kneeY = hipY + Math.cos(hipAngle) * thigh;
    const ankleX = kneeX + Math.sin(hipAngle - kneeAngle) * shank;
    const ankleY = kneeY + Math.cos(hipAngle - kneeAngle) * shank;
    const toeX = ankleX + 64 * scale;
    const w = lighter ? weight * 0.6 : weight;
    return (
      `<g stroke="${tone}" stroke-width="${w}" stroke-linecap="round" fill="none">` +
      `<line x1="${x}" y1="${hipY}" x2="${kneeX.toFixed(1)}" y2="${kneeY.toFixed(1)}"/>` +
      `<line x1="${kneeX.toFixed(1)}" y1="${kneeY.toFixed(1)}" x2="${ankleX.toFixed(1)}" y2="${ankleY.toFixed(1)}"/>` +
      `<line x1="${ankleX.toFixed(1)}" y1="${ankleY.toFixed(1)}" x2="${toeX.toFixed(1)}" y2="${ankleY.toFixed(1)}"/>` +
      `</g>` +
      joint(kneeX, kneeY, 17) +
      joint(ankleX, ankleY, 11)
    );
  };

  const shoulderY = hipY - 300 * scale;
  const headY = shoulderY - 86 * scale;
  const lean = Math.sin(phase) * 10 * scale;

  return (
    leg(Math.PI, true) +
    // torso, shoulder line and head keep the study readable as a walking figure
    `<g stroke="${tone}" stroke-width="${weight}" stroke-linecap="round" fill="none">` +
    `<line x1="${x}" y1="${hipY}" x2="${(x + lean).toFixed(1)}" y2="${shoulderY.toFixed(1)}"/>` +
    `<line x1="${(x + lean - 70 * scale).toFixed(1)}" y1="${shoulderY.toFixed(1)}" x2="${(x + lean + 70 * scale).toFixed(1)}" y2="${shoulderY.toFixed(1)}"/>` +
    `<line x1="${x - 46 * scale}" y1="${hipY}" x2="${x + 46 * scale}" y2="${hipY}"/>` +
    `</g>` +
    `<circle cx="${(x + lean).toFixed(1)}" cy="${headY.toFixed(1)}" r="${(52 * scale).toFixed(1)}" fill="none" stroke="${tone}" stroke-width="${weight}"/>` +
    leg(0, false) +
    joint(x, hipY, 13)
  );
}

/** Stride study: ghosted phases of a walk, the last one solid. */
function motionStudy(w: number, h: number, seed: string, frames = 5) {
  const r = rng(seed);
  const groundY = h * 0.95;
  const scale = h / 1250;
  const span = w * 0.72;
  const x0 = w * 0.16;
  const tones = [FAINT, SOFT, MID, DARK, INK];

  let body = ticks(w, h);
  // motion arcs above the ground line
  for (let i = 0; i < 3; i++) {
    const rad = h * (0.28 + i * 0.09);
    body += `<path d="M ${w * 0.1} ${groundY} A ${rad} ${rad} 0 0 1 ${w * 0.9} ${groundY}" fill="none" stroke="${FAINT}" stroke-width="2"/>`;
  }
  for (let i = 0; i < frames; i++) {
    const t = frames === 1 ? 0.5 : i / (frames - 1);
    // Weight peaks in the middle so the solid figure survives any crop.
    const focus = 1 - Math.abs(t - 0.5) * 2;
    const tone = tones[Math.min(tones.length - 1, Math.round(focus * (tones.length - 1)))];
    const weight = 3 + focus * 6;
    body += limb(x0 + span * t, groundY, scale, r() * 0.6 + t * 4.2, tone, weight);
  }
  return svg(w, h, body);
}

/** Halftone field — a soft grey texture that reads as photography at a glance. */
function halftone(w: number, h: number, seed: string) {
  const r = rng(seed);
  const step = Math.round(Math.min(w, h) / 26);
  const cx = w * (0.3 + r() * 0.4);
  const cy = h * 0.34;
  let body = "";
  for (let y = step; y < h; y += step) {
    for (let x = step; x < w; x += step) {
      const d = Math.hypot(x - cx, y - cy) / Math.hypot(w, h);
      const rad = Math.max(0, (0.42 - d) * step * 1.9);
      if (rad > 0.4) body += `<circle cx="${x}" cy="${y}" r="${rad.toFixed(2)}" fill="${MID}"/>`;
    }
  }
  body += `<circle cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" r="${(Math.min(w, h) * 0.13).toFixed(0)}" fill="none" stroke="${DARK}" stroke-width="3"/>`;
  return svg(w, h, body + ticks(w, h));
}

/** Joint schematic for the close-up detail slots. */
function detailSchematic(w: number, h: number, seed: string) {
  const r = rng(seed);
  const cx = w / 2;
  const cy = h * 0.46;
  const R = Math.min(w, h) * 0.26;
  let body = ticks(w, h, 40);

  for (let i = 0; i < 36; i++) {
    const a = (i / 36) * Math.PI * 2;
    const inner = R * 1.25;
    const outer = R * (i % 3 === 0 ? 1.44 : 1.34);
    body +=
      `<line x1="${(cx + Math.cos(a) * inner).toFixed(1)}" y1="${(cy + Math.sin(a) * inner).toFixed(1)}"` +
      ` x2="${(cx + Math.cos(a) * outer).toFixed(1)}" y2="${(cy + Math.sin(a) * outer).toFixed(1)}" stroke="${SOFT}" stroke-width="2"/>`;
  }
  body += `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="${INK}" stroke-width="7"/>`;
  body += `<circle cx="${cx}" cy="${cy}" r="${R * 0.55}" fill="none" stroke="${DARK}" stroke-width="4"/>`;
  body += `<circle cx="${cx}" cy="${cy}" r="${R * 0.12}" fill="${DARK}"/>`;
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + r();
    body += `<circle cx="${(cx + Math.cos(a) * R * 0.78).toFixed(1)}" cy="${(cy + Math.sin(a) * R * 0.78).toFixed(1)}" r="7" fill="${MID}"/>`;
  }
  body += `<line x1="${cx - R * 1.9}" y1="${cy}" x2="${cx + R * 1.9}" y2="${cy}" stroke="${SOFT}" stroke-width="2" stroke-dasharray="10 10"/>`;
  body += `<line x1="${cx}" y1="${cy - R * 1.9}" x2="${cx}" y2="${cy + R * 1.9}" stroke="${SOFT}" stroke-width="2" stroke-dasharray="10 10"/>`;
  return svg(w, h, body);
}

/** Exploded layout: components spaced along an axis. */
function exploded(w: number, h: number) {
  const cy = h / 2;
  let body = ticks(w, h, 40);
  body += `<line x1="${w * 0.06}" y1="${cy}" x2="${w * 0.94}" y2="${cy}" stroke="${SOFT}" stroke-width="2" stroke-dasharray="14 10"/>`;
  const pieces = [0.14, 0.32, 0.5, 0.68, 0.86];
  pieces.forEach((p, i) => {
    const x = w * p;
    const size = h * (i === 2 ? 0.34 : 0.22);
    const tone = i === 2 ? INK : i % 2 ? DARK : MID;
    body += `<rect x="${(x - size / 2).toFixed(1)}" y="${(cy - size / 2).toFixed(1)}" width="${size.toFixed(1)}" height="${size.toFixed(1)}" fill="none" stroke="${tone}" stroke-width="${i === 2 ? 6 : 4}"/>`;
    body += `<circle cx="${x.toFixed(1)}" cy="${cy}" r="${(size * 0.18).toFixed(1)}" fill="none" stroke="${tone}" stroke-width="3"/>`;
    body += `<line x1="${x.toFixed(1)}" y1="${(cy + size / 2).toFixed(1)}" x2="${x.toFixed(1)}" y2="${(h * 0.88).toFixed(1)}" stroke="${SOFT}" stroke-width="2"/>`;
    body += `<circle cx="${x.toFixed(1)}" cy="${(h * 0.88).toFixed(1)}" r="5" fill="${SOFT}"/>`;
  });
  return svg(w, h, body);
}

/** Wireframe of a dashboard — structure only, no invented numbers. */
function dashboard(w: number, h: number, seed: string) {
  const r = rng(seed);
  let body = `<rect x="0" y="0" width="${w}" height="${h * 0.11}" fill="${FAINT}"/>`;
  body += `<rect x="0" y="${h * 0.11}" width="${w * 0.2}" height="${h * 0.89}" fill="${FAINT}"/>`;
  for (let i = 0; i < 6; i++)
    body += `<rect x="${w * 0.04}" y="${h * (0.18 + i * 0.1)}" width="${w * 0.12}" height="${h * 0.035}" fill="${SOFT}"/>`;
  body += `<rect x="${w * 0.04}" y="${h * 0.035}" width="${w * 0.08}" height="${h * 0.04}" fill="${DARK}"/>`;

  const gx = w * 0.25;
  const gw = w * 0.45;
  const gy = h * 0.2;
  const gh = h * 0.42;
  body += `<rect x="${gx}" y="${gy}" width="${gw}" height="${gh}" fill="none" stroke="${SOFT}" stroke-width="2"/>`;
  const bars = 14;
  for (let i = 0; i < bars; i++) {
    const bh = gh * (0.25 + r() * 0.7);
    const bw = (gw / bars) * 0.55;
    body += `<rect x="${(gx + (gw / bars) * (i + 0.22)).toFixed(1)}" y="${(gy + gh - bh).toFixed(1)}" width="${bw.toFixed(1)}" height="${bh.toFixed(1)}" fill="${i === bars - 1 ? INK : MID}"/>`;
  }
  let path = "";
  for (let i = 0; i <= 20; i++) {
    const x = gx + (gw / 20) * i;
    const y = h * 0.78 + Math.sin(i * 0.7 + r()) * h * 0.05;
    path += `${i ? "L" : "M"} ${x.toFixed(1)} ${y.toFixed(1)} `;
  }
  body += `<path d="${path}" fill="none" stroke="${DARK}" stroke-width="3"/>`;
  for (let i = 0; i < 3; i++)
    body += `<rect x="${w * 0.73}" y="${h * (0.2 + i * 0.2)}" width="${w * 0.22}" height="${h * 0.15}" fill="${FAINT}"/>`;
  return svg(w, h, body);
}

/**
 * Stand-in for a portrait, printed as a halftone: dot size follows a head and
 * shoulders mass, so it reads as a newspaper print rather than an avatar.
 * There is no face — nothing here should be mistaken for a photograph.
 */
function portrait(w: number, h: number, seed: string) {
  const r = rng(seed);
  const cx = w * (0.48 + r() * 0.04);
  const headR = w * 0.23;
  const headY = h * (0.34 + r() * 0.05);
  const shoulderY = headY + headR * 1.75;

  /** 0 outside the figure, 1 at its centre. */
  const mass = (x: number, y: number) => {
    const head = 1 - Math.hypot((x - cx) / headR, (y - headY) / (headR * 1.12));
    const bodyW = w * 0.42;
    const bodyT = (y - shoulderY) / (h - shoulderY);
    const shoulder =
      y > shoulderY
        ? 1 - Math.abs(x - cx) / (bodyW * (0.62 + Math.min(1, Math.max(0, bodyT)) * 0.9))
        : -1;
    return Math.max(head, shoulder);
  };

  const step = Math.max(6, Math.round(w / 46));
  let body = "";
  for (let y = step / 2; y < h; y += step) {
    for (let x = step / 2; x < w; x += step) {
      const m = mass(x, y);
      // A little tone outside the figure keeps the frame from going flat.
      const t = m > 0 ? 0.35 + Math.min(1, m) * 0.65 : 0.16 - Math.min(0.12, -m * 0.25);
      const rad = t * step * 0.62;
      if (rad > 0.35)
        body += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${rad.toFixed(2)}" fill="${m > 0.45 ? INK : m > 0 ? DARK : MID}"/>`;
    }
  }
  body += `<circle cx="${cx.toFixed(1)}" cy="${headY.toFixed(1)}" r="${(headR * 1.6).toFixed(1)}" fill="none" stroke="${SOFT}" stroke-width="2"/>`;
  return svg(w, h, ticks(w, h, 36) + body);
}

/** Neutral mark for a partner slot — explicitly a placeholder, not a real logo. */
function logoMark(w: number, h: number, n: string) {
  const s = h * 0.34;
  return svg(
    w,
    h,
    `<rect x="${(w * 0.12).toFixed(1)}" y="${((h - s) / 2).toFixed(1)}" width="${s.toFixed(1)}" height="${s.toFixed(1)}" fill="${MID}"/>` +
      `<text x="${(w * 0.12 + s * 1.5).toFixed(1)}" y="${(h / 2 + h * 0.08).toFixed(1)}" font-family="Inter, Helvetica, Arial, sans-serif"` +
      ` font-size="${(h * 0.24).toFixed(1)}" font-weight="500" letter-spacing="2" fill="${MID}">PARTNER ${n}</text>`,
  );
}

/* ── which generator fills which slot ────────────────────────────────────── */
function artFor(id: ImageSlotId, w: number, h: number): string {
  if (id.startsWith("team-") || id.startsWith("testimonial-")) return portrait(w, h, id);
  if (id.startsWith("partner-logo-")) return logoMark(w, h, id.slice(-1));
  if (id.startsWith("detail-")) return detailSchematic(w, h, id);
  if (id === "exploded-view") return exploded(w, h);
  if (id === "app-dashboard") return dashboard(w, h, id);
  if (id === "faq-render" || id === "footer-render" || id === "page-hero-research")
    return halftone(w, h, id);
  if (id === "hero-render") return motionStudy(w, h, id, 5);
  if (id.startsWith("page-hero-")) return motionStudy(w, h, id, 3);
  return motionStudy(w, h, id, 4); // wear-*
}

/* ── write every slot ────────────────────────────────────────────────────── */
mkdirSync(OUT, { recursive: true });

const BASE = 1000;
let count = 0;
for (const [id, def] of Object.entries(images)) {
  const [aw, ah] = def.aspect.split("/").map(Number);
  const ratio = aw && ah ? aw / ah : 1;
  const h = ratio >= 1 ? Math.round(BASE / ratio) : BASE;
  const w = ratio >= 1 ? BASE : Math.round(BASE * ratio);
  writeFileSync(`${OUT}/${id}.svg`, artFor(id as ImageSlotId, w, h));
  count++;
}
console.log(`${count} artwork files written to ${OUT}`);
