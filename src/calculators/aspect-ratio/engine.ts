import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultItem, type ResultTable } from "@/calculators/framework/types";
import en, { type AspectRatioText } from "./text/en";

export type AspectRatioValues = {
  mode: string;
  width: number | null;
  height: number | null;
  ratioWidth: number | null;
  ratioHeight: number | null;
  knownSide: string;
  newSize: number | null;
  diagonal: number | null;
  lengthUnit: string;
};

export const MODES = ["simplify", "resize", "screen"] as const;
export const MAX_DECIMALS = 6;
export const CM_PER_IN = 2.54;

/** Common aspect ratios as width and height parts, in the order shown in the table. */
export const COMMON_RATIOS = [
  { w: 1, h: 1 },
  { w: 5, h: 4 },
  { w: 4, h: 3 },
  { w: 3, h: 2 },
  { w: 16, h: 10 },
  { w: 16, h: 9 },
  { w: 21, h: 9 },
  { w: 32, h: 9 },
  { w: 9, h: 16 },
  { w: 2.39, h: 1 },
] as const;

export function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) [x, y] = [y, x % y];
  return x;
}

/** Number of decimal places needed to write `x` exactly (up to `max`), or null if it needs more. */
export function decimalPlaces(x: number, max = MAX_DECIMALS): number | null {
  for (let d = 0; d <= max; d++) {
    const scaled = x * 10 ** d;
    if (Math.abs(scaled - Math.round(scaled)) <= 1e-9 * Math.max(1, Math.abs(scaled))) return d;
  }
  return null;
}

export type Simplified = { ok: true; w: number; h: number; divisor: number; scale: number } | { ok: false; reason: "tooPrecise" | "tooLarge" };

/** Reduces width:height to lowest whole-number terms, scaling decimals to integers first. */
export function simplifyRatio(width: number, height: number): Simplified {
  const dw = decimalPlaces(width);
  const dh = decimalPlaces(height);
  if (dw === null || dh === null) return { ok: false, reason: "tooPrecise" };
  const scale = 10 ** Math.max(dw, dh);
  const a = Math.round(width * scale);
  const b = Math.round(height * scale);
  if (a > Number.MAX_SAFE_INTEGER || b > Number.MAX_SAFE_INTEGER) return { ok: false, reason: "tooLarge" };
  const g = gcd(a, b);
  return { ok: true, w: a / g, h: b / g, divisor: g / scale, scale };
}

/** The common ratio closest to `decimal` (by relative difference) and that difference in percent. */
export function nearestCommon(decimal: number): { index: number; differencePercent: number } {
  let best = 0;
  let bestDiff = Infinity;
  COMMON_RATIOS.forEach((r, i) => {
    const diff = Math.abs(decimal / (r.w / r.h) - 1);
    if (diff < bestDiff - 1e-12) {
      best = i;
      bestDiff = diff;
    }
  });
  const c = COMMON_RATIOS[best];
  return { index: best, differencePercent: (decimal / (c.w / c.h) - 1) * 100 };
}

/** Width and height of a screen with diagonal d and ratio W:H: d·W/√(W²+H²) and d·H/√(W²+H²). */
export function screenSize(diagonal: number, ratioWidth: number, ratioHeight: number): { width: number; height: number; area: number } {
  const hyp = Math.hypot(ratioWidth, ratioHeight);
  const width = (diagonal * ratioWidth) / hyp;
  const height = (diagonal * ratioHeight) / hyp;
  return { width, height, area: width * height };
}

export function makeAspectRatioEngine(ctx: EngineContext<AspectRatioText>) {
  const t = ctx.text;
  const simplifyMode = { field: "mode", oneOf: ["simplify"] } as const;
  const ratioModes = { field: "mode", oneOf: ["resize", "screen"] } as const;
  const resizeMode = { field: "mode", oneOf: ["resize"] } as const;
  const screenMode = { field: "mode", oneOf: ["screen"] } as const;
  const n = (v: number, d = 4) => ctx.fmt.number(v, d);
  const ratioText = (w: number, h: number) => fill(t.ratioText, { w: n(w), h: n(h) });
  const commonLabel = (i: number) => ratioText(COMMON_RATIOS[i].w, COMMON_RATIOS[i].h);
  const lowestTerms = (w: number, h: number) => {
    const s = simplifyRatio(w, h);
    return s.ok ? s : null;
  };

  return defineEngine<AspectRatioValues>({
    locale: ctx.locale,
    fields: [
      { id: "mode", type: "select", label: t.mode, options: MODES.map((value) => ({ value, label: t.modes[value] })), defaultValue: "simplify", display: "segmented" },
      { id: "width", type: "number", label: t.width, help: t.sizeHelp, defaultValue: 1920, min: 0, minExclusive: true, visibleWhen: simplifyMode },
      { id: "height", type: "number", label: t.height, defaultValue: 1080, min: 0, minExclusive: true, visibleWhen: simplifyMode },
      { id: "ratioWidth", type: "number", label: t.ratioWidth, help: t.ratioHelp, defaultValue: 16, min: 0, minExclusive: true, max: 1e6, visibleWhen: ratioModes },
      { id: "ratioHeight", type: "number", label: t.ratioHeight, defaultValue: 9, min: 0, minExclusive: true, max: 1e6, visibleWhen: ratioModes },
      {
        id: "knownSide",
        type: "select",
        label: t.knownSide,
        options: (["width", "height"] as const).map((value) => ({ value, label: t.knownSides[value] })),
        defaultValue: "width",
        display: "segmented",
        visibleWhen: resizeMode,
      },
      { id: "newSize", type: "number", label: t.newSize, help: t.newSizeHelp, defaultValue: 1280, min: 0, minExclusive: true, visibleWhen: resizeMode },
      { id: "diagonal", type: "number", label: t.diagonal, defaultValue: 27, min: 0, minExclusive: true, max: 1e6, visibleWhen: screenMode },
      {
        id: "lengthUnit",
        type: "select",
        label: t.lengthUnit,
        options: (["in", "cm"] as const).map((value) => ({ value, label: t.lengthUnits[value] })),
        defaultValue: "in",
        visibleWhen: screenMode,
      },
    ],
    validate: ({ mode, width, height }): FieldErrors => {
      if (mode !== "simplify" || width === null || height === null) return {};
      const s = simplifyRatio(width, height);
      if (s.ok) return {};
      return { width: s.reason === "tooPrecise" ? t.errors.tooPrecise : t.errors.tooLarge };
    },
    compute: ({ mode, width, height, ratioWidth, ratioHeight, knownSide, newSize, diagonal, lengthUnit }) => {
      if (mode === "simplify") {
        const w = width ?? 1;
        const h = height ?? 1;
        const s = simplifyRatio(w, h);
        const rw = s.ok ? s.w : w;
        const rh = s.ok ? s.h : h;
        const decimal = w / h;
        const near = nearestCommon(decimal);
        const ratio = ratioText(rw, rh);
        const secondary: ResultItem[] = [
          { label: t.decimalRatio, value: { kind: "number", value: decimal, decimals: 4, suffix: t.decimalSuffix } },
          { label: t.nearest, value: { kind: "text", text: commonLabel(near.index) } },
          { label: t.difference, value: { kind: "percent", value: near.differencePercent, decimals: 2, signed: true } },
          { label: t.orientation, value: { kind: "text", text: t.orientations[w > h ? "landscape" : w < h ? "portrait" : "square"] } },
        ];
        if (Number.isInteger(w) && Number.isInteger(h)) secondary.push({ label: t.pixels, value: { kind: "number", value: w * h, decimals: 0 } });
        const table: ResultTable = {
          caption: t.table.caption,
          columns: [t.table.ratio, t.table.decimal, t.table.difference],
          rows: COMMON_RATIOS.map((r, i) => ({
            label: commonLabel(i),
            cells: [
              { kind: "number", value: r.w / r.h, decimals: 4 },
              { kind: "percent", value: (decimal / (r.w / r.h) - 1) * 100, decimals: 2, signed: true },
            ],
            highlight: i === near.index,
          })),
        };
        const marketing = Math.abs(decimal / (21 / 9) - 1) < 0.03;
        return {
          primary: {
            label: t.primaryRatio,
            value: { kind: "text", text: ratio },
            caption: fill(t.captionSimplify, { w: n(w), h: n(h), ratio, gcd: n(s.ok ? s.divisor : 1, 6) }),
          },
          secondary,
          tables: [table],
          notes: [marketing ? t.notes.marketing : "", t.notes.difference].filter(Boolean),
        };
      }

      const rw = ratioWidth ?? 16;
      const rh = ratioHeight ?? 9;
      const lowest = lowestTerms(rw, rh);
      const ratio = lowest ? ratioText(lowest.w, lowest.h) : ratioText(rw, rh);
      const marketing = Math.abs(rw / rh - 21 / 9) < 1e-9;

      if (mode === "resize") {
        const size = newSize ?? 1;
        const byWidth = knownSide === "width";
        const exactW = byWidth ? size : (size * rw) / rh;
        const exactH = byWidth ? (size * rh) / rw : size;
        const roundW = Math.max(1, Math.round(exactW));
        const roundH = Math.max(1, Math.round(exactH));
        const exact = Math.abs(exactW - roundW) < 1e-9 && Math.abs(exactH - roundH) < 1e-9;
        const secondary: ResultItem[] = [
          { label: t.exactWidth, value: { kind: "number", value: exactW, decimals: 4 } },
          { label: t.exactHeight, value: { kind: "number", value: exactH, decimals: 4 } },
          { label: t.roundedWidth, value: { kind: "number", value: roundW, decimals: 0 } },
          { label: t.roundedHeight, value: { kind: "number", value: roundH, decimals: 0 } },
          { label: t.inputRatio, value: { kind: "text", text: ratio } },
          { label: t.decimalRatio, value: { kind: "number", value: rw / rh, decimals: 4, suffix: t.decimalSuffix } },
          { label: t.roundedRatio, value: { kind: "number", value: roundW / roundH, decimals: 4, suffix: t.decimalSuffix } },
        ];
        const roundingNote = exact
          ? ""
          : lowest && lowest.scale === 1
            ? fill(t.notes.rounding, { w: n(lowest.w, 0), h: n(lowest.h, 0) })
            : t.notes.roundingSimple;
        return {
          primary: {
            label: t.primaryResize,
            value: { kind: "text", text: fill(t.sizeText, { w: n(roundW, 0), h: n(roundH, 0) }) },
            caption: fill(t.captionResize, { ratio, side: t.sides[byWidth ? "width" : "height"], size: n(size) }),
          },
          secondary,
          notes: [roundingNote, marketing ? t.notes.marketing : ""].filter(Boolean),
        };
      }

      const d = diagonal ?? 1;
      const unit = lengthUnit === "cm" ? "cm" : "in";
      const other = unit === "in" ? "cm" : "in";
      const factor = unit === "in" ? CM_PER_IN : 1 / CM_PER_IN;
      const size = screenSize(d, rw, rh);
      return {
        primary: {
          label: t.primaryScreen,
          value: { kind: "text", text: fill(t.sizeUnitText, { w: n(size.width, 2), h: n(size.height, 2), unit }) },
          caption: fill(t.captionScreen, { diagonal: n(d), unit, ratio }),
        },
        secondary: [
          { label: t.screenWidth, value: { kind: "number", value: size.width, decimals: 2, suffix: unit } },
          { label: t.screenHeight, value: { kind: "number", value: size.height, decimals: 2, suffix: unit } },
          { label: t.screenArea, value: { kind: "number", value: size.area, decimals: 2, suffix: `${unit}²` } },
          { label: fill(t.otherWidth, { unit: other }), value: { kind: "number", value: size.width * factor, decimals: 2, suffix: other } },
          { label: fill(t.otherHeight, { unit: other }), value: { kind: "number", value: size.height * factor, decimals: 2, suffix: other } },
          { label: fill(t.otherArea, { unit: `${other}²` }), value: { kind: "number", value: size.area * factor * factor, decimals: 2, suffix: `${other}²` } },
          { label: t.inputRatio, value: { kind: "text", text: ratio } },
        ],
        notes: [t.notes.diagonal, marketing ? t.notes.marketing : ""].filter(Boolean),
      };
    },
  });
}

export const aspectRatioEngine = makeAspectRatioEngine(englishContext(en));
