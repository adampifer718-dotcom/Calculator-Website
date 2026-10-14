"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { runningPaceEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={runningPaceEngine} />;
}
