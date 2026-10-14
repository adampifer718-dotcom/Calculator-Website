import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SquareFootageText } from "../text/en";

const es: CalculatorTranslation<SquareFootageText> = {
  content: {
    title: "Calculadora de pies cuadrados",
    shortTitle: "Pies cuadrados",
    summary: "Calcula la superficie de un rectángulo, un círculo o un triángulo en pies cuadrados, metros cuadrados y yardas cuadradas.",
    metaTitle: "Calculadora de pies cuadrados – Superficie en ft² y m²",
    metaDescription: "Calcula los pies cuadrados de rectángulos, círculos y triángulos a partir de pies, pulgadas, yardas, metros o centímetros, con m² y yardas cuadradas.",
    keywords: ["pies cuadrados", "ft2 a m2", "calcular superficie", "metros cuadrados", "superficie de una habitación", "calcular m2 suelo"],
    intro: [
      "Los pies cuadrados miden la superficie de un área en pies al cuadrado. Se usan para suelos, pintura, azulejos, moquetas y anuncios inmobiliarios.",
      "Mide cada dimensión, elige la forma y la unidad, y la calculadora convierte la superficie a pies cuadrados, metros cuadrados y yardas cuadradas.",
    ],
    howToUse: [
      "Elige la forma: rectángulo, círculo o triángulo.",
      "Selecciona la unidad en la que has medido.",
      "Introduce las dimensiones y, si hace falta, cuántas superficies idénticas hay.",
      "Consulta la superficie en pies cuadrados, metros cuadrados y yardas cuadradas.",
    ],
    formulas: [
      { title: "Rectángulo", expression: "Superficie = largo × ancho", explanation: "Para habitaciones cuadradas y rectangulares." },
      { title: "Círculo", expression: "Superficie = π × (diámetro ÷ 2)²", explanation: "La mitad del diámetro es el radio." },
      { title: "Triángulo", expression: "Superficie = base × altura ÷ 2", explanation: "La altura se mide en perpendicular a la base." },
      {
        title: "Conversión de unidades",
        expression: "1 ft = 12 in = 0,3048 m\n1 ft² = 0,09290304 m²\n1 yd² = 9 ft²",
        explanation: "Las superficies se convierten con el cuadrado del factor de longitud.",
      },
    ],
    examples: [
      { title: "Una habitación de 12 ft × 15 ft", steps: ["Superficie = 12 × 15 = 180 ft²", "180 × 0,09290304 = 16,72 m²"] },
      { title: "Una habitación de 4 m × 3,5 m", steps: ["Superficie = 4 × 3,5 = 14 m²", "14 ÷ 0,09290304 = 150,69 ft²"] },
      { title: "Un patio circular de 10 ft de diámetro", steps: ["Radio = 10 ÷ 2 = 5 ft", "Superficie = π × 5² = 78,54 ft²"] },
    ],
    assumptions: [
      "Las medidas se toman en ángulo recto y la forma es regular.",
      "Para habitaciones en forma de L o irregulares, divide el espacio en rectángulos y suma los resultados.",
      "Añade material de más (a menudo entre un 5 y un 10 %) para cortes y desperdicios; esta calculadora solo da la superficie exacta.",
    ],
    faqs: [
      { question: "¿Cómo se calculan los pies cuadrados?", answer: "Multiplica el largo por el ancho en pies. Una habitación de 10 ft por 12 ft tiene 120 pies cuadrados." },
      { question: "¿Cómo convierto metros cuadrados a pies cuadrados?", answer: "Divide entre 0,09290304 o multiplica por 10,764 aproximadamente. Así, 20 m² son unos 215,3 ft²." },
      { question: "¿Cómo mido una habitación en forma de L?", answer: "Divídela en dos rectángulos, calcula la superficie de cada uno y súmalas." },
    ],
    sourcesUsedFor: ["Factores exactos de conversión de longitud (1 ft = 0,3048 m, 1 in = 2,54 cm)."],
  },
  text: {
    shape: "Forma",
    shapes: { rectangle: "Rectángulo o cuadrado", circle: "Círculo", triangle: "Triángulo" },
    unit: "Unidad de medida",
    units: { ft: "Pies (ft)", in: "Pulgadas (in)", yd: "Yardas (yd)", m: "Metros (m)", cm: "Centímetros (cm)" },
    length: "Largo",
    width: "Ancho",
    diameter: "Diámetro",
    base: "Base",
    height: "Altura",
    quantity: "Número de superficies",
    quantityHelp: "Para varias habitaciones o piezas idénticas.",
    area: "Superficie",
    quantityCaption: "Total de {count} superficies idénticas.",
    sqM: "Metros cuadrados",
    sqYd: "Yardas cuadradas",
    sqUnit: "Superficie en {unit}²",
    sqFtSuffix: "ft²",
    sqYdSuffix: "yd²",
  },
};

export default es;
