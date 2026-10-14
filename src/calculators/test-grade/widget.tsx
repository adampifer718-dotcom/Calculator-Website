"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeTestGradeEngine } from "./engine";
import type { TestGradeText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: TestGradeText }) {
  const engine = useMemo(() => makeTestGradeEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
