import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MortgageText } from "../text/en";

const pt: CalculatorTranslation<MortgageText> = {
  content: {
    title: "Calculadora de crédito à habitação",
    shortTitle: "Crédito à habitação",
    summary: "Estime o custo mensal completo de um crédito à habitação: capital e juros, mais imposto sobre o imóvel, seguro, quotas de condomínio e seguro hipotecário.",
    metaTitle: "Calculadora de crédito à habitação – Prestação com PMI",
    metaDescription:
      "Estime a prestação mensal do crédito à habitação: capital e juros separados do imposto sobre o imóvel, seguro, condomínio e PMI, mais os juros totais.",
    keywords: ["calculadora de crédito à habitação", "prestação da casa", "simulador de crédito habitação", "empréstimo hipotecário", "entrada da casa", "seguro hipotecário PMI", "imposto sobre o imóvel"],
    intro: [
      "A prestação de um crédito à habitação é mais do que o reembolso do empréstimo. Nos EUA, os credores costumam cobrar o imposto sobre o imóvel e o seguro da casa juntamente com cada prestação, e alguns compradores pagam também quotas de condomínio (HOA) ou um seguro hipotecário.",
      "Esta calculadora mostra o capital e os juros separados desses outros custos, para que veja o que é fixado pelo empréstimo e o que depende dos impostos e seguros da sua zona.",
    ],
    howToUse: [
      "Introduza o preço da casa e a sua entrada.",
      "Introduza a taxa de juro e o prazo do empréstimo.",
      "Introduza o imposto sobre o imóvel e o seguro da casa anuais, e as quotas mensais de condomínio ou serviços, se existirem.",
      "Introduza a taxa do seguro hipotecário se a sua entrada for inferior a 20 %, ou 0 se não se aplicar.",
      "Consulte a prestação mensal total e a sua decomposição.",
    ],
    formulas: [
      {
        title: "Capital e juros",
        expression: "M = L × r ÷ (1 − (1 + r)^(−n))",
        explanation: "L é o montante do empréstimo (preço − entrada), r a taxa mensal (taxa anual ÷ 12) e n o número de prestações mensais.",
      },
      {
        title: "Prestação mensal",
        expression: "Prestação = M + imposto sobre o imóvel ÷ 12 + seguro ÷ 12 + condomínio + PMI",
        explanation: "Os impostos e o seguro são repartidos em partes iguais por 12 meses, como numa conta de garantia (escrow) habitual.",
      },
      { title: "Seguro hipotecário", expression: "PMI = L × taxa do PMI ÷ 12, enquanto L ÷ preço > 80 %", explanation: "Deixa de ser pago quando o saldo previsto atinge 78 % do preço da casa. Segundo a lei dos EUA, termina também, o mais tardar, a meio do prazo do empréstimo." },
    ],
    examples: [
      {
        title: "Casa de 400 000, 20 % de entrada, 6,5 % a 30 anos",
        steps: [
          "Empréstimo = 400 000 US$ − 80 000 US$ = 320 000 US$; r = 0,065 ÷ 12; n = 360",
          "Capital e juros ≈ 2022,62 US$",
          "Imposto de 400 US$ + seguro de 125 US$ por mês; sem PMI com um rácio empréstimo-valor de 80 %",
          "Total ≈ 2547,62 US$ por mês",
        ],
      },
      {
        title: "Casa de 300 000, 5 % de entrada, 6 % a 30 anos com PMI",
        steps: [
          "Empréstimo = 285 000 US$; capital e juros ≈ 1708,72 US$",
          "PMI = 285 000 US$ × 0,5 % ÷ 12 = 118,75 US$ durante as primeiras 129 prestações",
          "Total ≈ 1708,72 US$ + 300 US$ + 100 US$ + 50 US$ + 118,75 US$ = 2277,47 US$",
        ],
      },
    ],
    assumptions: [
      "Taxa de juro fixa com prestações mensais iguais; não são modelados empréstimos a taxa variável nem só de juros.",
      "O imposto sobre o imóvel, o seguro, as quotas de condomínio e a taxa do PMI são estimativas suas; variam consoante a zona e a instituição, e costumam mudar todos os anos.",
      "As regras do PMI seguem as dos empréstimos convencionais dos EUA: é cobrado acima de um rácio empréstimo-valor de 80 % e deixa de ser pago ao atingir 78 % segundo o plano. Os empréstimos FHA e VA, e os de outros países, são diferentes.",
      "Não estão incluídos custos de escritura, pontos, consumos de serviços nem manutenção. É uma estimativa, não aconselhamento financeiro nem uma proposta de empréstimo.",
    ],
    faqs: [
      {
        question: "O que é PITI?",
        answer: "É a sigla inglesa de capital, juros, impostos e seguro: as quatro partes de uma prestação mensal típica de crédito à habitação nos EUA quando a instituição cobra os impostos e o seguro através de uma conta de garantia (escrow).",
      },
      {
        question: "Porque é que a prestação da minha instituição é diferente?",
        answer: "As instituições usam os montantes reais de impostos e seguro, podem acrescentar uma margem de reserva na conta de garantia e podem indicar uma TAEG que inclui comissões. Peça um Loan Estimate (estimativa oficial do empréstimo) para obter valores exatos.",
      },
      {
        question: "Como posso evitar o seguro hipotecário?",
        answer: "Em muitos empréstimos convencionais dos EUA, uma entrada de pelo menos 20 % evita o PMI. Algumas instituições oferecem outras opções, muitas vezes com uma taxa mais alta.",
      },
    ],
    sourcesUsedFor: [
      "A fórmula do empréstimo de prestação constante e a do saldo em dívida.",
      "Quando termina automaticamente o PMI (a 78 % do valor original da casa) nos empréstimos convencionais dos EUA.",
      "Fim definitivo do PMI a meio do período de amortização segundo a Homeowners Protection Act.",
    ],
  },
  text: {
    price: "Preço da casa",
    down: "Entrada",
    rate: "Taxa de juro",
    rateHelp: "Taxa anual do empréstimo (não a TAEG com comissões).",
    years: "Prazo do empréstimo",
    propertyTax: "Imposto sobre o imóvel por ano",
    insurance: "Seguro da casa por ano",
    hoa: "Condomínio (HOA) ou encargos de serviços por mês",
    pmiRate: "Taxa do seguro hipotecário (PMI)",
    pmiHelp: "Taxa anual cobrada sobre o montante do empréstimo enquanto a entrada for inferior a 20 %. Introduza 0 se não se aplicar.",
    errors: { downTooLarge: "A entrada tem de ser inferior ao preço da casa.", termTooShort: "Introduza um prazo de pelo menos um mês." },
    monthly: "Prestação mensal estimada",
    caption: "Capital e juros de {pi} mais {extras} em impostos, seguros e outros custos.",
    principalInterest: "Capital e juros",
    monthlyTax: "Imposto sobre o imóvel",
    monthlyInsurance: "Seguro da casa",
    monthlyHoa: "Condomínio (HOA) ou encargos de serviços",
    monthlyPmi: "Seguro hipotecário (PMI)",
    pmiMonths: "Meses com PMI",
    loanAmount: "Montante do empréstimo",
    downShare: "Percentagem de entrada",
    totalInterest: "Juros totais",
    totalCost: "Total de todos os pagamentos durante o prazo",
    tableCaption: "Saldo do empréstimo por ano",
    tableColumns: { year: "Ano", principal: "Capital amortizado", interest: "Juros pagos", balance: "Saldo em dívida" },
    notes: {
      fixed: "Num empréstimo a taxa fixa, o capital e os juros mantêm-se iguais durante todo o prazo; os impostos, o seguro e o condomínio são estimativas suas e costumam mudar ao longo do tempo.",
      pmi: "Pressupõe-se que o PMI se aplica enquanto o empréstimo excede 80 % do preço da casa e que deixa de ser pago quando o saldo previsto atinge 78 %, como na maioria dos empréstimos convencionais dos EUA. Os empréstimos FHA e outros têm regras diferentes. Segundo a lei dos EUA, termina também, o mais tardar, a meio do prazo do empréstimo.",
      noPmi: "Não está incluído seguro hipotecário porque o empréstimo é igual ou inferior a 80 % do preço da casa.",
      excluded: "Não estão incluídos custos de escritura, pontos, consumos de serviços, manutenção nem eventuais alterações da taxa.",
    },
  },
};

export default pt;
