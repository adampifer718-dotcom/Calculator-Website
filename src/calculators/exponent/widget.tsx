"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { exponentEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={exponentEngine} />;
}
