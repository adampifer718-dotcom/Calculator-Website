import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { VolumeConverterText } from "../text/en";

const pt: CalculatorTranslation<VolumeConverterText> = {
  content: {
    title: "Conversor de volume",
    shortTitle: "Volume",
    summary:
      "Converta entre litros, mililitros, metros cúbicos, galões dos EUA e imperiais, quartos, pintas, chávenas, onças líquidas, colheres e pés cúbicos.",
    metaTitle: "Conversor de volume – Litros, galões, chávenas e mais",
    metaDescription:
      "Converta volumes entre litros, mililitros, metros cúbicos, galões dos EUA e imperiais, quartos, pintas, chávenas, onças líquidas, colheres e pés cúbicos.",
    keywords: ["volume", "litros para galões", "galões para litros", "ml para chávenas", "onças líquidas", "pés cúbicos", "galão imperial"],
    intro: [
      "Converta qualquer volume entre 15 unidades métricas, dos EUA e imperiais. A tabela mostra o valor em todas as unidades ao mesmo tempo.",
      "As unidades dos EUA e as imperiais partilham nomes, mas não tamanhos: um galão imperial é cerca de 20% maior do que um galão dos EUA, e uma pinta imperial tem 20 onças líquidas em vez de 16.",
    ],
    howToUse: [
      "Introduza o valor.",
      "Escolha a unidade de origem e a unidade pretendida.",
      "Consulte o resultado ou use a tabela para comparar todas as unidades.",
    ],
    formulas: [
      {
        title: "Conversão através de litros",
        expression: "resultado = valor × (litros por unidade de origem) ÷ (litros por unidade de destino)",
        explanation: "Cada unidade está definida como um número fixo de litros.",
      },
      {
        title: "Fatores principais",
        expression:
          "1 US gal = 231 in³ = 3,785411784 L\n1 US gal = 4 qt = 8 pt = 16 chávenas = 128 fl oz\n1 US fl oz = 2 colheres de sopa = 6 colheres de chá\n1 imp gal = 4,54609 L = 160 imp fl oz",
        explanation: "Exatos por definição. Um pé cúbico tem 28,316846592 L.",
      },
    ],
    examples: [
      {
        title: "1 galão dos EUA em litros",
        steps: ["1 galão dos EUA = 231 in³ × 0,016387064 L/in³", "= 3,785411784 L"],
      },
      {
        title: "500 mililitros em chávenas dos EUA",
        steps: ["1 chávena dos EUA = 236,5882365 mL", "500 ÷ 236,5882365 ≈ 2,113 chávenas"],
      },
    ],
    assumptions: [
      "As unidades dos EUA são as medidas usuais para líquidos; as pintas e os quartos para secos dos EUA, ligeiramente maiores, não estão incluídos.",
      "As colheres e as chávenas têm os tamanhos usuais dos EUA; a chávena métrica (250 mL) e a colher de sopa (15 mL, ou 20 mL na Austrália) são ligeiramente diferentes.",
      "Os resultados são arredondados a 10 algarismos significativos para apresentação.",
    ],
    faqs: [
      {
        question: "Quantos litros tem um galão?",
        answer: "Um galão dos EUA tem 3,785 litros; um galão imperial (do Reino Unido) tem 4,546 litros.",
      },
      {
        question: "Quantos mililitros tem uma chávena?",
        answer: "Uma chávena usual dos EUA tem 236,6 mL, a chávena dos rótulos nutricionais dos EUA tem 240 mL e a chávena métrica tem 250 mL.",
      },
      {
        question: "Porque é que as pintas do Reino Unido e dos EUA são diferentes?",
        answer:
          "Ambos os sistemas dividem o respetivo galão em 8 pintas, mas o galão imperial é maior, pelo que uma pinta imperial tem 568 mL e uma pinta dos EUA tem 473 mL.",
      },
    ],
    sourcesUsedFor: ["Definições exatas do galão dos EUA (231 polegadas cúbicas) e das suas subdivisões, e do galão imperial (4,54609 litros)."],
  },
  text: {
    value: "Valor",
    from: "De",
    to: "Para",
    unitNames: {
      ml: "Mililitros",
      l: "Litros",
      m3: "Metros cúbicos",
      tsp: "Colheres de chá dos EUA",
      tbsp: "Colheres de sopa dos EUA",
      floz: "Onças líquidas dos EUA",
      cup: "Chávenas dos EUA",
      pt: "Pintas dos EUA",
      qt: "Quartos de galão dos EUA",
      gal: "Galões dos EUA",
      impfloz: "Onças líquidas imperiais",
      imppt: "Pintas imperiais",
      impgal: "Galões imperiais",
      in3: "Polegadas cúbicas",
      ft3: "Pés cúbicos",
    },
    primary: "{value} {symbol} em {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} em todas as unidades de volume",
    tableUnit: "Unidade",
    tableValue: "Valor",
    note: "As unidades dos EUA e as imperiais são diferentes: um galão dos EUA tem 3,785 L e um galão imperial tem 4,546 L. Os resultados são apresentados com 10 algarismos significativos.",
  },
};

export default pt;
