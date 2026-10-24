import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { GravelMulchText } from "../text/en";

const es: CalculatorTranslation<GravelMulchText> = {
  content: {
    title: "Calculadora de grava y mantillo",
    shortTitle: "Grava y mantillo",
    summary:
      "Calcula cuántas yardas cúbicas o metros cúbicos de grava, piedra triturada o mantillo pedir, con el peso, los sacos y el coste.",
    metaTitle: "Calculadora de grava y mantillo – m³, toneladas y sacos",
    metaDescription:
      "Calcula la grava, la piedra triturada o el mantillo para una zona rectangular o redonda en m³ o yardas cúbicas, con el peso en toneladas, los sacos y el coste.",
    keywords: [
      "calculadora de grava",
      "calcular mantillo",
      "cuánta grava necesito",
      "metros cúbicos de grava",
      "toneladas de grava",
      "piedra triturada",
      "sacos de corteza",
      "árido decorativo",
    ],
    intro: [
      "La grava, la piedra triturada y el mantillo se venden por volumen (yardas cúbicas o metros cúbicos) o por peso (toneladas cortas o toneladas métricas). Para saber cuánto pedir, multiplica la superficie que vas a cubrir por el espesor de la capa y usa la densidad aparente del material para convertir ese volumen en peso.",
      "Esta calculadora trata parterres rectangulares y redondos en unidades de EE. UU. o métricas, y muestra el volumen en ambos sistemas, el peso, el número de sacos si compras material ensacado y el coste a un precio por tonelada o por yarda cúbica.",
    ],
    howToUse: [
      "Elige unidades de EE. UU. (pies y pulgadas) o métricas (metros y centímetros).",
      "Elige un rectángulo o un círculo e introduce sus dimensiones.",
      "Introduce el espesor de la capa que quieres extender.",
      "Elige el material. Se rellena una densidad aparente típica; sustitúyela por la cifra de tu proveedor si la tienes.",
      "Si quieres, introduce un tamaño de saco y un precio por tonelada corta o por yarda cúbica (por tonelada métrica o m³ en el sistema métrico) para ver los sacos y el coste.",
    ],
    formulas: [
      {
        title: "Superficie",
        expression: "A = L × W, o A = π × d² ÷ 4 para un círculo",
        explanation: "L y W son el largo y el ancho, y d el diámetro.",
      },
      {
        title: "Volumen",
        expression: "V = A × espesor",
        explanation:
          "Con pies y pulgadas, V (ft³) = A × espesor (in) ÷ 12 y 1 yd³ = 27 ft³. Con metros y centímetros, V (m³) = A × espesor (cm) ÷ 100.",
      },
      {
        title: "Peso",
        expression: "peso = V × densidad aparente",
        explanation: "1 tonelada corta = 2000 lb; 1 tonelada métrica = 1000 kg.",
      },
      {
        title: "Sacos",
        expression: "sacos = ⌈V ÷ tamaño del saco⌉",
        explanation: "Se redondea al alza a un saco entero.",
      },
    ],
    examples: [
      {
        title: "Camino de grava de 20 ft × 4 ft y 3 in de espesor",
        steps: [
          "Volumen = 20 × 4 × 3 ÷ 12 = 20 ft³",
          "= 20 ÷ 27 ≈ 0,74 yd³",
          "Peso = 20 × 100 = 2000 lb = 1 tonelada corta, así que unos 45 US$ a 45 US$ por tonelada",
        ],
      },
      {
        title: "Alcorque redondo de 3 m de diámetro con 8 cm de corteza en sacos de 50 L",
        steps: [
          "Superficie = π × 3² ÷ 4 ≈ 7,07 m²",
          "Volumen = 7,07 × 0,08 ≈ 0,565 m³ (565 L)",
          "Sacos = 565 ÷ 50 ≈ 11,3, así que compra 12 sacos; peso ≈ 170 kg",
        ],
      },
      {
        title: "Base de piedra triturada de 12 ft × 10 ft y 4 in de espesor, a 38 US$ la yarda cúbica",
        steps: [
          "Volumen = 12 × 10 × 4 ÷ 12 = 40 ft³ ≈ 1,48 yd³",
          "Peso = 40 × 92,6 = 3704 lb ≈ 1,85 toneladas cortas",
          "Coste = 1,48 × 38 US$ ≈ 56,30 US$",
        ],
      },
    ],
    assumptions: [
      "Las densidades aparentes son valores típicos para material suelto y seco, redondeados a partir de tablas publicadas. Las densidades reales varían con el tipo de roca, la humedad, la granulometría y la compactación; el material mojado puede pesar bastante más. Consúltalo con tu proveedor.",
      "La superficie se trata como plana y la capa como de espesor uniforme. Las capas de base compactadas necesitan más material suelto que su volumen final.",
      "Los precios son los que introduzcas; el coste no incluye el transporte, los impuestos ni los bordillos o la malla.",
    ],
    faqs: [
      {
        question: "¿Qué espesor debe tener la grava o el mantillo?",
        answer:
          "El mantillo decorativo suele extenderse con unos 5–10 cm (2–4 in) de espesor y la grava decorativa con 2–3 in. Las entradas de coches y los caminos con base compactada necesitan capas más gruesas; sigue las indicaciones para tu proyecto.",
      },
      {
        question: "¿Cuántos pies cuadrados cubre una yarda cúbica?",
        answer:
          "Una yarda cúbica cubre 324 ft² con 1 in de espesor, 108 ft² con 3 in y 81 ft² con 4 in. Divide 324 entre el espesor en pulgadas.",
      },
      {
        question: "¿Por qué mi proveedor indica un peso distinto?",
        answer:
          "La densidad aparente depende de la piedra, del tamaño de los trozos y de lo mojado que esté el material. Los proveedores conocen el peso de sus propios productos, así que usa su cifra cuando pidas por toneladas.",
      },
    ],
    sourcesUsedFor: [
      "Pesos típicos de unas 2700 lb por yarda cúbica para la grava y 2500 lb por yarda cúbica para la piedra triturada, usados para las densidades predeterminadas.",
      "Un peso típico de unas 500 lb por yarda cúbica para las astillas de madera trituradas, usado para el valor predeterminado del mantillo.",
    ],
  },
  text: {
    units: "Unidades",
    unitSystems: { imperial: "EE. UU. (ft, in)", metric: "Métricas (m, cm)" },
    shape: "Forma de la zona",
    shapes: { rectangle: "Rectángulo", circle: "Círculo" },
    length: "Largo",
    width: "Ancho",
    diameter: "Diámetro",
    depth: "Espesor",
    depthHelp: "El grosor final de la capa. La grava y el mantillo decorativos suelen extenderse con unos 5–10 cm (2–4 in) de espesor.",
    material: "Material",
    materials: {
      gravel: "Grava",
      crushedStone: "Piedra triturada",
      woodMulch: "Astillas de madera o corteza",
      custom: "Otro (introduce la densidad)",
    },
    density: "Densidad aparente",
    densityHelp:
      "Peso por unidad de volumen suelto. Se rellena un valor típico; es mejor la cifra de tu proveedor para el producto exacto, porque la humedad y la granulometría la modifican.",
    bag: "Tamaño del saco (opcional)",
    bagHelp: "Rellénalo para ver cuántos sacos comprar en lugar de un pedido a granel.",
    priceBasis: "El precio se indica",
    priceBases: { weight: "Por tonelada corta / métrica", volume: "Por yarda cúbica / m³" },
    price: "Precio (opcional)",
    priceHelp: "Déjalo vacío para omitir la estimación del coste.",
    volume: "Volumen necesario",
    caption: "{area} con {depth} de espesor.",
    area: "Superficie cubierta",
    volumeCubicFeet: "Volumen en pies cúbicos",
    volumeOther: "Volumen en el otro sistema",
    weightShortTons: "Peso en toneladas cortas estadounidenses",
    weightTonnes: "Peso en toneladas métricas",
    weightPounds: "Peso en libras",
    weightKilograms: "Peso en kilogramos",
    bags: "Sacos necesarios",
    shortTonUnit: "t corta",
    cost: "Coste estimado",
    notes: {
      density:
        "El peso usa una densidad aparente de {density}. Las densidades varían con la humedad, la granulometría y la compactación; consúltalo con tu proveedor.",
      order:
        "Los proveedores suelen vender en cantidades fijas, así que redondea el pedido al alza y prevé un poco más por el asentamiento y el terreno irregular.",
      shortTon: "Una tonelada corta estadounidense son 2000 lb (907,18474 kg); una tonelada métrica son 1000 kg.",
    },
  },
};

export default es;
