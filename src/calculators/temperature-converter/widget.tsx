"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { temperatureConverterEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={temperatureConverterEngine} />;
}
