import { englishContext, fill, plural, type EngineContext, type PluralForms } from "@/calculators/framework/i18n";
import { MAX_INPUT_MAGNITUDE } from "@/calculators/framework/evaluate";
import { defineEngine, type ResultItem, type ResultValue } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import { listError, parseNumberList, sum } from "@/lib/math/data";
import en, { type NpvText } from "./text/en";

export type NpvValues = { currency: string; initial: number; cashFlows: string; rate: number };

export const MAX_CASH_FLOWS = 100;
/** IRR search interval, as yearly rates (−99.99% to 1,000%). */
export const IRR_LOW = -0.9999;
export const IRR_HIGH = 10;

/** NPV of the flows [CF₀, CF₁, …, CFₙ] at rate r (a fraction): Σ CFₜ ÷ (1 + r)ᵗ. */
export function npvOf(flows: readonly number[], r: number): number {
  return sum(flows.map((cf, t) => cf / (1 + r) ** t));
}

/** Number of sign changes in the flows, ignoring zeros. */
export function signChanges(flows: readonly number[]): number {
  let changes = 0;
  let last = 0;
  for (const cf of flows) {
    if (cf === 0) continue;
    if (last !== 0 && Math.sign(cf) !== last) changes++;
    last = Math.sign(cf);
  }
  return changes;
}

export type IrrResult = { status: "ok"; rate: number } | { status: "none" | "notUnique" | "outOfRange" };

/**
 * IRR by bisection over [−99.99%, 1,000%]. With exactly one sign change the
 * NPV has exactly one root above −100% (Descartes' rule of signs in 1/(1 + r)),
 * so a bracketed root is the unique IRR. More sign changes are reported as
 * not unique; none as not found.
 */
export function irrOf(flows: readonly number[]): IrrResult {
  const changes = signChanges(flows);
  if (changes === 0) return { status: "none" };
  if (changes > 1) return { status: "notUnique" };
  // NPV × (1 + r)ⁿ = Σ CFₜ (1 + r)ⁿ⁻ᵗ has the same sign as the NPV and stays finite near −100%.
  const n = flows.length - 1;
  const scaled = (r: number) => sum(flows.map((cf, t) => cf * (1 + r) ** (n - t)));
  let lo = IRR_LOW;
  let hi = IRR_HIGH;
  let fLo = scaled(lo);
  const fHi = scaled(hi);
  if (fLo === 0) return { status: "ok", rate: lo };
  if (fHi === 0) return { status: "ok", rate: hi };
  if (Math.sign(fLo) === Math.sign(fHi)) return { status: "outOfRange" };
  for (let i = 0; i < 200 && hi - lo > 1e-15; i++) {
    const mid = (lo + hi) / 2;
    const fMid = scaled(mid);
    if (fMid === 0) return { status: "ok", rate: mid };
    if (Math.sign(fMid) === Math.sign(fLo)) {
      lo = mid;
      fLo = fMid;
    } else {
      hi = mid;
    }
  }
  return { status: "ok", rate: (lo + hi) / 2 };
}

export interface NpvRow {
  year: number;
  cashFlow: number;
  discounted: number;
  cumulative: number;
}

/** Year-by-year discounted values, starting with year 0 (−C₀). */
export function npvSchedule(initial: number, cashFlows: readonly number[], r: number): NpvRow[] {
  const rows: NpvRow[] = [];
  let cumulative = 0;
  [-initial, ...cashFlows].forEach((cashFlow, year) => {
    const discounted = cashFlow / (1 + r) ** year;
    cumulative += discounted;
    rows.push({ year, cashFlow, discounted, cumulative });
  });
  return rows;
}

/**
 * Discounted payback: the first year in which the cumulative discounted value
 * reaches zero, interpolated linearly within that year. Null if never reached.
 */
export function discountedPayback(rows: readonly NpvRow[]): number | null {
  for (let i = 1; i < rows.length; i++) {
    const before = rows[i - 1].cumulative;
    if (before < 0 && rows[i].cumulative >= 0 && rows[i].discounted > 0) return i - 1 + -before / rows[i].discounted;
  }
  return null;
}

export function makeNpvEngine(ctx: EngineContext<NpvText>) {
  const t = ctx.text;
  const flowsOf = (text: string) => {
    const parsed = parseNumberList(text, ctx.locale);
    return parsed.ok ? parsed.values : [];
  };
  const checkFlows = (text: string): string | undefined => {
    const parsed = parseNumberList(text, ctx.locale);
    if (parsed.ok && parsed.values.length > MAX_CASH_FLOWS) return fill(t.errors.tooMany, { max: ctx.fmt.number(MAX_CASH_FLOWS, 0) });
    const problem = listError(parsed, t.errors, ctx.fmt.number(MAX_CASH_FLOWS, 0));
    if (problem || !parsed.ok) return problem;
    for (const v of parsed.values) {
      if (Math.abs(v) > MAX_INPUT_MAGNITUDE) return fill(t.tooBig, { value: ctx.fmt.significant(v, 10), max: ctx.fmt.number(MAX_INPUT_MAGNITUDE, 0) });
    }
    return undefined;
  };
  const countWord = (value: number, text: string, forms: PluralForms) => {
    const category = new Intl.PluralRules(ctx.locale).select(value) as keyof PluralForms;
    return fill(forms[category] ?? forms.other, { n: text });
  };

  return defineEngine<NpvValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      currencyField(ctx),
      { id: "initial", type: "number", label: t.initial, help: t.initialHelp, defaultValue: 50000, min: 0, minExclusive: true, prefix: "currency" },
      { id: "cashFlows", type: "text", multiline: true, label: t.cashFlows, help: t.cashFlowsHelp, defaultValue: "12000, 15000, 18000, 20000, 9000", check: checkFlows },
      { id: "rate", type: "number", label: t.rate, help: t.rateHelp, defaultValue: 8, min: -99, max: 1000, suffix: "%" },
    ],
    compute: ({ currency, initial, cashFlows, rate }) => {
      const flows = flowsOf(cashFlows);
      const r = rate / 100;
      const rows = npvSchedule(initial, flows, r);
      const npv = npvOf([-initial, ...flows], r);
      const pvFlows = npv + initial;
      const irr = irrOf([-initial, ...flows]);
      const payback = discountedPayback(rows);
      const money = (amount: number): ResultValue => ({ kind: "currency", amount: amount + 0 });
      const bounds = { low: ctx.fmt.percent(IRR_LOW * 100, 2), high: ctx.fmt.percent(IRR_HIGH * 100, 2) };
      const irrValue: ResultValue =
        irr.status === "ok"
          ? { kind: "percent", value: irr.rate * 100 + 0, decimals: 2 }
          : { kind: "text", text: irr.status === "none" ? t.irrNone : irr.status === "notUnique" ? t.irrNotUnique : fill(t.irrOutOfRange, bounds) };
      const secondary: ResultItem[] = [
        { label: t.irr, value: irrValue },
        { label: t.pvInflows, value: money(pvFlows) },
        { label: t.profitabilityIndex, value: { kind: "number", value: pvFlows / initial + 0, decimals: 4 } },
        { label: t.totalUndiscounted, value: money(sum([-initial, ...flows])) },
        {
          label: t.payback,
          value: { kind: "text", text: payback === null ? t.paybackNever : countWord(Number(payback.toFixed(2)), ctx.fmt.number(payback, 2), t.paybackYears) },
        },
      ];
      // Treat an NPV within rounding noise of zero as zero.
      const tolerance = 1e-9 * Math.max(initial, ...flows.map(Math.abs));
      const verdict = Math.abs(npv) <= tolerance ? t.notes.zero : npv > 0 ? t.notes.positive : t.notes.negative;
      const irrNote = irr.status === "none" ? t.notes.irrNone : irr.status === "notUnique" ? t.notes.irrNotUnique : irr.status === "outOfRange" ? fill(t.notes.irrOutOfRange, bounds) : "";
      return {
        primary: {
          label: t.npv,
          value: money(Math.abs(npv) <= tolerance ? 0 : npv),
          caption: fill(t.caption, { count: plural(ctx, flows.length, t.yearCount), rate: ctx.fmt.percent(rate, 4), initial: ctx.fmt.currency(initial, currency) }),
        },
        secondary,
        tables: [
          {
            caption: t.table.caption,
            columns: [t.table.year, t.table.cashFlow, t.table.discounted, t.table.cumulative],
            rows: rows.map((row) => ({
              label: fill(t.table.yearLabel, { n: ctx.fmt.number(row.year, 0) }),
              cells: [money(row.cashFlow), money(row.discounted), money(row.cumulative)],
            })),
          },
        ],
        notes: [verdict, irrNote, payback !== null ? t.notes.payback : "", t.notes.timing].filter(Boolean),
      };
    },
  });
}

export const npvEngine = makeNpvEngine(englishContext(en));
