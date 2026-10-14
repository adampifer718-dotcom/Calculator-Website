"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeStandardDeviationEngine } from "./engine";
import type { StandardDeviationText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: StandardDeviationText }) {
  const engine = useMemo(() => makeStandardDeviationEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
