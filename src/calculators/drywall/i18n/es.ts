import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DrywallText } from "../text/en";

const es: CalculatorTranslation<DrywallText> = {
  content: {
    title: "Calculadora de placas de yeso laminado",
    shortTitle: "Placas de yeso",
    summary:
      "Calcula cuántas placas de yeso laminado necesitas para las paredes y, si quieres, el techo, descontando puertas y ventanas y con un margen por desperdicio.",
    metaTitle: "Calculadora de placas de yeso laminado – Placas necesarias",
    metaDescription:
      "Calcula cuántas placas de yeso de 4×8, 4×10 o 4×12 ft (o métricas) comprar para paredes y techo, descontando puertas y ventanas, más un margen por desperdicio.",
    keywords: [
      "placas de yeso laminado",
      "calcular placas de pladur",
      "cuántas placas de yeso necesito",
      "cartón yeso",
      "tabiquería seca",
      "pasta de juntas",
      "presupuesto de placas de yeso",
    ],
    intro: [
      "Las placas de yeso laminado, también llamadas placas de cartón yeso, pladur o drywall, se venden en tamaños fijos. Para saber cuántas comprar, calcula la superficie de las paredes (y del techo, si también lo vas a revestir), resta las puertas y ventanas, añade algo más para los recortes y divide entre la superficie de una placa.",
      "Esta calculadora lo hace para los tamaños de placa habituales en EE. UU. y en el sistema métrico, y redondea al alza a placas enteras. También da una estimación aproximada de la pasta de juntas lista para usar necesaria para acabar las juntas.",
    ],
    howToUse: [
      "Elige unidades de EE. UU. (pies) o métricas (metros).",
      "Introduce la longitud total de las paredes que vas a revestir y su altura. Para una habitación entera, la longitud total es el perímetro.",
      "Elige si incluyes el techo; si lo haces, introduce el largo y el ancho de la habitación.",
      "Introduce cuántas puertas y ventanas hay y ajusta sus tamaños típicos si hace falta.",
      "Elige el tamaño de placa y un margen por desperdicio, y consulta el número de placas que debes comprar.",
    ],
    formulas: [
      {
        title: "Superficie neta",
        expression: "A = L × H + largo del techo × ancho del techo − huecos",
        explanation: "L es la longitud total de las paredes y H su altura. Los huecos son las puertas y ventanas multiplicadas por sus superficies.",
      },
      {
        title: "Placas necesarias",
        expression: "placas = ⌈A × (1 + desperdicio) ÷ superficie de la placa⌉",
        explanation: "Se redondea al alza a una placa entera. Una placa de 4 × 8 ft cubre 32 ft² y una de 1,2 × 2,4 m cubre 2,88 m².",
      },
      {
        title: "Pasta de juntas (aproximada)",
        expression: "pasta ≈ A × 9 gal ÷ 1000 ft² (≈ 0,37 L/m²)",
        explanation: "Una regla práctica para la pasta lista para usar; la ficha técnica del producto da una cifra mejor.",
      },
    ],
    examples: [
      {
        title: "Paredes de una habitación con 50 ft de pared y 8 ft de altura",
        steps: [
          "Superficie de pared = 50 × 8 = 400 ft²",
          "Huecos = 20 + 2 × 15 = 50 ft², así que la superficie neta es 350 ft²",
          "Con un 10 % de desperdicio: 385 ft² ÷ 32 ft² ≈ 12,03, así que compra 13 placas",
        ],
      },
      {
        title: "Habitación de 14 × 12 ft con paredes de 9 ft y techo, placas de 4 × 12",
        steps: [
          "Paredes = 52 × 9 = 468 ft²; techo = 14 × 12 = 168 ft²",
          "Huecos = 2 × 20 + 2 × 15 = 70 ft², así que la superficie neta es 566 ft²",
          "Con un 12 % de desperdicio: 633,92 ft² ÷ 48 ft² ≈ 13,21, así que compra 14 placas",
          "Pasta de juntas ≈ 566 × 9 ÷ 1000 ≈ 5,1 gal",
        ],
      },
      {
        title: "Habitación métrica con 15,6 m de pared, 2,6 m de altura y techo",
        steps: [
          "Paredes = 15,6 × 2,6 = 40,56 m²; techo = 4,5 × 3,3 = 14,85 m²",
          "Huecos = 1,9 + 1,4 = 3,3 m², así que la superficie neta es 52,11 m²",
          "Con un 10 % de desperdicio: 57,32 m² ÷ 2,88 m² ≈ 19,9, así que compra 20 placas",
        ],
      },
    ],
    assumptions: [
      "Las paredes y los techos se tratan como rectángulos planos. Calcula aparte los hastiales, los techos inclinados y los falsos techos de aleros, y súmalos a la longitud de pared o como superficie de techo adicional.",
      "El recuento se basa en la superficie. Un despiece placa a placa puede requerir algunas placas más, sobre todo cuando la altura de la pared no encaja con la longitud de la placa.",
      "Los tamaños de puertas y ventanas son valores típicos. Mide los tuyos para una estimación más precisa.",
      "La cifra de pasta de juntas es aproximada y se basa en una regla práctica de un fabricante para la pasta lista para usar. No se estiman los tornillos, la cinta ni las cantoneras.",
    ],
    faqs: [
      {
        question: "¿Cuánto desperdicio debo prever para las placas de yeso?",
        answer:
          "Lo habitual es un 10 % para habitaciones rectangulares sencillas. Las habitaciones con muchas esquinas, huecos, techos inclinados o tramos de pared cortos producen más recortes, así que en ellas es más seguro un 15 % o más.",
      },
      {
        question: "¿Conviene usar placas más largas?",
        answer:
          "Las placas más largas, como las de 4 × 12 ft, dejan menos juntas que encintar y acabar, lo que ahorra tiempo y pasta. Pesan más y cuesta más pasarlas por puertas y escaleras, así que encajan con habitaciones diáfanas y equipos de dos personas.",
      },
      {
        question: "¿Tengo que restar las ventanas y las puertas?",
        answer:
          "Sí, para la superficie. Muchos instaladores colocan las placas por encima de los huecos pequeños y los recortan después, así que el margen por desperdicio cubre esos recortes.",
      },
    ],
    sourcesUsedFor: [
      "La regla práctica de unos dos cubos de 4,5 galones de pasta de juntas lista para usar para acabar 1000 ft² de placa de yeso.",
    ],
  },
  text: {
    units: "Unidades",
    unitSystems: { imperial: "EE. UU. (ft)", metric: "Métricas (m)" },
    length: "Longitud total de las paredes",
    lengthHelp: "Suma los anchos de todas las paredes que vas a revestir. Para una habitación entera es el perímetro.",
    height: "Altura de las paredes",
    ceiling: "¿Incluir el techo?",
    ceilingOptions: { no: "No", yes: "Sí" },
    roomLength: "Largo de la habitación (techo)",
    roomWidth: "Ancho de la habitación (techo)",
    doors: "Número de puertas",
    doorArea: "Superficie de una puerta",
    windows: "Número de ventanas",
    windowArea: "Superficie de una ventana",
    openingHelp: "Se rellena un valor típico; mide los tuyos para una estimación más precisa.",
    sheet: "Tamaño de placa",
    waste: "Margen por desperdicio",
    wasteHelp:
      "Un extra para recortes, errores y placas dañadas. Un 10 % sirve para habitaciones rectangulares sencillas; usa más si hay muchas esquinas, huecos o techos inclinados.",
    errors: {
      openings:
        "Las puertas y ventanas suman al menos toda la superficie de pared. Revisa los números, los tamaños de los huecos y las dimensiones de las paredes.",
    },
    sheets: "Placas de yeso necesarias",
    caption: "{area} de placa más {waste} de desperdicio, en placas de {sheet} ({sheetArea} cada una).",
    wallArea: "Superficie de pared",
    ceilingArea: "Superficie de techo",
    openingArea: "Puertas y ventanas",
    netArea: "Superficie neta a cubrir",
    areaWithWaste: "Superficie con desperdicio",
    sheetArea: "Superficie de una placa",
    compound: "Pasta de juntas, aproximada (lista para usar)",
    notes: {
      compound:
        "La cifra de pasta de juntas usa una regla práctica de unos 9 galones estadounidenses (dos cubos de 4,5 galones) de pasta lista para usar por cada 1000 ft² de placa, es decir, unos 0,37 L por m². La cantidad varía según el producto y el nivel de acabado, así que consulta la ficha técnica del producto.",
      layout:
        "Es una estimación por superficie. Planificar el despiece placa a placa, sobre todo en paredes altas y alrededor de los huecos, puede cambiar el recuento.",
      extras: "No se incluyen los tornillos, la cinta ni las cantoneras.",
    },
  },
};

export default es;
