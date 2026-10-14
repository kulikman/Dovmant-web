/**
 * Headline markup: lines split by "\n"; {accent group}; ~light weight~.
 * e.g. "OUR {TEAM}" · "WHAT WE ~OFFER~"
 */
export type Seg = { text: string; accent?: boolean; light?: boolean };

export function parseRich(input: string): Seg[][] {
  return input.split("\n").map((line) => {
    const segs: Seg[] = [];
    const re = /\{([^}]+)\}|~([^~]+)~|([^{~]+)/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(line))) {
      if (m[1] !== undefined) segs.push({ text: m[1], accent: true });
      else if (m[2] !== undefined) segs.push({ text: m[2], light: true });
      else segs.push({ text: m[3] });
    }
    return segs;
  });
}
