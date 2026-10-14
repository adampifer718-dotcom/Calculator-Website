"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makePayConverterEngine } from "./engine";
import type { PayConverterText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: PayConverterText }) {
  const engine = useMemo(() => makePayConverterEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
