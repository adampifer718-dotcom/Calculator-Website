import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PotentialEnergyText } from "../text/en";

const pt: CalculatorTranslation<PotentialEnergyText> = {
  content: {
    title: "Calculadora de energia potencial",
    shortTitle: "Energia potencial",
    summary: "Calcule a energia potencial gravítica (m·g·h) ou a energia armazenada numa mola (½·k·x²), ou resolva qualquer das fórmulas em ordem ao valor em falta.",
    metaTitle: "Calculadora de energia potencial – Ep = mgh e ½kx²",
    metaDescription:
      "Calcule a energia potencial gravítica a partir da massa, da altura e da gravidade, ou a energia elástica de uma mola, e obtenha m, h, k ou x em qualquer unidade.",
    keywords: ["energia potencial", "calcular energia potencial", "energia potencial gravítica", "Ep = mgh", "energia potencial elástica", "energia de uma mola", "1/2 kx2", "joules"],
    intro: [
      "A energia potencial é a energia armazenada devido à posição de um objeto ou à sua deformação. Ao elevar uma caixa de 12 kg para uma plataforma de 2,5 m, armazena nela cerca de 294 joules, que a caixa devolve sob a forma de movimento se cair. Ao comprimir uma mola, esta armazena energia que liberta quando é solta.",
      "Esta calculadora trata os dois tipos. Para a gravidade usa Ep = m·g·h, com a gravidade da Terra, da Lua, de Marte ou um valor personalizado. Para uma mola usa Ep = ½·k·x². Também pode resolver qualquer das fórmulas em sentido inverso para obter a massa, a altura, a constante da mola ou o deslocamento.",
    ],
    howToUse: [
      "Escolha a energia potencial gravítica ou elástica.",
      "Escolha o que pretende calcular. O campo desse valor desaparece.",
      "Introduza os restantes valores e escolha as respetivas unidades. Para a gravidade, escolha um planeta ou introduza o seu próprio valor.",
      "Consulte o resultado na unidade escolhida, juntamente com o mesmo valor nas outras unidades.",
    ],
    formulas: [
      { title: "Energia potencial gravítica", expression: "Ep = m × g × h", explanation: "Com m em quilogramas, g em m/s² e h em metros, obtém-se Ep em joules. A altura h é medida a partir de um nível de referência à sua escolha." },
      { title: "Energia potencial elástica", expression: "Ep = ½ × k × x²", explanation: "k é a constante da mola em N/m e x o alongamento ou a compressão em relação ao comprimento em repouso, em metros." },
      { title: "Resolução inversa", expression: "m = Ep ÷ (g·h)   h = Ep ÷ (m·g)\nk = 2·Ep ÷ x²   x = √(2·Ep ÷ k)", explanation: "As mesmas fórmulas, reorganizadas em ordem à incógnita." },
      { title: "Unidades de energia", expression: "1 kJ = 1000 J   1 Wh = 3600 J   1 kWh = 3 600 000 J\n1 ft·lbf = 1,3558179483314 J", explanation: "Um pé-libra é 0,3048 m × 4,4482216152605 N, ambos valores exatos." },
    ],
    examples: [
      { title: "Elevar uma caixa de 12 kg para uma plataforma de 2,5 m", steps: ["Ep = m × g × h", "= 12 × 9,80665 × 2,5", "= 294,1995 J (cerca de 0,29 kJ)"] },
      { title: "A que altura 1 kWh elevaria um carro de 1000 kg?", steps: ["1 kWh = 3 600 000 J", "h = Ep ÷ (m × g) = 3 600 000 ÷ (1000 × 9,80665)", "≈ 367,10 m"] },
      { title: "Uma mola de 400 N/m comprimida 15 cm", steps: ["15 cm = 0,15 m", "Ep = ½ × 400 × 0,15²", "= 200 × 0,0225 = 4,5 J"] },
    ],
    assumptions: [
      "A gravidade é considerada constante ao longo da altura, o que é exato perto da superfície de um planeta. Para alturas de centenas de quilómetros, a diminuição da gravidade com a distância torna-se relevante.",
      "Para a Terra usa-se a gravidade normal, 9,80665 m/s², que é exata por definição. A gravidade real varia ligeiramente com a latitude e a altitude. Os valores da Lua e de Marte são valores médios à superfície retirados das fichas técnicas da NASA.",
      "A mola é ideal: obedece à lei de Hooke e não é esticada para além do seu limite elástico. O atrito, a resistência do ar e a energia perdida sob a forma de calor são ignorados.",
    ],
    faqs: [
      { question: "A partir de onde devo medir a altura?", answer: "A partir de qualquer nível que escolha como zero, como o chão, o solo ou o tampo de uma mesa. A energia potencial depende dessa escolha, mas a variação de energia entre duas alturas não depende, e é essa variação que importa na prática." },
      { question: "Qual é a relação entre a energia potencial e a energia cinética?", answer: "Quando um objeto cai sem resistência do ar, a sua energia potencial transforma-se em energia cinética. Uma caixa de 12 kg largada de 2,5 m chega ao chão com cerca de 294 J de energia cinética, a uma velocidade de √(2gh) ≈ 7,0 m/s." },
      { question: "Importa se a mola está esticada ou comprimida?", answer: "Não. A energia depende de x², pelo que esticar ou comprimir uma mola ideal a mesma distância armazena a mesma energia." },
    ],
    sourcesUsedFor: [
      "Energia potencial gravítica perto da superfície da Terra (mgh), energia potencial elástica de uma mola (½kx²) e escolha do nível zero.",
      "Gravidade à superfície da Lua, 1,62 m/s².",
      "Gravidade média à superfície de Marte, 3,73 m/s².",
    ],
  },
  text: {
    mode: "Tipo de energia potencial",
    modes: { gravitational: "Gravítica (m·g·h)", elastic: "Mola elástica (½·k·x²)" },
    solve: "Calcular",
    gSolveOptions: { energy: "Energia potencial (Ep)", mass: "Massa (m)", height: "Altura (h)" },
    eSolveOptions: { energy: "Energia armazenada (Ep)", k: "Constante da mola (k)", x: "Alongamento ou compressão (x)" },
    mass: "Massa (m)",
    massUnit: "Unidade de massa",
    massUnits: { kg: "Quilogramas (kg)", g: "Gramas (g)", lb: "Libras (lb)" },
    height: "Altura acima do nível de referência (h)",
    heightHelp: "Medida a partir do nível que considera zero, como o chão ou o solo.",
    heightUnit: "Unidade de altura",
    heightUnits: { m: "Metros (m)", cm: "Centímetros (cm)", ft: "Pés (ft)" },
    gravity: "Gravidade (g)",
    gravityOptions: { earth: "Terra, normal (9,80665 m/s²)", moon: "Lua (1,62 m/s²)", mars: "Marte (3,73 m/s²)", custom: "Valor personalizado" },
    customG: "Gravidade personalizada",
    energy: "Energia potencial (Ep)",
    energyUnit: "Unidade de energia",
    energyUnits: { J: "Joules (J)", kJ: "Quilojoules (kJ)", Wh: "Watts-hora (Wh)", kWh: "Quilowatts-hora (kWh)", ftlbf: "Pés-libra (ft·lbf)" },
    k: "Constante da mola (k)",
    kHelp: "A rigidez da mola: a força, em newtons, necessária para a esticar um metro.",
    x: "Alongamento ou compressão (x)",
    xHelp: "A distância em relação ao comprimento da mola em repouso. A compressão e o alongamento armazenam a mesma energia.",
    xUnit: "Unidade de deslocamento",
    xUnits: { m: "Metros (m)", cm: "Centímetros (cm)", in: "Polegadas (in)" },
    results: {
      gEnergy: "Energia potencial gravítica",
      mass: "Massa necessária",
      height: "Altura necessária",
      eEnergy: "Energia potencial elástica",
      k: "Constante da mola necessária",
      x: "Alongamento ou compressão necessários",
    },
    captions: {
      gEnergy: "Ep = m × g × h",
      mass: "m = Ep ÷ (g × h)",
      height: "h = Ep ÷ (m × g)",
      eEnergy: "Ep = ½ × k × x²",
      k: "k = 2 × Ep ÷ x²",
      x: "x = √(2 × Ep ÷ k)",
    },
    inUnit: "Em {unit}",
    weight: "Peso (força da gravidade, m × g)",
    fallSpeed: "Velocidade após uma queda de altura h (sem resistência do ar)",
    springForce: "Força da mola nesse deslocamento (k × x)",
    notes: {
      reference: "A energia potencial é medida em relação à altura escolhida como zero. Só as diferenças de altura importam.",
      gravity: "Usa g = {g} m/s², considerada constante ao longo da altura.",
      hooke: "Pressupõe uma mola ideal que obedece à lei de Hooke (F = k × x) e não é esticada para além do seu limite elástico.",
    },
  },
};

export default pt;
