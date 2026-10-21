import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ProbabilityEventsText } from "../text/en";

const pt: CalculatorTranslation<ProbabilityEventsText> = {
  content: {
    title: "Calculadora de probabilidades (dois acontecimentos)",
    shortTitle: "Probabilidades",
    summary:
      "Combine as probabilidades de dois acontecimentos independentes ou mutuamente exclusivos: ambos, pelo menos um, exatamente um ou nenhum.",
    metaTitle: "Calculadora de probabilidades – Dois acontecimentos",
    metaDescription:
      "Calcule P(A e B), P(A ou B), exatamente um e nenhum para dois acontecimentos independentes ou mutuamente exclusivos, bem como o complementar de cada um.",
    keywords: ["probabilidade", "probabilidade de dois acontecimentos", "acontecimentos independentes", "acontecimentos mutuamente exclusivos", "P(A e B)", "P(A ou B)", "acontecimento complementar", "regra da adição"],
    intro: [
      "Muitas perguntas do dia a dia combinam duas probabilidades. Qual é a probabilidade de duas máquinas avariarem no mesmo dia, ou de um cliente pagar com cartão ou em numerário? Esta calculadora responde a perguntas deste tipo para dois acontecimentos, A e B.",
      "Introduza a probabilidade de cada acontecimento e indique como se relacionam. Os acontecimentos independentes não se influenciam, como dois lançamentos separados de uma moeda. Os acontecimentos mutuamente exclusivos não podem ocorrer ambos, como um único dado mostrar um 2 e um 5. A calculadora indica então a probabilidade de ambos, de pelo menos um, de exatamente um e de nenhum.",
    ],
    howToUse: [
      "Introduza P(A) e P(B) como percentagens entre 0% e 100%.",
      "Escolha Independentes se saber que um acontecimento ocorreu não altera a probabilidade do outro.",
      "Escolha Mutuamente exclusivos se os dois acontecimentos nunca puderem ocorrer em simultâneo. Nesse caso, as probabilidades não podem somar mais de 100%.",
      "Consulte P(A e B) como resultado principal e as outras combinações abaixo.",
    ],
    formulas: [
      { title: "Ambos (independentes)", expression: "P(A e B) = P(A) × P(B)", explanation: "A regra da multiplicação para acontecimentos independentes." },
      { title: "Ambos (mutuamente exclusivos)", expression: "P(A e B) = 0", explanation: "Os acontecimentos não têm resultados em comum." },
      {
        title: "Pelo menos um",
        expression: "P(A ou B) = P(A) + P(B) − P(A e B)",
        explanation: "A regra da adição. A interseção é subtraída para não ser contada duas vezes.",
      },
      {
        title: "Exatamente um",
        expression: "P(exatamente um) = P(A) + P(B) − 2 × P(A e B)",
        explanation: "Pelo menos um, menos o caso em que ambos ocorrem.",
      },
      {
        title: "Nenhum e complementares",
        expression: "P(nenhum) = 1 − P(A ou B)\nP(não A) = 1 − P(A)",
        explanation: "A regra do complementar: um acontecimento ou ocorre ou não ocorre.",
      },
    ],
    examples: [
      {
        title: "Duas máquinas independentes que avariam em 8% e 5% dos dias",
        steps: [
          "P(ambas avariam) = 0,08 × 0,05 = 0,004 = 0,4%",
          "P(pelo menos uma avaria) = 0,08 + 0,05 − 0,004 = 0,126 = 12,6%",
          "P(nenhuma avaria) = 1 − 0,126 = 87,4%",
        ],
      },
      {
        title: "Um cliente paga com cartão (62%) ou em numerário (18%), nunca das duas formas",
        steps: [
          "Os acontecimentos são mutuamente exclusivos, pelo que P(ambos) = 0",
          "P(cartão ou numerário) = 62% + 18% = 80%",
          "P(nenhum, por exemplo um vale) = 100% − 80% = 20%",
        ],
      },
      {
        title: "Converter dois lances livres quando cada um entra 75% das vezes",
        steps: [
          "P(ambos entram) = 0,75 × 0,75 = 0,5625 = 56,25%",
          "P(exatamente um) = 0,75 + 0,75 − 2 × 0,5625 = 37,5%",
          "P(nenhum) = 0,25 × 0,25 = 6,25%",
        ],
      },
    ],
    assumptions: [
      "As probabilidades são introduzidas como percentagens e tratadas como valores exatos.",
      "A calculadora abrange apenas os dois casos especiais de acontecimentos independentes e mutuamente exclusivos. Para acontecimentos que não são nem uma coisa nem outra, precisa de P(A e B) ou de uma probabilidade condicionada, que esta ferramenta não pede.",
      "A independência é uma propriedade da situação, não dos números. Trate os acontecimentos como dependentes, a menos que tenha boas razões para acreditar que são independentes.",
      "Os resultados são apresentados com quatro casas decimais de ponto percentual.",
    ],
    faqs: [
      {
        question: "Qual é a diferença entre independentes e mutuamente exclusivos?",
        answer:
          "Os acontecimentos independentes não se influenciam, pelo que ambos podem ocorrer. Os acontecimentos mutuamente exclusivos não podem ocorrer juntos, pelo que, se um ocorrer, o outro fica excluído. Dois acontecimentos com probabilidades não nulas nunca podem ser simultaneamente independentes e mutuamente exclusivos.",
      },
      {
        question: "Porque é que probabilidades mutuamente exclusivas não podem somar mais de 100%?",
        answer:
          "Se A e B nunca se sobrepõem, P(A ou B) é igual a P(A) + P(B). Uma probabilidade não pode exceder 100%, logo essa soma também não. Um total acima de 100% significa que os acontecimentos se sobrepõem e não são mutuamente exclusivos.",
      },
      {
        question: "Como calculo a probabilidade de algo acontecer pelo menos uma vez em várias tentativas?",
        answer:
          "Para tentativas independentes, calcule a probabilidade de nunca acontecer e subtraia-a de 1. Com duas tentativas de 30% cada, P(nenhuma) = 0,7 × 0,7 = 0,49, pelo que P(pelo menos uma vez) = 51%. Esta calculadora mostra esse valor como P(A ou B).",
      },
    ],
    sourcesUsedFor: [
      "Definições de acontecimentos independentes e mutuamente exclusivos, P(A e B) = P(A)·P(B) para acontecimentos independentes e P(A e B) = 0 para os mutuamente exclusivos.",
    ],
  },
  text: {
    pA: "Probabilidade de A, P(A)",
    pB: "Probabilidade de B, P(B)",
    pHelp: "Em percentagem, de 0% a 100%.",
    relation: "Como se relacionam A e B?",
    relationHelp: "Independentes: a ocorrência de um não altera a probabilidade do outro. Mutuamente exclusivos: não podem ocorrer ambos.",
    relationOptions: { independent: "Independentes", exclusive: "Mutuamente exclusivos" },
    exclusiveTooLarge: "Acontecimentos mutuamente exclusivos não podem ter P(A) + P(B) acima de 100%. Aqui, a soma é {sum}.",
    and: "P(A e B): ambos ocorrem",
    or: "P(A ou B): pelo menos um ocorre",
    exactlyOne: "P(exatamente um de A ou B)",
    neither: "P(nem A nem B)",
    notA: "P(não A)",
    notB: "P(não B)",
    independentCaption: "Para acontecimentos independentes, P(A e B) = P(A) × P(B).",
    exclusiveCaption: "Acontecimentos mutuamente exclusivos nunca ocorrem juntos, pelo que P(A e B) = 0.",
    certainNote: "Com P(A) + P(B) = 100%, é certo que um dos dois acontecimentos mutuamente exclusivos ocorre.",
  },
};

export default pt;
