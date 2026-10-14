"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeFuelCostEngine } from "./engine";
import type { FuelCostText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: FuelCostText }) {
  const engine = useMemo(() => makeFuelCostEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
