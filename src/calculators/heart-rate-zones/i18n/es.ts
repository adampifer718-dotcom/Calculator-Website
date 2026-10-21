import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HeartRateZonesText } from "../text/en";

const es: CalculatorTranslation<HeartRateZonesText> = {
  content: {
    title: "Calculadora de zonas de frecuencia cardiaca",
    shortTitle: "Zonas de frecuencia cardiaca",
    summary: "Estima tu frecuencia cardiaca máxima a partir de tu edad y consulta cinco zonas de entrenamiento en pulsaciones por minuto, por porcentaje del máximo o con el método de Karvonen.",
    metaTitle: "Calculadora de zonas de frecuencia cardiaca – FC máxima",
    metaDescription:
      "Estima tu frecuencia cardiaca máxima con 220 − edad o la fórmula de Tanaka y obtén cinco zonas de entrenamiento en lpm, por % del máximo o con Karvonen.",
    keywords: ["zonas de frecuencia cardiaca", "frecuencia cardiaca objetivo", "frecuencia cardiaca máxima", "fórmula de Karvonen", "zonas de entrenamiento", "zona quema grasa", "reserva de frecuencia cardiaca", "pulsaciones"],
    intro: [
      "Las zonas de frecuencia cardiaca dividen la intensidad del ejercicio en franjas basadas en tu frecuencia cardiaca máxima. Entrenar en una zona concreta te ayuda a regular rodajes suaves, salidas en bici a ritmo constante o series intensas sin ir a ciegas.",
      "Esta calculadora estima tu frecuencia cardiaca máxima a partir de tu edad, o usa un máximo que hayas medido, y lo convierte en cinco zonas en pulsaciones por minuto. También muestra los rangos de intensidad moderada y vigorosa que propone la American Heart Association.",
    ],
    howToUse: [
      "Introduce tu edad y elige una fórmula para la frecuencia cardiaca máxima.",
      "Si conoces tu máximo real gracias a una prueba de esfuerzo, introdúcelo; sustituye a la fórmula.",
      "Para usar el método de Karvonen, introduce tu frecuencia cardiaca en reposo y elige Karvonen como método de zonas.",
      "Consulta tu máximo estimado y el rango en lpm de cada zona en la tabla.",
    ],
    formulas: [
      { title: "Frecuencia cardiaca máxima (Fox)", expression: "FCmáx = 220 − edad", explanation: "La regla práctica tradicional." },
      { title: "Frecuencia cardiaca máxima (Tanaka)", expression: "FCmáx = 208 − 0,7 × edad", explanation: "Procede de un análisis de 2001 de 351 estudios; da valores más altos que 220 − edad en los adultos mayores." },
      { title: "Porcentaje del máximo", expression: "objetivo = FCmáx × intensidad", explanation: "Cada zona abarca 10 puntos porcentuales, del 50–60 % (zona 1) al 90–100 % (zona 5)." },
      {
        title: "Karvonen (reserva de frecuencia cardiaca)",
        expression: "objetivo = FCreposo + intensidad × (FCmáx − FCreposo)",
        explanation: "La reserva de frecuencia cardiaca es FCmáx − FCreposo. Este método da objetivos más altos a intensidades bajas que el método del porcentaje del máximo.",
      },
    ],
    examples: [
      {
        title: "40 años con 220 − edad",
        steps: ["FCmáx = 220 − 40 = 180 lpm", "Zona 2 (60–70 %) = 108–126 lpm", "Rango moderado de la AHA (50–70 %) = 90–126 lpm; vigoroso (70–85 %) = 126–153 lpm"],
      },
      {
        title: "55 años con la fórmula de Tanaka",
        steps: ["FCmáx = 208 − 0,7 × 55 = 169,5 lpm, que se muestra como 170 lpm", "Zona 3 (70–80 %) = 118,65–135,6, redondeado a 119–136 lpm", "Con 220 − edad saldrían 165 lpm, algo menos"],
      },
      {
        title: "30 años, frecuencia en reposo de 60 lpm, Karvonen",
        steps: ["FCmáx = 220 − 30 = 190 lpm; reserva = 190 − 60 = 130 lpm", "Límite inferior de la zona 3 = 60 + 0,7 × 130 = 151 lpm; superior = 60 + 0,8 × 130 = 164 lpm", "Así que la zona 3 es 151–164 lpm"],
      },
    ],
    assumptions: [
      "Estos resultados son estimaciones, no un consejo médico, y esta calculadora no ha sido revisada por profesionales.",
      "Las fórmulas basadas en la edad describen promedios de población. La frecuencia cardiaca máxima real de una persona puede diferir de la estimación en 10 lpm o más, así que un máximo medido es más preciso.",
      "Los medicamentos como los betabloqueantes, así como el calor, la deshidratación, la cafeína y las enfermedades, alteran la frecuencia cardiaca. Las zonas basadas en un máximo estimado pueden no ser adecuadas para ti.",
      "Si tienes una enfermedad cardiaca, otros problemas de salud o síntomas como dolor en el pecho o mareos, habla con un médico antes de empezar a hacer ejercicio vigoroso.",
      "Los nombres de las zonas y las franjas de 10 puntos son una convención habitual; entrenadores y dispositivos usan varios sistemas de zonas distintos.",
    ],
    faqs: [
      {
        question: "¿Qué fórmula de frecuencia cardiaca máxima debo usar?",
        answer: "220 − edad es sencilla y muy utilizada. La fórmula de Tanaka, 208 − 0,7 × edad, se ajustó a un conjunto de datos mucho mayor y da valores más altos en los adultos mayores. Ninguna sustituye a un máximo medido en una prueba de esfuerzo supervisada.",
      },
      {
        question: "¿Qué es el método de Karvonen?",
        answer: "Fija los objetivos a partir de la reserva de frecuencia cardiaca, la diferencia entre tu frecuencia máxima y la de reposo. Como tiene en cuenta tu frecuencia en reposo, puede ajustarse mejor a las personas con una frecuencia cardiaca en reposo baja que un simple porcentaje del máximo.",
      },
      {
        question: "¿Qué frecuencia cardiaca corresponde al ejercicio moderado?",
        answer: "La American Heart Association indica alrededor del 50–70 % de la frecuencia cardiaca máxima para la actividad de intensidad moderada y alrededor del 70–85 % para la actividad vigorosa. La calculadora muestra ambos rangos en pulsaciones por minuto.",
      },
    ],
    sourcesUsedFor: [
      "La ecuación 208 − 0,7 × edad para la frecuencia cardiaca máxima.",
      "Los rangos objetivo de alrededor del 50–70 % de la frecuencia cardiaca máxima para la actividad moderada y del 70–85 % para la vigorosa, y la estimación 220 − edad.",
    ],
  },
  text: {
    age: "Edad",
    ageSuffix: "años",
    formula: "Fórmula de la frecuencia cardiaca máxima",
    formulas: { fox: "220 − edad", tanaka: "208 − 0,7 × edad (Tanaka)" },
    formulaHelp: "Ambas fórmulas estiman un promedio para las personas de tu edad. La versión de Tanaka da valores más altos en los adultos mayores.",
    measuredMax: "Frecuencia cardiaca máxima medida",
    measuredMaxHelp: "Opcional. Si conoces tu máximo gracias a una prueba de esfuerzo, introdúcelo aquí; sustituye a la fórmula.",
    resting: "Frecuencia cardiaca en reposo",
    restingHelp: "Opcional, pero necesaria para el método de Karvonen. Cuenta tu pulso durante un minuto completo al despertarte, antes de levantarte.",
    method: "Método de zonas",
    methods: { percentMax: "Porcentaje de la frecuencia cardiaca máxima", karvonen: "Karvonen (reserva de frecuencia cardiaca)" },
    methodHelp: "Karvonen aplica los porcentajes a la diferencia entre tu frecuencia cardiaca máxima y la de reposo, y luego vuelve a sumar la de reposo.",
    errors: {
      restingRequired: "Introduce tu frecuencia cardiaca en reposo para usar el método de Karvonen.",
      restingTooHigh: "La frecuencia cardiaca en reposo debe ser inferior a la máxima ({max} lpm).",
    },
    maxHr: "Frecuencia cardiaca máxima estimada",
    maxHrMeasured: "Frecuencia cardiaca máxima (medida)",
    captionFormula: "Estimada con {formula} para {age} años.",
    captionMeasured: "Tu máximo medido, usado en lugar de una fórmula.",
    zonesCaption: "Zonas de entrenamiento por frecuencia cardiaca",
    zonesCaptionKarvonen: "Zonas de entrenamiento por frecuencia cardiaca (Karvonen)",
    columns: { zone: "Zona", intensity: "Intensidad", heartRate: "Frecuencia cardiaca" },
    zoneNames: ["Zona 1 – muy suave", "Zona 2 – suave", "Zona 3 – moderada", "Zona 4 – intensa", "Zona 5 – máxima"],
    percentRange: "{low}–{high}",
    bpmRange: "{low}–{high} lpm",
    ahaModerate: "Intensidad moderada según la AHA ({range} del máximo)",
    ahaVigorous: "Intensidad vigorosa según la AHA ({range} del máximo)",
    reserve: "Reserva de frecuencia cardiaca",
    notes: {
      aha: "La American Heart Association propone alrededor del 50–70 % de la frecuencia cardiaca máxima para la actividad moderada y alrededor del 70–85 % para la vigorosa. Estos rangos se muestran como porcentaje de la frecuencia cardiaca máxima.",
      restingIgnored: "La frecuencia cardiaca en reposo solo la usa el método de Karvonen.",
      estimate: "Las fórmulas dan promedios de población; tu máximo real puede diferir en 10 lpm o más. Los medicamentos como los betabloqueantes reducen la frecuencia cardiaca.",
      doctor: "Si tienes una enfermedad cardiaca u otros problemas de salud, habla con un médico antes de empezar a hacer ejercicio vigoroso.",
    },
  },
};

export default es;
