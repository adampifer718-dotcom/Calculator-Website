import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HalfLifeText } from "../text/en";

const pt: CalculatorTranslation<HalfLifeText> = {
  content: {
    title: "Calculadora de meia-vida",
    shortTitle: "Meia-vida",
    summary: "Resolva o decaimento exponencial para a quantidade restante, a quantidade inicial, a meia-vida ou o tempo decorrido.",
    metaTitle: "Calculadora de meia-vida – Quantidade restante e tempo",
    metaDescription:
      "Resolva N = N₀(1/2)^(t/T) para a quantidade restante, a inicial, a meia-vida ou o tempo decorrido, com a constante de decaimento e a vida média.",
    keywords: [
      "meia-vida",
      "período de semidesintegração",
      "decaimento radioativo",
      "decaimento exponencial",
      "constante de decaimento",
      "datação por carbono 14",
      "cinética de primeira ordem",
    ],
    intro: [
      "A meia-vida (ou período de semidesintegração) é o tempo necessário para que desapareça metade de uma quantidade em decaimento. Após uma meia-vida resta 50 %, após duas 25 %, após três 12,5 %, e assim sucessivamente.",
      "A mesma regra descreve os isótopos radioativos e qualquer outro processo de decaimento de primeira ordem. Introduza três dos quatro valores para obter o que falta. A calculadora mostra também a constante de decaimento, a vida média e a fração restante.",
    ],
    howToUse: [
      "Escolha o que pretende calcular: a quantidade restante, a quantidade inicial, a meia-vida ou o tempo decorrido.",
      "Introduza os restantes valores. As quantidades podem estar em qualquer unidade, e os tempos também, desde que cada par use a mesma.",
      "Consulte o resultado nessas mesmas unidades, juntamente com o número de meias-vidas e a constante de decaimento.",
    ],
    formulas: [
      {
        title: "Lei do decaimento",
        expression: "N = N₀ × (1/2)^(t ÷ T½)",
        explanation: "N₀ é a quantidade inicial, t o tempo decorrido e T½ a meia-vida.",
      },
      {
        title: "Meia-vida e tempo decorrido",
        expression: "T½ = t × ln 2 ÷ ln(N₀ ÷ N);  t = T½ × log₂(N₀ ÷ N)",
        explanation: "A lei do decaimento resolvida com logaritmos.",
      },
      {
        title: "Constante de decaimento e vida média",
        expression: "λ = ln 2 ÷ T½;  τ = 1 ÷ λ = T½ ÷ ln 2",
        explanation: "λ é a fração que decai por unidade de tempo; τ é a vida média, cerca de 1,4427 meias-vidas.",
      },
    ],
    examples: [
      {
        title: "40 g de cobalto 60 ao fim de 15,81 anos (T½ = 5,27 anos)",
        steps: ["t ÷ T½ = 15,81 ÷ 5,27 = 3 meias-vidas", "N = 40 × (1/2)³ = 5 g"],
      },
      {
        title: "Meia-vida a partir de 1200 contagens que descem para 150 em 36 horas",
        steps: ["N₀ ÷ N = 1200 ÷ 150 = 8", "T½ = 36 × ln 2 ÷ ln 8 = 36 ÷ 3 = 12 horas"],
      },
      {
        title: "Idade de uma amostra que conserva 30 % do seu carbono 14 (T½ = 5730 anos)",
        steps: ["N₀ ÷ N = 100 ÷ 30 ≈ 3,333", "t = 5730 × log₂(3,333) ≈ 9952,8 anos"],
      },
    ],
    assumptions: [
      "O decaimento é de primeira ordem: a meia-vida é a mesma independentemente da quantidade de material que resta.",
      "As amostras grandes seguem a curva com precisão; com poucos átomos, o decaimento é aleatório e o resultado é apenas uma média.",
      "Trata-se de uma ferramenta matemática geral. Não dá conselhos sobre medicamentos, doses ou proteção radiológica; consulte um profissional qualificado para isso.",
    ],
    faqs: [
      {
        question: "A unidade de tempo é importante?",
        answer: "Só importa que a meia-vida e o tempo decorrido usem a mesma unidade. Introduza ambos em dias, ou ambos em anos, e o resultado virá nessa unidade.",
      },
      {
        question: "Quanto resta ao fim de 10 meias-vidas?",
        answer: "(1/2)¹⁰ = 1/1024, ou seja, um pouco menos de 0,1 % da quantidade inicial.",
      },
      {
        question: "Qual é a diferença entre meia-vida e vida média?",
        answer: "A meia-vida é o momento em que metade do material desapareceu. A vida média é o tempo médio que um átomo individual demora a decair, e é mais longa: cerca de 1,4427 vezes a meia-vida.",
      },
    ],
    sourcesUsedFor: ["Decaimento de primeira ordem, definição de meia-vida e λ = ln 2 ÷ T½."],
  },
  text: {
    solve: "Calcular",
    solveOptions: { N: "Quantidade restante (N)", N0: "Quantidade inicial (N₀)", T: "Meia-vida (T½)", t: "Tempo decorrido (t)" },
    initial: "Quantidade inicial (N₀)",
    remaining: "Quantidade restante (N)",
    amountHelp: "Qualquer unidade (gramas, átomos, becquerels…), desde que N e N₀ usem a mesma.",
    halfLife: "Meia-vida (T½)",
    elapsed: "Tempo decorrido (t)",
    timeHelp: "Qualquer unidade de tempo, desde que t e T½ usem a mesma.",
    remainingTooLarge: "A quantidade restante não pode ser superior à inicial (N ≤ N₀).",
    remainingMustDrop: "Para calcular a meia-vida, a quantidade restante tem de ser inferior à inicial.",
    timeMustBePositive: "Para calcular a meia-vida, o tempo decorrido tem de ser superior a 0.",
    tooManyHalfLives: "São demasiadas meias-vidas: a quantidade inicial seria demasiado grande para apresentar.",
    results: { N: "Quantidade restante", N0: "Quantidade inicial", T: "Meia-vida", t: "Tempo decorrido" },
    amountCaption: "Na mesma unidade que a outra quantidade.",
    timeCaption: "Na mesma unidade de tempo que o outro valor de tempo.",
    percentRemaining: "Percentagem restante (N ÷ N₀)",
    halfLives: "Número de meias-vidas (t ÷ T½)",
    decayConstant: "Constante de decaimento λ = ln 2 ÷ T½ (por unidade de tempo)",
    meanLifetime: "Vida média τ = 1 ÷ λ (unidade de tempo)",
    note: "Pressupõe um decaimento exponencial simples (de primeira ordem) com meia-vida constante.",
  },
};

export default pt;
