import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { OneRepMaxText } from "../text/en";

const es: CalculatorTranslation<OneRepMaxText> = {
  content: {
    title: "Calculadora de repetición máxima (1RM)",
    shortTitle: "Repetición máxima",
    summary: "Estima tu repetición máxima a partir de una serie de 1 a 12 repeticiones con las fórmulas de Epley, Brzycki y Lombardi, con una tabla de cargas de entrenamiento.",
    metaTitle: "Repetición máxima (1RM) – Epley, Brzycki y Lombardi",
    metaDescription:
      "Estima tu repetición máxima (1RM) a partir del peso y las repeticiones de una serie exigente con tres fórmulas, y obtén cargas del 60 % al 95 % del 1RM.",
    keywords: [
      "repetición máxima",
      "calculadora 1RM",
      "calcular 1RM",
      "fórmula de Epley",
      "fórmula de Brzycki",
      "máximo en press de banca",
      "máximo en sentadilla",
      "porcentajes de entrenamiento",
    ],
    intro: [
      "Tu repetición máxima (1RM) es el mayor peso que puedes levantar una vez con buena técnica. Medirla directamente es agotador y conlleva más riesgo, así que muchos deportistas la estiman a partir de una serie pesada llevada cerca del fallo.",
      "Esta calculadora aplica tres ecuaciones muy utilizadas, las de Epley, Brzycki y Lombardi, y calcula su media. Cada una se ajustó con levantadores distintos, así que la dispersión entre ellas da una idea de lo incierta que es cualquier estimación aislada.",
      "La tabla convierte la estimación en cargas para porcentajes de entrenamiento habituales, desde el 60 % para trabajo de volumen más ligero hasta el 95 % para repeticiones únicas pesadas.",
    ],
    howToUse: [
      "Introduce el peso que levantaste y elige kilogramos o libras.",
      "Introduce cuántas repeticiones completas hiciste en esa serie, de 1 a 12.",
      "Consulta la estimación media y el resultado de cada fórmula.",
      "Usa la tabla para elegir las cargas de un plan de entrenamiento.",
    ],
    formulas: [
      {
        title: "Epley",
        expression: "1RM = w × (1 + r ÷ 30), y 1RM = w cuando r = 1",
        explanation: "w es el peso levantado y r el número de repeticiones. Añade aproximadamente un 3,3 % del peso por cada repetición.",
      },
      {
        title: "Brzycki",
        expression: "1RM = w × 36 ÷ (37 − r)",
        explanation: "Da el mismo resultado que Epley con 10 repeticiones y valores algo menores por debajo de esa cifra.",
      },
      {
        title: "Lombardi",
        expression: "1RM = w × r^0,10",
        explanation: "Una ley de potencias que sube rápidamente en las primeras repeticiones y luego se aplana.",
      },
      {
        title: "Estimación mostrada",
        expression: "1RM ≈ (Epley + Brzycki + Lombardi) ÷ 3",
        explanation: "Las cargas de entrenamiento de la tabla son esta media multiplicada por cada porcentaje.",
      },
    ],
    examples: [
      {
        title: "Sentadilla: 82,5 kg a 6 repeticiones",
        steps: [
          "Epley: 82,5 × (1 + 6 ÷ 30) = 99,0 kg",
          "Brzycki: 82,5 × 36 ÷ 31 ≈ 95,8 kg",
          "Lombardi: 82,5 × 6^0,1 ≈ 98,7 kg",
          "Media ≈ (99,0 + 95,8 + 98,7) ÷ 3 ≈ 97,8 kg",
        ],
      },
      {
        title: "Press de banca: 185 lb a 8 repeticiones",
        steps: [
          "Epley: 185 × (1 + 8 ÷ 30) ≈ 234,3 lb",
          "Brzycki: 185 × 36 ÷ 29 ≈ 229,7 lb",
          "Lombardi: 185 × 8^0,1 ≈ 227,8 lb",
          "Media ≈ 230,6 lb",
        ],
      },
    ],
    assumptions: [
      "La serie se llevó cerca del fallo con una técnica constante. Detenerse muy lejos del fallo hace que la estimación salga demasiado baja.",
      "Las fórmulas son menos fiables por encima de unas 10 repeticiones, donde la resistencia pesa más que la fuerza máxima. Las series de 3–8 repeticiones dan mejores estimaciones.",
      "Las ecuaciones se desarrollaron sobre todo con ejercicios de peso libre como el press de banca y la sentadilla. Los resultados con máquinas, ejercicios de aislamiento y personas no entrenadas pueden diferir.",
      "Medir un máximo real requiere una técnica adecuada, un calentamiento completo y un compañero que asista o barras de seguridad. Esta herramienta no es un consejo médico ni de entrenamiento.",
    ],
    faqs: [
      {
        question: "¿Qué fórmula de repetición máxima es la más precisa?",
        answer: "Ninguna es la mejor para todo el mundo. Los estudios que las comparan muestran que la precisión depende del ejercicio, de la persona y del número de repeticiones; por eso esta calculadora promedia tres y muestra cada una.",
      },
      {
        question: "¿Cuántas repeticiones debo usar para la estimación?",
        answer: "Lo mejor es una serie de unas 3 a 8 repeticiones exigentes. Con una repetición, la estimación es simplemente el peso levantado, y a partir de unas 10 repeticiones las predicciones se separan.",
      },
      {
        question: "¿Puedo usar la tabla de entrenamiento para un programa?",
        answer: "Sí, como punto de partida. Muchos programas prescriben el trabajo como porcentaje del 1RM, por ejemplo el 80 % para series de unas 5 repeticiones. Ajusta las cargas según cómo te resulten las series.",
      },
    ],
    sourcesUsedFor: [
      "Origen de la ecuación de predicción de Brzycki y su uso previsto con series de hasta unas 10 repeticiones.",
      "Pruebas de que la precisión de las ecuaciones de Epley, Brzycki, Lombardi y otras varía según el ejercicio y la población.",
    ],
  },
  text: {
    weight: "Peso levantado",
    unit: "Unidad",
    units: { kg: "kg", lb: "lb" },
    reps: "Repeticiones completadas",
    repsHelp: "Repeticiones completas con buena técnica en una serie llevada cerca del fallo, de 1 a 12.",
    estimate: "Repetición máxima estimada",
    caption: "Media de las estimaciones de Epley, Brzycki y Lombardi para {weight} × {reps}.",
    repsCount: {
      zero: "{n} repeticiones",
      one: "{n} repetición",
      two: "{n} repeticiones",
      few: "{n} repeticiones",
      many: "{n} repeticiones",
      other: "{n} repeticiones",
    },
    epley: "Fórmula de Epley",
    brzycki: "Fórmula de Brzycki",
    lombardi: "Fórmula de Lombardi",
    tableCaption: "Cargas de entrenamiento a partir de la repetición máxima estimada",
    tablePercent: "Porcentaje del 1RM",
    tableLoad: "Carga",
    notes: {
      single: "Con una sola repetición, todas las fórmulas devuelven el peso levantado.",
      highReps: "Las estimaciones con más de unas 10 repeticiones son menos fiables; una serie más pesada de 3–8 repeticiones da una mejor predicción.",
      safety: "Intentar un levantamiento máximo real requiere una técnica adecuada, un calentamiento y un compañero que asista o barras de seguridad.",
    },
  },
};

export default es;
