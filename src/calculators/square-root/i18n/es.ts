import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SquareRootText } from "../text/en";

const es: CalculatorTranslation<SquareRootText> = {
  content: {
    title: "Calculadora de raíz cuadrada",
    shortTitle: "Raíz cuadrada",
    summary: "Calcula la raíz cuadrada o cúbica de un número y comprueba si es un cuadrado o un cubo perfecto.",
    metaTitle: "Calculadora de raíz cuadrada – Raíces cuadradas y cúbicas",
    metaDescription:
      "Calcula la raíz cuadrada o cúbica de cualquier número, comprueba si es un cuadrado o un cubo perfecto y verifica el resultado elevándolo de nuevo.",
    keywords: ["raíz cuadrada", "calcular raíz cuadrada", "raíz cúbica", "cuadrado perfecto", "radical", "sqrt"],
    intro: [
      "La raíz cuadrada de x es el número que, multiplicado por sí mismo, da x. √144 = 12 porque 12 × 12 = 144.",
      "Cambia a raíz cúbica para hallar el número que da x al multiplicarlo por sí mismo tres veces. Se admiten raíces cúbicas de números negativos.",
    ],
    howToUse: [
      "Elige raíz cuadrada o raíz cúbica.",
      "Introduce el número.",
      "Consulta la raíz y si el número es un cuadrado o un cubo perfecto.",
    ],
    formulas: [
      { title: "Raíz cuadrada", expression: "√x = x^(1/2)", explanation: "Definida para x ≥ 0 en los números reales." },
      { title: "Raíz cúbica", expression: "∛x = x^(1/3)", explanation: "Definida para cualquier número real." },
    ],
    examples: [
      {
        title: "Raíz cuadrada de 144",
        steps: ["12 × 12 = 144", "√144 = 12"],
      },
      {
        title: "Raíz cuadrada de 2",
        steps: ["2 no es un cuadrado perfecto", "√2 ≈ 1,41421356237"],
      },
      {
        title: "Raíz cúbica de −27",
        steps: ["(−3) × (−3) × (−3) = −27", "∛−27 = −3"],
      },
    ],
    assumptions: [
      "Solo se muestran raíces reales; los números negativos no tienen raíz cuadrada real.",
      "Los resultados se muestran con 12 cifras significativas.",
    ],
    faqs: [
      {
        question: "¿Qué es un cuadrado perfecto?",
        answer: "Un número entero cuya raíz cuadrada también es un número entero, como 1, 4, 9, 16 o 25.",
      },
      {
        question: "¿La raíz cuadrada tiene dos resultados?",
        answer: "Todo número positivo tiene una raíz cuadrada positiva y otra negativa. La calculadora muestra la raíz positiva (principal).",
      },
      {
        question: "¿Puedo calcular la raíz cúbica de un número negativo?",
        answer: "Sí. ∛−8 = −2, porque (−2)³ = −8.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    kind: "Raíz",
    kinds: { square: "Raíz cuadrada (√x)", cube: "Raíz cúbica (∛x)" },
    value: "Número (x)",
    negative: "Los números negativos no tienen raíz cuadrada real.",
    squareRoot: "Raíz cuadrada",
    cubeRoot: "Raíz cúbica",
    perfectSquare: "¿Cuadrado perfecto?",
    perfectCube: "¿Cubo perfecto?",
    yes: "Sí",
    no: "No",
    checkSquare: "Comprobación: raíz²",
    checkCube: "Comprobación: raíz³",
    principalNote: "−{root} también es raíz cuadrada; la calculadora muestra la raíz principal (positiva).",
  },
};

export default es;
