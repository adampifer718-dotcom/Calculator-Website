import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TileText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const es: CalculatorTranslation<TileText> = {
  content: {
    title: "Calculadora de azulejos y baldosas",
    shortTitle: "Azulejos y baldosas",
    summary: "Calcula cuántas piezas y cajas necesitas para un suelo o una pared a partir de la superficie, el tamaño de la pieza, la junta y un margen de desperdicio.",
    metaTitle: "Calculadora de azulejos y baldosas – Piezas y cajas",
    metaDescription:
      "Calcula las baldosas o azulejos para un suelo o una pared a partir de la superficie, el tamaño de la pieza y la junta, con margen de desperdicio y cajas enteras.",
    keywords: ["calcular azulejos", "calcular baldosas", "cuántas baldosas necesito", "azulejos para pared", "baldosas para suelo", "junta de azulejos", "cajas de azulejos", "frente de cocina"],
    intro: [
      "Antes de comprar azulejos o baldosas necesitas saber cuántas piezas, no solo la superficie. Esta calculadora divide la superficie que vas a cubrir entre el espacio que ocupa cada pieza, incluida la junta que la rodea, y añade un margen de desperdicio por cortes y roturas.",
      "Introduce las medidas de la superficie y de una pieza, elige el ancho de junta y el porcentaje de desperdicio y, si quieres, el número de piezas por caja. Obtendrás el número de piezas que debes comprar y, si has indicado el tamaño de caja, el número de cajas.",
    ],
    howToUse: [
      "Elige unidades de EE. UU. (superficie en pies, pieza y junta en pulgadas) o métricas (superficie en metros, pieza y junta en milímetros).",
      "Introduce el largo y el ancho de la superficie. Para una habitación en forma de L, divídela en rectángulos, calcula cada uno y suma los resultados.",
      "Introduce el largo y el ancho de la pieza y el ancho de la junta.",
      "Fija un margen de desperdicio y, si lo sabes, el número de piezas por caja.",
      "Consulta las piezas necesarias y las cajas que debes comprar.",
    ],
    formulas: [
      { title: "Superficie por pieza con junta", expression: "a = (largo de pieza + g) × (ancho de pieza + g)", explanation: "Cada pieza ocupa su propio tamaño más un ancho de junta g en cada dirección." },
      { title: "Piezas necesarias", expression: "piezas = ⌈superficie ÷ a × (1 + desperdicio %)⌉", explanation: "Divide la superficie entre el espacio por pieza, añade el margen de desperdicio y redondea al alza a una pieza entera. Los tamaños de pieza se convierten con 144 in² por ft² o 1.000.000 mm² por m²." },
      { title: "Cajas", expression: "cajas = ⌈piezas ÷ piezas por caja⌉", explanation: "Se redondea al alza, porque las cajas se venden enteras." },
    ],
    examples: [
      {
        title: "Un suelo de 10 × 14 ft con baldosas de 18 pulgadas",
        steps: ["Superficie = 10 × 14 = 140 ft²", "Por pieza = 18,25 × 18,25 = 333,0625 in² ≈ 2,3129 ft²", "140 ÷ 2,3129 ≈ 60,53 piezas; × 1,10 ≈ 66,58, redondeado al alza a 67 piezas"],
      },
      {
        title: "Un baño de 3,2 × 2,5 m con piezas de 600 × 300 mm, 8 por caja",
        steps: ["Superficie = 3,2 × 2,5 = 8 m²", "Por pieza = 602 × 302 = 181.804 mm² = 0,181804 m²", "8 ÷ 0,181804 ≈ 44,00; × 1,12 ≈ 49,28, redondeado al alza a 50 piezas", "50 ÷ 8 = 6,25, así que 7 cajas"],
      },
      {
        title: "Un frente de cocina de 8 × 5 ft con azulejos de 4 pulgadas",
        steps: ["Superficie = 8 × 5 = 40 ft²", "Por pieza = 4,0625 × 4,0625 ≈ 16,504 in² ≈ 0,11461 ft²", "40 ÷ 0,11461 ≈ 349,01; × 1,15 ≈ 401,36, redondeado al alza a 402 piezas"],
      },
    ],
    assumptions: [
      "La superficie es un rectángulo simple. Las distribuciones reales con muchos cortes, cenefas, hornacinas o patrones como el diagonal o la espiga pueden necesitar más piezas que esta estimación.",
      "El margen de desperdicio lo eliges tú. Un 10 % aproximadamente es un punto de partida habitual para una colocación recta; es una regla práctica típica, no una norma.",
      "La estimación cubre solo las piezas. No incluye adhesivo, material de rejuntado, perfiles ni la preparación de la superficie de debajo; para eso, sigue las instrucciones de los fabricantes de las piezas y los productos.",
    ],
    faqs: [
      { question: "¿Por qué hay que incluir la junta?", answer: "Cada junta añade un poco al espacio que cubre cada pieza, así que se necesitan menos piezas. Con piezas pequeñas y juntas anchas, la diferencia puede ser de varios puntos porcentuales." },
      { question: "¿Cuántas piezas de más debo comprar?", answer: "Muchos instaladores añaden alrededor de un 10 % para una colocación recta y más para colocaciones en diagonal o con patrones, o para habitaciones con muchas esquinas. Guardar unas cuantas piezas de repuesto también ayuda en futuras reparaciones." },
      { question: "¿Cómo mido una habitación en forma de L?", answer: "Divídela en dos rectángulos, usa la calculadora para cada uno con los mismos ajustes de pieza y suma las dos cantidades de piezas." },
    ],
    sourcesUsedFor: ["Área de un rectángulo, usada tanto para la superficie que se va a cubrir como para cada pieza con su junta."],
  },
  text: {
    units: "Unidades",
    unitSystems: { imperial: "EE. UU. (ft, in)", metric: "Métricas (m, mm)" },
    areaLength: "Largo de la superficie",
    areaWidth: "Ancho de la superficie",
    areaHelp: "La superficie de suelo o pared que vas a cubrir, medida como un rectángulo.",
    tileLength: "Largo de la pieza",
    tileWidth: "Ancho de la pieza",
    grout: "Ancho de la junta",
    groutHelpImperial: "La separación entre piezas. 1/8 in son 0,125 in; introduce 0 si no hay junta.",
    groutHelpMetric: "La separación entre piezas. Introduce 0 si no hay junta.",
    waste: "Margen de desperdicio",
    wasteHelp: "Piezas de más para cortes, roturas y repuestos. Alrededor de un 10 % es lo habitual en una colocación recta; las colocaciones en diagonal y con patrones necesitan más.",
    perBox: "Piezas por caja (opcional)",
    perBoxHelp: "Déjalo vacío si compras las piezas sueltas.",
    tilesNeeded: "Piezas necesarias",
    caption: "{area} a {perTile} por pieza, junta incluida, más un {waste} de desperdicio.",
    tilesBeforeWaste: "Piezas sin desperdicio",
    area: "Superficie a cubrir",
    tileFootprint: "Superficie por pieza con junta",
    boxes: "Cajas que comprar",
    boxesCaption: "{boxes} ({tiles})",
    boxesCount: forms("{n} caja", "{n} cajas"),
    tilesCount: forms("{n} pieza", "{n} piezas"),
    spare: "Piezas sobrantes en las cajas",
    notes: {
      layout: "Supone una superficie rectangular simple. Las distribuciones reales con muchos cortes, cenefas o patrones pueden necesitar más piezas.",
      batch: "Si puedes, compra todas las piezas del mismo lote, porque el color puede variar de un lote a otro.",
    },
  },
};

export default es;
