"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeConcreteEngine } from "./engine";
import type { ConcreteText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: ConcreteText }) {
  const engine = useMemo(() => makeConcreteEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
