"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeAgeEngine } from "./engine";
import type { AgeText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: AgeText }) {
  const engine = useMemo(() => makeAgeEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
