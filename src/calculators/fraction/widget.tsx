"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeFractionEngine } from "./engine";
import type { FractionText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: FractionText }) {
  const engine = useMemo(() => makeFractionEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
