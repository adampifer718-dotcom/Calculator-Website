import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SalesTaxText } from "../text/en";

const pt: CalculatorTranslation<SalesTaxText> = {
  content: {
    title: "Calculadora de imposto sobre vendas (IVA)",
    shortTitle: "Imposto sobre vendas",
    summary: "Acrescente o imposto sobre vendas a um preço, ou calcule o preço sem imposto a partir de um total que o inclui.",
    metaTitle: "Calculadora de imposto sobre vendas – Somar ou retirar IVA",
    metaDescription:
      "Calcule o imposto sobre vendas e o preço total, ou retire o imposto de um total com imposto incluído para obter o preço original. Qualquer taxa e moeda.",
    keywords: ["imposto sobre vendas", "iva", "taxa de iva", "preço com iva", "retirar iva", "iva incluído", "sales tax"],
    intro: [
      "Introduza um preço e uma taxa de imposto sobre vendas para ver o imposto e o total que vai pagar. Mude para retirar imposto para obter o preço sem imposto a partir do total de um talão.",
      "Os mesmos cálculos servem para o IVA e o GST, que também são percentagens acrescentadas a um preço.",
    ],
    howToUse: [
      "Escolha se pretende acrescentar o imposto a um preço ou retirá-lo de um total.",
      "Introduza o montante e a taxa de imposto em percentagem.",
      "Consulte o imposto, o total e o preço sem imposto.",
    ],
    formulas: [
      {
        title: "Acrescentar imposto",
        expression: "Imposto = preço × taxa ÷ 100\nTotal = preço + imposto",
        explanation: "Multiplique o preço pela taxa em forma decimal.",
      },
      {
        title: "Retirar imposto",
        expression: "Preço sem imposto = total ÷ (1 + taxa ÷ 100)",
        explanation: "Dividir por 1 mais a taxa anula o imposto. Subtrair a taxa ao total não o faz.",
      },
    ],
    examples: [
      { title: "100 US$ com 8,25% de imposto sobre vendas", steps: ["Imposto = 100 US$ × 0,0825 = 8,25 US$", "Total = 100 US$ + 8,25 US$ = 108,25 US$"] },
      { title: "Um total de 54 US$ com 8% de imposto incluído", steps: ["Preço = 54 US$ ÷ 1,08 = 50 US$", "Imposto = 54 US$ − 50 US$ = 4 US$"] },
    ],
    assumptions: [
      "A taxa é uma percentagem única aplicada ao montante total. Alguns locais tributam os artigos de forma diferente ou acrescentam impostos locais.",
      "Os resultados são arredondados ao cêntimo apenas para apresentação.",
      "A escolha da moeda altera apenas a formatação.",
    ],
    faqs: [
      {
        question: "Como calculo o imposto sobre vendas?",
        answer: "Multiplique o preço pela taxa de imposto em forma decimal. Para uma taxa de 7%, 50 US$ × 0,07 = 3,50 US$ de imposto.",
      },
      {
        question: "Como retiro o imposto de um total?",
        answer: "Divida o total por 1 mais a taxa. Um total de 107 US$ com 7% de imposto corresponde a 107 US$ ÷ 1,07 = 100 US$ sem imposto.",
      },
      {
        question: "O IVA calcula-se da mesma forma?",
        answer: "Sim. O IVA e o GST são percentagens do preço, pelo que se aplicam as mesmas fórmulas.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    mode: "Cálculo",
    modes: { add: "Acrescentar imposto a um preço", remove: "Retirar imposto de um total" },
    amount: "Montante",
    amountHelp: "Preço sem imposto, ou total com imposto incluído quando retira o imposto.",
    rate: "Taxa de imposto",
    beforeTax: "Preço sem imposto",
    beforeTaxCaption: "O total dividido por (1 + taxa de imposto).",
    taxIncluded: "Imposto incluído",
    total: "Total com imposto",
    totalCaption: "O preço mais o imposto sobre vendas.",
    tax: "Imposto sobre vendas",
  },
};

export default pt;
