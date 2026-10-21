import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { UnitPriceText } from "../text/en";

const pt: CalculatorTranslation<UnitPriceText> = {
  content: {
    title: "Calculadora de preço unitário",
    shortTitle: "Preço unitário",
    summary: "Compare duas embalagens pelo preço por quilograma, por litro ou por unidade para ver qual compensa mais.",
    metaTitle: "Calculadora de preço unitário – Compare preços",
    metaDescription:
      "Compare dois produtos pelo preço unitário por kg, por litro ou por unidade, mesmo em onças ou galões, e veja quanto poupa com o mais barato.",
    keywords: ["preço unitário", "preço por unidade", "preço por kg", "preço por litro", "comparar preços", "melhor compra", "comparar embalagens"],
    intro: [
      "Uma embalagem maior nem sempre é mais barata por grama. O preço unitário, ou seja, o preço a dividir pela quantidade, é a forma justa de comparar dois tamanhos ou duas marcas.",
      "Introduza o preço e a quantidade de cada produto. As quantidades podem estar em unidades métricas ou dos EUA; ambas são convertidas para uma unidade comum antes da comparação.",
    ],
    howToUse: [
      "Escolha a moeda dos preços.",
      "Para o produto A, introduza o preço, a quantidade na embalagem e a respetiva unidade.",
      "Faça o mesmo para o produto B, com uma unidade do mesmo tipo: peso, volume ou número de unidades.",
      "Consulte qual dos produtos é mais barato, o preço de cada um por quilograma, litro ou unidade e a percentagem poupada.",
    ],
    formulas: [
      {
        title: "Preço unitário",
        expression: "preço unitário = preço ÷ quantidade",
        explanation: "A quantidade é primeiro convertida em quilogramas, litros ou unidades.",
      },
      {
        title: "Percentagem poupada",
        expression: "poupança = (maior − menor) ÷ maior × 100",
        explanation: "Quanto menos paga por unidade ao escolher o produto mais barato.",
      },
      {
        title: "Unidades dos EUA",
        expression: "1 oz = 28,349523125 g; 1 lb = 453,59237 g; 1 fl oz = 29,5735295625 mL; 1 gal = 3,785411784 L",
        explanation: "Definições exatas, para que a comparação não dependa de arredondamentos.",
      },
    ],
    examples: [
      {
        title: "500 g por 3,49 US$ contra 1 kg por 5,99 US$",
        steps: ["A: 3,49 ÷ 0,5 kg = 6,98 US$ por kg", "B: 5,99 ÷ 1 kg = 5,99 US$ por kg", "B poupa (6,98 − 5,99) ÷ 6,98 ≈ 14,18%"],
      },
      {
        title: "64 fl oz de sumo por 4,29 US$ contra 1,75 L por 3,19 US$",
        steps: [
          "64 fl oz = 64 × 29,5735295625 mL ≈ 1,8927 L",
          "A: 4,29 ÷ 1,8927 ≈ 2,27 US$ por L",
          "B: 3,19 ÷ 1,75 ≈ 1,82 US$ por L, cerca de 19,58% mais barato",
        ],
      },
      {
        title: "12 ovos por 3,60 US$ contra 18 ovos por 5,58 US$",
        steps: ["A: 3,60 ÷ 12 = 0,30 US$ por ovo", "B: 5,58 ÷ 18 = 0,31 US$ por ovo", "A poupa (0,31 − 0,30) ÷ 0,31 ≈ 3,23%"],
      },
    ],
    assumptions: [
      "Os dois produtos são igualmente úteis para si: têm a mesma qualidade e vai usar toda a embalagem maior.",
      "As onças são onças de peso avoirdupois e as onças líquidas e os galões são medidas dos EUA. As pintas e os galões imperiais do Reino Unido são maiores e não estão incluídos.",
      "Os preços são comparados tal como foram introduzidos; não são somados impostos, tara nem cupões de desconto.",
      "A escolha da moeda altera apenas a formatação.",
    ],
    faqs: [
      {
        question: "Posso comparar um produto vendido a peso com outro vendido a volume?",
        answer:
          "Não diretamente. Os gramas e os mililitros só coincidem em líquidos semelhantes à água, por isso a calculadora pede unidades do mesmo tipo. Veja o rótulo: muitas embalagens indicam ambas.",
      },
      {
        question: "Porquê comparar por quilograma ou por litro e não por grama?",
        answer:
          "Os preços por grama são minúsculos e difíceis de ler. Por quilograma ou por litro obtêm-se números de dimensão semelhante aos das etiquetas das prateleiras, e a ordenação é a mesma.",
      },
      {
        question: "O preço unitário da etiqueta está sempre certo?",
        answer:
          "Normalmente sim, mas as lojas podem usar unidades diferentes em etiquetas vizinhas, como por onça numa e por libra noutra. Ao introduzir aqui os dois produtos, ficam na mesma unidade.",
      },
    ],
    sourcesUsedFor: [
      "A forma como os preços unitários no retalho são expressos por unidade de peso, de volume ou de contagem.",
      "Fatores de conversão exatos para a onça e a libra avoirdupois e para a onça líquida e o galão dos EUA.",
    ],
  },
  text: {
    priceA: "Preço do produto A",
    quantityA: "Quantidade do produto A",
    unitA: "Unidade do produto A",
    priceB: "Preço do produto B",
    quantityB: "Quantidade do produto B",
    unitB: "Unidade do produto B",
    quantityHelp: "A quantidade na embalagem, por exemplo 500 para um saco de 500 g.",
    units: {
      g: "Gramas (g)",
      kg: "Quilogramas (kg)",
      oz: "Onças (oz)",
      lb: "Libras (lb)",
      mL: "Mililitros (mL)",
      L: "Litros (L)",
      floz: "Onças líquidas dos EUA (fl oz)",
      gal: "Galões dos EUA (gal)",
      item: "Unidades (contagem)",
    },
    perUnit: { mass: "kg", volume: "L", count: "unidade" },
    kindMismatch: "O produto B tem de ser medido da mesma forma que o produto A: ambos a peso, ambos a volume ou ambos por número de unidades.",
    aCheaper: "O produto A é mais barato por unidade",
    bCheaper: "O produto B é mais barato por unidade",
    same: "Ambos custam o mesmo por unidade",
    result: "Melhor compra",
    caption: "{a} para o produto A e {b} para o produto B, por {unit}.",
    unitPriceA: "Preço do produto A por {unit}",
    unitPriceB: "Preço do produto B por {unit}",
    saving: "Poupança por unidade com o produto mais barato",
    difference: "Diferença de preço por {unit}",
    notes: {
      compare: "Os preços são comparados por {unit} depois de converter ambas as quantidades para a mesma unidade.",
      waste: "Um preço unitário mais baixo só é uma poupança se gastar a quantidade maior antes de se estragar.",
    },
  },
};

export default pt;
