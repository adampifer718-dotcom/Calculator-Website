import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RoofPitchText } from "../text/en";

const es: CalculatorTranslation<RoofPitchText> = {
  content: {
    title: "Calculadora de pendiente de tejado",
    shortTitle: "Pendiente de tejado",
    summary: "Convierte la altura y el avance de un tejado, o su ángulo, en pendiente por cada 12, grados, porcentaje y longitud del cabio.",
    metaTitle: "Calculadora de pendiente de tejado – X en 12, ángulo y cabio",
    metaDescription:
      "Convierte altura y avance, o el ángulo del tejado, en pendiente en pulgadas por cada 12, grados y porcentaje, más el multiplicador y la longitud del cabio.",
    keywords: [
      "pendiente de tejado",
      "inclinación de cubierta",
      "pendiente de cubierta",
      "pendiente 4/12",
      "ángulo del tejado",
      "longitud del cabio",
      "calcular pendiente tejado",
    ],
    intro: [
      "La inclinación de un tejado se suele indicar como altura por cada 12 de avance: un tejado de 6 en 12 sube 6 pulgadas por cada 12 pulgadas que avanza en horizontal. La misma pendiente también se puede expresar como un ángulo en grados o como un porcentaje.",
      "Introduce la altura y el avance que hayas medido, o el ángulo de un plano, y la calculadora te da las tres formas. Añade el avance horizontal del tejado para obtener la longitud del cabio desde la línea del muro hasta la cumbrera.",
    ],
    howToUse: [
      "Elige si conoces la altura y el avance o el ángulo.",
      "Introduce la altura y el avance en la misma unidad, o el ángulo en grados.",
      "Si quieres, introduce el avance del tejado, que es la mitad de la luz del edificio, para obtener la longitud del cabio.",
      "Consulta la pendiente en 12, el ángulo, el porcentaje de pendiente y los valores del cabio.",
    ],
    formulas: [
      { title: "Pendiente por cada 12", expression: "pendiente = 12 × altura ÷ avance", explanation: "Escala la pendiente a un avance de 12 unidades." },
      { title: "Ángulo", expression: "θ = arctan(altura ÷ avance)", explanation: "En sentido inverso, altura ÷ avance = tan θ." },
      { title: "Porcentaje de pendiente", expression: "pendiente % = 100 × altura ÷ avance", explanation: "Un tejado de 12 en 12 tiene una pendiente del 100 %, es decir, 45°." },
      {
        title: "Longitud del cabio",
        expression: "cabio = avance del tejado × √(1 + (altura ÷ avance)²)",
        explanation: "Teorema de Pitágoras: la raíz cuadrada es el multiplicador del cabio.",
      },
    ],
    examples: [
      {
        title: "6 pulgadas de altura sobre 12 pulgadas de avance",
        steps: ["pendiente = 12 × 6 ÷ 12 = 6 en 12", "θ = arctan(0,5) ≈ 26,57°, pendiente del 50 %", "multiplicador = √1,25 ≈ 1,1180"],
      },
      {
        title: "5 ft de altura sobre 8 ft, con un avance de tejado de 14 ft",
        steps: ["pendiente = 12 × 5 ÷ 8 = 7,5 en 12", "multiplicador = √(1 + 0,625²) ≈ 1,1792", "cabio = 14 × 1,1792 ≈ 16,509 ft"],
      },
      {
        title: "Un tejado de 30°",
        steps: ["altura ÷ avance = tan 30° ≈ 0,5774", "pendiente = 12 × 0,5774 ≈ 6,93 en 12", "pendiente ≈ 57,74 %"],
      },
    ],
    assumptions: [
      "Es solo geometría. El dimensionado de los cabios, el diseño estructural, las pendientes mínimas de cada material de cubierta y la normativa de edificación local requieren un profesional cualificado.",
      "La altura y el avance deben estar en la misma unidad. La longitud del cabio usa la unidad que elijas y no incluye el alero, la viga de cumbrera ni el margen de corte.",
      "El tejado se trata como un plano liso con un cabio recto desde la línea del muro hasta la cumbrera.",
    ],
    faqs: [
      {
        question: "¿Qué significa una pendiente de 4/12?",
        answer: "El tejado sube 4 unidades por cada 12 unidades de avance horizontal, lo que equivale a unos 18,43° o a una pendiente del 33,3 %.",
      },
      {
        question: "¿Es lo mismo «pitch» que pendiente?",
        answer: "En el uso cotidiano, sí. En sentido estricto, algunos carpinteros definen el «pitch» como la altura total dividida entre la luz completa, que es la mitad de la pendiente altura/avance. Esta calculadora usa la altura por cada 12 de avance.",
      },
      {
        question: "¿Cómo mido la altura y el avance?",
        answer: "Apoya un nivel en horizontal contra el tejado o un cabio, marca 12 pulgadas a lo largo de él y mide en vertical desde esa marca hasta la superficie del tejado. Esa distancia vertical es la altura por cada 12.",
      },
    ],
    sourcesUsedFor: ["Expresión de la pendiente de un tejado como altura por cada 12 unidades de avance, y significado del avance."],
  },
  text: {
    mode: "Partir de",
    modeOptions: { riseRun: "Altura y avance", angle: "Ángulo" },
    unit: "Unidad de longitud",
    units: { in: "Pulgadas (in)", ft: "Pies (ft)", cm: "Centímetros (cm)", m: "Metros (m)" },
    rise: "Altura",
    riseHelp: "Altura vertical que se gana a lo largo del avance.",
    run: "Avance",
    runHelp: "Distancia horizontal, en la misma unidad que la altura.",
    angle: "Ángulo del tejado",
    angleTooSteep: "El ángulo debe ser menor de 90°.",
    roofRun: "Avance del tejado (opcional)",
    roofRunHelp: "La mitad de la luz del edificio, desde la cara exterior del muro hasta la vertical de la cumbrera. Se usa para la longitud del cabio.",
    pitch: "Pendiente del tejado",
    pitchText: "{rise} en 12",
    pitchCaption: "Pulgadas de altura por cada 12 pulgadas de avance (sirve cualquier unidad, siempre que ambas coincidan).",
    angleOut: "Ángulo",
    slopePercent: "Pendiente",
    multiplier: "Multiplicador de longitud del cabio",
    rafter: "Longitud del cabio (sin alero)",
    roofRise: "Altura sobre el avance del tejado",
    note: "La longitud del cabio se mide a lo largo de la pendiente, desde la línea del muro hasta la cumbrera, sin alero, viga de cumbrera ni márgenes de corte.",
  },
};

export default es;
