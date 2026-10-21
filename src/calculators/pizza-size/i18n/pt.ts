import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PizzaSizeText } from "../text/en";

const pt: CalculatorTranslation<PizzaSizeText> = {
  content: {
    title: "Calculadora de tamanho de pizza",
    shortTitle: "Tamanho de pizza",
    summary: "Compare duas pizzas pela área e pelo preço por polegada quadrada ou centímetro quadrado para encontrar a melhor compra.",
    metaTitle: "Calculadora de tamanho de pizza – Preço por cm²",
    metaDescription:
      "Compare dois tamanhos de pizza pela área e pelo preço por cm² ou polegada quadrada, veja qual compensa mais e quantas pizzas pequenas equivalem a uma grande.",
    keywords: ["tamanho de pizza", "área da pizza", "preço por centímetro quadrado", "comparar pizzas", "pizza grande ou média", "qual pizza compensa", "promoção de pizza"],
    intro: [
      "Os tamanhos das pizzas são indicados pelo diâmetro, mas o que se come é a área, e a área cresce com o quadrado do diâmetro. Uma pizza de 16 polegadas é apenas um terço mais larga do que uma de 12, mas tem quase 78% mais pizza.",
      "Introduza o diâmetro e o preço de duas pizzas para ver a área de cada uma, o preço por unidade de área e qual delas lhe dá mais pelo seu dinheiro.",
    ],
    howToUse: [
      "Escolha se os diâmetros estão em polegadas ou em centímetros.",
      "Introduza o diâmetro e o preço da pizza A.",
      "Introduza o diâmetro e o preço da pizza B.",
      "Veja qual a pizza que compensa mais, o preço por polegada quadrada ou centímetro quadrado e como se comparam os tamanhos.",
    ],
    formulas: [
      { title: "Área", expression: "A = π × d² ÷ 4", explanation: "d é o diâmetro. É o mesmo que π × r², com o raio r = d ÷ 2." },
      { title: "Preço por área", expression: "preço ÷ A", explanation: "O valor mais baixo corresponde à melhor compra." },
      { title: "Relação de tamanhos", expression: "A_B ÷ A_A = (d_B ÷ d_A)²", explanation: "Quantas pizzas A têm a mesma área que uma pizza B." },
    ],
    examples: [
      {
        title: "12 polegadas por 12,99 US$ contra 16 polegadas por 18,99 US$",
        steps: [
          "A: π × 12² ÷ 4 ≈ 113,10 in², logo 12,99 US$ ÷ 113,10 ≈ 0,1149 US$ por in²",
          "B: π × 16² ÷ 4 ≈ 201,06 in², logo 18,99 US$ ÷ 201,06 ≈ 0,0944 US$ por in²",
          "(16 ÷ 12)² ≈ 1,778, pelo que B tem cerca de 77,78% mais pizza",
        ],
      },
      {
        title: "30 cm por 9,50 € contra 40 cm por 17,90 €",
        steps: [
          "A: π × 30² ÷ 4 ≈ 706,86 cm², logo 9,50 € ÷ 706,86 ≈ 0,0134 € por cm²",
          "B: π × 40² ÷ 4 ≈ 1256,64 cm², logo 17,90 € ÷ 1256,64 ≈ 0,0142 € por cm²",
          "Neste caso, a pizza mais pequena é mais barata por centímetro quadrado",
        ],
      },
    ],
    assumptions: [
      "As pizzas são redondas e o diâmetro é a largura total, incluindo a borda.",
      "As duas pizzas têm a mesma espessura e os mesmos ingredientes, pelo que a área é uma medida justa da quantidade de comida que recebe.",
      "A escolha da moeda altera apenas a formatação.",
    ],
    faqs: [
      {
        question: "Porque é que uma pizza um pouco maior tem tanta mais área?",
        answer: "A área depende do quadrado do diâmetro. Passar de 10 para 14 polegadas é 40% mais largo, mas quase duplica a área, porque 1,4² = 1,96.",
      },
      {
        question: "Duas pizzas médias são melhores do que uma grande?",
        answer: "Compare as áreas. Duas pizzas de 12 polegadas têm cerca de 226 in², enquanto uma pizza de 18 polegadas tem cerca de 254 in², pelo que a grande é maior.",
      },
      {
        question: "Devo contar a borda?",
        answer:
          "Esta calculadora conta-a, porque os tamanhos são vendidos pelo diâmetro total. Se deixa a borda, subtraia o dobro da sua largura ao diâmetro de cada pizza antes de o introduzir.",
      },
    ],
    sourcesUsedFor: ["A área de um círculo, A = πr², e a sua forma em função do diâmetro."],
  },
  text: {
    unit: "Unidade do diâmetro",
    units: { in: "Polegadas (in)", cm: "Centímetros (cm)" },
    diameterA: "Diâmetro da pizza A",
    priceA: "Preço da pizza A",
    diameterB: "Diâmetro da pizza B",
    priceB: "Preço da pizza B",
    diameterHelp: "Medido pelo centro, de uma ponta à outra.",
    result: "Melhor compra",
    aBetter: "A pizza A compensa mais",
    bBetter: "A pizza B compensa mais",
    same: "As duas pizzas têm a mesma relação preço-área",
    caption: "A pizza A custa {a} e a pizza B custa {b}.",
    perArea: "{price} por {unit}",
    areaA: "Área da pizza A",
    areaB: "Área da pizza B",
    pricePerAreaA: "Preço da pizza A por {unit}",
    pricePerAreaB: "Preço da pizza B por {unit}",
    aPerB: "Número de pizzas A que igualam uma pizza B em área",
    moreA: "Pizza a mais em A face a B",
    moreB: "Pizza a mais em B face a A",
    sameSize: "As duas pizzas têm a mesma área",
    sameSizeValue: "Mesmo tamanho",
    note: "Compara a área redonda completa, incluindo a borda. Assume-se que a espessura e os ingredientes são iguais.",
  },
};

export default pt;
