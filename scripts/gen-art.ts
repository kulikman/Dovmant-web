/**
 * Generates the stand-in artwork that fills the image slots until the shoot.
 * Run with `npm run art`.
 *
 * These are technical illustrations, not photographs: a schematic device on a
 * schematic figure, laboratory props drawn as line work, halftone fields.
 * They exist so the layout can be judged with something in the frames, and they
 * are meant to be replaced — set `src` in content/images.ts and the artwork is
 * ignored. See docs/shot-list.md for what each slot actually needs.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { images, type ImageSlotId } from "../content/images";

const OUT = "public/images/art";

/* ── palette (greys only; the accent block is added in CSS) ──────────────── */
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

const n = (v: number) => v.toFixed(1);

/** Ruler ticks down the left edge and a baseline — the measured, editorial feel. */
const ticks = (w: number, h: number, step = 48) => {
  let out = "";
  for (let y = step; y < h; y += step) {
    const long = y % (step * 4) === 0;
    out += `<line x1="0" y1="${y}" x2="${long ? 28 : 14}" y2="${y}" stroke="${SOFT}" stroke-width="2"/>`;
  }
  return out;
};

type P = { x: number; y: number };

/** A bar running parallel to a limb segment, offset laterally — the exo frame. */
function frameBar(a: P, b: P, off: number, tone: string, weight: number) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const nx = (-dy / len) * off;
  const ny = (dx / len) * off;
  return (
    `<line x1="${n(a.x + nx)}" y1="${n(a.y + ny)}" x2="${n(b.x + nx)}" y2="${n(b.y + ny)}" stroke="${tone}" stroke-width="${weight}" stroke-linecap="round"/>` +
    // two cuffs across the segment
    [0.3, 0.72]
      .map((t) => {
        const px = a.x + dx * t;
        const py = a.y + dy * t;
        return `<line x1="${n(px)}" y1="${n(py)}" x2="${n(px + nx * 1.35)}" y2="${n(py + ny * 1.35)}" stroke="${tone}" stroke-width="${weight * 0.7}" stroke-linecap="round"/>`;
      })
      .join("")
  );
}

/**
 * A walking figure wearing the device: body as thin line work, device frame and
 * actuators heavier on top of it.
 */
function exoFigure(
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
  const off = 26 * scale;

  const joint = (c: P, r: number, w: number) =>
    `<circle cx="${n(c.x)}" cy="${n(c.y)}" r="${n(r * scale)}" fill="${BG}" stroke="${tone}" stroke-width="${w}"/>`;

  const leg = (shift: number, back: boolean) => {
    const hipAngle = Math.sin(phase + shift) * 0.5 - 0.1;
    const kneeAngle = Math.max(0, Math.sin(phase + shift + 1.1)) * 0.9;
    const hip: P = { x, y: hipY };
    const knee: P = {
      x: x + Math.sin(hipAngle) * thigh,
      y: hipY + Math.cos(hipAngle) * thigh,
    };
    const ankle: P = {
      x: knee.x + Math.sin(hipAngle - kneeAngle) * shank,
      y: knee.y + Math.cos(hipAngle - kneeAngle) * shank,
    };
    const w = back ? weight * 0.55 : weight;
    const sideOff = back ? -off : off;

    return (
      // limb
      `<g stroke="${tone}" stroke-width="${w}" stroke-linecap="round" fill="none">` +
      `<line x1="${n(hip.x)}" y1="${n(hip.y)}" x2="${n(knee.x)}" y2="${n(knee.y)}"/>` +
      `<line x1="${n(knee.x)}" y1="${n(knee.y)}" x2="${n(ankle.x)}" y2="${n(ankle.y)}"/>` +
      `<line x1="${n(ankle.x)}" y1="${n(ankle.y)}" x2="${n(ankle.x + 64 * scale)}" y2="${n(ankle.y)}"/>` +
      `</g>` +
      // device frame over it
      frameBar(hip, knee, sideOff, tone, w * 1.3) +
      frameBar(knee, ankle, sideOff, tone, w * 1.3) +
      // actuators at hip and knee
      joint({ x: hip.x + sideOff, y: hip.y }, 20, w * 1.3) +
      joint({ x: knee.x + sideOff, y: knee.y }, 26, w * 1.3) +
      `<circle cx="${n(knee.x + sideOff)}" cy="${n(knee.y)}" r="${n(11 * scale)}" fill="${tone}"/>` +
      joint(ankle, 11, w)
    );
  };

  const shoulderY = hipY - 300 * scale;
  const headY = shoulderY - 86 * scale;
  const lean = Math.sin(phase) * 10 * scale;

  return (
    leg(Math.PI, true) +
    `<g stroke="${tone}" stroke-width="${weight}" stroke-linecap="round" fill="none">` +
    `<line x1="${x}" y1="${n(hipY)}" x2="${n(x + lean)}" y2="${n(shoulderY)}"/>` +
    `<line x1="${n(x + lean - 70 * scale)}" y1="${n(shoulderY)}" x2="${n(x + lean + 70 * scale)}" y2="${n(shoulderY)}"/>` +
    `<line x1="${n(x - 46 * scale)}" y1="${n(hipY)}" x2="${n(x + 46 * scale)}" y2="${n(hipY)}"/>` +
    `</g>` +
    `<circle cx="${n(x + lean)}" cy="${n(headY)}" r="${n(52 * scale)}" fill="none" stroke="${tone}" stroke-width="${weight}"/>` +
    // control unit at the waist
    `<rect x="${n(x - 58 * scale)}" y="${n(hipY - 74 * scale)}" width="${n(52 * scale)}" height="${n(64 * scale)}" fill="none" stroke="${tone}" stroke-width="${weight}"/>` +
    leg(0, false)
  );
}

/** Stride study: ghosted phases of a walk, the focus figure solid. */
function motionStudy(w: number, h: number, seed: string, frames = 5) {
  const r = rng(seed);
  const groundY = h * 0.95;
  const scale = h / 1250;
  const span = w * 0.72;
  const x0 = w * 0.16;
  const tones = [FAINT, SOFT, MID, DARK, INK];

  let body = ticks(w, h);
  for (let i = 0; i < 3; i++) {
    const rad = h * (0.28 + i * 0.09);
    body += `<path d="M ${n(w * 0.1)} ${n(groundY)} A ${n(rad)} ${n(rad)} 0 0 1 ${n(w * 0.9)} ${n(groundY)}" fill="none" stroke="${FAINT}" stroke-width="2"/>`;
  }
  body += `<line x1="0" y1="${n(groundY)}" x2="${w}" y2="${n(groundY)}" stroke="${SOFT}" stroke-width="2"/>`;
  for (let i = 0; i < frames; i++) {
    const t = frames === 1 ? 0.5 : i / (frames - 1);
    const focus = 1 - Math.abs(t - 0.5) * 2;
    const tone = tones[Math.min(tones.length - 1, Math.round(focus * (tones.length - 1)))];
    body += exoFigure(x0 + span * t, groundY, scale, r() * 0.6 + t * 4.2, tone, 3 + focus * 5);
  }
  return svg(w, h, body);
}

/** Laboratory scene: capture cameras, force plates, optional incline or treadmill. */
function labScene(
  w: number,
  h: number,
  seed: string,
  variant: "gait" | "incline" | "load" | "sprint" | "rig",
) {
  const r = rng(seed);
  const groundY = h * 0.84;
  const scale = h / 1150;
  let body = ticks(w, h, 40);

  // capture cameras on tripods, back of frame
  const cams = variant === "rig" ? 4 : 3;
  for (let i = 0; i < cams; i++) {
    const cx = w * (0.12 + (i * 0.76) / Math.max(1, cams - 1));
    const top = groundY - h * (0.42 + r() * 0.05);
    body +=
      `<line x1="${n(cx)}" y1="${n(top)}" x2="${n(cx)}" y2="${n(groundY)}" stroke="${SOFT}" stroke-width="2"/>` +
      `<line x1="${n(cx - 16)}" y1="${n(groundY)}" x2="${n(cx + 16)}" y2="${n(groundY)}" stroke="${SOFT}" stroke-width="2"/>` +
      `<rect x="${n(cx - 20)}" y="${n(top - 16)}" width="40" height="22" fill="none" stroke="${MID}" stroke-width="2.5"/>` +
      `<circle cx="${n(cx)}" cy="${n(top - 5)}" r="5" fill="${MID}"/>`;
  }

  body += `<line x1="0" y1="${n(groundY)}" x2="${w}" y2="${n(groundY)}" stroke="${DARK}" stroke-width="2.5"/>`;

  // floor-embedded force plates
  if (variant === "gait" || variant === "rig" || variant === "load") {
    const plates = 3;
    const pw = w * 0.17;
    for (let i = 0; i < plates; i++) {
      const px = w * 0.16 + i * (pw + w * 0.03);
      body += `<rect x="${n(px)}" y="${n(groundY + 6)}" width="${n(pw)}" height="${n(h * 0.06)}" fill="none" stroke="${MID}" stroke-width="2.5"/>`;
    }
  }

  if (variant === "incline") {
    body += `<path d="M ${n(w * 0.1)} ${n(groundY)} L ${n(w * 0.92)} ${n(groundY - h * 0.3)} L ${n(w * 0.92)} ${n(groundY)} Z" fill="none" stroke="${MID}" stroke-width="2.5"/>`;
  }
  if (variant === "sprint") {
    for (let i = 0; i < 6; i++) {
      const y = groundY + 8 + i * 4;
      body += `<line x1="0" y1="${n(y)}" x2="${w}" y2="${n(y)}" stroke="${FAINT}" stroke-width="1.5"/>`;
    }
  }

  // the figure, or the device on a bench for the rig frame
  if (variant === "rig") {
    body += deviceOnStand(w * 0.52, groundY, scale * 0.9, INK, 4);
  } else {
    const yOff = variant === "incline" ? -h * 0.12 : 0;
    const phases = variant === "sprint" ? [1.2, 2.6, 4.0] : [2.3];
    phases.forEach((ph, i) => {
      const tone = i === phases.length - 1 ? INK : SOFT;
      body += exoFigure(
        w * (phases.length === 1 ? 0.52 : 0.26 + i * 0.26),
        groundY + yOff,
        scale,
        ph,
        tone,
        i === phases.length - 1 ? 7 : 4,
      );
    });
    if (variant === "load") {
      const bx = w * 0.52 - 40;
      body += `<rect x="${n(bx)}" y="${n(groundY + yOff - 620 * scale)}" width="80" height="90" fill="none" stroke="${INK}" stroke-width="5"/>`;
    }
  }
  return svg(w, h, body);
}

/** The device alone, on a stand — the specification frame. */
function deviceOnStand(cx: number, groundY: number, scale: number, tone: string, weight: number) {
  const hipY = groundY - 560 * scale;
  const kneeY = groundY - 300 * scale;
  const ankleY = groundY - 60 * scale;
  let out = "";

  for (const side of [-1, 1]) {
    const x = cx + side * 62 * scale;
    out +=
      `<line x1="${n(x)}" y1="${n(hipY)}" x2="${n(x)}" y2="${n(kneeY)}" stroke="${tone}" stroke-width="${weight * 1.4}" stroke-linecap="round"/>` +
      `<line x1="${n(x)}" y1="${n(kneeY)}" x2="${n(x)}" y2="${n(ankleY)}" stroke="${tone}" stroke-width="${weight * 1.4}" stroke-linecap="round"/>` +
      `<circle cx="${n(x)}" cy="${n(hipY)}" r="${n(24 * scale)}" fill="${BG}" stroke="${tone}" stroke-width="${weight}"/>` +
      `<circle cx="${n(x)}" cy="${n(kneeY)}" r="${n(32 * scale)}" fill="${BG}" stroke="${tone}" stroke-width="${weight}"/>` +
      `<circle cx="${n(x)}" cy="${n(kneeY)}" r="${n(13 * scale)}" fill="${tone}"/>` +
      // cuffs
      [0.35, 0.75]
        .map((t) => {
          const y = hipY + (kneeY - hipY) * t;
          return `<path d="M ${n(x - side * 46 * scale)} ${n(y)} Q ${n(x)} ${n(y + 14 * scale)} ${n(x + side * 10 * scale)} ${n(y)}" fill="none" stroke="${tone}" stroke-width="${weight * 0.8}"/>`;
        })
        .join("") +
      [0.35, 0.78]
        .map((t) => {
          const y = kneeY + (ankleY - kneeY) * t;
          return `<path d="M ${n(x - side * 42 * scale)} ${n(y)} Q ${n(x)} ${n(y + 12 * scale)} ${n(x + side * 10 * scale)} ${n(y)}" fill="none" stroke="${tone}" stroke-width="${weight * 0.8}"/>`;
        })
        .join("") +
      // foot plate
      `<line x1="${n(x - 20 * scale)}" y1="${n(ankleY)}" x2="${n(x + 78 * scale)}" y2="${n(ankleY)}" stroke="${tone}" stroke-width="${weight}" stroke-linecap="round"/>`;
  }
  // pelvis bridge and control unit
  out +=
    `<line x1="${n(cx - 62 * scale)}" y1="${n(hipY)}" x2="${n(cx + 62 * scale)}" y2="${n(hipY)}" stroke="${tone}" stroke-width="${weight * 1.2}"/>` +
    `<rect x="${n(cx - 44 * scale)}" y="${n(hipY - 96 * scale)}" width="${n(88 * scale)}" height="${n(76 * scale)}" fill="none" stroke="${tone}" stroke-width="${weight}"/>` +
    `<line x1="${n(cx - 24 * scale)}" y1="${n(hipY - 58 * scale)}" x2="${n(cx + 24 * scale)}" y2="${n(hipY - 58 * scale)}" stroke="${tone}" stroke-width="${weight * 0.7}"/>` +
    // stand
    `<line x1="${n(cx)}" y1="${n(groundY)}" x2="${n(cx)}" y2="${n(groundY + 30 * scale)}" stroke="${SOFT}" stroke-width="2"/>` +
    `<line x1="${n(cx - 90 * scale)}" y1="${n(groundY + 30 * scale)}" x2="${n(cx + 90 * scale)}" y2="${n(groundY + 30 * scale)}" stroke="${SOFT}" stroke-width="2.5"/>`;
  return out;
}

function deviceStudio(w: number, h: number) {
  const groundY = h * 0.86;
  return svg(w, h, ticks(w, h, 40) + deviceOnStand(w / 2, groundY, h / 1150, INK, 5));
}

/** Halftone field — a soft grey texture. */
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
  body += `<circle cx="${n(cx)}" cy="${n(cy)}" r="${n(Math.min(w, h) * 0.13)}" fill="none" stroke="${DARK}" stroke-width="3"/>`;
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
      `<line x1="${n(cx + Math.cos(a) * inner)}" y1="${n(cy + Math.sin(a) * inner)}"` +
      ` x2="${n(cx + Math.cos(a) * outer)}" y2="${n(cy + Math.sin(a) * outer)}" stroke="${SOFT}" stroke-width="2"/>`;
  }
  body += `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="${INK}" stroke-width="7"/>`;
  body += `<circle cx="${cx}" cy="${cy}" r="${R * 0.55}" fill="none" stroke="${DARK}" stroke-width="4"/>`;
  body += `<circle cx="${cx}" cy="${cy}" r="${R * 0.12}" fill="${DARK}"/>`;
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + r();
    body += `<circle cx="${n(cx + Math.cos(a) * R * 0.78)}" cy="${n(cy + Math.sin(a) * R * 0.78)}" r="7" fill="${MID}"/>`;
  }
  body += `<line x1="${n(cx - R * 1.9)}" y1="${cy}" x2="${n(cx + R * 1.9)}" y2="${cy}" stroke="${SOFT}" stroke-width="2" stroke-dasharray="10 10"/>`;
  body += `<line x1="${cx}" y1="${n(cy - R * 1.9)}" x2="${cx}" y2="${n(cy + R * 1.9)}" stroke="${SOFT}" stroke-width="2" stroke-dasharray="10 10"/>`;
  return svg(w, h, body);
}

/** Exploded layout: components spaced along an axis. */
function exploded(w: number, h: number) {
  const cy = h / 2;
  let body = ticks(w, h, 40);
  body += `<line x1="${n(w * 0.06)}" y1="${cy}" x2="${n(w * 0.94)}" y2="${cy}" stroke="${SOFT}" stroke-width="2" stroke-dasharray="14 10"/>`;
  const pieces = [0.14, 0.32, 0.5, 0.68, 0.86];
  pieces.forEach((p, i) => {
    const x = w * p;
    const size = h * (i === 2 ? 0.34 : 0.22);
    const tone = i === 2 ? INK : i % 2 ? DARK : MID;
    body += `<rect x="${n(x - size / 2)}" y="${n(cy - size / 2)}" width="${n(size)}" height="${n(size)}" fill="none" stroke="${tone}" stroke-width="${i === 2 ? 6 : 4}"/>`;
    body += `<circle cx="${n(x)}" cy="${cy}" r="${n(size * 0.18)}" fill="none" stroke="${tone}" stroke-width="3"/>`;
    body += `<line x1="${n(x)}" y1="${n(cy + size / 2)}" x2="${n(x)}" y2="${n(h * 0.88)}" stroke="${SOFT}" stroke-width="2"/>`;
    body += `<circle cx="${n(x)}" cy="${n(h * 0.88)}" r="5" fill="${SOFT}"/>`;
  });
  return svg(w, h, body);
}

/** Wireframe of the investigator console — structure only, no invented numbers. */
function console_(w: number, h: number, seed: string) {
  const r = rng(seed);
  let body = `<rect x="0" y="0" width="${w}" height="${n(h * 0.11)}" fill="${FAINT}"/>`;
  body += `<rect x="0" y="${n(h * 0.11)}" width="${n(w * 0.2)}" height="${n(h * 0.89)}" fill="${FAINT}"/>`;
  for (let i = 0; i < 6; i++)
    body += `<rect x="${n(w * 0.04)}" y="${n(h * (0.18 + i * 0.1))}" width="${n(w * 0.12)}" height="${n(h * 0.035)}" fill="${SOFT}"/>`;
  body += `<rect x="${n(w * 0.04)}" y="${n(h * 0.035)}" width="${n(w * 0.08)}" height="${n(h * 0.04)}" fill="${DARK}"/>`;

  // two traces: commanded and measured torque over a gait cycle
  const gx = w * 0.25;
  const gw = w * 0.7;
  const gy = h * 0.2;
  const gh = h * 0.34;
  body += `<rect x="${n(gx)}" y="${n(gy)}" width="${n(gw)}" height="${n(gh)}" fill="none" stroke="${SOFT}" stroke-width="2"/>`;
  for (const [amp, tone, width, shift] of [
    [1, DARK, 3, 0],
    [0.88, INK, 3.5, 0.18],
  ] as [number, string, number, number][]) {
    let d = "";
    for (let i = 0; i <= 60; i++) {
      const t = i / 60;
      const v = Math.sin(t * Math.PI * 2 + shift) * 0.5 + Math.sin(t * Math.PI * 4) * 0.22;
      const x = gx + gw * t;
      const y = gy + gh / 2 - v * gh * 0.42 * amp;
      d += `${i ? "L" : "M"} ${n(x)} ${n(y)} `;
    }
    body += `<path d="${d}" fill="none" stroke="${tone}" stroke-width="${width}"/>`;
  }
  // a bar row below
  const by = h * 0.64;
  const bars = 18;
  for (let i = 0; i < bars; i++) {
    const bh = h * (0.06 + r() * 0.2);
    body += `<rect x="${n(gx + (gw / bars) * (i + 0.22))}" y="${n(by + h * 0.26 - bh)}" width="${n((gw / bars) * 0.55)}" height="${n(bh)}" fill="${i === bars - 1 ? INK : MID}"/>`;
  }
  return svg(w, h, body);
}

/* ── which generator fills which slot ────────────────────────────────────── */
function artFor(id: ImageSlotId, w: number, h: number): string {
  if (id.startsWith("detail-") || id === "sync-port-detail") return detailSchematic(w, h, id);
  if (id === "exploded-view") return exploded(w, h);
  if (id === "lab-console") return console_(w, h, id);
  if (id === "device-standalone" || id === "page-hero-specifications") return deviceStudio(w, h);
  if (id === "lab-instrumentation" || id === "page-hero-research") return labScene(w, h, id, "rig");
  if (id === "incline-trial") return labScene(w, h, id, "incline");
  if (id === "loaded-trial") return labScene(w, h, id, "load");
  if (id === "sprint-trial" || id === "page-hero-performance") return labScene(w, h, id, "sprint");
  if (id === "lab-gait-trial" || id === "transparent-mode") return labScene(w, h, id, "gait");
  if (id === "footer-render" || id === "page-hero-about") return halftone(w, h, id);
  if (id === "hero-render") return motionStudy(w, h, id, 5);
  return motionStudy(w, h, id, 3); // faq-render, page-hero-system, page-hero-investors
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
