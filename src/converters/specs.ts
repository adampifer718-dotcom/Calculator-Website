import type { ConverterSpec, LinearSpec } from "./types";
import { commonConverters } from "./units/common";
import { electricityConverters } from "./units/electricity";
import { engineeringConverters } from "./units/engineering";
import { EXISTING_CONVERTERS } from "./units/existing";
import { fluidsConverters } from "./units/fluids";
import { heatConverters } from "./units/heat";
import { lightConverters } from "./units/light";
import { magnetismConverters } from "./units/magnetism";
import { otherConverters } from "./units/other";
import { radiologyConverters } from "./units/radiology";
import { extraLinearConverters } from "./units/extra";
import { caseConverter, currency, numbers, toolConverters } from "./units/special";

/**
 * Every unit converter, in directory order. Client-safe: unit data only, no
 * page content. Converters with `calculatorSlug` are served by their existing
 * calculator page.
 */
export const ALL_CONVERTERS: readonly ConverterSpec[] = [
  ...EXISTING_CONVERTERS,
  ...commonConverters,
  currency,
  caseConverter,
  numbers,
  ...engineeringConverters,
  ...heatConverters,
  ...fluidsConverters,
  extraLinearConverters.glucose,
  extraLinearConverters.waterHardness,
  ...lightConverters,
  ...electricityConverters,
  extraLinearConverters.wireGauge,
  extraLinearConverters.rfPower,
  ...magnetismConverters,
  ...radiologyConverters,
  ...otherConverters,
  extraLinearConverters.astronomical,
  extraLinearConverters.partsPer,
  extraLinearConverters.paperWeight,
  ...toolConverters,
];

export function getSpec(id: string): ConverterSpec | undefined {
  return ALL_CONVERTERS.find((c) => c.id === id);
}

export function isLinear(spec: ConverterSpec): spec is LinearSpec {
  return spec.kind === "linear";
}
