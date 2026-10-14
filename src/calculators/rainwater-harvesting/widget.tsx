"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeRainwaterEngine } from "./engine";
import type { RainwaterText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: RainwaterText }) {
  const engine = useMemo(() => makeRainwaterEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
