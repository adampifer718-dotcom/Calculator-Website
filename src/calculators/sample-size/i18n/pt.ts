import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SampleSizeText } from "../text/en";

const pt: CalculatorTranslation<SampleSizeText> = {
  content: {
    title: "Calculadora de dimensão da amostra",
    shortTitle: "Dimensão da amostra",
    summary:
      "Saiba de quantas respostas a um inquérito precisa para um nível de confiança e uma margem de erro à escolha, com a dimensão da população opcional.",
    metaTitle: "Dimensão da amostra – Respostas necessárias num inquérito",
    metaDescription:
      "Calcule quantas respostas completas a um inquérito precisa para um nível de confiança, margem de erro e proporção esperada, com correção para população finita.",
    keywords: ["dimensão da amostra", "tamanho da amostra", "quantos inquiridos", "margem de erro", "nível de confiança", "correção para população finita", "amostra estatística", "sondagem"],
    intro: [
      "Antes de fazer um inquérito ou uma sondagem, tem de decidir a quantas pessoas vai perguntar. Poucas respostas dão um resultado amplo e vago; demasiadas desperdiçam tempo e dinheiro. Esta calculadora encontra o menor número de respostas completas que estima uma percentagem com a precisão que escolher.",
      "Escolha um nível de confiança, a margem de erro que pode aceitar e, se a conhecer, a sua melhor estimativa do resultado. Se o grupo que estuda for pequeno, como os 600 trabalhadores de uma empresa, introduza também a sua dimensão: a correção para população finita reduz o número necessário.",
    ],
    howToUse: [
      "Escolha um nível de confiança. 95% é a escolha mais comum.",
      "Introduza a margem de erro em pontos percentuais, por exemplo 5 para ±5 pontos.",
      "Introduza a proporção que espera. Deixe-a em 50% se não tiver a certeza; é o valor que dá a maior amostra.",
      "Opcionalmente, introduza a dimensão da população. Deixe em branco para uma população grande ou desconhecida.",
      "Consulte a dimensão da amostra necessária. É sempre arredondada para cima até uma resposta inteira.",
    ],
    formulas: [
      {
        title: "Dimensão da amostra para uma população grande",
        expression: "n₀ = z*² × p × (1 − p) ÷ E²",
        explanation: "z* é o valor crítico para o nível de confiança (1,96 para 95%), p a proporção esperada e E a margem de erro, ambas em forma decimal.",
      },
      {
        title: "Correção para população finita",
        expression: "n = n₀ ÷ (1 + (n₀ − 1) ÷ N)",
        explanation: "N é a dimensão da população. A correção é relevante quando a amostra representa uma parte significativa da população.",
      },
      {
        title: "Arredondamento",
        expression: "dimensão da amostra = ⌈n⌉",
        explanation: "O resultado é arredondado para cima, porque arredondar para baixo daria uma margem de erro ligeiramente superior à pedida.",
      },
    ],
    examples: [
      {
        title: "Uma sondagem nacional com 95% de confiança e ±5 pontos",
        steps: ["z* = 1,95996 para 95% de confiança", "n₀ = 1,95996² × 0,5 × 0,5 ÷ 0,05² ≈ 384,15", "Arredondar para cima: 385 respostas completas"],
      },
      {
        title: "Um inquérito a 2400 trabalhadores com 99% de confiança, ±3 pontos, esperando 30%",
        steps: [
          "z* = 2,57583 para 99% de confiança",
          "n₀ = 2,57583² × 0,3 × 0,7 ÷ 0,03² ≈ 1548,14",
          "n = 1548,14 ÷ (1 + 1547,14 ÷ 2400) ≈ 941,32",
          "Arredondar para cima: 942 respostas",
        ],
      },
      {
        title: "Estimar uma taxa de defeitos de 12% com 90% de confiança e ±4 pontos",
        steps: ["z* = 1,64485 para 90% de confiança", "n₀ = 1,64485² × 0,12 × 0,88 ÷ 0,04² ≈ 178,57", "Arredondar para cima: 179 artigos a inspecionar"],
      },
    ],
    assumptions: [
      "A fórmula pressupõe uma amostra aleatória simples: todos os membros da população têm a mesma probabilidade de ser escolhidos.",
      "Dimensiona uma amostra para estimar uma proporção (uma percentagem de respostas sim/não), não uma média nem uma diferença entre grupos.",
      "Baseia-se na aproximação normal à distribuição amostral de uma proporção, que funciona bem quando os números esperados de respostas sim e não são ambos de pelo menos cerca de 10.",
      "O resultado é o número de respostas completas. A não resposta, as desistências e as respostas inutilizáveis não estão incluídas, por isso planeie contactar mais pessoas do que este número.",
      "Os valores críticos provêm de uma inversão numérica da distribuição normal com uma precisão de cerca de nove algarismos significativos.",
    ],
    faqs: [
      {
        question: "Porque é que 50% dá a maior amostra?",
        answer:
          "O produto p × (1 − p) é máximo quando p = 0,5, sendo então igual a 0,25. Qualquer outra proporção esperada precisa de menos respostas para a mesma margem de erro, por isso 50% é a escolha segura quando não tem uma estimativa prévia.",
      },
      {
        question: "Uma população maior precisa de uma amostra muito maior?",
        answer:
          "Na verdade, não. Quando a população é grande, a amostra necessária quase não muda: com 95% de confiança e ±5 pontos, precisa de 383 respostas para uma população de 100 000 e de 385 para uma população de 100 milhões. A dimensão da população só importa quando amostra uma parte considerável dela.",
      },
      {
        question: "Quantas pessoas devo convidar?",
        answer:
          "Divida a dimensão da amostra pela taxa de resposta que espera. Se precisar de 385 respostas completas e esperar que 20% das pessoas respondam, convide cerca de 385 ÷ 0,20 ≈ 1925 pessoas.",
      },
    ],
    sourcesUsedFor: [
      "Dimensão da amostra para estimar uma proporção, n = z²·p(1 − p)/E², e o uso de p = 0,5 quando não existe uma estimativa.",
      "Quando e porque se aplica uma correção para população finita.",
    ],
  },
  text: {
    level: "Nível de confiança",
    levelHelp: "O grau de certeza que pretende de que a verdadeira proporção fica dentro da margem de erro.",
    levelOptions: { "80": "80%", "90": "90%", "95": "95%", "98": "98%", "99": "99%" },
    margin: "Margem de erro",
    marginHelp: "A distância ± que pode aceitar, em pontos percentuais. Por exemplo, 5 significa ±5 pontos.",
    proportion: "Proporção esperada",
    proportionHelp: "A sua melhor estimativa da percentagem que responderá “sim”. Use 50% se não fizer ideia: dá a amostra maior e mais segura.",
    proportionMax: "Tem de ser inferior a 100%.",
    population: "Dimensão da população (opcional)",
    populationHelp: "Número total de pessoas ou artigos que poderia amostrar. Deixe em branco para uma população muito grande ou desconhecida.",
    sampleSize: "Dimensão da amostra necessária",
    caption: "Respostas completas necessárias com {level} de confiança e ±{margin}.",
    infinite: "Dimensão da amostra antes da correção (n₀)",
    infiniteRounded: "n₀ arredondado para cima",
    critical: "Valor crítico (z*)",
    correction: "Correção para população finita",
    correctionApplied: "Aplicada (população de {population})",
    correctionNotApplied: "Não aplicada (sem dimensão da população indicada)",
    share: "Percentagem da população amostrada",
    responseNote:
      "Este é o número de respostas completas. Se espera que apenas algumas pessoas respondam, divida pela taxa de resposta esperada para saber quantas convidar.",
    wholePopulation: "A amostra corresponde a toda ou quase toda a população, pelo que inquirir todos pode ser mais simples.",
  },
};

export default pt;
