"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeCaloriesBurnedEngine } from "./engine";
import type { CaloriesBurnedText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: CaloriesBurnedText }) {
  const engine = useMemo(() => makeCaloriesBurnedEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
