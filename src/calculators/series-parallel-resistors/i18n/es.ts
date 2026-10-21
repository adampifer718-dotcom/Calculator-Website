import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ResistorsText } from "../text/en";

const es: CalculatorTranslation<ResistorsText> = {
  content: {
    title: "Calculadora de resistencias en serie y en paralelo",
    shortTitle: "Resistencias en serie/paralelo",
    summary:
      "Calcula la resistencia total de hasta 50 resistencias conectadas en serie o en paralelo, además de la conductancia en paralelo.",
    metaTitle: "Calculadora de resistencias en serie y en paralelo – Total Ω",
    metaDescription:
      "Suma hasta 50 resistencias en serie o en paralelo para obtener la resistencia equivalente en Ω, kΩ o MΩ, además de la conductancia total en siemens.",
    keywords: [
      "calculadora de resistencias",
      "resistencias en serie",
      "resistencias en paralelo",
      "resistencia equivalente",
      "resistencia total",
      "resistencia en paralelo",
      "conductancia",
      "siemens",
      "ohmios",
    ],
    intro: [
      "Cuando las resistencias se unen una tras otra, en serie, la misma corriente pasa por cada una y sus resistencias simplemente se suman. Cuando se conectan una junto a otra, en paralelo, todas reciben la misma tensión y la corriente se reparte entre ellas, por lo que el conjunto se opone menos que cualquier resistencia por separado.",
      "Introduce una lista de valores de resistencia para obtener ambos totales a la vez. Elige la conexión que estás montando para que sea el resultado principal y la unidad en la que has escrito los valores. Los totales se muestran en la unidad más fácil de leer y también en ohmios.",
    ],
    howToUse: [
      "Elige si has escrito los valores en ohmios, kiloohmios o megaohmios.",
      "Elige serie o paralelo para decidir qué total es el resultado principal.",
      "Introduce de 1 a 50 resistencias, separadas por punto y coma, espacios o saltos de línea.",
      "Consulta la resistencia total, el total de la otra conexión y la conductancia en paralelo en siemens.",
    ],
    formulas: [
      {
        title: "Serie",
        expression: "R_total = R₁ + R₂ + … + Rₙ",
        explanation: "La misma corriente pasa por todas las resistencias, así que las caídas de tensión se suman.",
      },
      {
        title: "Paralelo",
        expression: "1 ÷ R_total = 1 ÷ R₁ + 1 ÷ R₂ + … + 1 ÷ Rₙ",
        explanation: "Cada resistencia soporta toda la tensión, así que las corrientes (y las conductancias) se suman.",
      },
      {
        title: "Conductancia",
        expression: "G = 1 ÷ R, en siemens (S)",
        explanation: "La conductancia total en paralelo es la suma de las conductancias individuales.",
      },
    ],
    examples: [
      {
        title: "220 Ω, 470 Ω y 1 kΩ en serie",
        steps: [
          "R_total = 220 + 470 + 1.000 = 1.690 Ω",
          "Se muestra como 1,69 kΩ",
          "En paralelo, las mismas tres darían unos 130,325 Ω",
        ],
      },
      {
        title: "4,7 kΩ, 10 kΩ y 22 kΩ en paralelo",
        steps: [
          "G = 1/4.700 + 1/10.000 + 1/22.000 ≈ 0,000358221 S",
          "R_total = 1 ÷ 0,000358221 ≈ 2.791,58 Ω",
          "Se muestra como 2,79158 kΩ, menos que la resistencia más pequeña (4,7 kΩ)",
        ],
      },
      {
        title: "Tres resistencias iguales de 330 Ω en paralelo",
        steps: ["Resistencias iguales en paralelo: R_total = R ÷ n", "330 ÷ 3 = 110 Ω", "En serie darían 990 Ω"],
      },
    ],
    assumptions: [
      "Las resistencias son ideales: sus valores no cambian con la temperatura, la corriente ni la frecuencia, y los cables de conexión no tienen resistencia.",
      "Todas las resistencias forman una única cadena en serie o un único grupo en paralelo. Para redes mixtas, combina cada grupo paso a paso e introduce los totales parciales.",
      "Las resistencias reales tienen una tolerancia (a menudo ±1 % o ±5 %), así que un total medido puede diferir del calculado.",
      "Los resultados se muestran con 6 cifras significativas en la unidad legible y con 12 cifras significativas en ohmios.",
    ],
    faqs: [
      {
        question: "¿Por qué la resistencia en paralelo es menor que cada una de las resistencias?",
        answer:
          "Cada resistencia añadida en paralelo ofrece a la corriente otro camino, lo que aumenta la conductancia total. La resistencia total, su inversa, baja por tanto por debajo del valor individual más pequeño. Dos resistencias de 1 kΩ en paralelo dan 500 Ω.",
      },
      {
        question: "¿Hay un atajo para dos resistencias en paralelo?",
        answer:
          "Sí: R_total = (R₁ × R₂) ÷ (R₁ + R₂), el producto entre la suma. Para 6 Ω y 3 Ω son 18 ÷ 9 = 2 Ω. Para más de dos resistencias, suma las inversas.",
      },
      {
        question: "¿Qué es un siemens?",
        answer:
          "El siemens (S) es la unidad de conductancia del SI, la inversa del ohmio. Una resistencia de 100 Ω tiene una conductancia de 0,01 S. Sustituye al antiguo nombre «mho».",
      },
    ],
    sourcesUsedFor: [
      "Resistencia equivalente de resistencias en serie (la suma) y en paralelo (la inversa de la suma de las inversas).",
    ],
  },
  text: {
    unit: "Unidad de los valores",
    unitOptions: { ohm: "Ω (ohmios)", kohm: "kΩ (kiloohmios)", megohm: "MΩ (megaohmios)" },
    connection: "Conexión",
    connectionHelp: "Elige qué total mostrar como resultado principal. El otro aparece debajo.",
    connectionOptions: { series: "Serie", parallel: "Paralelo" },
    values: "Resistencias",
    valuesHelp: "De 1 a 50 valores, separados por punto y coma, espacios o saltos de línea. Cada uno debe ser mayor que 0.",
    errors: {
      empty: "Introduce al menos una resistencia.",
      tooMany: "Introduce como máximo {max} resistencias.",
      notNumber: "«{token}» no es un número. Separa los valores con punto y coma, espacios o saltos de línea.",
      tooLarge: "«{token}» es demasiado grande.",
    },
    maxCount: "Introduce como máximo {max} resistencias.",
    notPositive: "Todas las resistencias deben ser mayores que 0 ({value} no lo es).",
    tooBig: "{value} es demasiado grande. Cada valor puede ser como máximo {max}.",
    series: "Resistencia total en serie",
    parallel: "Resistencia total en paralelo",
    seriesOhms: "Resistencia en serie en ohmios",
    parallelOhms: "Resistencia en paralelo en ohmios",
    conductance: "Conductancia total en paralelo",
    count: {
      zero: "{n} resistencias",
      one: "{n} resistencia",
      two: "{n} resistencias",
      few: "{n} resistencias",
      many: "{n} resistencias",
      other: "{n} resistencias",
    },
    caption: "Conexión en {connection}: {count}.",
    connectionWords: { series: "serie", parallel: "paralelo" },
    single: "Con una sola resistencia, los totales en serie y en paralelo son simplemente su propia resistencia.",
    parallelNote: "Un total en paralelo siempre es menor que la resistencia más pequeña del grupo ({smallest}).",
    table: "Cada resistencia",
    resistorColumn: "Resistencia",
    ohmsColumn: "Valor",
    conductanceColumn: "Conductancia",
    resistorLabel: "R{i}",
  },
};

export default es;
