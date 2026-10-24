import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CapRateText } from "../text/en";

const pt: CalculatorTranslation<CapRateText> = {
  content: {
    title: "Calculadora de taxa de capitalização",
    shortTitle: "Taxa de capitalização",
    summary: "Obtenha a taxa de capitalização (cap rate) de um imóvel arrendado a partir das rendas, da desocupação e dos gastos operacionais, ou o seu valor a partir de uma taxa pretendida.",
    metaTitle: "Calculadora de taxa de capitalização – NOI e valor do imóvel",
    metaDescription:
      "Calcule a cap rate de um imóvel arrendado a partir das rendas, da desocupação e dos gastos operacionais, ou estime o valor do imóvel com o NOI e uma taxa-alvo.",
    keywords: ["taxa de capitalização", "cap rate", "rendimento operacional líquido", "NOI", "imóvel para arrendamento", "método do rendimento", "investimento imobiliário", "valor do imóvel"],
    intro: [
      "A taxa de capitalização, ou cap rate, compara o rendimento que um imóvel gera com o seu valor. É o rendimento operacional líquido de um ano dividido pelo valor ou pelo preço do imóvel, expresso em percentagem.",
      "Os investidores usam-na para comparar imóveis rapidamente, independentemente da forma como são financiados. Introduza as rendas, a desocupação e os custos de funcionamento para obter a taxa de capitalização, ou mude de modo para converter um rendimento operacional líquido e uma taxa pretendida num valor indicativo.",
    ],
    howToUse: [
      "Escolha se pretende calcular a taxa de capitalização ou o valor e escolha a moeda.",
      "Para a taxa de capitalização, introduza o valor do imóvel ou o preço pedido, as rendas brutas anuais, a margem para desocupação e os gastos operacionais anuais.",
      "Para o valor, introduza o rendimento operacional líquido e a taxa de capitalização pretendida.",
      "Consulte a taxa de capitalização ou o valor, juntamente com o rendimento bruto efetivo, o NOI e o rácio de gastos.",
    ],
    formulas: [
      { title: "Rendimento bruto efetivo", expression: "RBE = rendimento bruto × (1 − desocupação)", explanation: "A desocupação é a parte do rendimento perdida com frações vazias e rendas não pagas." },
      { title: "Rendimento operacional líquido", expression: "NOI = RBE − gastos operacionais", explanation: "Os gastos operacionais excluem as prestações do crédito, as depreciações e o imposto sobre o rendimento." },
      { title: "Taxa de capitalização", expression: "taxa de capitalização = NOI ÷ valor × 100%", explanation: "O rendimento anual, antes de impostos, que o imóvel daria a um comprador que pagasse tudo a pronto." },
      { title: "Valor a partir de uma taxa de capitalização", expression: "valor = NOI ÷ taxa de capitalização", explanation: "Divida pela taxa em forma decimal, ou seja, 6% é 0,06." },
    ],
    examples: [
      { title: "Moradia bifamiliar avaliada em 450 000 US$", steps: ["RBE = 48 000 × 0,95 = 45 600 US$", "NOI = 45 600 − 16 000 = 29 600 US$", "Taxa de capitalização = 29 600 ÷ 450 000 ≈ 6,58%"] },
      { title: "Pequeno prédio de apartamentos à venda por 720 000 US$", steps: ["RBE = 62 400 × 0,92 = 57 408 US$", "NOI = 57 408 − 21 500 = 35 908 US$", "Taxa de capitalização = 35 908 ÷ 720 000 ≈ 4,99%"] },
      { title: "Valor de uma loja com um NOI de 41 250 US$ a uma taxa de capitalização de 5,75%", steps: ["Valor = 41 250 ÷ 0,0575", "≈ 717 391,30 US$"] },
    ],
    assumptions: [
      "A taxa de capitalização ignora o financiamento, os impostos sobre o rendimento, as obras de melhoria e as variações futuras das rendas ou do valor. É um retrato do rendimento de um único ano.",
      "O resultado depende inteiramente dos valores de rendimento e de gastos que introduzir. Use custos operacionais realistas para o ano completo, incluindo a gestão e a manutenção, mesmo que as faça por conta própria.",
      "É permitido um rendimento operacional líquido negativo, que dá uma taxa de capitalização negativa, o que significa que o imóvel não cobre os seus custos de funcionamento.",
      "Isto é uma estimativa, não aconselhamento de investimento nem financeiro, e não foi revista por profissionais.",
    ],
    faqs: [
      { question: "O que é uma boa taxa de capitalização?", answer: "Não existe um valor único considerado bom. As taxas de capitalização dependem da localização, do tipo de imóvel, do seu estado e das taxas de juro. Uma taxa mais alta significa mais rendimento para o preço, mas geralmente também mais risco ou menor crescimento esperado." },
      { question: "Porque é que as prestações do crédito ficam fora dos gastos operacionais?", answer: "A taxa de capitalização descreve o imóvel, não o empréstimo do comprador. Deixar o financiamento de fora permite comparar imóveis de forma justa. Para incluir o empréstimo, analise antes o cash-on-cash return ou o ROI." },
      { question: "Porque é que uma taxa de capitalização mais baixa aumenta o valor?", answer: "O valor é o NOI dividido pela taxa de capitalização. Para o mesmo NOI de 40 000 US$, uma taxa de 5% dá 800 000 US$, enquanto uma taxa de 8% dá 500 000 US$, pelo que os compradores que aceitam taxas mais baixas pagam mais." },
    ],
    sourcesUsedFor: [
      "A taxa de capitalização como rácio entre o rendimento operacional líquido e o valor, e valor = rendimento ÷ taxa.",
      "A relação I = R × V entre o rendimento operacional líquido, a taxa de capitalização global e o valor.",
    ],
  },
  text: {
    mode: "Calcular",
    modes: { rate: "Taxa de capitalização a partir do rendimento", value: "Valor a partir de uma taxa pretendida" },
    value: "Valor ou preço do imóvel",
    gross: "Rendas brutas anuais",
    grossHelp: "Todas as rendas que o imóvel geraria num ano se estivesse totalmente arrendado, mais outros rendimentos, como estacionamento ou lavandaria.",
    vacancy: "Desocupação e rendas incobráveis",
    vacancyHelp: "A parte do rendimento bruto que espera perder com frações vazias e rendas não pagas.",
    expenses: "Gastos operacionais anuais",
    expensesHelp: "IMI, seguros, manutenção, gestão, consumos que paga e custos de funcionamento semelhantes. Não inclua prestações do crédito, depreciações nem imposto sobre o rendimento.",
    noi: "Rendimento operacional líquido (NOI) anual",
    noiHelp: "Rendimento depois da desocupação e dos gastos operacionais, antes das prestações do crédito e do imposto sobre o rendimento.",
    targetRate: "Taxa de capitalização pretendida",
    errors: {
      noiPositive: "O rendimento operacional líquido tem de ser superior a 0 para calcular um valor.",
    },
    capRate: "Taxa de capitalização",
    capCaption: "Rendimento operacional líquido de {noi} sobre um valor de {value}.",
    propertyValue: "Valor indicativo do imóvel",
    valueCaption: "{noi} de rendimento operacional líquido capitalizado a {rate}.",
    egi: "Rendimento bruto efetivo",
    noiResult: "Rendimento operacional líquido (NOI)",
    monthlyNoi: "NOI por mês",
    expenseRatio: "Rácio de gastos operacionais (sobre o rendimento bruto efetivo)",
    grm: "Multiplicador da renda bruta (valor ÷ rendimento bruto)",
    valuePerPoint: "Variação do valor se a taxa de capitalização for 1 ponto mais baixa",
    notes: {
      negative: "Os gastos operacionais são superiores ao rendimento após a desocupação, pelo que o NOI e a taxa de capitalização são negativos: o imóvel não cobre os seus custos de funcionamento.",
      financing: "A taxa de capitalização ignora o financiamento, os impostos sobre o rendimento e as variações futuras do valor.",
    },
  },
};

export default pt;
