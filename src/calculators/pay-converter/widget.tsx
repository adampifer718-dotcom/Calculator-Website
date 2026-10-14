"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { payConverterEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={payConverterEngine} />;
}
