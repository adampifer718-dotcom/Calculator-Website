"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeCreditCardPayoffEngine } from "./engine";
import type { CreditCardPayoffText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: CreditCardPayoffText }) {
  const engine = useMemo(() => makeCreditCardPayoffEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
