import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FertilizerText } from "../text/en";

const es: CalculatorTranslation<FertilizerText> = {
  content: {
    title: "Calculadora de abonos (N-P-K)",
    shortTitle: "Abonos (N-P-K)",
    summary:
      "Calcula cuánto abono N-P-K debes esparcir para aportar una dosis objetivo de nitrógeno, fósforo (P₂O₅) o potasio (K₂O) en un césped, un huerto o un campo.",
    metaTitle: "Calculadora de abonos (N-P-K) – Producto por dosis",
    metaDescription:
      "Calcula cuánto abono aplicar a partir de su riqueza N-P-K, una dosis de nutriente por superficie y el área, con el nitrógeno, el P₂O₅ y el K₂O que aporta.",
    keywords: [
      "calculadora de abonos",
      "calculadora NPK",
      "dosis de fertilizante",
      "kg de N por hectárea",
      "riqueza del abono",
      "P2O5 a P",
      "K2O a K",
      "cuánto abono echar",
    ],
    intro: [
      "Los sacos de abono llevan tres números, como 10-10-10 o 46-0-0. Son los porcentajes en peso de nitrógeno (N), fósforo expresado como P₂O₅ y potasio expresado como K₂O. Los análisis de suelo y las guías de cultivo suelen recomendar una cantidad de nutriente por superficie, no una cantidad de producto, así que hay que convertir una en otra.",
      "Introduce la riqueza del producto, elige el nutriente al que se refiere tu recomendación e introduce la dosis y la superficie. La calculadora da la cantidad de producto que hay que esparcir y las cantidades de los tres nutrientes que aporta, incluidos el fósforo y el potasio elementales.",
    ],
    howToUse: [
      "Introduce los tres números de la riqueza que figuran en el saco; por ejemplo, 10, 20 y 10 para un producto 10-20-10.",
      "Elige el nutriente al que se refiere la dosis recomendada: nitrógeno, fósforo (P₂O₅) o potasio (K₂O).",
      "Introduce la dosis recomendada y su unidad; por ejemplo, 1 lb por 1.000 ft² o 120 kg por hectárea.",
      "Introduce la superficie y su unidad. La cantidad de producto se muestra en libras para las dosis en libras y en kilogramos para las dosis métricas.",
    ],
    formulas: [
      {
        title: "Producto necesario",
        expression: "producto = dosis × superficie ÷ (riqueza % ÷ 100)",
        explanation: "La riqueza % es el número del saco para el nutriente elegido. La dosis y la superficie se convierten primero a una unidad común.",
      },
      {
        title: "Nutrientes aportados",
        expression: "N = producto × N%;  P₂O₅ = producto × P₂O₅%;  K₂O = producto × K₂O%",
        explanation: "Cada porcentaje es el número correspondiente de la riqueza ÷ 100.",
      },
      {
        title: "Fósforo y potasio elementales",
        expression: "P = P₂O₅ × 0,4364;  K = K₂O × 0,8302",
        explanation:
          "Los factores son las fracciones de masa 2P ÷ P₂O₅ y 2K ÷ K₂O, calculadas a partir de los pesos atómicos estándar (P 30,973762, K 39,0983, O 15,999).",
      },
    ],
    examples: [
      {
        title: "10-10-10 en un césped de 5.000 ft² a 1 lb de N por 1.000 ft²",
        steps: [
          "Nitrógeno necesario = 1 × 5.000 ÷ 1.000 = 5 lb",
          "Producto = 5 ÷ 0,10 = 50 lb de 10-10-10",
          "También aporta 5 lb de P₂O₅ (≈ 2,18 lb de P) y 5 lb de K₂O (≈ 4,15 lb de K)",
        ],
      },
      {
        title: "Urea (46-0-0) a 120 kg de N por hectárea en 2,5 ha",
        steps: ["Nitrógeno necesario = 120 × 2,5 = 300 kg", "Producto = 300 ÷ 0,46 ≈ 652,17 kg de urea"],
      },
      {
        title: "15-30-15 a 6 g de P₂O₅ por m² en un bancal de 25 m²",
        steps: ["P₂O₅ necesario = 6 × 25 = 150 g", "Producto = 150 ÷ 0,30 = 500 g = 0,5 kg", "También aporta 75 g de N y 75 g de K₂O"],
      },
    ],
    assumptions: [
      "Esto es solo aritmética. Basa la dosis en un análisis de suelo y en las recomendaciones locales, y sigue la etiqueta del producto y las normas locales sobre el uso de fertilizantes, el momento de aplicación y la escorrentía.",
      "La riqueza se toma como el porcentaje garantizado en peso de N, P₂O₅ y K₂O, tal como figura en las etiquetas. Los productos líquidos cuya riqueza se expresa en peso requieren su peso, no su volumen.",
      "Las cantidades suponen un reparto uniforme sobre toda la superficie. Los ajustes de la abonadora y los solapes influyen en lo que realmente se aplica.",
    ],
    faqs: [
      {
        question: "¿Por qué el fósforo y el potasio se expresan como P₂O₅ y K₂O?",
        answer:
          "Es una convención de etiquetado muy antigua. La riqueza expresa el fósforo como el óxido P₂O₅ y el potasio como K₂O, aunque el producto no contenga esos óxidos como tales. Multiplica por aproximadamente 0,436 y 0,830 para obtener las cantidades elementales.",
      },
      {
        question: "¿Y si mi recomendación incluye varios nutrientes?",
        answer:
          "Calcula la cantidad de producto para el nutriente que más necesitas y comprueba después los demás nutrientes que aporta. Si son demasiado altos o bajos, puede convenir más un producto con otra proporción o productos separados para cada nutriente.",
      },
      {
        question: "¿Cómo convierto lb por acre en kg por hectárea?",
        answer:
          "1 lb por acre equivale a unos 1,121 kg por hectárea, porque una libra son 0,45359237 kg y un acre son unas 0,4047 ha. Puedes introducir la dosis en cualquiera de las dos unidades y la calculadora la convierte por ti.",
      },
    ],
    sourcesUsedFor: [
      "La lectura de la riqueza como porcentaje en peso de N, P₂O₅ y K₂O, y la división de la dosis de nutriente entre la fracción de la riqueza.",
      "La riqueza del abono como N-P₂O₅-K₂O garantizados, y los factores de conversión de P₂O₅ a P y de K₂O a K.",
      "Los pesos atómicos del fósforo, el potasio y el oxígeno usados para calcular los factores de óxido a elemento.",
    ],
  },
  text: {
    gradeN: "Riqueza: nitrógeno (N)",
    gradeNHelp: "El primer número del saco, en porcentaje en peso. En 10-20-10 es 10.",
    gradeP: "Riqueza: fósforo (P₂O₅)",
    gradePHelp: "El segundo número del saco. Las etiquetas expresan el fósforo como pentóxido de fósforo (P₂O₅), no como P elemental.",
    gradeK: "Riqueza: potasio (K₂O)",
    gradeKHelp: "El tercer número del saco. Las etiquetas expresan el potasio como óxido de potasio (K₂O), no como K elemental.",
    nutrient: "Nutriente al que se refiere la dosis",
    nutrients: { N: "Nitrógeno (N)", P2O5: "Fósforo (P₂O₅)", K2O: "Potasio (K₂O)" },
    rate: "Dosis de nutriente deseada",
    rateHelp: "La cantidad del nutriente elegido que hay que aplicar por unidad de superficie, normalmente según un análisis de suelo o una recomendación local.",
    rateUnit: "Unidad de la dosis",
    rateUnits: { lb1000ft2: "lb por 1.000 ft²", lbAcre: "lb por acre", kgHa: "kg por hectárea", gM2: "g por m²" },
    area: "Superficie que abonar",
    areaUnit: "Unidad de superficie",
    areaUnits: { ft2: "Pies cuadrados (ft²)", m2: "Metros cuadrados (m²)", acre: "Acres", ha: "Hectáreas (ha)" },
    areaSymbols: { ft2: "ft²", m2: "m²", acre: "acres", ha: "ha" },
    errors: {
      zeroGrade: "Este producto no contiene el nutriente elegido. Elige otro nutriente o un producto con un número distinto de cero para él.",
      gradeSum: "Los tres números de la riqueza suman más del 100 %. Comprueba la etiqueta.",
    },
    product: "Abono necesario",
    caption: "{rate} de {nutrient} ÷ {grade} en un producto {label}, sobre {area}.",
    productOther: "Producto necesario en otras unidades",
    productRate: "Dosis de producto",
    applied: {
      N: "Nitrógeno (N) aplicado",
      P2O5: "Fósforo (P₂O₅) aplicado",
      K2O: "Potasio (K₂O) aplicado",
      P: "Fósforo elemental (P) aplicado",
      K: "Potasio elemental (K) aplicado",
    },
    notes: {
      others:
        "La misma cantidad de producto aporta también los demás nutrientes de su riqueza, que se muestran abajo. Si las dosis que alcanzan no son las que necesitas, usa productos separados para cada nutriente.",
      elemental: "Las cantidades elementales usan P = P₂O₅ × {p} y K = K₂O × {k}, a partir de los pesos atómicos estándar.",
    },
  },
};

export default es;
