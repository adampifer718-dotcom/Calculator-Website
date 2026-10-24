"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeStairsEngine } from "./engine";
import type { StairsText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: StairsText }) {
  const engine = useMemo(() => makeStairsEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
