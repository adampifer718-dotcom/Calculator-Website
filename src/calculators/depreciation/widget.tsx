"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeDepreciationEngine } from "./engine";
import type { DepreciationText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: DepreciationText }) {
  const engine = useMemo(() => makeDepreciationEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
