"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeScientificNotationEngine } from "./engine";
import type { ScientificNotationText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: ScientificNotationText }) {
  const engine = useMemo(() => makeScientificNotationEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
