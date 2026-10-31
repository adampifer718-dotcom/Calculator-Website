"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeShannonIndexEngine } from "./engine";
import type { ShannonIndexText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: ShannonIndexText }) {
  const engine = useMemo(() => makeShannonIndexEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
