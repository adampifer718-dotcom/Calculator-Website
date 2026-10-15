"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeSpeedConverterEngine } from "./engine";
import type { SpeedConverterText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: SpeedConverterText }) {
  const engine = useMemo(() => makeSpeedConverterEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
