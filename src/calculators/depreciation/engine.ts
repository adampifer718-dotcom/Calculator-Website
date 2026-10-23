import { englishContext, fill, plural, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultItem } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import en, { type DepreciationText } from "./text/en";

export const METHODS = ["straightLine", "declining200", "declining150", "sumOfYears"] as const;
export type Method = (typeof METHODS)[number];

export type DepreciationValues = { currency: string; cost: number; salvage: number; life: number; method: string };

export interface ScheduleRow {
  year: number;
  depreciation: number;
  accumulated: number;
  bookValue: number;
}

/** Declining-balance factor: 2 for double declining, 1.5 for 150%. */
export function decliningFactor(method: string): number | null {
  if (method === "declining200") return 2;
  if (method === "declining150") return 1.5;
  return null;
}

/**
 * Yearly depreciation with the full-year convention.
 * - straight-line: (cost − salvage) ÷ life each year;
 * - declining balance: book value × factor ÷ life, never below salvage, with the remainder in the final year;
 * - sum-of-the-years'-digits: (cost − salvage) × (life − k + 1) ÷ (life(life + 1)/2).
 */
export function depreciationSchedule(cost: number, salvage: number, life: number, method: string): ScheduleRow[] {
  const base = cost - salvage;
  const factor = decliningFactor(method);
  const digits = (life * (life + 1)) / 2;
  const rows: ScheduleRow[] = [];
  let book = cost;
  let accumulated = 0;
  for (let year = 1; year <= life; year++) {
    let dep: number;
    if (year === life) {
      dep = book - salvage;
    } else if (factor !== null) {
      dep = Math.min(book * (factor / life), book - salvage);
    } else if (method === "sumOfYears") {
      dep = (base * (life - year + 1)) / digits;
    } else {
      dep = base / life;
    }
    dep = Math.max(0, dep);
    accumulated += dep;
    book -= dep;
    if (year === life) {
      // Pin the end values exactly, removing floating-point drift.
      accumulated = base;
      book = salvage;
    }
    rows.push({ year, depreciation: dep, accumulated, bookValue: book });
  }
  return rows;
}

const methodOf = (value: string): Method => ((METHODS as readonly string[]).includes(value) ? (value as Method) : "straightLine");

export function makeDepreciationEngine(ctx: EngineContext<DepreciationText>) {
  const t = ctx.text;
  return defineEngine<DepreciationValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      currencyField(ctx),
      { id: "cost", type: "number", label: t.cost, help: t.costHelp, defaultValue: 30000, min: 0, minExclusive: true, prefix: "currency" },
      { id: "salvage", type: "number", label: t.salvage, help: t.salvageHelp, defaultValue: 3000, min: 0, prefix: "currency" },
      { id: "life", type: "number", label: t.life, defaultValue: 5, min: 1, max: 100, integer: true, suffix: ctx.common.units.years },
      { id: "method", type: "select", label: t.method, options: METHODS.map((value) => ({ value, label: t.methods[value] })), defaultValue: "straightLine" },
    ],
    validate: ({ cost, salvage }): FieldErrors => (salvage >= cost ? { salvage: t.errors.salvage } : {}),
    compute: ({ currency, cost, salvage, life, method: rawMethod }) => {
      const method = methodOf(rawMethod);
      const rows = depreciationSchedule(cost, salvage, life, method);
      const factor = decliningFactor(method);
      const base = cost - salvage;
      const rateItem: ResultItem =
        factor !== null
          ? { label: t.rateDeclining, value: { kind: "percent", value: (factor / life) * 100, decimals: 2 } }
          : method === "sumOfYears"
            ? { label: t.rateSumOfYears, value: { kind: "percent", value: (life / ((life * (life + 1)) / 2)) * 100, decimals: 2 } }
            : { label: t.rateStraight, value: { kind: "percent", value: 100 / life, decimals: 2 } };
      const money = (amount: number) => ({ kind: "currency" as const, amount });
      const secondary: ResultItem[] = [{ label: t.base, value: money(base) }, rateItem, { label: t.total, value: money(base) }];
      if (life > 1) secondary.push({ label: t.finalYear, value: money(rows[rows.length - 1].depreciation) });
      const notes = factor !== null ? [t.notes.fullYear, t.notes.declining, t.notes.macrs] : [t.notes.fullYear, t.notes.macrs];
      return {
        primary: {
          label: t.firstYear,
          value: money(rows[0].depreciation),
          caption: fill(t.caption, {
            method: t.methods[method],
            cost: ctx.fmt.currency(cost, currency),
            salvage: ctx.fmt.currency(salvage, currency),
            life: plural(ctx, life, t.lifeYears),
          }),
        },
        secondary,
        tables: [
          {
            caption: t.table.caption,
            columns: [t.table.year, t.table.depreciation, t.table.accumulated, t.table.bookValue],
            rows: rows.map((r) => ({
              label: fill(t.table.yearLabel, { n: ctx.fmt.number(r.year, 0) }),
              cells: [money(r.depreciation), money(r.accumulated), money(r.bookValue)],
            })),
          },
        ],
        notes,
      };
    },
  });
}

export const depreciationEngine = makeDepreciationEngine(englishContext(en));
