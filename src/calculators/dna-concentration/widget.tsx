"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeDnaConcentrationEngine } from "./engine";
import type { DnaConcentrationText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: DnaConcentrationText }) {
  const engine = useMemo(() => makeDnaConcentrationEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
