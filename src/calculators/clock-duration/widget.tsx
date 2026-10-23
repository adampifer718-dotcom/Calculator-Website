"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeClockDurationEngine } from "./engine";
import type { ClockDurationText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: ClockDurationText }) {
  const engine = useMemo(() => makeClockDurationEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
