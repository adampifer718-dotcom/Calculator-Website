import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PunnettText } from "../text/en";

const pt: CalculatorTranslation<PunnettText> = {
  content: {
    title: "Calculadora de quadrado de Punnett",
    shortTitle: "Quadrado de Punnett",
    summary:
      "Cruze dois progenitores para um ou dois genes e obtenha o quadrado de Punnett, as proporções genotípicas e fenotípicas e a probabilidade de cada característica.",
    metaTitle: "Calculadora de quadrado de Punnett – Genótipos e fenótipos",
    metaDescription:
      "Introduza dois genótipos parentais, como AaBb × AaBb, para construir o quadrado de Punnett e obter proporções genotípicas, fenotípicas e probabilidades.",
    keywords: ["quadrado de Punnett", "cruzamento monoíbrido", "cruzamento diíbrido", "proporção genotípica", "proporção fenotípica", "genética mendeliana", "9:3:3:1", "cruzamento-teste"],
    intro: [
      "Um quadrado de Punnett dispõe num dos lados todos os gâmetas que um progenitor pode produzir e no outro lado todos os gâmetas do outro progenitor. Cada casa da grelha é uma combinação igualmente provável, pelo que contar as casas dá a proporção esperada de cada genótipo na descendência.",
      "Esta calculadora trata um gene (um cruzamento monoíbrido, como Aa × aa) ou dois genes (um cruzamento diíbrido, como AaBb × AaBb). Desenha a grelha e converte-a em proporções genotípicas, proporções fenotípicas e na probabilidade de cada combinação de características.",
    ],
    howToUse: [
      "Escolha uma letra para cada gene. Escreva o alelo dominante em maiúscula e o alelo recessivo em minúscula.",
      "Escreva o genótipo do progenitor 1, por exemplo Aa para um gene ou AaBb para dois genes.",
      "Escreva o genótipo do progenitor 2 com as mesmas letras, por exemplo aa ou Aabb.",
      "Consulte a proporção fenotípica e, em seguida, a grelha e as tabelas com cada genótipo e a sua probabilidade.",
    ],
    formulas: [
      {
        title: "Gâmetas",
        expression: "gâmetas por progenitor = 2ⁿ para n genes",
        explanation: "Cada gâmeta transporta um alelo de cada gene. Com dois genes, um progenitor como AaBb produz AB, Ab, aB e ab em partes iguais.",
      },
      {
        title: "Probabilidade de um genótipo",
        expression: "P = casas com esse genótipo ÷ total de casas",
        explanation: "Um cruzamento de um gene tem 4 casas e um de dois genes tem 16, todas igualmente prováveis.",
      },
      {
        title: "Regra do produto",
        expression: "P(A_ e B_) = P(A_) × P(B_)",
        explanation: "Com segregação independente, os genes comportam-se separadamente. Em AaBb × AaBb, 3/4 × 3/4 = 9/16 dos descendentes apresentam as duas características dominantes.",
      },
    ],
    examples: [
      {
        title: "Dois progenitores heterozigóticos, um gene",
        steps: [
          "Cada progenitor produz gâmetas A e a em igual número.",
          "A grelha dá AA, Aa, Aa e aa: uma proporção genotípica de 1 : 2 : 1.",
          "AA e Aa apresentam ambos a característica dominante, pelo que a proporção fenotípica é 3 : 1 (75 % e 25 %).",
        ],
      },
      {
        title: "Um cruzamento diíbrido clássico",
        steps: [
          "Cada progenitor produz quatro gâmetas: AB, Ab, aB e ab.",
          "A grelha de 4 × 4 tem 16 casas e 9 genótipos diferentes.",
          "Agrupados por características: 9 A_B_, 3 A_bb, 3 aaB_ e 1 aabb, pelo que a proporção é 9 : 3 : 3 : 1.",
        ],
      },
      {
        title: "Cruzamento-teste com um duplo recessivo",
        steps: [
          "O progenitor 2 só produz gâmetas ab, pelo que cada descendente mostra os alelos que recebeu do progenitor 1.",
          "Os quatro gâmetas do progenitor 1 são igualmente prováveis, por isso os quatro fenótipos surgem na proporção 1 : 1 : 1 : 1, 25 % cada.",
        ],
      },
    ],
    assumptions: [
      "Dominância completa: basta um alelo dominante para manifestar a característica dominante. Não se modelam a dominância incompleta, a codominância nem os alelos múltiplos (como nos grupos sanguíneos AB0).",
      "Com dois genes, pressupõe-se que segregam de forma independente. Os genes ligados no mesmo cromossoma não seguem estas proporções.",
      "Cada gene tem exatamente dois alelos e não está ligado ao sexo. Pressupõe-se que todas as combinações de gâmetas têm a mesma probabilidade de sobreviver.",
      "Os resultados são probabilidades para cada descendente. Num pequeno número de descendentes, a proporção pode diferir da esperada apenas por acaso.",
    ],
    faqs: [
      {
        question: "Qual é a diferença entre proporções genotípicas e fenotípicas?",
        answer: "A proporção genotípica conta as combinações de alelos, como AA : Aa : aa = 1 : 2 : 1. A proporção fenotípica conta as características visíveis. Com dominância completa, AA e Aa têm o mesmo aspeto, por isso o mesmo cruzamento dá uma proporção fenotípica de 3 : 1.",
      },
      {
        question: "Porque é que a grelha mostra o mesmo gâmeta duas vezes para alguns progenitores?",
        answer: "Um progenitor como AA só produz gâmetas A, mas a grelha mantém uma linha ou coluna por alelo para que todas as casas tenham a mesma probabilidade. Cabeçalhos repetidos significam apenas que esse gâmeta é duas vezes mais provável.",
      },
      {
        question: "Posso introduzir três genes?",
        answer: "Aqui não. Um cruzamento de três genes precisa de 64 casas, e é mais fácil multiplicar as probabilidades de cada gene com a regra do produto. Calcule cada gene separadamente nesta calculadora e multiplique as probabilidades de que precisa.",
      },
    ],
    sourcesUsedFor: ["Dominância, segregação, segregação independente e a proporção 9 : 3 : 3 : 1 de um cruzamento diíbrido."],
  },
  text: {
    parent1: "Genótipo do progenitor 1",
    parent2: "Genótipo do progenitor 2",
    parentHelp:
      "Um ou dois genes, duas letras por gene: maiúscula para o alelo dominante, minúscula para o recessivo. Exemplos: Aa, AaBb, AABb.",
    parent2Help: "Use as mesmas letras de genes do progenitor 1, por exemplo aa ou aabb.",
    errors: {
      invalidChar: "«{token}» não é permitido. Use apenas letras, como Aa ou AaBb.",
      length: "Introduza um gene (2 letras, por exemplo Aa) ou dois genes (4 letras, por exemplo AaBb).",
      pairMismatch: "«{token}» mistura dois genes. Cada gene escreve-se com duas formas da mesma letra, como Aa, AA ou aa.",
      duplicateGene: "O gene {token} aparece duas vezes. Use uma letra diferente para cada gene, por exemplo AaBb.",
      geneCount: "Os dois progenitores precisam do mesmo número de genes.",
      geneMismatch: "Use as mesmas letras de genes do progenitor 1 ({genes}).",
    },
    listSeparator: ", ",
    dominantTrait: "{gene} dominante",
    recessiveTrait: "{gene} recessivo",
    phenotypeRatio: "Proporção fenotípica",
    caption: "Pela ordem {order} (um traço de sublinhado significa qualquer um dos alelos)",
    genotypeRatio: "Proporção genotípica",
    genotypeOrder: "Genótipos por essa ordem",
    genotypeCount: "Genótipos diferentes",
    phenotypeCount: "Fenótipos diferentes",
    probabilityOf: "Probabilidade de descendentes com {phenotype}",
    fraction: "{count} em {total}",
    gridCaption: "Quadrado de Punnett: gâmetas do progenitor 1 na lateral, do progenitor 2 no topo",
    gridCorner: "Progenitor 1 ↓ · Progenitor 2 →",
    genotypeTable: "Genótipos da descendência",
    phenotypeTable: "Fenótipos da descendência",
    columns: { genotype: "Genótipo", phenotype: "Fenótipo", description: "Características manifestadas", cells: "Casas", probability: "Probabilidade" },
    singlePhenotype: "Neste cruzamento, todos os descendentes apresentam as mesmas características.",
    linkageNote:
      "Pressupõe-se que os dois genes segregam de forma independente, como acontece com genes em cromossomas diferentes. Genes próximos no mesmo cromossoma são muitas vezes herdados em conjunto, o que altera estas proporções.",
    note: "Pressupõe dominância completa: basta um alelo dominante para manifestar a característica dominante. As proporções são probabilidades para cada descendente, pelo que ninhadas ou famílias reais podem diferir por acaso.",
  },
};

export default pt;
