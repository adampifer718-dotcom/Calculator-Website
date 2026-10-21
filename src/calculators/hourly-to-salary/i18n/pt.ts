import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HourlyToSalaryText } from "../text/en";

const pt: CalculatorTranslation<HourlyToSalaryText> = {
  content: {
    title: "Calculadora de salário por hora",
    shortTitle: "Salário por hora",
    summary: "Converta o seu valor por hora em salário bruto anual, mensal, quinzenal, semanal e diário de acordo com o seu horário.",
    metaTitle: "Calculadora de salário por hora – Anual, mensal e semanal",
    metaDescription:
      "Converta um valor por hora em salário anual e consulte o bruto mensal, quinzenal, de duas em duas semanas, semanal e diário segundo as horas e semanas pagas.",
    keywords: ["salário por hora para anual", "calcular salário anual", "valor por hora", "salário bruto", "salário mensal", "quanto ganho por ano"],
    intro: [
      "Use esta calculadora para ver quanto representa um valor por hora ao longo de um ano e em cada período de pagamento habitual.",
      "É útil para comparar uma oferta de emprego paga à hora com outra de salário fixo, ou para verificar como variam os seus rendimentos brutos anuais com um horário a tempo parcial ou com semanas sem remuneração.",
    ],
    howToUse: [
      "Introduza o seu valor por hora antes de impostos e descontos.",
      "Indique as horas pagas por semana e as semanas pagas por ano.",
      "Indique os dias úteis por semana para obter um valor diário preciso.",
      "Consulte o salário anual equivalente e a decomposição por período de pagamento.",
    ],
    formulas: [
      {
        title: "Salário anual",
        expression: "Salário anual = valor por hora × horas por semana × semanas por ano",
        explanation: "Multiplicar pelas semanas pagas, e não pelas semanas do calendário, permite excluir o tempo livre não remunerado.",
      },
      {
        title: "Outros períodos de pagamento",
        expression: "Mensal = anual ÷ 12\nQuinzenal = anual ÷ 24\nDe duas em duas semanas = anual ÷ 26\nSemanal = anual ÷ semanas por ano\nDiário = anual ÷ (dias úteis por semana × semanas por ano)",
        explanation: "Cada período divide o mesmo montante anual, pelo que os valores são coerentes entre si.",
      },
    ],
    examples: [
      {
        title: "25 US$ por hora, a tempo inteiro",
        steps: ["Horas anuais = 40 × 52 = 2080", "Salário anual = 25 US$ × 2080 = 52 000 US$"],
      },
      {
        title: "18,50 US$ por hora, 30 horas semanais, 50 semanas pagas",
        steps: ["Horas anuais = 30 × 50 = 1500", "Salário anual = 18,50 US$ × 1500 = 27 750 US$"],
      },
      {
        title: "40 US$ por hora, 37,5 horas semanais, 48 semanas pagas",
        steps: ["Horas anuais = 37,5 × 48 = 1800", "Salário anual = 40 US$ × 1800 = 72 000 US$"],
      },
    ],
    assumptions: [
      "Os resultados são salário bruto antes de impostos e descontos. O salário líquido não é estimado.",
      "Todas as horas pagas são remuneradas ao mesmo valor. Não estão incluídos acréscimos por horas extraordinárias, gorjetas, prémios nem subsídios de turno.",
      "Os montantes mensal, quinzenal e de duas em duas semanas dividem o total anual por 12, 24 e 26.",
      "Escolher uma moeda altera apenas a formatação. Não é feita qualquer conversão cambial.",
      "Os resultados são arredondados para apresentação. Os cálculos usam a precisão completa.",
    ],
    faqs: [
      {
        question: "Quanto são 20 US$ por hora num ano?",
        answer: "Com 40 horas semanais durante 52 semanas, 20 US$ por hora equivalem a 20 US$ × 2080 = 41 600 US$ brutos por ano.",
      },
      {
        question: "Quantas horas de trabalho tem um ano?",
        answer:
          "Um horário a tempo inteiro de 40 horas semanais durante 52 semanas dá 2080 horas pagas. Altere as horas por semana ou as semanas pagas para o ajustar à sua situação.",
      },
      {
        question: "Como tenho em conta as férias não remuneradas?",
        answer: "Reduza as semanas pagas por ano. Por exemplo, com duas semanas sem remuneração, introduza 50 semanas.",
      },
      {
        question: "Porque é que o montante mensal não equivale a quatro semanas de salário?",
        answer:
          "Um mês dura, em média, mais de quatro semanas. O salário mensal é o total anual dividido por 12, o que equivale a cerca de 4,33 semanas de salário com 52 semanas por ano.",
      },
      {
        question: "Este é o meu salário líquido?",
        answer: "Não. São valores brutos antes do imposto sobre o rendimento e de outros descontos, que esta calculadora não estima.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    hourlyRate: "Valor por hora",
    hourlyRateHelp: "Remuneração bruta por hora, antes de impostos e descontos.",
    primary: "Salário anual equivalente",
    caption: "Remuneração bruta anual com o valor por hora e o horário introduzidos.",
    monthly: "Salário bruto mensal",
    annualHours: "Horas pagas por ano",
  },
};

export default pt;
