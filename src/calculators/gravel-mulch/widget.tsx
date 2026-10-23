"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeGravelMulchEngine } from "./engine";
import type { GravelMulchText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: GravelMulchText }) {
  const engine = useMemo(() => makeGravelMulchEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
