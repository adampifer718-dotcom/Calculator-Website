"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { weightConverterEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={weightConverterEngine} />;
}
