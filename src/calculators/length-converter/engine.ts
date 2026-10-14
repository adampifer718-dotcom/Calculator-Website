import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { unitConverterEngine } from "@/calculators/shared/converter";
import { LENGTH } from "@/lib/math/units";
import en, { type LengthConverterText } from "./text/en";

export function makeLengthConverterEngine(ctx: EngineContext<LengthConverterText>) {
  return unitConverterEngine(ctx, LENGTH, { value: 10, from: "km", to: "mi" });
}

export const lengthConverterEngine = makeLengthConverterEngine(englishContext(en));
