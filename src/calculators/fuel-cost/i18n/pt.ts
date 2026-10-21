import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FuelCostText } from "../text/en";

const pt: CalculatorTranslation<FuelCostText> = {
  content: {
    title: "Calculadora de custo de combustível",
    shortTitle: "Custo de combustível",
    summary: "Estime o combustível que vai gastar e quanto custará uma viagem a partir da distância, do consumo e do preço do combustível.",
    metaTitle: "Calculadora de custo de combustível – Gasto por viagem",
    metaDescription:
      "Calcule o custo de combustível de uma viagem a partir da distância, do consumo e do preço, em milhas e MPG ou em quilómetros e litros aos 100 km.",
    keywords: ["custo de combustível da viagem", "calcular gasto de combustível", "consumo l/100 km", "preço da gasolina", "gasóleo", "custo de uma viagem de carro"],
    intro: [
      "Calcule quanto combustível uma viagem exige e quanto vai custar. Funciona com milhas por galão ou com litros aos 100 quilómetros.",
      "Use o consumo real do seu carro para obter a melhor estimativa.",
    ],
    howToUse: [
      "Escolha unidades dos EUA ou métricas.",
      "Introduza a distância da viagem.",
      "Introduza o consumo e o preço do combustível.",
      "Consulte o combustível gasto e o custo.",
    ],
    formulas: [
      {
        title: "Unidades dos EUA",
        expression: "galões = milhas ÷ MPG\ncusto = galões × preço por galão",
        explanation: "MPG significa milhas por galão.",
      },
      {
        title: "Unidades métricas",
        expression: "litros = km × (L/100 km) ÷ 100\ncusto = litros × preço por litro",
        explanation: "Quanto menor for o consumo em L/100 km, mais eficiente é o veículo.",
      },
    ],
    examples: [
      { title: "300 milhas a 30 MPG, 3,50 US$ por galão", steps: ["300 ÷ 30 = 10 galões", "10 × 3,50 US$ = 35,00 US$"] },
      { title: "500 km a 6,5 L/100 km, 1,80 € por litro", steps: ["500 × 6,5 ÷ 100 = 32,5 L", "32,5 × 1,80 € = 58,50 €"] },
    ],
    assumptions: [
      "O consumo varia com a velocidade, a carga, o terreno e as condições meteorológicas.",
      "Para as MPG são usados galões americanos.",
      "Escolher uma moeda altera apenas a formatação.",
    ],
    faqs: [
      {
        question: "Como calculo o custo da gasolina de uma viagem?",
        answer: "Divida a distância pelas MPG do seu carro para obter os galões e multiplique o resultado pelo preço por galão.",
      },
      { question: "Como converto MPG em L/100 km?", answer: "Divida 235,215 pelas MPG (galões americanos). 30 MPG correspondem a cerca de 7,84 L/100 km." },
      { question: "Devo calcular a viagem de ida e volta?", answer: "Sim, duplique a distância para uma viagem de ida e volta." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    units: "Unidades",
    unitOptions: { us: "Milhas, MPG e preço por galão americano", metric: "Quilómetros, L/100 km e preço por litro" },
    distance: "Distância da viagem",
    efficiency: "Consumo de combustível",
    efficiencyHelp: "Milhas por galão ou litros aos 100 km.",
    price: "Preço do combustível por galão ou litro",
    cost: "Custo do combustível",
    fuel: "Combustível gasto",
    perKm: "Custo por quilómetro",
    perMile: "Custo por milha",
    gallons: "gal EUA",
  },
};

export default pt;
