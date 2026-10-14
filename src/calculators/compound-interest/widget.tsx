"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeCompoundInterestEngine } from "./engine";
import type { CompoundInterestText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: CompoundInterestText }) {
  const engine = useMemo(() => makeCompoundInterestEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
