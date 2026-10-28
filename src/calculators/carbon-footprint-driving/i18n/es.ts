import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CarCo2Text } from "../text/en";

const es: CalculatorTranslation<CarCo2Text> = {
  content: {
    title: "Calculadora de emisiones de CO₂ del coche",
    shortTitle: "Emisiones de CO₂ del coche",
    summary:
      "Estima el CO₂ que sale por el tubo de escape de un coche de gasolina o diésel a partir de la distancia y el consumo, o del combustible gastado, por viaje y por año.",
    metaTitle: "Calculadora de emisiones de CO₂ del coche – Por viaje y año",
    metaDescription:
      "Estima el CO₂ de escape de un coche de gasolina o diésel según la distancia y el consumo (mpg o L/100 km), con factores de la EPA, por km, por milla y al año.",
    keywords: [
      "emisiones CO2 coche",
      "huella de carbono conducir",
      "CO2 por km",
      "CO2 por litro de gasolina",
      "CO2 por litro de diésel",
      "emisiones de vehículos",
      "calcular CO2 viaje",
    ],
    intro: [
      "Al quemar combustible, su carbono se convierte en dióxido de carbono. Como casi todo el carbono de la gasolina o el diésel acaba en forma de CO₂, las emisiones de escape de un coche dependen sobre todo de cuánto combustible quema, sea cual sea la marca o el modelo.",
      "Esta calculadora obtiene el combustible consumido a partir de la distancia y el consumo de tu coche (o toma directamente la cantidad de combustible) y lo multiplica por el factor de emisión de la EPA de EE. UU. Un galón de gasolina produce unos 8,9 kg de CO₂, más de lo que pesa el propio combustible, porque la mayor parte de esa masa procede del oxígeno del aire.",
    ],
    howToUse: [
      "Elige si partes de la distancia y el consumo o de la cantidad de combustible consumida.",
      "Introduce la distancia y el consumo de tu coche en mpg (EE. UU. o Reino Unido), L/100 km o km/L, o introduce el combustible consumido.",
      "Elige gasolina, diésel o un factor de emisión personalizado en kg de CO₂ por litro.",
      "Si quieres, indica cuántas veces al año haces el viaje para ver el total anual.",
    ],
    formulas: [
      { title: "CO₂ emitido", expression: "CO₂ = combustible consumido × factor de emisión", explanation: "Con el combustible en litros y el factor en kg de CO₂ por litro." },
      {
        title: "Combustible consumido",
        expression: "combustible = distancia ÷ mpg × litros por galón, o distancia × L/100 km ÷ 100",
        explanation: "1 galón estadounidense = 3,785411784 L, 1 galón imperial = 4,54609 L y 1 milla = 1,609344 km exactamente. Con km/L, combustible = distancia ÷ km/L.",
      },
      {
        title: "Factores de la EPA por litro",
        expression: "gasolina 8,887 ÷ 3,785411784 ≈ 2,3477 kg/L; diésel 10,180 ÷ 3,785411784 ≈ 2,6893 kg/L",
        explanation: "Las cifras por galón de la EPA convertidas exactamente a litros.",
      },
    ],
    examples: [
      {
        title: "Un viaje de 250 millas a 30 mpg en un coche de gasolina",
        steps: ["Combustible = 250 ÷ 30 = 8,333 galones estadounidenses", "CO₂ = 8,333 × 8,887 kg ≈ 74,06 kg", "Son unos 296 g de CO₂ por milla"],
      },
      {
        title: "400 km en un coche diésel que gasta 6,5 L/100 km",
        steps: ["Combustible = 400 × 6,5 ÷ 100 = 26 L", "Factor = 10,180 ÷ 3,785411784 ≈ 2,6893 kg CO₂/L", "CO₂ = 26 × 2,6893 ≈ 69,92 kg, unos 174,8 g por km"],
      },
      {
        title: "Un depósito de 45 L de gasolina, llenado 52 veces al año",
        steps: ["CO₂ por depósito = 45 × 2,3477 ≈ 105,65 kg", "Al año = 105,65 × 52 ≈ 5.494 kg, unas 5,49 toneladas"],
      },
    ],
    assumptions: [
      "Solo se cuenta el CO₂ del tubo de escape. No se incluyen el metano y el óxido nitroso del escape, las fugas de refrigerante ni las emisiones previas de extraer, refinar y transportar el combustible, así que la huella completa es mayor.",
      "Los factores de la gasolina y el diésel son las cifras de la EPA de EE. UU. Los combustibles mezclados con etanol o biodiésel, y los de otros países, pueden diferir ligeramente; usa un factor personalizado si tienes uno mejor.",
      "Los coches eléctricos quedan fuera del alcance de esta calculadora: no emiten nada por el tubo de escape, y su huella depende de la combinación de fuentes de la electricidad con la que se cargan.",
      "El resultado solo es tan bueno como el consumo que introduces. El consumo real suele ser peor que las cifras oficiales de homologación, sobre todo con frío, a velocidades altas y en trayectos cortos.",
    ],
    faqs: [
      {
        question: "¿Cómo puede un galón de gasolina producir más CO₂ de lo que pesa?",
        answer:
          "Cada átomo de carbono del combustible se une a dos átomos de oxígeno del aire. El oxígeno pesa más que el carbono, así que el CO₂ pesa unas 3,7 veces lo que el carbono que contiene (44 ÷ 12): un galón estadounidense de gasolina pesa unos 2,8 kg, pero produce casi 8,9 kg de CO₂.",
      },
      {
        question: "¿Por qué el diésel tiene un factor más alto que la gasolina?",
        answer:
          "El diésel es más denso y contiene más carbono por litro, así que quemar un litro libera más CO₂. Los coches diésel suelen gastar menos combustible en el mismo viaje, lo que puede compensar ese factor más alto.",
      },
      {
        question: "¿Incluye las emisiones de fabricar el coche o el combustible?",
        answer:
          "No. Solo cubre el CO₂ que sale por el escape durante la conducción. Fabricar el coche y producir y distribuir el combustible añaden más emisiones, que requieren un análisis de ciclo de vida completo.",
      },
    ],
    sourcesUsedFor: ["Los factores de emisión de escape de 8.887 g de CO₂ por galón de gasolina y 10.180 g de CO₂ por galón de diésel."],
  },
  text: {
    method: "Calcular el combustible a partir de",
    methodOptions: { distance: "Distancia y consumo", fuel: "Combustible consumido" },
    distance: "Distancia recorrida",
    distanceUnit: "Unidad de distancia",
    distanceUnits: { km: "Kilómetros (km)", mi: "Millas (mi)" },
    economy: "Consumo de combustible",
    economyHelp: "Usa la cifra del ordenador de a bordo o de tus tiques de repostaje para obtener el resultado más realista.",
    economyUnit: "Unidad de consumo",
    economyUnits: {
      mpgUs: "Millas por galón estadounidense (mpg EE. UU.)",
      mpgUk: "Millas por galón imperial (mpg Reino Unido)",
      l100km: "Litros a los 100 km (L/100 km)",
      kmL: "Kilómetros por litro (km/L)",
    },
    fuelAmount: "Combustible consumido",
    fuelUnit: "Unidad de combustible",
    fuelUnits: { L: "Litros (L)", galUs: "Galones estadounidenses", galUk: "Galones imperiales" },
    fuelType: "Combustible",
    fuelTypes: { gasoline: "Gasolina", diesel: "Diésel", custom: "Factor de emisión personalizado" },
    customFactor: "Factor de emisión",
    customFactorHelp: "Kilogramos de CO₂ liberados al quemar un litro del combustible.",
    trips: "Viajes al año (opcional)",
    tripsHelp: "Cuántas veces al año haces este viaje, para obtener un total anual. Para un año entero de conducción, introduce la distancia anual y 1 viaje.",
    co2: "CO₂ emitido",
    caption: "{fuel} de combustible × {factor}.",
    perKm: "CO₂ por kilómetro",
    perMile: "CO₂ por milla",
    fuelL: "Combustible consumido",
    fuelGal: "Combustible consumido en galones estadounidenses",
    factor: "Factor de emisión utilizado",
    annual: "CO₂ al año",
    annualTonnes: "CO₂ al año en toneladas",
    gallonsUs: "gal EE. UU.",
    notes: {
      tailpipe:
        "Esto es solo el CO₂ del tubo de escape. No se incluyen el metano, el óxido nitroso, los refrigerantes del aire acondicionado ni las emisiones de producir y distribuir el combustible.",
      electric: "Los coches eléctricos no están incluidos: no tienen emisiones de escape, y su huella depende de cómo se genera la electricidad.",
      custom: "Con un factor personalizado, el resultado solo es tan preciso como el factor que has introducido.",
    },
  },
};

export default es;
