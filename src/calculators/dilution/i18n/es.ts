import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DilutionText } from "../text/en";

const es: CalculatorTranslation<DilutionText> = {
  content: {
    title: "Calculadora de diluciones (C₁V₁ = C₂V₂)",
    shortTitle: "Diluciones",
    summary: "Resuelve C₁V₁ = C₂V₂ para hallar el volumen de solución madre, la concentración final, el volumen final o la concentración madre.",
    metaTitle: "Calculadora de diluciones – C1V1 = C2V2",
    metaDescription:
      "Resuelve la ecuación de dilución C1V1 = C2V2 para cualquier valor: volumen de solución madre necesario, concentración final, volumen final o concentración madre.",
    keywords: ["calculadora de diluciones", "c1v1=c2v2", "fórmula de dilución", "solución madre", "concentración", "preparar disoluciones", "química"],
    intro: [
      "Al diluir una disolución, la cantidad de soluto no cambia, por lo que C₁V₁ = C₂V₂.",
      "Elige la incógnita e introduce los otros tres valores para planificar una dilución.",
    ],
    howToUse: [
      "Elige qué quieres calcular; normalmente, el volumen de solución madre necesario.",
      "Introduce los otros tres valores con las mismas unidades a ambos lados.",
      "Consulta el resultado y cuánto disolvente debes añadir.",
    ],
    formulas: [
      {
        title: "Ecuación de dilución",
        expression: "C₁ × V₁ = C₂ × V₂",
        explanation: "C₁ y V₁ son la concentración y el volumen de la solución madre; C₂ y V₂, los finales.",
      },
      { title: "Disolvente que añadir", expression: "disolvente = V₂ − V₁", explanation: "Añade disolvente suficiente para alcanzar el volumen final." },
    ],
    examples: [
      {
        title: "Preparar 100 mL a 0,5 M a partir de una solución madre 2 M",
        steps: ["V₁ = 0,5 × 100 ÷ 2", "= 25 mL de solución madre, más 75 mL de disolvente"],
      },
      {
        title: "10 mL a 1 M diluidos hasta 250 mL",
        steps: ["C₂ = 1 × 10 ÷ 250", "= 0,04 M"],
      },
    ],
    assumptions: [
      "Las concentraciones deben estar en la misma unidad, y los volúmenes también.",
      "Supone que los volúmenes son aditivos, una buena aproximación para disoluciones acuosas diluidas.",
    ],
    faqs: [
      {
        question: "¿Qué significa C1V1 = C2V2?",
        answer: "Que la cantidad de soluto antes de la dilución es igual a la de después: el producto de la concentración por el volumen se mantiene constante.",
      },
      { question: "¿Puedo usar porcentajes o mg/mL?", answer: "Sí, siempre que C₁ y C₂ estén en la misma unidad." },
      { question: "¿Qué es el factor de dilución?", answer: "La razón C₁ ÷ C₂. Una dilución 1:10 reduce la concentración diez veces." },
    ],
    sourcesUsedFor: ["Relación de dilución C₁V₁ = C₂V₂."],
  },
  text: {
    solve: "Calcular",
    solveOptions: {
      v1: "Volumen de solución madre necesario (V₁)",
      c2: "Concentración final (C₂)",
      v2: "Volumen final (V₂)",
      c1: "Concentración de la solución madre (C₁)",
    },
    c1: "Concentración de la solución madre (C₁)",
    v1: "Volumen de solución madre (V₁)",
    c2: "Concentración final (C₂)",
    v2: "Volumen final (V₂)",
    tooConcentrated: "Una dilución no puede estar más concentrada que la solución madre (C₂ ≤ C₁).",
    stockTooLarge: "El volumen de solución madre no puede superar el volumen final (V₁ ≤ V₂).",
    results: {
      c1: "Concentración de la solución madre (C₁)",
      v1: "Volumen de solución madre necesario (V₁)",
      c2: "Concentración final (C₂)",
      v2: "Volumen final (V₂)",
    },
    caption: "En las mismas unidades que los datos correspondientes.",
    solvent: "Disolvente que añadir (V₂ − V₁)",
    factor: "Factor de dilución (C₁ ÷ C₂)",
    note: "Usa la misma unidad de concentración para C₁ y C₂, y la misma unidad de volumen para V₁ y V₂.",
  },
};

export default es;
