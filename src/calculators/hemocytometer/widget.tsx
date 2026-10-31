"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeHemocytometerEngine } from "./engine";
import type { HemocytometerText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: HemocytometerText }) {
  const engine = useMemo(() => makeHemocytometerEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
