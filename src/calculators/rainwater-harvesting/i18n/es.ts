import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RainwaterText } from "../text/en";

const es: CalculatorTranslation<RainwaterText> = {
  content: {
    title: "Calculadora de recogida de agua de lluvia",
    shortTitle: "Agua de lluvia",
    summary: "Estima cuánta agua de lluvia puede recoger un tejado a partir de su superficie, la precipitación y un coeficiente de escorrentía.",
    metaTitle: "Calculadora de agua de lluvia – Captación en tejado",
    metaDescription:
      "Estima el agua de lluvia que recoge un tejado, en litros o galones de EE. UU., según la superficie de captación, la precipitación y la escorrentía.",
    keywords: ["recogida de agua de lluvia", "captación de agua de lluvia", "agua de lluvia tejado", "depósito de agua de lluvia", "litros por metro cuadrado", "aljibe"],
    intro: [
      "Cada milímetro de lluvia que cae sobre un metro cuadrado de tejado equivale a un litro de agua. Esta calculadora amplía ese cálculo y tiene en cuenta las pérdidas.",
      "Úsala para dimensionar un barril o depósito, o para estimar la recogida anual a partir de la precipitación media.",
    ],
    howToUse: [
      "Elige unidades métricas o estadounidenses.",
      "Introduce la superficie en planta del tejado.",
      "Introduce la precipitación del periodo que te interese.",
      "Ajusta el coeficiente de escorrentía para las pérdidas y consulta el volumen recogido.",
    ],
    formulas: [
      { title: "Sistema métrico", expression: "Litros = superficie (m²) × precipitación (mm) × coeficiente de escorrentía", explanation: "1 mm de lluvia sobre 1 m² equivale a 1 litro." },
      {
        title: "Unidades de EE. UU.",
        expression: "Galones = superficie (ft²) × precipitación (in) × 0,6234 × coeficiente de escorrentía",
        explanation: "0,6234 = 144 in³ ÷ 231 in³ por galón estadounidense.",
      },
    ],
    examples: [
      {
        title: "Tejado de 100 m², 25 mm de lluvia",
        steps: ["100 × 25 = 2500 L de lluvia", "2500 × 0,8 = 2000 L recogidos"],
      },
      {
        title: "Tejado de 1000 ft², 1 pulgada de lluvia",
        steps: ["1000 × 1 × 0,6234 ≈ 623 gal", "623 × 0,8 ≈ 499 gal recogidos"],
      },
    ],
    assumptions: [
      "El coeficiente de escorrentía cubre las pérdidas por evaporación, salpicaduras, separadores de primeras aguas y desbordamiento de canalones. Depende del material del tejado y del diseño de la instalación; consulta las recomendaciones locales.",
      "Usa la superficie en planta del tejado, no la superficie inclinada.",
      "Consulta la normativa local sobre la recogida y el uso del agua de lluvia, y trátala antes de beberla.",
    ],
    faqs: [
      {
        question: "¿Cuánta agua da 1 pulgada de lluvia?",
        answer: "Unos 0,623 galones estadounidenses por pie cuadrado de tejado antes de pérdidas, o 623 galones por cada 1000 ft².",
      },
      {
        question: "¿Qué coeficiente de escorrentía debo usar?",
        answer: "Los tejados lisos y duros pierden menos agua que los rugosos o absorbentes. 0,8 es un valor intermedio prudente; ajústalo a tu tejado.",
      },
      {
        question: "¿Es potable el agua de lluvia recogida?",
        answer: "No sin una filtración y desinfección adecuadas. Mucha gente la usa para el jardín y las cisternas del inodoro.",
      },
    ],
    sourcesUsedFor: ["Definiciones del galón estadounidense (231 in³) y del litro."],
  },
  text: {
    units: "Unidades",
    unitOptions: { metric: "Métricas (m², mm, litros)", imperial: "EE. UU. (ft², pulgadas, galones)" },
    area: "Superficie de captación (tejado)",
    areaHelp: "La superficie en planta del tejado, no la superficie inclinada.",
    rainfall: "Precipitación",
    rainfallHelp: "De una tormenta, un mes o un año.",
    coefficient: "Coeficiente de escorrentía",
    coefficientHelp: "Proporción de la lluvia que llega al depósito tras las pérdidas (de 0 a 1).",
    collected: "Agua recogida",
    inLiters: "En litros",
    inGallons: "En galones estadounidenses",
    inCubic: "En metros cúbicos",
    gallons: "gal EE. UU.",
    note: "1 mm de lluvia sobre 1 m² equivale exactamente a 1 litro; 1 pulgada de lluvia sobre 1 ft² equivale a 144 ÷ 231 ≈ 0,623 galones estadounidenses.",
  },
};

export default es;
