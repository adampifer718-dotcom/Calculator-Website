import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultItem } from "@/calculators/framework/types";
import en, { type WindTurbineText } from "./text/en";

export type WindTurbineValues = {
  diameter: number;
  diameterUnit: string;
  speed: number;
  speedUnit: string;
  density: number;
  cp: number;
  ratedPower: number | null;
  capacityFactor: number | null;
};

/** The Betz limit: the largest share of the wind's power any rotor can capture. */
export const BETZ_LIMIT = 16 / 27;
/** International Standard Atmosphere density at sea level, 15 °C and 1013.25 hPa, in kg/m³. */
export const ISA_SEA_LEVEL_DENSITY = 1.225;
export const HOURS_PER_YEAR = 8760;

/** Meters per unit; 1 ft = 0.3048 m exactly. */
export const LENGTH_M = { m: 1, ft: 0.3048 } as const;
/** Meters per second per unit; all exact (1 mph = 0.44704 m/s, 1 kn = 1852 m/h). */
export const SPEED_MS = { ms: 1, kmh: 1 / 3.6, mph: 0.44704, kn: 1852 / 3600 } as const;

type LengthUnit = keyof typeof LENGTH_M;
type SpeedUnit = keyof typeof SPEED_MS;

/** Swept area A = π (D/2)² in m², from a diameter in meters. */
export function sweptArea(diameterM: number): number {
  return Math.PI * (diameterM / 2) ** 2;
}

/** P = ½ ρ A v³ Cp, in watts (SI inputs). */
export function windPower(density: number, area: number, speedMs: number, cp: number): number {
  return 0.5 * density * area * speedMs ** 3 * cp;
}

export function makeWindTurbineEngine(ctx: EngineContext<WindTurbineText>) {
  const t = ctx.text;
  const lengthUnits = Object.keys(LENGTH_M) as LengthUnit[];
  const speedUnits = Object.keys(SPEED_MS) as SpeedUnit[];
  return defineEngine<WindTurbineValues>({
    locale: ctx.locale,
    fields: [
      { id: "diameter", type: "number", label: t.diameter, help: t.diameterHelp, defaultValue: 80, min: 0, minExclusive: true, max: 1000 },
      { id: "diameterUnit", type: "select", label: t.diameterUnit, options: lengthUnits.map((value) => ({ value, label: t.diameterUnits[value] })), defaultValue: "m", display: "segmented" },
      { id: "speed", type: "number", label: t.speed, help: t.speedHelp, defaultValue: 10, min: 0, max: 500 },
      { id: "speedUnit", type: "select", label: t.speedUnit, options: speedUnits.map((value) => ({ value, label: t.speedUnits[value] })), defaultValue: "ms" },
      { id: "density", type: "number", label: t.density, help: t.densityHelp, defaultValue: ISA_SEA_LEVEL_DENSITY, min: 0, minExclusive: true, max: 5, suffix: "kg/m³" },
      { id: "cp", type: "number", label: t.cp, help: t.cpHelp, defaultValue: 0.4, min: 0, minExclusive: true },
      { id: "ratedPower", type: "number", label: t.ratedPower, help: t.ratedPowerHelp, defaultValue: null, optional: true, min: 0, minExclusive: true, max: 1e6, suffix: "kW" },
      { id: "capacityFactor", type: "number", label: t.capacityFactor, help: t.capacityFactorHelp, defaultValue: null, optional: true, min: 0, max: 100, suffix: "%" },
    ],
    validate: ({ cp }): FieldErrors => (cp > BETZ_LIMIT ? { cp: t.errors.betz } : {}),
    compute: ({ diameter, diameterUnit, speed, speedUnit, density, cp, ratedPower, capacityFactor }) => {
      const dM = diameter * (LENGTH_M[diameterUnit as LengthUnit] ?? 1);
      const vMs = speed * (SPEED_MS[speedUnit as SpeedUnit] ?? 1);
      const area = sweptArea(dM);
      const aeroW = windPower(density, area, vMs, cp);
      const ratedW = ratedPower === null ? null : ratedPower * 1000;
      const capped = ratedW !== null && aeroW > ratedW;
      const outW = capped ? ratedW : aeroW;
      const kw = (w: number, decimals = 2) => ({ kind: "number" as const, value: w / 1000, decimals, suffix: "kW" });

      const secondary: ResultItem[] = [{ label: t.powerW, value: { kind: "number", value: outW, decimals: 0, suffix: "W" } }];
      if (capped) secondary.push({ label: t.aeroPower, value: kw(aeroW) });
      secondary.push(
        { label: t.windPower, value: kw(windPower(density, area, vMs, 1)) },
        { label: t.betzPower, value: kw(windPower(density, area, vMs, BETZ_LIMIT)) },
        { label: t.sweptArea, value: { kind: "number", value: area, decimals: 2, suffix: "m²" } },
        { label: t.speedMs, value: { kind: "number", value: vMs, decimals: 3, suffix: "m/s" } },
      );
      const notes = [t.notes.single];
      if (capped) notes.unshift(fill(t.notes.capped, { rated: `${ctx.fmt.number(ratedPower ?? 0, 2)} kW` }));
      if (capacityFactor !== null) {
        const kwh = (outW / 1000) * HOURS_PER_YEAR * (capacityFactor / 100);
        secondary.push(
          { label: t.annualEnergy, value: { kind: "number", value: kwh, decimals: 0, suffix: "kWh" } },
          { label: t.annualEnergyMwh, value: { kind: "number", value: kwh / 1000, decimals: 2, suffix: "MWh" } },
        );
        notes.push(t.notes.annual);
      }
      return {
        primary: {
          label: t.power,
          value: kw(outW),
          caption: fill(t.caption, {
            area: `${ctx.fmt.number(area, 2)} m²`,
            speed: `${ctx.fmt.number(vMs, 3)} m/s`,
            cp: ctx.fmt.number(cp, 4),
          }),
        },
        secondary,
        notes,
      };
    },
  });
}

export const windTurbineEngine = makeWindTurbineEngine(englishContext(en));
