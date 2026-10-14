"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeSalesTaxEngine } from "./engine";
import type { SalesTaxText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: SalesTaxText }) {
  const engine = useMemo(() => makeSalesTaxEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
