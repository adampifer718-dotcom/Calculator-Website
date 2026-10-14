import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { unitConverterEngine } from "@/calculators/shared/converter";
import { MASS } from "@/lib/math/units";
import en, { type WeightConverterText } from "./text/en";

export function makeWeightConverterEngine(ctx: EngineContext<WeightConverterText>) {
  return unitConverterEngine(ctx, MASS, { value: 150, from: "lb", to: "kg" });
}

export const weightConverterEngine = makeWeightConverterEngine(englishContext(en));
