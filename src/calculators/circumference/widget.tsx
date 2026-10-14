"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { circumferenceEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={circumferenceEngine} />;
}
