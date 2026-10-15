import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HalfLifeText } from "../text/en";

const es: CalculatorTranslation<HalfLifeText> = {
  content: {
    title: "Calculadora de vida media",
    shortTitle: "Vida media",
    summary: "Resuelve el decaimiento exponencial para la cantidad restante, la cantidad inicial, la vida media o el tiempo transcurrido.",
    metaTitle: "Calculadora de vida media – Cantidad restante y tiempo",
    metaDescription:
      "Resuelve N = N₀(1/2)^(t/T) para la cantidad restante, la inicial, la vida media o el tiempo transcurrido, con la constante de desintegración y la vida promedio.",
    keywords: [
      "vida media",
      "periodo de semidesintegración",
      "desintegración radiactiva",
      "decaimiento exponencial",
      "constante de desintegración",
      "datación por carbono 14",
      "cinética de primer orden",
    ],
    intro: [
      "La vida media (o periodo de semidesintegración) es el tiempo que tarda en desaparecer la mitad de una cantidad que decae. Tras una vida media queda el 50 %, tras dos el 25 %, tras tres el 12,5 %, y así sucesivamente.",
      "La misma regla describe los isótopos radiactivos y cualquier otro proceso de decaimiento de primer orden. Introduce tres de los cuatro valores para hallar el que falta. La calculadora también muestra la constante de desintegración, la vida promedio y la proporción restante.",
    ],
    howToUse: [
      "Elige qué quieres calcular: la cantidad restante, la cantidad inicial, la vida media o el tiempo transcurrido.",
      "Introduce los demás valores. Las cantidades pueden estar en cualquier unidad, y los tiempos también, siempre que cada pareja use la misma.",
      "Consulta el resultado en esas mismas unidades, junto con el número de vidas medias y la constante de desintegración.",
    ],
    formulas: [
      {
        title: "Ley de decaimiento",
        expression: "N = N₀ × (1/2)^(t ÷ T½)",
        explanation: "N₀ es la cantidad inicial, t el tiempo transcurrido y T½ la vida media.",
      },
      {
        title: "Vida media y tiempo transcurrido",
        expression: "T½ = t × ln 2 ÷ ln(N₀ ÷ N);  t = T½ × log₂(N₀ ÷ N)",
        explanation: "La ley de decaimiento despejada con logaritmos.",
      },
      {
        title: "Constante de desintegración y vida promedio",
        expression: "λ = ln 2 ÷ T½;  τ = 1 ÷ λ = T½ ÷ ln 2",
        explanation: "λ es la fracción que decae por unidad de tiempo; τ es la vida promedio, unas 1,4427 vidas medias.",
      },
    ],
    examples: [
      {
        title: "40 g de cobalto 60 después de 15,81 años (T½ = 5,27 años)",
        steps: ["t ÷ T½ = 15,81 ÷ 5,27 = 3 vidas medias", "N = 40 × (1/2)³ = 5 g"],
      },
      {
        title: "Vida media a partir de 1200 cuentas que bajan a 150 en 36 horas",
        steps: ["N₀ ÷ N = 1200 ÷ 150 = 8", "T½ = 36 × ln 2 ÷ ln 8 = 36 ÷ 3 = 12 horas"],
      },
      {
        title: "Edad de una muestra a la que le queda el 30 % de su carbono 14 (T½ = 5730 años)",
        steps: ["N₀ ÷ N = 100 ÷ 30 ≈ 3,333", "t = 5730 × log₂(3,333) ≈ 9952,8 años"],
      },
    ],
    assumptions: [
      "El decaimiento es de primer orden: la vida media es la misma independientemente de cuánto material quede.",
      "Las muestras grandes siguen la curva con precisión; con unos pocos átomos, el decaimiento es aleatorio y el resultado es solo un promedio.",
      "Es una herramienta matemática general. No ofrece consejos sobre medicamentos, dosis ni protección radiológica; consulta a un profesional cualificado para ello.",
    ],
    faqs: [
      {
        question: "¿Importa la unidad de tiempo?",
        answer: "Solo importa que la vida media y el tiempo transcurrido usen la misma unidad. Introduce ambos en días, o ambos en años, y el resultado saldrá en esa unidad.",
      },
      {
        question: "¿Cuánto queda después de 10 vidas medias?",
        answer: "(1/2)¹⁰ = 1/1024, es decir, algo menos del 0,1 % de la cantidad inicial.",
      },
      {
        question: "¿Qué diferencia hay entre la vida media y la vida promedio?",
        answer: "La vida media es el momento en que ha desaparecido la mitad del material. La vida promedio es el tiempo medio que tarda un átomo concreto en desintegrarse, y es más larga: unas 1,4427 veces la vida media.",
      },
    ],
    sourcesUsedFor: ["Decaimiento de primer orden, definición de vida media y λ = ln 2 ÷ T½."],
  },
  text: {
    solve: "Calcular",
    solveOptions: { N: "Cantidad restante (N)", N0: "Cantidad inicial (N₀)", T: "Vida media (T½)", t: "Tiempo transcurrido (t)" },
    initial: "Cantidad inicial (N₀)",
    remaining: "Cantidad restante (N)",
    amountHelp: "Cualquier unidad (gramos, átomos, becquerelios…), siempre que N y N₀ usen la misma.",
    halfLife: "Vida media (T½)",
    elapsed: "Tiempo transcurrido (t)",
    timeHelp: "Cualquier unidad de tiempo, siempre que t y T½ usen la misma.",
    remainingTooLarge: "La cantidad restante no puede ser mayor que la inicial (N ≤ N₀).",
    remainingMustDrop: "Para calcular la vida media, la cantidad restante debe ser menor que la inicial.",
    timeMustBePositive: "Para calcular la vida media, el tiempo transcurrido debe ser mayor que 0.",
    tooManyHalfLives: "Son demasiadas vidas medias: la cantidad inicial sería demasiado grande para mostrarla.",
    results: { N: "Cantidad restante", N0: "Cantidad inicial", T: "Vida media", t: "Tiempo transcurrido" },
    amountCaption: "En la misma unidad que la otra cantidad.",
    timeCaption: "En la misma unidad de tiempo que el otro valor de tiempo.",
    percentRemaining: "Porcentaje restante (N ÷ N₀)",
    halfLives: "Número de vidas medias (t ÷ T½)",
    decayConstant: "Constante de desintegración λ = ln 2 ÷ T½ (por unidad de tiempo)",
    meanLifetime: "Vida promedio τ = 1 ÷ λ (unidad de tiempo)",
    note: "Supone un decaimiento exponencial simple (de primer orden) con una vida media constante.",
  },
};

export default es;
