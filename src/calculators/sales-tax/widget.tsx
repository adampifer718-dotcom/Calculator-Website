"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { salesTaxEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={salesTaxEngine} />;
}
