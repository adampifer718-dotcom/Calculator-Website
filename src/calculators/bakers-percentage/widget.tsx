"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeBakersPercentageEngine } from "./engine";
import type { BakersPercentageText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: BakersPercentageText }) {
  const engine = useMemo(() => makeBakersPercentageEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
