"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeMeanMedianModeEngine } from "./engine";
import type { MeanMedianModeText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: MeanMedianModeText }) {
  const engine = useMemo(() => makeMeanMedianModeEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
