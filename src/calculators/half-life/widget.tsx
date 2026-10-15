"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeHalfLifeEngine } from "./engine";
import type { HalfLifeText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: HalfLifeText }) {
  const engine = useMemo(() => makeHalfLifeEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
