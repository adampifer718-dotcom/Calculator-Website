"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeLinearRegressionEngine } from "./engine";
import type { LinearRegressionText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: LinearRegressionText }) {
  const engine = useMemo(() => makeLinearRegressionEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
