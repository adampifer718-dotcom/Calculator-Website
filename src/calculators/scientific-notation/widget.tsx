"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { scientificNotationEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={scientificNotationEngine} />;
}
