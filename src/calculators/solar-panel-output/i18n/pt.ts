import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SolarPanelOutputText } from "../text/en";

const pt: CalculatorTranslation<SolarPanelOutputText> = {
  content: {
    title: "Calculadora de produção de painéis solares",
    shortTitle: "Produção de painéis solares",
    summary:
      "Estime quantos quilowatts-hora um conjunto de painéis solares produz por dia, mês e ano, e que dimensão de sistema cobriria o seu consumo de eletricidade.",
    metaTitle: "Produção de painéis solares – kWh por dia e por ano",
    metaDescription:
      "Estime a produção solar em kWh por dia, mês e ano pela potência dos painéis, horas de sol de pico e perdas, e dimensione o sistema para o seu consumo.",
    keywords: ["calculadora de painéis solares", "produção solar", "kWh por ano", "horas de sol de pico", "dimensão do sistema fotovoltaico", "quantos painéis solares", "perdas fotovoltaicas"],
    intro: [
      "A potência nominal de um painel solar indica quanta potência produz em condições de teste padrão: sol pleno de 1000 watts por metro quadrado com uma temperatura das células de 25 °C. A produção real depende da quantidade de luz solar que chega efetivamente aos painéis ao longo do dia, normalmente resumida em horas de sol de pico, e das perdas no resto do sistema.",
      "Introduza a potência do painel, o número de painéis, as horas de sol de pico e as perdas do sistema para estimar a energia produzida por dia, mês e ano. Junte o seu consumo anual de eletricidade para ver a parte que o sistema cobre e quantos painéis cobririam a totalidade.",
    ],
    howToUse: [
      "Introduza a potência nominal de um painel em watts, tal como consta da etiqueta ou da ficha técnica, e o número de painéis.",
      "Introduza as horas de sol de pico do seu local. O valor predefinido de 4,5 é apenas um exemplo; procure um valor para a sua localização ou use uma ferramenta de recurso solar.",
      "Mantenha as perdas do sistema predefinidas de 14 % ou introduza a sua própria estimativa para as perdas no inversor, na cablagem, por calor, sujidade e sombreamento.",
      "Se quiser, introduza o seu consumo anual de eletricidade em kWh, das suas faturas, para ver a parte coberta e a dimensão de sistema necessária.",
    ],
    formulas: [
      {
        title: "Energia diária",
        expression: "E(dia) = potência (W) × painéis ÷ 1000 × horas de sol de pico × (1 − perdas ÷ 100)",
        explanation:
          "Potência × painéis ÷ 1000 é a dimensão do sistema em kW. Multiplicar pelas horas de sol de pico dá os kWh à potência nominal, e o fator de perdas reduz esse valor ao que chega a sua casa.",
      },
      {
        title: "Energia anual e mensal",
        expression: "E(ano) = E(dia) × 365;  E(mês) = E(ano) ÷ 12",
        explanation: "O valor mensal é uma média. A produção real é maior no verão e menor no inverno.",
      },
      {
        title: "Dimensão do sistema para o seu consumo",
        expression: "dimensão (kW) = consumo anual ÷ (365 × horas de sol de pico × (1 − perdas ÷ 100))",
        explanation: "Os painéis necessários são esta dimensão × 1000 ÷ potência do painel, arredondado por excesso a um painel inteiro.",
      },
    ],
    examples: [
      {
        title: "Dez painéis de 400 W com 4,5 horas de sol de pico",
        steps: ["Dimensão do sistema = 400 × 10 ÷ 1000 = 4 kW", "Energia diária = 4 × 4,5 × (1 − 0,14) = 15,48 kWh", "Energia anual = 15,48 × 365 = 5650,2 kWh"],
      },
      {
        title: "Dezasseis painéis de 350 W, 5,2 horas de sol, consumo de 11 000 kWh por ano",
        steps: [
          "Dimensão do sistema = 350 × 16 ÷ 1000 = 5,6 kW",
          "Energia diária = 5,6 × 5,2 × 0,86 = 25,0432 kWh, ou seja, 25,0432 × 365 ≈ 9140,77 kWh por ano",
          "Parte coberta = 9140,77 ÷ 11 000 ≈ 83,1 %",
          "Dimensão necessária = 11 000 ÷ (365 × 5,2 × 0,86) ≈ 6,74 kW, ou 6739 ÷ 350 ≈ 19,25, arredondado por excesso a 20 painéis",
        ],
      },
      {
        title: "Seis painéis de 450 W num local mais nublado com 10 % de perdas",
        steps: ["Dimensão do sistema = 450 × 6 ÷ 1000 = 2,7 kW", "Energia diária = 2,7 × 3,2 × 0,90 = 7,776 kWh", "Energia anual = 7,776 × 365 = 2838,24 kWh"],
      },
    ],
    assumptions: [
      "As horas de sol de pico dependem da localização, da inclinação e da orientação dos painéis, do sombreamento e da estação do ano. O valor que introduz é usado como média anual. Para uma estimativa real, use uma ferramenta local de recurso solar, como o PVWatts do NREL.",
      "O valor predefinido de 14 % de perdas é um valor muito usado que cobre perdas como as do inversor, da cablagem, da sujidade, das diferenças entre painéis e da disponibilidade. O seu sistema pode perder mais ou menos.",
      "A produção dos painéis também diminui com temperaturas elevadas das células e, lentamente, com a idade. Estes efeitos só são incluídos na medida em que façam parte do valor de perdas que introduz.",
      "A parte do consumo coberta compara apenas totais anuais. Não tem em conta quando a energia é produzida e quando é consumida, nem o armazenamento em baterias ou as regras de injeção na rede.",
    ],
    faqs: [
      {
        question: "O que são horas de sol de pico?",
        answer:
          "Exprimem a energia solar de um dia como o número de horas de sol pleno a 1000 W/m² que forneceria a mesma energia. Um local que recebe 5 kWh por metro quadrado num dia tem 5 horas de sol de pico, embora o sol esteja acima do horizonte durante muito mais tempo.",
      },
      {
        question: "Porque é que a produção é inferior a potência × horas?",
        answer:
          "As potências dos painéis são medidas em condições laboratoriais ideais. Na prática, perde-se energia no inversor e na cablagem, com o calor, o pó e o sombreamento, e devido a pequenas diferenças entre painéis. A percentagem de perdas tem em conta todos estes fatores em conjunto.",
      },
      {
        question: "De quantos painéis preciso?",
        answer:
          "Introduza o seu consumo anual de eletricidade. A calculadora divide-o pela energia que um kW de painéis produz num ano com as suas horas de sol e perdas, e depois converte essa dimensão em painéis inteiros da potência que introduziu.",
      },
    ],
    sourcesUsedFor: ["O modelo PVWatts e as suas perdas totais do sistema predefinidas de 14 %."],
  },
  text: {
    panelWatts: "Potência do painel",
    panelWattsHelp: "A potência nominal de um painel em condições de teste padrão (STC), indicada na etiqueta ou na ficha técnica.",
    panels: "Número de painéis",
    sunHours: "Horas de sol de pico por dia",
    sunHoursHelp:
      "A energia solar diária no seu local expressa em horas de sol pleno (1 kW/m²). 4,5 é apenas um exemplo; o valor correto depende da localização, da inclinação e da orientação dos painéis, e da estação do ano.",
    losses: "Perdas do sistema",
    lossesHelp: "Perdas no inversor, na cablagem, por calor, sujidade, sombreamento e diferenças entre painéis. 14 % é um valor predefinido muito usado.",
    annualUsage: "Consumo anual de eletricidade (opcional)",
    annualUsageHelp:
      "O seu consumo anual segundo as faturas de eletricidade, para ver que parte o sistema cobre e que dimensão cobriria a totalidade.",
    errors: {
      losses: "As perdas do sistema têm de ser inferiores a 100 %.",
    },
    annual: "Energia estimada por ano",
    caption: "Sistema de {size} × {hours} horas de sol de pico × {factor} após {losses} de perdas.",
    daily: "Energia por dia",
    monthly: "Energia média por mês",
    systemSize: "Dimensão do sistema (CC)",
    specificYield: "Energia por kW instalado por ano",
    coverage: "Parte do seu consumo anual coberta",
    sizeNeeded: "Dimensão do sistema para cobrir todo o consumo",
    panelsNeeded: "Painéis necessários para cobrir todo o consumo",
    panelsMore: "Painéis adicionais necessários",
    notes: {
      estimate:
        "Esta é uma estimativa simples. Uma ferramenta local de recurso solar, como o PVWatts do NREL, usa dados meteorológicos horários do seu local e dá um valor mais rigoroso.",
      covered:
        "O sistema introduzido produz num ano pelo menos tanta energia como a que consome. A produção e o consumo raramente coincidem hora a hora, pelo que poderá ainda ter de usar alguma energia da rede.",
      panelsRounded: "O número de painéis é arredondado por excesso a painéis inteiros de {watts}.",
    },
  },
};

export default pt;
