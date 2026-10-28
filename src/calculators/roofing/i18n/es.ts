import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RoofingText } from "../text/en";

const es: CalculatorTranslation<RoofingText> = {
  content: {
    title: "Calculadora de tejados",
    shortTitle: "Tejados",
    summary:
      "Estima la superficie del tejado, los squares de cubierta y los paquetes de tejas de un tejado sencillo a dos o a cuatro aguas a partir de la planta del edificio, el alero y la pendiente.",
    metaTitle: "Calculadora de tejados – Squares, paquetes y superficie",
    metaDescription:
      "Estima la superficie del tejado según la planta, el alero y la pendiente, y los squares, paquetes de tejas y rollos de lámina base que comprar, con margen de desperdicio.",
    keywords: [
      "calculadora de tejados",
      "superficie de tejado",
      "square de cubierta",
      "calcular tejas asfálticas",
      "paquetes de tejas",
      "rollos de lámina base",
      "factor de pendiente",
    ],
    intro: [
      "Los materiales de cubierta se venden por squares: un square cubre 100 ft² (unos 9,29 m²) de tejado. Un tejado inclinado tiene más superficie que la planta que cubre, así que la superficie en planta se multiplica por un factor de pendiente que aumenta cuanto más inclinado es el tejado.",
      "Introduce el largo y el ancho del edificio, el alero y la pendiente para estimar la superficie del tejado, el número de squares y de paquetes de tejas y, si quieres, los rollos de lámina base. Un margen de desperdicio cubre los cortes, las hiladas de arranque y las piezas de remate.",
    ],
    howToUse: [
      "Elige unidades de EE. UU. (pies) o métricas (metros).",
      "Introduce el largo y el ancho del edificio y cuánto sobresale el tejado de los muros.",
      "Introduce la pendiente como altura por cada 12 de avance (por ejemplo, 6 para un tejado de 6/12) o como ángulo.",
      "Elige a dos aguas o a cuatro aguas y revisa el margen de desperdicio; los tejados a cuatro aguas usan un 15 % por defecto por los cortes adicionales.",
      "Comprueba los paquetes por square de tus tejas y, si quieres, introduce la cobertura de un rollo de lámina base.",
    ],
    formulas: [
      {
        title: "Superficie en planta",
        expression: "planta = (L + 2 × alero) × (A + 2 × alero)",
        explanation: "L y A son el largo y el ancho exteriores del edificio.",
      },
      {
        title: "Factor de pendiente",
        expression: "factor = √(1 + (altura ÷ 12)²)",
        explanation: "Para un tejado de 6/12 el factor es √1,25 ≈ 1,118. A partir de un ángulo θ, el factor es 1 ÷ cos θ.",
      },
      {
        title: "Superficie del tejado y squares",
        expression: "superficie = planta × factor; squares = superficie × (1 + desperdicio) ÷ 100 ft²",
        explanation: "Las superficies métricas se convierten con 1 ft² = 0,09290304 m².",
      },
      {
        title: "Paquetes y rollos",
        expression: "paquetes = ⌈squares × paquetes por square⌉; rollos = ⌈superficie con desperdicio ÷ cobertura del rollo⌉",
        explanation: "Ambos se redondean al alza a unidades enteras.",
      },
    ],
    examples: [
      {
        title: "Casa de 40 × 30 ft, alero de 1 ft, tejado a dos aguas de 6/12",
        steps: [
          "Superficie en planta = 42 × 32 = 1.344 ft²",
          "Superficie del tejado = 1.344 × √1,25 ≈ 1.502,64 ft²",
          "Con un 10 % de desperdicio: 1.652,90 ft², es decir, 16,53 squares",
          "Paquetes = ⌈16,53 × 3⌉ = 50",
        ],
      },
      {
        title: "Casa de 12 × 9 m, alero de 0,5 m, tejado a cuatro aguas de 30°",
        steps: [
          "Superficie en planta = 13 × 10 = 130 m²",
          "Factor de pendiente = 1 ÷ cos 30° ≈ 1,1547, así que la superficie del tejado ≈ 150,11 m²",
          "Con un 15 % de desperdicio: 172,63 m² ÷ 0,09290304 ≈ 1.858,15 ft², es decir, 18,58 squares",
          "Paquetes = ⌈18,58 × 3⌉ = 56",
        ],
      },
      {
        title: "50 × 28 ft, alero de 1,5 ft, tejado de 8/12 con lámina base",
        steps: [
          "Superficie en planta = 53 × 31 = 1.643 ft²",
          "Factor de pendiente = √(1 + (8 ÷ 12)²) ≈ 1,2019, así que la superficie del tejado ≈ 1.974,64 ft²",
          "Con un 12 % de desperdicio: 2.211,60 ft², es decir, 22,12 squares y ⌈66,35⌉ = 67 paquetes",
          "Lámina base a 400 ft² por rollo: ⌈5,53⌉ = 6 rollos",
        ],
      },
    ],
    assumptions: [
      "El tejado es un rectángulo sencillo en planta con la misma pendiente en todos sus faldones. Las buhardillas, las limahoyas, las chimeneas, los lucernarios, las plantas en L y los faldones de distinta pendiente necesitan material adicional y deben medirse por secciones.",
      "Un tejado a cuatro aguas y uno a dos aguas sobre la misma planta y con la misma pendiente tienen la misma superficie; el mayor desperdicio por defecto del tejado a cuatro aguas tiene en cuenta sus cortes adicionales.",
      "Los paquetes por square y la cobertura de la lámina base varían según el producto. Usa las cifras impresas en el envase.",
      "Esto es solo una estimación de materiales. La estructura de la cubierta, la ventilación, la clasificación frente al fuego y los detalles de instalación deben seguir las instrucciones del fabricante y la normativa de edificación local.",
    ],
    faqs: [
      {
        question: "¿Qué es un square de cubierta?",
        answer:
          "Un square son 100 ft² de superficie de tejado, un área de 10 × 10 ft. En EE. UU., los instaladores presupuestan y piden las tejas por squares; 1 square equivale a unos 9,29 m².",
      },
      {
        question: "¿Cuántos paquetes de tejas hay en un square?",
        answer:
          "Muchas tejas asfálticas se envasan en tres paquetes por square, pero los productos más pesados pueden venir en cuatro o más paquetes más pequeños. La etiqueta del paquete indica su cobertura, así que compruébala y ajusta los paquetes por square.",
      },
      {
        question: "¿Por qué la superficie del tejado es mayor que la de la casa?",
        answer:
          "Porque el tejado está inclinado y sobresale de los muros. Un tejado de 6/12 tiene alrededor de un 12 % más de superficie que su planta, y uno de 12/12, alrededor de un 41 % más, antes de sumar el alero.",
      },
    ],
    sourcesUsedFor: [
      "El square de cubierta de 100 ft² y el envasado habitual de tres paquetes de tejas por square, que varía según el producto.",
      "El método general para estimar el material de cubierta a partir de la superficie del tejado, los squares y un margen de desperdicio.",
    ],
  },
  text: {
    units: "Unidades",
    unitSystems: { imperial: "EE. UU. (ft)", metric: "Métricas (m)" },
    length: "Largo del edificio",
    lengthHelp: "El largo exterior de la planta del edificio, sin incluir el alero.",
    width: "Ancho del edificio",
    overhang: "Alero (frontal y lateral)",
    overhangHelp: "Cuánto sobresale el tejado de los muros por cada lado. Se suma a ambos extremos del largo y del ancho.",
    pitchMode: "Pendiente del tejado indicada como",
    pitchModes: { rise: "Altura por cada 12", angle: "Ángulo" },
    rise: "Altura por cada 12 de avance",
    riseHelp: "Para un tejado de 6 en 12 (6/12), introduce 6. La altura y el avance usan la misma unidad.",
    angle: "Ángulo del tejado",
    roofType: "Tipo de tejado",
    roofTypes: { gable: "A dos aguas", hip: "A cuatro aguas" },
    roofTypeHelp:
      "Con la misma pendiente en todos los faldones, un tejado a dos aguas y uno a cuatro aguas sobre la misma planta tienen la misma superficie. Los tejados a cuatro aguas necesitan más cortes, así que su margen de desperdicio por defecto es mayor.",
    waste: "Margen de desperdicio",
    wasteHelp: "Material extra para cortes, hiladas de arranque, piezas de cumbrera y de limatesa, y errores.",
    bundles: "Paquetes por square",
    bundlesHelp:
      "Muchas tejas asfálticas vienen en 3 paquetes por square (100 ft²), pero algunos productos son distintos. Comprueba la cobertura impresa en el paquete.",
    rollCoverage: "Cobertura de la lámina base por rollo (opcional)",
    rollCoverageHelp: "La cobertura neta impresa en la etiqueta del rollo, descontados los solapes. Déjalo vacío para omitir el número de rollos.",
    errors: {
      angle: "El ángulo del tejado debe ser menor de 90°.",
    },
    squares: "Squares de cubierta (con desperdicio)",
    caption: "{area} de tejado más {waste} de desperdicio; 1 square = 100 ft² (9,29 m²).",
    planArea: "Planta incluido el alero",
    pitchFactor: "Factor de pendiente (superficie del tejado ÷ superficie en planta)",
    pitchText: "Pendiente",
    pitchValue: "{rise} en 12",
    angleOut: "Ángulo del tejado",
    roofArea: "Superficie del tejado",
    roofAreaOther: "Superficie del tejado en otras unidades",
    areaWithWaste: "Superficie del tejado con desperdicio",
    squaresNoWaste: "Squares sin desperdicio",
    bundlesOut: "Paquetes de tejas",
    rolls: "Rollos de lámina base",
    notes: {
      hip: "Un tejado a cuatro aguas con la misma pendiente en sus cuatro faldones tiene la misma superficie que uno a dos aguas sobre la misma planta; solo necesita más piezas cortadas y remates de limatesa.",
      shape:
        "Se supone un tejado rectangular sencillo. Las buhardillas, las limahoyas, las chimeneas, los lucernarios y las plantas en L necesitan material adicional; en esos casos, mide cada sección por separado.",
      bundles:
        "Los paquetes se redondean al alza a paquetes enteros. No se incluyen las piezas de cumbrera, las tiras de arranque, el goterón, los remates de chapa ni los clavos.",
    },
  },
};

export default es;
