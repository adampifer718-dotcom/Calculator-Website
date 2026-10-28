"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeFertilizerEngine } from "./engine";
import type { FertilizerText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: FertilizerText }) {
  const engine = useMemo(() => makeFertilizerEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
