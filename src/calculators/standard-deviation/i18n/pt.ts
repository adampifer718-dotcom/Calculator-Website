import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { StandardDeviationText } from "../text/en";

const pt: CalculatorTranslation<StandardDeviationText> = {
  content: {
    title: "Calculadora de desvio padrão",
    shortTitle: "Desvio padrão",
    summary: "Calcule o desvio padrão amostral ou populacional, a variância e o erro padrão a partir de um conjunto de dados.",
    metaTitle: "Calculadora de desvio padrão – Amostra e população",
    metaDescription:
      "Calcule o desvio padrão amostral ou populacional, a variância, a média e o erro padrão da média a partir de uma lista de números.",
    keywords: ["desvio padrão", "variância", "desvio padrão amostral", "desvio padrão populacional", "dispersão", "estatística", "erro padrão"],
    intro: [
      "O desvio padrão mede a dispersão dos valores em torno da média. Um valor pequeno significa que os dados estão concentrados; um valor grande significa que estão muito dispersos.",
      "Escolha amostra quando os seus dados forem um subconjunto de um grupo maior, que é o caso habitual.",
    ],
    howToUse: [
      "Introduza os seus números, separados por ponto e vírgula, espaços ou mudanças de linha.",
      "Escolha amostra ou população.",
      "Consulte o desvio padrão, a variância, a média e o erro padrão.",
    ],
    formulas: [
      {
        title: "Desvio padrão amostral",
        expression: "s = √(Σ(x − x̄)² ÷ (n − 1))",
        explanation: "Dividir por n − 1 (correção de Bessel) corrige o enviesamento ao estimar a dispersão a partir de uma amostra.",
      },
      { title: "Desvio padrão populacional", expression: "σ = √(Σ(x − μ)² ÷ n)", explanation: "Use quando tiver todos os elementos do grupo." },
      { title: "Erro padrão da média", expression: "SE = s ÷ √n", explanation: "Indica com que precisão a média da amostra estima a média da população." },
    ],
    examples: [
      {
        title: "População: 2, 4, 4, 4, 5, 5, 7, 9",
        steps: ["Média = 5; a soma dos desvios ao quadrado é 32", "σ = √(32 ÷ 8) = 2"],
      },
      {
        title: "Amostra: 2, 4, 4, 4, 5, 5, 7, 9",
        steps: ["A soma dos desvios ao quadrado é 32", "s = √(32 ÷ 7) ≈ 2,138"],
      },
    ],
    assumptions: [
      "Aceita até 10 000 números. Uma amostra precisa de pelo menos dois.",
      "Usa um cálculo em duas passagens, numericamente estável.",
      "Os resultados são apresentados com 10 algarismos significativos.",
    ],
    faqs: [
      {
        question: "Devo usar o desvio padrão amostral ou o populacional?",
        answer: "Use o amostral (n − 1) quando os dados forem uma amostra de um grupo maior, e o populacional (n) apenas quando tiver o grupo completo.",
      },
      { question: "O que é a variância?", answer: "O quadrado do desvio padrão, em unidades ao quadrado." },
      { question: "O que significa um desvio padrão de 0?", answer: "Que todos os valores são iguais." },
    ],
    sourcesUsedFor: ["Fórmulas do desvio padrão amostral e populacional."],
  },
  text: {
    data: "Conjunto de dados",
    dataHelp:
      "Separe os valores com ponto e vírgula, espaços ou mudanças de linha (por exemplo, 1,5; 2,25; 3). Use a vírgula como separador decimal; uma vírgula seguida de espaço também separa valores.",
    errors: {
      empty: "Introduza pelo menos um número.",
      tooMany: "Introduza no máximo {max} números.",
      notNumber: "«{token}» não é um número. Use a vírgula decimal e separe os valores com ponto e vírgula, espaços ou mudanças de linha.",
      tooLarge: "«{token}» é demasiado grande.",
    },
    kind: "Os dados são",
    kinds: { sample: "Uma amostra (dividir por n − 1)", population: "A população inteira (dividir por n)" },
    needTwo: "Uma amostra precisa de pelo menos dois valores.",
    sampleSd: "Desvio padrão amostral (s)",
    populationSd: "Desvio padrão populacional (σ)",
    sampleVariance: "Variância amostral (s²)",
    populationVariance: "Variância populacional (σ²)",
    mean: "Média",
    count: "Contagem (n)",
    standardError: "Erro padrão da média",
  },
};

export default pt;
