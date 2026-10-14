"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeGpaEngine } from "./engine";
import type { GpaText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: GpaText }) {
  const engine = useMemo(() => makeGpaEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
