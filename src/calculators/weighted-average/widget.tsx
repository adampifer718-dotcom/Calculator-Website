"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeWeightedAverageEngine } from "./engine";
import type { WeightedAverageText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: WeightedAverageText }) {
  const engine = useMemo(() => makeWeightedAverageEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
