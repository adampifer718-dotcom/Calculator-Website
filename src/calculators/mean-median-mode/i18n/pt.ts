import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MeanMedianModeText } from "../text/en";

const pt: CalculatorTranslation<MeanMedianModeText> = {
  content: {
    title: "Calculadora de média, mediana e moda",
    shortTitle: "Média, mediana e moda",
    summary: "Calcule a média, a mediana, a moda, a amplitude e a soma de uma lista de números.",
    metaTitle: "Calculadora de média, mediana e moda – Medidas centrais",
    metaDescription:
      "Calcule a média, a mediana, a moda, a amplitude e a soma de um conjunto de dados. Cole números separados por ponto e vírgula, espaços ou mudanças de linha.",
    keywords: ["média mediana e moda", "calcular a média", "calcular média aritmética", "mediana", "moda estatística", "medidas de tendência central", "estatística"],
    intro: [
      "A média, a mediana e a moda são três formas de descrever o centro de um conjunto de dados. Podem ser muito diferentes quando os dados são assimétricos ou têm valores atípicos.",
      "Cole ou escreva os seus números para ver as três, bem como a amplitude e a soma.",
    ],
    howToUse: [
      "Introduza os seus números separados por ponto e vírgula, espaços ou mudanças de linha.",
      "Consulte a média, a mediana, a moda, a amplitude e a soma.",
    ],
    formulas: [
      { title: "Média", expression: "média = soma dos valores ÷ número de valores", explanation: "A média aritmética." },
      {
        title: "Mediana",
        expression: "O valor central dos dados ordenados; com um número par de valores, a média dos dois centrais",
        explanation: "É pouco afetada pelos valores atípicos.",
      },
      { title: "Moda", expression: "O valor ou valores que mais se repetem", explanation: "Um conjunto de dados pode ter várias modas ou nenhuma." },
    ],
    examples: [
      {
        title: "2, 4, 4, 5, 7, 9",
        steps: ["Soma = 31; média = 31 ÷ 6 ≈ 5,17", "Mediana = (4 + 5) ÷ 2 = 4,5; moda = 4"],
      },
      {
        title: "10, 20, 30",
        steps: ["Média = 60 ÷ 3 = 20", "Mediana = 20; sem moda"],
      },
    ],
    assumptions: ["Aceita até 10 000 números.", "Os resultados são apresentados com 10 algarismos significativos."],
    faqs: [
      {
        question: "Quando devo usar a mediana em vez da média?",
        answer: "Quando os dados são assimétricos ou têm valores atípicos, como os rendimentos ou os preços das casas; a mediana é menos afetada pelos valores extremos.",
      },
      { question: "Pode haver mais do que uma moda?", answer: "Sim. Se vários valores empatarem na frequência mais alta, todos são modas." },
      { question: "E se nenhum número se repetir?", answer: "Nesse caso, não há moda." },
    ],
    sourcesUsedFor: ["Definições da média, da mediana e da moda."],
  },
  text: {
    data: "Conjunto de dados",
    dataHelp: "Separe os valores com ponto e vírgula, espaços ou mudanças de linha (por exemplo, 1,5; 2,25; 3). Use a vírgula como separador decimal; uma vírgula seguida de espaço também separa valores.",
    errors: {
      empty: "Introduza pelo menos um número.",
      tooMany: "Introduza no máximo {max} números.",
      notNumber: "«{token}» não é um número. Use a vírgula decimal e separe os valores com ponto e vírgula, espaços ou mudanças de linha.",
      tooLarge: "«{token}» é demasiado grande.",
    },
    mean: "Média (média aritmética)",
    caption: "{count} valores.",
    median: "Mediana",
    mode: "Moda",
    modes: "Modas",
    noMode: "Sem moda (todos os valores ocorrem uma vez)",
    range: "Amplitude",
    sum: "Soma",
  },
};

export default pt;
