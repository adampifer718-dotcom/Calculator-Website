import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ShannonIndexText } from "../text/en";

const pt: CalculatorTranslation<ShannonIndexText> = {
  content: {
    title: "Calculadora do índice de diversidade de Shannon",
    shortTitle: "Índice de Shannon",
    summary:
      "Calcule o índice de diversidade de Shannon H′, a equitabilidade de Pielou, o número efetivo de espécies e os índices de Simpson a partir das contagens de indivíduos por espécie.",
    metaTitle: "Índice de Shannon – Diversidade H′ e equitabilidade",
    metaDescription:
      "Obtenha o índice de Shannon H′ a partir de contagens em ln, log2 ou log10, com equitabilidade de Pielou J′, número efetivo de espécies e índice de Simpson.",
    keywords: ["índice de shannon", "índice de shannon-wiener", "diversidade de espécies", "índice de biodiversidade", "equitabilidade de pielou", "índice de simpson", "riqueza específica", "ecologia"],
    intro: [
      "O índice de Shannon H′ (também chamado de Shannon–Wiener ou Shannon–Weaver) mede a diversidade de uma comunidade a partir do número de indivíduos de cada espécie que contou. Aumenta com o número de espécies e com a uniformidade com que os indivíduos se repartem entre elas, e é 0 quando só existe uma espécie.",
      "Esta calculadora dá H′ na base logarítmica que escolher, a equitabilidade de Pielou J′, o número efetivo de espécies e o índice de Simpson com as suas formas de Gini–Simpson e inversa, além de uma tabela com a proporção de cada espécie no total.",
    ],
    howToUse: [
      "Introduza o número de indivíduos contados de cada espécie, uma contagem por espécie, separadas por ponto e vírgula, espaços ou mudanças de linha.",
      "Escolha a base do logaritmo. O logaritmo natural é o mais comum em ecologia; a base 2 dá H′ em bits.",
      "Consulte H′ e os restantes índices. As contagens nulas são permitidas mas ignoradas, e o resultado indica quantas havia.",
    ],
    formulas: [
      {
        title: "Índice de Shannon",
        expression: "H′ = −Σ pᵢ log pᵢ, com pᵢ = nᵢ ÷ N",
        explanation: "nᵢ é a contagem da espécie i e N a contagem total. Só se incluem as espécies com nᵢ > 0.",
      },
      {
        title: "Equitabilidade de Pielou",
        expression: "J′ = H′ ÷ log S",
        explanation:
          "S é o número de espécies presentes. J′ vai de perto de 0 (uma espécie domina) a 1 (todas as espécies igualmente comuns), e exige S ≥ 2.",
      },
      {
        title: "Número efetivo de espécies",
        expression: "D₁ = base^H′ (e^H′ para o logaritmo natural)",
        explanation: "O número de espécies igualmente comuns que daria o mesmo H′. Não depende da base.",
      },
      {
        title: "Índice de Simpson",
        expression: "D = Σ nᵢ(nᵢ − 1) ÷ (N(N − 1)); Gini–Simpson = 1 − D; inverso = 1 ÷ D",
        explanation: "D é a probabilidade de dois indivíduos tirados ao acaso, sem reposição, pertencerem à mesma espécie.",
      },
    ],
    examples: [
      {
        title: "Seis espécies de aves ao longo de um transecto",
        steps: [
          "N = 100, pelo que as proporções são 0,42, 0,27, 0,15, 0,09, 0,05 e 0,02.",
          "H′ = −(0,42 ln 0,42 + 0,27 ln 0,27 + … + 0,02 ln 0,02) ≈ 1,4472.",
          "J′ = 1,4472 ÷ ln 6 ≈ 0,808; número efetivo e^1,4472 ≈ 4,25 espécies.",
          "D de Simpson = (42·41 + 27·26 + 15·14 + 9·8 + 5·4 + 2·1) ÷ (100·99) = 2728 ÷ 9900 ≈ 0,2756.",
        ],
      },
      {
        title: "Contagens em quadrados com espécies ausentes, em bits",
        steps: [
          "Os dois zeros são ignorados: S = 5 espécies e N = 80 indivíduos.",
          "H′ = −Σ pᵢ log₂ pᵢ ≈ 2,0478 bits.",
          "J′ = 2,0478 ÷ log₂ 5 ≈ 0,882.",
        ],
      },
      {
        title: "Uma comunidade dominada por uma espécie, base 10",
        steps: ["p = 0,60, 0,25, 0,10, 0,05.", "H′ = −Σ pᵢ log₁₀ pᵢ ≈ 0,4487.", "Número efetivo 10^0,4487 ≈ 2,81 espécies."],
      },
    ],
    assumptions: [
      "As contagens são uma amostra aleatória da comunidade e cada indivíduo foi identificado até à espécie. As espécies raras escapam facilmente em amostras pequenas, o que baixa H′.",
      "H′ usa diretamente as proporções observadas, sem as correções do enviesamento de amostras pequenas que alguns estudos aplicam.",
      "Os valores em bases logarítmicas diferentes diferem por um fator constante (H′ em bits = H′ em nats ÷ ln 2), por isso compare apenas índices na mesma base.",
      "O índice de Simpson usa aqui a forma para amostras finitas nᵢ(nᵢ − 1) ÷ (N(N − 1)). Alguns textos usam antes Σ pᵢ², que dá valores ligeiramente diferentes em amostras pequenas.",
    ],
    faqs: [
      {
        question: "O que é um índice de Shannon elevado?",
        answer:
          "Não há uma escala fixa: H′ cresce com o número de espécies e com a equitabilidade, e o seu máximo é log S. É por isso que a equitabilidade J′ (H′ ÷ log S) e o número efetivo de espécies são muitas vezes mais fáceis de interpretar e comparar.",
      },
      {
        question: "Porque são ignoradas as contagens nulas?",
        answer:
          "Uma espécie sem indivíduos tem pᵢ = 0, e o termo pᵢ log pᵢ tende para 0 à medida que pᵢ diminui, pelo que nada acrescenta a H′. Também não conta para a riqueza específica S.",
      },
      {
        question: "Em que difere o índice de Shannon do de Simpson?",
        answer:
          "Ambos combinam riqueza e equitabilidade, mas o índice de Simpson dá mais peso às espécies comuns, enquanto H′ é mais sensível às espécies raras. Apresentar os dois, ou os números efetivos de espécies, dá uma imagem mais completa.",
      },
    ],
    sourcesUsedFor: [
      "O índice de Shannon H′ = −Σ pᵢ ln pᵢ com pᵢ = nᵢ ÷ N, e um exemplo resolvido dos índices de Shannon e de Simpson.",
      "O índice de Simpson a partir de contagens, Σ n(n − 1) ÷ (N(N − 1)).",
      "A equitabilidade como H′ dividido pelo seu máximo, log S, que é atingido quando todas as espécies são igualmente abundantes.",
    ],
  },
  text: {
    counts: "Indivíduos contados por espécie",
    countsHelp: "Uma contagem inteira por espécie, separadas por ponto e vírgula, espaços ou mudanças de linha. Os zeros são ignorados.",
    base: "Base do logaritmo",
    bases: { e: "Logaritmo natural (ln), a escolha habitual", "2": "Base 2 (bits)", "10": "Base 10" },
    errors: {
      empty: "Introduza pelo menos uma contagem.",
      tooMany: "Introduza no máximo {max} contagens.",
      notNumber: "«{token}» não é um número. Separe as contagens com ponto e vírgula, espaços ou mudanças de linha.",
      tooLarge: "«{token}» é demasiado grande.",
      notInteger: "{value} não é um número inteiro. Introduza o número de indivíduos de cada espécie.",
      negative: "As contagens não podem ser negativas ({value}).",
      countTooLarge: "Cada contagem pode ser no máximo {max}.",
      allZero: "Introduza pelo menos uma contagem superior a zero.",
    },
    result: "Índice de Shannon H′",
    caption: "H′ = −Σ pᵢ log pᵢ, com {log}",
    logNames: { e: "o logaritmo natural", "2": "o logaritmo de base 2", "10": "o logaritmo de base 10" },
    richness: "Riqueza específica S",
    total: "Total de indivíduos N",
    evenness: "Equitabilidade de Pielou J′",
    effective: "Número efetivo de espécies",
    simpson: "Índice de Simpson D",
    giniSimpson: "Índice de Gini–Simpson (1 − D)",
    inverseSimpson: "Índice inverso de Simpson (1 ÷ D)",
    notAvailable: "Não definido para estas contagens",
    table: {
      caption: "Proporções das espécies",
      species: "Espécie",
      count: "Contagem",
      proportion: "Proporção pᵢ",
      term: "−pᵢ log pᵢ",
      label: "Espécie {n}",
    },
    notes: {
      zeros: "Contagens nulas ignoradas: {count}. As espécies sem indivíduos não contribuem para H′ nem para S.",
      single: "Só uma espécie tem indivíduos, pelo que H′ é 0 e a equitabilidade não está definida.",
      simpsonUndefined: "O índice de Simpson exige pelo menos 2 indivíduos no total.",
      simpsonZero: "Cada espécie tem exatamente um indivíduo, pelo que o D de Simpson é 0 e o seu inverso não está definido.",
      truncated: "A tabela mostra as primeiras {shown} espécies com indivíduos.",
      general:
        "H′ depende da base do logaritmo: os valores em bases diferentes diferem por um fator constante, mas a equitabilidade J′ e o número efetivo de espécies não. Compare índices apenas quando usarem a mesma base e o mesmo esforço de amostragem.",
    },
  },
};

export default pt;
