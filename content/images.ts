/**
 * Image slot registry. Drop real files at /public/images/<slot-id>.(webp|jpg)
 * and set `src` — it always wins over the generated stand-in in `art`.
 *
 * Framing rule for the shoot: no clinical dressing. No gowns, couches, parallel
 * bars, hospital corridors or anyone being helped to walk. We photograph a
 * laboratory — markers on the body, force plates, capture cameras, monitors with
 * traces, cables, hands at a laptop.
 */
export type ImageSlotDef = {
  /** Real photography or render. Always wins over `art`. */
  src: string | null;
  /** Generated stand-in (scripts/gen-art.ts) — replace before launch. */
  art: string | null;
  alt: string;
  aspect: string; // "w/h"
  description: string;
  page: string;
  framing: string;
  /** 1 = shoot first; needed for the pages that go live first. */
  priority: 1 | 2 | 3;
  /** Near-black frame: the accent block switches off `multiply`, which would vanish on it. */
  tone?: "dark";
};

const s = (
  page: string,
  aspect: string,
  alt: string,
  description: string,
  framing: string,
  priority: 1 | 2 | 3 = 2,
): ImageSlotDef => ({ src: null, art: null, alt, aspect, description, page, framing, priority });

export const images = {
  "hero-render": s(
    "/",
    "3/4",
    "The Dovmant exoskeleton worn on the legs, three-quarter side view",
    "Device worn on the legs, 3/4 side view, studio, B&W, vertical frame. Also the video poster",
    "Full legs from hip to foot, studio backdrop, lower half kept free of detail — the accent block covers it",
    1,
  ),
  "device-standalone": s(
    "/specifications",
    "4/5",
    "The Dovmant exoskeleton on a stand",
    "Device without a person, on a stand. The specification frame",
    "Whole device, neutral backdrop, even light, no props",
    1,
  ),
  "detail-hip-actuator": s(
    "/system",
    "1/1",
    "Close-up of the hip actuator",
    "Macro of the hip actuator, mechanism visible",
    "Macro, 3/4 angle, shallow depth of field",
    1,
  ),
  "detail-sensors": s(
    "/ · /system",
    "1/1",
    "Close-up of a sensor on its mount",
    "Macro of a sensor on its mount",
    "Macro, sensor module on the thigh or shank frame",
    1,
  ),
  "detail-fit-straps": s(
    "/system",
    "1/1",
    "Close-up of the fit adjustment",
    "Macro of the fit adjustment with the size scale visible",
    "Macro, hand at the strap, scale markings legible",
    1,
  ),
  "sync-port-detail": s(
    "/system",
    "1/1",
    "Close-up of the synchronisation port",
    "Macro of the sync connector with a cable attached",
    "Macro, connector and cable, neutral background",
    2,
  ),
  "exploded-view": s(
    "/system",
    "16/9",
    "Exploded technical render of the device",
    "Technical render, exploded components, part labels",
    "Orthographic feel, components spaced along the leg axis",
    2,
  ),
  "lab-gait-trial": s(
    "/",
    "3/2",
    "Participant walking in the device across a force-plate runway",
    "Participant in the device walking a runway with force plates, markers on the body, capture cameras behind",
    "Medium-wide, side on, runway and cameras legible",
    2,
  ),
  "lab-instrumentation": s(
    "/research",
    "3/2",
    "The device beside laboratory instrumentation",
    "Device next to the lab rig: cameras, plates, synchronisation cables",
    "Wide, equipment in frame, no people needed",
    2,
  ),
  "lab-console": s(
    "/performance",
    "16/9",
    "Screen showing joint torque and angle traces (synthetic data)",
    "Telemetry screen — joint moment and angle traces. Data is synthetic; say so in the alt text",
    "Flat screen capture or device mock, no participant data",
    2,
  ),
  "transparent-mode": s(
    "/",
    "3/2",
    "Participant walking in the device with assistance off",
    "Participant walking in the device without assistance — the baseline condition frame",
    "Side on, full body, lab floor",
    2,
  ),
  "incline-trial": s(
    "/",
    "3/2",
    "Incline work in the device",
    "Work on an inclined treadmill or steps, laboratory setting",
    "Side on, full body, incline legible",
    2,
  ),
  "loaded-trial": s(
    "/",
    "3/2",
    "Carriage task in the device with added external load",
    "Carriage task with added external load",
    "Side on, full body, load visible",
    3,
  ),
  "sprint-trial": s(
    "/ · /performance",
    "3/2",
    "Athlete in the device during high-rate movement",
    "Athlete in the device, high-rate movement, gym or track",
    "Dynamic pose, side or 3/4, full body",
    2,
  ),
  "page-hero-system": s(
    "/system",
    "3/4",
    "The system",
    "Hero: device detail, B&W",
    "Vertical frame, device centred",
    2,
  ),
  "page-hero-specifications": s(
    "/specifications",
    "3/4",
    "Specification sheet",
    "Hero: device on a stand, B&W",
    "Vertical frame, whole device",
    2,
  ),
  "page-hero-research": s(
    "/research",
    "3/4",
    "Research partnerships",
    "Hero: laboratory instrumentation, B&W",
    "Vertical frame, capture rig",
    2,
  ),
  "page-hero-performance": s(
    "/performance",
    "3/4",
    "Performance research",
    "Hero: athlete in the device, B&W",
    "Vertical frame, dynamic pose",
    2,
  ),
  "page-hero-about": s(
    "/about",
    "3/4",
    "About Dovmant",
    "Hero: workshop or bench, B&W",
    "Vertical frame",
    3,
  ),
  "page-hero-investors": s(
    "/investors",
    "3/4",
    "Investor relations",
    "Hero: device studio render, B&W",
    "Vertical frame",
    3,
  ),
  "faq-render": s(
    "/",
    "3/4",
    "The device",
    "Render of the device, B&W, lower part free for the accent block",
    "Vertical frame, device in the upper two thirds",
    2,
  ),
  "footer-render": s(
    "footer",
    "1/1",
    "The device",
    "Compact render for the footer accent block, B&W",
    "Tight crop, hip actuator area",
    3,
  ),
} satisfies Record<string, ImageSlotDef>;

export type ImageSlotId = keyof typeof images;

// Real renders delivered so far. Everything else still falls back to the artwork.
const delivered = [
  "hero-render",
  "device-standalone",
  "page-hero-system",
  "page-hero-specifications",
  "page-hero-performance",
  "faq-render",
  "footer-render",
  "detail-hip-actuator",
  "detail-fit-straps",
] as const;

for (const [id, def] of Object.entries(images)) {
  def.art = `/images/art/${id}.svg`;
  if ((delivered as readonly string[]).includes(id)) {
    def.src = `/images/${id}.webp`;
    // The renders are shot on near-black; see `tone` above.
    def.tone = "dark";
  }
}

/** What the slot actually renders: real file first, generated stand-in second. */
export const slotFile = (def: ImageSlotDef) => def.src ?? def.art;
