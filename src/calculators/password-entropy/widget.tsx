"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makePasswordEntropyEngine } from "./engine";
import type { PasswordEntropyText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: PasswordEntropyText }) {
  const engine = useMemo(() => makePasswordEntropyEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
