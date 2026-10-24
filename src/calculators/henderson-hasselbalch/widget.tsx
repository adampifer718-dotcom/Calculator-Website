"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeHendersonHasselbalchEngine } from "./engine";
import type { HendersonHasselbalchText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: HendersonHasselbalchText }) {
  const engine = useMemo(() => makeHendersonHasselbalchEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
