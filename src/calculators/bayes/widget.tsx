"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeBayesEngine } from "./engine";
import type { BayesText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: BayesText }) {
  const engine = useMemo(() => makeBayesEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
