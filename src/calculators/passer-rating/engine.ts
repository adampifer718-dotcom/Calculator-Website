import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import en, { type PasserRatingText } from "./text/en";

export type PasserRatingValues = { attempts: number; completions: number; yards: number; touchdowns: number; interceptions: number };

export type PassingLine = { att: number; cmp: number; yds: number; td: number; int: number };

/** Upper limit of each NFL component. */
export const COMPONENT_MAX = 2.375;

const clamp = (x: number) => Math.min(COMPONENT_MAX, Math.max(0, x));

/** The four NFL components before the 0–2.375 limit. */
export function rawComponents({ att, cmp, yds, td, int }: PassingLine) {
  return {
    a: (cmp / att - 0.3) * 5,
    b: (yds / att - 3) * 0.25,
    c: (td / att) * 20,
    d: COMPONENT_MAX - (int / att) * 25,
  };
}

/** NFL passer rating: the clamped components summed, ÷ 6 × 100. Maximum 158.3 (exactly 475/3). */
export function nflPasserRating(line: PassingLine): number {
  const r = rawComponents(line);
  return ((clamp(r.a) + clamp(r.b) + clamp(r.c) + clamp(r.d)) / 6) * 100;
}

/** NCAA passing efficiency (no limits on the parts). */
export function ncaaEfficiency({ att, cmp, yds, td, int }: PassingLine): number {
  return (8.4 * yds + 330 * td + 100 * cmp - 200 * int) / att;
}

const KEYS = ["a", "b", "c", "d"] as const;

export function makePasserRatingEngine(ctx: EngineContext<PasserRatingText>) {
  const t = ctx.text;
  const count = { min: 0, integer: true, max: 100000 } as const;
  return defineEngine<PasserRatingValues>({
    locale: ctx.locale,
    fields: [
      { id: "attempts", type: "number", label: t.attempts, defaultValue: 34, min: 1, integer: true, max: 100000 },
      { id: "completions", type: "number", label: t.completions, defaultValue: 23, ...count },
      { id: "yards", type: "number", label: t.yards, help: t.yardsHelp, defaultValue: 287, integer: true, min: -1e7, max: 1e7 },
      { id: "touchdowns", type: "number", label: t.touchdowns, defaultValue: 2, ...count },
      { id: "interceptions", type: "number", label: t.interceptions, defaultValue: 1, ...count },
    ],
    validate: ({ attempts, completions, touchdowns, interceptions }): FieldErrors => {
      const errors: FieldErrors = {};
      if (completions > attempts) errors.completions = t.errors.completions;
      else if (interceptions > attempts - completions) errors.interceptions = t.errors.interceptions;
      if (touchdowns > completions) errors.touchdowns = t.errors.touchdowns;
      return errors;
    },
    compute: ({ attempts, completions, yards, touchdowns, interceptions }) => {
      const line: PassingLine = { att: attempts, cmp: completions, yds: yards, td: touchdowns, int: interceptions };
      const raw = rawComponents(line);
      const rating = nflPasserRating(line);
      const notes: string[] = [];
      if (KEYS.some((k) => raw[k] !== clamp(raw[k]))) notes.push(t.notes.clamped);
      if (Math.abs(rating - 475 / 3) < 1e-9) notes.push(t.notes.perfect);
      notes.push(t.notes.scale);
      const n = (x: number) => ctx.fmt.number(x, 0);
      return {
        primary: {
          label: t.rating,
          value: { kind: "number", value: rating, decimals: 1 },
          caption: fill(t.caption, { cmp: n(completions), att: n(attempts), yds: n(yards), td: n(touchdowns), int: n(interceptions) }),
        },
        secondary: [
          { label: t.ncaa, value: { kind: "number", value: ncaaEfficiency(line), decimals: 1 } },
          { label: t.completionPct, value: { kind: "percent", value: (completions / attempts) * 100, decimals: 1 } },
          { label: t.yardsPerAttempt, value: { kind: "number", value: yards / attempts, decimals: 2 } },
          { label: t.tdPct, value: { kind: "percent", value: (touchdowns / attempts) * 100, decimals: 1 } },
          { label: t.intPct, value: { kind: "percent", value: (interceptions / attempts) * 100, decimals: 1 } },
        ],
        tables: [
          {
            caption: t.table.caption,
            columns: [t.table.component, t.table.raw, t.table.used],
            rows: KEYS.map((k) => ({
              label: t.components[k],
              highlight: raw[k] !== clamp(raw[k]),
              cells: [
                { kind: "number", value: raw[k], decimals: 4 },
                { kind: "number", value: clamp(raw[k]), decimals: 4 },
              ],
            })),
          },
        ],
        notes,
      };
    },
  });
}

export const passerRatingEngine = makePasserRatingEngine(englishContext(en));
