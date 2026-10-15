import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultValue } from "@/calculators/framework/types";
import { sciNumber } from "@/lib/math/sci-result";
import en, { type HalfLifeText } from "./text/en";

export type HalfLifeValues = { solve: string; initial: number | null; remaining: number | null; halfLife: number | null; elapsed: number | null };

type Unknown = "N" | "N0" | "T" | "t";
const UNKNOWNS = ["N", "N0", "T", "t"] as const;
const positive = { min: 0, minExclusive: true } as const;
const unless = (solved: Unknown) => ({ field: "solve", oneOf: UNKNOWNS.filter((s) => s !== solved) });

/** Solves N = N₀ · (1/2)^(t/T) for the unknown; inputs for the unknown are ignored. */
export function solveHalfLife(solve: Unknown, v: { N0: number; N: number; T: number; t: number }) {
  let { N0, N, T, t } = v;
  if (solve === "N") N = N0 * 2 ** (-t / T);
  else if (solve === "N0") N0 = N * 2 ** (t / T);
  else if (solve === "T") T = (t * Math.LN2) / Math.log(N0 / N);
  else t = T * Math.log2(N0 / N);
  return { N0, N, T, t };
}

export function makeHalfLifeEngine(ctx: EngineContext<HalfLifeText>) {
  const t = ctx.text;
  const key = (solve: string): Unknown => ((UNKNOWNS as readonly string[]).includes(solve) ? (solve as Unknown) : "N");
  return defineEngine<HalfLifeValues>({
    locale: ctx.locale,
    fields: [
      { id: "solve", type: "select", label: t.solve, options: UNKNOWNS.map((value) => ({ value, label: t.solveOptions[value] })), defaultValue: "N" },
      { id: "initial", type: "number", label: t.initial, help: t.amountHelp, defaultValue: 40, ...positive, visibleWhen: unless("N0") },
      { id: "remaining", type: "number", label: t.remaining, help: t.amountHelp, defaultValue: 5, ...positive, visibleWhen: unless("N") },
      { id: "halfLife", type: "number", label: t.halfLife, help: t.timeHelp, defaultValue: 5.27, ...positive, visibleWhen: unless("T") },
      { id: "elapsed", type: "number", label: t.elapsed, help: t.timeHelp, defaultValue: 15.81, min: 0, visibleWhen: unless("t") },
    ],
    validate: ({ solve, initial, remaining, halfLife, elapsed }): FieldErrors => {
      const s = key(solve);
      if (s === "T") {
        if ((remaining ?? 0) >= (initial ?? 0)) return { remaining: (remaining ?? 0) > (initial ?? 0) ? t.remainingTooLarge : t.remainingMustDrop };
        if ((elapsed ?? 0) <= 0) return { elapsed: t.timeMustBePositive };
      }
      if (s === "t" && (remaining ?? 0) > (initial ?? 0)) return { remaining: t.remainingTooLarge };
      if (s === "N0" && !Number.isFinite((remaining ?? 0) * 2 ** ((elapsed ?? 0) / (halfLife ?? 1)))) return { elapsed: t.tooManyHalfLives };
      return {};
    },
    compute: ({ solve, initial, remaining, halfLife, elapsed }) => {
      const s = key(solve);
      const r = solveHalfLife(s, { N0: initial ?? 0, N: remaining ?? 0, T: halfLife ?? 0, t: elapsed ?? 0 });
      const solved = { N: r.N, N0: r.N0, T: r.T, t: r.t }[s];
      const fraction = r.N / r.N0;
      const pct = fraction * 100;
      const percent: ResultValue =
        pct === 0 || pct >= 1e-4 ? { kind: "percent", value: pct, decimals: pct === 0 ? 0 : Math.min(20, Math.max(2, 5 - Math.floor(Math.log10(pct)))) } : { kind: "text", text: `${ctx.fmt.significant(pct, 6)}%` };
      const lambda = Math.LN2 / r.T;
      return {
        primary: { label: t.results[s], value: sciNumber(ctx.fmt, solved), caption: s === "N" || s === "N0" ? t.amountCaption : t.timeCaption },
        secondary: [
          { label: t.percentRemaining, value: percent },
          { label: t.halfLives, value: sciNumber(ctx.fmt, r.t / r.T, undefined, 6) },
          { label: t.decayConstant, value: sciNumber(ctx.fmt, lambda, undefined, 6) },
          { label: t.meanLifetime, value: sciNumber(ctx.fmt, 1 / lambda, undefined, 6) },
        ],
        notes: [t.note],
      };
    },
  });
}

export const halfLifeEngine = makeHalfLifeEngine(englishContext(en));
