import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TdeeText } from "../text/en";

const es: CalculatorTranslation<TdeeText> = {
  content: {
    title: "Calculadora de gasto energético diario (TDEE)",
    shortTitle: "Gasto energético diario",
    summary:
      "Estima tu gasto energético total diario a partir de la TMB de Mifflin-St Jeor y un factor de actividad, con todos los niveles de actividad comparados.",
    metaTitle: "Calculadora de gasto energético diario (TDEE) – Calorías",
    metaDescription:
      "Estima tu gasto energético total diario en kcal y kJ a partir de la TMB de Mifflin-St Jeor y tu nivel de actividad, con una tabla de los cinco niveles.",
    keywords: [
      "TDEE",
      "gasto energético total diario",
      "calorías de mantenimiento",
      "calorías al día",
      "factor de actividad",
      "Mifflin-St Jeor",
      "nivel de actividad física",
    ],
    intro: [
      "El gasto energético total diario (TDEE, por sus siglas en inglés) es una estimación de toda la energía que consumes en un día: la que necesitas en reposo más la del movimiento, el ejercicio y la digestión de los alimentos. A menudo se le llama calorías de mantenimiento.",
      "Esta calculadora estima primero tu tasa metabólica basal con la ecuación de Mifflin-St Jeor, la misma que usa la calculadora de metabolismo basal, y después la multiplica por un factor según tu nivel de actividad. Los cinco factores, de 1,2 a 1,9, son convenciones muy extendidas, así que toma el resultado como una estimación de partida.",
    ],
    howToUse: [
      "Elige unidades métricas o imperiales.",
      "Elige el sexo que se usa en la ecuación e introduce tu edad, tu peso y tu altura.",
      "Selecciona el nivel de actividad que mejor describa una semana normal.",
      "Consulta tu TDEE estimado, la TMB en la que se basa y la tabla que compara todos los niveles de actividad.",
    ],
    formulas: [
      {
        title: "Tasa metabólica basal (Mifflin-St Jeor)",
        expression: "TMB = 10 × peso (kg) + 6,25 × altura (cm) − 5 × edad (años) + s\ns = +5 para hombres, −161 para mujeres",
        explanation: "Energía consumida en reposo absoluto, en kcal al día.",
      },
      {
        title: "Gasto energético total diario",
        expression:
          "TDEE = TMB × factor de actividad\nsedentario 1,2 · ligero 1,375 · moderado 1,55 · muy activo 1,725 · extremadamente activo 1,9",
        explanation: "El factor eleva la energía en reposo para tener en cuenta la actividad diaria. Estos valores son convenciones habituales, no mediciones hechas para ti.",
      },
      {
        title: "Cambio semanal aproximado",
        expression: "0,5 kg por semana ≈ 0,5 × 7700 ÷ 7 = 550 kcal/día",
        explanation: "Una regla práctica que considera que 1 kg de peso corporal equivale a unas 7700 kcal. La evolución real del peso rara vez la sigue con exactitud.",
      },
      { title: "Unidades de energía", expression: "1 kcal = 4,184 kJ", explanation: "La caloría termoquímica." },
    ],
    examples: [
      {
        title: "Mujer, 35 años, 68 kg, 168 cm, moderadamente activa",
        steps: [
          "TMB = 10 × 68 + 6,25 × 168 − 5 × 35 − 161 = 1394 kcal/día",
          "TDEE = 1394 × 1,55 = 2160,7 ≈ 2161 kcal/día",
          "En kilojulios: 2160,7 × 4,184 ≈ 9040 kJ/día",
        ],
      },
      {
        title: "Hombre, 45 años, 190 lb, 5 ft 10 in, sedentario",
        steps: [
          "190 lb = 86,18 kg; 5 ft 10 in = 70 in = 177,8 cm",
          "TMB = 10 × 86,18 + 6,25 × 177,8 − 5 × 45 + 5 ≈ 1753 kcal/día",
          "TDEE = 1753,08 × 1,2 ≈ 2104 kcal/día; la cifra para perder 0,5 kg a la semana (≈ 1554 kcal/día) queda por debajo de la TMB, así que aparece un aviso",
        ],
      },
    ],
    assumptions: [
      "El resultado es una estimación, no un consejo médico ni dietético, y esta calculadora todavía no ha sido revisada por profesionales. Consulta a un médico o a un dietista-nutricionista antes de cambiar tu alimentación.",
      "La ecuación de Mifflin-St Jeor se desarrolló para adultos sanos. No es adecuada para niños, embarazo, lactancia ni enfermedades que afecten al metabolismo, y la TMB de cada persona puede diferir de ella un 10 % o más.",
      "Los factores de actividad (de 1,2 a 1,9) son convenciones muy extendidas para grandes grupos según su estilo de vida. Elegir un nivel es subjetivo, y el error del TDEE es mayor que el de la TMB.",
      "Las cifras de ±0,5 kg por semana usan la regla práctica aproximada de 7700 kcal por kg. En la práctica, la evolución del peso depende del agua, la composición corporal y la adaptación del organismo, y se ralentiza con el tiempo.",
    ],
    faqs: [
      {
        question: "¿Qué diferencia hay entre la TMB y el TDEE?",
        answer: "La TMB es la energía que se consume en reposo absoluto. El TDEE suma la energía del movimiento diario, el ejercicio y la digestión, así que siempre es mayor que la TMB.",
      },
      {
        question: "¿Qué nivel de actividad debo elegir?",
        answer: "Elige el nivel que corresponda a una semana normal, no a tu mejor semana. Si estás entre dos niveles, la tabla muestra ambos para que puedas usar un valor intermedio. La mayoría de las personas con trabajos de oficina son sedentarias o ligeramente activas.",
      },
      {
        question: "¿Por qué mi TDEE no coincide con el de mi pulsera de actividad?",
        answer: "Las pulseras estiman la actividad a partir del movimiento y la frecuencia cardiaca, mientras que esta calculadora usa un único factor general. Ambos son estimaciones; registrar tu peso y lo que comes durante varias semanas es lo que mejor muestra tu nivel real de mantenimiento.",
      },
    ],
    sourcesUsedFor: [
      "La ecuación de Mifflin-St Jeor para el gasto energético en reposo, la misma que usa la calculadora de metabolismo basal.",
      "La estimación del gasto energético total como gasto energético en reposo multiplicado por un nivel de actividad física.",
    ],
  },
  text: {
    units: "Unidades",
    unitOptions: { metric: "Métricas (kg, cm)", imperial: "Imperiales (lb, ft, in)" },
    sex: "Sexo usado en la ecuación",
    sexHelp: "La ecuación de Mifflin-St Jeor tiene constantes distintas para hombres y mujeres.",
    sexes: { male: "Hombre", female: "Mujer" },
    age: "Edad",
    weight: "Peso",
    height: "Altura",
    heightFt: "Altura (pies)",
    heightIn: "Altura (pulgadas)",
    heightZero: "Introduce una altura mayor que 0.",
    activity: "Nivel de actividad",
    activityHelp: "Elige la descripción que más se parezca a una semana normal. Los factores son convenciones aproximadas, no mediciones.",
    activities: {
      sedentary: "Sedentario (poco o ningún ejercicio)",
      light: "Ligeramente activo (ejercicio suave 1–3 días a la semana)",
      moderate: "Moderadamente activo (ejercicio 3–5 días a la semana)",
      very: "Muy activo (ejercicio intenso 6–7 días a la semana)",
      extra: "Extremadamente activo (trabajo físico o entrenamiento dos veces al día)",
    },
    activityShort: {
      sedentary: "Sedentario",
      light: "Ligeramente activo",
      moderate: "Moderadamente activo",
      very: "Muy activo",
      extra: "Extremadamente activo",
    },
    tdee: "Gasto energético total diario",
    caption: "TMB {bmr} kcal/día × factor de actividad {factor}.",
    bmr: "Tasa metabólica basal (Mifflin-St Jeor)",
    kj: "TDEE en kilojulios",
    multiplier: "Factor de actividad",
    lose: "Para perder unos 0,5 kg (1,1 lb) por semana",
    gain: "Para ganar unos 0,5 kg (1,1 lb) por semana",
    kcalDay: "kcal/día",
    kjDay: "kJ/día",
    table: {
      caption: "TDEE estimado en cada nivel de actividad",
      level: "Nivel de actividad",
      factor: "Factor",
      kcal: "kcal/día",
      kj: "kJ/día",
    },
    notes: {
      estimate:
        "Una estimación para adultos sanos. El gasto real puede diferir de ella en varios cientos de kcal al día; no es una pauta de dieta.",
      rule: "Las cifras de ±0,5 kg por semana usan la regla práctica aproximada de que 1 kg de peso corporal equivale a unas 7700 kcal (550 kcal al día para 0,5 kg a la semana). La evolución real del peso no la sigue con precisión.",
      belowBmr:
        "La cifra para perder peso queda por debajo de tu TMB estimada. No se recomienda comer por debajo de la TMB sin el consejo de un médico o de un dietista-nutricionista.",
    },
  },
};

export default es;
