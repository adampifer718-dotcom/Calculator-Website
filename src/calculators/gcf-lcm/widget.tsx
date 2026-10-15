"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeGcfLcmEngine } from "./engine";
import type { GcfLcmText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: GcfLcmText }) {
  const engine = useMemo(() => makeGcfLcmEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
