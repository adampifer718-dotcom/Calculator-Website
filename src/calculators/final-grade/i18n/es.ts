import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FinalGradeText } from "../text/en";

const es: CalculatorTranslation<FinalGradeText> = {
  content: {
    title: "Calculadora de nota del examen final",
    shortTitle: "Nota del examen final",
    summary: "Calcula la nota que necesitas en el examen final para alcanzar la nota global de la asignatura que quieres.",
    metaTitle: "Calculadora de nota del examen final – Nota necesaria",
    metaDescription:
      "Calcula qué nota necesitas en el examen final para llegar a la nota global que buscas, a partir de tu nota actual y del peso del examen final.",
    keywords: ["nota del examen final", "examen final", "qué nota necesito en el final", "nota necesaria", "nota de la asignatura", "nota ponderada", "calcular nota final"],
    intro: [
      "Cerca del final de una asignatura, la gran pregunta suele ser qué nota necesitas en el examen final. Tu nota global es una media ponderada: tu nota actual cuenta una parte y el examen final el resto.",
      "Introduce tu nota hasta ahora, cuánto vale el examen final y la nota global a la que aspiras. La calculadora da la nota del examen final que te permite conseguirla y muestra la mejor y la peor nota global que podrías obtener.",
    ],
    howToUse: [
      "Introduce tu nota actual en la asignatura como porcentaje.",
      "Introduce el peso del examen final, tal como figura en tu programa o guía docente.",
      "Introduce la nota global con la que quieres terminar.",
      "Consulta la nota que necesitas en el examen final y la nota global con una puntuación perfecta o con un cero.",
    ],
    formulas: [
      { title: "Nota necesaria en el final", expression: "necesaria = (deseada − actual × (1 − w)) ÷ w", explanation: "w es el peso del examen final como fracción (30 % = 0,3). Las notas son porcentajes." },
      { title: "Nota global", expression: "global = actual × (1 − w) + final × w", explanation: "La nota de la asignatura como media ponderada de lo que tienes ahora y el examen final." },
    ],
    examples: [
      {
        title: "Un 78 % ahora, el final vale un 25 % y aspiras a un 80 %",
        steps: ["w = 0,25, así que la nota actual cuenta 0,75", "necesaria = (80 − 78 × 0,75) ÷ 0,25", "= (80 − 58,5) ÷ 0,25 = 86 %"],
      },
      {
        title: "Un 91 % ahora, el final vale un 40 % y aspiras a un 90 %",
        steps: ["necesaria = (90 − 91 × 0,6) ÷ 0,4", "= (90 − 54,6) ÷ 0,4 = 88,5 %"],
      },
      {
        title: "Un 65 % ahora, el final vale un 20 % y aspiras a un 75 %",
        steps: ["necesaria = (75 − 65 × 0,8) ÷ 0,2", "= (75 − 52) ÷ 0,2 = 115 %", "Más del 100 %, así que este objetivo requiere puntos extra"],
      },
    ],
    assumptions: [
      "Tu nota actual ya refleja todas las demás partes de la asignatura, que en conjunto cuentan el 100 % menos el peso del examen final.",
      "Las notas son porcentajes. No se aplican los cortes de las calificaciones con letras, los redondeos ni las curvas, que varían según el profesor.",
      "Algunas asignaturas descartan la nota más baja, permiten que el final sustituya a un parcial o exigen una nota mínima en el final. Consulta tu programa para ver si hay normas así.",
    ],
    faqs: [
      {
        question: "¿Cómo sé cuál es mi nota actual?",
        answer: "Suele aparecer en la plataforma de la asignatura o te la puede dar el profesor. Si no, calcula la media ponderada de todas las notas que tienes hasta ahora, con los pesos del programa y sin contar el examen final.",
      },
      {
        question: "¿Qué significa que necesite más del 100 %?",
        answer: "Ni siquiera una puntuación perfecta en el final elevaría tu nota global hasta el objetivo. Quizá aún puedas alcanzarlo con puntos extra; si no, apunta a un objetivo más bajo.",
      },
      {
        question: "¿Y si el resultado es 0 % o menos?",
        answer: "Entonces tu objetivo ya está asegurado: aunque no saques ningún punto en el final, tu nota global se queda en el objetivo o por encima. Comprueba que se permite no presentarse al examen, porque algunas asignaturas obligan a hacerlo.",
      },
    ],
    sourcesUsedFor: ["Cómo la nota de una asignatura es una media ponderada de las partes que figuran en el programa, incluido el examen final."],
  },
  text: {
    current: "Nota actual",
    currentHelp: "Tu nota en la asignatura hasta ahora, antes del examen final.",
    weight: "Peso del examen final",
    weightHelp: "Qué parte de la nota global vale el examen final, en porcentaje. Consulta tu programa.",
    desired: "Nota global que quieres",
    weightTooHigh: "El examen final debe valer menos del 100 % de la nota; si no, tu nota actual no cuenta.",
    needed: "Nota necesaria en el final",
    caption: "Para terminar con {desired} cuando el final cuenta un {weight} y ahora tienes {current}.",
    ifFull: "Nota global si sacas un 100 % en el final",
    ifZero: "Nota global si sacas un 0 % en el final",
    currentShare: "Peso de la nota actual en la nota global",
    notes: {
      over: "Necesitarías más del 100 % en el final. Solo es posible con puntos extra; si no, este objetivo está fuera de tu alcance.",
      secured: "Ya tienes esta nota asegurada: incluso con un 0 % en el final te quedas en tu objetivo o por encima.",
      rounding: "El profesorado puede redondear o ajustar las notas con una curva, o ponderar el final de otra manera. Consulta tu programa.",
    },
  },
};

export default es;
