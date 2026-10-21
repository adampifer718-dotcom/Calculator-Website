import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ZScoreText } from "../text/en";

const pt: CalculatorTranslation<ZScoreText> = {
  content: {
    title: "Calculadora de pontuação z",
    shortTitle: "Pontuação z",
    summary: "Padronize um valor como pontuação z e obtenha o respetivo percentil e as probabilidades das caudas sob a curva normal.",
    metaTitle: "Calculadora de pontuação z – Percentil e probabilidades",
    metaDescription:
      "Converta um valor numa pontuação z a partir da média e do desvio padrão e obtenha o percentil e as probabilidades normais da cauda direita e bilateral.",
    keywords: ["pontuação z", "valor z", "z-score", "valor padronizado", "padronizar", "distribuição normal", "percentil", "curva de Gauss"],
    intro: [
      "Uma pontuação z indica a quantos desvios padrão um valor está acima ou abaixo da média. Uma pontuação z de 0 está exatamente na média, as pontuações positivas estão acima da média e as negativas abaixo.",
      "Como as pontuações z eliminam as unidades originais, permitem comparar resultados de escalas diferentes, como dois exames com médias diferentes. Se os dados forem aproximadamente normais, a pontuação z dá também a proporção de valores abaixo ou acima do seu.",
    ],
    howToUse: [
      "Introduza o valor que pretende analisar.",
      "Introduza a média e o desvio padrão do grupo a que pertence. O desvio padrão tem de ser positivo.",
      "Consulte a pontuação z e a posição descrita por palavras.",
      "Use o percentil para a proporção de valores abaixo de x, P(X > x) para a proporção acima e a probabilidade bilateral para um teste bilateral.",
    ],
    formulas: [
      { title: "Pontuação z", expression: "z = (x − μ) ÷ σ", explanation: "μ é a média e σ o desvio padrão da distribuição." },
      {
        title: "Percentil",
        expression: "P(X < x) = Φ(z)",
        explanation: "Φ é a função de distribuição acumulada da distribuição normal padrão: a área sob a curva de Gauss à esquerda de z.",
      },
      {
        title: "Cauda direita",
        expression: "P(X > x) = 1 − Φ(z) = Φ(−z)",
        explanation: "A área à direita de z. É calculada como Φ(−z) para manter a precisão com valores de z grandes.",
      },
      {
        title: "Probabilidade bilateral",
        expression: "P(|Z| > |z|) = 2·Φ(−|z|)",
        explanation: "A probabilidade de um valor pelo menos tão afastado da média, em qualquer dos sentidos.",
      },
    ],
    examples: [
      {
        title: "Uma nota de exame de 1310 quando a média é 1050 e σ = 210",
        steps: [
          "z = (1310 − 1050) ÷ 210 = 260 ÷ 210 ≈ 1,2381",
          "Φ(1,2381) ≈ 0,8922, pelo que a nota está perto do percentil 89",
          "Cerca de 10,78% das notas são mais altas",
        ],
      },
      {
        title: "Uma peça com 58 mm quando a média é 70 mm e σ = 8 mm",
        steps: ["z = (58 − 70) ÷ 8 = −1,5", "Φ(−1,5) ≈ 0,0668, pelo que cerca de 6,68% das peças são mais curtas", "Probabilidade bilateral = 2 × 0,0668 ≈ 0,1336"],
      },
    ],
    assumptions: [
      "A pontuação z em si é válida para qualquer distribuição, mas o percentil e as probabilidades pressupõem que os dados seguem uma distribuição normal.",
      "A média e o desvio padrão introduzidos são tratados como os verdadeiros valores da população. Com uma amostra pequena e um σ estimado, uma distribuição t pode ser mais adequada.",
      "As probabilidades normais são calculadas com uma aproximação numérica com uma exatidão de cerca de sete algarismos significativos.",
    ],
    faqs: [
      {
        question: "O que é uma boa pontuação z?",
        answer:
          "Depende do que se está a medir. Nas notas de testes, uma pontuação z mais alta é melhor; em algo como o tempo de reação, mais baixa é melhor. Numa distribuição normal, cerca de 68% dos valores ficam entre z = −1 e z = 1 e cerca de 95% entre −2 e 2.",
      },
      {
        question: "Uma pontuação z pode ser negativa?",
        answer: "Sim. Uma pontuação z negativa significa que o valor está abaixo da média. Por exemplo, z = −2 está dois desvios padrão abaixo da média.",
      },
      {
        question: "Como transformo uma pontuação z num percentil?",
        answer:
          "Determine a área sob a curva normal padrão à esquerda de z. Esta calculadora faz isso por si: z = 1,6 dá cerca de 94,52%, pelo que o valor é superior a cerca de 94,5% da distribuição.",
      },
    ],
    sourcesUsedFor: ["Definição da pontuação z, z = (x − μ)/σ, e da distribuição normal padrão."],
  },
  text: {
    x: "Valor (x)",
    xHelp: "A observação que pretende padronizar.",
    mean: "Média (μ)",
    sd: "Desvio padrão (σ)",
    sdHelp: "Tem de ser maior do que 0.",
    z: "Pontuação z",
    above: "{n} desvios padrão acima da média",
    below: "{n} desvios padrão abaixo da média",
    atMean: "Exatamente na média",
    position: "Posição",
    percentile: "Percentil, P(X < x)",
    upper: "P(X > x)",
    twoTailed: "Bilateral, P(|Z| > |z|)",
    note: "As probabilidades pressupõem que os valores seguem uma distribuição normal com esta média e este desvio padrão.",
    unusual: "|z| é maior do que 3, o que é muito invulgar em dados com distribuição normal. Verifique se houve um erro na introdução dos dados ou se há um valor atípico.",
  },
};

export default pt;
