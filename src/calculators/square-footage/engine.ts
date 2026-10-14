import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import en, { type SquareFootageText } from "./text/en";

export const LENGTH_UNITS = [
  { value: "ft", toFeet: 1 },
  { value: "in", toFeet: 1 / 12 },
  { value: "yd", toFeet: 3 },
  { value: "m", toFeet: 1 / 0.3048 },
  { value: "cm", toFeet: 1 / 30.48 },
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

export function makeSquareFootageEngine(ctx: EngineContext<SquareFootageText>) {
  const t = ctx.text;
  const dimension = (id: "length" | "width" | "diameter" | "base" | "height", defaultValue: number, shape: string) =>
    ({ id, type: "number", label: t[id], defaultValue, min: 0, minExclusive: true, visibleWhen: { field: "shape", oneOf: [shape] } }) as const;
  return defineEngine<SquareFootageValues>({
    locale: ctx.locale,
    fields: [
      {
        id: "shape",
        type: "select",
        label: t.shape,
        options: (["rectangle", "circle", "triangle"] as const).map((value) => ({ value, label: t.shapes[value] })),
        defaultValue: "rectangle",
      },
      { id: "unit", type: "select", label: t.unit, options: LENGTH_UNITS.map(({ value }) => ({ value, label: t.units[value] })), defaultValue: "ft" },
      dimension("length", 12, "rectangle"),
      dimension("width", 15, "rectangle"),
      dimension("diameter", 10, "circle"),
      dimension("base", 10, "triangle"),
      dimension("height", 8, "triangle"),
      { id: "quantity", type: "number", label: t.quantity, help: t.quantityHelp, defaultValue: 1, min: 1, integer: true, max: 10000 },
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
        primary: {
          label: t.area,
          value: { kind: "number", value: sqFt, decimals: 2, suffix: t.sqFtSuffix },
          caption: v.quantity > 1 ? fill(t.quantityCaption, { count: ctx.fmt.number(v.quantity, 0) }) : undefined,
        },
        secondary: [
          { label: t.sqM, value: { kind: "number", value: sqFt * SQ_FT_TO_SQ_M, decimals: 2, suffix: "m²" } },
          { label: t.sqYd, value: { kind: "number", value: sqFt / 9, decimals: 2, suffix: t.sqYdSuffix } },
          { label: fill(t.sqUnit, { unit: unit.value }), value: { kind: "number", value: total, decimals: 4, suffix: `${unit.value}²` } },
        ],
      };
    },
  });
}

export const squareFootageEngine = makeSquareFootageEngine(englishContext(en));
