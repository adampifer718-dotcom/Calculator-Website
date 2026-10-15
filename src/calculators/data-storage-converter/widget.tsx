"use client";

import { useMemo } from "react";
import { engineContext } from "@/calculators/framework/i18n";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import type { Locale } from "@/i18n/config";
import { makeDataStorageConverterEngine } from "./engine";
import type { DataStorageConverterText } from "./text/en";

export default function Widget({ locale, text }: { locale: Locale; text: DataStorageConverterText }) {
  const engine = useMemo(() => makeDataStorageConverterEngine(engineContext(locale, text)), [locale, text]);
  return <CalculatorForm engine={engine} />;
}
