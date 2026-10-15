"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeSampleSizeEngine } from "./engine";
import type { SampleSizeText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: SampleSizeText }) {
  const engine = useMemo(() => makeSampleSizeEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
