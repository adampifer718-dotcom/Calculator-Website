"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { kineticEnergyEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={kineticEnergyEngine} />;
}
