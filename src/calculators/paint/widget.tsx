"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makePaintEngine } from "./engine";
import type { PaintText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: PaintText }) {
  const engine = useMemo(() => makePaintEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
