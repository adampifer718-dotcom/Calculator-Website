"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeProteinConcentrationEngine } from "./engine";
import type { ProteinConcentrationText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: ProteinConcentrationText }) {
  const engine = useMemo(() => makeProteinConcentrationEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
