"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makePercentageIncreaseEngine } from "./engine";
import type { PercentageIncreaseText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: PercentageIncreaseText }) {
  const engine = useMemo(() => makePercentageIncreaseEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
