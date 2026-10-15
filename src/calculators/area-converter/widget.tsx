"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeAreaConverterEngine } from "./engine";
import type { AreaConverterText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: AreaConverterText }) {
  const engine = useMemo(() => makeAreaConverterEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
