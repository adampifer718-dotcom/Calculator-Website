"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeAccelerationEngine } from "./engine";
import type { AccelerationText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: AccelerationText }) {
  const engine = useMemo(() => makeAccelerationEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
