"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeMortgageEngine } from "./engine";
import type { MortgageText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: MortgageText }) {
  const engine = useMemo(() => makeMortgageEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
