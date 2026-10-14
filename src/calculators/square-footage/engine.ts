import { defineEngine } from "@/calculators/framework/types";

export const LENGTH_UNITS = [
  { value: "ft", label: "Feet (ft)", toFeet: 1 },
  { value: "in", label: "Inches (in)", toFeet: 1 / 12 },
  { value: "yd", label: "Yards (yd)", toFeet: 3 },
  { value: "m", label: "Meters (m)", toFeet: 1 / 0.3048 },
  { value: "cm", label: "Centimeters (cm)", toFeet: 1 / 30.48 },
] as const;

export const SQ_FT_TO_SQ_M = 0.09290304;

export type SquareFootageValues = {
  shape: string;
  unit: string;
  length: number | null;
  width: number | null;
  diameter: number | null;
  base: number | null;
  height: number | null;
  quantity: number;
};

const dimension = (id: "length" | "width" | "diameter" | "base" | "height", label: string, defaultValue: number, shape: string) =>
  ({ id, type: "number", label, defaultValue, min: 0, minExclusive: true, visibleWhen: { field: "shape", oneOf: [shape] } }) as const;

export const squareFootageEngine = defineEngine<SquareFootageValues>({
  fields: [
    {
      id: "shape",
      type: "select",
      label: "Shape",
      options: [
        { value: "rectangle", label: "Rectangle or square" },
        { value: "circle", label: "Circle" },
        { value: "triangle", label: "Triangle" },
      ],
      defaultValue: "rectangle",
    },
    { id: "unit", type: "select", label: "Measurement unit", options: LENGTH_UNITS.map(({ value, label }) => ({ value, label })), defaultValue: "ft" },
    dimension("length", "Length", 12, "rectangle"),
    dimension("width", "Width", 15, "rectangle"),
    dimension("diameter", "Diameter", 10, "circle"),
    dimension("base", "Base", 10, "triangle"),
    dimension("height", "Height", 8, "triangle"),
    { id: "quantity", type: "number", label: "Number of areas", help: "For several identical rooms or pieces.", defaultValue: 1, min: 1, integer: true, max: 10000 },
  ],
  compute: (v) => {
    const unit = LENGTH_UNITS.find((u) => u.value === v.unit) ?? LENGTH_UNITS[0];
    let areaInUnits: number;
    if (v.shape === "circle") areaInUnits = Math.PI * ((v.diameter ?? 0) / 2) ** 2;
    else if (v.shape === "triangle") areaInUnits = ((v.base ?? 0) * (v.height ?? 0)) / 2;
    else areaInUnits = (v.length ?? 0) * (v.width ?? 0);
    const total = areaInUnits * v.quantity;
    const sqFt = total * unit.toFeet ** 2;
    return {
      primary: { label: "Area", value: { kind: "number", value: sqFt, decimals: 2, suffix: "sq ft" }, caption: v.quantity > 1 ? `Total for ${v.quantity} identical areas.` : undefined },
      secondary: [
        { label: "Square meters", value: { kind: "number", value: sqFt * SQ_FT_TO_SQ_M, decimals: 2, suffix: "m²" } },
        { label: "Square yards", value: { kind: "number", value: sqFt / 9, decimals: 2, suffix: "sq yd" } },
        { label: `Square ${unit.value}`, value: { kind: "number", value: total, decimals: 4, suffix: `${unit.value}²` } },
      ],
    };
  },
});
