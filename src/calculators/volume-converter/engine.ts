import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { unitConverterEngine } from "@/calculators/shared/converter";
import { VOLUME } from "@/lib/math/units";
import en, { type VolumeConverterText } from "./text/en";

export function makeVolumeConverterEngine(ctx: EngineContext<VolumeConverterText>) {
  return unitConverterEngine(ctx, VOLUME, { value: 1, from: "gal", to: "l" });
}

export const volumeConverterEngine = makeVolumeConverterEngine(englishContext(en));
