import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FuelCostText } from "../text/en";

const es: CalculatorTranslation<FuelCostText> = {
  content: {
    title: "Calculadora de coste de combustible",
    shortTitle: "Coste de combustible",
    summary: "Estima el combustible que consumirás y lo que costará un viaje a partir de la distancia, el consumo y el precio del combustible.",
    metaTitle: "Calculadora de coste de combustible – Gasto por viaje",
    metaDescription:
      "Calcula el coste de combustible de un viaje a partir de la distancia, el consumo y el precio, en millas y MPG o en kilómetros y litros a los 100 km.",
    keywords: ["coste gasolina viaje", "calcular gasto combustible", "consumo l/100 km", "precio gasolina", "gasóleo", "coste de un viaje en coche"],
    intro: [
      "Calcula cuánto combustible necesita un viaje y cuánto costará. Funciona con millas por galón o con litros a los 100 kilómetros.",
      "Usa el consumo real de tu coche para obtener la mejor estimación.",
    ],
    howToUse: [
      "Elige unidades de EE. UU. o métricas.",
      "Introduce la distancia del viaje.",
      "Introduce el consumo y el precio del combustible.",
      "Consulta el combustible consumido y el coste.",
    ],
    formulas: [
      {
        title: "Unidades de EE. UU.",
        expression: "galones = millas ÷ MPG\ncoste = galones × precio por galón",
        explanation: "MPG significa millas por galón.",
      },
      {
        title: "Unidades métricas",
        expression: "litros = km × (L/100 km) ÷ 100\ncoste = litros × precio por litro",
        explanation: "Cuanto menor es el consumo en L/100 km, más eficiente es el vehículo.",
      },
    ],
    examples: [
      { title: "300 millas a 30 MPG, 3,50 US$ por galón", steps: ["300 ÷ 30 = 10 galones", "10 × 3,50 US$ = 35,00 US$"] },
      { title: "500 km a 6,5 L/100 km, 1,80 € por litro", steps: ["500 × 6,5 ÷ 100 = 32,5 L", "32,5 × 1,80 € = 58,50 €"] },
    ],
    assumptions: [
      "El consumo varía con la velocidad, la carga, el terreno y el tiempo meteorológico.",
      "Para las MPG se usan galones estadounidenses.",
      "Elegir una moneda solo cambia el formato.",
    ],
    faqs: [
      {
        question: "¿Cómo calculo el coste de la gasolina de un viaje?",
        answer: "Divide la distancia entre las MPG de tu coche para obtener los galones y multiplica el resultado por el precio por galón.",
      },
      { question: "¿Cómo convierto MPG a L/100 km?", answer: "Divide 235,215 entre las MPG (galones estadounidenses). 30 MPG son unos 7,84 L/100 km." },
      { question: "¿Debo calcular el viaje de ida y vuelta?", answer: "Sí, duplica la distancia para un viaje de ida y vuelta." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    units: "Unidades",
    unitOptions: { us: "Millas, MPG y precio por galón estadounidense", metric: "Kilómetros, L/100 km y precio por litro" },
    distance: "Distancia del viaje",
    efficiency: "Consumo de combustible",
    efficiencyHelp: "Millas por galón o litros a los 100 km.",
    price: "Precio del combustible por galón o litro",
    cost: "Coste del combustible",
    fuel: "Combustible consumido",
    perKm: "Coste por kilómetro",
    perMile: "Coste por milla",
    gallons: "gal EE. UU.",
  },
};

export default es;
