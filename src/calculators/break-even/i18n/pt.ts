import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BreakEvenText } from "../text/en";

const pt: CalculatorTranslation<BreakEvenText> = {
  content: {
    title: "Calculadora do ponto de equilíbrio",
    shortTitle: "Ponto de equilíbrio",
    summary: "Descubra quantas unidades precisa de vender para cobrir os custos fixos e quais são as receitas no ponto de equilíbrio.",
    metaTitle: "Calculadora do ponto de equilíbrio – Unidades e receitas",
    metaDescription:
      "Calcule o ponto de equilíbrio em unidades e receitas a partir dos custos fixos, do preço e do custo variável unitário, com a margem de contribuição.",
    keywords: ["ponto de equilíbrio", "limiar de rendibilidade", "margem de contribuição", "custos fixos", "custos variáveis", "ponto crítico das vendas"],
    intro: [
      "O ponto de equilíbrio é o nível em que as receitas totais igualam os custos totais, de modo que não há lucro nem prejuízo.",
      "Cada unidade vendida contribui com o seu preço menos o seu custo variável para cobrir os custos fixos. Depois de estes estarem cobertos, o resto das vendas é lucro.",
    ],
    howToUse: [
      "Introduza os custos fixos do período.",
      "Introduza o preço de venda por unidade.",
      "Introduza o custo variável por unidade.",
      "Consulte as unidades e as receitas necessárias para atingir o ponto de equilíbrio.",
    ],
    formulas: [
      { title: "Unidades no ponto de equilíbrio", expression: "unidades = custos fixos ÷ (preço − custo variável)", explanation: "O denominador é a margem de contribuição por unidade." },
      { title: "Receitas no ponto de equilíbrio", expression: "receitas = unidades × preço", explanation: "Equivale a custos fixos ÷ rácio da margem de contribuição." },
    ],
    examples: [
      {
        title: "10 000 US$ de custos fixos, preço de 50 US$, custo variável de 30 US$",
        steps: ["Contribuição = 50 US$ − 30 US$ = 20 US$", "Unidades = 10 000 ÷ 20 = 500"],
      },
      {
        title: "2500 US$ de custos fixos, preço de 12 US$, custo variável de 4,50 US$",
        steps: ["Contribuição = 7,50 US$", "Unidades = 2500 ÷ 7,5 ≈ 333,33, ou seja, 334 unidades"],
      },
    ],
    assumptions: [
      "O preço e o custo variável por unidade mantêm-se constantes para qualquer volume.",
      "Os custos fixos correspondem ao mesmo período que as vendas que está a planear.",
      "Não estão incluídos impostos nem custos de financiamento, a menos que os some aos custos fixos.",
    ],
    faqs: [
      {
        question: "O que é a margem de contribuição?",
        answer: "O preço menos o custo variável por unidade: aquilo com que cada venda contribui para os custos fixos e para o lucro.",
      },
      { question: "E se o custo variável for superior ao preço?", answer: "Cada venda perde dinheiro, por isso, com esse preço, nunca atingirá o ponto de equilíbrio." },
      {
        question: "Como calculo as unidades para um lucro pretendido?",
        answer: "Some o lucro pretendido aos custos fixos e divida pela margem de contribuição.",
      },
    ],
    sourcesUsedFor: ["Análise custo-volume-resultado e fórmulas do ponto de equilíbrio."],
  },
  text: {
    fixed: "Custos fixos",
    fixedHelp: "Custos que não variam com o volume, como a renda e os salários.",
    price: "Preço por unidade",
    variable: "Custo variável por unidade",
    variableHelp: "Materiais, embalagem e outros custos por unidade.",
    variableTooHigh: "O custo variável tem de ser inferior ao preço; caso contrário, nunca atingirá o ponto de equilíbrio.",
    units: "Volume no ponto de equilíbrio",
    unitsSuffix: "unidades",
    caption: "Arredondado por excesso para {count} unidades inteiras.",
    revenue: "Receitas no ponto de equilíbrio",
    contribution: "Margem de contribuição por unidade",
    ratio: "Rácio da margem de contribuição",
  },
};

export default pt;
