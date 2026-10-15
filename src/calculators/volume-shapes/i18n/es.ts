import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { VolumeShapesText } from "../text/en";

const es: CalculatorTranslation<VolumeShapesText> = {
  content: {
    title: "Calculadora de volumen",
    shortTitle: "Volumen",
    summary: "Calcula el volumen de un cubo, un prisma rectangular, un cilindro, una esfera, una semiesfera, un cono o una pirámide cuadrada, con el resultado en litros, metros cúbicos y galones de EE. UU.",
    metaTitle: "Calculadora de volumen – Cilindro, esfera, cono y más",
    metaDescription:
      "Calcula el volumen de un cubo, prisma, cilindro, esfera, semiesfera, cono o pirámide cuadrada en mm, cm, m, in o ft, además de litros y galones de EE. UU.",
    keywords: ["calcular volumen", "volumen de un cilindro", "volumen de una esfera", "volumen de un cono", "volumen de una pirámide", "metros cúbicos", "litros", "pies cúbicos"],
    intro: [
      "El volumen es el espacio que ocupa un cuerpo. Esta calculadora abarca siete cuerpos habituales, desde un simple cubo hasta un cono o una pirámide cuadrada, para que puedas dimensionar un depósito, una jardinera, una caja o una figura de los deberes.",
      "Elige una forma y una unidad de longitud y escribe las medidas que necesita. El resultado aparece en esa unidad al cubo y también se convierte a litros, metros cúbicos y galones de EE. UU., lo que ayuda a saber cuánto líquido o material cabe dentro.",
    ],
    howToUse: [
      "Elige la forma.",
      "Elige la unidad en la que has medido. Todas las medidas deben estar en la misma unidad.",
      "Introduce las medidas que se piden para esa forma. En las formas redondas, usa el radio, que es la mitad del diámetro.",
      "Consulta el volumen y su conversión a litros, metros cúbicos y galones de EE. UU.",
    ],
    formulas: [
      { title: "Cubo y prisma rectangular", expression: "V = a³\nV = l × w × h", explanation: "Un cubo tiene tres aristas iguales a; en un prisma se multiplican el largo, el ancho y la altura." },
      { title: "Cilindro y cono", expression: "V = πr²h\nV = 1/3 πr²h", explanation: "Un cono contiene exactamente un tercio del cilindro con el mismo radio de base r y la misma altura h." },
      { title: "Esfera y semiesfera", expression: "V = 4/3 πr³\nV = 2/3 πr³", explanation: "Una semiesfera es la mitad de una esfera de radio r." },
      { title: "Pirámide cuadrada", expression: "V = 1/3 a²h", explanation: "Un tercio del área de la base a² por la altura perpendicular h." },
      { title: "Conversión de unidades", expression: "1 m³ = 1000 L\n1 US gal = 3,785411784 L", explanation: "El volumen en tu unidad al cubo se convierte a metros cúbicos con el factor de longitud exacto y, después, a litros y galones." },
    ],
    examples: [
      {
        title: "Un depósito de agua cilíndrico de 1,2 m de alto y 0,5 m de radio",
        steps: ["V = π × 0,5² × 1,2", "= π × 0,3 ≈ 0,94248 m³", "0,94248 m³ × 1000 ≈ 942,48 L, unos 248,98 US gal"],
      },
      {
        title: "Una pelota de 4 pulgadas de radio",
        steps: ["V = 4/3 × π × 4³", "= 4/3 × π × 64 ≈ 268,08 in³", "Son unos 4,39 L o 1,16 US gal"],
      },
      {
        title: "Una pirámide cuadrada de 9 cm de base y 15 cm de altura",
        steps: ["Área de la base = 9² = 81 cm²", "V = 1/3 × 81 × 15 = 405 cm³", "405 cm³ = 0,405 L"],
      },
    ],
    assumptions: [
      "Las formas son ideales: las aristas son rectas, las formas redondas son perfectamente circulares y el cilindro, el cono y la pirámide son rectos (el vértice o la parte superior queda justo encima del centro de la base).",
      "El resultado es el espacio que encierran las medidas exteriores. En un recipiente de paredes gruesas, mide el interior para saber cuánto cabe.",
      "Los galones de EE. UU. son galones líquidos de 3,785411784 L. No se muestran galones imperiales.",
    ],
    faqs: [
      { question: "¿Cómo calculo el volumen si solo conozco el diámetro?", answer: "Divide el diámetro entre dos para obtener el radio e introduce el radio. Una maceta de 30 cm de ancho tiene un radio de 15 cm." },
      { question: "¿Cuántos litros hay en un metro cúbico?", answer: "Exactamente 1000. Un litro es el volumen de un cubo de 10 cm de lado, así que 1000 cm³ forman 1 L." },
      { question: "¿Por qué un cono es un tercio de un cilindro?", answer: "Un cono se estrecha de forma uniforme hasta un punto, y al sumar sus secciones circulares desde la base hasta la punta se obtiene exactamente un tercio de πr²h. El mismo razonamiento hace que una pirámide sea un tercio del prisma con la misma base y altura." },
    ],
    sourcesUsedFor: [
      "Fórmulas del volumen del prisma rectangular, el cilindro, la esfera y el cono.",
      "El galón de EE. UU. de 231 pulgadas cúbicas (3,785411784 L) y la pulgada de 2,54 cm.",
    ],
  },
  text: {
    shape: "Forma",
    shapes: {
      cube: "Cubo",
      box: "Prisma rectangular (ortoedro)",
      cylinder: "Cilindro",
      sphere: "Esfera",
      hemisphere: "Semiesfera",
      cone: "Cono",
      pyramid: "Pirámide cuadrada",
    },
    unit: "Unidad de longitud",
    unitHelp: "Introduce todas las medidas en esta unidad. El volumen se muestra en la misma unidad al cubo.",
    units: { mm: "Milímetros (mm)", cm: "Centímetros (cm)", m: "Metros (m)", in: "Pulgadas (in)", ft: "Pies (ft)" },
    edge: "Longitud de la arista (a)",
    length: "Largo (l)",
    width: "Ancho (w)",
    height: "Altura (h)",
    heightHelp: "La altura perpendicular, desde la base en línea recta hasta la parte superior o el vértice.",
    radius: "Radio (r)",
    radiusHelp: "La mitad del diámetro.",
    baseSide: "Lado de la base (a)",
    volume: "Volumen",
    formula: {
      cube: "V = a³",
      box: "V = l × w × h",
      cylinder: "V = πr²h",
      sphere: "V = 4/3 πr³",
      hemisphere: "V = 2/3 πr³",
      cone: "V = 1/3 πr²h",
      pyramid: "V = 1/3 a²h",
    },
    liters: "En litros",
    cubicMeters: "En metros cúbicos",
    usGallons: "En galones de EE. UU.",
    note: "1 litro equivale a 1000 cm³ y 1 galón de EE. UU. a 3,785411784 litros.",
  },
};

export default es;
