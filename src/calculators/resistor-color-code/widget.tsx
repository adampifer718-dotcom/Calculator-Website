"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeResistorColorCodeEngine } from "./engine";
import type { ResistorColorCodeText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: ResistorColorCodeText }) {
  const engine = useMemo(() => makeResistorColorCodeEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
