import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ProfitMarginText } from "../text/en";

const pt: CalculatorTranslation<ProfitMarginText> = {
  content: {
    title: "Calculadora de margem de lucro",
    shortTitle: "Margem de lucro",
    summary: "Calcule o lucro, a margem de lucro e a margem sobre o custo (markup) a partir do custo e do preço de venda.",
    metaTitle: "Calculadora de margem de lucro – Margem e markup",
    metaDescription:
      "Calcule o lucro bruto, a margem de lucro e a percentagem de markup a partir do custo e do preço de venda, e veja a diferença entre margem e markup.",
    keywords: ["margem de lucro", "margem bruta", "markup", "margem sobre o custo", "preço de venda", "lucro", "comércio eletrónico"],
    intro: [
      "A margem e o markup descrevem ambos o lucro, mas em relação a bases diferentes. A margem compara o lucro com o preço de venda; o markup compara-o com o custo.",
      "Introduza quanto lhe custa um artigo e por quanto o vende.",
    ],
    howToUse: ["Introduza o custo.", "Introduza o preço de venda.", "Consulte o lucro, a margem e o markup."],
    formulas: [
      { title: "Lucro", expression: "lucro = preço − custo", explanation: "Lucro bruto por artigo ou para uma encomenda inteira." },
      { title: "Margem", expression: "margem = lucro ÷ preço × 100", explanation: "Parte do preço que é lucro." },
      { title: "Markup", expression: "markup = lucro ÷ custo × 100", explanation: "Quanto foi acrescentado ao custo." },
    ],
    examples: [
      { title: "Custo de 60 US$, preço de 100 US$", steps: ["Lucro = 40 US$", "Margem = 40 ÷ 100 = 40%; markup = 40 ÷ 60 ≈ 66,67%"] },
      { title: "Custo de 25 US$, preço de 40 US$", steps: ["Lucro = 15 US$", "Margem = 15 ÷ 40 = 37,5%"] },
    ],
    assumptions: [
      "Trata-se da margem bruta: só está incluído o custo que introduz, sem custos indiretos nem impostos.",
      "A escolha da moeda altera apenas a formatação.",
    ],
    faqs: [
      {
        question: "Qual é a diferença entre margem e markup?",
        answer: "A margem divide o lucro pelo preço; o markup divide-o pelo custo. Um markup de 50% corresponde a uma margem de 33,3%.",
      },
      {
        question: "A margem pode ser superior a 100%?",
        answer: "Não. A margem é uma parte do preço de venda, pelo que é no máximo 100% (quando o custo é zero).",
      },
      {
        question: "Como defino um preço para uma margem pretendida?",
        answer: "Preço = custo ÷ (1 − margem pretendida). Para uma margem de 40% sobre um custo de 60 US$, preço = 60 ÷ 0,6 = 100 US$.",
      },
    ],
    sourcesUsedFor: ["Definições de lucro bruto e de margem."],
  },
  text: {
    cost: "Custo",
    price: "Preço de venda (receita)",
    margin: "Margem de lucro",
    caption: "Lucro em proporção do preço de venda.",
    profit: "Lucro",
    loss: "Prejuízo",
    markup: "Markup",
    undefinedMarkup: "Indefinido com custo zero",
  },
};

export default pt;
