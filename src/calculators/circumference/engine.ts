import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import en, { type CircumferenceText } from "./text/en";

export type CircumferenceValues = { known: string; radius: number | null; diameter: number | null; area: number | null };

export function makeCircumferenceEngine(ctx: EngineContext<CircumferenceText>) {
  const t = ctx.text;
  return defineEngine<CircumferenceValues>({
    locale: ctx.locale,
    fields: [
      {
        id: "known",
        type: "select",
        label: t.known,
        options: (["radius", "diameter", "area"] as const).map((value) => ({ value, label: t.options[value] })),
        defaultValue: "radius",
      },
      { id: "radius", type: "number", label: t.radius, defaultValue: 5, min: 0, minExclusive: true, visibleWhen: { field: "known", oneOf: ["radius"] } },
      { id: "diameter", type: "number", label: t.diameter, defaultValue: 10, min: 0, minExclusive: true, visibleWhen: { field: "known", oneOf: ["diameter"] } },
      { id: "area", type: "number", label: t.area, defaultValue: 78.54, min: 0, minExclusive: true, visibleWhen: { field: "known", oneOf: ["area"] } },
    ],
    compute: ({ known, radius, diameter, area }) => {
      const r = known === "diameter" ? (diameter ?? 0) / 2 : known === "area" ? Math.sqrt((area ?? 0) / Math.PI) : (radius ?? 0);
      return {
        primary: { label: t.circumference, value: { kind: "number", value: 2 * Math.PI * r, decimals: 6 }, caption: t.caption },
        secondary: [
          { label: t.radiusOut, value: { kind: "number", value: r, decimals: 6 } },
          { label: t.diameterOut, value: { kind: "number", value: 2 * r, decimals: 6 } },
          { label: t.areaOut, value: { kind: "number", value: Math.PI * r * r, decimals: 6 } },
        ],
      };
    },
  });
}

export const circumferenceEngine = makeCircumferenceEngine(englishContext(en));
