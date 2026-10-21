import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { VolumeConverterText } from "../text/en";

const es: CalculatorTranslation<VolumeConverterText> = {
  content: {
    title: "Calculadora de conversión de volumen",
    shortTitle: "Volumen",
    summary: "Convierte entre litros, mililitros, metros cúbicos, galones estadounidenses e imperiales, cuartos, pintas, tazas, onzas líquidas, cucharas y pies cúbicos.",
    metaTitle: "Calculadora de conversión de volumen – Litros y galones",
    metaDescription:
      "Convierte volúmenes entre litros, mililitros, m³, galones de EE. UU. e imperiales, cuartos, pintas, tazas, onzas líquidas, cucharadas y pies cúbicos.",
    keywords: ["conversor de volumen", "litros a galones", "galones a litros", "ml a tazas", "onzas líquidas a ml", "pies cúbicos a litros", "galón imperial"],
    intro: [
      "Convierte cualquier volumen entre 15 unidades métricas, estadounidenses e imperiales. La tabla muestra tu valor en todas las unidades a la vez.",
      "Las unidades estadounidenses e imperiales comparten nombre, pero no tamaño: un galón imperial es aproximadamente un 20 % mayor que uno estadounidense, y una pinta imperial tiene 20 onzas líquidas en lugar de 16.",
    ],
    howToUse: [
      "Introduce el valor.",
      "Elige la unidad de origen y la unidad a la que quieres convertir.",
      "Consulta el resultado o usa la tabla para comparar todas las unidades.",
    ],
    formulas: [
      {
        title: "Conversión a través del litro",
        expression: "resultado = valor × (litros por unidad de origen) ÷ (litros por unidad de destino)",
        explanation: "Cada unidad se define como un número fijo de litros.",
      },
      {
        title: "Factores clave",
        expression: "1 US gal = 231 in³ = 3,785411784 L\n1 US gal = 4 qt = 8 pt = 16 tazas = 128 fl oz\n1 US fl oz = 2 tbsp = 6 tsp\n1 imp gal = 4,54609 L = 160 imp fl oz",
        explanation: "Valores exactos por definición. Un pie cúbico equivale a 28,316846592 L.",
      },
    ],
    examples: [
      {
        title: "1 galón de EE. UU. en litros",
        steps: ["1 galón de EE. UU. = 231 in³ × 0,016387064 L/in³", "= 3,785411784 L"],
      },
      {
        title: "500 mililitros en tazas de EE. UU.",
        steps: ["1 taza de EE. UU. = 236,5882365 mL", "500 ÷ 236,5882365 ≈ 2,113 tazas"],
      },
    ],
    assumptions: [
      "Las unidades de EE. UU. son las medidas de líquidos del sistema usual estadounidense; no se incluyen las pintas y cuartos de áridos, que son algo mayores.",
      "Las cucharas y tazas son las del sistema usual de EE. UU.; las tazas métricas (250 mL) y las cucharadas (15 mL, o 20 mL en Australia) difieren ligeramente.",
      "Los resultados se muestran redondeados a 10 cifras significativas.",
    ],
    faqs: [
      { question: "¿Cuántos litros tiene un galón?", answer: "Un galón de EE. UU. tiene 3,785 litros; un galón imperial (británico), 4,546 litros." },
      { question: "¿Cuántos mililitros tiene una taza?", answer: "Una taza del sistema usual de EE. UU. tiene 236,6 mL, una taza del etiquetado nutricional de EE. UU., 240 mL, y una taza métrica, 250 mL." },
      {
        question: "¿Por qué son distintas las pintas británica y estadounidense?",
        answer: "Ambos sistemas dividen su propio galón en 8 pintas, pero el galón imperial es mayor, así que una pinta imperial tiene 568 mL y una estadounidense, 473 mL.",
      },
    ],
    sourcesUsedFor: ["Definiciones exactas del galón de EE. UU. (231 pulgadas cúbicas) y sus subdivisiones, y del galón imperial (4,54609 litros)."],
  },
  text: {
    value: "Valor",
    from: "De",
    to: "A",
    unitNames: {
      ml: "Mililitros",
      l: "Litros",
      m3: "Metros cúbicos",
      tsp: "Cucharaditas de EE. UU.",
      tbsp: "Cucharadas de EE. UU.",
      floz: "Onzas líquidas de EE. UU.",
      cup: "Tazas de EE. UU.",
      pt: "Pintas de EE. UU.",
      qt: "Cuartos de galón de EE. UU.",
      gal: "Galones de EE. UU.",
      impfloz: "Onzas líquidas imperiales",
      imppt: "Pintas imperiales",
      impgal: "Galones imperiales",
      in3: "Pulgadas cúbicas",
      ft3: "Pies cúbicos",
    },
    primary: "{value} {symbol} en {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} en todas las unidades de volumen",
    tableUnit: "Unidad",
    tableValue: "Valor",
    note: "Las unidades de EE. UU. y las imperiales son distintas: un galón de EE. UU. tiene 3,785 L y un galón imperial, 4,546 L. Los resultados se muestran con 10 cifras significativas.",
  },
};

export default es;
