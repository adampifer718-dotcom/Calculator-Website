import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { LengthConverterText } from "../text/en";

const es: CalculatorTranslation<LengthConverterText> = {
  content: {
    title: "Calculadora de conversión de longitud",
    shortTitle: "Longitud",
    summary: "Convierte entre milímetros, centímetros, metros, kilómetros, pulgadas, pies, yardas, millas y millas náuticas.",
    metaTitle: "Calculadora de conversión de longitud – Métrico e imperial",
    metaDescription:
      "Convierte longitudes entre unidades métricas e imperiales: mm, cm, m, km, pulgadas, pies, yardas, millas y millas náuticas, con factores de conversión exactos.",
    keywords: ["conversor de longitud", "convertir unidades de longitud", "km a millas", "pies a metros", "pulgadas a cm", "conversor de unidades"],
    intro: [
      "Convierte cualquier longitud entre nueve unidades habituales. La tabla muestra tu valor en todas las unidades a la vez.",
      "Todos los factores son exactos por definición: una pulgada mide exactamente 2,54 cm y una milla, exactamente 1609,344 m.",
    ],
    howToUse: [
      "Introduce el valor.",
      "Elige la unidad de origen y la unidad a la que quieres convertir.",
      "Consulta el resultado o usa la tabla para ver todas las unidades.",
    ],
    formulas: [
      {
        title: "Conversión a través del metro",
        expression: "resultado = valor × (metros por unidad de origen) ÷ (metros por unidad de destino)",
        explanation: "Cada unidad se define como un número fijo de metros.",
      },
      {
        title: "Factores clave",
        expression: "1 in = 0,0254 m\n1 ft = 0,3048 m\n1 yd = 0,9144 m\n1 mi = 1609,344 m\n1 nmi = 1852 m",
        explanation: "Valores exactos del acuerdo internacional de la yarda y la libra de 1959 y del SI.",
      },
    ],
    examples: [
      {
        title: "10 kilómetros a millas",
        steps: ["10 × 1000 m = 10.000 m", "10.000 ÷ 1609,344 ≈ 6,2137 mi"],
      },
      {
        title: "6 pies a metros",
        steps: ["6 × 0,3048", "= 1,8288 m"],
      },
    ],
    assumptions: [
      "Usa las unidades internacionales: no se incluye el pie topográfico de EE. UU., que difiere en unas 2 partes por millón.",
      "Los resultados se muestran con 10 cifras significativas.",
    ],
    faqs: [
      { question: "¿Cuántos pies tiene una milla?", answer: "Exactamente 5280 pies." },
      { question: "¿Cómo convierto pulgadas a centímetros?", answer: "Multiplica por 2,54. Por ejemplo, 12 in × 2,54 = 30,48 cm." },
      { question: "¿Qué es una milla náutica?", answer: "Una unidad que se usa en navegación marítima y aérea, definida como exactamente 1852 metros." },
    ],
    sourcesUsedFor: ["Definiciones exactas en metros de la pulgada, el pie, la yarda, la milla y la milla náutica."],
  },
  text: {
    value: "Valor",
    from: "De",
    to: "A",
    unitNames: {
      mm: "Milímetros",
      cm: "Centímetros",
      m: "Metros",
      km: "Kilómetros",
      in: "Pulgadas",
      ft: "Pies",
      yd: "Yardas",
      mi: "Millas",
      nmi: "Millas náuticas",
    },
    primary: "{value} {symbol} en {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} en todas las unidades de longitud",
    tableUnit: "Unidad",
    tableValue: "Valor",
    note: "Los resultados se muestran con 10 cifras significativas.",
  },
};

export default es;
