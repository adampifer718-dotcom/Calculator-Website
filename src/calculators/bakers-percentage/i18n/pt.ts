import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BakersPercentageText } from "../text/en";

const pt: CalculatorTranslation<BakersPercentageText> = {
  content: {
    title: "Calculadora de percentagem do padeiro",
    shortTitle: "Percentagem do padeiro",
    summary: "Converta percentagens do padeiro em pesos de ingredientes a partir do peso da farinha, ou obtenha a farinha necessária para um peso de massa pretendido, com a hidratação.",
    metaTitle: "Calculadora de percentagem do padeiro – Massa e hidratação",
    metaDescription:
      "Converta percentagens do padeiro em gramas ou onças de farinha, água, sal, fermento e extras, obtenha a farinha para um peso de massa e veja a hidratação.",
    keywords: ["percentagem do padeiro", "hidratação da massa", "calculadora de massa de pão", "fórmula de pão", "percentagem de farinha", "massa de pizza", "receita de pão em gramas"],
    intro: [
      "Os padeiros escrevem as fórmulas de pão em percentagem da farinha. A farinha vale sempre 100% e todos os outros ingredientes são indicados em relação a ela: uma massa com 70% de água leva 700 g de água por cada 1000 g de farinha. Como as percentagens são relativas à farinha, a soma ultrapassa os 100%.",
      "Isto torna as receitas fáceis de escalar e de comparar. Introduza um peso de farinha para obter o peso de cada ingrediente, ou introduza o total de massa que pretende, por exemplo quatro bolas de pizza de 250 g, para saber com quanta farinha começar.",
    ],
    howToUse: [
      "Escolha se quer partir do peso da farinha ou do peso total de massa pretendido.",
      "Escolha gramas ou onças e introduza o peso.",
      "Introduza as percentagens de água, sal e fermento e até três ingredientes extra, como azeite, açúcar ou manteiga, cada um com um nome opcional.",
      "Consulte na tabela o peso de cada ingrediente, o peso total da massa e a hidratação.",
    ],
    formulas: [
      { title: "Peso de um ingrediente", expression: "peso = peso da farinha × percentagem ÷ 100", explanation: "A percentagem de cada ingrediente é relativa ao peso total da farinha, que vale 100%." },
      { title: "Peso total da massa", expression: "massa = farinha × Σ% ÷ 100", explanation: "Σ% é a soma de todas as percentagens, incluindo os 100% da farinha." },
      { title: "Farinha para um peso de massa pretendido", expression: "farinha = massa pretendida ÷ (Σ% ÷ 100)", explanation: "Para 1500 g de massa com Σ% = 171,5%, a farinha é 1500 ÷ 1,715 ≈ 874,6 g." },
      { title: "Hidratação", expression: "hidratação = água ÷ farinha × 100%", explanation: "Em percentagens do padeiro, é simplesmente a percentagem de água." },
    ],
    examples: [
      { title: "Pão simples com 1000 g de farinha e 70% de hidratação", steps: ["Água = 1000 × 0,70 = 700 g", "Sal = 20 g e fermento = 10 g", "Total = 1000 × 173% = 1730 g de massa"] },
      { title: "1500 g de massa de pizza com 3% de azeite", steps: ["Σ% = 100 + 65 + 2 + 1,5 + 3 = 171,5%", "Farinha = 1500 ÷ 1,715 ≈ 874,6 g", "Água = 874,6 × 0,65 ≈ 568,5 g"] },
      { title: "Pão de forma com 16 oz de farinha e 5% de açúcar", steps: ["Σ% = 100 + 68 + 2 + 0,5 + 5 = 175,5%", "Água = 16 × 0,68 = 10,88 oz; açúcar = 0,8 oz", "Total = 16 × 1,755 = 28,08 oz de massa"] },
    ],
    assumptions: [
      "Todas as percentagens são em peso, relativas ao peso total de todas as farinhas da receita.",
      "A hidratação conta apenas a linha da água. O leite, os ovos, a manteiga ou um fermento natural (massa-mãe) também contêm água (e a massa-mãe contém farinha), por isso acrescente-os como linhas extra e ajuste a água se quiser uma hidratação global exata.",
      "O peso da massa é a soma dos ingredientes antes de cozer. Alguma massa fica sempre agarrada às taças e aos utensílios, e o pão perde peso no forno, por isso conte com um pouco mais quando precisar de pesos exatos por peça.",
    ],
    faqs: [
      { question: "Porque é que as percentagens do padeiro somam mais de 100%?", answer: "Porque cada ingrediente é comparado com a farinha e não com a massa inteira. A farinha sozinha vale 100%, pelo que, depois de juntar água, sal e fermento, o total fica sempre acima de 100%, muitas vezes entre 160 e 180% no pão." },
      { question: "O que significa 70% de hidratação?", answer: "Significa que a massa tem 70 g de água por cada 100 g de farinha. Uma hidratação maior dá uma massa mais húmida e pegajosa e, normalmente, um miolo mais alveolado; uma hidratação menor dá uma massa mais firme, mais fácil de moldar." },
      { question: "Como escalo uma receita com percentagens do padeiro?", answer: "Mantenha as percentagens e altere apenas o peso da farinha, ou introduza o total de massa de que precisa e deixe a calculadora determinar a farinha. Todos os outros ingredientes acompanham automaticamente." },
    ],
    sourcesUsedFor: ["A definição de percentagem do padeiro: cada ingrediente em percentagem do peso total da farinha, que vale sempre 100%."],
  },
  text: {
    mode: "Partir de",
    modes: { fromFlour: "Peso da farinha", fromDough: "Peso de massa pretendido" },
    unit: "Unidade de peso",
    units: { g: "Gramas (g)", oz: "Onças (oz)" },
    flour: "Peso total da farinha",
    flourHelp: "Toda a farinha da receita em conjunto. Conta como 100%.",
    dough: "Peso de massa pretendido",
    doughHelp: "O peso total de massa que pretende, por exemplo o número de pães ou pizzas vezes o peso de cada um.",
    water: "Água",
    salt: "Sal",
    yeast: "Fermento",
    pctHelp: "Em percentagem do peso da farinha.",
    extraName: "Ingrediente extra {n} (opcional)",
    extraNamePlaceholder: "p. ex. azeite",
    extraPct: "Ingrediente extra {n}, % da farinha",
    extraDefault: "Ingrediente extra {n}",
    doughWeight: "Peso total da massa",
    flourNeeded: "Farinha necessária",
    captionFlour: "{flour} de farinha com um total de {total}.",
    captionDough: "{dough} de massa ÷ ({total} ÷ 100).",
    flourOut: "Farinha",
    totalPct: "Soma de todas as percentagens",
    hydration: "Hidratação (água ÷ farinha)",
    waterOut: "Peso da água",
    tableCaption: "Pesos dos ingredientes",
    colIngredient: "Ingrediente",
    colPercent: "Percentagem do padeiro",
    colWeight: "Peso",
    flourRow: "Farinha",
    totalRow: "Total da massa",
    notes: {
      hydration: "A hidratação conta apenas a linha da água. O leite, os ovos, a massa-mãe ou outros ingredientes húmidos também acrescentam água, pelo que, se os usar, a hidratação real da massa é maior.",
      rounding: "Pequenas quantidades, como o fermento e o sal, pesam-se com mais exatidão numa balança com resolução de 0,1 g.",
    },
  },
};

export default pt;
