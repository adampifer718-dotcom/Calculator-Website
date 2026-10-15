"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeQuadraticEngine } from "./engine";
import type { QuadraticText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: QuadraticText }) {
  const engine = useMemo(() => makeQuadraticEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
