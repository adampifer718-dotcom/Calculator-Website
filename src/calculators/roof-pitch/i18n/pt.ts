import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RoofPitchText } from "../text/en";

const pt: CalculatorTranslation<RoofPitchText> = {
  content: {
    title: "Calculadora de inclinação do telhado",
    shortTitle: "Inclinação do telhado",
    summary:
      "Converta a altura e o avanço de um telhado, ou o seu ângulo, em inclinação por 12, graus, percentagem e comprimento da asna.",
    metaTitle: "Inclinação do telhado – X em 12, ângulo e asna",
    metaDescription:
      "Converta altura e avanço ou um ângulo de telhado em inclinação por 12, graus e percentagem, com o multiplicador e o comprimento da asna (pernas do telhado).",
    keywords: ["inclinação do telhado", "pendente do telhado", "altura sobre avanço", "inclinação 4/12", "ângulo do telhado", "comprimento da asna", "multiplicador de inclinação"],
    intro: [
      "A inclinação de um telhado é muitas vezes indicada como altura por cada 12 de avanço: um telhado de 6 em 12 sobe 6 polegadas por cada 12 polegadas que avança na horizontal. A mesma inclinação também pode ser descrita como um ângulo em graus ou em percentagem.",
      "Introduza a altura e o avanço que mediu, ou um ângulo de um projeto, e a calculadora apresenta as três formas. Acrescente o avanço horizontal do telhado para obter o comprimento da perna da asna, da linha da parede até à cumeeira.",
    ],
    howToUse: [
      "Escolha se conhece a altura e o avanço ou o ângulo.",
      "Introduza a altura e o avanço na mesma unidade, ou o ângulo em graus.",
      "Opcionalmente, introduza o avanço do telhado, que é metade do vão do edifício, para obter o comprimento da asna.",
      "Consulte a inclinação em 12, o ângulo, a percentagem de inclinação e os valores da asna.",
    ],
    formulas: [
      { title: "Inclinação por 12", expression: "inclinação = 12 × altura ÷ avanço", explanation: "Ajusta a inclinação a um avanço de 12 unidades." },
      { title: "Ângulo", expression: "θ = arctan(altura ÷ avanço)", explanation: "No sentido inverso, altura ÷ avanço = tan θ." },
      { title: "Inclinação em percentagem", expression: "inclinação = 100 × altura ÷ avanço", explanation: "Um telhado de 12 em 12 tem 100% de inclinação, a 45°." },
      {
        title: "Comprimento da asna",
        expression: "asna = avanço do telhado × √(1 + (altura ÷ avanço)²)",
        explanation: "Pitágoras: a raiz quadrada é o multiplicador da asna.",
      },
    ],
    examples: [
      {
        title: "6 polegadas de altura em 12 polegadas de avanço",
        steps: ["inclinação = 12 × 6 ÷ 12 = 6 em 12", "θ = arctan(0,5) ≈ 26,57°, inclinação de 50%", "multiplicador = √1,25 ≈ 1,1180"],
      },
      {
        title: "5 ft de altura em 8 ft, com um avanço do telhado de 14 ft",
        steps: ["inclinação = 12 × 5 ÷ 8 = 7,5 em 12", "multiplicador = √(1 + 0,625²) ≈ 1,1792", "asna = 14 × 1,1792 ≈ 16,509 ft"],
      },
      {
        title: "Um telhado a 30°",
        steps: ["altura ÷ avanço = tan 30° ≈ 0,5774", "inclinação = 12 × 0,5774 ≈ 6,93 em 12", "inclinação ≈ 57,74%"],
      },
    ],
    assumptions: [
      "Trata-se apenas de geometria. O dimensionamento das asnas, o projeto estrutural, as inclinações mínimas para cada material de cobertura e os regulamentos de construção locais exigem um profissional qualificado.",
      "A altura e o avanço têm de estar na mesma unidade. O comprimento da asna usa a unidade escolhida e não inclui beiral, fileira nem margem de corte.",
      "O telhado é tratado como um plano com uma asna reta desde a linha da parede até à cumeeira.",
    ],
    faqs: [
      {
        question: "O que significa uma inclinação de 4/12?",
        answer: "O telhado sobe 4 unidades por cada 12 unidades de avanço horizontal, o que corresponde a cerca de 18,43° ou a uma inclinação de 33,3%.",
      },
      {
        question: "Pitch e inclinação são a mesma coisa?",
        answer:
          "No uso corrente, sim. Em rigor, alguns carpinteiros definem o pitch como a altura total dividida pelo vão completo, o que dá metade da inclinação altura/avanço. Esta calculadora usa a altura por cada 12 de avanço.",
      },
      {
        question: "Como meço a altura e o avanço?",
        answer:
          "Encoste um nível na horizontal ao telhado ou a uma asna, marque 12 polegadas ao longo dele e meça na vertical desde essa marca até à superfície do telhado. Essa distância vertical é a altura por 12.",
      },
    ],
    sourcesUsedFor: ["Indicação da inclinação do telhado como altura por 12 unidades de avanço e o significado de avanço."],
  },
  text: {
    mode: "Partir de",
    modeOptions: { riseRun: "Altura e avanço", angle: "Ângulo" },
    unit: "Unidade de comprimento",
    units: { in: "Polegadas (in)", ft: "Pés (ft)", cm: "Centímetros (cm)", m: "Metros (m)" },
    rise: "Altura",
    riseHelp: "Altura vertical ganha ao longo do avanço.",
    run: "Avanço",
    runHelp: "Distância horizontal, na mesma unidade da altura.",
    angle: "Ângulo do telhado",
    angleTooSteep: "O ângulo tem de ser inferior a 90°.",
    roofRun: "Avanço do telhado (opcional)",
    roofRunHelp: "Metade do vão do edifício, desde o exterior da parede até à vertical da cumeeira. Usado para o comprimento da asna.",
    pitch: "Inclinação do telhado",
    pitchText: "{rise} em 12",
    pitchCaption: "Polegadas de altura por cada 12 polegadas de avanço (funciona com qualquer unidade, desde que ambas coincidam).",
    angleOut: "Ângulo",
    slopePercent: "Inclinação",
    multiplier: "Multiplicador do comprimento da asna",
    rafter: "Comprimento da asna (sem beiral)",
    roofRise: "Altura ao longo do avanço do telhado",
    note: "O comprimento da asna é medido ao longo da pendente, desde a linha da parede até à cumeeira, sem beiral, fileira nem margens de corte.",
  },
};

export default pt;
