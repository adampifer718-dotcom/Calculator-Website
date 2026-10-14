"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { ohmsLawEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={ohmsLawEngine} />;
}
