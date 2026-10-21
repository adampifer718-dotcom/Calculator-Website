import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RoiText } from "../text/en";

const pt: CalculatorTranslation<RoiText> = {
  content: {
    title: "Calculadora de ROI (retorno do investimento)",
    shortTitle: "ROI",
    summary: "Meça o retorno do investimento em percentagem, com o ganho ou a perda líquida e uma taxa anualizada opcional.",
    metaTitle: "Calculadora de ROI – Retorno do investimento e anualizado",
    metaDescription:
      "Calcule o retorno do investimento a partir do montante investido e do montante recebido. Veja o ganho ou a perda líquida, o ROI total e o ROI anualizado.",
    keywords: ["retorno do investimento", "roi", "rendibilidade do investimento", "lucro", "ganho", "retorno anualizado", "taxa de crescimento anual composta"],
    intro: [
      "O retorno do investimento (ROI) compara o que recebeu com o que investiu. É uma forma rápida de comparar investimentos, projetos ou compras de dimensões diferentes.",
      "Indique durante quanto tempo manteve o investimento para ver o ROI anualizado, que torna comparáveis retornos obtidos em períodos diferentes.",
    ],
    howToUse: [
      "Introduza o montante total investido, incluindo as comissões que pagou na compra.",
      "Introduza o montante recebido: o valor final ou o total obtido, incluindo o montante original.",
      "Opcionalmente, introduza o número de anos durante os quais manteve o investimento.",
      "Consulte o ROI total, o ganho ou a perda líquida e o ROI anualizado.",
    ],
    formulas: [
      {
        title: "Retorno do investimento",
        expression: "ROI = (montante recebido − montante investido) ÷ montante investido × 100",
        explanation: "Um ROI positivo é um ganho e um ROI negativo é uma perda.",
      },
      {
        title: "ROI anualizado",
        expression: "ROI anualizado = ((montante recebido ÷ montante investido)^(1 ÷ anos) − 1) × 100",
        explanation:
          "É a taxa anual constante que faria crescer o montante investido até ao montante recebido ao longo do período, também conhecida como CAGR (taxa de crescimento anual composta).",
      },
    ],
    examples: [
      {
        title: "10 000 US$ passam a 12 500 US$ em 3 anos",
        steps: [
          "Ganho líquido = 12 500 US$ − 10 000 US$ = 2500 US$",
          "ROI = 2500 US$ ÷ 10 000 US$ × 100 = 25%",
          "Anualizado = (1,25^(1/3) − 1) × 100 ≈ 7,72%",
        ],
      },
      {
        title: "5000 US$ descem para 4200 US$",
        steps: ["Perda líquida = 4200 US$ − 5000 US$ = −800 US$", "ROI = −800 US$ ÷ 5000 US$ × 100 = −16%"],
      },
    ],
    assumptions: [
      "Os impostos, as comissões, os dividendos e outros fluxos de caixa só são incluídos se os somar aos montantes introduzidos.",
      "O ROI anualizado pressupõe que o crescimento se capitaliza a uma taxa constante ao longo do período. Não tem em conta o momento dos depósitos ou levantamentos.",
      "A escolha da moeda altera apenas a formatação. Não é feita qualquer conversão cambial.",
      "Os retornos passados não garantem resultados futuros. Esta calculadora não presta aconselhamento de investimento.",
    ],
    faqs: [
      {
        question: "O que é um bom ROI?",
        answer:
          "Depende do risco, do período e das alternativas disponíveis. Compare o ROI anualizado em vez do ROI total quando os períodos de detenção forem diferentes.",
      },
      {
        question: "Qual é a diferença entre ROI e ROI anualizado?",
        answer:
          "O ROI é o retorno total ao longo de todo o período. O ROI anualizado converte-o numa taxa anual equivalente. Um retorno de 25% em 3 anos corresponde a cerca de 7,72% ao ano.",
      },
      {
        question: "Devo incluir comissões e dividendos?",
        answer:
          "Sim, para obter um valor exato. Some as comissões de compra ao montante investido e some os dividendos ou juros recebidos ao montante recebido.",
      },
      {
        question: "O ROI pode ser negativo?",
        answer: "Sim. Se recebe menos do que investiu, o ROI é negativo. O ROI mais baixo possível é −100%, quando não recebe nada.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    invested: "Montante investido",
    investedHelp: "Custo total do investimento.",
    finalValue: "Montante recebido",
    finalValueHelp: "Valor final ou total obtido, incluindo o montante original.",
    years: "Duração do investimento (opcional)",
    yearsHelp: "Indique os anos de detenção para ver o ROI anualizado.",
    primary: "Retorno do investimento",
    gainCaption: "Ganho total em relação ao montante investido.",
    lossCaption: "Perda total em relação ao montante investido.",
    net: "Ganho ou perda líquida",
    annualized: "ROI anualizado",
    addLength: "Indique a duração do investimento",
    note: "Aqui, o ROI ignora impostos, comissões e o momento de quaisquer fluxos de caixa intermédios, a menos que estejam incluídos nos montantes.",
  },
};

export default pt;
