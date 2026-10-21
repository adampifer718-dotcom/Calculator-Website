import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DiscountText } from "../text/en";

const pt: CalculatorTranslation<DiscountText> = {
  content: {
    title: "Calculadora de descontos",
    shortTitle: "Descontos",
    summary: "Calcule o preço com desconto e quanto poupa a partir do preço original e de uma percentagem de desconto.",
    metaTitle: "Calculadora de descontos – Preço com desconto e poupança",
    metaDescription:
      "Calcule o preço final depois de aplicar um desconto percentual e quanto poupa. Introduza o preço original e a percentagem de desconto para o ver de imediato.",
    keywords: ["calcular desconto", "preço com desconto", "percentagem de desconto", "saldos", "cupão de desconto", "quanto poupo"],
    intro: [
      "Introduza o preço original e a percentagem de desconto para ver o preço com desconto e quanto poupa.",
      "É útil nos saldos, com cupões e para comparar promoções.",
    ],
    howToUse: [
      "Introduza o preço original.",
      "Introduza a percentagem de desconto.",
      "Consulte o preço com desconto e o montante poupado.",
    ],
    formulas: [
      { title: "Poupança", expression: "Poupança = preço × % de desconto ÷ 100", explanation: "O montante que é descontado." },
      {
        title: "Preço com desconto",
        expression: "Preço com desconto = preço − poupança = preço × (1 − desconto ÷ 100)",
        explanation: "O que paga antes de qualquer imposto sobre as vendas.",
      },
    ],
    examples: [
      {
        title: "120 US$ com 25 % de desconto",
        steps: ["Poupança = 120 US$ × 0,25 = 30 US$", "Preço com desconto = 120 US$ − 30 US$ = 90 US$"],
      },
      {
        title: "59,99 US$ com 15 % de desconto",
        steps: ["Poupança = 59,99 US$ × 0,15 = 9,00 US$", "Preço com desconto ≈ 50,99 US$"],
      },
    ],
    assumptions: [
      "O imposto sobre as vendas não está incluído; use a calculadora de imposto sobre as vendas para o acrescentar.",
      "Dois descontos seguidos multiplicam-se, não se somam: 20 % e depois 10 % equivalem a 28 % de desconto, não a 30 %.",
    ],
    faqs: [
      {
        question: "Como se calcula um desconto percentual?",
        answer: "Multiplique o preço pelo desconto expresso em decimal e subtraia o resultado. Um desconto de 30 % sobre 50 US$ dá 50 US$ − 15 US$ = 35 US$.",
      },
      {
        question: "Dois descontos equivalem a somá-los?",
        answer: "Não. Um desconto de 20 % seguido de outro de 10 % deixa 0,8 × 0,9 = 72 % do preço, ou seja, um desconto total de 28 %.",
      },
      {
        question: "Como calculo o preço original a partir do preço com desconto?",
        answer: "Divida o preço com desconto por (1 − desconto ÷ 100). 60 US$ depois de um desconto de 25 % eram 60 US$ ÷ 0,75 = 80 US$.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    price: "Preço original",
    percent: "Desconto",
    sale: "Preço com desconto",
    save: "Poupa",
    share: "Percentagem do preço original",
  },
};

export default pt;
