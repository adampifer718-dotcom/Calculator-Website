"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { profitMarginEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={profitMarginEngine} />;
}
