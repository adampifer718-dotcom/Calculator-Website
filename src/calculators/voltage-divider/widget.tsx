"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeVoltageDividerEngine } from "./engine";
import type { VoltageDividerText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: VoltageDividerText }) {
  const engine = useMemo(() => makeVoltageDividerEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
