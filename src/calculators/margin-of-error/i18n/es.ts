import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MarginOfErrorText } from "../text/en";

const es: CalculatorTranslation<MarginOfErrorText> = {
  content: {
    title: "Calculadora de margen de error",
    shortTitle: "Margen de error",
    summary:
      "Calcula el margen de error ± de un porcentaje de encuesta o sondeo a partir del tamaño de la muestra, el resultado y el nivel de confianza.",
    metaTitle: "Calculadora de margen de error – Proporciones de encuestas",
    metaDescription:
      "Calcula el margen de error ± de un porcentaje de sondeo o encuesta según el tamaño de la muestra y el nivel de confianza, con el intervalo y el error estándar.",
    keywords: [
      "margen de error",
      "calcular margen de error",
      "margen de error encuesta",
      "margen de error sondeo",
      "más o menos",
      "error muestral",
      "intervalo de confianza proporción",
      "error estándar de una proporción",
    ],
    intro: [
      "Cuando un sondeo indica que el 47 % de los votantes apoya un plan, el «±3 puntos» es su margen de error: el rango alrededor del resultado en el que probablemente está la cifra real de la población. Esta calculadora obtiene ese margen para cualquier porcentaje de encuesta.",
      "Introduce cuántas personas respondieron, la parte que dio la respuesta que comunicas y el nivel de confianza. La calculadora devuelve el margen de error en puntos porcentuales, el intervalo de confianza y el error estándar.",
      "Esta herramienta es para proporciones (porcentajes de respuestas sí/no). Si estimas la media de una medida, como la estatura o el gasto, usa la Calculadora de intervalos de confianza.",
    ],
    howToUse: [
      "Introduce el tamaño de la muestra: el número de respuestas completas.",
      "Introduce la proporción observada como porcentaje. Usa el 50 % para obtener el mayor margen posible con ese tamaño de muestra.",
      "Elige el nivel de confianza.",
      "Si la muestra es una parte grande de una población conocida y limitada, introduce el tamaño de la población para aplicar la corrección por población finita.",
      "Consulta el margen de error y el intervalo que da alrededor de tu resultado.",
    ],
    formulas: [
      {
        title: "Error estándar de una proporción",
        expression: "EE = √(p × (1 − p) ÷ n)",
        explanation: "p es la proporción observada en forma decimal y n el tamaño de la muestra.",
      },
      {
        title: "Margen de error",
        expression: "ME = z* × EE",
        explanation: "z* es el valor crítico del nivel de confianza: 1,645 para el 90 %, 1,960 para el 95 % y 2,576 para el 99 %.",
      },
      {
        title: "Corrección por población finita",
        expression: "ME = z* × EE × √((N − n) ÷ (N − 1))",
        explanation: "Se usa cuando se introduce un tamaño de población N. Reduce el margen cuando la muestra es una parte grande de la población.",
      },
      {
        title: "Intervalo de confianza",
        expression: "de p − ME a p + ME",
        explanation: "El intervalo se limita al rango del 0 % al 100 %.",
      },
    ],
    examples: [
      {
        title: "Un sondeo a 1.000 personas con un resultado del 50 % al 95 % de confianza",
        steps: ["EE = √(0,5 × 0,5 ÷ 1.000) ≈ 0,015811", "ME = 1,95996 × 0,015811 ≈ 0,030990", "Margen ≈ ±3,10 puntos; intervalo ≈ del 46,90 % al 53,10 %"],
      },
      {
        title: "600 clientes, un 42 % satisfechos, al 90 % de confianza",
        steps: ["EE = √(0,42 × 0,58 ÷ 600) ≈ 0,020149", "ME = 1,64485 × 0,020149 ≈ 0,033143", "Margen ≈ ±3,31 puntos; intervalo ≈ del 38,69 % al 45,31 %"],
      },
      {
        title: "400 de los 3.000 alumnos de un centro, un 35 % de acuerdo, al 99 % de confianza",
        steps: [
          "EE antes de la corrección = √(0,35 × 0,65 ÷ 400) ≈ 0,023848",
          "Corrección = √(2.600 ÷ 2.999) ≈ 0,93110",
          "ME = 2,57583 × 0,023848 × 0,93110 ≈ 0,057197, es decir, unos ±5,72 puntos",
        ],
      },
    ],
    assumptions: [
      "La muestra es una muestra aleatoria simple de la población. Los sondeos en línea autoseleccionados, las muestras por cuotas y los paneles ponderados pueden tener errores mayores de lo que indica esta fórmula.",
      "El margen solo cubre el error aleatorio de muestreo. No tiene en cuenta la falta de respuesta, las preguntas mal formuladas ni las respuestas falsas.",
      "Usa la aproximación normal (de Wald), que es poco fiable cuando menos de unas 10 respuestas caen en alguna de las dos categorías; en ese caso la calculadora te avisa.",
      "Los valores críticos se calculan numéricamente y coinciden con las tablas estándar con muchas más cifras de las que se muestran.",
    ],
    faqs: [
      {
        question: "¿Qué significa un margen de error de ±3 puntos?",
        answer:
          "Con un 95 % de confianza, si repitieras la encuesta muchas veces con nuevas muestras aleatorias, alrededor del 95 % de los intervalos construidos así contendrían el porcentaje real de la población. No garantiza que el valor real esté a menos de 3 puntos.",
      },
      {
        question: "¿Cómo reduzco el margen de error a la mitad?",
        answer:
          "El margen disminuye con la raíz cuadrada del tamaño de la muestra, así que reducirlo a la mitad requiere unas cuatro veces más respuestas. Pasar de ±3,1 puntos con 1.000 personas a unos ±1,55 puntos exige aproximadamente 4.000 personas.",
      },
      {
        question: "¿Sirve para medias?",
        answer:
          "No. Esta calculadora trabaja con porcentajes de respuestas sí/no. Para la media de una medida numérica, usa la Calculadora de intervalos de confianza, que parte de la media y la desviación típica.",
      },
    ],
    sourcesUsedFor: [
      "Cota de error para una proporción, z·√(p′q′/n), y el intervalo p′ ± cota de error.",
      "La corrección por población finita √((N − n)/(N − 1)).",
    ],
  },
  text: {
    n: "Tamaño de la muestra (n)",
    nHelp: "Número de respuestas completas.",
    proportion: "Proporción observada",
    proportionHelp: "Parte de la muestra que dio la respuesta que comunicas. Usa el 50 % para obtener el margen más amplio y conservador.",
    level: "Nivel de confianza",
    levelOptions: { "80": "80 %", "90": "90 %", "95": "95 %", "98": "98 %", "99": "99 %" },
    population: "Tamaño de la población (opcional)",
    populationHelp: "Tamaño total del grupo del que se extrajo la muestra. Déjalo vacío para una población muy grande o desconocida.",
    populationTooSmall: "La población no puede ser menor que la muestra ({n}).",
    margin: "Margen de error (± puntos porcentuales)",
    caption: "{p} ± {moe} con un {level} de confianza.",
    interval: "Intervalo de confianza",
    intervalText: "De {lower} a {upper}",
    standardError: "Error estándar",
    critical: "Valor crítico (z*)",
    correction: "Factor de corrección por población finita",
    correctionNone: "No aplicado",
    weakApproximation:
      "Menos de 10 respuestas caen en uno de los lados (n × p = {yes}, n × (1 − p) = {no}). Aquí la aproximación normal es poco fiable, así que toma este margen como orientativo; un intervalo exacto o de Wilson es más fiable.",
    census: "La muestra abarca toda la población, así que no hay error de muestreo.",
    clipped: "El intervalo se ha recortado en {bound} porque una proporción no puede superar ese límite.",
    meansNote: "Este margen es para un porcentaje (proporción). Para la media de una medida, usa la Calculadora de intervalos de confianza.",
  },
};

export default es;
