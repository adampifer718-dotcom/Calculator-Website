import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SpeedDistanceTimeText } from "../text/en";

const es: CalculatorTranslation<SpeedDistanceTimeText> = {
  content: {
    title: "Calculadora de velocidad, distancia y tiempo",
    shortTitle: "Velocidad, distancia y tiempo",
    summary: "Calcula la velocidad media, la distancia recorrida o el tiempo de viaje a partir de los otros dos valores.",
    metaTitle: "Calculadora de velocidad, distancia y tiempo",
    metaDescription:
      "Calcula la velocidad media, la distancia o el tiempo de viaje a partir de los otros dos valores, en kilómetros y km/h o en millas y mph, con conversiones.",
    keywords: ["velocidad distancia tiempo", "calcular velocidad media", "tiempo de viaje", "calcular distancia", "fórmula de la velocidad", "km/h"],
    intro: [
      "La velocidad, la distancia y el tiempo están unidos por una relación sencilla. Si conoces dos de ellos, puedes calcular el tercero.",
      "La calculadora trabaja en kilómetros y km/h o en millas y mph, y muestra las conversiones.",
    ],
    howToUse: [
      "Elige qué quieres calcular.",
      "Elige unidades métricas o imperiales.",
      "Introduce los dos valores conocidos, con el tiempo en horas y minutos.",
      "Consulta el resultado.",
    ],
    formulas: [
      {
        title: "La relación",
        expression: "velocidad = distancia ÷ tiempo\ndistancia = velocidad × tiempo\ntiempo = distancia ÷ velocidad",
        explanation: "Usa unidades coherentes, como km y horas para km/h.",
      },
    ],
    examples: [
      { title: "150 km en 2 h 30 min", steps: ["Tiempo = 2,5 h", "Velocidad = 150 ÷ 2,5 = 60 km/h"] },
      { title: "90 millas a 60 mph", steps: ["Tiempo = 90 ÷ 60 = 1,5 h", "= 1 h 30 min"] },
    ],
    assumptions: [
      "Da la velocidad media de todo el trayecto; la velocidad real puede variar por el camino.",
      "Los tiempos se redondean al minuto más cercano al mostrarlos.",
    ],
    faqs: [
      { question: "¿Cómo se calcula la velocidad media?", answer: "Divide la distancia total entre el tiempo total. 120 km en 1,5 horas son 80 km/h." },
      { question: "¿Cómo paso de km/h a m/s?", answer: "Divide entre 3,6. Así, 72 km/h son 20 m/s." },
      {
        question: "¿Es lo mismo rapidez que velocidad?",
        answer: "En física, la velocidad también tiene dirección. Para un trayecto por una ruta, lo que normalmente necesitas es la rapidez media.",
      },
    ],
    sourcesUsedFor: ["Definición de rapidez media y velocidad media."],
  },
  text: {
    solve: "Calcular",
    solveOptions: { speed: "Velocidad", distance: "Distancia", time: "Tiempo" },
    units: "Unidades",
    unitOptions: { metric: "Kilómetros y km/h", imperial: "Millas y mph" },
    distance: "Distancia",
    speed: "Velocidad",
    hours: "Horas",
    minutes: "Minutos",
    timeZero: "Introduce un tiempo mayor que cero.",
    distanceOut: "Distancia",
    inKm: "En kilómetros",
    inMiles: "En millas",
    timeOut: "Tiempo",
    inHours: "En horas",
    speedOut: "Velocidad media",
    inKmh: "En km/h",
    inMph: "En mph",
    inMps: "En metros por segundo",
    hoursMinutes: "{h} h {m} min",
    hoursOnly: "{h} h",
    minutesOnly: "{m} min",
  },
};

export default es;
