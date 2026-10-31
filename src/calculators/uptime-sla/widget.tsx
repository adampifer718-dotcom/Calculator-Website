"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeUptimeSlaEngine } from "./engine";
import type { UptimeSlaText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: UptimeSlaText }) {
  const engine = useMemo(() => makeUptimeSlaEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
