import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { UnitPriceText } from "../text/en";

const es: CalculatorTranslation<UnitPriceText> = {
  content: {
    title: "Calculadora de precio unitario",
    shortTitle: "Precio unitario",
    summary: "Compara dos tamaños de envase por precio por kilogramo, litro o unidad para saber cuál sale más barato.",
    metaTitle: "Calculadora de precio unitario – Compara precios por unidad",
    metaDescription:
      "Compara dos productos por precio unitario por kg, por litro o por unidad, aunque uno venga en onzas o galones, y mira cuánto ahorra el más barato.",
    keywords: [
      "precio unitario",
      "precio por unidad",
      "precio por kilo",
      "precio por litro",
      "comparar precios",
      "qué sale más barato",
      "comparar precios supermercado",
    ],
    intro: [
      "Un envase más grande no siempre es más barato por gramo. El precio unitario, es decir, el precio dividido entre la cantidad, es la forma justa de comparar dos tamaños o dos marcas.",
      "Introduce el precio y la cantidad de cada producto. Las cantidades pueden estar en unidades métricas o de EE. UU.; ambas se convierten a una unidad común antes de compararlas.",
    ],
    howToUse: [
      "Elige la moneda de los precios.",
      "Para el producto A, introduce el precio, la cantidad del envase y su unidad.",
      "Haz lo mismo con el producto B, usando una unidad del mismo tipo: peso, volumen o número de unidades.",
      "Consulta qué producto es más barato, el precio de cada uno por kilogramo, litro o unidad y el porcentaje de ahorro.",
    ],
    formulas: [
      { title: "Precio unitario", expression: "precio unitario = precio ÷ cantidad", explanation: "Primero se convierte la cantidad a kilogramos, litros o unidades." },
      {
        title: "Porcentaje de ahorro",
        expression: "ahorro = (mayor − menor) ÷ mayor × 100",
        explanation: "Cuánto menos pagas por unidad al elegir el producto más barato.",
      },
      {
        title: "Unidades de EE. UU.",
        expression: "1 oz = 28,349523125 g; 1 lb = 453,59237 g; 1 fl oz = 29,5735295625 mL; 1 gal = 3,785411784 L",
        explanation: "Son definiciones exactas, así que la comparación no depende del redondeo.",
      },
    ],
    examples: [
      {
        title: "500 g por 3,49 US$ frente a 1 kg por 5,99 US$",
        steps: ["A: 3,49 ÷ 0,5 kg = 6,98 US$ por kg", "B: 5,99 ÷ 1 kg = 5,99 US$ por kg", "B ahorra (6,98 − 5,99) ÷ 6,98 ≈ 14,18 %"],
      },
      {
        title: "64 fl oz de zumo por 4,29 US$ frente a 1,75 L por 3,19 US$",
        steps: [
          "64 fl oz = 64 × 29,5735295625 mL ≈ 1,8927 L",
          "A: 4,29 ÷ 1,8927 ≈ 2,27 US$ por L",
          "B: 3,19 ÷ 1,75 ≈ 1,82 US$ por L, aproximadamente un 19,58 % más barato",
        ],
      },
      {
        title: "12 huevos por 3,60 US$ frente a 18 huevos por 5,58 US$",
        steps: ["A: 3,60 ÷ 12 = 0,30 US$ por huevo", "B: 5,58 ÷ 18 = 0,31 US$ por huevo", "A ahorra (0,31 − 0,30) ÷ 0,31 ≈ 3,23 %"],
      },
    ],
    assumptions: [
      "Los dos productos te resultan igual de útiles: tienen la misma calidad y vas a gastar todo el envase más grande.",
      "Las onzas son onzas de peso avoirdupois, y las onzas líquidas y los galones son medidas de EE. UU. Las pintas y los galones imperiales del Reino Unido son mayores y no figuran en la lista.",
      "Los precios se comparan tal como se introducen; no se suman impuestos, depósitos ni cupones.",
      "Elegir una moneda solo cambia el formato.",
    ],
    faqs: [
      {
        question: "¿Puedo comparar un producto vendido al peso con otro vendido por volumen?",
        answer:
          "No directamente. Los gramos y los mililitros solo coinciden en líquidos parecidos al agua, así que la calculadora pide unidades del mismo tipo. Mira la etiqueta: muchos envases indican ambas cosas.",
      },
      {
        question: "¿Por qué comparar por kilogramo o por litro y no por gramo?",
        answer:
          "Los precios por gramo son diminutos y difíciles de leer. Por kilogramo o por litro se obtienen cifras de un tamaño parecido al de las etiquetas de los estantes, y la clasificación es la misma en ambos casos.",
      },
      {
        question: "¿El precio unitario de la etiqueta del estante siempre es correcto?",
        answer:
          "Normalmente sí, pero las tiendas pueden usar unidades distintas en etiquetas contiguas, como por onza en una y por libra en otra. Si introduces aquí los dos productos, se expresan en la misma unidad.",
      },
    ],
    sourcesUsedFor: [
      "Cómo se expresan los precios unitarios en el comercio minorista por unidad de peso, volumen o número.",
      "Factores de conversión exactos para la onza y la libra avoirdupois y para la onza líquida y el galón de EE. UU.",
    ],
  },
  text: {
    priceA: "Precio del producto A",
    quantityA: "Cantidad del producto A",
    unitA: "Unidad del producto A",
    priceB: "Precio del producto B",
    quantityB: "Cantidad del producto B",
    unitB: "Unidad del producto B",
    quantityHelp: "La cantidad del envase, por ejemplo 500 para una bolsa de 500 g.",
    units: {
      g: "Gramos (g)",
      kg: "Kilogramos (kg)",
      oz: "Onzas (oz)",
      lb: "Libras (lb)",
      mL: "Mililitros (mL)",
      L: "Litros (L)",
      floz: "Onzas líquidas de EE. UU. (fl oz)",
      gal: "Galones de EE. UU. (gal)",
      item: "Unidades (recuento)",
    },
    perUnit: { mass: "kg", volume: "L", count: "unidad" },
    kindMismatch: "El producto B debe medirse igual que el producto A: los dos por peso, los dos por volumen o los dos por número de unidades.",
    aCheaper: "El producto A es más barato por unidad",
    bCheaper: "El producto B es más barato por unidad",
    same: "Los dos cuestan lo mismo por unidad",
    result: "Mejor compra",
    caption: "{a} para el producto A y {b} para el producto B, por {unit}.",
    unitPriceA: "Precio del producto A por {unit}",
    unitPriceB: "Precio del producto B por {unit}",
    saving: "Ahorro por unidad con el producto más barato",
    difference: "Diferencia de precio por {unit}",
    notes: {
      compare: "Los precios se comparan por {unit} después de convertir ambas cantidades a la misma unidad.",
      waste: "Un precio unitario más bajo solo supone un ahorro si vas a gastar la cantidad mayor antes de que se estropee.",
    },
  },
};

export default es;
