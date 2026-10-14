import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import en, { type PythagoreanText } from "./text/en";

export type PythagoreanValues = { solve: string; a: number | null; b: number | null; c: number | null; leg: number | null };

const positive = { min: 0, minExclusive: true } as const;

export function makePythagoreanEngine(ctx: EngineContext<PythagoreanText>) {
  const t = ctx.text;
  return defineEngine<PythagoreanValues>({
    locale: ctx.locale,
    fields: [
      {
        id: "solve",
        type: "select",
        label: t.solve,
        options: [
          { value: "hypotenuse", label: t.modes.hypotenuse },
          { value: "leg", label: t.modes.leg },
        ],
        defaultValue: "hypotenuse",
      },
      { id: "a", type: "number", label: t.a, defaultValue: 3, ...positive, visibleWhen: { field: "solve", oneOf: ["hypotenuse"] } },
      { id: "b", type: "number", label: t.b, defaultValue: 4, ...positive, visibleWhen: { field: "solve", oneOf: ["hypotenuse"] } },
      { id: "c", type: "number", label: t.c, defaultValue: 13, ...positive, visibleWhen: { field: "solve", oneOf: ["leg"] } },
      { id: "leg", type: "number", label: t.leg, defaultValue: 5, ...positive, visibleWhen: { field: "solve", oneOf: ["leg"] } },
    ],
    validate: ({ solve, c, leg }): FieldErrors => (solve === "leg" && (leg ?? 0) >= (c ?? 0) ? { leg: t.legTooLong } : {}),
    compute: ({ solve, a, b, c, leg }) => {
      const [x, y, hyp] = solve === "leg" ? [leg ?? 0, Math.sqrt((c ?? 0) ** 2 - (leg ?? 0) ** 2), c ?? 0] : [a ?? 0, b ?? 0, Math.hypot(a ?? 0, b ?? 0)];
      return {
        primary: { label: solve === "leg" ? t.missingLeg : t.hypotenuse, value: { kind: "number", value: solve === "leg" ? y : hyp, decimals: 6 } },
        secondary: [
          { label: t.area, value: { kind: "number", value: (x * y) / 2, decimals: 6 } },
          { label: t.perimeter, value: { kind: "number", value: x + y + hyp, decimals: 6 } },
        ],
      };
    },
  });
}

export const pythagoreanEngine = makePythagoreanEngine(englishContext(en));
