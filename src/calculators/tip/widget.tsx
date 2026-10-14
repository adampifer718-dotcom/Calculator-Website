"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeTipEngine } from "./engine";
import type { TipText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: TipText }) {
  const engine = useMemo(() => makeTipEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
