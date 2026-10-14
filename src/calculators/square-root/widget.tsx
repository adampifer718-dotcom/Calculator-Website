"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeSquareRootEngine } from "./engine";
import type { SquareRootText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: SquareRootText }) {
  const engine = useMemo(() => makeSquareRootEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
