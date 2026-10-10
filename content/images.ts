/**
 * Image slot registry. Drop real files at /public/images/<slot-id>.(webp|jpg)
 * then set `src` to the path. `src: null` renders a labelled placeholder.
 * NEVER use stock/AI images of the exoskeleton — the real device only.
 */
export type ImageSlotDef = {
  src: string | null
  alt: string
  aspect: string // "w/h"
  description: string
  page: string
  framing: string
}

const s = (
  page: string,
  aspect: string,
  alt: string,
  description: string,
  framing: string,
): ImageSlotDef => ({ src: null, alt, aspect, description, page, framing })

export const images = {
  'hero-render': s(
    '/',
    '4/5',
    'Dovmant exoskeleton worn on the legs, three-quarter side view',
    'Exoskeleton worn on the legs, 3/4 side view, studio, B&W, tall frame',
    'Full legs from hip to foot, studio backdrop, lower half free of detail (overlay covers it)',
  ),
  'wear-rehab-therapist': s(
    '/ · /rehabilitation',
    '4/5',
    'Patient walking in the exoskeleton assisted by a therapist',
    'Patient walking in the exoskeleton, assisted by a therapist, clinic setting',
    'Medium-wide, therapist beside patient, parallel bars or corridor, eye level',
  ),
  'wear-rehab-stairs': s(
    '/ · /rehabilitation',
    '4/5',
    'Patient climbing stairs wearing the device',
    'Patient climbing stairs wearing the device',
    'Side view, full body, three steps visible',
  ),
  'wear-sport-training': s(
    '/ · /sports',
    '4/5',
    'Athlete training while wearing the device',
    'Athlete training (lunges / sprint start) wearing the device',
    'Dynamic pose, side or 3/4 view, full body, gym or track',
  ),
  'wear-sport-return': s(
    '/ · /sports',
    '4/5',
    'Athlete in return-to-play testing with a sports physician',
    'Athlete in return-to-play testing with a sports physician',
    'Medium shot, physician with tablet, athlete mid-test',
  ),
  'wear-everyday-walk': s(
    '/',
    '4/5',
    'Person walking outdoors wearing the device',
    'Walking outdoors, full body, side view',
    'Full body, side view, urban or park path',
  ),
  'detail-knee-actuator': s(
    '/technology',
    '1/1',
    'Close-up of the knee actuator',
    'Close-up product detail: knee actuator',
    'Macro, 3/4 angle, shallow depth of field',
  ),
  'detail-sensors': s(
    '/technology',
    '1/1',
    'Close-up of the sensors',
    'Close-up product detail: sensors',
    'Macro, sensor module on the thigh/shank frame',
  ),
  'detail-fit-straps': s(
    '/technology',
    '1/1',
    'Close-up of the fit straps',
    'Close-up product detail: fit straps and adjustment',
    'Macro, hand adjusting strap',
  ),
  'exploded-view': s(
    '/technology',
    '16/10',
    'Exploded technical render of the exoskeleton components',
    'Technical render, exploded components, neutral background',
    'Orthographic-feel, components spaced along the leg axis',
  ),
  'app-dashboard': s(
    '/technology · /sports',
    '16/10',
    'Clinician and coach dashboard screen',
    'Clinician/coach dashboard screen',
    'Flat screen capture or device mock, no real patient data',
  ),
  'page-hero-technology': s(
    '/technology',
    '4/5',
    'Exoskeleton technology',
    'Hero: exoskeleton detail, B&W, lower third free for overlay',
    'Tall frame, product centered',
  ),
  'page-hero-rehabilitation': s(
    '/rehabilitation',
    '4/5',
    'Rehabilitation with the exoskeleton',
    'Hero: rehabilitation scene, B&W',
    'Tall frame, clinic setting',
  ),
  'page-hero-sports': s(
    '/sports',
    '4/5',
    'Sports performance with the exoskeleton',
    'Hero: athlete with the device, B&W',
    'Tall frame, dynamic pose',
  ),
  'page-hero-research': s(
    '/research',
    '4/5',
    'Research',
    'Hero: lab or motion-capture setting, B&W',
    'Tall frame',
  ),
  'page-hero-about': s(
    '/about',
    '4/5',
    'About Dovmant',
    'Hero: team at work or workshop, B&W',
    'Tall frame',
  ),
  'page-hero-investors': s(
    '/investors',
    '4/5',
    'Investors',
    'Hero: product studio render, B&W',
    'Tall frame',
  ),
  'faq-render': s(
    '/',
    '4/5',
    'Exoskeleton render',
    'Render of the exoskeleton, B&W, lower part free for overlay',
    'Tall frame, product upper two thirds',
  ),
  'footer-render': s(
    'footer',
    '4/5',
    'Exoskeleton render',
    'Compact render for the footer accent block, B&W',
    'Tight crop, knee area',
  ),
  'team-1': s(
    '/about',
    '4/5',
    'Team portrait',
    'Portrait, B&W, team member 1',
    'Head and shoulders, neutral backdrop',
  ),
  'team-2': s(
    '/about',
    '3/4',
    'Team portrait',
    'Portrait, B&W, team member 2',
    'Head to waist',
  ),
  'team-3': s(
    '/about',
    '4/5',
    'Team portrait',
    'Portrait, B&W, team member 3',
    'Head and shoulders',
  ),
  'team-4': s(
    '/about',
    '1/1',
    'Team portrait',
    'Portrait, B&W, team member 4',
    'Head and shoulders',
  ),
  'team-5': s(
    '/about',
    '3/4',
    'Team portrait',
    'Portrait, B&W, team member 5',
    'Head to waist',
  ),
  'team-6': s(
    '/about',
    '4/5',
    'Team portrait',
    'Portrait, B&W, team member 6',
    'Head and shoulders',
  ),
  'testimonial-1': s(
    '/',
    '4/5',
    'Testimonial portrait',
    'Portrait, B&W, testimonial author 1',
    'Head and shoulders',
  ),
  'testimonial-2': s(
    '/',
    '4/5',
    'Testimonial portrait',
    'Portrait, B&W, testimonial author 2',
    'Head and shoulders',
  ),
  'testimonial-3': s(
    '/',
    '4/5',
    'Testimonial portrait',
    'Portrait, B&W, testimonial author 3',
    'Head and shoulders',
  ),
  'partner-logo-1': s(
    '/ · /research',
    '3/1',
    'Partner logo',
    'Partner logo 1 (mono, SVG preferred)',
    'Transparent background, single-color',
  ),
  'partner-logo-2': s(
    '/ · /research',
    '3/1',
    'Partner logo',
    'Partner logo 2 (mono, SVG preferred)',
    'Transparent background, single-color',
  ),
  'partner-logo-3': s(
    '/ · /research',
    '3/1',
    'Partner logo',
    'Partner logo 3 (mono, SVG preferred)',
    'Transparent background, single-color',
  ),
  'partner-logo-4': s(
    '/ · /research',
    '3/1',
    'Partner logo',
    'Partner logo 4 (mono, SVG preferred)',
    'Transparent background, single-color',
  ),
} satisfies Record<string, ImageSlotDef>

export type ImageSlotId = keyof typeof images
