"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeSigFigEngine } from "./engine";
import type { SigFigText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: SigFigText }) {
  const engine = useMemo(() => makeSigFigEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
