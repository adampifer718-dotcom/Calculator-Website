import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RaceTimePredictorText } from "../text/en";

const es: CalculatorTranslation<RaceTimePredictorText> = {
  content: {
    title: "Calculadora de predicción de tiempos de carrera",
    shortTitle: "Tiempo de carrera",
    summary:
      "Predice tu tiempo final en una milla, 5 km, 10 km, media maratón, maratón o cualquier distancia a partir de una carrera reciente, con la fórmula de resistencia de Riegel.",
    metaTitle: "Predicción de tiempos de carrera – 5 km a maratón (Riegel)",
    metaDescription:
      "Predice el tiempo final y el ritmo de una carrera a partir de un resultado reciente con la fórmula de Riegel, T₂ = T₁ × (D₂/D₁)^1,06, de 5 km a maratón.",
    keywords: [
      "predicción tiempo de carrera",
      "predecir tiempo maratón",
      "fórmula de Riegel",
      "predicción media maratón",
      "de 5 km a maratón",
      "equivalencia de marcas",
      "tiempo final estimado",
    ],
    intro: [
      "Si sabes lo rápido que corriste una carrera, puedes estimar lo rápido que podrías correr otra. Los corredores van algo más lentos a medida que aumenta la distancia, y en 1981 el ingeniero Peter Riegel demostró que los récords mundiales en muchas distancias se ajustan a una sencilla ley de potencias.",
      "Introduce una carrera reciente y su tiempo final, elige la distancia que quieres correr, y esta herramienta predice tu tiempo y tu ritmo con la fórmula de Riegel. También muestra las predicciones para todas las distancias habituales, desde la milla hasta el maratón.",
    ],
    howToUse: [
      "Elige la distancia de una carrera reciente que corriste a tope, o introduce una distancia personalizada en km o millas.",
      "Introduce tu tiempo final en horas, minutos y segundos.",
      "Elige la distancia que quieres predecir.",
      "Deja el exponente de fatiga en 1,06, salvo que sepas que te desfondas más (prueba 1,08) o menos en distancias largas.",
      "Consulta el tiempo previsto, el ritmo que exige y la tabla de predicciones para otras distancias.",
    ],
    formulas: [
      {
        title: "Fórmula de Riegel",
        expression: "T₂ = T₁ × (D₂ ÷ D₁)^k",
        explanation:
          "T₁ es tu tiempo en la distancia D₁ y T₂ el tiempo previsto en D₂. Con k = 1,06, duplicar la distancia multiplica el tiempo por 2^1,06 ≈ 2,085.",
      },
      {
        title: "Ritmo",
        expression: "ritmo por km = T₂ ÷ D₂ (km)\nritmo por milla = ritmo por km × 1,609344",
        explanation: "El ritmo medio necesario para hacer el tiempo previsto.",
      },
    ],
    examples: [
      {
        title: "De un 10 km en 50:00 a una media maratón",
        steps: ["T₁ = 3000 s, D₂ ÷ D₁ = 21,0975 ÷ 10 = 2,10975", "T₂ = 3000 × 2,10975^1,06 ≈ 6619 s", "6619 s = 1:50:19, un ritmo de unos 5:14 por km"],
      },
      {
        title: "De un 5 km en 22:30 a un maratón",
        steps: [
          "T₁ = 1350 s, D₂ ÷ D₁ = 42,195 ÷ 5 = 8,439",
          "T₂ = 1350 × 8,439^1,06 ≈ 12.948 s = 3:35:48",
          "El maratón es más de cuatro veces la distancia del 5 km, así que tómalo como una estimación optimista",
        ],
      },
      {
        title: "De una media maratón en 1:45:00 a un 10 km, con k = 1,08",
        steps: ["T₁ = 6300 s, D₂ ÷ D₁ = 10 ÷ 21,0975 ≈ 0,474", "T₂ = 6300 × 0,474^1,08 ≈ 2813 s", "2813 s = 0:46:53"],
      },
    ],
    assumptions: [
      "Estás igual de bien entrenado para la distancia objetivo. Un 5 km rápido no significa que tengas la resistencia para un maratón sin suficientes tiradas largas.",
      "Las predicciones son menos precisas para distancias más de unas cuatro veces más largas o más cortas que tu carrera, y para pruebas de más de unas 4 horas, en las que suelen salir demasiado rápidas.",
      "Las dos carreras se corren en recorridos llanos y parecidos, con un tiempo atmosférico similar. No se tienen en cuenta las cuestas, el calor, el viento ni la altitud.",
    ],
    faqs: [
      {
        question: "¿Por qué el exponente es 1,06?",
        answer:
          "Riegel ajustó el exponente a los récords mundiales y obtuvo unos 1,06 para la carrera a pie. Un valor de 1 significaría que puedes mantener el mismo ritmo en cualquier distancia; cualquier valor mayor que 1 significa que vas más lento cuanto más larga es la carrera.",
      },
      {
        question: "¿Qué carrera debo usar como dato?",
        answer:
          "Usa una carrera reciente que corrieras al máximo esfuerzo, idealmente de una distancia cercana a la objetivo. Una media maratón predice un maratón mejor que una milla.",
      },
      {
        question: "¿Por qué mi maratón real es más lento de lo previsto?",
        answer:
          "El maratón depende mucho del entrenamiento de resistencia, la alimentación y el reparto del ritmo, que una carrera corta no pone a prueba. Muchos corredores van más lentos de lo que predice la fórmula, así que algunos entrenadores usan un exponente más alto, de 1,07 a 1,08, para el maratón.",
      },
    ],
    sourcesUsedFor: [
      "La ecuación de resistencia T = a·D^b que relaciona tiempo y distancia, con un exponente de aproximadamente 1,06 para la carrera a pie.",
    ],
  },
  text: {
    knownRace: "Distancia de la carrera reciente",
    targetRace: "Distancia a predecir",
    races: {
      mile: "1 milla",
      "5k": "5 km",
      "10k": "10 km",
      half: "Media maratón (21,0975 km)",
      marathon: "Maratón (42,195 km)",
      custom: "Distancia personalizada",
    },
    knownDistance: "Distancia de la carrera reciente",
    targetDistance: "Distancia a predecir",
    unit: "Unidad de distancia",
    units: { km: "Kilómetros (km)", mi: "Millas (mi)" },
    hours: "Tiempo final: horas",
    minutes: "Minutos",
    seconds: "Segundos",
    exponent: "Exponente de fatiga (k)",
    exponentHelp: "El valor de Riegel para la carrera a pie es 1,06. Un valor más alto supone que vas más lento a medida que crece la distancia.",
    timeZero: "Introduce un tiempo final mayor que cero.",
    predicted: "Tiempo final previsto",
    caption: "{time} en {known} → {target}, k = {k}",
    perKm: "Ritmo previsto por kilómetro",
    perMile: "Ritmo previsto por milla",
    speed: "Velocidad media",
    tableCaption: "Predicciones para las distancias habituales",
    columns: { distance: "Distancia", time: "Tiempo previsto", perKm: "Ritmo /km", perMile: "Ritmo /mi" },
    tableRaces: { mile: "1 milla", "5k": "5 km", "10k": "10 km", half: "Media maratón", marathon: "Maratón" },
    notes: {
      far: "La distancia objetivo es más de cuatro veces más larga o más corta que tu carrera, así que la predicción es menos fiable.",
      long: "El tiempo previsto supera las 4 horas aproximadamente, y ahí la fórmula tiende a ser optimista.",
      same: "Las dos distancias son iguales, así que la predicción coincide con tu tiempo final.",
      training: "Supone que estás igual de bien entrenado para la distancia objetivo, por ejemplo con suficientes tiradas largas para un maratón.",
    },
  },
};

export default es;
