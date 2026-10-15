"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeUnitPriceEngine } from "./engine";
import type { UnitPriceText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: UnitPriceText }) {
  const engine = useMemo(() => makeUnitPriceEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
