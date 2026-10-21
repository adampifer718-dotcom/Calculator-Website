import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CombinationsText } from "../text/en";

const pt: CalculatorTranslation<CombinationsText> = {
  content: {
    title: "Calculadora de permutações e combinações",
    shortTitle: "Permutações e combinações",
    summary:
      "Conte de forma exata as maneiras de escolher ou ordenar r de n elementos: nCr, nPr e ambas as contagens com repetição.",
    metaTitle: "Calculadora de permutações e combinações – nCr, nPr",
    metaDescription:
      "Calcule nCr e nPr exatos para n até 10 000, bem como combinações e permutações com repetição, com os resultados enormes em notação científica.",
    keywords: [
      "permutações",
      "combinações",
      "calculadora de combinações",
      "nCr",
      "nPr",
      "coeficiente binomial",
      "combinações com repetição",
      "análise combinatória",
    ],
    intro: [
      "Quantas comissões diferentes de 4 pessoas pode formar um clube de 12? De quantas maneiras se podem distribuir 3 prémios entre 25 participantes? São problemas de contagem, e a resposta depende de a ordem importar ou não.",
      "Uma combinação conta seleções em que a ordem não importa: a comissão {Ana, Ben, Cy} é a mesma em qualquer ordem. Uma permutação conta ordenações em que a ordem importa: primeiro, segundo e terceiro prémio são resultados diferentes. Esta calculadora dá ambos os valores de forma exata, bem como as versões em que um elemento pode ser escolhido mais do que uma vez.",
    ],
    howToUse: [
      "Introduza n, o número de elementos distintos entre os quais escolher (de 0 a 10 000).",
      "Introduza r, quantos escolhe (de 0 a n).",
      "Consulte nCr para seleções sem ordem e nPr para ordenações.",
      "Use os resultados com repetição quando o mesmo elemento pode voltar a ser escolhido, como as bolas de gelado (combinações) ou os algarismos de um PIN (permutações).",
    ],
    formulas: [
      {
        title: "Combinações",
        expression: "nCr = n! ÷ (r! × (n − r)!)",
        explanation: "Seleções de r elementos entre n em que a ordem não importa.",
      },
      {
        title: "Permutações",
        expression: "nPr = n! ÷ (n − r)! = n × (n − 1) × … × (n − r + 1)",
        explanation: "Ordenações de r elementos entre n. nPr = nCr × r!",
      },
      {
        title: "Combinações com repetição",
        expression: "C(n + r − 1, r)",
        explanation: "Seleções de r elementos de n tipos quando um tipo pode ser escolhido mais do que uma vez (a contagem de «estrelas e barras»).",
      },
      {
        title: "Permutações com repetição",
        expression: "nʳ",
        explanation: "Sequências ordenadas de comprimento r em que cada posição pode ser qualquer um dos n elementos.",
      },
    ],
    examples: [
      {
        title: "Comissões de 4 num clube de 12",
        steps: ["12C4 = 12! ÷ (4! × 8!)", "= (12 × 11 × 10 × 9) ÷ (4 × 3 × 2 × 1) = 11 880 ÷ 24", "= 495 comissões diferentes"],
      },
      {
        title: "Ouro, prata e bronze entre 25 participantes",
        steps: [
          "Nas medalhas a ordem importa: 25P3 = 25 × 24 × 23 = 13 800",
          "Se os 3 vencedores recebessem prémios idênticos: 25C3 = 13 800 ÷ 3! = 2300",
          "O resultado principal mostra 2300; o número de permutações aparece por baixo",
        ],
      },
      {
        title: "Escolher 100 de 200 elementos",
        steps: [
          "200C100 = 200! ÷ (100! × 100!)",
          "O valor exato tem 59 algarismos e começa por 9 054 851 465…",
          "É apresentado como 9,054851 × 10⁵⁸ (59 algarismos)",
        ],
      },
    ],
    assumptions: [
      "Os n elementos são distintos. Contar ordenações de elementos repetidos (como as letras de BANANA) exige outra fórmula.",
      "Os quatro resultados são calculados de forma exata com aritmética de números inteiros. Os resultados com mais de 30 algarismos são apresentados em notação científica, arredondados a 7 algarismos significativos, juntamente com o número total de algarismos.",
      "Por convenção 0! = 1, pelo que nC0 = nP0 = 1 e não escolher nada conta como uma maneira.",
      "n está limitado a 10 000 para que os resultados sejam rápidos; ainda assim, nʳ pode chegar a ter 40 001 algarismos.",
    ],
    faqs: [
      {
        question: "Como sei se devo usar uma permutação ou uma combinação?",
        answer:
          "Pergunte a si mesmo se trocar dois dos elementos escolhidos dá um resultado diferente. Se sim, como com lugares, classificações ou palavras-passe, use uma permutação. Se não, como com uma mão de cartas ou um grupo de pessoas, use uma combinação.",
      },
      {
        question: "Porque é que nCr é igual a nC(n − r)?",
        answer:
          "Escolher r elementos para levar equivale a escolher os n − r que deixa. Por exemplo, escolher 3 de 10 pessoas para uma equipa (120 maneiras) equivale a escolher as 7 que ficam de fora (também 120 maneiras).",
      },
      {
        question: "O que significa «com repetição»?",
        answer:
          "Significa que um elemento pode ser escolhido mais do que uma vez. Um PIN de 4 algarismos usa permutações com repetição: 10⁴ = 10 000 códigos. Escolher 3 bolas de gelado entre 5 sabores, podendo repetir sabores, usa combinações com repetição: C(7, 3) = 35.",
      },
    ],
    sourcesUsedFor: [
      "O princípio multiplicativo e as fórmulas de permutações e combinações de n objetos distintos.",
    ],
  },
  text: {
    n: "Total de elementos (n)",
    nHelp: "Um número inteiro de 0 a 10 000.",
    r: "Elementos escolhidos (r)",
    rHelp: "Um número inteiro de 0 a n.",
    rTooLarge: "r não pode ser maior do que n ({n}). Não é possível escolher mais elementos distintos do que os que existem.",
    combinations: "Combinações, nCr (a ordem não importa)",
    permutations: "Permutações, nPr (a ordem importa)",
    combinationsRepeat: "Combinações com repetição, C(n + r − 1, r)",
    permutationsRepeat: "Permutações com repetição, nʳ",
    digits: { zero: "{n} algarismos", one: "{n} algarismo", two: "{n} algarismos", few: "{n} algarismos", many: "{n} algarismos", other: "{n} algarismos" },
    large: "{value} ({digits})",
    caption: "Maneiras de escolher {r} de {n} elementos quando a ordem não importa.",
    largeNote:
      "Os resultados com mais de 30 algarismos são apresentados em notação científica, arredondados a 7 algarismos significativos, com o número exato de algarismos.",
    zeroRepeat: "Com n = 0 e r = 0 há exatamente uma maneira de não escolher nada, pelo que todas as contagens valem 1.",
  },
};

export default pt;
