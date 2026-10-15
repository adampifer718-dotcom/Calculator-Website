import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PlantSpacingText } from "../text/en";

const es: CalculatorTranslation<PlantSpacingText> = {
  content: {
    title: "Calculadora de marco de plantación",
    shortTitle: "Marco de plantación",
    summary: "Calcula cuántas plantas caben en un bancal rectangular con una separación dada, en hileras rectas o al tresbolillo.",
    metaTitle: "Calculadora de marco de plantación – Plantas por bancal",
    metaDescription:
      "Calcula cuántas plantas caben en un bancal según la separación entre plantas y entre hileras, en cuadrícula o al tresbolillo, y las plantas por m² o ft².",
    keywords: [
      "marco de plantación",
      "distancia entre plantas",
      "separación entre plantas",
      "cuántas plantas caben",
      "plantación al tresbolillo",
      "diseño de bancales",
      "distancia entre hileras",
      "densidad de plantación",
    ],
    intro: [
      "Los sobres de semillas y las etiquetas de las plantas indican una separación recomendada. Convertirla en un número de plantas para un bancal concreto es aritmética sencilla, pero es fácil olvidar que las plantas exteriores también necesitan espacio.",
      "Esta calculadora deja cada planta al menos a media separación del borde del bancal, de modo que las plantas del perímetro tengan el mismo espacio que las del centro. Sirve para hileras rectas y para el tresbolillo (patrón triangular), en el que cada hilera se desplaza media separación.",
    ],
    howToUse: [
      "Elige la unidad e introduce el largo y el ancho del bancal.",
      "Elige hileras rectas o tresbolillo.",
      "Introduce la separación entre plantas y, para hileras rectas, la separación entre hileras.",
      "Consulta cuántas plantas caben, la densidad de plantación y la disposición de las hileras.",
    ],
    formulas: [
      {
        title: "Hileras rectas",
        expression: "plantas = ⌊L ÷ s⌋ × ⌊W ÷ r⌋",
        explanation: "L y W son el largo y el ancho del bancal, s la separación dentro de una hilera y r la separación entre hileras. Dejando libre media separación en cada borde, una hilera de longitud L admite ⌊L ÷ s⌋ plantas.",
      },
      {
        title: "Hileras al tresbolillo",
        expression: "h = s × √3 ÷ 2\nhileras = ⌊(W − s) ÷ h⌋ + 1 (0 si W < s)",
        explanation: "Cada planta está a la misma distancia s de sus vecinas, así que las hileras solo quedan a unos 0,866 s entre sí.",
      },
      {
        title: "Plantas al tresbolillo",
        expression: "hileras completas: ⌊L ÷ s⌋ plantas\nhileras desplazadas: max(0, ⌊L ÷ s − 0,5⌋) plantas",
        explanation: "Las hileras se alternan, empezando por una completa; las desplazadas se mueven media separación y pueden tener una planta menos.",
      },
      {
        title: "Densidad",
        expression: "densidad = plantas ÷ (L × W)",
        explanation: "Se muestra por metro cuadrado con unidades métricas y por pie cuadrado con unidades estadounidenses.",
      },
    ],
    examples: [
      {
        title: "Pimientos en un bancal de 12 ft × 4 ft, a 18 in en hileras separadas 2 ft",
        steps: [
          "Plantas por hilera: ⌊12 ÷ 1,5⌋ = 8",
          "Hileras: ⌊4 ÷ 2⌋ = 2",
          "Total: 8 × 2 = 16 plantas, o 16 ÷ 48 ft² ≈ 0,33 por ft²",
        ],
      },
      {
        title: "Lechugas en un bancal de 300 cm × 120 cm, al tresbolillo a 40 cm",
        steps: [
          "Distancia entre hileras: 40 × √3 ÷ 2 ≈ 34,64 cm",
          "Hileras: ⌊(120 − 40) ÷ 34,64⌋ + 1 = 2 + 1 = 3",
          "Hileras completas: ⌊300 ÷ 40⌋ = 7; hilera desplazada: ⌊7,5 − 0,5⌋ = 7",
          "Total: 2 × 7 + 1 × 7 = 21 plantas",
        ],
      },
      {
        title: "Zanahorias en una jardinera de 48 in × 24 in, a 3 in en ambos sentidos",
        steps: [
          "Plantas por hilera: ⌊48 ÷ 3⌋ = 16",
          "Hileras: ⌊24 ÷ 3⌋ = 8",
          "Total: 16 × 8 = 128 plantas en 8 ft², o 16 por ft²",
        ],
      },
    ],
    assumptions: [
      "El bancal es un rectángulo sin caminos, bordillos ni obstáculos en su interior. Mide solo la zona plantada.",
      "Las plantas quedan al menos a media separación de cada borde, de modo que los bancales o caminos vecinos comparten el hueco. Si tu bancal está junto a una pared, quizá quepan algunas plantas más.",
      "Las hileras van a lo largo del bancal. Las separaciones recomendadas varían según la variedad, el suelo y el clima; sigue las indicaciones del sobre de semillas o de los servicios de extensión agraria locales.",
      "Los recuentos corresponden a la disposición final de las plantas. Siembra semilla de más y aclara, o compra algunos plantones de reserva, para cubrir las pérdidas.",
    ],
    faqs: [
      {
        question: "¿Caben más plantas al tresbolillo?",
        answer: "En bancales grandes, sí: con la misma separación caben aproximadamente un 15 % más de plantas, porque las hileras están más juntas. En bancales pequeños las hileras desplazadas pueden perder una planta al final, así que la ganancia puede ser menor o incluso negativa.",
      },
      {
        question: "¿Por qué se deja un margen en los bordes?",
        answer: "Una planta necesita espacio por todos sus lados. Dejar libre media separación en cada borde da a las plantas del perímetro el mismo espacio que a las demás, y dos bancales contiguos quedan separados una separación completa.",
      },
      {
        question: "¿Qué significa plantas por pie cuadrado?",
        answer: "Es el número de plantas dividido entre la superficie del bancal. Sirve para comparar disposiciones o para usar las tablas de huerto por pies cuadrados, que indican un número de plantas por pie cuadrado.",
      },
    ],
    sourcesUsedFor: ["Información sobre la plantación en bloque, con la misma distancia entre plantas y entre hileras, en bancales de huerto."],
  },
  text: {
    unit: "Unidad",
    units: { m: "m", cm: "cm", ft: "ft", in: "in" },
    length: "Largo del bancal",
    width: "Ancho del bancal",
    pattern: "Patrón de plantación",
    patterns: { grid: "Hileras (cuadrícula)", triangular: "Tresbolillo (desplazado)" },
    spacing: "Separación entre plantas",
    spacingHelp: "La distancia recomendada entre plantas, según el sobre de semillas o la etiqueta de la planta.",
    rowSpacing: "Separación entre hileras",
    errors: { tooMany: "Esta separación es demasiado pequeña para el bancal: daría más de mil millones de plantas." },
    plants: "Plantas que caben",
    caption: "Cada planta queda al menos a media separación de todos los bordes del bancal.",
    rows: "Hileras",
    perRow: "Plantas por hilera",
    perRowOffset: "Plantas por hilera (completa / desplazada)",
    perRowOffsetValue: "{full} / {offset}",
    bedArea: "Superficie del bancal",
    densityMetric: "Plantas por metro cuadrado",
    densityImperial: "Plantas por pie cuadrado",
    notes: {
      tooSmall: "El bancal es demasiado pequeño para esta separación: no cabe ni una planta dejando media separación libre en cada borde.",
      triangular: "Al tresbolillo, cada hilera se desplaza media separación y las hileras quedan a 0,866 (√3/2) separaciones entre sí.",
    },
  },
};

export default es;
