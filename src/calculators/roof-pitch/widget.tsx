"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeRoofPitchEngine } from "./engine";
import type { RoofPitchText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: RoofPitchText }) {
  const engine = useMemo(() => makeRoofPitchEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
