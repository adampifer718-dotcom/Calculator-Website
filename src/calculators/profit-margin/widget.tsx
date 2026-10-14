"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeProfitMarginEngine } from "./engine";
import type { ProfitMarginText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: ProfitMarginText }) {
  const engine = useMemo(() => makeProfitMarginEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
