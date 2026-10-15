import { englishContext, fill, plural, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type NumberField, type ResultItem } from "@/calculators/framework/types";
import en, { type TileText } from "./text/en";

type UnitSystem = "imperial" | "metric";

export type TileValues = { units: string; waste: number; perBox: number | null } & Record<string, number | string | null>;

/** Inputs that depend on the unit system; field ids are "<key>Imperial" or "<key>Metric". */
type Key = "areaLength" | "areaWidth" | "tileLength" | "tileWidth" | "grout";

const SUFFIX: Record<UnitSystem, Record<Key, string>> = {
  imperial: { areaLength: "ft", areaWidth: "ft", tileLength: "in", tileWidth: "in", grout: "in" },
  metric: { areaLength: "m", areaWidth: "m", tileLength: "mm", tileWidth: "mm", grout: "mm" },
};
const DEFAULTS: Record<UnitSystem, Record<Key, number>> = {
  imperial: { areaLength: 12, areaWidth: 9, tileLength: 12, tileWidth: 12, grout: 0.125 },
  metric: { areaLength: 4, areaWidth: 3, tileLength: 300, tileWidth: 300, grout: 3 },
};
const MAX: Record<UnitSystem, Record<Key, number>> = {
  imperial: { areaLength: 10000, areaWidth: 10000, tileLength: 240, tileWidth: 240, grout: 2 },
  metric: { areaLength: 3000, areaWidth: 3000, tileLength: 6000, tileWidth: 6000, grout: 50 },
};
/** Small area units per large area unit: in² per ft² and mm² per m². */
const SMALL_PER_LARGE: Record<UnitSystem, number> = { imperial: 144, metric: 1e6 };

const fieldId = (key: Key, units: UnitSystem) => `${key}${units === "metric" ? "Metric" : "Imperial"}`;
const unitsOf = (value: string): UnitSystem => (value === "metric" ? "metric" : "imperial");

/** Rounds up to a whole number, ignoring floating-point noise just above an integer. */
export const roundUp = (x: number) => Math.ceil(x - 1e-9);

export interface TileInputs {
  /** Area dimensions in ft or m. */
  areaLength: number;
  areaWidth: number;
  /** Tile and joint sizes in in or mm. */
  tileLength: number;
  tileWidth: number;
  grout: number;
  wastePercent: number;
  units: UnitSystem;
}

/** Areas in ft² or m². */
export function tileEstimate(p: TileInputs) {
  const area = p.areaLength * p.areaWidth;
  const footprint = ((p.tileLength + p.grout) * (p.tileWidth + p.grout)) / SMALL_PER_LARGE[p.units];
  const exact = area / footprint;
  return { area, footprint, exact, beforeWaste: roundUp(exact), tiles: roundUp(exact * (1 + p.wastePercent / 100)) };
}

export function makeTileEngine(ctx: EngineContext<TileText>) {
  const t = ctx.text;
  const labels: Record<Key, string> = { areaLength: t.areaLength, areaWidth: t.areaWidth, tileLength: t.tileLength, tileWidth: t.tileWidth, grout: t.grout };
  const system = (key: Key): NumberField[] =>
    (["imperial", "metric"] as const).map((units) => ({
      id: fieldId(key, units),
      type: "number",
      label: labels[key],
      help: key === "grout" ? (units === "metric" ? t.groutHelpMetric : t.groutHelpImperial) : key === "areaLength" ? t.areaHelp : undefined,
      defaultValue: DEFAULTS[units][key],
      min: 0,
      minExclusive: key !== "grout",
      max: MAX[units][key],
      suffix: SUFFIX[units][key],
      visibleWhen: { field: "units", oneOf: [units] },
    }));

  const inputs = (values: TileValues): TileInputs => {
    const units = unitsOf(values.units);
    const get = (key: Key) => Number(values[fieldId(key, units)] ?? 0);
    return {
      areaLength: get("areaLength"),
      areaWidth: get("areaWidth"),
      tileLength: get("tileLength"),
      tileWidth: get("tileWidth"),
      grout: get("grout"),
      wastePercent: values.waste,
      units,
    };
  };

  return defineEngine<TileValues>({
    locale: ctx.locale,
    // Dimension fields are generated per unit system, so the list is typed loosely here.
    fields: [
      {
        id: "units",
        type: "select",
        label: t.units,
        options: Object.entries(t.unitSystems).map(([value, label]) => ({ value, label })),
        defaultValue: "imperial",
        display: "segmented",
      },
      ...system("areaLength"),
      ...system("areaWidth"),
      ...system("tileLength"),
      ...system("tileWidth"),
      ...system("grout"),
      { id: "waste", type: "number", label: t.waste, help: t.wasteHelp, defaultValue: 10, min: 0, max: 50, suffix: "%" },
      { id: "perBox", type: "number", label: t.perBox, help: t.perBoxHelp, defaultValue: null, optional: true, min: 1, max: 100000, integer: true },
    ] as never,
    compute: (values) => {
      const p = inputs(values);
      const e = tileEstimate(p);
      const areaUnit = p.units === "imperial" ? "ft²" : "m²";
      const areaText = (v: number, decimals: number) => `${ctx.fmt.number(v, decimals)} ${areaUnit}`;
      const footprintDecimals = p.units === "imperial" ? 4 : 6;
      const secondary: ResultItem[] = [
        { label: t.tilesBeforeWaste, value: { kind: "number", value: e.beforeWaste, decimals: 0 } },
        { label: t.area, value: { kind: "number", value: e.area, decimals: 2, suffix: areaUnit } },
        { label: t.tileFootprint, value: { kind: "number", value: e.footprint, decimals: footprintDecimals, suffix: areaUnit } },
      ];
      const perBox = values.perBox;
      if (perBox !== null && perBox !== undefined) {
        const boxes = roundUp(e.tiles / perBox);
        secondary.unshift({ label: t.boxes, value: { kind: "text", text: fill(t.boxesCaption, { boxes: plural(ctx, boxes, t.boxesCount), tiles: plural(ctx, boxes * perBox, t.tilesCount) }) } });
        secondary.push({ label: t.spare, value: { kind: "number", value: boxes * perBox - e.tiles, decimals: 0 } });
      }
      return {
        primary: {
          label: t.tilesNeeded,
          value: { kind: "number", value: e.tiles, decimals: 0 },
          caption: fill(t.caption, {
            area: areaText(e.area, 2),
            perTile: areaText(e.footprint, footprintDecimals),
            waste: ctx.fmt.percent(p.wastePercent, 2),
          }),
        },
        secondary,
        notes: [t.notes.layout, t.notes.batch],
      };
    },
  });
}

export const tileEngine = makeTileEngine(englishContext(en));
