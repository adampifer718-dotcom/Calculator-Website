import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { unitConverterEngine } from "@/calculators/shared/converter";
import { AREA } from "@/lib/math/units";
import en, { type AreaConverterText } from "./text/en";

export function makeAreaConverterEngine(ctx: EngineContext<AreaConverterText>) {
  return unitConverterEngine(ctx, AREA, { value: 1, from: "acre", to: "m2" });
}

export const areaConverterEngine = makeAreaConverterEngine(englishContext(en));
