import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BayesText } from "../text/en";

const pt: CalculatorTranslation<BayesText> = {
  content: {
    title: "Calculadora do teorema de Bayes",
    shortTitle: "Teorema de Bayes",
    summary: "Atualize uma probabilidade a priori com nova evidência e veja o resultado em frequências naturais, em 10 000 casos.",
    metaTitle: "Teorema de Bayes – Probabilidade a posteriori P(A|B)",
    metaDescription:
      "Obtenha P(A|B) a partir da probabilidade a priori, da verosimilhança e da taxa de falsos alarmes. Veja P(B), P(A|não B) e os positivos em 10 000 casos.",
    keywords: ["teorema de Bayes", "regra de Bayes", "probabilidade a posteriori", "probabilidade condicionada", "valor preditivo positivo", "falso positivo", "sensibilidade", "prevalência"],
    intro: [
      "O teorema de Bayes indica quanto deve acreditar em algo depois de observar uma evidência. Combina a probabilidade inicial da hipótese (a probabilidade a priori) com quanto mais frequentemente a evidência surge quando a hipótese é verdadeira do que quando é falsa.",
      "O caso clássico é um teste de rastreio. Mesmo um teste que deteta a maioria dos casos pode produzir mais falsos alarmes do que verdadeiros positivos quando a condição é rara. Introduza três percentagens para obter a probabilidade atualizada e uma decomposição de 10 000 casos imaginários que torna o resultado fácil de verificar à mão.",
    ],
    howToUse: [
      "Introduza a probabilidade a priori P(A): quão comum é A antes de olhar para a evidência, como a prevalência de uma condição.",
      "Introduza P(B | A): com que frequência a evidência surge quando A é verdadeiro, como a sensibilidade de um teste.",
      "Introduza P(B | não A): com que frequência a evidência surge mesmo quando A é falso, como a taxa de falsos positivos.",
      "Consulte P(A | B) e use a tabela de 10 000 casos para ver de onde vêm os positivos.",
    ],
    formulas: [
      { title: "Teorema de Bayes", expression: "P(A | B) = P(B | A) · P(A) ÷ P(B)", explanation: "A probabilidade a posteriori é a proporção de todos os casos com B que também têm A." },
      {
        title: "Probabilidade total",
        expression: "P(B) = P(B | A) · P(A) + P(B | não A) · (1 − P(A))",
        explanation: "B pode ocorrer com A (verdadeiros positivos) ou sem A (falsos positivos).",
      },
      {
        title: "Resultado negativo",
        expression: "P(A | não B) = (1 − P(B | A)) · P(A) ÷ (1 − P(B))",
        explanation: "A probabilidade de A continuar a ser verdadeiro quando B não é observado (falsos negativos entre todos os negativos).",
      },
    ],
    examples: [
      {
        title: "Um teste de rastreio para uma condição que afeta 2% das pessoas",
        steps: [
          "Em 10 000 pessoas, 200 têm a condição e 95% delas têm resultado positivo: 190 verdadeiros positivos.",
          "Das 9800 sem a condição, 8% têm resultado positivo: 784 falsos positivos.",
          "P(A | B) = 190 ÷ (190 + 784) ≈ 19,51%",
        ],
      },
      {
        title: "Uma palavra que denuncia correio eletrónico não solicitado (spam)",
        steps: ["P(B) = 0,30 × 0,40 + 0,02 × 0,60 = 0,132", "P(A | B) = 0,12 ÷ 0,132 ≈ 90,91%"],
      },
      {
        title: "Uma condição muito rara e um teste preciso",
        steps: [
          "Em 10 000 pessoas: 9,9 verdadeiros positivos e 99,9 falsos positivos.",
          "P(A | B) = 9,9 ÷ 109,8 ≈ 9,02%, embora o teste acerte em 99% dos casos.",
        ],
      },
    ],
    assumptions: [
      "As três percentagens são tomadas como exatas. Na prática, a sensibilidade e a taxa de falsos positivos de um teste são estimativas, e a probabilidade a priori depende de quem é testado.",
      "A probabilidade a priori deve descrever o grupo de onde vem o caso. Quem é testado por ter sintomas tem uma probabilidade a priori mais elevada do que uma pessoa qualquer da população.",
      "Os exemplos de diagnóstico ilustram apenas os cálculos. A interpretação do resultado de um exame médico real exige um profissional de saúde, que pode ponderar os sintomas, os antecedentes e os exames complementares.",
    ],
    faqs: [
      {
        question: "Porque é que P(A | B) é tão baixa quando o teste é preciso?",
        answer: "Quando A é raro, os poucos casos verdadeiros são ultrapassados em número pelas muitas pessoas sem A, e mesmo uma pequena taxa de falsos positivos nesse grupo grande produz mais falsos alarmes do que verdadeiros positivos.",
      },
      {
        question: "Como correspondem a sensibilidade e a especificidade aos dados de entrada?",
        answer: "A sensibilidade é P(B | A). A taxa de falsos alarmes P(B | não A) é 100% menos a especificidade, pelo que uma especificidade de 97% significa uma taxa de falsos alarmes de 3%.",
      },
      {
        question: "O que mostra a tabela de 10 000 casos?",
        answer: "Converte as probabilidades em contagens esperadas de verdadeiros positivos, falsos positivos, falsos negativos e verdadeiros negativos. P(A | B) é o número de verdadeiros positivos dividido pelo total de positivos.",
      },
    ],
    sourcesUsedFor: [
      "Como a sensibilidade, a taxa de falsos positivos e a prevalência se combinam em valores preditivos através de uma tabela 2×2.",
      "Probabilidades condicionadas lidas numa tabela de contagens.",
    ],
  },
  text: {
    prior: "Probabilidade a priori P(A)",
    priorHelp: "A probabilidade de A antes de qualquer evidência, por exemplo, quão comum é uma condição no grupo testado.",
    likelihood: "Verosimilhança P(B | A)",
    likelihoodHelp: "Com que frequência a evidência B surge quando A é verdadeiro, por exemplo, a sensibilidade de um teste (taxa de verdadeiros positivos).",
    falseAlarm: "Taxa de falsos alarmes P(B | não A)",
    falseAlarmHelp: "Com que frequência B surge quando A é falso, por exemplo, a taxa de falsos positivos de um teste (100% menos a especificidade).",
    zeroEvidence: "Com estes valores, a evidência B nunca pode ocorrer (P(B) = 0), pelo que P(A | B) é indefinida. Aumente P(A) ou uma das taxas acima de 0%.",
    posterior: "Probabilidade a posteriori P(A | B)",
    caption: "A probabilidade de A ser verdadeiro depois de se observar B.",
    pB: "Probabilidade total da evidência P(B)",
    pNotAGivenB: "P(não A | B)",
    pAGivenNotB: "P(A | não B)",
    undefinedNotB: "Indefinida: B ocorre sempre, pelo que «não B» nunca acontece",
    tableCaption: "Em 10 000 casos",
    tableColumns: { outcome: "Resultado", cases: "Casos" },
    rows: {
      tp: "Verdadeiros positivos (A e B)",
      fp: "Falsos positivos (não A, mas B)",
      fn: "Falsos negativos (A, mas não B)",
      tn: "Verdadeiros negativos (não A e não B)",
    },
    liftNote: "Observar B multiplica as chances de A por {ratio} (a razão de verosimilhanças P(B | A) ÷ P(B | não A)).",
    rareNote: "Quando A é raro, a maioria dos casos com B pode continuar a ser falsos alarmes, mesmo que o teste seja preciso.",
    note: "Os valores em 10 000 casos são contagens esperadas e podem ser fracionários.",
  },
};

export default pt;
