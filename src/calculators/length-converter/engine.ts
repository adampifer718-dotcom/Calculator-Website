import { unitConverterEngine } from "@/calculators/shared/converter";
import { LENGTH } from "@/lib/math/units";

export const lengthConverterEngine = unitConverterEngine(LENGTH, { value: 10, from: "km", to: "mi" }, "length");
