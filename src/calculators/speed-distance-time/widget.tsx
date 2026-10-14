"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { speedDistanceTimeEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={speedDistanceTimeEngine} />;
}
