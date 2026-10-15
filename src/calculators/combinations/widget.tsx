"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeCombinationsEngine } from "./engine";
import type { CombinationsText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: CombinationsText }) {
  const engine = useMemo(() => makeCombinationsEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
