"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeLengthConverterEngine } from "./engine";
import type { LengthConverterText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: LengthConverterText }) {
  const engine = useMemo(() => makeLengthConverterEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
