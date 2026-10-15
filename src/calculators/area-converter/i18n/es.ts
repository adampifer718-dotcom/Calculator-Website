import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AreaConverterText } from "../text/en";

const es: CalculatorTranslation<AreaConverterText> = {
  content: {
    title: "Calculadora de conversión de superficie",
    shortTitle: "Superficie",
    summary: "Convierte entre metros cuadrados, hectáreas, kilómetros cuadrados, pies cuadrados, yardas cuadradas, acres, millas cuadradas y más.",
    metaTitle: "Calculadora de conversión de superficie – Acres, ha, m² y ft²",
    metaDescription:
      "Convierte superficies entre metros cuadrados, hectáreas, km², pulgadas, pies y yardas cuadradas, acres y millas cuadradas, con factores exactos.",
    keywords: [
      "conversor de superficie",
      "conversor de área",
      "acres a hectáreas",
      "pies cuadrados a metros cuadrados",
      "m2 a ft2",
      "hectárea",
      "acre",
      "millas cuadradas",
      "superficie de terreno",
    ],
    intro: [
      "Convierte una superficie de una unidad a otra, tanto si comparas una parcela anunciada en acres con otra en hectáreas como si calculas la superficie de una habitación en metros cuadrados. La tabla muestra tu valor en las diez unidades a la vez.",
      "Todos los factores son exactos. Las unidades cuadradas son el cuadrado de una unidad de longitud, así que un pie cuadrado es 0,3048 m × 0,3048 m = 0,09290304 m², y un acre son 43.560 pies cuadrados.",
    ],
    howToUse: [
      "Escribe la superficie que quieres convertir.",
      "Elige la unidad en la que está y la unidad que quieres.",
      "Consulta el valor convertido o revisa la tabla para ver las demás unidades.",
    ],
    formulas: [
      {
        title: "Conversión a través del metro cuadrado",
        expression: "resultado = valor × (m² por unidad de origen) ÷ (m² por unidad de destino)",
        explanation: "Cada unidad equivale a un número fijo de metros cuadrados, así que cualquier pareja se puede convertir a través del m².",
      },
      {
        title: "Factores clave",
        expression:
          "1 ha = 10.000 m²\n1 ft² = 0,09290304 m²\n1 yd² = 9 ft² = 0,83612736 m²\n1 acre = 43.560 ft² = 4046,8564224 m²\n1 mi² = 640 acres = 2.589.988,110336 m²",
        explanation: "Los valores imperiales se derivan del pie internacional, de exactamente 0,3048 m.",
      },
    ],
    examples: [
      {
        title: "2,5 acres a hectáreas",
        steps: ["2,5 × 4046,8564224 m² = 10.117,141056 m²", "10.117,141056 ÷ 10.000 ≈ 1,0117 ha"],
      },
      {
        title: "1500 metros cuadrados a pies cuadrados",
        steps: ["1 ft² = 0,09290304 m²", "1500 ÷ 0,09290304 ≈ 16.145,87 ft²"],
      },
      {
        title: "640 acres a millas cuadradas",
        steps: ["640 × 4046,8564224 m² = 2.589.988,110336 m²", "2.589.988,110336 ÷ 2.589.988,110336 = 1 mi²"],
      },
    ],
    assumptions: [
      "Los acres y las millas cuadradas usan el pie internacional. El antiguo acre topográfico de EE. UU. es mayor en unas 4 partes por millón, lo que solo importa en levantamientos topográficos de precisión.",
      "Los resultados se muestran con 10 cifras significativas.",
    ],
    faqs: [
      {
        question: "¿Cuántos pies cuadrados tiene un acre?",
        answer: "Exactamente 43.560 pies cuadrados. Una parcela cuadrada de un acre mide unos 208,7 pies de lado.",
      },
      {
        question: "¿Es una hectárea mayor que un acre?",
        answer: "Sí. Una hectárea son 10.000 m², unos 2,471 acres, así que un acre equivale aproximadamente a 0,405 hectáreas.",
      },
      {
        question: "¿Por qué un metro cuadrado no son 3,28 pies cuadrados?",
        answer: "Porque la superficie crece con el cuadrado de la longitud. Un metro son unos 3,2808 pies, así que un metro cuadrado son unos 3,2808² ≈ 10,764 pies cuadrados.",
      },
    ],
    sourcesUsedFor: [
      "Factores de conversión a metros cuadrados del acre, la milla cuadrada, el pie cuadrado y otras unidades de superficie.",
      "Definiciones del acre (43.560 ft²) y de la milla cuadrada (640 acres).",
    ],
  },
  text: {
    value: "Valor",
    from: "De",
    to: "A",
    unitNames: {
      mm2: "Milímetros cuadrados",
      cm2: "Centímetros cuadrados",
      m2: "Metros cuadrados",
      ha: "Hectáreas",
      km2: "Kilómetros cuadrados",
      in2: "Pulgadas cuadradas",
      ft2: "Pies cuadrados",
      yd2: "Yardas cuadradas",
      acre: "Acres",
      mi2: "Millas cuadradas",
    },
    primary: "{value} {symbol} en {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} en todas las unidades de superficie",
    tableUnit: "Unidad",
    tableValue: "Valor",
    note: "Los resultados se muestran con 10 cifras significativas.",
  },
};

export default es;
