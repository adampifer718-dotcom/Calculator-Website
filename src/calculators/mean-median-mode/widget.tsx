"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { meanMedianModeEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={meanMedianModeEngine} />;
}
