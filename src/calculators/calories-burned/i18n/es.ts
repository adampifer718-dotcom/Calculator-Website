import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CaloriesBurnedText } from "../text/en";

const es: CalculatorTranslation<CaloriesBurnedText> = {
  content: {
    title: "Calculadora de calorías quemadas",
    shortTitle: "Calorías quemadas",
    summary:
      "Estima las calorías que quemas al caminar, correr, montar en bicicleta, nadar y en otras actividades a partir de los valores MET, tu peso y la duración.",
    metaTitle: "Calculadora de calorías quemadas – Método MET por actividad",
    metaDescription:
      "Estima las calorías quemadas al caminar, correr, ir en bicicleta, nadar y más a partir de valores MET publicados, tu peso y el tiempo dedicado.",
    keywords: [
      "calorías quemadas",
      "calorías del ejercicio",
      "MET",
      "equivalente metabólico",
      "gasto energético",
      "compendio de actividades físicas",
      "kcal por hora",
    ],
    intro: [
      "Un MET (equivalente metabólico de la tarea) compara el coste energético de una actividad con el de estar sentado en reposo. Caminar a paso ligero equivale a unos 4 MET, así que consume aproximadamente cuatro veces más energía que el reposo.",
      "Esta calculadora multiplica el valor MET de una actividad por tu peso corporal y el tiempo dedicado para estimar las calorías quemadas. Elige una de las actividades habituales, con valores del Compendium of Physical Activities, o introduce tu propio valor MET.",
    ],
    howToUse: [
      "Elige una actividad, o elige un valor MET personalizado e introdúcelo.",
      "Introduce tu peso corporal en kilogramos o libras.",
      "Introduce cuánto tiempo has hecho la actividad en horas y minutos.",
      "Consulta las calorías quemadas estimadas, los kilojulios y el ritmo por hora.",
    ],
    formulas: [
      {
        title: "Método MET",
        expression: "kcal = MET × peso (kg) × tiempo (h)",
        explanation: "Usa la convención de que 1 MET equivale a unas 1 kcal por kilogramo de peso corporal y por hora.",
      },
      {
        title: "Por encima del reposo",
        expression: "kcal netas = (MET − 1) × peso (kg) × tiempo (h)",
        explanation: "Excluye la energía que habrías consumido igualmente en reposo.",
      },
      { title: "Unidades", expression: "1 lb = 0,45359237 kg · 1 kcal = 4,184 kJ", explanation: "Factores de conversión exactos." },
    ],
    examples: [
      {
        title: "Caminata a paso ligero de 45 minutos con 70 kg",
        steps: ["Caminar a paso ligero (3,5 mph) = 4,3 MET", "4,3 × 70 × 0,75 = 225,75 ≈ 226 kcal", "En kilojulios: 225,75 × 4,184 ≈ 945 kJ"],
      },
      {
        title: "Correr a 6 mph durante 1 h 30 min con 180 lb",
        steps: ["180 lb × 0,45359237 = 81,65 kg", "9,8 × 81,65 × 1,5 ≈ 1200 kcal", "Son unas 800 kcal por hora"],
      },
      {
        title: "Actividad personalizada de 6,5 MET durante 2 horas con 55 kg",
        steps: ["6,5 × 55 × 2 = 715 kcal", "Por encima del reposo: (6,5 − 1) × 55 × 2 = 605 kcal"],
      },
    ],
    assumptions: [
      "El resultado es una estimación, no un consejo médico, y esta calculadora todavía no ha sido revisada por profesionales. Consulta a un médico antes de empezar un nuevo programa de ejercicio.",
      "Los valores MET son medias de la población adulta. La forma física, la técnica, el terreno, la composición corporal y la temperatura modifican el gasto real, así que los resultados individuales varían.",
      "El cálculo usa la convención de que 1 MET ≈ 1 kcal por kg y por hora. El gasto en reposo medido difiere entre personas, lo que aumenta la incertidumbre.",
      "Los valores MET proceden del Compendium of Physical Activities de 2011. La actualización de 2024 cambió algunas actividades, así que las cifras de otras herramientas pueden diferir ligeramente.",
    ],
    faqs: [
      {
        question: "¿Qué es un MET?",
        answer: "Un MET es el coste energético de una actividad en relación con estar sentado en reposo. Una actividad de 6 MET consume unas seis veces la energía del reposo.",
      },
      {
        question: "¿Por qué importa el peso corporal?",
        answer: "Mover un cuerpo más pesado requiere más energía, así que la misma actividad durante el mismo tiempo quema más calorías en una persona que pesa más.",
      },
      {
        question: "¿Son más precisas las cifras de las pulseras de actividad?",
        answer: "Las pulseras añaden datos de frecuencia cardiaca, lo que puede ayudar, pero también son estimaciones. Ambos métodos sirven más para comparar actividades que como cifras exactas.",
      },
    ],
    sourcesUsedFor: [
      "Los valores MET de las actividades de la lista y la convención de que 1 MET equivale a unas 1 kcal por kg y por hora.",
      "Contexto sobre la edición actual del Compendium, que revisó algunos valores MET; consulta pacompendium.com para ver la cifra más reciente de cada actividad.",
    ],
  },
  text: {
    activity: "Actividad",
    activityHelp: "Los valores MET son medias para adultos del Compendium of Physical Activities.",
    activities: {
      walking: "Caminar, 3,0 mph (4,8 km/h), en llano",
      brisk: "Caminar a paso ligero, 3,5 mph (5,6 km/h)",
      hiking: "Senderismo a campo través",
      run5: "Correr, 5 mph (8 km/h, 12 min/milla)",
      run6: "Correr, 6 mph (9,7 km/h, 10 min/milla)",
      cycleLeisure: "Bicicleta, paseo, menos de 10 mph (16 km/h)",
      cycleModerate: "Bicicleta, 12–13,9 mph (19–22 km/h), moderado",
      swimModerate: "Natación de largos, crol, esfuerzo ligero o moderado",
      swimVigorous: "Natación de largos, crol, rápido, esfuerzo intenso",
      weightsLight: "Entrenamiento con pesas, esfuerzo ligero o moderado",
      weightsVigorous: "Entrenamiento con pesas, esfuerzo intenso",
      yoga: "Yoga, hatha",
      tennis: "Tenis, en general",
      soccer: "Fútbol, informal",
      jumpRope: "Saltar a la comba, ritmo moderado",
      gardening: "Jardinería, en general",
      custom: "Valor MET personalizado",
    },
    customMet: "Valor MET",
    customMetHelp: "Equivalente metabólico de la actividad: 1 es estar sentado en reposo; caminar a paso ligero es unos 4.",
    weight: "Peso corporal",
    weightRange: "Introduce un peso corporal entre 20 y 700 kg (de unas 45 a 1540 lb).",
    weightUnit: "Unidad de peso",
    weightUnits: { kg: "Kilogramos (kg)", lb: "Libras (lb)" },
    hours: "Horas",
    minutes: "Minutos",
    timeZero: "Introduce una duración mayor que 0.",
    timeMax: "Introduce una duración de 24 horas o menos.",
    calories: "Calorías quemadas",
    caption: "{met} MET × {kg} kg × {hours} h.",
    kj: "En kilojulios",
    perHour: "Calorías por hora",
    metUsed: "Valor MET usado",
    aboveRest: "Por encima del reposo (MET − 1)",
    kcal: "kcal",
    kcalHour: "kcal/h",
    notes: {
      estimate:
        "Los valores MET son medias para adultos; tu propio gasto depende de la forma física, la técnica, la composición corporal y las condiciones, y puede diferir de forma apreciable.",
      gross: "El total incluye la energía que habrías consumido en reposo durante el mismo tiempo. La cifra «por encima del reposo» la excluye.",
    },
  },
};

export default es;
