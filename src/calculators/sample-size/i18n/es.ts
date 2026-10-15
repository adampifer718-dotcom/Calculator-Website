import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SampleSizeText } from "../text/en";

const es: CalculatorTranslation<SampleSizeText> = {
  content: {
    title: "Calculadora de tamaño de muestra",
    shortTitle: "Tamaño de muestra",
    summary:
      "Calcula cuántas respuestas de encuesta necesitas para un nivel de confianza y un margen de error dados, con un tamaño de población opcional.",
    metaTitle: "Calculadora de tamaño de muestra – Respuestas necesarias",
    metaDescription:
      "Calcula cuántas respuestas completas necesitas según el nivel de confianza, el margen de error y la proporción esperada, con corrección por población finita.",
    keywords: [
      "tamaño de muestra",
      "calcular tamaño de muestra",
      "tamaño muestral encuesta",
      "cuántas personas encuestar",
      "margen de error",
      "nivel de confianza",
      "corrección por población finita",
      "muestra estadística",
    ],
    intro: [
      "Antes de lanzar una encuesta o un sondeo hay que decidir a cuántas personas preguntar. Con pocas respuestas el resultado es amplio e impreciso; con demasiadas se pierde tiempo y dinero. Esta calculadora encuentra el menor número de respuestas completas que estima un porcentaje con la precisión que elijas.",
      "Elige un nivel de confianza, el margen de error que puedes aceptar y, si la conoces, tu mejor estimación del resultado. Si el grupo que estudias es pequeño, como los 600 empleados de una empresa, introduce también su tamaño: la corrección por población finita reduce el número necesario.",
    ],
    howToUse: [
      "Elige un nivel de confianza. El 95 % es la opción más habitual.",
      "Introduce el margen de error en puntos porcentuales; por ejemplo, 5 para ±5 puntos.",
      "Introduce la proporción que esperas. Déjala en el 50 % si no estás seguro: así se obtiene la muestra más grande.",
      "Si quieres, introduce el tamaño de la población. Déjalo vacío para una población grande o desconocida.",
      "Consulta el tamaño de muestra necesario. Siempre se redondea hacia arriba a una respuesta entera.",
    ],
    formulas: [
      {
        title: "Tamaño de muestra para una población grande",
        expression: "n₀ = z*² × p × (1 − p) ÷ E²",
        explanation:
          "z* es el valor crítico del nivel de confianza (1,96 para el 95 %), p la proporción esperada y E el margen de error, ambos en forma decimal.",
      },
      {
        title: "Corrección por población finita",
        expression: "n = n₀ ÷ (1 + (n₀ − 1) ÷ N)",
        explanation: "N es el tamaño de la población. La corrección importa cuando la muestra es una parte apreciable de la población.",
      },
      {
        title: "Redondeo",
        expression: "tamaño de muestra = ⌈n⌉",
        explanation: "El resultado se redondea hacia arriba, porque redondear hacia abajo daría un margen de error algo mayor que el pedido.",
      },
    ],
    examples: [
      {
        title: "Un sondeo nacional al 95 % de confianza y ±5 puntos",
        steps: ["z* = 1,95996 para un 95 % de confianza", "n₀ = 1,95996² × 0,5 × 0,5 ÷ 0,05² ≈ 384,15", "Redondeo hacia arriba: 385 respuestas completas"],
      },
      {
        title: "Una encuesta a una plantilla de 2.400 empleados al 99 % de confianza, ±3 puntos y un 30 % esperado",
        steps: [
          "z* = 2,57583 para un 99 % de confianza",
          "n₀ = 2,57583² × 0,3 × 0,7 ÷ 0,03² ≈ 1.548,14",
          "n = 1.548,14 ÷ (1 + 1.547,14 ÷ 2.400) ≈ 941,32",
          "Redondeo hacia arriba: 942 respuestas",
        ],
      },
      {
        title: "Estimar un 12 % de piezas defectuosas al 90 % de confianza y ±4 puntos",
        steps: ["z* = 1,64485 para un 90 % de confianza", "n₀ = 1,64485² × 0,12 × 0,88 ÷ 0,04² ≈ 178,57", "Redondeo hacia arriba: 179 piezas que inspeccionar"],
      },
    ],
    assumptions: [
      "La fórmula supone un muestreo aleatorio simple: todos los miembros de la población tienen la misma probabilidad de ser elegidos.",
      "Dimensiona una muestra para estimar una sola proporción (un porcentaje de respuestas sí/no), no una media ni una diferencia entre grupos.",
      "Se basa en la aproximación normal de la distribución muestral de una proporción, que funciona bien cuando el número esperado de respuestas «sí» y «no» es de al menos unas 10 en cada caso.",
      "El resultado es el número de respuestas completas. No incluye la falta de respuesta, los abandonos ni las respuestas inservibles, así que conviene contactar con más personas.",
      "Los valores críticos proceden de una inversión numérica de la distribución normal con una precisión de unas nueve cifras significativas.",
    ],
    faqs: [
      {
        question: "¿Por qué el 50 % da la muestra más grande?",
        answer:
          "El producto p × (1 − p) es máximo cuando p = 0,5, donde vale 0,25. Cualquier otra proporción esperada necesita menos respuestas para el mismo margen de error, por lo que el 50 % es la opción segura cuando no tienes una estimación previa.",
      },
      {
        question: "¿Una población mayor necesita una muestra mucho mayor?",
        answer:
          "En realidad no. Cuando la población es grande, la muestra necesaria apenas cambia: al 95 % de confianza y ±5 puntos necesitas 383 respuestas para una población de 100.000 y 385 para una de 100 millones. El tamaño de la población solo importa cuando se muestrea una parte considerable de ella.",
      },
      {
        question: "¿A cuántas personas debo invitar?",
        answer:
          "Divide el tamaño de muestra entre la tasa de respuesta que esperas. Si necesitas 385 respuestas completas y esperas que conteste el 20 % de las personas, invita a unas 385 ÷ 0,20 ≈ 1.925 personas.",
      },
    ],
    sourcesUsedFor: [
      "Tamaño de muestra para estimar una proporción, n = z²·p(1 − p)/E², y uso de p = 0,5 cuando no hay estimación previa.",
      "Cuándo y por qué se aplica la corrección por población finita.",
    ],
  },
  text: {
    level: "Nivel de confianza",
    levelHelp: "Con qué seguridad quieres que la proporción real quede dentro del margen de error.",
    levelOptions: { "80": "80 %", "90": "90 %", "95": "95 %", "98": "98 %", "99": "99 %" },
    margin: "Margen de error",
    marginHelp: "La distancia ± que puedes aceptar, en puntos porcentuales. Por ejemplo, 5 significa ±5 puntos.",
    proportion: "Proporción esperada",
    proportionHelp:
      "Tu mejor estimación de la parte que responderá «sí». Usa el 50 % si no tienes ni idea: da la muestra más grande y segura.",
    proportionMax: "Debe ser inferior al 100 %.",
    population: "Tamaño de la población (opcional)",
    populationHelp: "Número total de personas o elementos que podrías muestrear. Déjalo vacío para una población muy grande o desconocida.",
    sampleSize: "Tamaño de muestra necesario",
    caption: "Respuestas completas necesarias con un {level} de confianza y ±{margin}.",
    infinite: "Tamaño de muestra antes de la corrección (n₀)",
    infiniteRounded: "n₀ redondeado hacia arriba",
    critical: "Valor crítico (z*)",
    correction: "Corrección por población finita",
    correctionApplied: "Aplicada (población de {population})",
    correctionNotApplied: "No aplicada (no se indicó el tamaño de la población)",
    share: "Parte de la población muestreada",
    responseNote:
      "Es el número de respuestas completas. Si esperas que solo responda una parte de las personas, divide entre la tasa de respuesta esperada para saber a cuántas invitar.",
    wholePopulation: "La muestra abarca toda la población o casi toda, así que puede ser más sencillo encuestar a todo el mundo.",
  },
};

export default es;
