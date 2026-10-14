"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { lengthConverterEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={lengthConverterEngine} />;
}
