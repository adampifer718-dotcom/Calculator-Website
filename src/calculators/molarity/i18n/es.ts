import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MolarityText } from "../text/en";

const es: CalculatorTranslation<MolarityText> = {
  content: {
    title: "Calculadora de molaridad",
    shortTitle: "Molaridad",
    summary: "Calcula la concentración molar de una disolución a partir de la masa de soluto, su masa molar y el volumen.",
    metaTitle: "Calculadora de molaridad – Concentración molar (mol/L)",
    metaDescription:
      "Calcula la molaridad en mol/L a partir de la masa de soluto, su masa molar y el volumen de la disolución, con los moles y la concentración en milimolar.",
    keywords: ["molaridad", "calcular molaridad", "concentración molar", "mol/L", "moles de soluto", "disoluciones química"],
    intro: [
      "La molaridad es el número de moles de soluto por litro de disolución. Es la forma más habitual de expresar la concentración en los laboratorios de química.",
      "Introduce la masa que has pesado, la masa molar del soluto y el volumen final de la disolución.",
    ],
    howToUse: [
      "Introduce la masa de soluto en gramos.",
      "Introduce su masa molar en g/mol.",
      "Introduce el volumen final de la disolución y elige litros o mililitros.",
      "Consulta la molaridad y los moles de soluto.",
    ],
    formulas: [
      { title: "Moles", expression: "n = masa ÷ masa molar", explanation: "Da los moles a partir de los gramos." },
      { title: "Molaridad", expression: "M = n ÷ V", explanation: "V es el volumen de la disolución en litros." },
    ],
    examples: [
      { title: "58,44 g de NaCl en 1 L", steps: ["n = 58,44 ÷ 58,44 = 1 mol", "M = 1 ÷ 1 = 1 mol/L"] },
      { title: "5 g de glucosa en 250 mL", steps: ["n = 5 ÷ 180,16 ≈ 0,02775 mol", "M = 0,02775 ÷ 0,25 ≈ 0,111 mol/L"] },
    ],
    assumptions: [
      "El volumen es el volumen final de la disolución una vez disuelto el soluto.",
      "La masa molar debe corresponder a la forma exacta utilizada, incluida el agua de hidratación.",
    ],
    faqs: [
      {
        question: "¿Qué diferencia hay entre molaridad y molalidad?",
        answer: "La molaridad son los moles por litro de disolución; la molalidad, los moles por kilogramo de disolvente.",
      },
      {
        question: "¿Cómo preparo una disolución 1 M?",
        answer: "Disuelve tantos gramos de soluto como su masa molar y añade disolvente hasta que el volumen total sea de 1 litro.",
      },
      { question: "¿Qué significa mM?", answer: "Milimolar: una milésima de mol por litro." },
    ],
    sourcesUsedFor: ["Definición de molaridad y relación entre masa y moles."],
  },
  text: {
    mass: "Masa de soluto",
    molarMass: "Masa molar",
    molarMassHelp: "De la tabla periódica; p. ej., NaCl = 58,44 g/mol.",
    volume: "Volumen de la disolución",
    volumeUnit: "Unidad de volumen",
    volumeUnits: { L: "Litros (L)", mL: "Mililitros (mL)" },
    molarity: "Molaridad",
    amount: "Cantidad de soluto",
    millimolar: "En milimolar",
    note: "El volumen es el volumen final de la disolución, no el volumen de disolvente añadido.",
  },
};

export default es;
