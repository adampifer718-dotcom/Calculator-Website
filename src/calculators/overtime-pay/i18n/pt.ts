import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { OvertimePayText } from "../text/en";

const pt: CalculatorTranslation<OvertimePayText> = {
  content: {
    title: "Calculadora de horas extraordinárias",
    shortTitle: "Horas extraordinárias",
    summary: "Calcule a remuneração bruta semanal com horas extraordinárias pagas a uma vez e meia, uma parte opcional paga a dobrar e o valor por hora efetivo.",
    metaTitle: "Calculadora de horas extraordinárias – 150% e a dobrar",
    metaDescription:
      "Calcule a remuneração bruta semanal com horas extra: valor normal até 40 horas ou ao seu limite, uma vez e meia, horas a dobrar opcionais e o valor efetivo.",
    keywords: ["horas extraordinárias", "calcular horas extra", "trabalho suplementar", "pagamento de horas extra", "uma vez e meia", "horas a dobrar", "remuneração semanal", "FLSA"],
    intro: [
      "A remuneração das horas extraordinárias compensa as horas trabalhadas além de uma semana normal com um valor mais alto. Ao abrigo da lei federal dos EUA Fair Labor Standards Act, os trabalhadores abrangidos que não estejam isentos têm de receber, pelo menos, uma vez e meia o valor normal por cada hora acima de 40 numa semana de trabalho.",
      "Esta calculadora divide uma semana em horas normais e horas extraordinárias, aplica o seu multiplicador de horas extraordinárias e pode pagar parte dessas horas a dobrar, se o seu empregador ou contrato o previr. Altere o limite ou os multiplicadores de acordo com as regras que se aplicam a si.",
    ],
    howToUse: [
      "Escolha a moeda e introduza o seu valor por hora normal.",
      "Introduza todas as horas que trabalhou na semana.",
      "Mantenha o limite em 40 horas e o multiplicador em 1,5 para a regra federal dos EUA, ou altere-os de acordo com o seu contrato ou a lei local.",
      "Se algumas horas extraordinárias forem pagas a dobrar, introduza quantas. Estão incluídas nas horas extraordinárias.",
      "Consulte a remuneração bruta total, a divisão entre remuneração normal e de horas extraordinárias e o valor por hora efetivo.",
    ],
    formulas: [
      { title: "Horas normais e extraordinárias", expression: "normais = min(H, T); extraordinárias = max(0, H − T)", explanation: "H são as horas trabalhadas na semana e T o limite de horas normais." },
      { title: "Remuneração bruta", expression: "remuneração = normais × r + (extraordinárias − D) × r × m + D × r × d", explanation: "r é o valor por hora, m o multiplicador das horas extraordinárias, D as horas pagas a dobrar e d o multiplicador dessas horas." },
      { title: "Valor por hora efetivo", expression: "efetivo = remuneração ÷ H", explanation: "A média paga por cada hora trabalhada, já com o acréscimo das horas extraordinárias." },
    ],
    examples: [
      { title: "46 horas a 22 US$ por hora", steps: ["Remuneração normal = 40 × 22 US$ = 880 US$", "Horas extraordinárias = 6 h × 22 US$ × 1,5 = 198 US$", "Total = 880 US$ + 198 US$ = 1078 US$"] },
      {
        title: "52 horas a 18,50 US$ com 4 horas a dobrar",
        steps: [
          "Remuneração normal = 40 × 18,50 US$ = 740 US$",
          "Horas extraordinárias = 12, das quais 8 a uma vez e meia: 8 × 27,75 US$ = 222 US$",
          "Horas a dobrar = 4 × 37 US$ = 148 US$",
          "Total = 740 US$ + 222 US$ + 148 US$ = 1110 US$, cerca de 21,35 US$ por hora trabalhada",
        ],
      },
      { title: "Contrato de 37,5 horas com horas extraordinárias a 1,25×", steps: ["Remuneração normal = 37,5 × 16 £ = 600 £", "Horas extraordinárias = 6,5 h × 16 £ × 1,25 = 130 £", "Total = 730 £"] },
    ],
    assumptions: [
      "Trata-se de uma estimativa da remuneração bruta, antes de IRS, segurança social, benefícios e outros descontos. Não constitui aconselhamento jurídico nem fiscal e não foi revista por profissionais.",
      "As regras das horas extraordinárias variam consoante o país, o estado e o contrato. Alguns locais exigem horas extraordinárias a partir de um certo número de horas por dia, ou pagamento a dobrar após turnos mais longos; esta ferramenta aplica apenas um limite semanal e as horas a dobrar que introduzir.",
      "Ao abrigo da regra federal dos EUA, o valor normal pode incluir prémios, comissões e subsídios de turno. Aqui, o valor normal é o valor por hora que introduzir.",
      "Os trabalhadores isentos, como muitos quadros e profissionais assalariados, podem não ter qualquer direito a horas extraordinárias.",
    ],
    faqs: [
      { question: "O que significa pagar a uma vez e meia?", answer: "Cada hora extraordinária é paga a 1,5 vezes o valor normal. A 20 US$ por hora, uma hora extraordinária paga 30 US$, pelo que o acréscimo é de 10 US$ além do valor normal." },
      { question: "O meu empregador pode fazer a média das horas ao longo de duas semanas?", answer: "Ao abrigo da regra federal dos EUA, não. Cada semana de trabalho é um período fixo e independente de 168 horas, pelo que 50 horas numa semana e 30 na seguinte continuam a significar 10 horas extraordinárias na primeira semana." },
      { question: "As horas a dobrar somam-se às horas extraordinárias?", answer: "Não. Nesta calculadora, as horas a dobrar fazem parte das horas extraordinárias. Se trabalhou 12 horas extraordinárias e 4 delas foram a dobrar, as outras 8 são pagas com o multiplicador das horas extraordinárias." },
    ],
    sourcesUsedFor: [
      "A regra federal dos EUA: os trabalhadores abrangidos não isentos recebem, pelo menos, uma vez e meia o valor normal pelas horas acima de 40 numa semana de trabalho.",
      "A semana de trabalho como período fixo de 168 horas, a proibição de calcular a média das horas entre semanas e a forma de determinar o valor normal.",
    ],
  },
  text: {
    rate: "Valor por hora normal",
    rateHelp: "O valor de uma hora de trabalho normal, antes de qualquer acréscimo por horas extraordinárias.",
    hours: "Total de horas trabalhadas na semana",
    threshold: "Limite de horas normais",
    thresholdHelp: "Horas pagas ao valor normal antes de começarem as horas extraordinárias. Ao abrigo da regra federal dos EUA, são 40 horas por semana de trabalho.",
    multiplier: "Multiplicador das horas extraordinárias",
    multiplierHelp: "1,5 corresponde a uma vez e meia.",
    doubleHours: "Horas pagas a dobrar (opcional)",
    doubleHoursHelp: "Horas pagas ao valor mais alto, a dobrar. Fazem parte das horas extraordinárias e não se somam a elas. Deixe em branco ou 0 se não houver.",
    doubleMultiplier: "Multiplicador das horas a dobrar",
    errors: {
      doubleExceeds: "As horas a dobrar não podem exceder as horas extraordinárias ({overtime} h).",
    },
    grossPay: "Remuneração bruta total",
    caption: "{hours} h a {rate} por hora, com horas extraordinárias acima de {threshold} h a {multiplier}× o valor normal.",
    regularPay: "Remuneração normal",
    overtimePay: "Remuneração das horas extraordinárias",
    doublePay: "Remuneração das horas a dobrar",
    regularHours: "Horas normais",
    overtimeHours: "Horas extraordinárias (incluindo as horas a dobrar)",
    overtimeRate: "Valor por hora extraordinária",
    doubleRate: "Valor por hora a dobrar",
    effectiveRate: "Valor por hora efetivo",
    notes: {
      noOvertime: "As horas trabalhadas não excedem o limite, pelo que não há horas extraordinárias a pagar.",
      gross: "Os montantes são remuneração bruta, antes de impostos e descontos.",
      rules: "As regras das horas extraordinárias dependem do país, do estado e do contrato de trabalho; alguns locais exigem também horas extraordinárias diárias.",
    },
  },
};

export default pt;
