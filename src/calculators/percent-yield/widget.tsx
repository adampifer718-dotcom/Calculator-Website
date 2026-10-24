"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makePercentYieldEngine } from "./engine";
import type { PercentYieldText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: PercentYieldText }) {
  const engine = useMemo(() => makePercentYieldEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
