import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PaintText } from "../text/en";

const es: CalculatorTranslation<PaintText> = {
  content: {
    title: "Calculadora de pintura",
    shortTitle: "Pintura",
    summary: "Estima cuántos galones o litros de pintura para paredes necesitas según el tamaño de las paredes, las puertas, las ventanas, el número de manos y el rendimiento.",
    metaTitle: "Calculadora de pintura – Galones o litros para tus paredes",
    metaDescription:
      "Calcula cuánta pintura comprar en galones o litros según el largo y la altura de las paredes, descontando puertas y ventanas, para cualquier número de manos.",
    keywords: [
      "calculadora de pintura",
      "cuánta pintura necesito",
      "litros de pintura",
      "rendimiento de la pintura",
      "galones de pintura",
      "pintura para paredes",
      "manos de pintura",
      "calcular pintura m2",
    ],
    intro: [
      "Comprar pintura es más fácil si sabes qué superficie vas a cubrir. Suma los anchos de las paredes, multiplica por la altura, resta las puertas y ventanas y divide entre lo que rinde un galón o un litro de tu pintura.",
      "La calculadora hace ese cálculo para cualquier número de manos y muestra tanto la cantidad exacta como el número entero de galones o litros que hay que comprar.",
    ],
    howToUse: [
      "Elige unidades estadounidenses (pies y galones) o métricas (metros y litros).",
      "Introduce la longitud total de las paredes que vas a pintar y su altura. Para una habitación completa, la longitud total es el perímetro.",
      "Introduce cuántas puertas y ventanas hay. Ajusta los tamaños típicos de los huecos si los tuyos son más grandes o más pequeños.",
      "Indica el número de manos y el rendimiento que figura en el envase de la pintura, y consulta cuánta pintura necesitas.",
    ],
    formulas: [
      {
        title: "Superficie a pintar",
        expression: "A = L × H − (puertas × superficie de puerta) − (ventanas × superficie de ventana)",
        explanation: "L es el ancho total de las paredes y H su altura.",
      },
      {
        title: "Pintura necesaria",
        expression: "pintura = A × manos ÷ rendimiento",
        explanation: "El rendimiento es la superficie que cubre un galón o un litro en una sola mano, según el fabricante.",
      },
      {
        title: "Cantidad a comprar",
        expression: "comprar = ⌈pintura⌉",
        explanation: "Se redondea al alza a un galón o litro entero. Los envases más grandes y los cuartos de galón más pequeños permiten acercar el total a lo que necesitas.",
      },
    ],
    examples: [
      {
        title: "Dormitorio de 14 ft × 12 ft con paredes de 9 ft, dos manos",
        steps: [
          "Longitud de pared = 14 + 12 + 14 + 12 = 52 ft; superficie de pared = 52 × 9 = 468 ft²",
          "Huecos = 2 × 20 + 3 × 15 = 85 ft², así que la superficie a pintar es de 383 ft²",
          "Pintura = 383 × 2 ÷ 350 ≈ 2,19 gal, así que hay que comprar 3 galones",
        ],
      },
      {
        title: "Habitación métrica con 16 m de pared y 2,5 m de altura",
        steps: [
          "Superficie de pared = 16 × 2,5 = 40 m²",
          "Huecos = 1,9 + 2 × 1,4 = 4,7 m², así que quedan 35,3 m² por pintar",
          "Pintura = 35,3 × 2 ÷ 10 = 7,06 L, así que hay que comprar 8 L",
        ],
      },
      {
        title: "Una pared de acento, una sola mano de una pintura de alto rendimiento",
        steps: [
          "Superficie = 14 × 9 = 126 ft²",
          "Pintura = 126 × 1 ÷ 400 = 0,315 gal, así que basta un galón (un cuarto de galón, 0,25 gal, se quedaría algo corto)",
        ],
      },
    ],
    assumptions: [
      "El valor estadounidense por defecto de 350 ft² por galón está en el extremo bajo del intervalo de 350–400 ft² que se suele indicar para la pintura de paredes. El valor métrico por defecto de 10 m² por litro es un valor habitual en las etiquetas. El rendimiento varía según el producto, el acabado y la superficie, así que usa la cifra de tu envase.",
      "Las superficies rugosas, porosas, reparadas o que no se han pintado antes absorben más pintura, y pasar de un color oscuro a uno claro puede requerir una mano adicional o una imprimación.",
      "Los tamaños de puertas y ventanas son valores típicos. Las paredes se tratan como rectángulos planos de una sola altura; para hastiales o techos inclinados, calcula esas superficies por separado.",
    ],
    faqs: [
      {
        question: "¿Cuántas manos de pintura necesito?",
        answer: "Lo habitual es recomendar dos manos para lograr un acabado uniforme, sobre todo sobre un color distinto. Una sola mano puede bastar si repintas del mismo color una pared en buen estado.",
      },
      {
        question: "¿Debo restar las puertas y ventanas?",
        answer: "Sí, para obtener una estimación más ajustada. Si también vas a pintar las puertas o las molduras, estímalas por separado, porque la pintura para molduras suele ser un producto distinto.",
      },
      {
        question: "¿Cuánto cubre un galón de pintura?",
        answer: "La mayoría de las pinturas para paredes indican unos 350–400 ft² por galón y mano sobre paredes lisas e imprimadas, lo que equivale aproximadamente a 8,5–10 m² por litro. Consulta la etiqueta de tu producto, porque el rendimiento varía.",
      },
    ],
    sourcesUsedFor: [
      "Rendimiento típico de la pintura para paredes, de unos 350–400 ft² por galón y mano, usado para el valor estadounidense por defecto.",
    ],
  },
  text: {
    units: "Unidades",
    unitSystems: { imperial: "EE. UU. (ft, gal)", metric: "Métrico (m, L)" },
    length: "Longitud total de pared",
    lengthHelp: "Suma los anchos de todas las paredes que vas a pintar. Para una habitación completa, es el perímetro.",
    height: "Altura de la pared",
    doors: "Número de puertas",
    doorArea: "Superficie de una puerta",
    windows: "Número de ventanas",
    windowArea: "Superficie de una ventana",
    openingHelp: "Se rellena un valor típico; mide los tuyos para una estimación más ajustada.",
    coats: "Número de manos",
    coverage: "Rendimiento",
    coverageHelp: "La superficie que cubre una unidad de pintura en una mano. Consulta la etiqueta o la ficha técnica de tu pintura: las superficies texturizadas, porosas o sin pintar necesitan más pintura.",
    errors: {
      openings: "Las puertas y ventanas suman al menos toda la superficie de la pared. Revisa las cantidades, el tamaño de los huecos y las dimensiones de la pared.",
    },
    paintNeeded: "Pintura necesaria",
    caption: "{area} pintados con {coats} a {coverage}.",
    coatsCount: { zero: "{n} manos", one: "{n} mano", two: "{n} manos", few: "{n} manos", many: "{n} manos", other: "{n} manos" },
    wallArea: "Superficie total de pared",
    openingArea: "Puertas y ventanas",
    paintableArea: "Superficie a pintar (una mano)",
    totalCoverage: "Superficie a cubrir, todas las manos",
    wholeGallons: "Galones enteros a comprar",
    wholeLiters: "Litros enteros a comprar",
    inLiters: "En litros",
    inGallons: "En galones estadounidenses",
    notes: {
      cans: "La pintura se vende en envases de tamaño fijo; redondea al alza y guarda un poco de más para retoques.",
      surfaces: "No se incluyen techos, molduras ni imprimación. Añádelos por separado si los vas a pintar.",
    },
  },
};

export default es;
