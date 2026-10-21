import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WeightConverterText } from "../text/en";

const pt: CalculatorTranslation<WeightConverterText> = {
  content: {
    title: "Conversor de peso",
    shortTitle: "Peso",
    summary: "Converta entre miligramas, gramas, quilogramas, toneladas, onças, libras e stones.",
    metaTitle: "Conversor de peso – kg, lb, oz, g e stone",
    metaDescription:
      "Converta peso (massa) entre quilogramas, gramas, miligramas, toneladas, libras, onças e stones com a definição exata da libra internacional.",
    keywords: ["peso", "massa", "kg para lb", "libras para kg", "onças para gramas", "stone", "converter peso"],
    intro: [
      "Converta um peso entre unidades métricas e imperiais. Em rigor, trata-se de unidades de massa, que é o que as balanças indicam.",
      "A libra está definida como exatamente 0,45359237 kg, pelo que todas as conversões aqui são exatas antes do arredondamento para apresentação.",
    ],
    howToUse: [
      "Introduza o valor.",
      "Escolha a unidade de origem e a de destino.",
      "Consulte o resultado e a tabela completa.",
    ],
    formulas: [
      {
        title: "Conversão através de quilogramas",
        expression: "resultado = valor × (kg por unidade de origem) ÷ (kg por unidade de destino)",
        explanation: "Cada unidade está definida como um número fixo de quilogramas.",
      },
      {
        title: "Fatores principais",
        expression: "1 lb = 0,45359237 kg\n1 oz = 1/16 lb = 28,349523125 g\n1 st = 14 lb\n1 t = 1000 kg",
        explanation: "As onças são onças avoirdupois, usadas para alimentos e peso corporal.",
      },
    ],
    examples: [
      {
        title: "150 libras em quilogramas",
        steps: ["150 × 0,45359237", "≈ 68,04 kg"],
      },
      {
        title: "1 quilograma em libras",
        steps: ["1 ÷ 0,45359237", "≈ 2,2046 lb"],
      },
    ],
    assumptions: [
      "As onças são avoirdupois; as onças troy (usadas para metais preciosos) não estão incluídas.",
      "As toneladas são toneladas métricas (1000 kg), e não as toneladas curtas dos EUA nem as toneladas longas do Reino Unido.",
    ],
    faqs: [
      { question: "Quantas libras tem um quilograma?", answer: "Cerca de 2,2046 libras." },
      { question: "Quantas onças tem uma libra?", answer: "Exatamente 16 onças avoirdupois." },
      { question: "Quanto é um stone?", answer: "14 libras, ou cerca de 6,35 kg." },
    ],
    sourcesUsedFor: ["Definição exata da libra e das unidades relacionadas em quilogramas."],
  },
  text: {
    value: "Valor",
    from: "De",
    to: "Para",
    unitNames: {
      mg: "Miligramas",
      g: "Gramas",
      kg: "Quilogramas",
      t: "Toneladas métricas",
      oz: "Onças (avoirdupois)",
      lb: "Libras",
      st: "Stones",
    },
    primary: "{value} {symbol} em {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} em todas as unidades de massa",
    tableUnit: "Unidade",
    tableValue: "Valor",
    note: "Os resultados são apresentados com 10 algarismos significativos.",
  },
};

export default pt;
