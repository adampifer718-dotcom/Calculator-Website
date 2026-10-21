import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TipText } from "../text/en";

const pt: CalculatorTranslation<TipText> = {
  content: {
    title: "Calculadora de gorjeta",
    shortTitle: "Gorjeta",
    summary: "Calcule a gorjeta, o total da conta e quanto paga cada pessoa quando a conta é dividida.",
    metaTitle: "Calculadora de gorjeta – Valor da gorjeta e divisão da conta",
    metaDescription:
      "Calcule a gorjeta para qualquer conta e percentagem, o total com gorjeta e quanto paga cada pessoa quando a conta é dividida em partes iguais.",
    keywords: ["gorjeta", "calcular gorjeta", "dividir a conta", "restaurante", "conta do restaurante", "taxa de serviço"],
    intro: [
      "Introduza o valor da conta e uma percentagem de gorjeta para ver a gorjeta e o total. Acrescente o número de pessoas para dividir a conta em partes iguais.",
      "Os costumes variam consoante o país e o serviço, por isso escolha a percentagem mais adequada.",
    ],
    howToUse: [
      "Introduza o valor da conta.",
      "Introduza a percentagem de gorjeta.",
      "Introduza quantas pessoas vão dividir a conta.",
      "Consulte a gorjeta, o total e o valor por pessoa.",
    ],
    formulas: [
      {
        title: "Gorjeta",
        expression: "Gorjeta = conta × gorjeta % ÷ 100",
        explanation: "Algumas pessoas calculam a gorjeta sobre o valor sem impostos; introduza o que preferir.",
      },
      { title: "Divisão", expression: "Por pessoa = (conta + gorjeta) ÷ pessoas", explanation: "Uma divisão em partes iguais." },
    ],
    examples: [
      {
        title: "Conta de 80 US$, gorjeta de 18%, 4 pessoas",
        steps: ["Gorjeta = 80 US$ × 0,18 = 14,40 US$", "Total = 94,40 US$; cada pessoa paga 23,60 US$"],
      },
      {
        title: "Conta de 45 US$, gorjeta de 20%, 1 pessoa",
        steps: ["Gorjeta = 45 US$ × 0,20 = 9 US$", "Total = 54 US$"],
      },
    ],
    assumptions: [
      "A conta é dividida em partes iguais; os valores são arredondados ao cêntimo apenas para apresentação.",
      "A escolha da moeda altera apenas a formatação.",
    ],
    faqs: [
      {
        question: "Quanto devo dar de gorjeta?",
        answer:
          "Depende dos costumes locais e do serviço. Nos EUA, é habitual dar 15–20% nos restaurantes; noutros países a gorjeta pode ser menor ou já estar incluída.",
      },
      {
        question: "A gorjeta deve ser calculada antes ou depois dos impostos?",
        answer: "Ambas as opções são comuns. Introduza como conta o valor sem impostos ou com impostos, conforme preferir.",
      },
      {
        question: "Como divido uma conta em partes desiguais?",
        answer: "Calcule separadamente a parte da conta de cada pessoa e aplique depois a percentagem de gorjeta a cada uma.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    bill: "Valor da conta",
    percent: "Percentagem de gorjeta",
    people: "Dividir por",
    tip: "Gorjeta",
    total: "Total com gorjeta",
    each: "Cada pessoa paga",
    tipEach: "Gorjeta por pessoa",
  },
};

export default pt;
