import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import en, { type DilutionText } from "./text/en";

export type DilutionValues = { solve: string; c1: number | null; v1: number | null; c2: number | null; v2: number | null };

type Unknown = "c1" | "v1" | "c2" | "v2";
const UNKNOWNS = ["v1", "c2", "v2", "c1"] as const;
const positive = { min: 0, minExclusive: true } as const;
const unless = (solved: Unknown) => ({ field: "solve", oneOf: ["c1", "v1", "c2", "v2"].filter((s) => s !== solved) });

export function makeDilutionEngine(ctx: EngineContext<DilutionText>) {
  const t = ctx.text;
  return defineEngine<DilutionValues>({
    locale: ctx.locale,
    fields: [
      { id: "solve", type: "select", label: t.solve, options: UNKNOWNS.map((value) => ({ value, label: t.solveOptions[value] })), defaultValue: "v1" },
      { id: "c1", type: "number", label: t.c1, defaultValue: 2, ...positive, visibleWhen: unless("c1") },
      { id: "v1", type: "number", label: t.v1, defaultValue: 25, ...positive, visibleWhen: unless("v1") },
      { id: "c2", type: "number", label: t.c2, defaultValue: 0.5, ...positive, visibleWhen: unless("c2") },
      { id: "v2", type: "number", label: t.v2, defaultValue: 100, ...positive, visibleWhen: unless("v2") },
    ],
    validate: ({ solve, c1, v1, c2, v2 }): FieldErrors => {
      if ((solve === "v1" || solve === "v2") && (c2 ?? 0) > (c1 ?? 0)) return { c2: t.tooConcentrated };
      if ((solve === "c1" || solve === "c2") && (v1 ?? 0) > (v2 ?? 0)) return { v1: t.stockTooLarge };
      return {};
    },
    compute: ({ solve, c1, v1, c2, v2 }) => {
      const C1 = solve === "c1" ? ((c2 ?? 0) * (v2 ?? 0)) / (v1 ?? 1) : (c1 ?? 0);
      const V1 = solve === "v1" ? ((c2 ?? 0) * (v2 ?? 0)) / C1 : (v1 ?? 0);
      const V2 = solve === "v2" ? (C1 * V1) / (c2 ?? 1) : (v2 ?? 0);
      const C2 = solve === "c2" ? (C1 * V1) / V2 : (c2 ?? 0);
      const key: Unknown = (UNKNOWNS as readonly string[]).includes(solve) ? (solve as Unknown) : "v1";
      const solved = { c1: C1, v1: V1, c2: C2, v2: V2 }[key];
      return {
        primary: { label: t.results[key], value: { kind: "number", value: solved, decimals: 6 }, caption: t.caption },
        secondary: [
          { label: t.solvent, value: { kind: "number", value: V2 - V1, decimals: 6 } },
          { label: t.factor, value: { kind: "number", value: C1 / C2, decimals: 4 } },
        ],
        notes: [t.note],
      };
    },
  });
}

export const dilutionEngine = makeDilutionEngine(englishContext(en));
