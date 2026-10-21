import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ScientificNotationText } from "../text/en";

const pt: CalculatorTranslation<ScientificNotationText> = {
  content: {
    title: "Calculadora de notação científica",
    shortTitle: "Notação científica",
    summary: "Converta números para notação científica, de engenharia e exponencial (e), ou volte a escrevê-los em forma decimal.",
    metaTitle: "Calculadora de notação científica – Converta números",
    metaDescription:
      "Converta qualquer número para notação científica, notação e e notação de engenharia, ou passe a notação e de volta para um número decimal normal.",
    keywords: ["notação científica", "converter para notação científica", "notação exponencial", "notação de engenharia", "potências de dez", "notação e"],
    intro: [
      "A notação científica escreve um número como um valor entre 1 e 10 multiplicado por uma potência de dez, por exemplo 1,234 × 10⁵. Assim, os números muito grandes e muito pequenos ficam fáceis de ler.",
      "Introduza um número decimal ou em notação e e a calculadora mostra todas as formas habituais.",
    ],
    howToUse: [
      "Escreva um número como 123400 ou 0,00056, ou em notação e como 6,02e23. Pode usar a vírgula ou o ponto decimal.",
      "Consulte as formas científica, em notação e, de engenharia e decimal.",
    ],
    formulas: [
      {
        title: "Notação científica",
        expression: "x = a × 10ⁿ, em que 1 ≤ |a| < 10",
        explanation: "Desloque a vírgula decimal até ficar um único algarismo diferente de zero à sua esquerda; n conta as deslocações.",
      },
      {
        title: "Notação de engenharia",
        expression: "x = a × 10ⁿ, em que n é múltiplo de 3",
        explanation: "Corresponde a prefixos de unidades como quilo (10³) e micro (10⁻⁶).",
      },
    ],
    examples: [
      {
        title: "123 400",
        steps: ["Desloque a vírgula decimal 5 casas para a esquerda", "1,234 × 10⁵"],
      },
      {
        title: "0,00056",
        steps: ["Desloque a vírgula decimal 4 casas para a direita", "5,6 × 10⁻⁴"],
      },
    ],
    assumptions: [
      "Os números são convertidos com a precisão dupla do JavaScript, de cerca de 15–17 algarismos significativos.",
      "Não são apresentadas formas decimais com mais de 21 algarismos.",
    ],
    faqs: [
      {
        question: "Como se escreve um número em notação científica?",
        answer:
          "Desloque a vírgula decimal até ficar um único algarismo diferente de zero à sua esquerda e multiplique por 10 elevado ao número de casas deslocadas. 4500 passa a 4,5 × 10³.",
      },
      {
        question: "O que significa 6,02e23?",
        answer: "É a notação e de 6,02 × 10²³. O «e» significa «vezes dez elevado a».",
      },
      {
        question: "O que é a notação de engenharia?",
        answer: "É como a notação científica, mas o expoente é sempre múltiplo de 3, em correspondência com prefixos como quilo, mega e mili.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    number: "Número",
    numberHelp: "Um decimal como 0,00056 ou um número em notação e como 6,02e23. Também é aceite o ponto decimal (0.00056).",
    invalid: "Introduza um número como 123400, 0,00056 ou 6,02e23.",
    tooLarge: "Introduza um número inferior a 1,8 × 10³⁰⁸.",
    scientific: "Notação científica",
    eNotation: "Notação e",
    engineering: "Notação de engenharia",
    decimal: "Forma decimal",
    tooLong: "Demasiado longo para apresentar",
  },
};

export default pt;
