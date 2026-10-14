import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import en, { type DoublingTimeText } from "./text/en";

export type DoublingValues = { initial: number; final: number; time: number; unit: string };

const positive = { min: 0, minExclusive: true } as const;
const UNITS = ["minutes", "hours", "days"] as const;

export function makeDoublingTimeEngine(ctx: EngineContext<DoublingTimeText>) {
  const t = ctx.text;
  return defineEngine<DoublingValues>({
    locale: ctx.locale,
    fields: [
      { id: "initial", type: "number", label: t.initial, defaultValue: 1000, ...positive },
      { id: "final", type: "number", label: t.final, defaultValue: 64000, ...positive },
      { id: "time", type: "number", label: t.time, defaultValue: 6, ...positive },
      { id: "unit", type: "select", label: t.unit, options: UNITS.map((value) => ({ value, label: t.units[value] })), defaultValue: "hours" },
    ],
    validate: ({ initial, final }): FieldErrors => (final <= initial ? { final: t.notGrowth } : {}),
    compute: ({ initial, final, time, unit }) => {
      const key = (UNITS as readonly string[]).includes(unit) ? (unit as (typeof UNITS)[number]) : "hours";
      const ratio = final / initial;
      const generations = Math.log2(ratio);
      return {
        primary: { label: t.doubling, value: { kind: "number", value: time / generations, decimals: 4, suffix: t.unitWords[key] } },
        secondary: [
          { label: t.generations, value: { kind: "number", value: generations, decimals: 4 } },
          { label: t.rate, value: { kind: "number", value: Math.log(ratio) / time, decimals: 6, suffix: t.perUnit[key] } },
          { label: t.fold, value: { kind: "number", value: ratio, decimals: 4 } },
        ],
        notes: [t.note],
      };
    },
  });
}

export const doublingTimeEngine = makeDoublingTimeEngine(englishContext(en));
