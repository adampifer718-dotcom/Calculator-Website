"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makePercentageEngine } from "./engine";
import type { PercentageText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: PercentageText }) {
  const engine = useMemo(() => makePercentageEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
