import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WeightConverterText } from "../text/en";

const es: CalculatorTranslation<WeightConverterText> = {
  content: {
    title: "Calculadora de conversión de peso",
    shortTitle: "Peso",
    summary: "Convierte entre miligramos, gramos, kilogramos, toneladas, onzas, libras y stones.",
    metaTitle: "Calculadora de conversión de peso – kg, lb, oz, g y stone",
    metaDescription:
      "Convierte el peso (masa) entre kilogramos, gramos, miligramos, toneladas, libras, onzas y stones con la definición internacional exacta de la libra.",
    keywords: ["convertir libras a kilos", "kg a libras", "onzas a gramos", "conversor de peso", "stone a kg", "conversión de unidades de masa"],
    intro: [
      "Convierte un peso entre unidades métricas e imperiales. En sentido estricto son unidades de masa, que es lo que indican las básculas.",
      "La libra se define exactamente como 0,45359237 kg, así que todas las conversiones son exactas antes de redondearlas para mostrarlas.",
    ],
    howToUse: [
      "Introduce el valor.",
      "Elige las unidades de origen y de destino.",
      "Consulta el resultado y la tabla completa.",
    ],
    formulas: [
      {
        title: "Conversión a través del kilogramo",
        expression: "resultado = valor × (kg por unidad de origen) ÷ (kg por unidad de destino)",
        explanation: "Cada unidad se define como un número fijo de kilogramos.",
      },
      {
        title: "Factores clave",
        expression: "1 lb = 0,45359237 kg\n1 oz = 1/16 lb = 28,349523125 g\n1 st = 14 lb\n1 t = 1000 kg",
        explanation: "Las onzas son onzas avoirdupois, las que se usan para alimentos y peso corporal.",
      },
    ],
    examples: [
      { title: "150 libras a kilogramos", steps: ["150 × 0,45359237", "≈ 68,04 kg"] },
      { title: "1 kilogramo a libras", steps: ["1 ÷ 0,45359237", "≈ 2,2046 lb"] },
    ],
    assumptions: [
      "Las onzas son avoirdupois; no se incluyen las onzas troy (usadas para metales preciosos).",
      "Las toneladas son toneladas métricas (1000 kg), no toneladas cortas de EE. UU. ni toneladas largas británicas.",
    ],
    faqs: [
      { question: "¿Cuántas libras tiene un kilogramo?", answer: "Unas 2,2046 libras." },
      { question: "¿Cuántas onzas tiene una libra?", answer: "Exactamente 16 onzas avoirdupois." },
      { question: "¿Cuánto es un stone?", answer: "14 libras, unos 6,35 kg." },
    ],
    sourcesUsedFor: ["Definición exacta de la libra y de las unidades relacionadas en kilogramos."],
  },
  text: {
    value: "Valor",
    from: "De",
    to: "A",
    unitNames: {
      mg: "Miligramos",
      g: "Gramos",
      kg: "Kilogramos",
      t: "Toneladas métricas",
      oz: "Onzas (avoirdupois)",
      lb: "Libras",
      st: "Stones",
    },
    primary: "{value} {symbol} en {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} en todas las unidades de masa",
    tableUnit: "Unidad",
    tableValue: "Valor",
    note: "Los resultados se muestran con 10 cifras significativas.",
  },
};

export default es;
