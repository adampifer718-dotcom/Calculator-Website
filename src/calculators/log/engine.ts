import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import en, { type LogText } from "./text/en";

export type LogValues = { value: number; baseType: string; base: number | null };

/** log_b(x), using the exact built-ins for bases 10, 2 and e. */
export function logarithm(x: number, base: number): number {
  if (base === 10) return Math.log10(x);
  if (base === 2) return Math.log2(x);
  if (base === Math.E) return Math.log(x);
  return Math.log(x) / Math.log(base);
}

export function makeLogEngine(ctx: EngineContext<LogText>) {
  const t = ctx.text;
  const s = (v: number, d = 12) => ctx.fmt.significant(v, d);
  return defineEngine<LogValues>({
    locale: ctx.locale,
    fields: [
      { id: "value", type: "number", label: t.value, defaultValue: 1000, min: 0, minExclusive: true },
      {
        id: "baseType",
        type: "select",
        label: t.base,
        options: [
          { value: "10", label: t.bases.ten },
          { value: "e", label: t.bases.e },
          { value: "2", label: t.bases.two },
          { value: "custom", label: t.bases.custom },
        ],
        defaultValue: "10",
      },
      { id: "base", type: "number", label: t.customBase, defaultValue: 3, min: 0, minExclusive: true, visibleWhen: { field: "baseType", oneOf: ["custom"] } },
    ],
    validate: ({ baseType, base }): FieldErrors => (baseType === "custom" && base === 1 ? { base: t.baseOne } : {}),
    compute: ({ value, baseType, base }) => {
      const b = baseType === "e" ? Math.E : baseType === "2" ? 2 : baseType === "custom" ? (base ?? 10) : 10;
      const result = logarithm(value, b);
      const baseLabel = baseType === "e" ? "e" : s(b, 10);
      return {
        primary: {
          label: baseType === "e" ? t.primaryNatural : fill(t.primaryBase, { base: baseLabel }),
          value: { kind: "text", text: s(result) },
          caption: fill(t.caption, { base: baseLabel, value: s(value, 10) }),
        },
        secondary: [
          { label: t.ln, value: { kind: "text", text: s(Math.log(value)) } },
          { label: t.log10, value: { kind: "text", text: s(Math.log10(value)) } },
          { label: t.log2, value: { kind: "text", text: s(Math.log2(value)) } },
        ],
      };
    },
  });
}

export const logEngine = makeLogEngine(englishContext(en));
