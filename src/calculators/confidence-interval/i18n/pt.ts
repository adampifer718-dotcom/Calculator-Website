import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ConfidenceIntervalText } from "../text/en";

const pt: CalculatorTranslation<ConfidenceIntervalText> = {
  content: {
    title: "Calculadora de intervalos de confiança",
    shortTitle: "Intervalo de confiança",
    summary: "Calcule um intervalo de confiança para uma média a partir da média amostral, do desvio padrão e da dimensão da amostra.",
    metaTitle: "Calculadora de intervalos de confiança – Para uma média",
    metaDescription:
      "Calcule um intervalo de confiança para uma média com a média amostral, o desvio padrão, a dimensão da amostra e o nível de confiança, com margem de erro.",
    keywords: ["intervalo de confiança", "margem de erro", "erro padrão", "nível de confiança 95 %", "estatística", "intervalo de confiança da média"],
    intro: [
      "Um intervalo de confiança dá um intervalo de valores plausíveis para a média de uma população. Um intervalo a 95 % é construído de forma que 95 % dos intervalos obtidos desta maneira contenham a média verdadeira.",
      "Introduza a média amostral, o desvio padrão, a dimensão da amostra e o nível de confiança.",
    ],
    howToUse: [
      "Introduza a média amostral.",
      "Introduza o desvio padrão e a dimensão da amostra.",
      "Escolha o nível de confiança, por exemplo 95 %.",
      "Consulte o intervalo, a margem de erro e o valor crítico.",
    ],
    formulas: [
      { title: "Intervalo de confiança", expression: "IC = x̄ ± z* × σ ÷ √n", explanation: "z* é o valor crítico para o nível de confiança." },
      { title: "Valor crítico", expression: "z* = Φ⁻¹(1 − (1 − nível) ÷ 2)", explanation: "Para 95 %, z* ≈ 1,96; para 99 %, z* ≈ 2,576." },
    ],
    examples: [
      { title: "Média 100, σ 15, n 36, 95 %", steps: ["EP = 15 ÷ √36 = 2,5", "ME = 1,96 × 2,5 ≈ 4,9", "IC ≈ de 95,1 a 104,9"] },
      { title: "Média 50, σ 8, n 64, 99 %", steps: ["EP = 8 ÷ √64 = 1", "ME = 2,576 × 1", "IC ≈ de 47,42 a 52,58"] },
    ],
    assumptions: [
      "Usa a distribuição normal (z): adequada quando σ é conhecido ou a amostra é grande (n ≥ 30). As amostras pequenas com σ estimado exigem um intervalo t, que é mais largo.",
      "Pressupõe uma amostra aleatória de observações independentes.",
    ],
    faqs: [
      {
        question: "O que significa 95 % de confiança?",
        answer: "Se repetisse a amostragem muitas vezes, cerca de 95 % dos intervalos conteriam a média verdadeira. Não é uma probabilidade de 95 % para um intervalo concreto.",
      },
      { question: "Como obtenho um intervalo mais estreito?", answer: "Aumente a dimensão da amostra ou aceite um nível de confiança mais baixo." },
      { question: "O que é a margem de erro?", answer: "Metade da largura do intervalo: z* × σ ÷ √n." },
    ],
    sourcesUsedFor: ["Intervalo de confiança para uma média e valores críticos de z."],
  },
  text: {
    mean: "Média amostral (x̄)",
    sd: "Desvio padrão (σ)",
    n: "Dimensão da amostra (n)",
    level: "Nível de confiança",
    primary: "Intervalo de confiança a {level}",
    interval: "De {lower} a {upper}",
    margin: "Margem de erro",
    standardError: "Erro padrão",
    critical: "Valor crítico (z*)",
    note: "Usa a distribuição normal (z), que pressupõe um desvio padrão populacional conhecido ou uma amostra grande (n ≥ 30).",
  },
};

export default pt;
