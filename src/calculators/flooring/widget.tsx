"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeFlooringEngine } from "./engine";
import type { FlooringText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: FlooringText }) {
  const engine = useMemo(() => makeFlooringEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
