import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AreaConverterText } from "../text/en";

const pt: CalculatorTranslation<AreaConverterText> = {
  content: {
    title: "Conversor de área",
    shortTitle: "Área",
    summary: "Converta entre metros quadrados, hectares, quilómetros quadrados, pés quadrados, jardas quadradas, acres, milhas quadradas e outras unidades.",
    metaTitle: "Conversor de área – Acres, hectares, m² e ft²",
    metaDescription:
      "Converta áreas entre metros quadrados, hectares, km², polegadas, pés e jardas quadradas, acres e milhas quadradas, com fatores de conversão exatos.",
    keywords: [
      "conversor de área",
      "conversão de áreas",
      "acres para hectares",
      "pés quadrados para metros quadrados",
      "m2 para ft2",
      "hectare",
      "acre",
      "milhas quadradas",
    ],
    intro: [
      "Converta uma área de uma unidade para outra, quer esteja a comparar um terreno anunciado em acres com outro em hectares, quer esteja a calcular a área de uma divisão em metros quadrados. A tabela mostra o seu valor nas dez unidades ao mesmo tempo.",
      "Todos os fatores são exatos. As unidades quadradas são o quadrado de uma unidade de comprimento, pelo que um pé quadrado é 0,3048 m × 0,3048 m = 0,09290304 m², e um acre são 43 560 pés quadrados.",
    ],
    howToUse: [
      "Escreva a área que pretende converter.",
      "Escolha a unidade em que está e a unidade que pretende.",
      "Consulte o valor convertido ou veja a tabela com as restantes unidades.",
    ],
    formulas: [
      {
        title: "Conversão através do metro quadrado",
        expression: "resultado = valor × (m² por unidade de origem) ÷ (m² por unidade de destino)",
        explanation: "Cada unidade equivale a um número fixo de metros quadrados, pelo que qualquer par pode ser convertido através do m².",
      },
      {
        title: "Fatores principais",
        expression:
          "1 ha = 10 000 m²\n1 ft² = 0,09290304 m²\n1 yd² = 9 ft² = 0,83612736 m²\n1 acre = 43 560 ft² = 4046,8564224 m²\n1 mi² = 640 acres = 2 589 988,110336 m²",
        explanation: "Os valores imperiais derivam do pé internacional, de exatamente 0,3048 m.",
      },
    ],
    examples: [
      {
        title: "2,5 acres em hectares",
        steps: ["2,5 × 4046,8564224 m² = 10 117,141056 m²", "10 117,141056 ÷ 10 000 ≈ 1,0117 ha"],
      },
      {
        title: "1500 metros quadrados em pés quadrados",
        steps: ["1 ft² = 0,09290304 m²", "1500 ÷ 0,09290304 ≈ 16 145,87 ft²"],
      },
      {
        title: "640 acres em milhas quadradas",
        steps: ["640 × 4046,8564224 m² = 2 589 988,110336 m²", "2 589 988,110336 ÷ 2 589 988,110336 = 1 mi²"],
      },
    ],
    assumptions: [
      "Os acres e as milhas quadradas usam o pé internacional. O antigo acre topográfico dos EUA é maior em cerca de 4 partes por milhão, o que só importa em levantamentos topográficos de precisão.",
      "Os resultados são apresentados com 10 algarismos significativos.",
    ],
    faqs: [
      {
        question: "Quantos pés quadrados tem um acre?",
        answer: "Exatamente 43 560 pés quadrados. Um terreno quadrado de um acre mede cerca de 208,7 pés de lado.",
      },
      {
        question: "Um hectare é maior do que um acre?",
        answer: "Sim. Um hectare são 10 000 m², cerca de 2,471 acres, pelo que um acre equivale aproximadamente a 0,405 hectares.",
      },
      {
        question: "Porque é que um metro quadrado não são 3,28 pés quadrados?",
        answer: "Porque a área cresce com o quadrado do comprimento. Um metro são cerca de 3,2808 pés, pelo que um metro quadrado são cerca de 3,2808² ≈ 10,764 pés quadrados.",
      },
    ],
    sourcesUsedFor: [
      "Fatores de conversão para metros quadrados do acre, da milha quadrada, do pé quadrado e de outras unidades de área.",
      "Definições do acre (43 560 ft²) e da milha quadrada (640 acres).",
    ],
  },
  text: {
    value: "Valor",
    from: "De",
    to: "Para",
    unitNames: {
      mm2: "Milímetros quadrados",
      cm2: "Centímetros quadrados",
      m2: "Metros quadrados",
      ha: "Hectares",
      km2: "Quilómetros quadrados",
      in2: "Polegadas quadradas",
      ft2: "Pés quadrados",
      yd2: "Jardas quadradas",
      acre: "Acres",
      mi2: "Milhas quadradas",
    },
    primary: "{value} {symbol} em {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} em todas as unidades de área",
    tableUnit: "Unidade",
    tableValue: "Valor",
    note: "Os resultados são apresentados com 10 algarismos significativos.",
  },
};

export default pt;
