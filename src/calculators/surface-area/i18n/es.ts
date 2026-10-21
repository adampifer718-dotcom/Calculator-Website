import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SurfaceAreaText } from "../text/en";

const es: CalculatorTranslation<SurfaceAreaText> = {
  content: {
    title: "Calculadora de área superficial",
    shortTitle: "Área superficial",
    summary: "Calcula el área total, el área lateral y el área de la base de un cubo, un prisma rectangular, un cilindro, una esfera, una semiesfera, un cono o una pirámide cuadrada.",
    metaTitle: "Calculadora de área superficial – Cilindro, cono, esfera",
    metaDescription:
      "Calcula el área total de siete cuerpos, además del área lateral, el área de la base y la generatriz o apotema, en mm, cm, m, in o ft, con totales en m² y ft².",
    keywords: ["área superficial", "área total", "área de un cilindro", "área de un cono", "área de una esfera", "área lateral", "generatriz", "área de una pirámide"],
    intro: [
      "El área superficial es la suma de las áreas de todas las caras y superficies curvas de un cuerpo. Indica cuánta pintura, papel de envolver, chapa o tela necesitas para cubrir un objeto por completo.",
      "Elige uno de los siete cuerpos e introduce sus medidas en una sola unidad. Además del total, la calculadora muestra el área lateral (los lados sin los extremos), el área de la base y, en conos y pirámides, la generatriz o la apotema. El total también se da en metros cuadrados y pies cuadrados.",
    ],
    howToUse: [
      "Elige la forma.",
      "Elige la unidad de tus medidas.",
      "Introduce las medidas que se piden para esa forma: el radio (la mitad del diámetro) en las formas redondas y la altura perpendicular en conos y pirámides.",
      "Consulta el área total y, debajo, las áreas parciales.",
    ],
    formulas: [
      { title: "Cubo y prisma rectangular", expression: "A = 6a²\nA = 2(lw + lh + wh)", explanation: "Se suman las áreas de las seis caras rectangulares." },
      { title: "Cilindro", expression: "A = 2πr² + 2πrh", explanation: "Dos bases circulares más la superficie curva, que desplegada es un rectángulo de 2πr de ancho y h de alto." },
      { title: "Esfera y semiesfera", expression: "A = 4πr²\nA = 2πr² + πr² = 3πr²", explanation: "Una semiesfera cerrada tiene la mitad de la superficie curva de la esfera más su base circular plana." },
      { title: "Cono", expression: "s = √(r² + h²)\nA = πr² + πrs", explanation: "El círculo de la base más la superficie lateral πrs, donde s es la generatriz." },
      { title: "Pirámide cuadrada", expression: "s = √((a/2)² + h²)\nA = a² + 2as", explanation: "La base cuadrada más cuatro triángulos, cada uno con base a y altura s (la apotema de la cara)." },
    ],
    examples: [
      {
        title: "Una caja de envío de 30 × 20 × 10 cm",
        steps: ["lw = 600, lh = 300, wh = 200", "A = 2 × (600 + 300 + 200) = 2200 cm²", "2200 cm² = 0,22 m²"],
      },
      {
        title: "Un cono de 0,6 m de radio y 0,8 m de altura",
        steps: ["s = √(0,6² + 0,8²) = 1 m", "Base = π × 0,36 ≈ 1,131 m², lateral = π × 0,6 × 1 ≈ 1,885 m²", "A ≈ 1,131 + 1,885 ≈ 3,016 m²"],
      },
      {
        title: "Una pirámide cuadrada de 6 ft de base y 4 ft de altura",
        steps: ["s = √(3² + 4²) = 5 ft", "Lateral = 2 × 6 × 5 = 60 ft², base = 36 ft²", "A = 36 + 60 = 96 ft²"],
      },
    ],
    assumptions: [
      "Las formas son ideales y rectas: el vértice de conos y pirámides queda justo encima del centro de la base y las formas redondas son círculos perfectos.",
      "Los totales corresponden a cuerpos cerrados. Un cilindro incluye sus dos bases, un cono y una pirámide incluyen la base y una semiesfera incluye su cara plana. Para formas abiertas, usa el área lateral o curva.",
      "Los objetos reales tienen juntas, solapes y grosor. Añade un margen al comprar el material para cubrirlos.",
    ],
    faqs: [
      { question: "¿Qué diferencia hay entre el área lateral y el área total?", answer: "El área lateral cuenta solo los lados. El área total añade la base y, en prismas y cilindros, también la cara superior." },
      { question: "¿Qué es la generatriz o la apotema?", answer: "Es la distancia medida sobre la superficie inclinada desde el borde de la base hasta el vértice. Es más larga que la altura vertical y se obtiene con el teorema de Pitágoras." },
      { question: "¿Cómo paso de cm² a m²?", answer: "Divide entre 10.000, porque un metro son 100 cm y el área crece con el cuadrado: 100 × 100 = 10.000." },
    ],
    sourcesUsedFor: [
      "Fórmulas del área superficial del prisma rectangular, el cilindro, la esfera y el cono.",
      "Aplicación resuelta de las fórmulas del área del cilindro y de la esfera.",
    ],
  },
  text: {
    shape: "Forma",
    shapes: {
      cube: "Cubo",
      box: "Prisma rectangular (ortoedro)",
      cylinder: "Cilindro (cerrado)",
      sphere: "Esfera",
      hemisphere: "Semiesfera (con base plana)",
      cone: "Cono (con base)",
      pyramid: "Pirámide cuadrada (con base)",
    },
    unit: "Unidad de longitud",
    unitHelp: "Introduce todas las medidas en esta unidad. Las áreas se muestran en la misma unidad al cuadrado.",
    units: { mm: "Milímetros (mm)", cm: "Centímetros (cm)", m: "Metros (m)", in: "Pulgadas (in)", ft: "Pies (ft)" },
    edge: "Longitud de la arista (a)",
    length: "Largo (l)",
    width: "Ancho (w)",
    height: "Altura (h)",
    heightHelp: "La altura perpendicular, medida en línea recta desde la base, no a lo largo del lado inclinado.",
    radius: "Radio (r)",
    radiusHelp: "La mitad del diámetro.",
    baseSide: "Lado de la base (a)",
    total: "Área total",
    formula: {
      cube: "A = 6a²",
      box: "A = 2(lw + lh + wh)",
      cylinder: "A = 2πr² + 2πrh",
      sphere: "A = 4πr²",
      hemisphere: "A = 3πr²",
      cone: "A = πr² + πr√(r² + h²)",
      pyramid: "A = a² + 2a√((a/2)² + h²)",
    },
    lateral: "Área lateral (solo los lados)",
    curved: "Área de la superficie curva",
    base: "Área de la base",
    eachEnd: "Área de cada base circular",
    face: "Área de una cara",
    slant: "Generatriz o apotema",
    inSquareMeters: "Total en metros cuadrados",
    inSquareFeet: "Total en pies cuadrados",
    note: "El área lateral deja fuera las caras superior e inferior, que es lo que necesitas para una etiqueta, una pared o un revestimiento lateral.",
  },
};

export default es;
