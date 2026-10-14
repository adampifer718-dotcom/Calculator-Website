import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BmrText } from "../text/en";

const es: CalculatorTranslation<BmrText> = {
  content: {
    title: "Calculadora de metabolismo basal (TMB)",
    shortTitle: "Metabolismo basal",
    summary: "Estima tu tasa metabólica basal (las calorías que gastas en reposo) con la ecuación de Mifflin-St Jeor.",
    metaTitle: "Calculadora de metabolismo basal (TMB) – Mifflin-St Jeor",
    metaDescription:
      "Estima tu tasa metabólica basal (TMB) en kcal y kJ al día con la ecuación de Mifflin-St Jeor, en unidades métricas o imperiales.",
    keywords: ["metabolismo basal", "tasa metabólica basal", "calcular TMB", "calorías en reposo", "Mifflin-St Jeor", "gasto energético en reposo", "kcal al día"],
    intro: [
      "La tasa metabólica basal (TMB) es la energía que tu cuerpo consume en reposo absoluto para mantenerte con vida. Es el punto de partida para estimar las calorías que necesitas al día.",
      "Esta calculadora usa la ecuación de Mifflin-St Jeor, una estimación muy utilizada para adultos sanos.",
    ],
    howToUse: [
      "Elige unidades métricas o imperiales.",
      "Elige el sexo que se usa en la ecuación e introduce tu edad.",
      "Introduce tu peso y tu altura.",
      "Consulta tu TMB estimada en kcal y kJ al día.",
    ],
    formulas: [
      {
        title: "Mifflin-St Jeor",
        expression: "TMB = 10 × peso (kg) + 6,25 × altura (cm) − 5 × edad (años) + s\ns = +5 para hombres, −161 para mujeres",
        explanation: "Resultado en kilocalorías al día.",
      },
      { title: "Unidades de energía", expression: "1 kcal = 4,184 kJ", explanation: "La caloría termoquímica." },
    ],
    examples: [
      {
        title: "Hombre, 30 años, 80 kg, 180 cm",
        steps: ["10 × 80 + 6,25 × 180 − 5 × 30 + 5", "= 800 + 1125 − 150 + 5 = 1780 kcal/día"],
      },
      {
        title: "Mujer, 25 años, 60 kg, 165 cm",
        steps: ["10 × 60 + 6,25 × 165 − 5 × 25 − 161", "≈ 1345 kcal/día"],
      },
    ],
    assumptions: [
      "Para adultos sanos. No es adecuada para niños, embarazadas ni personas con enfermedades que afecten al metabolismo.",
      "Las ecuaciones estiman valores medios; la TMB de cada persona puede variar un 10 % o más.",
      "Esto no es un consejo médico ni dietético. Consulta a un profesional sanitario o a un dietista-nutricionista.",
    ],
    faqs: [
      {
        question: "¿Qué diferencia hay entre la TMB y las calorías diarias que necesito?",
        answer: "La TMB solo cubre el reposo. Las necesidades diarias suman la energía de la actividad física y la digestión, por lo que son mayores.",
      },
      {
        question: "¿Por qué la ecuación tiene en cuenta el sexo?",
        answer: "El estudio original ajustó constantes distintas para hombres y mujeres porque, de media, la composición corporal es diferente.",
      },
      {
        question: "¿Por qué baja la TMB con la edad?",
        answer: "La masa muscular y el ritmo metabólico tienden a disminuir con la edad, algo que refleja el término −5 × edad.",
      },
    ],
    sourcesUsedFor: ["La ecuación de Mifflin-St Jeor y sus coeficientes."],
  },
  text: {
    units: "Unidades",
    unitOptions: { metric: "Métricas (kg, cm)", imperial: "Imperiales (lb, ft, in)" },
    sex: "Sexo usado en la ecuación",
    sexHelp: "La ecuación tiene constantes distintas para hombres y mujeres.",
    sexes: { male: "Hombre", female: "Mujer" },
    age: "Edad",
    weight: "Peso",
    height: "Altura",
    heightFt: "Altura (pies)",
    heightIn: "Altura (pulgadas)",
    heightZero: "Introduce una altura mayor que 0.",
    bmr: "Tasa metabólica basal",
    caption: "Energía estimada que consumes en reposo absoluto.",
    kj: "En kilojulios",
    kcalDay: "kcal/día",
    kjDay: "kJ/día",
    note: "Una estimación para adultos sanos. Los resultados individuales pueden variar un 10 % o más; no es una pauta de dieta ni de tratamiento.",
  },
};

export default es;
