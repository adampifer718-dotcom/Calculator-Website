"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeDensityEngine } from "./engine";
import type { DensityText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: DensityText }) {
  const engine = useMemo(() => makeDensityEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
