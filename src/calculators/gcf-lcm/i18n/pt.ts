import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { GcfLcmText } from "../text/en";

const pt: CalculatorTranslation<GcfLcmText> = {
  content: {
    title: "Calculadora de mdc e mmc",
    shortTitle: "mdc e mmc",
    summary: "Determine o máximo divisor comum e o mínimo múltiplo comum de uma lista de números inteiros, com a respetiva decomposição em fatores primos.",
    metaTitle: "Calculadora de mdc e mmc – Divisor e múltiplo comum",
    metaDescription:
      "Determine o máximo divisor comum e o mínimo múltiplo comum de 2 a 20 números inteiros, com a decomposição em fatores primos de cada número.",
    keywords: [
      "mdc",
      "mmc",
      "máximo divisor comum",
      "mínimo múltiplo comum",
      "calcular mdc e mmc",
      "decomposição em fatores primos",
      "denominador comum",
      "algoritmo de Euclides",
    ],
    intro: [
      "O máximo divisor comum (mdc) de um conjunto de números inteiros é o maior número que divide todos eles sem deixar resto. O mínimo múltiplo comum (mmc) é o menor número positivo divisível por todos eles.",
      "O mdc serve para simplificar frações e o mmc para encontrar um denominador comum ou saber quando coincidem ciclos que se repetem. Introduza os seus números para obter ambos, juntamente com os fatores primos de cada número.",
    ],
    howToUse: [
      "Escreva entre 2 e 20 números inteiros positivos, separados por vírgulas, espaços ou mudanças de linha.",
      "Cada número pode ir até um bilião (10¹²).",
      "Consulte o mdc e o mmc. O mmc é calculado de forma exata, mesmo que tenha muitos algarismos.",
      "Veja a tabela de fatores primos para perceber de onde vêm ambos os resultados.",
    ],
    formulas: [
      {
        title: "Algoritmo de Euclides",
        expression: "mdc(a, b) = mdc(b, a mod b),  mdc(a, 0) = a",
        explanation: "Substitua o número maior pelo resto até que o resto seja 0. O último valor diferente de zero é o mdc.",
      },
      { title: "mmc de dois números", expression: "mmc(a, b) = a ÷ mdc(a, b) × b", explanation: "Dividir primeiro mantém pequenos os números intermédios." },
      {
        title: "Mais de dois números",
        expression: "mdc(a, b, c) = mdc(mdc(a, b), c),  mmc(a, b, c) = mmc(mmc(a, b), c)",
        explanation: "Ambas as operações são aplicadas um número de cada vez.",
      },
      {
        title: "A partir dos fatores primos",
        expression: "mdc = produto dos primos comuns com o menor expoente;  mmc = produto de todos os primos com o maior expoente",
        explanation: "Os mesmos resultados, lidos na tabela de fatorização.",
      },
    ],
    examples: [
      {
        title: "48 e 180",
        steps: [
          "180 mod 48 = 36, 48 mod 36 = 12, 36 mod 12 = 0, pelo que o mdc é 12",
          "mmc = 48 ÷ 12 × 180 = 720",
          "Verificação: 48 = 2⁴ × 3 e 180 = 2² × 3² × 5, pelo que mdc = 2² × 3 = 12 e mmc = 2⁴ × 3² × 5 = 720",
        ],
      },
      {
        title: "84, 126 e 210",
        steps: [
          "84 = 2² × 3 × 7, 126 = 2 × 3² × 7, 210 = 2 × 3 × 5 × 7",
          "Primos comuns com o menor expoente: 2 × 3 × 7 = 42",
          "Todos os primos com o maior expoente: 2² × 3² × 5 × 7 = 1260",
        ],
      },
      {
        title: "35 e 64 (sem fatores comuns)",
        steps: ["35 = 5 × 7 e 64 = 2⁶ não partilham nenhum primo", "mdc = 1, pelo que os números são primos entre si", "mmc = 35 × 64 = 2240"],
      },
    ],
    assumptions: [
      "Só são aceites números inteiros positivos. O mdc e o mmc de zero ou de números negativos seguem convenções diferentes, por isso são rejeitados.",
      "Cada número está limitado a 10¹² para que a fatorização continue rápida. O mmc é calculado com aritmética exata de inteiros grandes e pode ser muito maior.",
      "São permitidos números repetidos, que não alteram os resultados; cada número distinto aparece uma única vez na tabela de fatorização.",
    ],
    faqs: [
      {
        question: "O mdc é o mesmo que o maior fator comum?",
        answer:
          "Sim. Máximo divisor comum e maior fator comum são dois nomes para o mesmo número. Em inglês abrevia-se GCD, GCF ou HCF.",
      },
      {
        question: "Que relação existe entre o mdc e o mmc?",
        answer:
          "Para dois números, mdc × mmc é igual ao produto dos números. Para 48 e 180: 12 × 720 = 8640 = 48 × 180. Este atalho não funciona com três ou mais números.",
      },
      {
        question: "Como uso o mmc para somar frações?",
        answer:
          "O mmc dos denominadores é o menor denominador comum. Para 1/12 + 1/18, o mmc de 12 e 18 é 36, pelo que a soma se reescreve como 3/36 + 2/36 = 5/36.",
      },
    ],
    sourcesUsedFor: ["O algoritmo de Euclides para o máximo divisor comum.", "A decomposição em fatores primos e o mínimo múltiplo comum."],
  },
  text: {
    numbers: "Números inteiros",
    numbersHelp: "Introduza de 2 a 20 números inteiros positivos, separados por vírgulas, espaços ou mudanças de linha.",
    errors: {
      empty: "Introduza pelo menos dois números.",
      tooMany: "Introduza no máximo {max} números.",
      notNumber: "«{token}» não é um número. Separe os valores com vírgulas, espaços ou mudanças de linha.",
      tooLarge: "«{token}» é demasiado grande.",
    },
    needTwo: "Introduza pelo menos dois números.",
    maxCount: "Introduza no máximo {max} números.",
    notWhole: "{value} não é um número inteiro. Introduza apenas números inteiros.",
    notPositive: "{value} não é positivo. Cada número tem de ser pelo menos 1.",
    tooBig: "{value} é demasiado grande. Cada número pode ser no máximo {max}.",
    gcf: "Máximo divisor comum (mdc)",
    gcfCaption: "Também chamado maior fator comum (em inglês, GCD, GCF ou HCF).",
    lcm: "Mínimo múltiplo comum (mmc)",
    lcmDigits: "Algarismos do mmc",
    coprime: "O mdc é 1, pelo que estes números não têm outro divisor comum além de 1 (são primos entre si).",
    factorTable: "Decomposição em fatores primos",
    numberColumn: "Número",
    factorsColumn: "Fatores primos",
    noPrimeFactors: "1 (sem fatores primos)",
    isPrime: "{factors} (primo)",
  },
};

export default pt;
