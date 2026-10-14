"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeMolarityEngine } from "./engine";
import type { MolarityText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: MolarityText }) {
  const engine = useMemo(() => makeMolarityEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
