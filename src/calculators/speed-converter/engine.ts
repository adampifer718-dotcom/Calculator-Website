import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { unitConverterEngine } from "@/calculators/shared/converter";
import { SPEED } from "@/lib/math/units";
import en, { type SpeedConverterText } from "./text/en";

export function makeSpeedConverterEngine(ctx: EngineContext<SpeedConverterText>) {
  return unitConverterEngine(ctx, SPEED, { value: 100, from: "kmh", to: "mph" });
}

export const speedConverterEngine = makeSpeedConverterEngine(englishContext(en));
