"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { squareFootageEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={squareFootageEngine} />;
}
