"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeRaceTimePredictorEngine } from "./engine";
import type { RaceTimePredictorText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: RaceTimePredictorText }) {
  const engine = useMemo(() => makeRaceTimePredictorEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
