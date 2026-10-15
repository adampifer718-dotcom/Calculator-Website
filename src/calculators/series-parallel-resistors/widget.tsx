"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeResistorsEngine } from "./engine";
import type { ResistorsText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: ResistorsText }) {
  const engine = useMemo(() => makeResistorsEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
