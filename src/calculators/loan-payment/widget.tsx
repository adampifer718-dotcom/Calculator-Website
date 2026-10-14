"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { loanPaymentEngine } from "./engine";

export default function Widget() {
  return <CalculatorForm engine={loanPaymentEngine} />;
}
