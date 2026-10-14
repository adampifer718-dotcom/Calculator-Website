"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeDateDurationEngine } from "./engine";
import type { DateDurationText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: DateDurationText }) {
  const engine = useMemo(() => makeDateDurationEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
