import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DoublingTimeText } from "../text/en";

const pt: CalculatorTranslation<DoublingTimeText> = {
  content: {
    title: "Calculadora de tempo de duplicação",
    shortTitle: "Tempo de duplicação",
    summary: "Calcule o tempo de duplicação (tempo de geração) e a taxa de crescimento de uma população com crescimento exponencial.",
    metaTitle: "Tempo de duplicação – Tempo de geração e crescimento",
    metaDescription:
      "Calcule o tempo de duplicação, as gerações e a taxa de crescimento de uma população, como uma cultura bacteriana, a partir das contagens inicial e final.",
    keywords: ["tempo de duplicação", "tempo de geração", "crescimento bacteriano", "crescimento exponencial", "taxa de crescimento", "biologia"],
    intro: [
      "Durante o crescimento exponencial, uma população duplica a um ritmo constante. O tempo de duplicação (ou de geração) é o tempo que cada duplicação demora.",
      "Introduza as contagens inicial e final e o tempo decorrido entre ambas.",
    ],
    howToUse: [
      "Introduza a contagem inicial.",
      "Introduza a contagem final, que tem de ser maior.",
      "Introduza o tempo decorrido e escolha a unidade.",
      "Consulte o tempo de duplicação, as gerações e a taxa de crescimento.",
    ],
    formulas: [
      { title: "Gerações", expression: "n = log₂(N ÷ N₀)", explanation: "O número de duplicações necessárias para passar de N₀ a N." },
      { title: "Tempo de duplicação", expression: "g = t ÷ n", explanation: "O tempo decorrido dividido pelo número de gerações." },
      { title: "Constante de crescimento", expression: "k = ln(N ÷ N₀) ÷ t", explanation: "Usada em N = N₀ × e^(k·t)." },
    ],
    examples: [
      {
        title: "De 1000 a 64 000 células em 6 horas",
        steps: ["N ÷ N₀ = 64, pelo que n = log₂ 64 = 6", "g = 6 h ÷ 6 = 1 hora"],
      },
      {
        title: "De 500 a 2000 em 90 minutos",
        steps: ["n = log₂ 4 = 2", "g = 90 ÷ 2 = 45 minutos"],
      },
    ],
    assumptions: [
      "Pressupõe um crescimento exponencial constante, como a fase logarítmica de uma cultura; as fases de latência, estacionária e de morte não são modeladas.",
      "As contagens podem ser células, unidades formadoras de colónias, medidas indiretas de densidade ótica ou qualquer grandeza que cresça exponencialmente.",
    ],
    faqs: [
      {
        question: "O que é o tempo de geração?",
        answer: "O tempo que uma população demora a duplicar; na E. coli ronda normalmente os 20 minutos em condições laboratoriais ideais.",
      },
      {
        question: "Porque se usam logaritmos?",
        answer: "O crescimento exponencial multiplica a população por 2 em cada geração, pelo que log₂ conta as duplicações.",
      },
      {
        question: "Serve para dinheiro ou para populações humanas?",
        answer: "A matemática é a mesma para qualquer crescimento exponencial constante, mas as populações reais raramente crescem a um ritmo constante.",
      },
    ],
    sourcesUsedFor: ["Tempo de geração e crescimento exponencial das populações bacterianas."],
  },
  text: {
    initial: "Contagem inicial (N₀)",
    final: "Contagem final (N)",
    time: "Tempo decorrido",
    unit: "Unidade de tempo",
    units: { minutes: "Minutos", hours: "Horas", days: "Dias" },
    unitWords: { minutes: "minutos", hours: "horas", days: "dias" },
    perUnit: { minutes: "por minuto", hours: "por hora", days: "por dia" },
    notGrowth: "Para haver crescimento, a contagem final tem de ser maior do que a inicial.",
    doubling: "Tempo de duplicação",
    generations: "Número de duplicações (gerações)",
    rate: "Constante de crescimento (k)",
    fold: "Fator de aumento (N ÷ N₀)",
    note: "Pressupõe um crescimento exponencial constante durante todo o período, como na fase logarítmica de uma cultura bacteriana.",
  },
};

export default pt;
