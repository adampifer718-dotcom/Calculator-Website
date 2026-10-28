import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SwimPaceText } from "../text/en";

const es: CalculatorTranslation<SwimPaceText> = {
  content: {
    title: "Calculadora de ritmo de natación",
    shortTitle: "Ritmo de natación",
    summary:
      "Calcula tu ritmo de natación por 100 m o 100 yd a partir de una distancia y un tiempo, o el tiempo para una distancia a un ritmo dado.",
    metaTitle: "Calculadora de ritmo de natación – Ritmo por 100 m y 100 yd",
    metaDescription:
      "Calcula tu ritmo de natación por 100 metros o 100 yardas con la distancia y el tiempo, o el tiempo final a partir de un ritmo, con velocidad y parciales.",
    keywords: ["ritmo de natación", "ritmo por 100 m", "ritmo por 100 yardas", "velocidad nadando", "tiempo de natación", "natación triatlón", "calcular ritmo natación"],
    intro: [
      "Los nadadores suelen medir el ritmo como el tiempo que tardan en cada 100 metros o 100 yardas. Así pueden comparar una sesión en piscina con una travesía en aguas abiertas o una competición, sea cual sea la distancia total.",
      "Introduce una distancia y un tiempo para obtener tu ritmo en ambas unidades, tu velocidad y los tiempos que harías en distancias habituales a ese ritmo. O cambia de modo, introduce un ritmo objetivo y mira cuánto tardarás en una distancia.",
    ],
    howToUse: [
      "Elige si quieres calcular el ritmo o el tiempo total.",
      "Introduce la distancia y elige metros o yardas.",
      "Introduce tu tiempo en horas, minutos y segundos, o el ritmo por 100 m o 100 yd.",
      "Consulta el ritmo, la velocidad y los tiempos previstos de 50 m a 1500 m.",
    ],
    formulas: [
      {
        title: "Ritmo",
        expression: "ritmo por 100 m = tiempo (s) ÷ distancia (m) × 100",
        explanation: "Se muestra como minutos:segundos, redondeado al segundo más cercano.",
      },
      {
        title: "Tiempo a partir del ritmo",
        expression: "tiempo = ritmo por 100 m × distancia (m) ÷ 100",
        explanation: "Un ritmo por 100 yd se divide primero entre 0,9144 para obtener el ritmo por 100 m.",
      },
      {
        title: "Yardas y metros",
        expression: "1 yd = 0,9144 m exactamente\nritmo por 100 yd = ritmo por 100 m × 0,9144",
        explanation: "100 yardas son algo menos que 100 metros, así que el ritmo por 100 yd es más rápido.",
      },
      {
        title: "Velocidad",
        expression: "velocidad (m/s) = 100 ÷ ritmo por 100 m (s)\nkm/h = m/s × 3,6",
        explanation: "Velocidad media en todo el recorrido.",
      },
    ],
    examples: [
      {
        title: "1500 m en 27:30",
        steps: ["27:30 = 1650 s", "1650 ÷ 1500 × 100 = 110 s = 1:50 por 100 m", "Por 100 yd: 110 × 0,9144 ≈ 101 s = 1:41; velocidad ≈ 0,909 m/s"],
      },
      {
        title: "500 yd en 7:05",
        steps: ["7:05 = 425 s", "425 ÷ 500 × 100 = 85 s = 1:25 por 100 yd", "Por 100 m: 85 ÷ 0,9144 ≈ 93 s = 1:33"],
      },
      {
        title: "1650 yd a 1:30 por 100 yd",
        steps: ["1650 yd ÷ 100 = 16,5 tramos de 100 yd", "16,5 × 90 s = 1485 s", "1485 s = 24:45"],
      },
    ],
    assumptions: [
      "El ritmo es una media de toda la distancia; los tiempos previstos suponen que podrías mantener ese ritmo en cada distancia, algo que rara vez ocurre en recorridos mucho más largos.",
      "La longitud de la piscina y el número de virajes influyen en los tiempos: el mismo recorrido suele ser algo más rápido en una piscina de 25 m que en una de 50 m.",
      "Los tiempos se redondean al segundo más cercano al mostrarlos.",
    ],
    faqs: [
      {
        question: "¿Por qué mi ritmo por 100 yd es más rápido que por 100 m?",
        answer: "100 yardas son 91,44 metros, así que se tarda menos en nadarlas. A la misma velocidad, el ritmo por 100 yd es aproximadamente un 8,6 % menor que el ritmo por 100 m.",
      },
      {
        question: "¿Qué es un buen ritmo de natación?",
        answer: "Depende de la edad, la experiencia y la distancia. Muchos nadadores aficionados van a unos 2 o 3 minutos por 100 m, mientras que los nadadores de fondo entrenados suelen bajar bastante de 1:30.",
      },
      {
        question: "¿Puedo usarla para nadar en aguas abiertas?",
        answer: "Sí, si conoces la distancia. Las distancias por GPS en aguas abiertas pueden ser imprecisas, así que el ritmo solo es tan bueno como la distancia medida.",
      },
    ],
    sourcesUsedFor: ["La conversión exacta 1 yd = 0,9144 m, usada entre piscinas en yardas y en metros."],
  },
  text: {
    mode: "Calcular",
    modes: { pace: "Ritmo a partir de distancia y tiempo", time: "Tiempo a partir de distancia y ritmo" },
    distance: "Distancia",
    unit: "Unidad de distancia",
    units: { m: "Metros (m)", yd: "Yardas (yd)" },
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
    timeZero: "Introduce un tiempo mayor que 0.",
    paceMinutes: "Ritmo: minutos",
    paceSeconds: "Ritmo: segundos",
    paceUnit: "Ritmo por",
    paceUnits: { m: "100 m", yd: "100 yd" },
    paceZero: "Introduce un ritmo mayor que 0.",
    pace: "Ritmo por 100 {unit}",
    time: "Tiempo total",
    caption: "{distance} en {time}.",
    pace100m: "Ritmo por 100 m",
    pace100yd: "Ritmo por 100 yd",
    speedMs: "Velocidad (m/s)",
    speedKmh: "Velocidad (km/h)",
    distanceM: "Distancia en metros",
    table: {
      caption: "Tiempos previstos al mismo ritmo constante",
      distance: "Distancia",
      time: "Tiempo",
    },
    notes: {
      even: "Los tiempos previstos suponen el mismo ritmo en toda la distancia. Los recorridos más largos suelen ser más lentos por cada 100, y los virajes difieren entre piscinas de 25 m, 50 m y 25 yd.",
    },
  },
};

export default es;
