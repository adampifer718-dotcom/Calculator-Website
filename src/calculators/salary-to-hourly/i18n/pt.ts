import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SalaryToHourlyText } from "../text/en";

const pt: CalculatorTranslation<SalaryToHourlyText> = {
  content: {
    title: "Calculadora de conversão de salário em valor por hora",
    shortTitle: "Salário para valor por hora",
    summary:
      "Converta um salário bruto anual, mensal, quinzenal ou de outra periodicidade num valor por hora, com base no seu próprio horário de trabalho.",
    metaTitle: "Salário para valor por hora – Qualquer periodicidade",
    metaDescription:
      "Converta um salário num valor por hora. Introduza o salário bruto anual, mensal, quinzenal, semanal ou diário e as horas, dias e semanas de trabalho por ano.",
    keywords: ["salário", "valor por hora", "salário por hora", "remuneração", "anual para hora", "mensal para hora", "recibo de vencimento", "taxa horária"],
    intro: [
      "Esta calculadora converte o salário bruto de qualquer periodicidade habitual num valor por hora equivalente. Mostra também quanto corresponde a mesma remuneração por ano, mês, quinzena, duas semanas, semana e dia de trabalho.",
      "Os resultados dependem do horário que introduzir. Um salário de 60 000 US$ corresponde a cerca de 28,85 US$ por hora com 40 horas semanais durante 52 semanas, mas a cerca de 30,77 US$ por hora com 37,5 horas semanais.",
    ],
    howToUse: [
      "Introduza o montante do salário bruto, antes de impostos e descontos.",
      "Escolha com que frequência recebe esse montante: anual, mensal, quinzenal, de duas em duas semanas, semanal, diário ou por hora.",
      "Defina as horas pagas por semana, os dias de trabalho por semana e as semanas pagas por ano. Os valores predefinidos são 40 horas, 5 dias e 52 semanas.",
      "Consulte o valor por hora equivalente e a decomposição completa por periodicidade. Os resultados são atualizados à medida que escreve.",
    ],
    formulas: [
      {
        title: "Anualizar o montante",
        expression:
          "Salário anual = montante × períodos por ano\nAnual = 1, Mensal = 12, Quinzenal = 24, De duas em duas semanas = 26\nSemanal = semanas por ano\nDiário = dias de trabalho por semana × semanas por ano\nPor hora = horas por semana × semanas por ano",
        explanation:
          "Os pagamentos anuais, mensais, quinzenais e de duas em duas semanas usam contagens fixas do calendário. Os pagamentos semanais, diários e por hora são anualizados com o horário que introduzir.",
      },
      {
        title: "Dividir pelas horas pagas",
        expression: "Horas anuais = horas por semana × semanas por ano\nValor por hora equivalente = salário anual ÷ horas anuais",
        explanation: "O valor por hora equivalente distribui o salário bruto anualizado de forma igual por todas as horas pagas do ano.",
      },
      {
        title: "Outras periodicidades",
        expression: "Pagamento por período = salário anual ÷ períodos por ano",
        explanation: "A tabela de decomposição divide o montante anualizado pelo número de períodos de cada periodicidade. Os valores só são arredondados para apresentação.",
      },
    ],
    examples: [
      {
        title: "Salário anual de 60 000 US$, a tempo inteiro",
        steps: ["Horas anuais = 40 × 52 = 2080", "Por hora = 60 000 US$ ÷ 2080 = 28,846… US$"],
      },
      {
        title: "4500 US$ por mês",
        steps: ["Salário anual = 4500 US$ × 12 = 54 000 US$", "Horas anuais = 40 × 52 = 2080", "Por hora = 54 000 US$ ÷ 2080 = 25,961… US$"],
      },
      {
        title: "2000 US$ de duas em duas semanas, com 37,5 horas semanais",
        steps: ["Salário anual = 2000 US$ × 26 = 52 000 US$", "Horas anuais = 37,5 × 52 = 1950", "Por hora = 52 000 US$ ÷ 1950 = 26,666… US$"],
      },
      {
        title: "250 US$ por dia, 4 dias por semana, 48 semanas pagas",
        steps: ["Salário anual = 250 US$ × 4 × 48 = 48 000 US$", "Horas anuais = 32 × 48 = 1536", "Por hora = 48 000 US$ ÷ 1536 = 31,25 US$"],
      },
    ],
    assumptions: [
      "Todos os montantes são remuneração bruta, antes do imposto sobre o rendimento, da segurança social, das contribuições para a reforma e de outros descontos. Esta calculadora não estima impostos nem o salário líquido.",
      "Os pagamentos mensais, quinzenais e de duas em duas semanas são anualizados com 12, 24 e 26 períodos por ano, independentemente das semanas por ano que introduzir.",
      "Os pagamentos semanais, diários e por hora são anualizados com as suas semanas por ano, dias de trabalho por semana e horas por semana.",
      "Horas extraordinárias, prémios, comissões, benefícios e pausas não remuneradas não estão incluídos, a menos que os some ao montante.",
      "A escolha da moeda altera apenas o símbolo e a formatação. Não é feita qualquer conversão cambial.",
      "Os resultados são arredondados para apresentação. Os cálculos usam a precisão total.",
    ],
    faqs: [
      {
        question: "Como converto o meu salário anual num valor por hora?",
        answer:
          "Divida o salário anual pelo número de horas pagas num ano. Com 40 horas semanais durante 52 semanas, são 2080 horas, pelo que um salário de 50 000 US$ corresponde a 50 000 US$ ÷ 2080 ≈ 24,04 US$ por hora.",
      },
      {
        question: "Porque é que o pagamento de duas em duas semanas é multiplicado por 26 e não por 2 × semanas por ano?",
        answer:
          "Um pagamento de duas em duas semanas dá 26 recibos num ano típico. Os salários mensais, quinzenais e de duas em duas semanas costumam ser fixos por recibo, pelo que são anualizados com uma contagem do calendário e não com as semanas pagas que introduzir.",
      },
      {
        question: "Qual é a diferença entre pagamento quinzenal e de duas em duas semanas?",
        answer:
          "O pagamento quinzenal chega duas vezes por mês, o que dá 24 recibos por ano. O pagamento de duas em duas semanas chega a cada duas semanas, o que dá 26 recibos por ano. O mesmo salário anual resulta num recibo de duas em duas semanas mais pequeno do que um quinzenal.",
      },
      {
        question: "O valor por hora é o meu salário líquido?",
        answer:
          "Não. O resultado é remuneração bruta, antes de impostos e descontos. O seu salário líquido depende da sua situação fiscal, dos benefícios e das retenções, que esta calculadora não estima.",
      },
      {
        question: "Devo usar 52 semanas por ano?",
        answer:
          "Use 52 se for pago em todas as semanas do ano, incluindo feriados e férias pagas. Se algumas semanas não forem pagas, introduza apenas as semanas pagas. Um ano civil tem cerca de 52,14 semanas, valor que também pode introduzir.",
      },
      {
        question: "Mudar a moeda converte o montante?",
        answer: "Não. A definição da moeda altera apenas a formatação dos números. Introduza os montantes na moeda em que é pago.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    amount: "Montante do salário bruto",
    amountHelp: "Remuneração antes de impostos e descontos.",
    period: "Periodicidade do pagamento",
    periodHelp: "Com que frequência recebe o montante acima.",
    primary: "Valor por hora equivalente",
    caption: "Salário bruto por hora, convertido a partir da periodicidade: {period}.",
    annual: "Salário bruto anual",
    annualHours: "Horas pagas por ano",
  },
};

export default pt;
