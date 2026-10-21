import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SpeedDistanceTimeText } from "../text/en";

const pt: CalculatorTranslation<SpeedDistanceTimeText> = {
  content: {
    title: "Calculadora de velocidade, distância e tempo",
    shortTitle: "Velocidade, distância, tempo",
    summary: "Calcule a velocidade média, a distância percorrida ou o tempo de viagem a partir dos outros dois valores.",
    metaTitle: "Calculadora de velocidade, distância e tempo",
    metaDescription:
      "Calcule a velocidade média, a distância ou o tempo de viagem a partir dos outros dois valores, em quilómetros e km/h ou em milhas e mph, com conversões.",
    keywords: ["velocidade", "distância", "tempo", "tempo de viagem", "velocidade média", "km/h", "mph", "distância percorrida"],
    intro: [
      "A velocidade, a distância e o tempo estão ligados por uma relação simples. Conhecendo dois deles, pode calcular o terceiro.",
      "A calculadora trabalha em quilómetros e km/h ou em milhas e mph, e mostra as conversões.",
    ],
    howToUse: [
      "Escolha o que pretende calcular.",
      "Escolha unidades métricas ou imperiais.",
      "Introduza os dois valores conhecidos, com o tempo em horas e minutos.",
      "Consulte o resultado.",
    ],
    formulas: [
      {
        title: "A relação",
        expression: "velocidade = distância ÷ tempo\ndistância = velocidade × tempo\ntempo = distância ÷ velocidade",
        explanation: "Use unidades coerentes, como km e horas para km/h.",
      },
    ],
    examples: [
      {
        title: "150 km em 2 h 30 min",
        steps: ["Tempo = 2,5 h", "Velocidade = 150 ÷ 2,5 = 60 km/h"],
      },
      {
        title: "90 milhas a 60 mph",
        steps: ["Tempo = 90 ÷ 60 = 1,5 h", "= 1 h 30 min"],
      },
    ],
    assumptions: [
      "Indica a velocidade média ao longo de toda a viagem; a velocidade real pode variar pelo caminho.",
      "Os tempos são arredondados ao minuto mais próximo para apresentação.",
    ],
    faqs: [
      { question: "Como calculo a velocidade média?", answer: "Divida a distância total pelo tempo total. 120 km em 1,5 horas dão 80 km/h." },
      { question: "Como converto km/h em m/s?", answer: "Divida por 3,6. Assim, 72 km/h correspondem a 20 m/s." },
      {
        question: "A rapidez é o mesmo que a velocidade vetorial?",
        answer: "A velocidade vetorial tem também uma direção. Para uma viagem ao longo de um percurso, a velocidade média é normalmente o que precisa.",
      },
    ],
    sourcesUsedFor: ["Definição de rapidez média e de velocidade média."],
  },
  text: {
    solve: "Calcular",
    solveOptions: { speed: "Velocidade", distance: "Distância", time: "Tempo" },
    units: "Unidades",
    unitOptions: { metric: "Quilómetros e km/h", imperial: "Milhas e mph" },
    distance: "Distância",
    speed: "Velocidade",
    hours: "Horas",
    minutes: "Minutos",
    timeZero: "Introduza um tempo maior do que zero.",
    distanceOut: "Distância",
    inKm: "Em quilómetros",
    inMiles: "Em milhas",
    timeOut: "Tempo",
    inHours: "Em horas",
    speedOut: "Velocidade média",
    inKmh: "Em km/h",
    inMph: "Em mph",
    inMps: "Em metros por segundo",
    hoursMinutes: "{h} h {m} min",
    hoursOnly: "{h} h",
    minutesOnly: "{m} min",
  },
};

export default pt;
