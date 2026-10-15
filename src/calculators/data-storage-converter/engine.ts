import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { unitConverterEngine } from "@/calculators/shared/converter";
import { DATA_STORAGE } from "@/lib/math/units";
import en, { type DataStorageConverterText } from "./text/en";

export function makeDataStorageConverterEngine(ctx: EngineContext<DataStorageConverterText>) {
  return unitConverterEngine(ctx, DATA_STORAGE, { value: 500, from: "GB", to: "GiB" });
}

export const dataStorageConverterEngine = makeDataStorageConverterEngine(englishContext(en));
