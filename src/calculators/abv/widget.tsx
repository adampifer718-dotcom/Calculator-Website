"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeAbvEngine } from "./engine";
import type { AbvText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: AbvText }) {
  const engine = useMemo(() => makeAbvEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
