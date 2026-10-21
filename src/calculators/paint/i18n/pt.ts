import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PaintText } from "../text/en";

const pt: CalculatorTranslation<PaintText> = {
  content: {
    title: "Calculadora de tinta para paredes",
    shortTitle: "Tinta para paredes",
    summary:
      "Estime quantos galões ou litros de tinta para paredes precisa a partir da dimensão das paredes, das portas, das janelas, do número de demãos e do rendimento.",
    metaTitle: "Calculadora de tinta – Litros ou galões para as paredes",
    metaDescription:
      "Calcule quanta tinta para paredes comprar, em litros ou galões, a partir do comprimento e da altura das paredes, sem portas e janelas, para qualquer número de demãos.",
    keywords: ["calculadora de tinta", "quanta tinta preciso", "litros de tinta", "rendimento da tinta", "galões de tinta", "pintar paredes", "demãos de tinta"],
    intro: [
      "Comprar tinta é mais fácil quando sabe qual é a área a pintar. Some as larguras das paredes, multiplique pela altura, retire as portas e janelas e divida pela área que um galão ou um litro da sua tinta cobre.",
      "A calculadora faz isso para qualquer número de demãos e mostra tanto a quantidade exata como o número inteiro de galões ou litros a comprar.",
    ],
    howToUse: [
      "Escolha unidades dos EUA (pés e galões) ou unidades métricas (metros e litros).",
      "Introduza o comprimento total das paredes que vai pintar e a sua altura. Para uma divisão inteira, o comprimento total é o perímetro.",
      "Introduza quantas portas e janelas existem. Ajuste as dimensões típicas das aberturas se as suas forem maiores ou menores.",
      "Defina o número de demãos e o rendimento indicado na lata de tinta e veja quanta tinta precisa.",
    ],
    formulas: [
      {
        title: "Área a pintar",
        expression: "A = L × H − (portas × área da porta) − (janelas × área da janela)",
        explanation: "L é a largura total das paredes e H a sua altura.",
      },
      {
        title: "Tinta necessária",
        expression: "tinta = A × demãos ÷ rendimento",
        explanation: "O rendimento é a área que um galão ou um litro cobre numa só demão, segundo o fabricante.",
      },
      {
        title: "Quantidade a comprar",
        expression: "comprar = ⌈tinta⌉",
        explanation: "Arredondado para cima até um galão ou litro inteiro. Embalagens maiores e latas mais pequenas podem aproximar o total daquilo de que precisa.",
      },
    ],
    examples: [
      {
        title: "Quarto de 14 ft × 12 ft com paredes de 9 ft, duas demãos",
        steps: [
          "Comprimento das paredes = 14 + 12 + 14 + 12 = 52 ft; área das paredes = 52 × 9 = 468 ft²",
          "Aberturas = 2 × 20 + 3 × 15 = 85 ft², pelo que a área a pintar é de 383 ft²",
          "Tinta = 383 × 2 ÷ 350 ≈ 2,19 gal, pelo que deve comprar 3 galões",
        ],
      },
      {
        title: "Divisão em unidades métricas com 16 m de parede e 2,5 m de altura",
        steps: [
          "Área das paredes = 16 × 2,5 = 40 m²",
          "Aberturas = 1,9 + 2 × 1,4 = 4,7 m², pelo que há 35,3 m² a pintar",
          "Tinta = 35,3 × 2 ÷ 10 = 7,06 L, pelo que deve comprar 8 L",
        ],
      },
      {
        title: "Uma parede de destaque, uma única demão de tinta de alto rendimento",
        steps: [
          "Área = 14 × 9 = 126 ft²",
          "Tinta = 126 × 1 ÷ 400 = 0,315 gal, ou seja, um galão (um quarto de galão, 0,25 gal, ficaria ligeiramente aquém)",
        ],
      },
    ],
    assumptions: [
      "O valor predefinido dos EUA de 350 ft² por galão está no limite inferior do intervalo de 350–400 ft² habitualmente indicado para tinta de paredes. O valor métrico predefinido de 10 m² por litro é um valor típico de rótulo. O rendimento varia com o produto, o acabamento e a superfície, por isso use o valor indicado na sua lata.",
      "Superfícies rugosas, porosas, reparadas ou nunca pintadas absorvem mais tinta, e passar de uma cor escura para uma clara pode exigir uma demão extra ou um primário.",
      "As dimensões das portas e janelas são valores típicos. As paredes são tratadas como retângulos planos com uma única altura; para empenas ou tetos inclinados, calcule essas áreas à parte.",
    ],
    faqs: [
      {
        question: "Quantas demãos de tinta são necessárias?",
        answer:
          "Duas demãos é a recomendação habitual para um acabamento uniforme, sobretudo sobre uma cor diferente. Uma só demão pode bastar ao repintar com a mesma cor uma superfície em bom estado.",
      },
      {
        question: "Devo descontar as portas e janelas?",
        answer: "Sim, para uma estimativa mais exata. Se também vai pintar as portas ou os rodapés e guarnições, estime-os à parte, porque normalmente usam um produto diferente.",
      },
      {
        question: "Que área cobre um galão de tinta?",
        answer:
          "A maioria das tintas para paredes indica cerca de 350–400 ft² por galão e por demão em paredes lisas e com primário, o que corresponde a cerca de 8,5–10 m² por litro. Consulte o rótulo do produto, porque o rendimento varia.",
      },
    ],
    sourcesUsedFor: ["Rendimento típico da tinta para paredes, de cerca de 350–400 ft² por galão e por demão, usado no valor predefinido dos EUA."],
  },
  text: {
    units: "Unidades",
    unitSystems: { imperial: "EUA (ft, gal)", metric: "Métrico (m, L)" },
    length: "Comprimento total das paredes",
    lengthHelp: "Some as larguras de todas as paredes que vai pintar. Para uma divisão inteira, corresponde ao perímetro.",
    height: "Altura das paredes",
    doors: "Número de portas",
    doorArea: "Área de uma porta",
    windows: "Número de janelas",
    windowArea: "Área de uma janela",
    openingHelp: "É indicado um valor típico; meça as suas para uma estimativa mais exata.",
    coats: "Número de demãos",
    coverage: "Rendimento",
    coverageHelp:
      "A área que uma unidade de tinta cobre numa demão. Consulte o rótulo ou a ficha técnica da sua tinta: superfícies texturadas, porosas ou nunca pintadas precisam de mais tinta.",
    errors: {
      openings: "As portas e janelas somam pelo menos a área total das paredes. Verifique as quantidades, as dimensões das aberturas e as medidas das paredes.",
    },
    paintNeeded: "Tinta necessária",
    caption: "{area} pintados com {coats} a {coverage}.",
    coatsCount: { zero: "{n} demãos", one: "{n} demão", two: "{n} demãos", few: "{n} demãos", many: "{n} demãos", other: "{n} demãos" },
    wallArea: "Área total das paredes",
    openingArea: "Portas e janelas",
    paintableArea: "Área a pintar (uma demão)",
    totalCoverage: "Área a cobrir, todas as demãos",
    wholeGallons: "Galões inteiros a comprar",
    wholeLiters: "Litros inteiros a comprar",
    inLiters: "Em litros",
    inGallons: "Em galões americanos",
    notes: {
      cans: "A tinta é vendida em latas de tamanhos fixos; arredonde para cima e guarde um pouco a mais para retoques.",
      surfaces: "Tetos, rodapés e primário não estão incluídos. Some-os à parte se também os for pintar.",
    },
  },
};

export default pt;
