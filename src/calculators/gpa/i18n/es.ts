import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { GpaText } from "../text/en";

const es: CalculatorTranslation<GpaText> = {
  content: {
    title: "Calculadora de GPA",
    shortTitle: "GPA",
    summary: "Calcula la nota media ponderada por créditos (GPA) a partir de calificaciones con letra o puntos, y actualiza tu GPA acumulado.",
    metaTitle: "Calculadora de GPA – Nota media del semestre y acumulada",
    metaDescription:
      "Calcula el GPA del semestre con calificaciones con letra y créditos en escala de 4,0 o 4,3, y combínalo con tu GPA actual para obtener el nuevo acumulado.",
    keywords: ["calculadora GPA", "calcular GPA", "grade point average", "GPA acumulado", "nota media ponderada", "escala 4.0", "GPA universidad Estados Unidos"],
    intro: [
      "El GPA (grade point average, la nota media del sistema estadounidense) pondera los puntos de cada asignatura por sus créditos, de modo que una asignatura de 4 créditos cuenta más que una de 2.",
      "Escribe tus asignaturas con su calificación y sus créditos para ver el GPA de este semestre. Añade tu GPA actual y los créditos que ya has completado para ver tu nuevo GPA acumulado.",
    ],
    howToUse: [
      "Elige la escala de 4,0 o de 4,3 que usa tu centro (solo se diferencian en el valor de la A+).",
      "Introduce una asignatura por línea con su calificación y sus créditos, por ejemplo “Biología B+ 3”.",
      "Si quieres, introduce tu GPA acumulado actual y los créditos que abarca.",
      "Consulta el GPA del semestre, el nuevo GPA acumulado y la tabla por asignatura.",
    ],
    formulas: [
      { title: "GPA del semestre", expression: "GPA = Σ(puntos de la calificación × créditos) ÷ Σ créditos", explanation: "Los puntos de calidad de cada asignatura son sus puntos de calificación multiplicados por sus créditos." },
      {
        title: "GPA acumulado",
        expression: "Nuevo GPA = (GPA actual × créditos actuales + puntos de calidad del semestre) ÷ (créditos actuales + créditos del semestre)",
        explanation: "Combina tu expediente hasta ahora con el nuevo semestre, ponderado por créditos.",
      },
      {
        title: "Calificaciones con letra (escala de 4,0)",
        expression: "A = 4,0, A− = 3,7, B+ = 3,3, B = 3,0, B− = 2,7, C+ = 2,3, C = 2,0, C− = 1,7, D+ = 1,3, D = 1,0, D− = 0,7, F = 0",
        explanation: "La escala habitual en EE. UU. En la escala de 4,3, A+ = 4,3.",
      },
    ],
    examples: [
      {
        title: "Cuatro asignaturas en una escala de 4,0",
        steps: ["Puntos de calidad: 4,0 × 3 + 3,3 × 4 + 3,7 × 3 + 2,0 × 2 = 40,3", "Créditos: 3 + 4 + 3 + 2 = 12", "GPA = 40,3 ÷ 12 ≈ 3,36"],
      },
      {
        title: "Nuevo semestre sumado a un GPA de 3,2 con 45 créditos",
        steps: ["Semestre: (4,0 × 4 + 3,0 × 3) ÷ 7 = 25 ÷ 7 ≈ 3,57", "Acumulado: (3,2 × 45 + 25) ÷ (45 + 7) = 169 ÷ 52 = 3,25"],
      },
    ],
    assumptions: [
      "Las calificaciones con letra siguen la escala habitual de 4 puntos de EE. UU.; los centros que usan otras escalas, signos más o menos, o ponderaciones para asignaturas de honores pueden diferir.",
      "Deja fuera las asignaturas de apto/no apto y las anuladas, porque normalmente no cuentan para el GPA.",
      "Los resultados se redondean a dos decimales al mostrarlos; tu centro puede redondear o truncar de otra forma.",
    ],
    faqs: [
      { question: "¿Qué diferencia hay entre la escala de 4,0 y la de 4,3?", answer: "Solo la A+: algunos centros le dan 4,0 y otros 4,3. Todas las demás calificaciones valen los mismos puntos." },
      {
        question: "¿Puedo introducir porcentajes o notas numéricas?",
        answer: "Introduce directamente los puntos de la calificación (por ejemplo 3,5) en lugar de una letra. La conversión de porcentajes a puntos depende de la normativa de tu centro.",
      },
      {
        question: "¿Por qué una asignatura con más créditos cambia más mi GPA?",
        answer: "El GPA se pondera por créditos, así que cada crédito cuenta lo mismo. Una A en una asignatura de 4 créditos aporta el doble de puntos de calidad que una A en una de 2 créditos, así que acerca más tu GPA a 4,0, aunque no exactamente el doble.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    scale: "Escala de calificación",
    scales: { "4.0": "Escala de 4,0 (A+ = 4,0)", "4.3": "Escala de 4,3 (A+ = 4,3)" },
    courses: "Asignaturas",
    coursesHelp: "Una asignatura por línea: un nombre opcional, después la calificación (una letra como B+ o puntos como 3,3) y, por último, los créditos.",
    defaultCourses: "Cálculo A 4\nQuímica B+ 4\nHistoria A- 3\nArte C 2",
    priorGpa: "GPA acumulado actual",
    priorGpaHelp: "Opcional. Deja ambas casillas vacías para ver solo este semestre.",
    priorCredits: "Créditos ya completados",
    errors: {
      empty: "Introduce al menos una asignatura.",
      tooMany: "Introduce como máximo {max} asignaturas.",
      line: "Línea {line}: escribe una calificación y los créditos, por ejemplo “Biología B+ 3”.",
      grade: "Línea {line}: “{grade}” no es una calificación de esta escala.",
      credits: "Línea {line}: los créditos deben ser mayores que 0.",
      priorBoth: "Introduce tu GPA actual y los créditos que abarca, o ninguno de los dos.",
      priorRange: "Introduce un GPA entre 0 y {max} en esta escala.",
    },
    gpa: "GPA del semestre",
    caption: "{credits} créditos y {points} puntos de calidad.",
    cumulative: "Nuevo GPA acumulado",
    totalCredits: "Créditos de este semestre",
    qualityPoints: "Puntos de calidad",
    tableCaption: "Asignaturas",
    columns: { course: "Asignatura", points: "Puntos de calificación", credits: "Créditos", quality: "Puntos de calidad" },
    unnamed: "Asignatura {line}",
    note: "Las calificaciones con letra usan la escala habitual de 4 puntos de EE. UU. (A− = 3,7, B+ = 3,3 … D− = 0,7, F = 0). Comprueba la escala de tu centro; algunos ponderan de otra forma las asignaturas de honores o AP.",
  },
};

export default es;
