"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeTaktTimeEngine } from "./engine";
import type { TaktTimeText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: TaktTimeText }) {
  const engine = useMemo(() => makeTaktTimeEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
