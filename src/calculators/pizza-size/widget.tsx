"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makePizzaSizeEngine } from "./engine";
import type { PizzaSizeText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: PizzaSizeText }) {
  const engine = useMemo(() => makePizzaSizeEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
