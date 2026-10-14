"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makePythagoreanEngine } from "./engine";
import type { PythagoreanText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: PythagoreanText }) {
  const engine = useMemo(() => makePythagoreanEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
