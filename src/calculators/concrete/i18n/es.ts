import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ConcreteText } from "../text/en";

const es: CalculatorTranslation<ConcreteText> = {
  content: {
    title: "Calculadora de hormigón",
    shortTitle: "Hormigón",
    summary: "Calcula cuánto hormigón pedir para losas, zapatas, pilares redondos y tubos huecos, con un margen opcional por desperdicio.",
    metaTitle: "Calculadora de hormigón – Volumen de losas, pilares y tubos",
    metaDescription:
      "Calcula el volumen de hormigón para losas, zapatas, pilares y tubos en metros cúbicos, yardas cúbicas, pies cúbicos y litros, con margen por desperdicio.",
    keywords: ["calculadora de hormigón", "calcular metros cúbicos de hormigón", "volumen de hormigón", "hormigón para losa", "hormigón para zapatas", "hormigón para pilares", "hormigón preparado"],
    intro: [
      "El hormigón se pide por volumen. Introduce las dimensiones de una losa, una zapata, un pilar redondo o un tubo hueco para ver cuánto necesitas, en las unidades que usan los proveedores.",
      "Un margen opcional por desperdicio cubre los derrames, el terreno irregular y los encofrados que se abomban hacia fuera, para que no te quedes corto en la entrega.",
    ],
    howToUse: [
      "Elige la forma y las unidades métricas o estadounidenses.",
      "Introduce las dimensiones: los lados largos en metros o pies, y el espesor y los diámetros en centímetros o pulgadas.",
      "Introduce cuántas piezas idénticas vas a hormigonar.",
      "Fija el margen por desperdicio (lo habitual es entre el 5 y el 10 %) y consulta el volumen que debes pedir.",
    ],
    formulas: [
      { title: "Losa o zapata", expression: "V = largo × ancho × espesor", explanation: "Un bloque rectangular. Primero pasa todas las dimensiones a la misma unidad." },
      { title: "Pilar redondo", expression: "V = π × (diámetro ÷ 2)² × altura", explanation: "Un cilindro, como un pilar hormigonado en un encofrado de tubo de cartón." },
      { title: "Tubo hueco", expression: "V = π × ((exterior ÷ 2)² − (interior ÷ 2)²) × altura", explanation: "El cilindro exterior menos el núcleo hueco." },
      { title: "Con desperdicio", expression: "Pedido = V × número de piezas × (1 + % de desperdicio ÷ 100)", explanation: "1 yd³ = 0,764555 m³ y 1 m³ = 1000 L." },
    ],
    examples: [
      {
        title: "Losa de patio de 4 m × 3 m, 10 cm de espesor, 10 % de desperdicio",
        steps: ["V = 4 m × 3 m × 0,10 m = 1,2 m³", "Con un 10 % de desperdicio: 1,2 × 1,10 = 1,32 m³"],
      },
      {
        title: "Solera de garaje de 10 ft × 10 ft, 4 in de espesor, sin desperdicio",
        steps: ["V = 10 ft × 10 ft × 4/12 ft = 33,33 ft³", "33,33 ft³ ÷ 27 = 1,235 yd³"],
      },
    ],
    assumptions: [
      "Las formas son rectángulos y cilindros ideales; mide los encofrados reales, porque el terreno y los encofrados rara vez son perfectamente planos o rectos.",
      "El margen por desperdicio es un porcentaje del volumen exacto; no tiene en cuenta las armaduras, que desplazan una pequeña cantidad de hormigón.",
      "Es solo una estimación del volumen, no asesoramiento técnico ni un cálculo estructural. El espesor, las armaduras y la resistencia del hormigón deben cumplir la normativa local o el proyecto de un ingeniero.",
    ],
    faqs: [
      {
        question: "¿Cuánto hormigón de más debo pedir?",
        answer: "Entre un 5 y un 10 % es un margen habitual para losas sobre terreno preparado; las excavaciones irregulares pueden necesitar más. Quedarse corto a mitad del vertido provoca juntas débiles, así que los proveedores suelen recomendar redondear al alza.",
      },
      { question: "¿Cuántos pies cúbicos tiene una yarda cúbica?", answer: "27, porque una yarda mide 3 pies y 3 × 3 × 3 = 27. Una yarda cúbica equivale a unos 0,765 metros cúbicos." },
      { question: "¿Puedo usarla para sacos de hormigón premezclado?", answer: "Sí: divide el volumen entre el rendimiento indicado en el saco, que varía según el producto, y redondea al alza." },
    ],
    sourcesUsedFor: ["Factores de conversión exactos entre pies, pulgadas, metros, yardas cúbicas y metros cúbicos."],
  },
  text: {
    shape: "Forma",
    shapes: { slab: "Losa o zapata", column: "Pilar redondo", tube: "Tubo hueco" },
    units: "Unidades",
    unitSystems: { metric: "Métricas (m, cm)", imperial: "EE. UU. (ft, in)" },
    length: "Largo",
    width: "Ancho",
    thickness: "Espesor",
    diameter: "Diámetro",
    outerDiameter: "Diámetro exterior",
    innerDiameter: "Diámetro interior",
    height: "Altura",
    quantity: "Número de piezas idénticas",
    waste: "Margen por desperdicio",
    wasteHelp: "Margen para derrames, terreno irregular y excavación de más. Lo habitual es entre el 5 y el 10 %; usa 0 para obtener el volumen exacto.",
    errors: { inner: "El diámetro interior debe ser menor que el exterior." },
    volume: "Hormigón que pedir",
    caption: "{exact} sin el margen del {waste} por desperdicio.",
    exact: "Volumen exacto (sin desperdicio)",
    inCubicMetres: "En metros cúbicos",
    inCubicYards: "En yardas cúbicas",
    inCubicFeet: "En pies cúbicos",
    inLitres: "En litros",
    notes: {
      order: "El hormigón preparado se vende por metro cúbico o por yarda cúbica; redondea al alza hasta el incremento mínimo del proveedor.",
      structural: "Esto solo estima el volumen. El espesor de la losa, las armaduras, la resistencia de la mezcla y el tamaño de las zapatas deben seguir la normativa de edificación local o el proyecto de un ingeniero.",
    },
  },
};

export default es;
