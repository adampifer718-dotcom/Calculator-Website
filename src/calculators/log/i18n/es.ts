import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { LogText } from "../text/en";

const es: CalculatorTranslation<LogText> = {
  content: {
    title: "Calculadora de logaritmos",
    shortTitle: "Logaritmo",
    summary: "Calcula logaritmos en base 10, en base e (logaritmo natural), en base 2 o en cualquier otra base.",
    metaTitle: "Calculadora de logaritmos – Logaritmo en cualquier base",
    metaDescription:
      "Calcula el logaritmo en base 10, el logaritmo natural (ln), el logaritmo en base 2 o en cualquier base, con la fórmula del cambio de base y ejemplos resueltos.",
    keywords: ["calculadora de logaritmos", "logaritmo", "logaritmo natural", "ln", "logaritmo en base 2", "log10", "cambio de base"],
    intro: [
      "Un logaritmo responde a la pregunta: ¿a qué potencia hay que elevar la base para obtener este número? log₁₀(1000) = 3 porque 10³ = 1000.",
      "Elige una base habitual o introduce la tuya. También se muestran los logaritmos natural, decimal y binario.",
    ],
    howToUse: [
      "Introduce un número positivo x.",
      "Elige la base, o selecciona «Otra base» e introdúcela.",
      "Consulta el logaritmo y los valores de ln, log₁₀ y log₂.",
    ],
    formulas: [
      { title: "Definición", expression: "log_b(x) = y  significa  bʸ = x", explanation: "El número y la base deben ser positivos, y la base no puede ser 1." },
      { title: "Cambio de base", expression: "log_b(x) = ln(x) ÷ ln(b)", explanation: "Cualquier logaritmo puede calcularse a partir de logaritmos naturales." },
    ],
    examples: [
      {
        title: "log₁₀ de 1000",
        steps: ["10³ = 1000", "Por tanto, log₁₀(1000) = 3"],
      },
      {
        title: "log₂ de 8",
        steps: ["2³ = 8", "Por tanto, log₂(8) = 3"],
      },
      {
        title: "Logaritmo en base 3 de 81",
        steps: ["ln(81) ÷ ln(3) = 4,394 ÷ 1,099", "= 4, porque 3⁴ = 81"],
      },
    ],
    assumptions: [
      "Los logaritmos solo están definidos para números positivos y bases positivas distintas de 1.",
      "Los resultados se muestran con 12 cifras significativas.",
    ],
    faqs: [
      {
        question: "¿Qué diferencia hay entre log y ln?",
        answer: "log suele indicar base 10 y ln indica base e (aproximadamente 2,71828), es decir, el logaritmo natural o neperiano.",
      },
      {
        question: "¿Por qué no puedo calcular el logaritmo de un número negativo?",
        answer: "Ninguna potencia real de una base positiva da un número negativo ni cero, así que el logaritmo no está definido en los números reales.",
      },
      {
        question: "¿Para qué se usa el logaritmo en base 2?",
        answer: "Cuenta duplicaciones y aparece en informática, por ejemplo para saber cuántos bits hacen falta para representar un valor.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    value: "Número (x)",
    base: "Base",
    bases: { ten: "10 (logaritmo decimal)", e: "e (logaritmo natural, ln)", two: "2 (logaritmo binario)", custom: "Otra base" },
    customBase: "Base personalizada (b)",
    baseOne: "La base no puede ser 1.",
    primaryNatural: "Logaritmo de x",
    primaryBase: "Logaritmo en base {base} de x",
    caption: "{base} elevado a esta potencia es igual a {value}.",
    ln: "Logaritmo natural (ln x)",
    log10: "Logaritmo decimal (log₁₀ x)",
    log2: "Logaritmo binario (log₂ x)",
  },
};

export default es;
