"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeMolarMassEngine } from "./engine";
import type { MolarMassText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: MolarMassText }) {
  const engine = useMemo(() => makeMolarMassEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
