"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { dilutionEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={dilutionEngine} />;
}
