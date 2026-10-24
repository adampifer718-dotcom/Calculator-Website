"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeCarCo2Engine } from "./engine";
import type { CarCo2Text } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: CarCo2Text }) {
  const engine = useMemo(() => makeCarCo2Engine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
