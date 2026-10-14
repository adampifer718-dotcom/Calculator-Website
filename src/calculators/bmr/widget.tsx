"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeBmrEngine } from "./engine";
import type { BmrText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: BmrText }) {
  const engine = useMemo(() => makeBmrEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
