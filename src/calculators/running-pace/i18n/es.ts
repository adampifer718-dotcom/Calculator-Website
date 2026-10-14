import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RunningPaceText } from "../text/en";

const es: CalculatorTranslation<RunningPaceText> = {
  content: {
    title: "Calculadora de ritmo de carrera",
    shortTitle: "Ritmo de carrera",
    summary: "Calcula tu ritmo de carrera por kilómetro y por milla, y tu velocidad media, a partir de la distancia y el tiempo final.",
    metaTitle: "Calculadora de ritmo de carrera – Ritmo por km y por milla",
    metaDescription:
      "Calcula tu ritmo por kilómetro y por milla y tu velocidad media a partir del tiempo final en 5 km, 10 km, media maratón, maratón o una distancia personalizada.",
    keywords: ["ritmo de carrera", "calcular ritmo", "min/km", "ritmo maratón", "ritmo 10 km", "running"],
    intro: [
      "El ritmo es el tiempo que tardas en recorrer un kilómetro o una milla. Es la forma en que la mayoría de los corredores planifican y comparan sus carreras.",
      "Elige una distancia de carrera o introduce la tuya, añade tu tiempo final y consulta el ritmo y la velocidad.",
    ],
    howToUse: [
      "Elige una distancia de carrera, o «Distancia personalizada» e introdúcela.",
      "Introduce tu tiempo final en horas, minutos y segundos.",
      "Consulta tu ritmo por km y por milla y tu velocidad media.",
    ],
    formulas: [
      { title: "Ritmo", expression: "ritmo = tiempo ÷ distancia", explanation: "Se muestra como minutos:segundos por km o por milla." },
      { title: "Velocidad", expression: "velocidad = distancia ÷ tiempo", explanation: "Se muestra en km/h y mph." },
    ],
    examples: [
      { title: "10 km en 50 minutos", steps: ["3000 s ÷ 10 km = 300 s", "= 5:00 por km"] },
      { title: "Maratón en 3 h 30 min", steps: ["12.600 s ÷ 42,195 km ≈ 298,6 s", "≈ 4:59 por km"] },
    ],
    assumptions: [
      "Supone un ritmo medio uniforme en toda la distancia; los parciales variarán según el terreno y el esfuerzo.",
      "Los ritmos se redondean al segundo más cercano.",
      "Distancias de carrera: media maratón, 21,0975 km; maratón, 42,195 km.",
    ],
    faqs: [
      {
        question: "¿Qué es un buen ritmo en 5 km?",
        answer: "Depende de la edad, la experiencia y el terreno. Sigue la evolución de tu propio ritmo en lugar de compararte con los demás.",
      },
      { question: "¿Cómo paso el ritmo por km a ritmo por milla?", answer: "Multiplica por 1,609344. Un ritmo de 5:00/km equivale a unos 8:03/mi." },
      {
        question: "¿Cómo calculo un tiempo objetivo?",
        answer: "Elige un ritmo objetivo y multiplícalo por la distancia, o ajusta aquí el tiempo hasta que el ritmo coincida con tu objetivo.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    race: "Distancia",
    races: { "5k": "5 km", "10k": "10 km", half: "Media maratón", marathon: "Maratón", custom: "Distancia personalizada" },
    distance: "Distancia personalizada",
    unit: "Unidad",
    units: { km: "Kilómetros", mi: "Millas" },
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
    timeZero: "Introduce un tiempo final mayor que cero.",
    perKm: "Ritmo por kilómetro",
    caption: "Tiempo final de {time} en {km} km.",
    perMile: "Ritmo por milla",
    speed: "Velocidad media",
    speedMph: "Velocidad media (mph)",
  },
};

export default es;
