import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FlooringText } from "../text/en";

const es: CalculatorTranslation<FlooringText> = {
  content: {
    title: "Calculadora de revestimiento de suelos",
    shortTitle: "Revestimiento de suelos",
    summary: "Calcula cuántas cajas de suelo laminado, vinílico en lamas o de madera debes comprar a partir de las medidas de la habitación, un margen de desperdicio y la superficie por caja, con un coste opcional.",
    metaTitle: "Calculadora de revestimiento de suelos – Cajas de laminado",
    metaDescription:
      "Calcula las cajas de suelo que debes comprar para una habitación rectangular o en L, con margen de desperdicio, superficie por caja y un precio opcional por superficie.",
    keywords: ["calcular suelo laminado", "cuánto suelo necesito", "suelo vinílico", "tarima flotante", "cajas de suelo", "desperdicio suelo", "parquet", "presupuesto suelo"],
    intro: [
      "El suelo se vende por cajas, y cada caja cubre una superficie fija. Para saber cuántas comprar necesitas la superficie del suelo, un margen para las piezas que se pierden en los cortes y la superficie que indica la caja.",
      "Esta calculadora suma todo eso para una habitación rectangular o en forma de L compuesta por dos rectángulos, redondea al alza a cajas enteras y, si introduces un precio, estima el coste. Si solo necesitas la superficie de una habitación, la Calculadora de pies cuadrados te la da sin cajas ni desperdicio.",
    ],
    howToUse: [
      "Elige unidades de EE. UU. (pies) o métricas (metros).",
      "Introduce el largo y el ancho de la habitación. Para una habitación en forma de L, introduce primero el rectángulo principal y el más pequeño como segunda zona.",
      "Fija el margen de desperdicio: alrededor de un 10 % para una colocación recta y alrededor de un 15 % para patrones en diagonal o en espiga.",
      "Introduce la superficie por caja que figura en el embalaje y, si quieres, el precio por pie cuadrado o por metro cuadrado.",
    ],
    formulas: [
      { title: "Superficie del suelo", expression: "A = L₁ × W₁ + L₂ × W₂", explanation: "El segundo rectángulo es opcional; déjalo en 0 para una habitación rectangular simple." },
      { title: "Superficie con desperdicio", expression: "A_w = A × (1 + desperdicio ÷ 100)", explanation: "El extra cubre los recortes junto a las paredes, los errores de corte y las lamas dañadas." },
      { title: "Cajas", expression: "cajas = ⌈A_w ÷ superficie por caja⌉", explanation: "Se redondea al alza porque el suelo se vende en cajas enteras." },
      { title: "Coste", expression: "coste = cajas × superficie por caja × precio por superficie", explanation: "Pagas cajas enteras, así que el coste usa la superficie de las cajas que compras." },
    ],
    examples: [
      {
        title: "Dormitorio de 14 ft × 12 ft con cajas de 20 ft²",
        steps: ["Superficie = 14 × 12 = 168 ft²", "Con un 10 % de desperdicio: 168 × 1,10 = 184,8 ft²", "184,8 ÷ 20 = 9,24, así que compra 10 cajas (200 ft²)"],
      },
      {
        title: "Salón en forma de L con colocación en espiga, en métrico",
        steps: ["Superficie = 5 × 4 + 2 × 1,5 = 23 m²", "Con un 15 % de desperdicio: 23 × 1,15 = 26,45 m²", "26,45 ÷ 2,2 ≈ 12,02, así que compra 13 cajas"],
      },
      {
        title: "Despacho en casa con precio por pie cuadrado",
        steps: ["Superficie = 12 × 10 = 120 ft²; con un 10 % de desperdicio, 132 ft²", "132 ÷ 23,4 ≈ 5,64, así que compra 6 cajas que cubren 140,4 ft²", "Coste = 140,4 ft² × 3,49 US$ ≈ 490,00 US$"],
      },
    ],
    assumptions: [
      "La habitación es un rectángulo o dos rectángulos que no se solapan. Mide otras formas como varios rectángulos y súmalos.",
      "Los márgenes de desperdicio son reglas prácticas. La longitud de las lamas, la forma de la habitación y el método del instalador cambian lo que se pierde, así que consulta las indicaciones del fabricante de tu producto.",
      "Los armarios empotrados, los vanos de las puertas y las zonas bajo muebles fijos solo se incluyen si los añades a las medidas.",
      "El coste no incluye la base aislante, los rodapiés, los perfiles de transición, el adhesivo ni la mano de obra.",
    ],
    faqs: [
      {
        question: "¿Cuánto suelo de más debo comprar?",
        answer: "Un margen habitual es de alrededor del 10 % para una colocación recta en una habitación sencilla. Las colocaciones en diagonal, en espiga y en espiga húngara, o las habitaciones con muchas esquinas, suelen necesitar alrededor del 15 % o más.",
      },
      {
        question: "¿Por qué conviene guardar cajas de repuesto?",
        answer: "Las lamas sobrantes te permiten sustituir más adelante piezas dañadas por otras del mismo lote de fabricación, cuyo color y acabado coincidirán.",
      },
      {
        question: "¿Cómo mido una habitación en forma de L?",
        answer: "Divide el suelo en dos rectángulos que no se solapen, mide el largo y el ancho de cada uno e introdúcelos como la habitación y la segunda zona.",
      },
    ],
    sourcesUsedFor: ["El pie internacional exacto (0,3048 m), usado para convertir entre pies cuadrados y metros cuadrados."],
  },
  text: {
    units: "Unidades",
    unitSystems: { imperial: "EE. UU. (ft, ft²)", metric: "Métricas (m, m²)" },
    length: "Largo de la habitación",
    width: "Ancho de la habitación",
    length2: "Largo de la segunda zona",
    width2: "Ancho de la segunda zona",
    secondHelp: "Opcional. Para una habitación en forma de L, divídela en dos rectángulos e introduce aquí el segundo. Si no, deja ambos valores en 0.",
    waste: "Margen de desperdicio",
    wasteHelp: "Extra para cortes, recortes y piezas dañadas. Alrededor de un 10 % sirve para una colocación recta; usa alrededor de un 15 % para patrones en diagonal o en espiga.",
    coverage: "Superficie por caja",
    coverageHelp: "La superficie que cubre una caja, indicada en la caja o en la página del producto.",
    price: "Precio por unidad de superficie",
    priceHelp: "Opcional. El precio del suelo por pie cuadrado o por metro cuadrado.",
    errors: {
      secondPair: "Introduce el largo y el ancho de la segunda zona, o deja ambos en 0.",
    },
    boxes: "Cajas necesarias",
    caption: "{area} más un {waste} de desperdicio, a {coverage} por caja.",
    floorArea: "Superficie del suelo",
    areaWithWaste: "Superficie con desperdicio",
    areaBought: "Superficie de las cajas compradas",
    leftover: "Sobrante tras la instalación",
    otherUnit: "Superficie del suelo en otras unidades",
    cost: "Coste del suelo (cajas enteras)",
    costWithWaste: "Coste de la superficie con desperdicio",
    notes: {
      squareFootage: "¿Solo necesitas la superficie de una habitación? La Calculadora de pies cuadrados te da la superficie sin cajas ni desperdicio.",
      extras: "No se incluyen la base aislante, los rodapiés, los perfiles de transición ni el adhesivo.",
    },
  },
};

export default es;
