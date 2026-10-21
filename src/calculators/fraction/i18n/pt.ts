import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FractionText } from "../text/en";

const pt: CalculatorTranslation<FractionText> = {
  content: {
    title: "Calculadora de frações",
    shortTitle: "Frações",
    summary: "Some, subtraia, multiplique ou divida frações e números mistos, com o resultado simplificado e em forma decimal.",
    metaTitle: "Calculadora de frações – Operações e simplificação",
    metaDescription:
      "Some, subtraia, multiplique e divida frações, números mistos e decimais. Obtenha o resultado exato simplificado, como número misto e em forma decimal.",
    keywords: ["calculadora de frações", "somar frações", "simplificar frações", "dividir frações", "números mistos", "fração irredutível", "operações com frações"],
    intro: [
      "Introduza dois números como frações (3/4), números mistos (1 1/2), números inteiros ou decimais, escolha uma operação e obtenha o resultado exato.",
      "A calculadora trabalha com numeradores e denominadores inteiros exatos, pelo que o resultado não tem erros de arredondamento. É simplificado para a fração irredutível e também apresentado como número misto e em forma decimal.",
    ],
    howToUse: [
      "Introduza o primeiro número, por exemplo 1/2 ou 2 1/4.",
      "Escolha somar, subtrair, multiplicar ou dividir.",
      "Introduza o segundo número.",
      "Consulte a fração simplificada, o número misto e o decimal.",
    ],
    formulas: [
      { title: "Adição e subtração", expression: "a/b ± c/d = (a × d ± c × b) ÷ (b × d)", explanation: "Escreva ambas as frações com um denominador comum e depois some ou subtraia os numeradores." },
      { title: "Multiplicação", expression: "a/b × c/d = (a × c) ÷ (b × d)", explanation: "Multiplique os numeradores entre si e os denominadores entre si." },
      { title: "Divisão", expression: "a/b ÷ c/d = (a × d) ÷ (b × c)", explanation: "Multiplique pelo inverso da segunda fração. A divisão por zero não está definida." },
      { title: "Fração irredutível", expression: "n/d = (n ÷ g) ÷ (d ÷ g), g = mdc(n, d)", explanation: "Divida o numerador e o denominador pelo seu máximo divisor comum." },
    ],
    examples: [
      { title: "1/2 + 1/3", steps: ["1/2 + 1/3 = (1 × 3 + 1 × 2) ÷ (2 × 3)", "= 5/6 ≈ 0,8333"] },
      { title: "2 1/4 × 4/3", steps: ["2 1/4 = 9/4", "9/4 × 4/3 = 36/12 = 3"] },
    ],
    assumptions: [
      "Os números inteiros, as frações, os números mistos e os decimais finitos são convertidos em frações exatas: 0,75 passa a 3/4.",
      "Os numeradores e denominadores estão limitados a 1 000 000 000 000 para que os resultados sejam legíveis.",
      "Um número misto negativo como −1 1/2 significa −(1 + 1/2).",
    ],
    faqs: [
      { question: "Como introduzo um número misto?", answer: "Escreva o número inteiro, um espaço e a fração, por exemplo 2 1/4. Para um valor negativo, ponha primeiro o sinal de menos: -2 1/4." },
      { question: "Como simplifico uma fração?", answer: "Introduza-a como primeiro número, escolha multiplicar e introduza 1 como segundo número. O resultado é apresentado como fração irredutível." },
      { question: "Porque é que o decimal é diferente da fração?", answer: "Algumas frações, como 1/3, têm decimais que nunca terminam. A fração é exata; o decimal é arredondado apenas para apresentação." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    a: "Primeiro número",
    aHelp: "Uma fração (3/4), um número misto (1 1/2), um número inteiro ou um decimal.",
    b: "Segundo número",
    bHelp: "Os mesmos formatos que o primeiro número.",
    operation: "Operação",
    operations: { add: "Somar (+)", subtract: "Subtrair (−)", multiply: "Multiplicar (×)", divide: "Dividir (÷)" },
    errors: {
      invalid: "Introduza uma fração como 3/4, um número misto como 1 1/2, um número inteiro ou um decimal.",
      zeroDenominator: "O denominador não pode ser 0.",
      tooLarge: "Use numeradores e denominadores que não ultrapassem {max}.",
      divideByZero: "Não é possível dividir por zero.",
    },
    result: "Resultado simplificado",
    caption: "{a} {op} {b} = {result}",
    mixed: "Como número misto",
    decimal: "Em forma decimal",
    note: "As frações são simplificadas dividindo pelo máximo divisor comum. O decimal é arredondado apenas para apresentação.",
  },
};

export default pt;
