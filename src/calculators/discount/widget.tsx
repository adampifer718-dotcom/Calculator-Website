"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { discountEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={discountEngine} />;
}
