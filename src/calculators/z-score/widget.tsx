"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeZScoreEngine } from "./engine";
import type { ZScoreText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: ZScoreText }) {
  const engine = useMemo(() => makeZScoreEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
