import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HardyWeinbergText } from "../text/en";

const es: CalculatorTranslation<HardyWeinbergText> = {
  content: {
    title: "Calculadora del equilibrio de Hardy-Weinberg",
    shortTitle: "Hardy-Weinberg",
    summary: "Calcula las frecuencias alélicas y genotípicas a partir de la frecuencia de un rasgo recesivo, o contrasta recuentos de genotipos con el equilibrio.",
    metaTitle: "Calculadora de Hardy-Weinberg – Frecuencias alélicas y χ²",
    metaDescription:
      "Obtén p, q, p², 2pq y q² a partir de la proporción de personas con un rasgo recesivo, o contrasta recuentos de AA, Aa y aa con una prueba de chi cuadrado.",
    keywords: [
      "hardy-weinberg",
      "equilibrio de Hardy-Weinberg",
      "frecuencia alélica",
      "frecuencia genotípica",
      "p2 2pq q2",
      "frecuencia de portadores",
      "genética de poblaciones",
      "chi cuadrado",
    ],
    intro: [
      "El principio de Hardy-Weinberg establece que, si no actúan fuerzas evolutivas, las frecuencias alélicas y genotípicas se mantienen constantes de una generación a la siguiente. Para un gen con dos alelos, A con frecuencia p y a con frecuencia q, los genotipos aparecen entonces en las proporciones p², 2pq y q².",
      "Usa el primer modo cuando sepas lo frecuente que es un rasgo recesivo, por ejemplo para estimar cuántas personas son portadoras. Usa el segundo modo para comprobar si los recuentos de genotipos de una muestra se ajustan a las proporciones que predice el principio.",
    ],
    howToUse: [
      "Elige un punto de partida: la frecuencia del fenotipo recesivo o los recuentos de genotipos.",
      "En el modo de fenotipo, introduce en porcentaje la proporción de individuos que muestran el rasgo recesivo.",
      "En el modo de recuentos, introduce cuántos individuos AA, Aa y aa has observado.",
      "Consulta las frecuencias alélicas, la tabla de genotipos y, en el caso de los recuentos, el resultado de la prueba de chi cuadrado.",
    ],
    formulas: [
      {
        title: "Proporciones de equilibrio",
        expression: "p + q = 1;  p² + 2pq + q² = 1",
        explanation: "p² es la proporción de AA, 2pq la de Aa y q² la de aa.",
      },
      {
        title: "A partir del fenotipo recesivo",
        expression: "q = √q²;  p = 1 − q",
        explanation: "Solo los individuos aa muestran un rasgo recesivo, así que su proporción es igual a q².",
      },
      {
        title: "A partir de los recuentos de genotipos",
        expression: "p = (2·AA + Aa) ÷ (2N)",
        explanation: "Cada individuo porta dos alelos; N es el número total de individuos.",
      },
      {
        title: "Prueba de chi cuadrado",
        expression: "χ² = Σ (O − E)² ÷ E;  valor p = erfc(√(χ² ÷ 2))",
        explanation: "E = p²N, 2pqN y q²N. Con 1 grado de libertad, el valor p tiene esta forma cerrada.",
      },
    ],
    examples: [
      {
        title: "Una enfermedad recesiva en 1 de cada 2500 personas",
        steps: [
          "q² = 0,0004, así que q = 0,02 y p = 0,98",
          "2pq = 2 × 0,98 × 0,02 = 0,0392",
          "Alrededor del 3,92 % de las personas, aproximadamente 1 de cada 25,5, son portadoras",
        ],
      },
      {
        title: "Un rasgo recesivo presente en el 9 % de una población",
        steps: ["q = √0,09 = 0,3 y p = 0,7", "p² = 49 %, 2pq = 42 %, q² = 9 %"],
      },
      {
        title: "Contraste de 298 AA, 489 Aa y 213 aa",
        steps: [
          "N = 1000 y p = (2 × 298 + 489) ÷ 2000 = 0,5425",
          "Recuentos esperados ≈ 294,31, 496,39 y 209,31",
          "χ² ≈ 0,2215, valor p ≈ 0,638: compatible con el equilibrio",
        ],
      },
    ],
    assumptions: [
      "El modelo supone una población grande con apareamiento aleatorio, sin mutación, migración ni selección que afecten al gen.",
      "El modo de fenotipo supone un gen con dos alelos, dominancia completa y una población que ya está en equilibrio.",
      "La frecuencia del fenotipo se introduce en porcentaje (0–100), no como fracción entre 0 y 1.",
      "La prueba de chi cuadrado es una aproximación que funciona mejor cuando todos los recuentos esperados son de al menos 5.",
    ],
    faqs: [
      {
        question: "¿Por qué no basta con contar el fenotipo dominante?",
        answer: "Las personas AA y Aa tienen el mismo aspecto, así que el fenotipo dominante mezcla dos genotipos. El fenotipo recesivo corresponde solo a aa, y por eso q² es el punto de partida.",
      },
      {
        question: "¿Qué significa un valor p pequeño?",
        answer: "Por debajo de 0,05, los recuentos de genotipos observados difieren más de lo que normalmente explicaría el azar. Entre las posibles causas están la endogamia, la selección, la migración, la estructura de la población o los errores de genotipado.",
      },
      {
        question: "¿Por qué la prueba tiene solo 1 grado de libertad?",
        answer: "Hay tres clases de genotipos. Se pierde un grado porque los recuentos deben sumar N, y otro porque la frecuencia alélica p se estima a partir de los mismos datos.",
      },
    ],
    sourcesUsedFor: ["El principio de Hardy-Weinberg, p² + 2pq + q² = 1 y sus supuestos."],
  },
  text: {
    mode: "Partir de",
    modeOptions: { phenotype: "Frecuencia del fenotipo recesivo", counts: "Recuentos de genotipos" },
    q2: "Proporción con el rasgo recesivo (q²)",
    q2Help: "Introduce un porcentaje: 1 persona de cada 2500 es el 0,04 %.",
    countAA: "Individuos AA (homocigotos dominantes)",
    countAa: "Individuos Aa (heterocigotos)",
    countaa: "Individuos aa (homocigotos recesivos)",
    noIndividuals: "Introduce al menos un individuo.",
    carrier: "Frecuencia de portadores (2pq)",
    carrierRatio: "Portadores",
    oneIn: "Aproximadamente 1 de cada {n}",
    none: "Ninguno",
    alleleA: "Frecuencia del alelo A (p)",
    allelea: "Frecuencia del alelo a (q)",
    total: "Total de individuos (N)",
    chiSquare: "Chi cuadrado (χ², 1 grado de libertad)",
    pValue: "Valor p",
    verdict: "Resultado de la prueba al nivel del 5 %",
    consistent: "Sin desviación significativa del equilibrio",
    departure: "Desviación significativa del equilibrio",
    genotypes: { AA: "AA (homocigoto dominante)", Aa: "Aa (heterocigoto)", aa: "aa (homocigoto recesivo)" },
    frequencyCaption: "Frecuencias genotípicas esperadas",
    countsCaption: "Recuentos observados y esperados",
    colGenotype: "Genotipo",
    colFrequency: "Frecuencia",
    colPercent: "Porcentaje",
    colObserved: "Observados",
    colExpected: "Esperados",
    phenotypeNote: "Supone que la población está en equilibrio de Hardy-Weinberg, de modo que q = √q².",
    monomorphic: "Solo hay un alelo, así que cada genotipo coincide con su recuento esperado y la prueba de chi cuadrado no es aplicable.",
    smallExpected: "Al menos un recuento esperado es inferior a 5, así que el valor p de chi cuadrado es solo orientativo. Para muestras pequeñas, una prueba exacta es más fiable.",
    countsNote: "Los recuentos esperados son p²N, 2pqN y q²N. La prueba tiene 1 grado de libertad: 3 clases de genotipos menos 1, menos 1 por la frecuencia alélica estimada.",
  },
};

export default es;
