"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeWaterFootprintEngine } from "./engine";
import type { WaterFootprintText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: WaterFootprintText }) {
  const engine = useMemo(() => makeWaterFootprintEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
