"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { recipeScalerEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={recipeScalerEngine} />;
}
