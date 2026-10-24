import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ProjectileMotionText } from "../text/en";

const pt: CalculatorTranslation<ProjectileMotionText> = {
  content: {
    title: "Calculadora de movimento de projéteis",
    shortTitle: "Movimento de projéteis",
    summary: "Obtenha o alcance, o tempo de voo, a altura máxima e a velocidade de impacto de um objeto lançado, a partir de qualquer altura, na Terra, na Lua ou em Marte.",
    metaTitle: "Movimento de projéteis – Alcance, altura e tempo de voo",
    metaDescription:
      "Introduza a velocidade, o ângulo e a altura de lançamento para obter o alcance, o tempo de voo, a altura máxima e a velocidade de impacto. Sem atrito do ar.",
    keywords: ["movimento de projéteis", "lançamento oblíquo", "trajetória", "alcance", "tempo de voo", "altura máxima", "ângulo de lançamento", "parábola"],
    intro: [
      "Uma bola atirada, uma bola de futebol pontapeada ou um jato de água seguem praticamente a mesma curva quando estão no ar: continuam a deslocar-se na horizontal a uma velocidade constante, enquanto a gravidade os puxa para baixo a um ritmo constante. O resultado é uma parábola.",
      "Indique a velocidade de lançamento, o ângulo acima da horizontal e a altura acima do solo de chegada. A calculadora determina a distância percorrida pelo objeto, quanto tempo fica no ar, a altura que atinge e a velocidade com que chega ao solo, e apresenta a sua posição em dez momentos do voo.",
    ],
    howToUse: [
      "Introduza a velocidade de lançamento e escolha a unidade.",
      "Introduza o ângulo de lançamento em graus acima da horizontal, de 0° (horizontal) a 90° (na vertical, para cima).",
      "Introduza a altura de lançamento acima do solo de chegada e escolha metros ou pés para alturas e distâncias.",
      "Escolha a Terra, a Lua, Marte ou um valor de gravidade próprio e consulte o alcance e os restantes resultados.",
    ],
    formulas: [
      {
        title: "Componentes da velocidade",
        expression: "vₓ = v·cos θ, v_y = v·sin θ",
        explanation: "A componente horizontal mantém-se constante; a vertical varia g em cada segundo.",
      },
      {
        title: "Tempo de voo",
        expression: "T = (v_y + √(v_y² + 2·g·h)) ÷ g",
        explanation: "A raiz positiva de h + v_y·t − ½·g·t² = 0, que inclui a altura de lançamento h.",
      },
      {
        title: "Alcance e ponto mais alto",
        expression: "R = vₓ·T, H = h + v_y² ÷ (2·g), t_apex = v_y ÷ g",
        explanation: "A distância horizontal, o ponto mais alto acima do solo e o instante em que é atingido.",
      },
      {
        title: "Impacto",
        expression: "v_impact = √(vₓ² + v_y² + 2·g·h), ângulo = atan(√(v_y² + 2·g·h) ÷ vₓ)",
        explanation: "A velocidade e o ângulo abaixo da horizontal com que o objeto atinge o solo.",
      },
    ],
    examples: [
      {
        title: "Uma bola pontapeada a 25 m/s e 35° a partir do solo",
        steps: ["vₓ = 25 cos 35° ≈ 20,479 m/s, v_y = 25 sin 35° ≈ 14,339 m/s", "T = 2 × 14,339 ÷ 9,80665 ≈ 2,924 s", "R = 20,479 × 2,924 ≈ 59,89 m; altura máxima ≈ 10,48 m"],
      },
      {
        title: "Um lançamento a 15 m/s e 20°, a 1,8 m acima do solo",
        steps: [
          "vₓ ≈ 14,095 m/s, v_y ≈ 5,130 m/s",
          "T = (5,130 + √(5,130² + 2 × 9,80665 × 1,8)) ÷ 9,80665 ≈ 1,324 s",
          "R = 14,095 × 1,324 ≈ 18,66 m; chega ao solo a cerca de 16,13 m/s",
        ],
      },
      {
        title: "Uma tacada de golfe a 40 m/s e 45° na Lua",
        steps: ["Em terreno plano, R = v² sin(2θ) ÷ g = 1600 × 1 ÷ 1,62", "R ≈ 987,65 m, cerca de seis vezes mais longe do que na Terra", "Tempo de voo ≈ 34,92 s"],
      },
    ],
    assumptions: [
      "A resistência do ar, o vento, a rotação e a sustentação são ignorados. As trajetórias reais são mais curtas e mais baixas, e um projétil real chega ao solo com uma inclinação maior do que a prevista por este modelo.",
      "A gravidade é constante e aponta na vertical, para baixo, e o solo é plano e horizontal. Isto é válido para distâncias do dia a dia, não para balística de longo alcance.",
      "Para a Terra é usada a gravidade padrão, 9,80665 m/s² (exata por definição). A gravidade real varia cerca de ±0,3% com a latitude e a altitude. Os valores da Lua e de Marte são os valores médios à superfície indicados pela NASA.",
      "A altura de lançamento é medida acima do ponto de chegada. Uma chegada acima do ponto de lançamento não é abrangida.",
    ],
    faqs: [
      {
        question: "Que ângulo dá o maior alcance?",
        answer: "A partir do nível do solo e sem resistência do ar, 45° dá o alcance máximo. Lançar de uma certa altura faz descer o melhor ângulo abaixo de 45°, e a resistência do ar, na realidade, baixa-o ainda mais.",
      },
      {
        question: "A massa do objeto tem importância?",
        answer: "Não, sem resistência do ar: todos os objetos caem com a mesma aceleração g, pelo que a trajetória depende apenas da velocidade, do ângulo, da altura e da gravidade.",
      },
      {
        question: "Porque é que a velocidade de impacto é maior do que a de lançamento quando parto de uma certa altura?",
        answer: "O objeto desce mais do que subiu, pelo que a gravidade lhe acrescenta velocidade vertical. A velocidade horizontal nunca muda, pelo que o ângulo de impacto é mais inclinado do que o ângulo de lançamento.",
      },
    ],
    sourcesUsedFor: [
      "Decomposição do movimento em componentes horizontal e vertical independentes; alcance, tempo de voo, altura máxima e velocidade de impacto sem resistência do ar.",
      "Gravidade à superfície da Lua, 1,62 m/s².",
      "Gravidade média à superfície de Marte, 3,73 m/s².",
    ],
  },
  text: {
    speed: "Velocidade de lançamento",
    speedUnit: "Unidade de velocidade",
    speedUnits: { ms: "Metros por segundo (m/s)", kmh: "Quilómetros por hora (km/h)", mph: "Milhas por hora (mph)", fts: "Pés por segundo (ft/s)" },
    angle: "Ângulo de lançamento",
    angleHelp: "Medido a partir da horizontal, para cima: 0° é um lançamento horizontal, 90° é na vertical, para cima.",
    height: "Altura de lançamento",
    heightHelp: "Altura acima do solo onde o projétil cai. Use 0 para um lançamento a partir do nível do solo.",
    lengthUnit: "Unidade de comprimento",
    lengthUnitHelp: "Usada para a altura de lançamento e para as distâncias e alturas dos resultados.",
    lengthUnits: { m: "Metros (m)", ft: "Pés (ft)" },
    gravity: "Gravidade",
    gravityOptions: {
      earth: "Terra, padrão (9,80665 m/s²)",
      moon: "Lua (1,62 m/s²)",
      mars: "Marte (3,73 m/s²)",
      custom: "Personalizada",
    },
    customGravity: "Gravidade personalizada",
    customGravityHelp: "Aceleração para baixo, em metros por segundo ao quadrado.",
    flatLaunch: "Um lançamento horizontal a partir do nível do solo nunca sai do chão. Aumente o ângulo ou a altura de lançamento.",
    range: "Alcance horizontal",
    caption: "Distância horizontal do ponto de lançamento até onde o objeto atinge o solo.",
    flightTime: "Tempo de voo",
    maxHeight: "Altura máxima acima do solo",
    apexTime: "Tempo até ao ponto mais alto",
    impactSpeed: "Velocidade de impacto",
    impactAngle: "Ângulo de impacto (abaixo da horizontal)",
    components: "Componentes da velocidade inicial (horizontal, vertical)",
    componentsText: "{vx}, {vy}",
    tableCaption: "Posição durante o voo",
    tableColumns: { time: "Tempo", x: "Distância horizontal", y: "Altura" },
    verticalNote: "A 90°, o projétil sobe na vertical e volta a cair no ponto de lançamento, pelo que o alcance é 0.",
    note: "A resistência do ar é ignorada. As trajetórias reais são mais curtas e mais baixas, porque o arrasto trava o projétil, sobretudo a velocidades elevadas.",
  },
};

export default pt;
