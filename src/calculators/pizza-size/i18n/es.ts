import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PizzaSizeText } from "../text/en";

const es: CalculatorTranslation<PizzaSizeText> = {
  content: {
    title: "Calculadora de tamaño de pizza",
    shortTitle: "Tamaño de pizza",
    summary: "Compara dos pizzas por superficie y por precio por pulgada cuadrada o centímetro cuadrado para encontrar la mejor oferta.",
    metaTitle: "Calculadora de tamaño de pizza – Precio por superficie",
    metaDescription:
      "Compara dos tamaños de pizza por superficie y precio por pulgada cuadrada o cm², descubre cuál sale mejor y cuántas pizzas pequeñas equivalen a una grande.",
    keywords: [
      "tamaño de pizza",
      "superficie de una pizza",
      "precio por centímetro cuadrado",
      "comparar pizzas",
      "pizza grande o mediana",
      "qué pizza sale más a cuenta",
      "oferta de pizza",
    ],
    intro: [
      "Los tamaños de pizza se indican por el diámetro, pero lo que te comes es la superficie, y la superficie crece con el cuadrado del diámetro. Una pizza de 16 pulgadas es solo un tercio más ancha que una de 12, pero tiene casi un 78 % más de pizza.",
      "Introduce el diámetro y el precio de dos pizzas para ver la superficie de cada una, el precio por unidad cuadrada y cuál te da más por tu dinero.",
    ],
    howToUse: [
      "Elige si los diámetros están en pulgadas o en centímetros.",
      "Introduce el diámetro y el precio de la pizza A.",
      "Introduce el diámetro y el precio de la pizza B.",
      "Consulta qué pizza sale más a cuenta, el precio por pulgada cuadrada o centímetro cuadrado y cómo se comparan los tamaños.",
    ],
    formulas: [
      { title: "Superficie", expression: "A = π × d² ÷ 4", explanation: "d es el diámetro. Equivale a π × r² con el radio r = d ÷ 2." },
      { title: "Precio por superficie", expression: "precio ÷ A", explanation: "La cifra más baja es la que sale más a cuenta." },
      { title: "Relación de tamaños", expression: "A_B ÷ A_A = (d_B ÷ d_A)²", explanation: "Cuántas pizzas A tienen la misma superficie que una pizza B." },
    ],
    examples: [
      {
        title: "12 pulgadas por 12,99 US$ frente a 16 pulgadas por 18,99 US$",
        steps: [
          "A: π × 12² ÷ 4 ≈ 113,10 in², así que 12,99 US$ ÷ 113,10 ≈ 0,1149 US$ por in²",
          "B: π × 16² ÷ 4 ≈ 201,06 in², así que 18,99 US$ ÷ 201,06 ≈ 0,0944 US$ por in²",
          "(16 ÷ 12)² ≈ 1,778, así que B tiene aproximadamente un 77,78 % más de pizza",
        ],
      },
      {
        title: "30 cm por 9,50 € frente a 40 cm por 17,90 €",
        steps: [
          "A: π × 30² ÷ 4 ≈ 706,86 cm², así que 9,50 € ÷ 706,86 ≈ 0,0134 € por cm²",
          "B: π × 40² ÷ 4 ≈ 1256,64 cm², así que 17,90 € ÷ 1256,64 ≈ 0,0142 € por cm²",
          "En este caso, la pizza pequeña es más barata por centímetro cuadrado",
        ],
      },
    ],
    assumptions: [
      "Las pizzas son redondas y el diámetro es el ancho total, con el borde incluido.",
      "Las dos pizzas tienen el mismo grosor y los mismos ingredientes, así que la superficie es una medida justa de cuánta comida recibes.",
      "Elegir una moneda solo cambia el formato.",
    ],
    faqs: [
      {
        question: "¿Por qué una pizza algo más grande tiene tanta más superficie?",
        answer: "La superficie depende del cuadrado del diámetro. Pasar de 10 a 14 pulgadas es un 40 % más de ancho, pero casi duplica la superficie, porque 1,4² = 1,96.",
      },
      {
        question: "¿Son mejores dos pizzas medianas que una grande?",
        answer:
          "Compara las superficies. Dos pizzas de 12 pulgadas suman unas 226 in², mientras que una de 18 pulgadas tiene unas 254 in², así que la grande es mayor.",
      },
      {
        question: "¿Debo contar el borde?",
        answer:
          "Esta calculadora lo cuenta, porque los tamaños se venden por el diámetro total. Si no te comes el borde, resta dos veces su anchura al diámetro de cada pizza antes de introducirlo.",
      },
    ],
    sourcesUsedFor: ["La superficie de un círculo, A = πr², y su forma en función del diámetro."],
  },
  text: {
    unit: "Unidad del diámetro",
    units: { in: "Pulgadas (in)", cm: "Centímetros (cm)" },
    diameterA: "Diámetro de la pizza A",
    priceA: "Precio de la pizza A",
    diameterB: "Diámetro de la pizza B",
    priceB: "Precio de la pizza B",
    diameterHelp: "Medido por el centro, de borde a borde.",
    result: "Mejor relación calidad-precio",
    aBetter: "La pizza A sale más a cuenta",
    bBetter: "La pizza B sale más a cuenta",
    same: "Las dos pizzas salen igual de a cuenta",
    caption: "La pizza A cuesta {a} y la pizza B cuesta {b}.",
    perArea: "{price} por {unit}",
    areaA: "Superficie de la pizza A",
    areaB: "Superficie de la pizza B",
    pricePerAreaA: "Precio de la pizza A por {unit}",
    pricePerAreaB: "Precio de la pizza B por {unit}",
    aPerB: "Número de pizzas A que equivalen en superficie a una pizza B",
    moreA: "Pizza extra en A respecto a B",
    moreB: "Pizza extra en B respecto a A",
    sameSize: "Las dos pizzas tienen la misma superficie",
    sameSizeValue: "Mismo tamaño",
    note: "Compara toda la superficie redonda, con el borde incluido. Se supone que el grosor y los ingredientes son los mismos.",
  },
};

export default es;
