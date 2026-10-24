import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ForceText } from "../text/en";

const es: CalculatorTranslation<ForceText> = {
  content: {
    title: "Calculadora de fuerza (F = ma)",
    shortTitle: "Fuerza",
    summary: "Resuelve la segunda ley de Newton para la fuerza, la masa o la aceleración en newtons, libras-fuerza, kilogramos, libras o g.",
    metaTitle: "Calculadora de fuerza (F = ma) – Fuerza, masa o aceleración",
    metaDescription:
      "Resuelve F = ma para la fuerza, la masa o la aceleración. Usa N, kN, lbf o dyn, kg, g, lb o t, y m/s², ft/s² o g, y consulta el resultado en todas las unidades.",
    keywords: ["calculadora de fuerza", "F = ma", "segunda ley de Newton", "newtons", "libra-fuerza", "masa", "aceleración", "fuerza neta"],
    intro: [
      "La segunda ley de Newton relaciona tres magnitudes: la fuerza neta sobre un objeto, su masa y la aceleración resultante. Si empujas con el doble de fuerza, la aceleración se duplica; si empujas algo con el doble de masa con la misma fuerza, acelera la mitad.",
      "Elige el valor que quieres hallar e introduce los otros dos. La calculadora admite unidades métricas y estadounidenses, muestra el resultado en todas las unidades de su tipo y da el peso equivalente de la fuerza: la masa que presionaría una báscula con esa fuerza bajo la gravedad estándar.",
    ],
    howToUse: [
      "Elige qué quieres calcular: fuerza, masa o aceleración.",
      "Introduce los dos valores conocidos y elige una unidad para cada uno.",
      "En la lista de unidades del valor que buscas, elige la unidad en la que quieres el resultado.",
      "Consulta el resultado, sus equivalencias en otras unidades y el peso equivalente de la fuerza.",
    ],
    formulas: [
      { title: "Fuerza", expression: "F = m × a", explanation: "La fuerza neta es igual a la masa por la aceleración. 1 N acelera 1 kg a 1 m/s²." },
      { title: "Masa", expression: "m = F ÷ a", explanation: "Divide la fuerza entre la aceleración que produce." },
      { title: "Aceleración", expression: "a = F ÷ m", explanation: "Divide la fuerza neta entre la masa." },
      {
        title: "Factores de conversión",
        expression: "1 lbf = 0,45359237 kg × 9,80665 m/s² = 4,4482216152605 N; 1 dyn = 10⁻⁵ N; 1 g = 9,80665 m/s²",
        explanation: "Exactos por definición. El peso equivalente es |F| ÷ 9,80665 m/s².",
      },
    ],
    examples: [
      {
        title: "Fuerza para acelerar un coche de 1350 kg a 2,8 m/s²",
        steps: ["F = 1350 kg × 2,8 m/s² = 3780 N", "3780 N ÷ 1000 = 3,78 kN"],
      },
      {
        title: "Masa de una caja que un empuje de 600 N acelera a 1,5 m/s²",
        steps: ["m = 600 N ÷ 1,5 m/s²", "= 400 kg"],
      },
      {
        title: "Aceleración, en g, de un carro de 20 lb del que se tira con 30 lbf",
        steps: [
          "30 lbf = 133,4466 N y 20 lb = 9,0718 kg",
          "a = 133,4466 ÷ 9,0718 ≈ 14,71 m/s²",
          "14,71 ÷ 9,80665 = 1,5 g, porque una libra-fuerza es el peso de una libra bajo la gravedad estándar",
        ],
      },
    ],
    assumptions: [
      "F es la fuerza neta: la suma vectorial de todas las fuerzas sobre el objeto, incluidos el rozamiento y la resistencia aerodinámica. La herramienta trata la fuerza y la aceleración sobre una misma recta, así que un valor negativo indica el sentido opuesto.",
      "La masa es constante. Los cohetes que queman combustible u otros sistemas que ganan o pierden masa necesitan la forma de la ley basada en la cantidad de movimiento.",
      "Se aplica la mecánica clásica, que es precisa para velocidades muy inferiores a la de la luz.",
      "La unidad de aceleración g y el peso equivalente usan la gravedad estándar, 9,80665 m/s². La gravedad local es ligeramente distinta.",
    ],
    faqs: [
      {
        question: "¿Qué es un newton?",
        answer: "La unidad de fuerza del SI. Un newton acelera una masa de 1 kg a 1 m/s². En la Tierra, un objeto de 1 kg pesa unos 9,81 N.",
      },
      {
        question: "¿Qué diferencia hay entre libras y libras-fuerza?",
        answer:
          "La libra (lb) es una unidad de masa; la libra-fuerza (lbf) es el peso de una libra bajo la gravedad estándar, 4,4482216152605 N. Comparten nombre, y por eso 1 lbf aplicada a 1 lb da exactamente 1 g.",
      },
      {
        question: "¿Por qué mi resultado es negativo?",
        answer: "Una fuerza o una aceleración negativa apunta en sentido contrario al que has elegido como positivo, como una fuerza de frenado opuesta al sentido de la marcha.",
      },
    ],
    sourcesUsedFor: [
      "Segunda ley de Newton: la fuerza externa neta es igual a la masa por la aceleración.",
      "1 lbf = 4,4482216152605 N, a partir de la libra y la gravedad estándar de 9,80665 m/s².",
    ],
  },
  text: {
    solve: "Calcular",
    solveOptions: { force: "Fuerza (F)", mass: "Masa (m)", acceleration: "Aceleración (a)" },
    force: "Fuerza (F)",
    forceHelp: "Fuerza neta. Un valor negativo significa que apunta en sentido contrario.",
    forceUnit: "Unidad de fuerza",
    forceUnits: { N: "Newtons (N)", kN: "Kilonewtons (kN)", lbf: "Libras-fuerza (lbf)", dyn: "Dinas (dyn)" },
    mass: "Masa (m)",
    massUnit: "Unidad de masa",
    massUnits: { kg: "Kilogramos (kg)", g: "Gramos (g)", lb: "Libras (lb)", t: "Toneladas métricas (t)" },
    acceleration: "Aceleración (a)",
    accelerationHelp: "Un valor negativo significa que la aceleración apunta en sentido contrario (frenado).",
    accelerationUnit: "Unidad de aceleración",
    accelerationUnits: {
      ms2: "Metros por segundo al cuadrado (m/s²)",
      fts2: "Pies por segundo al cuadrado (ft/s²)",
      g: "Gravedad estándar (g = 9,80665 m/s²)",
    },
    unitHelp: "Para el valor que calculas, es la unidad del resultado.",
    zeroAcceleration: "La aceleración no puede ser 0 al calcular la masa.",
    zeroForce: "La fuerza no puede ser 0 al calcular la masa.",
    signMismatch: "La fuerza y la aceleración deben apuntar en el mismo sentido (tener el mismo signo), porque la masa es positiva.",
    results: { force: "Fuerza", mass: "Masa", acceleration: "Aceleración" },
    inUnit: "En {unit}",
    weightKg: "Peso equivalente: masa que pesa esto bajo la gravedad estándar",
    weightLb: "Peso equivalente en libras",
    weightNote: "El peso equivalente es |F| ÷ g₀ con g₀ = 9,80665 m/s²: la masa que marcaría una báscula en la Tierra bajo esta fuerza.",
    note: "F es la fuerza neta (total) sobre el objeto. Si hay varias fuerzas, súmalas antes como vectores.",
  },
};

export default es;
