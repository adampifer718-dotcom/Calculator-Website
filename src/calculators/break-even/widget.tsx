"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeBreakEvenEngine } from "./engine";
import type { BreakEvenText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: BreakEvenText }) {
  const engine = useMemo(() => makeBreakEvenEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
