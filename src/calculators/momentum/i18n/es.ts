import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MomentumText } from "../text/en";

const es: CalculatorTranslation<MomentumText> = {
  content: {
    title: "Calculadora de cantidad de movimiento",
    shortTitle: "Cantidad de movimiento",
    summary: "Resuelve p = mv para la cantidad de movimiento, la masa o la velocidad, o calcula el impulso de una fuerza y el cambio de velocidad que produce.",
    metaTitle: "Cantidad de movimiento – Calcula p = mv y el impulso J = FΔt",
    metaDescription:
      "Halla la cantidad de movimiento, la masa o la velocidad con p = mv, con la energía cinética, o calcula el impulso de una fuerza y el Δv que produce.",
    keywords: ["cantidad de movimiento", "momento lineal", "p = mv", "impulso", "teorema del impulso", "kg m/s", "newton segundo", "cambio de velocidad"],
    intro: [
      "La cantidad de movimiento mide lo difícil que es detener un objeto en movimiento. Es la masa por la velocidad, así que tanto un camión lento como una pelota de béisbol rápida pueden tener mucha. Como tiene dirección, la cantidad de movimiento puede ser negativa cuando el movimiento va en sentido contrario.",
      "Usa el primer modo para hallar la cantidad de movimiento, la masa o la velocidad a partir de las otras dos; el resultado también muestra la energía cinética. Usa el modo de impulso para ver qué efecto tiene una fuerza que actúa durante poco tiempo: el impulso es igual al cambio de la cantidad de movimiento y, con una masa, da el cambio de velocidad.",
    ],
    howToUse: [
      "Elige cantidad de movimiento (p = mv) o impulso (J = FΔt).",
      "Para la cantidad de movimiento, elige qué quieres calcular e introduce los otros dos valores con sus unidades. Usa una velocidad o una cantidad de movimiento negativa para un movimiento en sentido contrario.",
      "Para el impulso, introduce la fuerza media y cuánto tiempo actúa. Añade la masa si quieres el cambio de velocidad.",
      "Consulta el resultado y las demás unidades, incluidas lb·ft/s y la energía cinética.",
    ],
    formulas: [
      { title: "Cantidad de movimiento", expression: "p = m × v", explanation: "En kg·m/s. Despeja m = p ÷ v o v = p ÷ m." },
      {
        title: "Impulso",
        expression: "J = F × Δt = Δp",
        explanation: "Una fuerza media que actúa durante un tiempo cambia la cantidad de movimiento exactamente en el valor del impulso, en N·s (lo mismo que kg·m/s).",
      },
      { title: "Cambio de velocidad", expression: "Δv = J ÷ m", explanation: "El impulso dividido entre la masa sobre la que actúa." },
      { title: "Energía cinética", expression: "Ec = p² ÷ (2m)", explanation: "Equivale a ½·m·v², en julios." },
    ],
    examples: [
      {
        title: "Una pelota de béisbol de 0,145 kg a 40 m/s",
        steps: ["p = 0,145 kg × 40 m/s = 5,8 kg·m/s", "≈ 41,95 lb·ft/s; Ec = 5,8² ÷ (2 × 0,145) = 116 J"],
      },
      {
        title: "Velocidad de un patinador de 60 kg con 900 kg·m/s",
        steps: ["v = 900 ÷ 60 = 15 m/s", "15 m/s × 3,6 = 54 km/h"],
      },
      {
        title: "Una patada de 250 N que dura 0,02 s sobre un balón de 0,16 kg",
        steps: ["J = 250 N × 0,02 s = 5 N·s", "Δv = 5 ÷ 0,16 = 31,25 m/s"],
      },
    ],
    assumptions: [
      "El movimiento y las fuerzas van sobre una misma recta; el signo indica el sentido. Para movimientos en dos o tres dimensiones, aplica las fórmulas a cada componente.",
      "En el modo de impulso, la fuerza es la fuerza media durante el intervalo de tiempo. Una fuerza que cambia durante el impacto da el mismo impulso que su valor medio.",
      "Se aplica la mecánica clásica, que es precisa para velocidades muy inferiores a la de la luz.",
    ],
    faqs: [
      {
        question: "¿Qué diferencia hay entre la cantidad de movimiento y la energía cinética?",
        answer:
          "La cantidad de movimiento (mv) es un vector y se conserva en cualquier choque. La energía cinética (½mv²) no tiene dirección y, en la mayoría de los choques, se transforma en parte en calor y sonido.",
      },
      {
        question: "¿Es lo mismo N·s que kg·m/s?",
        answer: "Sí. Un newton es un kg·m/s², así que un newton segundo es un kg·m/s. El impulso y la cantidad de movimiento comparten la misma unidad.",
      },
      {
        question: "¿Por qué los airbags y los acolchados reducen las lesiones?",
        answer: "Hacen que la detención dure más. El cambio de la cantidad de movimiento es el mismo, así que un tiempo mayor implica una fuerza media menor, ya que F = Δp ÷ Δt.",
      },
    ],
    sourcesUsedFor: [
      "El impulso como fuerza por el tiempo que actúa y el teorema del impulso J = Δp.",
      "La fuerza neta como tasa de cambio de la cantidad de movimiento.",
    ],
  },
  text: {
    mode: "Calcular",
    modes: { momentum: "Cantidad de movimiento (p = mv)", impulse: "Impulso (J = FΔt)" },
    solve: "Hallar",
    solveOptions: { momentum: "Cantidad de movimiento (p)", mass: "Masa (m)", velocity: "Velocidad (v)" },
    momentum: "Cantidad de movimiento (p)",
    momentumHelp: "En kilogramos metro por segundo. Un valor negativo indica un movimiento en sentido contrario.",
    mass: "Masa (m)",
    impulseMass: "Masa (opcional)",
    impulseMassHelp: "Déjala vacía para obtener solo el impulso. Con una masa, también se muestra el cambio de velocidad.",
    massUnit: "Unidad de masa",
    massUnits: { kg: "Kilogramos (kg)", g: "Gramos (g)", lb: "Libras (lb)", t: "Toneladas métricas (t)" },
    velocity: "Velocidad (v)",
    velocityHelp: "Un valor negativo indica un movimiento en sentido contrario.",
    velocityUnit: "Unidad de velocidad",
    velocityUnits: { ms: "Metros por segundo (m/s)", kmh: "Kilómetros por hora (km/h)", mph: "Millas por hora (mph)", fts: "Pies por segundo (ft/s)" },
    unitHelp: "Para el valor que calculas, es la unidad del resultado.",
    force: "Fuerza media (F)",
    forceHelp: "Un valor negativo significa que la fuerza apunta en sentido contrario.",
    forceUnit: "Unidad de fuerza",
    forceUnits: { N: "Newtons (N)", lbf: "Libras-fuerza (lbf)" },
    duration: "Tiempo que actúa la fuerza (Δt)",
    zeroVelocity: "La velocidad no puede ser 0 al calcular la masa, porque una masa en reposo no tiene cantidad de movimiento.",
    zeroMomentum: "La cantidad de movimiento no puede ser 0 al calcular la masa.",
    signMismatch: "La cantidad de movimiento y la velocidad deben tener el mismo signo, porque la masa es positiva.",
    results: { momentum: "Cantidad de movimiento", mass: "Masa", velocity: "Velocidad" },
    impulse: "Impulso (J = Δp)",
    inUnit: "En {unit}",
    kineticEnergy: "Energía cinética (p² ÷ 2m)",
    deltaV: "Cambio de velocidad (Δv = J ÷ m)",
    impulseNote:
      "El impulso es igual al cambio de la cantidad de movimiento. El mismo impulso puede venir de una fuerza grande durante poco tiempo o de una fuerza pequeña durante mucho tiempo.",
    note: "La cantidad de movimiento es un vector. Aquí se mide sobre una recta, y el signo indica el sentido.",
  },
};

export default es;
