import { unitConverterEngine } from "@/calculators/shared/converter";
import { MASS } from "@/lib/math/units";

export const weightConverterEngine = unitConverterEngine(MASS, { value: 150, from: "lb", to: "kg" }, "mass");
