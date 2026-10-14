"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { logEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={logEngine} />;
}
