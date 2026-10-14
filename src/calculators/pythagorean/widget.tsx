"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { pythagoreanEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={pythagoreanEngine} />;
}
