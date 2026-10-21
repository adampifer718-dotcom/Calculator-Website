import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AccelerationText } from "../text/en";

const es: CalculatorTranslation<AccelerationText> = {
  content: {
    title: "Calculadora de aceleración",
    shortTitle: "Aceleración",
    summary: "Calcula la aceleración a partir de un cambio de velocidad, de la distancia y el tiempo o de la fuerza y la masa, en m/s², ft/s² y g.",
    metaTitle: "Calculadora de aceleración – Velocidad, distancia o fuerza",
    metaDescription:
      "Calcula la aceleración a partir de un cambio de velocidad en un tiempo, de la distancia y el tiempo o de la fuerza y la masa (a = F/m), en m/s², ft/s² y g.",
    keywords: ["calcular aceleración", "fórmula de la aceleración", "m/s2", "desaceleración", "fuerza g", "a = F/m", "de 0 a 100", "cinemática"],
    intro: [
      "La aceleración indica lo rápido que cambia la velocidad. Un coche que pasa de estar parado a 100 km/h en 8 segundos gana unos 3,5 metros por segundo de velocidad cada segundo, lo que se escribe 3,5 m/s².",
      "Esta calculadora obtiene la aceleración de tres maneras: a partir de una velocidad inicial y una final en un tiempo, a partir de la distancia recorrida en un tiempo o a partir de la fuerza neta sobre un objeto y su masa. El resultado se muestra en m/s², en ft/s² y como múltiplo de la gravedad estándar g.",
    ],
    howToUse: [
      "Elige lo que conoces: un cambio de velocidad, una distancia y un tiempo, o una fuerza y una masa.",
      "Elige las unidades de velocidad y distancia cuando se pidan. El tiempo siempre va en segundos, la fuerza en newtons y la masa en kilogramos.",
      "Introduce los valores. Una velocidad negativa indica movimiento en sentido contrario.",
      "Consulta la aceleración. Un resultado negativo significa que el objeto está frenando.",
    ],
    formulas: [
      { title: "A partir de un cambio de velocidad", expression: "a = (v − v₀) ÷ t", explanation: "La aceleración media durante el tiempo t, donde v₀ es la velocidad inicial y v la final." },
      { title: "A partir de la distancia y el tiempo", expression: "d = v₀t + ½at²  ⇒  a = 2(d − v₀t) ÷ t²", explanation: "Válida cuando la aceleración se mantiene constante durante todo el intervalo." },
      { title: "A partir de la fuerza y la masa", expression: "a = F ÷ m", explanation: "La segunda ley de Newton, con la fuerza neta F en newtons y la masa m en kilogramos." },
      { title: "Conversión de unidades", expression: "1 ft/s² = 0,3048 m/s²\n1 g = 9,80665 m/s²", explanation: "Las velocidades se convierten primero a m/s (1 km/h = 1/3,6 m/s, 1 mph = 0,44704 m/s)." },
    ],
    examples: [
      {
        title: "Un coche que pasa de 0 a 100 km/h en 8 segundos",
        steps: ["100 km/h = 100 ÷ 3,6 ≈ 27,778 m/s", "a = (27,778 − 0) ÷ 8 ≈ 3,472 m/s²", "Son unos 0,354 g"],
      },
      {
        title: "Frenar de 60 mph hasta detenerse en 4 segundos",
        steps: ["60 mph = 60 × 0,44704 = 26,8224 m/s", "a = (0 − 26,8224) ÷ 4 = −6,7056 m/s²", "El signo menos indica una desaceleración de unos 0,684 g"],
      },
      {
        title: "Un empuje de 450 N sobre un trineo de 75 kg",
        steps: ["a = F ÷ m", "= 450 ÷ 75 = 6 m/s²"],
      },
    ],
    assumptions: [
      "El movimiento es en línea recta, y las velocidades y fuerzas en sentido contrario se introducen como valores negativos.",
      "El método del cambio de velocidad da la aceleración media en el intervalo. El método de distancia y tiempo supone que la aceleración es constante.",
      "El método de fuerza y masa usa la fuerza neta, una vez restados el rozamiento, la resistencia del aire y otras fuerzas opuestas.",
    ],
    faqs: [
      { question: "¿Qué significa una aceleración negativa?", answer: "Significa que la aceleración apunta en el sentido negativo. Si el objeto avanza, está frenando, lo que suele llamarse desaceleración." },
      { question: "¿Qué es 1 g?", answer: "Es la aceleración estándar de la gravedad, definida como exactamente 9,80665 m/s² (unos 32,17 ft/s²). Expresar una aceleración en g la compara con la atracción de la gravedad en la superficie de la Tierra." },
      { question: "¿Por qué la aceleración se mide en m/s²?", answer: "La aceleración es un cambio de velocidad (m/s) por unidad de tiempo (s), así que su unidad es el metro por segundo por segundo, que se escribe m/s²." },
    ],
    sourcesUsedFor: [
      "Definición de la aceleración media como el cambio de velocidad dividido entre el tiempo transcurrido, y su unidad SI, el m/s².",
      "La segunda ley de Newton, F = ma.",
      "La aceleración estándar de la gravedad, 9,80665 m/s².",
    ],
  },
  text: {
    mode: "Calcular a partir de",
    modes: { velocity: "Cambio de velocidad", distance: "Distancia y tiempo", force: "Fuerza y masa" },
    speedUnit: "Unidad de velocidad",
    speedUnits: { ms: "Metros por segundo (m/s)", kmh: "Kilómetros por hora (km/h)", mph: "Millas por hora (mph)", fts: "Pies por segundo (ft/s)" },
    initialVelocity: "Velocidad inicial (v₀)",
    initialHelp: "Usa un valor negativo para el movimiento en sentido contrario.",
    finalVelocity: "Velocidad final (v)",
    time: "Tiempo (t)",
    distanceUnit: "Unidad de distancia",
    distanceUnits: { m: "Metros (m)", km: "Kilómetros (km)", ft: "Pies (ft)", mi: "Millas (mi)" },
    distance: "Distancia recorrida (d)",
    distanceHelp: "El desplazamiento en línea recta durante el tiempo t.",
    force: "Fuerza neta (F)",
    forceHelp: "La suma de todas las fuerzas que actúan sobre el objeto, en newtons.",
    mass: "Masa (m)",
    acceleration: "Aceleración",
    formula: { velocity: "a = (v − v₀) ÷ t", distance: "a = 2(d − v₀t) ÷ t²", force: "a = F ÷ m" },
    inFeet: "En pies por segundo al cuadrado",
    inG: "En gravedades estándar (g)",
    distanceCovered: "Distancia recorrida",
    finalVelocityResult: "Velocidad final",
    notes: {
      negative: "La aceleración es negativa, así que el objeto está frenando (desacelera) si se mueve en el sentido positivo.",
      zero: "Aceleración nula: la velocidad no cambia.",
      constant: "Supone que la aceleración es constante durante todo el intervalo de tiempo.",
      average: "Es la aceleración media en el intervalo de tiempo; la aceleración en un instante concreto puede ser mayor o menor.",
      g: "1 g es la aceleración estándar de la gravedad, 9,80665 m/s², exacta por definición.",
    },
  },
};

export default es;
