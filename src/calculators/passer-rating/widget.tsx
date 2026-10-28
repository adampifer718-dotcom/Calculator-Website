"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makePasserRatingEngine } from "./engine";
import type { PasserRatingText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: PasserRatingText }) {
  const engine = useMemo(() => makePasserRatingEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
