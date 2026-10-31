import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AbvText } from "../text/en";

const pt: CalculatorTranslation<AbvText> = {
  content: {
    title: "Calculadora de teor alcoólico em volume (ABV)",
    shortTitle: "ABV pela densidade",
    summary:
      "Estime o teor alcoólico de cerveja, vinho ou sidra caseiros a partir da densidade original e da densidade final, em densidade relativa ou graus Plato.",
    metaTitle: "Teor alcoólico (ABV) – Álcool em volume a partir de OG e FG",
    metaDescription:
      "Estime o ABV de bebidas caseiras a partir da densidade original e final (SG ou °Plato), com a fórmula padrão e a alternativa, o ABW e a atenuação aparente.",
    keywords: ["calculadora ABV", "teor alcoólico", "álcool em volume", "densidade original", "densidade final", "cerveja artesanal", "graus Plato", "atenuação aparente"],
    intro: [
      "A levedura transforma o açúcar em álcool e dióxido de carbono e, como o álcool é mais leve do que a água, a densidade de uma cerveja, vinho ou sidra diminui à medida que fermenta. Os cervejeiros caseiros medem essa densidade com um densímetro ou um refratómetro antes e depois da fermentação, como densidade original (OG) e densidade final (FG).",
      "Introduza as duas leituras, em densidade relativa ou em graus Plato, para estimar o teor alcoólico em volume. A calculadora mostra a fórmula padrão habitual, uma fórmula alternativa que muitos cervejeiros preferem para cervejas fortes, um teor alcoólico em peso aproximado e a atenuação aparente.",
    ],
    howToUse: [
      "Escolha se as leituras estão em densidade relativa (por exemplo, 1,050) ou em graus Plato (por exemplo, 12 °P).",
      "Introduza a densidade original, medida antes de adicionar a levedura.",
      "Introduza a densidade final, medida quando a fermentação terminou.",
      "Consulte o ABV pela fórmula padrão e compare-o com a fórmula alternativa apresentada abaixo.",
    ],
    formulas: [
      {
        title: "Fórmula padrão",
        expression: "ABV = (OG − FG) × 131,25",
        explanation: "A estimativa mais usada na produção caseira. Para OG 1,050 e FG 1,010 dá 0,040 × 131,25 = 5,25 %.",
      },
      {
        title: "Fórmula alternativa",
        expression: "ABV = 76,08 × (OG − FG) ÷ (1,775 − OG) × FG ÷ 0,794",
        explanation: "Atribuída à Ritchie Products (Zymurgy, 1995). Dá valores mais altos do que a fórmula padrão para cervejas fortes.",
      },
      {
        title: "De Plato para densidade relativa",
        expression: "SG = 1 + P ÷ (258,6 − (P ÷ 258,2) × 227,1)",
        explanation: "Usada quando as leituras estão em graus Plato. 12 °P corresponde a cerca de 1,0484.",
      },
      {
        title: "Álcool em peso e atenuação",
        expression: "ABW ≈ ABV × 0,789 ÷ FG;  atenuação = (OG − FG) ÷ (OG − 1) × 100",
        explanation:
          "0,789 é a densidade do etanol em relação à água a 20 °C. A atenuação é aparente porque o álcool baixa a leitura do densímetro abaixo do extrato restante real.",
      },
    ],
    examples: [
      {
        title: "Uma pale ale de 1,050 para 1,010",
        steps: ["Descida = 1,050 − 1,010 = 0,040", "ABV = 0,040 × 131,25 = 5,25 %", "Atenuação aparente = 0,040 ÷ 0,050 = 80 %"],
      },
      {
        title: "Uma strong ale de 1,092 para 1,021",
        steps: [
          "Padrão: (1,092 − 1,021) × 131,25 ≈ 9,32 %",
          "Alternativa: 76,08 × 0,071 ÷ (1,775 − 1,092) × 1,021 ÷ 0,794 ≈ 10,17 %",
          "As duas fórmulas diferem quase um ponto percentual com esta graduação",
        ],
      },
      {
        title: "Uma lager medida em Plato: de 12 °P para 2,5 °P",
        steps: [
          "OG = 1 + 12 ÷ (258,6 − (12 ÷ 258,2) × 227,1) ≈ 1,04838",
          "FG = 1 + 2,5 ÷ (258,6 − (2,5 ÷ 258,2) × 227,1) ≈ 1,00975",
          "ABV = (1,04838 − 1,00975) × 131,25 ≈ 5,07 %",
        ],
      },
    ],
    assumptions: [
      "Isto é apenas uma estimativa para produção caseira. Não serve para rotulagem legal ou comercial, que exige um método laboratorial calibrado.",
      "Não é aplicada nenhuma correção de temperatura do densímetro. Corrija primeiro as leituras para a temperatura de calibração do densímetro.",
      "As leituras são consideradas densidades relativas verdadeiras. Uma leitura de refratómetro feita depois de a fermentação começar é distorcida pelo álcool e precisa de uma correção à parte.",
      "O açúcar adicionado no engarrafamento, ou qualquer açúcar adicionado depois de medida a densidade original, não está incluído.",
    ],
    faqs: [
      {
        question: "Que fórmula devo usar?",
        answer:
          "Para a maioria das cervejas entre cerca de 1,040 e 1,060, as duas dão resultados muito parecidos. Para cervejas mais fortes divergem, e muitos cervejeiros preferem então a fórmula alternativa. Nenhuma substitui uma medição laboratorial.",
      },
      {
        question: "Qual é a diferença entre ABV e ABW?",
        answer:
          "O ABV é o volume de álcool em percentagem do volume da bebida. O ABW é o seu peso em percentagem do peso da bebida. O álcool é mais leve do que a água, pelo que o ABW é mais baixo, cerca de 80 % do ABV numa cerveja típica.",
      },
      {
        question: "O que é a atenuação aparente?",
        answer:
          "É a parte da densidade original acima de 1,000 que desapareceu durante a fermentação. Chama-se aparente porque o álcool é menos denso do que a água e faz com que a leitura final seja inferior ao teor real de açúcar restante.",
      },
    ],
    sourcesUsedFor: [
      "A fórmula padrão ABV = (OG − FG) × 131,25, a fórmula alternativa 76,08 (OG − FG) ÷ (1,775 − OG) × FG ÷ 0,794 e o exemplo resolvido com OG 1,092 e FG 1,021.",
      "A conversão SG = 1 + P ÷ (258,6 − (P ÷ 258,2) × 227,1).",
      "A origem da fórmula alternativa (Ritchie Products, Zymurgy 1995).",
      "A conversão entre ABV e ABW com a densidade relativa da bebida e a densidade do etanol (cerca de 0,789).",
    ],
  },
  text: {
    scale: "Escala de densidade",
    scales: { sg: "Densidade relativa (SG)", plato: "Graus Plato (°P)" },
    og: "Densidade original (OG)",
    ogHelp: "A densidade relativa antes da fermentação, por exemplo 1,050. Intervalo aceite de 0,980 a 1,200.",
    fg: "Densidade final (FG)",
    fgHelp: "A densidade relativa depois da fermentação, por exemplo 1,010.",
    ogPlato: "Extrato original",
    ogPlatoHelp: "A densidade original em graus Plato, por exemplo 12.",
    fgPlato: "Extrato final aparente",
    fgPlatoHelp: "A leitura final do densímetro em graus Plato, por exemplo 2,5. Pode ficar ligeiramente abaixo de 0 em cervejas muito secas.",
    errors: {
      fgAboveOg: "A densidade final não pode ser superior à densidade original.",
      sgRange: "Isto corresponde a uma densidade relativa de {sg}, fora do intervalo aceite de 0,980 a 1,200.",
    },
    abv: "Teor alcoólico em volume (fórmula padrão)",
    caption: "OG {og} − FG {fg} = {drop} pontos de densidade.",
    abvAlt: "Teor alcoólico em volume (fórmula alternativa)",
    abw: "Teor alcoólico em peso (aproximado)",
    attenuation: "Atenuação aparente",
    ogSg: "Densidade original em SG",
    fgSg: "Densidade final em SG",
    notes: {
      estimate:
        "Esta é uma estimativa para produção caseira a partir de leituras do densímetro, e não um valor para rotulagem legal. Não é aplicada nenhuma correção de temperatura do densímetro.",
      high: "Para mostos fortes, as duas fórmulas dão resultados claramente diferentes. Muitos cervejeiros preferem a fórmula alternativa com densidades elevadas.",
      noAttenuation: "A atenuação aparente exige uma densidade original superior a 1,000.",
    },
  },
};

export default pt;
