import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { LengthConverterText } from "../text/en";

const pt: CalculatorTranslation<LengthConverterText> = {
  content: {
    title: "Conversor de comprimento",
    shortTitle: "Comprimento",
    summary: "Converta entre milímetros, centímetros, metros, quilómetros, polegadas, pés, jardas, milhas e milhas náuticas.",
    metaTitle: "Conversor de comprimento – Unidades métricas e imperiais",
    metaDescription:
      "Converta comprimentos entre unidades métricas e imperiais: mm, cm, m, km, polegadas, pés, jardas, milhas e milhas náuticas, com fatores de conversão exatos.",
    keywords: ["conversor de comprimento", "converter unidades de comprimento", "km para milhas", "pés para metros", "polegadas para cm", "conversor de unidades"],
    intro: [
      "Converta qualquer comprimento entre nove unidades habituais. A tabela mostra o seu valor em todas as unidades ao mesmo tempo.",
      "Todos os fatores são exatos por definição: uma polegada mede exatamente 2,54 cm e uma milha, exatamente 1609,344 m.",
    ],
    howToUse: [
      "Introduza o valor.",
      "Escolha a unidade de origem e a unidade para a qual pretende converter.",
      "Consulte o resultado ou use a tabela para ver todas as unidades.",
    ],
    formulas: [
      {
        title: "Conversão através do metro",
        expression: "resultado = valor × (metros por unidade de origem) ÷ (metros por unidade de destino)",
        explanation: "Cada unidade é definida como um número fixo de metros.",
      },
      {
        title: "Fatores principais",
        expression: "1 in = 0,0254 m\n1 ft = 0,3048 m\n1 yd = 0,9144 m\n1 mi = 1609,344 m\n1 nmi = 1852 m",
        explanation: "Valores exatos do acordo internacional da jarda e da libra de 1959 e do SI.",
      },
    ],
    examples: [
      {
        title: "10 quilómetros em milhas",
        steps: ["10 × 1000 m = 10 000 m", "10 000 ÷ 1609,344 ≈ 6,2137 mi"],
      },
      {
        title: "6 pés em metros",
        steps: ["6 × 0,3048", "= 1,8288 m"],
      },
    ],
    assumptions: [
      "Usa as unidades internacionais: o pé de agrimensura dos EUA, que difere em cerca de 2 partes por milhão, não está incluído.",
      "Os resultados são apresentados com 10 algarismos significativos.",
    ],
    faqs: [
      { question: "Quantos pés tem uma milha?", answer: "Exatamente 5280 pés." },
      { question: "Como converto polegadas em centímetros?", answer: "Multiplique por 2,54. Por exemplo, 12 in × 2,54 = 30,48 cm." },
      { question: "O que é uma milha náutica?", answer: "Uma unidade usada na navegação marítima e aérea, definida como exatamente 1852 metros." },
    ],
    sourcesUsedFor: ["Definições exatas em metros da polegada, do pé, da jarda, da milha e da milha náutica."],
  },
  text: {
    value: "Valor",
    from: "De",
    to: "Para",
    unitNames: {
      mm: "Milímetros",
      cm: "Centímetros",
      m: "Metros",
      km: "Quilómetros",
      in: "Polegadas",
      ft: "Pés",
      yd: "Jardas",
      mi: "Milhas",
      nmi: "Milhas náuticas",
    },
    primary: "{value} {symbol} em {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} em todas as unidades de comprimento",
    tableUnit: "Unidade",
    tableValue: "Valor",
    note: "Os resultados são apresentados com 10 algarismos significativos.",
  },
};

export default pt;
