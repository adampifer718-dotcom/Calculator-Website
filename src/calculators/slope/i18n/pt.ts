import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SlopeText } from "../text/en";

const pt: CalculatorTranslation<SlopeText> = {
  content: {
    title: "Calculadora de declive",
    shortTitle: "Declive",
    summary: "Calcule o declive entre dois pontos, bem como a equação da reta, a ordenada na origem, o ângulo e a distância.",
    metaTitle: "Calculadora de declive – Declive a partir de dois pontos",
    metaDescription:
      "Calcule o declive de uma reta que passa por dois pontos, com a equação y = mx + b, a ordenada na origem, o ângulo e a distância entre os pontos.",
    keywords: ["declive", "declive de uma reta", "inclinação", "equação da reta", "y = mx + b", "dois pontos", "ordenada na origem"],
    intro: [
      "O declive mede a inclinação de uma reta: quanto varia y por cada unidade de x. Costuma descrever-se como a variação vertical a dividir pela variação horizontal.",
      "Introduza dois pontos e a calculadora indica também a equação da reta que passa por eles.",
    ],
    howToUse: [
      "Introduza as coordenadas do primeiro ponto (x₁, y₁).",
      "Introduza o segundo ponto (x₂, y₂).",
      "Consulte o declive, a equação, a ordenada na origem, o ângulo e a distância.",
    ],
    formulas: [
      { title: "Declive", expression: "m = (y₂ − y₁) ÷ (x₂ − x₁)", explanation: "Não está definido quando x₁ = x₂ (uma reta vertical)." },
      { title: "Equação da reta", expression: "y = mx + b, em que b = y₁ − m × x₁", explanation: "b é o ponto em que a reta interseta o eixo dos y." },
      {
        title: "Ângulo e distância",
        expression: "θ = arctan(m)\nd = √((x₂ − x₁)² + (y₂ − y₁)²)",
        explanation: "O ângulo é medido a partir do semieixo positivo dos x.",
      },
    ],
    examples: [
      {
        title: "Pontos (1, 3) e (4, 9)",
        steps: ["m = (9 − 3) ÷ (4 − 1) = 6 ÷ 3 = 2", "b = 3 − 2 × 1 = 1, pelo que y = 2x + 1"],
      },
      {
        title: "Pontos (−2, 5) e (3, −5)",
        steps: ["m = (−5 − 5) ÷ (3 − (−2)) = −10 ÷ 5", "= −2"],
      },
    ],
    assumptions: [
      "As retas verticais (x₁ = x₂) têm um declive não definido e são rejeitadas.",
      "Os resultados são apresentados com 6 casas decimais.",
    ],
    faqs: [
      { question: "O que significa um declive negativo?", answer: "A reta desce da esquerda para a direita." },
      { question: "Qual é o declive de uma reta horizontal?", answer: "0, porque y não varia." },
      {
        question: "Qual é a relação entre o declive e o ângulo?",
        answer: "O declive é a tangente do ângulo que a reta faz com o eixo dos x. Um declive de 1 corresponde a 45°.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    vertical: "x₂ tem de ser diferente de x₁. Uma reta vertical tem um declive não definido.",
    slope: "Declive (m)",
    caption: "Variação vertical de {rise} para uma variação horizontal de {run}.",
    equation: "Equação da reta",
    intercept: "Ordenada na origem (b)",
    angle: "Ângulo com o eixo dos x",
    degrees: "graus",
    distance: "Distância entre os pontos",
  },
};

export default pt;
