import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MarginOfErrorText } from "../text/en";

const pt: CalculatorTranslation<MarginOfErrorText> = {
  content: {
    title: "Calculadora de margem de erro",
    shortTitle: "Margem de erro",
    summary:
      "Calcule a margem de erro ± de uma percentagem de inquérito ou sondagem a partir da dimensão da amostra, do resultado e do nível de confiança.",
    metaTitle: "Calculadora de margem de erro – Proporções de sondagens",
    metaDescription:
      "Calcule a margem de erro ± de uma percentagem de sondagem ou inquérito segundo a dimensão da amostra e o nível de confiança, com o intervalo e o erro padrão.",
    keywords: [
      "margem de erro",
      "calcular margem de erro",
      "margem de erro de inquérito",
      "margem de erro de sondagem",
      "mais ou menos",
      "erro amostral",
      "intervalo de confiança de uma proporção",
      "erro padrão de uma proporção",
    ],
    intro: [
      "Quando uma sondagem indica que 47 % dos eleitores apoiam um plano, os «±3 pontos» são a sua margem de erro: o intervalo em torno do resultado onde provavelmente se encontra o valor real da população. Esta calculadora obtém essa margem para qualquer percentagem de inquérito.",
      "Introduza quantas pessoas responderam, a parte que deu a resposta que está a reportar e o nível de confiança. A calculadora devolve a margem de erro em pontos percentuais, o intervalo de confiança e o erro padrão.",
      "Esta ferramenta destina-se a proporções (percentagens de respostas sim/não). Se estiver a estimar a média de uma medida, como a altura ou a despesa, use a Calculadora de intervalos de confiança.",
    ],
    howToUse: [
      "Introduza a dimensão da amostra: o número de respostas completas.",
      "Introduza a proporção observada em percentagem. Use 50 % para obter a maior margem possível com essa dimensão de amostra.",
      "Escolha o nível de confiança.",
      "Se a amostra for uma parte grande de uma população conhecida e limitada, introduza a dimensão da população para aplicar a correção para população finita.",
      "Consulte a margem de erro e o intervalo que dá em torno do seu resultado.",
    ],
    formulas: [
      {
        title: "Erro padrão de uma proporção",
        expression: "EP = √(p × (1 − p) ÷ n)",
        explanation: "p é a proporção observada em forma decimal e n a dimensão da amostra.",
      },
      {
        title: "Margem de erro",
        expression: "ME = z* × EP",
        explanation: "z* é o valor crítico do nível de confiança: 1,645 para 90 %, 1,960 para 95 % e 2,576 para 99 %.",
      },
      {
        title: "Correção para população finita",
        expression: "ME = z* × EP × √((N − n) ÷ (N − 1))",
        explanation: "Usada quando é introduzida uma dimensão de população N. Reduz a margem quando a amostra é uma parte grande da população.",
      },
      {
        title: "Intervalo de confiança",
        expression: "de p − ME a p + ME",
        explanation: "O intervalo é limitado ao domínio de 0 % a 100 %.",
      },
    ],
    examples: [
      {
        title: "Uma sondagem a 1000 pessoas com um resultado de 50 % a 95 % de confiança",
        steps: ["EP = √(0,5 × 0,5 ÷ 1000) ≈ 0,015811", "ME = 1,95996 × 0,015811 ≈ 0,030990", "Margem ≈ ±3,10 pontos; intervalo ≈ de 46,90 % a 53,10 %"],
      },
      {
        title: "600 clientes, 42 % satisfeitos, a 90 % de confiança",
        steps: ["EP = √(0,42 × 0,58 ÷ 600) ≈ 0,020149", "ME = 1,64485 × 0,020149 ≈ 0,033143", "Margem ≈ ±3,31 pontos; intervalo ≈ de 38,69 % a 45,31 %"],
      },
      {
        title: "400 dos 3000 alunos de uma escola, 35 % de acordo, a 99 % de confiança",
        steps: [
          "EP antes da correção = √(0,35 × 0,65 ÷ 400) ≈ 0,023848",
          "Correção = √(2600 ÷ 2999) ≈ 0,93110",
          "ME = 2,57583 × 0,023848 × 0,93110 ≈ 0,057197, ou seja, cerca de ±5,72 pontos",
        ],
      },
    ],
    assumptions: [
      "A amostra é uma amostra aleatória simples da população. As sondagens online autosselecionadas, as amostras por quotas e os painéis ponderados podem ter erros maiores do que esta fórmula indica.",
      "A margem cobre apenas o erro aleatório de amostragem. Não tem em conta a não resposta, perguntas mal formuladas nem respostas falsas.",
      "Usa a aproximação normal (de Wald), pouco fiável quando menos de cerca de 10 respostas caem numa das duas categorias; nesse caso, a calculadora avisa-o.",
      "Os valores críticos são calculados numericamente e coincidem com as tabelas padrão com muito mais algarismos do que os apresentados.",
    ],
    faqs: [
      {
        question: "O que significa uma margem de erro de ±3 pontos?",
        answer:
          "Com 95 % de confiança, se repetisse o inquérito muitas vezes com novas amostras aleatórias, cerca de 95 % dos intervalos assim construídos conteriam a percentagem real da população. Não garante que o valor real esteja a menos de 3 pontos.",
      },
      {
        question: "Como reduzo a margem de erro para metade?",
        answer:
          "A margem diminui com a raiz quadrada da dimensão da amostra, pelo que reduzi-la para metade exige cerca de quatro vezes mais respostas. Passar de ±3,1 pontos com 1000 pessoas para cerca de ±1,55 pontos exige aproximadamente 4000 pessoas.",
      },
      {
        question: "Serve para médias?",
        answer:
          "Não. Esta calculadora trabalha com percentagens de respostas sim/não. Para a média de uma medida numérica, use a Calculadora de intervalos de confiança, que parte da média e do desvio padrão.",
      },
    ],
    sourcesUsedFor: [
      "Limite de erro para uma proporção, z·√(p′q′/n), e o intervalo p′ ± limite de erro.",
      "A correção para população finita √((N − n)/(N − 1)).",
    ],
  },
  text: {
    n: "Dimensão da amostra (n)",
    nHelp: "Número de respostas completas.",
    proportion: "Proporção observada",
    proportionHelp: "Parte da amostra que deu a resposta que está a reportar. Use 50 % para obter a margem mais ampla e conservadora.",
    level: "Nível de confiança",
    levelOptions: { "80": "80 %", "90": "90 %", "95": "95 %", "98": "98 %", "99": "99 %" },
    population: "Dimensão da população (opcional)",
    populationHelp: "Dimensão total do grupo do qual a amostra foi retirada. Deixe vazio para uma população muito grande ou desconhecida.",
    populationTooSmall: "A população não pode ser inferior à amostra ({n}).",
    margin: "Margem de erro (± pontos percentuais)",
    caption: "{p} ± {moe} com {level} de confiança.",
    interval: "Intervalo de confiança",
    intervalText: "De {lower} a {upper}",
    standardError: "Erro padrão",
    critical: "Valor crítico (z*)",
    correction: "Fator de correção para população finita",
    correctionNone: "Não aplicado",
    weakApproximation:
      "Menos de 10 respostas caem num dos lados (n × p = {yes}, n × (1 − p) = {no}). Aqui a aproximação normal é pouco fiável, por isso considere esta margem apenas indicativa; um intervalo exato ou de Wilson é mais fiável.",
    census: "A amostra abrange toda a população, pelo que não há erro de amostragem.",
    clipped: "O intervalo foi cortado em {bound} porque uma proporção não pode ultrapassar esse limite.",
    meansNote: "Esta margem refere-se a uma percentagem (proporção). Para a média de uma medida, use a Calculadora de intervalos de confiança.",
  },
};

export default pt;
