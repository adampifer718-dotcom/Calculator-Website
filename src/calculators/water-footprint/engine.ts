import { englishContext, fill, plural, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultItem } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import en, { type WaterFootprintText } from "./text/en";

export type WaterFootprintValues = {
  flow: number;
  flowUnit: string;
  minutes: number;
  showersPerWeek: number;
  people: number;
  newFlow: number | null;
  energy: string;
  tempUnit: string;
  inletTemp: number | null;
  showerTemp: number | null;
  efficiency: number | null;
  currency: string;
  price: number | null;
};

/** Liters per US gallon (exact: 231 in³). */
export const LITERS_PER_GALLON = 3.785411784;
/** Weeks in the average Gregorian year: 365.2425 ÷ 7 = 52.1775. */
export const WEEKS_PER_YEAR = 365.2425 / 7;
/** Specific heat of liquid water, kJ/(kg·K) (1 cal/(g·°C)), with 1 kg per liter. */
export const WATER_SPECIFIC_HEAT = 4.186;

export const FLOW_UNITS = ["gpm", "lpm"] as const;

/** Liters per year = flow (L/min) × minutes × showers per week × people × 52.1775. */
export function litersPerYear(flowLpm: number, minutes: number, showersPerWeek: number, people: number): number {
  return flowLpm * minutes * showersPerWeek * people * WEEKS_PER_YEAR;
}

/** Heat in kWh to warm a volume of water by ΔT (K), divided by the heater efficiency (fraction). */
export function heatingKwh(liters: number, deltaK: number, efficiency: number): number {
  return (liters * WATER_SPECIFIC_HEAT * deltaK) / 3600 / efficiency;
}

const toCelsius = (value: number, unit: string) => (unit === "F" ? ((value - 32) * 5) / 9 : value);

export function makeWaterFootprintEngine(ctx: EngineContext<WaterFootprintText>) {
  const t = ctx.text;
  const energyOn = { field: "energy", oneOf: ["yes"] } as const;
  return defineEngine<WaterFootprintValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      { id: "flow", type: "number", label: t.flow, help: t.flowHelp, defaultValue: 2.5, min: 0, minExclusive: true, max: 100 },
      { id: "flowUnit", type: "select", label: t.flowUnit, options: FLOW_UNITS.map((value) => ({ value, label: t.flowUnits[value] })), defaultValue: "gpm", display: "segmented" },
      { id: "minutes", type: "number", label: t.minutes, defaultValue: 8, min: 0, minExclusive: true, max: 600, suffix: ctx.common.units.min },
      { id: "showersPerWeek", type: "number", label: t.showersPerWeek, defaultValue: 7, min: 0, minExclusive: true, max: 70 },
      { id: "people", type: "number", label: t.people, defaultValue: 1, min: 1, max: 1000, integer: true },
      { id: "newFlow", type: "number", label: t.newFlow, help: t.newFlowHelp, defaultValue: null, optional: true, min: 0, minExclusive: true, max: 100 },
      { id: "energy", type: "select", label: t.energy, options: (["yes", "no"] as const).map((value) => ({ value, label: t.energyOptions[value] })), defaultValue: "yes", display: "segmented" },
      { id: "tempUnit", type: "select", label: t.tempUnit, options: (["C", "F"] as const).map((value) => ({ value, label: t.tempUnits[value] })), defaultValue: "C", display: "segmented", visibleWhen: energyOn },
      { id: "inletTemp", type: "number", label: t.inletTemp, help: t.inletTempHelp, defaultValue: 15, visibleWhen: energyOn },
      { id: "showerTemp", type: "number", label: t.showerTemp, help: t.showerTempHelp, defaultValue: 38, visibleWhen: energyOn },
      { id: "efficiency", type: "number", label: t.efficiency, help: t.efficiencyHelp, defaultValue: 90, min: 0, minExclusive: true, max: 500, suffix: "%", visibleWhen: energyOn },
      { ...currencyField(ctx), visibleWhen: energyOn },
      { id: "price", type: "number", label: t.price, help: t.priceHelp, defaultValue: null, optional: true, min: 0, max: 1000, prefix: "currency", visibleWhen: energyOn },
    ],
    validate: ({ energy, tempUnit, inletTemp, showerTemp }): FieldErrors => {
      if (energy !== "yes" || inletTemp === null || showerTemp === null) return {};
      const inC = toCelsius(inletTemp, tempUnit);
      const showerC = toCelsius(showerTemp, tempUnit);
      const errors: FieldErrors = {};
      if (inC < 0 || inC > 40) errors.inletTemp = t.errors.inletRange;
      if (showerC > 60) errors.showerTemp = t.errors.showerRange;
      else if (showerC <= inC) errors.showerTemp = t.errors.showerAboveInlet;
      return errors;
    },
    compute: (v) => {
      const gallons = v.flowUnit === "gpm";
      const toLpm = (flow: number) => (gallons ? flow * LITERS_PER_GALLON : flow);
      const unit = gallons ? "gal" : "L";
      const show = (liters: number) => (gallons ? liters / LITERS_PER_GALLON : liters);
      const vol = (liters: number, decimals = 0, signed = false) => ({ kind: "number" as const, value: show(liters), decimals, suffix: unit, signed });
      const annualL = litersPerYear(toLpm(v.flow), v.minutes, v.showersPerWeek, v.people);
      const weeklyL = annualL / WEEKS_PER_YEAR;
      const perShowerL = toLpm(v.flow) * v.minutes;
      const secondary: ResultItem[] = [
        { label: t.annualOther, value: gallons ? { kind: "number", value: annualL, decimals: 0, suffix: "L" } : { kind: "number", value: annualL / LITERS_PER_GALLON, decimals: 0, suffix: "gal" } },
        { label: t.perWeek, value: vol(weeklyL, 1) },
        { label: t.perShower, value: vol(perShowerL, 1) },
      ];
      const notes = [t.notes.weeks];

      const energyOn = v.energy === "yes" && v.inletTemp !== null && v.showerTemp !== null && v.efficiency !== null;
      const deltaK = energyOn ? toCelsius(v.showerTemp ?? 0, v.tempUnit) - toCelsius(v.inletTemp ?? 0, v.tempUnit) : 0;
      const eff = (v.efficiency ?? 100) / 100;
      const kwh = (liters: number) => heatingKwh(liters, deltaK, eff);
      if (energyOn) {
        secondary.push({ label: t.energyYear, value: { kind: "number", value: kwh(annualL), decimals: 0, suffix: "kWh" } });
        if (v.price !== null) secondary.push({ label: t.costYear, value: { kind: "currency", amount: kwh(annualL) * v.price } });
        notes.push(t.notes.energy);
      }
      if (v.newFlow !== null) {
        const newL = litersPerYear(toLpm(v.newFlow), v.minutes, v.showersPerWeek, v.people);
        const savedL = annualL - newL;
        secondary.push({ label: t.newAnnual, value: vol(newL) }, { label: t.waterSaved, value: vol(savedL, 0, true) });
        if (energyOn) {
          secondary.push({ label: t.energySaved, value: { kind: "number", value: kwh(savedL), decimals: 0, suffix: "kWh", signed: true } });
          if (v.price !== null) secondary.push({ label: t.costSaved, value: { kind: "currency", amount: kwh(savedL) * v.price, signed: true } });
        }
        if (savedL < 0) notes.push(t.notes.moreWater);
      }
      return {
        primary: {
          label: t.annual,
          value: vol(annualL),
          caption: fill(t.caption, {
            flow: `${ctx.fmt.number(v.flow, 3)} ${gallons ? "gal/min" : "L/min"}`,
            minutes: ctx.fmt.number(v.minutes, 2),
            showers: ctx.fmt.number(v.showersPerWeek, 2),
            people: plural(ctx, v.people, t.peopleCount),
            weeks: ctx.fmt.number(WEEKS_PER_YEAR, 4),
          }),
        },
        secondary,
        notes,
      };
    },
  });
}

export const waterFootprintEngine = makeWaterFootprintEngine(englishContext(en));
