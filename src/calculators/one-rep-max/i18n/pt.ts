import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { OneRepMaxText } from "../text/en";

const pt: CalculatorTranslation<OneRepMaxText> = {
  content: {
    title: "Calculadora de repetição máxima (1RM)",
    shortTitle: "Repetição máxima",
    summary:
      "Estime a sua repetição máxima a partir de uma série de 1 a 12 repetições com as fórmulas de Epley, Brzycki e Lombardi, com uma tabela de cargas de treino.",
    metaTitle: "Repetição máxima (1RM) – Epley, Brzycki e Lombardi",
    metaDescription:
      "Estime a sua repetição máxima (1RM) a partir do peso e das repetições de uma série exigente, com três fórmulas publicadas, e obtenha cargas de 60% a 95% da 1RM.",
    keywords: ["repetição máxima", "calculadora 1RM", "carga máxima", "fórmula de Epley", "fórmula de Brzycki", "supino máximo", "agachamento máximo", "percentagens de treino"],
    intro: [
      "A sua repetição máxima (1RM) é o peso mais elevado que consegue levantar uma vez com boa técnica. Testá-la diretamente é cansativo e comporta mais riscos, por isso muitos praticantes estimam-na a partir de uma série mais pesada levada perto da falha.",
      "Esta calculadora aplica três equações muito usadas, de Epley, Brzycki e Lombardi, e calcula a sua média. Cada uma foi ajustada a praticantes diferentes, por isso a diferença entre elas dá uma ideia da incerteza de qualquer estimativa isolada.",
      "A tabela converte a estimativa em cargas a percentagens de treino habituais, desde 60% para trabalho de volume mais leve até 95% para repetições únicas pesadas.",
    ],
    howToUse: [
      "Introduza o peso que levantou e escolha quilogramas ou libras.",
      "Introduza quantas repetições completas fez nessa série, de 1 a 12.",
      "Consulte a estimativa média e o resultado de cada fórmula.",
      "Use a tabela para escolher as cargas de um plano de treino.",
    ],
    formulas: [
      {
        title: "Epley",
        expression: "1RM = w × (1 + r ÷ 30), e 1RM = w quando r = 1",
        explanation: "w é o peso levantado e r o número de repetições. Acrescenta cerca de 3,3% do peso por repetição.",
      },
      { title: "Brzycki", expression: "1RM = w × 36 ÷ (37 − r)", explanation: "Dá o mesmo resultado que Epley com 10 repetições e valores ligeiramente inferiores abaixo disso." },
      { title: "Lombardi", expression: "1RM = w × r^0,10", explanation: "Uma lei de potência que sobe depressa nas primeiras repetições e depois estabiliza." },
      {
        title: "Estimativa apresentada",
        expression: "1RM ≈ (Epley + Brzycki + Lombardi) ÷ 3",
        explanation: "As cargas de treino da tabela são esta média multiplicada por cada percentagem.",
      },
    ],
    examples: [
      {
        title: "Agachamento: 82,5 kg em 6 repetições",
        steps: [
          "Epley: 82,5 × (1 + 6 ÷ 30) = 99,0 kg",
          "Brzycki: 82,5 × 36 ÷ 31 ≈ 95,8 kg",
          "Lombardi: 82,5 × 6^0,1 ≈ 98,7 kg",
          "Média ≈ (99,0 + 95,8 + 98,7) ÷ 3 ≈ 97,8 kg",
        ],
      },
      {
        title: "Supino: 185 lb em 8 repetições",
        steps: [
          "Epley: 185 × (1 + 8 ÷ 30) ≈ 234,3 lb",
          "Brzycki: 185 × 36 ÷ 29 ≈ 229,7 lb",
          "Lombardi: 185 × 8^0,1 ≈ 227,8 lb",
          "Média ≈ 230,6 lb",
        ],
      },
    ],
    assumptions: [
      "A série foi levada perto da falha com uma técnica consistente. Parar muito antes da falha torna a estimativa demasiado baixa.",
      "As fórmulas são menos fiáveis acima de cerca de 10 repetições, quando a resistência conta mais do que a força máxima. Séries de 3 a 8 repetições dão melhores estimativas.",
      "As equações foram desenvolvidas sobretudo com exercícios de pesos livres, como o supino e o agachamento. Os resultados em máquinas, exercícios de isolamento e praticantes sem treino podem ser diferentes.",
      "Testar um máximo real exige boa técnica, um aquecimento completo e um ajudante ou barras de segurança. Esta ferramenta não constitui aconselhamento médico nem de treino.",
    ],
    faqs: [
      {
        question: "Qual é a fórmula de repetição máxima mais precisa?",
        answer:
          "Nenhuma é a melhor para todos. Os estudos que as comparam concluem que a precisão depende do exercício, do praticante e do número de repetições, razão pela qual esta calculadora faz a média de três e mostra cada uma.",
      },
      {
        question: "Quantas repetições devo usar para a estimativa?",
        answer:
          "Uma série de cerca de 3 a 8 repetições exigentes funciona melhor. Com uma repetição, a estimativa é simplesmente o peso levantado e, acima de cerca de 10 repetições, as previsões afastam-se umas das outras.",
      },
      {
        question: "Posso usar a tabela de treino num programa?",
        answer:
          "Sim, como ponto de partida. Muitos programas prescrevem o trabalho como percentagem da 1RM, por exemplo 80% para séries de cerca de 5. Ajuste as cargas conforme a sensação das séries.",
      },
    ],
    sourcesUsedFor: [
      "Origem da equação de previsão de Brzycki e a sua utilização prevista com séries até cerca de 10 repetições.",
      "Dados que mostram que a precisão das equações de Epley, Brzycki, Lombardi e outras varia consoante o exercício e a população.",
    ],
  },
  text: {
    weight: "Peso levantado",
    unit: "Unidade",
    units: { kg: "kg", lb: "lb" },
    reps: "Repetições completadas",
    repsHelp: "Repetições completas com boa técnica numa série levada perto da falha, de 1 a 12.",
    estimate: "Repetição máxima estimada",
    caption: "Média das estimativas de Epley, Brzycki e Lombardi para {weight} × {reps}.",
    repsCount: {
      zero: "{n} repetições",
      one: "{n} repetição",
      two: "{n} repetições",
      few: "{n} repetições",
      many: "{n} repetições",
      other: "{n} repetições",
    },
    epley: "Fórmula de Epley",
    brzycki: "Fórmula de Brzycki",
    lombardi: "Fórmula de Lombardi",
    tableCaption: "Cargas de treino a partir da repetição máxima estimada",
    tablePercent: "Percentagem da 1RM",
    tableLoad: "Carga",
    notes: {
      single: "Com uma única repetição, todas as fórmulas devolvem o peso levantado.",
      highReps: "As estimativas com mais de cerca de 10 repetições são menos fiáveis; uma série mais pesada de 3 a 8 repetições dá uma previsão melhor.",
      safety: "Tentar um levantamento máximo real exige boa técnica, aquecimento e um ajudante ou barras de segurança.",
    },
  },
};

export default pt;
