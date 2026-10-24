import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type NumberField, type ResultTable, type ResultValue, type TextField } from "@/calculators/framework/types";
import en, { type BakersPercentageText } from "./text/en";

export type BakersPercentageValues = {
  mode: string;
  unit: string;
  flour: number | null;
  dough: number | null;
  water: number;
  salt: number;
  yeast: number;
} & Record<string, number | string | null>;

export const EXTRA_LINES = [1, 2, 3] as const;

export interface BakerLine {
  name: string;
  percent: number;
}

/** Sum of all baker's percentages, flour (100%) included. */
export function totalPercent(lines: readonly BakerLine[]): number {
  return 100 + lines.reduce((sum, line) => sum + line.percent, 0);
}

/** Flour needed for a target dough weight: target ÷ (Σ% ÷ 100). */
export function flourForDough(dough: number, lines: readonly BakerLine[]): number {
  return dough / (totalPercent(lines) / 100);
}

export function makeBakersPercentageEngine(ctx: EngineContext<BakersPercentageText>) {
  const t = ctx.text;
  const opts = <K extends string>(labels: Record<K, string>) => (Object.keys(labels) as K[]).map((value) => ({ value, label: labels[value] }));
  const pct = (id: "water" | "salt" | "yeast", defaultValue: number, max: number): NumberField => ({ id, type: "number", label: t[id], help: t.pctHelp, defaultValue, min: 0, max, suffix: "%" });
  const extras = EXTRA_LINES.flatMap((n): (TextField | NumberField)[] => [
    { id: `extra${n}Name`, type: "text", label: fill(t.extraName, { n }), placeholder: t.extraNamePlaceholder, defaultValue: "", optional: true },
    { id: `extra${n}Pct`, type: "number", label: fill(t.extraPct, { n }), defaultValue: null, optional: true, min: 0, max: 500, suffix: "%" },
  ]);

  return defineEngine<BakersPercentageValues>({
    locale: ctx.locale,
    fields: [
      { id: "mode", type: "select", label: t.mode, options: opts(t.modes), defaultValue: "fromFlour", display: "segmented" },
      { id: "unit", type: "select", label: t.unit, options: opts(t.units), defaultValue: "g", display: "segmented" },
      { id: "flour", type: "number", label: t.flour, help: t.flourHelp, defaultValue: 1000, min: 0, minExclusive: true, max: 1e7, visibleWhen: { field: "mode", oneOf: ["fromFlour"] } },
      { id: "dough", type: "number", label: t.dough, help: t.doughHelp, defaultValue: 1500, min: 0, minExclusive: true, max: 1e7, visibleWhen: { field: "mode", oneOf: ["fromDough"] } },
      pct("water", 70, 500),
      pct("salt", 2, 100),
      pct("yeast", 1, 100),
      ...extras,
    ] as never,
    compute: (values) => {
      const unit = values.unit === "oz" ? "oz" : "g";
      const decimals = unit === "g" ? 1 : 2;
      const lines: BakerLine[] = [
        { name: t.water, percent: values.water },
        { name: t.salt, percent: values.salt },
        { name: t.yeast, percent: values.yeast },
      ];
      for (const n of EXTRA_LINES) {
        const percent = values[`extra${n}Pct`];
        if (typeof percent !== "number") continue;
        const name = String(values[`extra${n}Name`] ?? "").trim();
        lines.push({ name: name || fill(t.extraDefault, { n }), percent });
      }
      const total = totalPercent(lines);
      const fromDough = values.mode === "fromDough";
      const flour = fromDough ? flourForDough(Number(values.dough ?? 0), lines) : Number(values.flour ?? 0);
      const dough = (flour * total) / 100;
      const weight = (w: number): ResultValue => ({ kind: "number", value: w, decimals, suffix: unit });
      const percent = (p: number): ResultValue => ({ kind: "percent", value: p, decimals: 2 });

      const table: ResultTable = {
        caption: t.tableCaption,
        columns: [t.colIngredient, t.colPercent, t.colWeight],
        rows: [
          { label: t.flourRow, cells: [percent(100), weight(flour)] },
          ...lines.map((line) => ({ label: line.name, cells: [percent(line.percent), weight((flour * line.percent) / 100)] })),
          { label: t.totalRow, cells: [percent(total), weight(dough)], highlight: true },
        ],
      };
      const fmtWeight = (w: number) => `${ctx.fmt.number(w, decimals)} ${unit}`;
      return {
        primary: fromDough
          ? { label: t.flourNeeded, value: weight(flour), caption: fill(t.captionDough, { dough: fmtWeight(dough), total: ctx.fmt.percent(total, 2) }) }
          : { label: t.doughWeight, value: weight(dough), caption: fill(t.captionFlour, { flour: fmtWeight(flour), total: ctx.fmt.percent(total, 2) }) },
        secondary: [
          fromDough ? { label: t.doughWeight, value: weight(dough) } : { label: t.flourOut, value: weight(flour) },
          { label: t.hydration, value: percent(values.water) },
          { label: t.waterOut, value: weight((flour * values.water) / 100) },
          { label: t.totalPct, value: percent(total) },
        ],
        tables: [table],
        notes: [t.notes.hydration, t.notes.rounding],
      };
    },
  });
}

export const bakersPercentageEngine = makeBakersPercentageEngine(englishContext(en));
