"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeFinalGradeEngine } from "./engine";
import type { FinalGradeText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: FinalGradeText }) {
  const engine = useMemo(() => makeFinalGradeEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
