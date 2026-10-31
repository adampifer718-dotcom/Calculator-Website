import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { VoltageDividerText } from "../text/en";

const pt: CalculatorTranslation<VoltageDividerText> = {
  content: {
    title: "Calculadora de divisor de tensão",
    shortTitle: "Divisor de tensão",
    summary:
      "Calcule a tensão de saída de um divisor com duas resistências, ou a resistência necessária para uma tensão pretendida, com corrente, potência, efeito da carga e o valor E24 mais próximo.",
    metaTitle: "Divisor de tensão – Vout, R1, R2 e carga",
    metaDescription:
      "Calcule a tensão de saída de um divisor de tensão resistivo, ou determine R1 ou R2, com a corrente, a potência, a saída com carga e o valor E24 mais próximo.",
    keywords: ["divisor de tensão", "divisor resistivo", "fórmula vout", "calcular r1 r2", "razão de divisão", "divisor de tensão com carga", "resistência e24"],
    intro: [
      "Um divisor de tensão são duas resistências em série aplicadas a uma tensão. O ponto entre elas fica a uma fração fixa da tensão de entrada, definida apenas pela razão entre as resistências. Os divisores servem para reduzir um sinal para a entrada de um microcontrolador, definir um ponto de polarização ou criar uma referência.",
      "Esta calculadora determina a tensão de saída a partir das duas resistências, ou a resistência necessária para uma saída pretendida. Mostra também a corrente no divisor, a potência dissipada em cada resistência, o que acontece quando se liga uma carga e o valor normalizado E24 mais próximo.",
    ],
    howToUse: [
      "Escolha o que pretende calcular: a tensão de saída, a resistência inferior R2 ou a resistência superior R1.",
      "Introduza a tensão de entrada e os valores conhecidos, escolhendo Ω, kΩ ou MΩ para cada resistência.",
      "Se quiser, introduza a resistência da carga ligada à saída para ver quanto faz descer a tensão.",
      "Consulte o resultado, a corrente e a potência do divisor e, ao calcular uma resistência, o valor E24 mais próximo e a saída que daria.",
    ],
    formulas: [
      {
        title: "Saída sem carga",
        expression: "Vout = Vin × R2 ÷ (R1 + R2)",
        explanation: "R1 é a resistência superior (da entrada para a saída) e R2 a inferior (da saída para a massa).",
      },
      {
        title: "Calcular uma resistência",
        expression: "R2 = R1 × Vout ÷ (Vin − Vout)\nou R1 = R2 × (Vin − Vout) ÷ Vout",
        explanation: "Obtidas reorganizando a equação do divisor. Vout tem de estar entre 0 e Vin.",
      },
      {
        title: "Corrente e potência",
        expression: "I = Vin ÷ (R1 + R2)\nP1 = I² × R1, P2 = I² × R2",
        explanation: "A mesma corrente percorre as duas resistências quando nada está ligado à saída.",
      },
      {
        title: "Saída com carga",
        expression: "R2′ = R2 × RL ÷ (R2 + RL)\nVout,carga = Vin × R2′ ÷ (R1 + R2′)",
        explanation: "Uma carga RL fica em paralelo com R2, o que reduz a resistência inferior efetiva e, portanto, a saída.",
      },
    ],
    examples: [
      {
        title: "12 V aplicados a 10 kΩ e 4,7 kΩ",
        steps: ["Vout = 12 × 4,7 ÷ (10 + 4,7) = 56,4 ÷ 14,7", "Vout ≈ 3,8367 V", "I = 12 V ÷ 14,7 kΩ ≈ 0,8163 mA"],
      },
      {
        title: "R2 para 3,3 V a partir de 5 V com R1 = 10 kΩ",
        steps: [
          "R2 = 10 kΩ × 3,3 ÷ (5 − 3,3) = 33 ÷ 1,7 kΩ",
          "R2 ≈ 19,4118 kΩ",
          "O valor E24 mais próximo é 20 kΩ, que dá 5 × 20 ÷ 30 ≈ 3,3333 V (1,01 % acima)",
        ],
      },
      {
        title: "R1 para 2,5 V a partir de 9 V com R2 = 1 kΩ e uma carga de 10 kΩ",
        steps: [
          "R1 = 1 kΩ × (9 − 2,5) ÷ 2,5 = 2,6 kΩ",
          "Com a carga, R2 ∥ RL = 1 × 10 ÷ 11 ≈ 0,9091 kΩ",
          "Vout com carga = 9 × 0,9091 ÷ (2,6 + 0,9091) ≈ 2,3316 V, cerca de 6,74 % abaixo",
        ],
      },
    ],
    assumptions: [
      "As resistências são ideais e exatas. As resistências reais têm uma tolerância (5 % nas da série E24), pelo que a saída real pode diferir do valor calculado.",
      "Sem resistência de carga, o divisor é tratado como estando em vazio. Tudo o que se liga à saída, incluindo um voltímetro, consome corrente e baixa a tensão; manter a carga pelo menos 10 vezes acima da resistência de saída do divisor mantém o erro pequeno.",
      "Um divisor de tensão não é uma fonte de alimentação. A sua saída desce com a carga e consome corrente continuamente, por isso use um regulador de tensão para alimentar um circuito.",
      "A entrada é uma tensão contínua estável. Os efeitos de frequência, como as capacidades parasitas, não são modelados.",
    ],
    faqs: [
      {
        question: "Qual é a resistência R1 e qual é a R2?",
        answer:
          "R1 liga a entrada ao ponto de saída e R2 liga o ponto de saída à massa. A saída é medida aos terminais de R2, pelo que uma R2 maior dá uma saída mais alta.",
      },
      {
        question: "Porque é que a tensão medida é inferior à calculada?",
        answer:
          "Tudo o que está ligado à saída funciona como uma resistência em paralelo com R2, o que baixa a saída. Introduza a sua resistência como carga para ver o efeito, ou use resistências de divisor menores para que a carga pese menos.",
      },
      {
        question: "Como escolho o valor das resistências?",
        answer:
          "A razão define a tensão e a grandeza define a corrente. Resistências pequenas desperdiçam mais potência mas resistem melhor à carga; resistências grandes poupam energia mas são sensíveis à carga e às correntes de fuga da entrada. Compare os valores de potência com a potência nominal das resistências.",
      },
    ],
    sourcesUsedFor: [
      "A relação do divisor de tensão Vout = Vin × R2 ÷ (R1 + R2) e a forma como uma resistência de carga baixa a saída.",
      "A série E24 de 24 valores preferenciais de resistências por década, usada para o valor normalizado mais próximo.",
    ],
  },
  text: {
    solve: "Calcular",
    solveOptions: { vout: "Tensão de saída (Vout)", r2: "Resistência inferior (R2)", r1: "Resistência superior (R1)" },
    vin: "Tensão de entrada (Vin)",
    vout: "Tensão de saída pretendida (Vout)",
    r1: "Resistência superior (R1)",
    r1Help: "A resistência entre a entrada e o nó de saída.",
    r2: "Resistência inferior (R2)",
    r2Help: "A resistência entre o nó de saída e a massa.",
    load: "Resistência de carga (RL, opcional)",
    loadHelp:
      "A resistência do que estiver ligado à saída. Fica em paralelo com R2 e faz descer a saída. Deixe em branco para um divisor sem carga.",
    unit: "Unidade",
    units: { ohm: "Ω", kohm: "kΩ", megohm: "MΩ" },
    errors: {
      voutRange: "A tensão de saída tem de ser superior a 0 e inferior à tensão de entrada.",
    },
    voutResult: "Tensão de saída (sem carga)",
    r2Result: "Resistência inferior R2",
    r1Result: "Resistência superior R1",
    captionVout: "{vin} aplicados a R1 = {r1} e R2 = {r2}.",
    captionR: "Dá {vout} a partir de {vin} com {known}.",
    knownR1: "R1 = {r}",
    knownR2: "R2 = {r}",
    ratio: "Razão de divisão (Vout ÷ Vin)",
    current: "Corrente no divisor (sem carga)",
    p1: "Potência em R1",
    p2: "Potência em R2",
    rTotal: "Resistência total (R1 + R2)",
    rOut: "Resistência de saída (R1 ∥ R2)",
    vLoaded: "Tensão de saída com a carga",
    drop: "Queda causada pela carga",
    loadCurrent: "Corrente na carga",
    e24: "Valor E24 mais próximo",
    e24Vout: "Tensão de saída com o valor E24",
    e24Error: "Variação da saída com o valor E24",
    notes: {
      unloaded:
        "Estes valores referem-se a um divisor sem carga. Tudo o que se liga à saída consome corrente e baixa Vout; introduza uma resistência de carga para ver quanto.",
      loaded: "Com a carga, R2 e RL em paralelo equivalem a {r} e a saída desce {drop}.",
      heavyLoad:
        "A carga é inferior a 10 vezes a resistência de saída do divisor, pelo que altera visivelmente a saída. Use resistências de divisor menores ou um buffer se a tensão tiver de se manter estável.",
      supply:
        "Um divisor de tensão não é uma fonte de alimentação: a sua saída varia com a carga e desperdiça energia continuamente. Use um regulador para alimentar um circuito.",
      e24: "A E24 é a série normalizada de 24 valores preferenciais por década com 5 % de tolerância. O valor mais próximo é escolhido pela menor diferença absoluta.",
    },
  },
};

export default pt;
