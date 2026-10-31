import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type ResultItem } from "@/calculators/framework/types";
import { superscript } from "@/lib/math/numbers";
import en, { type HemocytometerText } from "./text/en";

/** 1 mL ÷ the 0.1 µL (10⁻⁴ mL) volume over one large square of an improved Neubauer chamber. */
export const SQUARE_FACTOR = 1e4;
/** Commonly recommended average count per large square. */
export const RECOMMENDED_PER_SQUARE = { min: 20, max: 50 } as const;

/** Cells per mL = cells counted ÷ squares counted × dilution factor × 10⁴. */
export function cellsPerMl(cells: number, squares: number, dilution = 1): number {
  return (cells / squares) * dilution * SQUARE_FACTOR;
}

export type HemocytometerValues = {
  live: number | null;
  dead: number | null;
  squares: number | null;
  dilution: number | null;
  volume: number | null;
  target: number | null;
};

export function makeHemocytometerEngine(ctx: EngineContext<HemocytometerText>) {
  const t = ctx.text;
  /** "1.235 × 10⁶" for 10,000 and above, otherwise a plain number. */
  const sci = (value: number) => {
    if (Math.abs(value) < 1e4) return ctx.fmt.number(value, 2);
    const [mantissa, exponent] = value.toExponential(3).split("e");
    return `${ctx.fmt.number(Number(mantissa), 3)} × 10${superscript(Number(exponent))}`;
  };
  const count = { min: 0, max: 1e7, integer: true } as const;
  return defineEngine<HemocytometerValues>({
    locale: ctx.locale,
    fields: [
      { id: "live", type: "number", label: t.live, help: t.liveHelp, defaultValue: 182, ...count },
      { id: "dead", type: "number", label: t.dead, help: t.deadHelp, defaultValue: 14, optional: true, ...count },
      { id: "squares", type: "number", label: t.squares, help: t.squaresHelp, defaultValue: 4, min: 1, max: 25, integer: true },
      { id: "dilution", type: "number", label: t.dilution, help: t.dilutionHelp, defaultValue: 2, min: 1, max: 1e6 },
      { id: "volume", type: "number", label: t.volume, help: t.volumeHelp, defaultValue: 10, optional: true, min: 0, minExclusive: true, max: 1e6, suffix: "mL" },
      { id: "target", type: "number", label: t.target, help: t.targetHelp, defaultValue: null, optional: true, min: 0, minExclusive: true, max: 1e12 },
    ],
    validate: (v) => (v.target !== null && v.live === 0 ? { target: t.errors.noLiveForTarget } : {}),
    compute: (v) => {
      const live = v.live ?? 0;
      const squares = v.squares ?? 1;
      const dilution = v.dilution ?? 1;
      const livePerMl = cellsPerMl(live, squares, dilution);
      const average = live / squares;
      const secondary: ResultItem[] = [{ label: t.averagePerSquare, value: { kind: "number", value: average, decimals: 2 } }];
      const notes: string[] = [];
      const counted = live + (v.dead ?? 0);
      if (v.dead !== null) {
        secondary.push({ label: t.totalPerMl, value: { kind: "text", text: fill(t.cellsPerMl, { value: sci(cellsPerMl(counted, squares, dilution)) }) } });
        if (counted > 0) secondary.push({ label: t.viability, value: { kind: "percent", value: (live / counted) * 100, decimals: 1 } });
      }
      let totalLive: number | null = null;
      if (v.volume !== null) {
        totalLive = livePerMl * v.volume;
        secondary.push({ label: fill(t.totalLive, { volume: ctx.fmt.number(v.volume, 3) }), value: { kind: "text", text: `${sci(totalLive)} ${t.cellsUnit}` } });
      }
      if (v.target !== null && livePerMl > 0) {
        const ml = v.target / livePerMl;
        secondary.push({ label: fill(t.volumeNeeded, { target: sci(v.target) }), value: { kind: "number", value: ml, decimals: 4, suffix: "mL" } });
        secondary.push({ label: t.volumeNeededUl, value: { kind: "number", value: ml * 1000, decimals: 2, suffix: "µL" } });
        if (totalLive !== null && v.target > totalLive) notes.push(t.notes.exceedsSample);
      }
      if (live === 0) notes.push(t.notes.noCells);
      else if (average < RECOMMENDED_PER_SQUARE.min || average > RECOMMENDED_PER_SQUARE.max) notes.push(fill(t.notes.density, { average: ctx.fmt.number(average, 1) }));
      if (counted > 0) notes.push(fill(t.notes.poisson, { count: ctx.fmt.number(counted, 0), cv: ctx.fmt.number(100 / Math.sqrt(counted), 1) }));
      notes.push(t.notes.general);
      return {
        primary: { label: t.result, value: { kind: "text", text: fill(t.cellsPerMl, { value: sci(livePerMl) }) }, caption: t.caption },
        secondary,
        notes,
      };
    },
  });
}

export const hemocytometerEngine = makeHemocytometerEngine(englishContext(en));
