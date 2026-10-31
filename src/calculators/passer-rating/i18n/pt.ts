import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PasserRatingText } from "../text/en";

const pt: CalculatorTranslation<PasserRatingText> = {
  content: {
    title: "Calculadora do passer rating da NFL",
    shortTitle: "Passer rating",
    summary:
      "Calcule o passer rating da NFL de um quarterback a partir das tentativas, passes completos, jardas, touchdowns e interceções, com as quatro componentes e a eficiência da NCAA.",
    metaTitle: "Passer rating da NFL – Rating do quarterback e NCAA",
    metaDescription:
      "Calcule o passer rating da NFL (0 a 158,3) a partir da linha de passe de um quarterback, veja as quatro componentes e compare com a eficiência da NCAA.",
    keywords: ["passer rating", "rating do quarterback", "calculadora QB rating", "fórmula passer rating NFL", "158,3", "eficiência de passe NCAA", "futebol americano"],
    intro: [
      "O passer rating é a medida oficial da NFL para o jogo de passe de um quarterback, usada desde 1973. Combina quatro taxas: a percentagem de passes completos, as jardas por tentativa, os touchdowns por tentativa e as interceções por tentativa. Cada parte está limitada a um intervalo, pelo que o rating vai de 0 a um máximo perfeito de 158,3.",
      "Introduza uma linha de passe de um jogo, de uma época ou de uma carreira para obter o rating, o valor de cada componente e a parte das tentativas que resultaram em passes completos, touchdowns e interceções. A calculadora mostra também a eficiência de passe da NCAA, que o futebol americano universitário usa numa escala diferente.",
    ],
    howToUse: [
      "Introduza as tentativas de passe, os passes completos e as jardas de passe. As jardas podem ser negativas.",
      "Introduza os passes para touchdown e as interceções.",
      "Consulte o passer rating e verifique a tabela de componentes para ver que partes atingiram os seus limites.",
    ],
    formulas: [
      {
        title: "As quatro componentes",
        expression: "a = (Cmp ÷ Att − 0,3) × 5\nb = (Yds ÷ Att − 3) × 0,25\nc = TD ÷ Att × 20\nd = 2,375 − INT ÷ Att × 25",
        explanation: "Cada componente é limitada a um valor entre 0 e 2,375 antes de serem somadas.",
      },
      {
        title: "Passer rating",
        expression: "rating = (a + b + c + d) ÷ 6 × 100",
        explanation: "Com todas as componentes em 2,375, o rating é 9,5 ÷ 6 × 100 ≈ 158,3, o máximo.",
      },
      {
        title: "Eficiência de passe da NCAA",
        expression: "(8,4 × Yds + 330 × TD + 100 × Cmp − 200 × INT) ÷ Att",
        explanation: "A fórmula do futebol americano universitário. Não tem limites, pelo que pode ficar muito acima de 200 ou abaixo de 0.",
      },
    ],
    examples: [
      {
        title: "23 em 34 para 287 jardas, 2 TD, 1 INT",
        steps: [
          "a = (23 ÷ 34 − 0,3) × 5 ≈ 1,8824; b = (287 ÷ 34 − 3) × 0,25 ≈ 1,3603",
          "c = 2 ÷ 34 × 20 ≈ 1,1765; d = 2,375 − 1 ÷ 34 × 25 ≈ 1,6397",
          "Rating = 6,0588 ÷ 6 × 100 ≈ 101,0",
        ],
      },
      {
        title: "30 em 41 para 402 jardas, 5 TD, 0 INT",
        steps: [
          "a ≈ 2,1585 e c ≈ 2,4390 estão acima de 2,375, pelo que cada uma conta como 2,375",
          "b ≈ 1,7012; d = 2,375",
          "Rating = (2,375 + 1,7012 + 2,375 + 2,375) ÷ 6 × 100 ≈ 143,5",
        ],
      },
      {
        title: "12 em 28 para 96 jardas, 0 TD, 3 INT",
        steps: ["a ≈ 0,6429; b ≈ 0,1071; c = 0", "d = 2,375 − 3 ÷ 28 × 25 ≈ −0,3036, pelo que conta como 0", "Rating = 0,75 ÷ 6 × 100 = 12,5"],
      },
    ],
    assumptions: [
      "A calculadora usa a fórmula da NFL tal como publicada. O futebol americano universitário usa a fórmula de eficiência da NCAA, apresentada à parte abaixo do rating.",
      "O rating mede apenas o passe. Ignora os sacks, as corridas, os fumbles, a situação do jogo e a qualidade dos recetores e do adversário.",
      "Os limites de 0 a 2,375 fazem com que valores muito altos ou muito baixos numa área deixem de afetar o rating, pelo que duas linhas de passe bastante diferentes podem ter o mesmo rating.",
      "O rating apresentado é arredondado a uma casa decimal, como nas estatísticas oficiais.",
    ],
    faqs: [
      {
        question: "O que é um passer rating perfeito?",
        answer:
          "158,3. Exige uma taxa de passes completos de pelo menos 77,5 %, pelo menos 12,5 jardas por tentativa, touchdowns em pelo menos 11,875 % das tentativas e nenhuma interceção, para que todas as componentes atinjam 2,375.",
      },
      {
        question: "O que é um bom passer rating?",
        answer:
          "A fórmula foi concebida para que 66,7 correspondesse a um passador médio dos anos 60. Desde então o passe tornou-se mais eficiente, pelo que as médias da liga rondam hoje os 90 e um rating acima de 100 é geralmente considerado muito bom.",
      },
      {
        question: "O passer rating é o mesmo que o QBR?",
        answer:
          "Não. O passer rating usa apenas os cinco números da folha de estatísticas. O Total QBR da ESPN é uma medida separada e proprietária que também considera o contexto do jogo, as corridas e os sacks.",
      },
    ],
    sourcesUsedFor: [
      "As quatro componentes da NFL, os seus limites de 0 a 2,375, a escala ÷ 6 × 100 e o máximo de 158,3.",
      "A fórmula de eficiência de passe da NCAA (8,4 × jardas + 330 × TD + 100 × passes completos − 200 × INT) ÷ tentativas.",
    ],
  },
  text: {
    attempts: "Tentativas de passe",
    completions: "Passes completos",
    yards: "Jardas de passe",
    yardsHelp: "Total de jardas de passe; pode ser negativo.",
    touchdowns: "Passes para touchdown",
    interceptions: "Interceções",
    errors: {
      completions: "Os passes completos não podem ser mais do que as tentativas.",
      touchdowns: "Os passes para touchdown não podem ser mais do que os passes completos.",
      interceptions: "As interceções não podem ser mais do que os passes incompletos (tentativas menos passes completos).",
    },
    rating: "Passer rating da NFL",
    caption: "{cmp} em {att} para {yds} jardas, {td} TD, {int} INT.",
    ncaa: "Eficiência de passe da NCAA",
    completionPct: "Percentagem de passes completos",
    yardsPerAttempt: "Jardas por tentativa",
    tdPct: "Percentagem de touchdowns",
    intPct: "Percentagem de interceções",
    table: {
      caption: "Componentes do passer rating (cada uma limitada a 0–2,375)",
      component: "Componente",
      raw: "Antes do limite",
      used: "Usado",
    },
    components: {
      a: "a: passes completos por tentativa",
      b: "b: jardas por tentativa",
      c: "c: touchdowns por tentativa",
      d: "d: interceções por tentativa",
    },
    notes: {
      clamped:
        "Pelo menos uma componente atingiu o limite de 0 ou de 2,375, pelo que valores melhores (ou piores) nessa área já não alteram o rating.",
      perfect: "Este é um passer rating perfeito de 158,3, o máximo que a fórmula da NFL permite.",
      scale: "Os ratings da NFL e da NCAA usam escalas diferentes e não podem ser comparados entre si.",
    },
  },
};

export default pt;
