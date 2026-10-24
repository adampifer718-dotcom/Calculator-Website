import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MomentumText } from "../text/en";

const pt: CalculatorTranslation<MomentumText> = {
  content: {
    title: "Calculadora de quantidade de movimento",
    shortTitle: "Quantidade de movimento",
    summary: "Resolva p = mv em ordem à quantidade de movimento, à massa ou à velocidade, ou obtenha o impulso de uma força e a variação de velocidade que provoca.",
    metaTitle: "Quantidade de movimento – Resolva p = mv e o impulso J = FΔt",
    metaDescription:
      "Obtenha a quantidade de movimento, a massa ou a velocidade a partir de p = mv, em unidades métricas ou dos EUA, com a energia cinética, ou o impulso e o Δv.",
    keywords: ["quantidade de movimento", "momento linear", "p = mv", "impulso", "teorema do impulso", "kg m/s", "newton segundo", "variação de velocidade"],
    intro: [
      "A quantidade de movimento mede a dificuldade em parar um objeto em movimento. É a massa vezes a velocidade, pelo que tanto um camião lento como uma bola de basebol rápida podem ter muita. Como tem direção e sentido, a quantidade de movimento pode ser negativa quando o movimento é no sentido oposto.",
      "Use o primeiro modo para obter a quantidade de movimento, a massa ou a velocidade a partir das outras duas; o resultado mostra também a energia cinética. Use o modo de impulso para ver o efeito de uma força que atua durante pouco tempo: o impulso é igual à variação da quantidade de movimento e, com uma massa, dá a variação de velocidade.",
    ],
    howToUse: [
      "Escolha quantidade de movimento (p = mv) ou impulso (J = FΔt).",
      "Para a quantidade de movimento, escolha o que pretende calcular e introduza os outros dois valores com as respetivas unidades. Use uma velocidade ou quantidade de movimento negativa para um movimento no sentido oposto.",
      "Para o impulso, introduza a força média e durante quanto tempo atua. Acrescente a massa se quiser a variação de velocidade.",
      "Consulte o resultado e as outras unidades, incluindo lb·ft/s e a energia cinética.",
    ],
    formulas: [
      { title: "Quantidade de movimento", expression: "p = m × v", explanation: "Em kg·m/s. Resolva em ordem a m = p ÷ v ou v = p ÷ m." },
      {
        title: "Impulso",
        expression: "J = F × Δt = Δp",
        explanation: "Uma força média que atua durante um intervalo de tempo altera a quantidade de movimento exatamente no valor do impulso, em N·s (o mesmo que kg·m/s).",
      },
      { title: "Variação de velocidade", expression: "Δv = J ÷ m", explanation: "O impulso dividido pela massa sobre a qual atua." },
      { title: "Energia cinética", expression: "KE = p² ÷ (2m)", explanation: "Equivalente a ½·m·v², em joules." },
    ],
    examples: [
      {
        title: "Uma bola de basebol de 0,145 kg a 40 m/s",
        steps: ["p = 0,145 kg × 40 m/s = 5,8 kg·m/s", "≈ 41,95 lb·ft/s; KE = 5,8² ÷ (2 × 0,145) = 116 J"],
      },
      {
        title: "Velocidade de um patinador de 60 kg com 900 kg·m/s",
        steps: ["v = 900 ÷ 60 = 15 m/s", "15 m/s × 3,6 = 54 km/h"],
      },
      {
        title: "Um pontapé de 250 N durante 0,02 s numa bola de 0,16 kg",
        steps: ["J = 250 N × 0,02 s = 5 N·s", "Δv = 5 ÷ 0,16 = 31,25 m/s"],
      },
    ],
    assumptions: [
      "O movimento e as forças ocorrem ao longo de uma linha reta; o sinal indica o sentido. Para movimentos em duas ou três dimensões, aplique as fórmulas a cada componente.",
      "No modo de impulso, a força é a força média ao longo do intervalo de tempo. Uma força que varia durante o impacto dá o mesmo impulso que a sua média.",
      "Aplica-se a mecânica clássica, que é precisa para velocidades muito inferiores à da luz.",
    ],
    faqs: [
      {
        question: "Qual é a diferença entre quantidade de movimento e energia cinética?",
        answer: "A quantidade de movimento (mv) é um vetor e conserva-se em todas as colisões. A energia cinética (½mv²) não tem direção e, na maioria das colisões, é parcialmente convertida em calor e som.",
      },
      {
        question: "N·s é o mesmo que kg·m/s?",
        answer: "Sim. Um newton é um kg·m/s², pelo que um newton-segundo é um kg·m/s. O impulso e a quantidade de movimento têm a mesma unidade.",
      },
      {
        question: "Porque é que os airbags e os acolchoamentos reduzem as lesões?",
        answer: "Fazem com que a paragem demore mais tempo. A variação da quantidade de movimento é a mesma, pelo que um tempo maior significa uma força média menor, já que F = Δp ÷ Δt.",
      },
    ],
    sourcesUsedFor: [
      "O impulso como força vezes o tempo durante o qual atua, e o teorema do impulso J = Δp.",
      "A força resultante como taxa de variação da quantidade de movimento.",
    ],
  },
  text: {
    mode: "Cálculo",
    modes: { momentum: "Quantidade de movimento (p = mv)", impulse: "Impulso (J = FΔt)" },
    solve: "Calcular",
    solveOptions: { momentum: "Quantidade de movimento (p)", mass: "Massa (m)", velocity: "Velocidade (v)" },
    momentum: "Quantidade de movimento (p)",
    momentumHelp: "Em quilogramas metro por segundo. Um valor negativo significa movimento no sentido oposto.",
    mass: "Massa (m)",
    impulseMass: "Massa (opcional)",
    impulseMassHelp: "Deixe vazio para obter apenas o impulso. Com uma massa, é apresentada também a variação de velocidade.",
    massUnit: "Unidade de massa",
    massUnits: { kg: "Quilogramas (kg)", g: "Gramas (g)", lb: "Libras (lb)", t: "Toneladas (t)" },
    velocity: "Velocidade (v)",
    velocityHelp: "Um valor negativo significa movimento no sentido oposto.",
    velocityUnit: "Unidade de velocidade",
    velocityUnits: { ms: "Metros por segundo (m/s)", kmh: "Quilómetros por hora (km/h)", mph: "Milhas por hora (mph)", fts: "Pés por segundo (ft/s)" },
    unitHelp: "Para o valor que está a calcular, é a unidade do resultado.",
    force: "Força média (F)",
    forceHelp: "Um valor negativo significa que a força aponta no sentido oposto.",
    forceUnit: "Unidade de força",
    forceUnits: { N: "Newtons (N)", lbf: "Libras-força (lbf)" },
    duration: "Tempo de atuação da força (Δt)",
    zeroVelocity: "A velocidade não pode ser 0 quando se calcula a massa, porque uma massa em repouso não tem quantidade de movimento.",
    zeroMomentum: "A quantidade de movimento não pode ser 0 quando se calcula a massa.",
    signMismatch: "A quantidade de movimento e a velocidade têm de ter o mesmo sinal, porque a massa é positiva.",
    results: { momentum: "Quantidade de movimento", mass: "Massa", velocity: "Velocidade" },
    impulse: "Impulso (J = Δp)",
    inUnit: "Em {unit}",
    kineticEnergy: "Energia cinética (p² ÷ 2m)",
    deltaV: "Variação de velocidade (Δv = J ÷ m)",
    impulseNote: "O impulso é igual à variação da quantidade de movimento. O mesmo impulso pode resultar de uma força grande durante pouco tempo ou de uma força pequena durante muito tempo.",
    note: "A quantidade de movimento é um vetor. Aqui é medida ao longo de uma linha, com o sinal a indicar o sentido.",
  },
};

export default pt;
