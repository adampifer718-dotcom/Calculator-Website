import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HardyWeinbergText } from "../text/en";

const pt: CalculatorTranslation<HardyWeinbergText> = {
  content: {
    title: "Calculadora do equilíbrio de Hardy-Weinberg",
    shortTitle: "Hardy-Weinberg",
    summary: "Calcule as frequências alélicas e genotípicas a partir da frequência de um traço recessivo, ou teste contagens de genótipos face ao equilíbrio.",
    metaTitle: "Calculadora de Hardy-Weinberg – Frequências alélicas e χ²",
    metaDescription:
      "Obtenha p, q, p², 2pq e q² a partir da proporção de pessoas com um traço recessivo, ou teste contagens observadas de AA, Aa e aa com um teste do qui-quadrado.",
    keywords: [
      "hardy-weinberg",
      "equilíbrio de Hardy-Weinberg",
      "frequência alélica",
      "frequência genotípica",
      "p2 2pq q2",
      "frequência de portadores",
      "genética de populações",
      "qui-quadrado",
    ],
    intro: [
      "O princípio de Hardy-Weinberg estabelece que, na ausência de forças evolutivas, as frequências alélicas e genotípicas se mantêm constantes de uma geração para a seguinte. Para um gene com dois alelos, A com frequência p e a com frequência q, os genótipos surgem então nas proporções p², 2pq e q².",
      "Use o primeiro modo quando souber a frequência de um traço recessivo, por exemplo para estimar quantas pessoas são portadoras. Use o segundo modo para verificar se as contagens de genótipos de uma amostra correspondem às proporções previstas pelo princípio.",
    ],
    howToUse: [
      "Escolha um ponto de partida: a frequência do fenótipo recessivo ou as contagens de genótipos.",
      "No modo de fenótipo, introduza em percentagem a proporção de indivíduos que apresentam o traço recessivo.",
      "No modo de contagens, introduza quantos indivíduos AA, Aa e aa observou.",
      "Consulte as frequências alélicas, a tabela de genótipos e, no caso das contagens, o resultado do teste do qui-quadrado.",
    ],
    formulas: [
      {
        title: "Proporções de equilíbrio",
        expression: "p + q = 1;  p² + 2pq + q² = 1",
        explanation: "p² é a proporção de AA, 2pq a de Aa e q² a de aa.",
      },
      {
        title: "A partir do fenótipo recessivo",
        expression: "q = √q²;  p = 1 − q",
        explanation: "Só os indivíduos aa apresentam um traço recessivo, pelo que a sua proporção é igual a q².",
      },
      {
        title: "A partir das contagens de genótipos",
        expression: "p = (2·AA + Aa) ÷ (2N)",
        explanation: "Cada indivíduo transporta dois alelos; N é o número total de indivíduos.",
      },
      {
        title: "Teste do qui-quadrado",
        expression: "χ² = Σ (O − E)² ÷ E;  valor p = erfc(√(χ² ÷ 2))",
        explanation: "E = p²N, 2pqN e q²N. Com 1 grau de liberdade, o valor p tem esta forma fechada.",
      },
    ],
    examples: [
      {
        title: "Uma doença recessiva em 1 em cada 2500 pessoas",
        steps: [
          "q² = 0,0004, pelo que q = 0,02 e p = 0,98",
          "2pq = 2 × 0,98 × 0,02 = 0,0392",
          "Cerca de 3,92 % das pessoas, aproximadamente 1 em cada 25,5, são portadoras",
        ],
      },
      {
        title: "Um traço recessivo presente em 9 % de uma população",
        steps: ["q = √0,09 = 0,3 e p = 0,7", "p² = 49 %, 2pq = 42 %, q² = 9 %"],
      },
      {
        title: "Teste de 298 AA, 489 Aa e 213 aa",
        steps: [
          "N = 1000 e p = (2 × 298 + 489) ÷ 2000 = 0,5425",
          "Contagens esperadas ≈ 294,31, 496,39 e 209,31",
          "χ² ≈ 0,2215, valor p ≈ 0,638: compatível com o equilíbrio",
        ],
      },
    ],
    assumptions: [
      "O modelo pressupõe uma população grande com acasalamento aleatório, sem mutação, migração nem seleção a atuar sobre o gene.",
      "O modo de fenótipo pressupõe um gene com dois alelos, dominância completa e uma população já em equilíbrio.",
      "A frequência do fenótipo é introduzida em percentagem (0–100), não como fração entre 0 e 1.",
      "O teste do qui-quadrado é uma aproximação que funciona melhor quando todas as contagens esperadas são de pelo menos 5.",
    ],
    faqs: [
      {
        question: "Porque não basta contar o fenótipo dominante?",
        answer: "As pessoas AA e Aa têm o mesmo aspeto, pelo que o fenótipo dominante mistura dois genótipos. O fenótipo recessivo corresponde apenas a aa, e é por isso que q² é o ponto de partida.",
      },
      {
        question: "O que significa um valor p pequeno?",
        answer: "Abaixo de 0,05, as contagens de genótipos observadas diferem mais do que o acaso normalmente explicaria. Entre as causas possíveis contam-se a consanguinidade, a seleção, a migração, a estrutura da população ou erros de genotipagem.",
      },
      {
        question: "Porque é que o teste tem apenas 1 grau de liberdade?",
        answer: "Há três classes de genótipos. Perde-se um grau porque as contagens têm de somar N, e outro porque a frequência alélica p é estimada a partir dos mesmos dados.",
      },
    ],
    sourcesUsedFor: ["O princípio de Hardy-Weinberg, p² + 2pq + q² = 1 e os seus pressupostos."],
  },
  text: {
    mode: "Partir de",
    modeOptions: { phenotype: "Frequência do fenótipo recessivo", counts: "Contagens de genótipos" },
    q2: "Proporção com o traço recessivo (q²)",
    q2Help: "Introduza uma percentagem: 1 pessoa em cada 2500 corresponde a 0,04 %.",
    countAA: "Indivíduos AA (homozigóticos dominantes)",
    countAa: "Indivíduos Aa (heterozigóticos)",
    countaa: "Indivíduos aa (homozigóticos recessivos)",
    noIndividuals: "Introduza pelo menos um indivíduo.",
    carrier: "Frequência de portadores (2pq)",
    carrierRatio: "Portadores",
    oneIn: "Aproximadamente 1 em cada {n}",
    none: "Nenhum",
    alleleA: "Frequência do alelo A (p)",
    allelea: "Frequência do alelo a (q)",
    total: "Total de indivíduos (N)",
    chiSquare: "Qui-quadrado (χ², 1 grau de liberdade)",
    pValue: "Valor p",
    verdict: "Resultado do teste ao nível de 5 %",
    consistent: "Sem desvio significativo do equilíbrio",
    departure: "Desvio significativo do equilíbrio",
    genotypes: { AA: "AA (homozigótico dominante)", Aa: "Aa (heterozigótico)", aa: "aa (homozigótico recessivo)" },
    frequencyCaption: "Frequências genotípicas esperadas",
    countsCaption: "Contagens observadas e esperadas",
    colGenotype: "Genótipo",
    colFrequency: "Frequência",
    colPercent: "Percentagem",
    colObserved: "Observados",
    colExpected: "Esperados",
    phenotypeNote: "Pressupõe que a população está em equilíbrio de Hardy-Weinberg, pelo que q = √q².",
    monomorphic: "Só existe um alelo, pelo que cada genótipo coincide com a sua contagem esperada e o teste do qui-quadrado não se aplica.",
    smallExpected: "Pelo menos uma contagem esperada é inferior a 5, pelo que o valor p do qui-quadrado é apenas indicativo. Para amostras pequenas, um teste exato é mais fiável.",
    countsNote: "As contagens esperadas são p²N, 2pqN e q²N. O teste tem 1 grau de liberdade: 3 classes de genótipos menos 1, menos 1 pela frequência alélica estimada.",
  },
};

export default pt;
