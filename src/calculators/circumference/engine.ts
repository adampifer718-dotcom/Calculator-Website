import { defineEngine } from "@/calculators/framework/types";

export type CircumferenceValues = { known: string; radius: number | null; diameter: number | null; area: number | null };

export const circumferenceEngine = defineEngine<CircumferenceValues>({
  fields: [
    {
      id: "known",
      type: "select",
      label: "I know the",
      options: [
        { value: "radius", label: "Radius" },
        { value: "diameter", label: "Diameter" },
        { value: "area", label: "Area" },
      ],
      defaultValue: "radius",
    },
    { id: "radius", type: "number", label: "Radius (r)", defaultValue: 5, min: 0, minExclusive: true, visibleWhen: { field: "known", oneOf: ["radius"] } },
    { id: "diameter", type: "number", label: "Diameter (d)", defaultValue: 10, min: 0, minExclusive: true, visibleWhen: { field: "known", oneOf: ["diameter"] } },
    { id: "area", type: "number", label: "Area (A)", defaultValue: 78.54, min: 0, minExclusive: true, visibleWhen: { field: "known", oneOf: ["area"] } },
  ],
  compute: ({ known, radius, diameter, area }) => {
    const r = known === "diameter" ? (diameter ?? 0) / 2 : known === "area" ? Math.sqrt((area ?? 0) / Math.PI) : (radius ?? 0);
    return {
      primary: { label: "Circumference", value: { kind: "number", value: 2 * Math.PI * r, decimals: 6 }, caption: "In the same unit as your input." },
      secondary: [
        { label: "Radius", value: { kind: "number", value: r, decimals: 6 } },
        { label: "Diameter", value: { kind: "number", value: 2 * r, decimals: 6 } },
        { label: "Area", value: { kind: "number", value: Math.PI * r * r, decimals: 6 } },
      ],
    };
  },
});
