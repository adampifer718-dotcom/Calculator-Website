"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { rainwaterEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={rainwaterEngine} />;
}
