import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CarCo2Text } from "../text/en";

const pt: CalculatorTranslation<CarCo2Text> = {
  content: {
    title: "Calculadora de emissões de CO₂ do carro",
    shortTitle: "Emissões de CO₂ do carro",
    summary: "Estime o CO₂ emitido pelo escape de um carro a gasolina ou a gasóleo, a partir da distância e do consumo ou do combustível gasto, por viagem e por ano.",
    metaTitle: "Calculadora de emissões de CO₂ do carro – Pegada de carbono",
    metaDescription:
      "Estime o CO₂ do escape numa viagem de carro a gasolina ou a gasóleo a partir da distância e das mpg ou L/100 km, com fatores da EPA e totais por km, milha e ano.",
    keywords: ["emissões de CO2 do carro", "pegada de carbono automóvel", "CO2 por km", "CO2 por milha", "CO2 por litro de gasolina", "CO2 do gasóleo", "emissões de veículos", "calculadora de CO2"],
    intro: [
      "A queima de combustível transforma o seu carbono em dióxido de carbono. Como quase todo o carbono da gasolina ou do gasóleo acaba sob a forma de CO₂, as emissões de escape de um carro dependem sobretudo da quantidade de combustível que queima, seja qual for a marca ou o modelo.",
      "Esta calculadora determina o combustível gasto a partir da distância e do consumo do seu carro (ou usa diretamente a quantidade de combustível) e multiplica-o pelo fator de emissão da EPA dos EUA. Um galão de gasolina produz cerca de 8,9 kg de CO₂, mais do que o próprio combustível pesa, porque a maior parte da massa vem do oxigénio do ar.",
    ],
    howToUse: [
      "Escolha se quer partir da distância e do consumo ou da quantidade de combustível gasto.",
      "Introduza a distância e o consumo do seu carro em mpg (EUA ou Reino Unido), L/100 km ou km/L, ou introduza o combustível gasto.",
      "Escolha gasolina, gasóleo ou um fator de emissão personalizado em kg de CO₂ por litro.",
      "Opcionalmente, introduza quantas vezes por ano faz a viagem para ver o total anual.",
    ],
    formulas: [
      { title: "CO₂ emitido", expression: "CO₂ = combustível gasto × fator de emissão", explanation: "Com o combustível em litros e o fator em kg de CO₂ por litro." },
      { title: "Combustível gasto", expression: "combustível = distância ÷ mpg × litros por galão, ou distância × L/100 km ÷ 100", explanation: "1 galão americano = 3,785411784 L, 1 galão imperial = 4,54609 L e 1 milha = 1,609344 km, exatamente. Para km/L, combustível = distância ÷ km/L." },
      { title: "Fatores da EPA por litro", expression: "gasolina 8,887 ÷ 3,785411784 ≈ 2,3477 kg/L; gasóleo 10,180 ÷ 3,785411784 ≈ 2,6893 kg/L", explanation: "Os valores da EPA por galão convertidos exatamente para litros." },
    ],
    examples: [
      {
        title: "Uma viagem de 250 milhas a 30 mpg num carro a gasolina",
        steps: ["Combustível = 250 ÷ 30 = 8,333 galões americanos", "CO₂ = 8,333 × 8,887 kg ≈ 74,06 kg", "São cerca de 296 g de CO₂ por milha"],
      },
      {
        title: "400 km num carro a gasóleo que gasta 6,5 L/100 km",
        steps: ["Combustível = 400 × 6,5 ÷ 100 = 26 L", "Fator = 10,180 ÷ 3,785411784 ≈ 2,6893 kg CO₂/L", "CO₂ = 26 × 2,6893 ≈ 69,92 kg, cerca de 174,8 g por km"],
      },
      {
        title: "Um depósito de 45 L de gasolina, atestado 52 vezes por ano",
        steps: ["CO₂ por depósito = 45 × 2,3477 ≈ 105,65 kg", "Por ano = 105,65 × 52 ≈ 5494 kg, cerca de 5,49 toneladas"],
      },
    ],
    assumptions: [
      "Só é contabilizado o CO₂ do escape. O metano e o óxido nitroso dos gases de escape, as fugas de fluido refrigerante e as emissões a montante da extração, refinação e transporte do combustível não estão incluídos, pelo que a pegada total é superior.",
      "Os fatores da gasolina e do gasóleo são os valores da EPA dos EUA. Os combustíveis misturados com etanol ou biodiesel, e os combustíveis de outros países, podem diferir ligeiramente; use um fator personalizado se tiver um melhor.",
      "Os carros elétricos estão fora do âmbito desta calculadora: não emitem nada pelo escape, e a sua pegada depende do mix elétrico do local onde são carregados.",
      "O resultado só é tão bom quanto o consumo que introduzir. O consumo real é muitas vezes pior do que os valores oficiais dos ensaios, sobretudo com tempo frio, a alta velocidade e em viagens curtas.",
    ],
    faqs: [
      { question: "Como pode um galão de gasolina produzir mais CO₂ do que o seu próprio peso?", answer: "Cada átomo de carbono do combustível liga-se a dois átomos de oxigénio do ar. O oxigénio é mais pesado do que o carbono, pelo que o CO₂ pesa cerca de 3,7 vezes mais do que o carbono que contém (44 ÷ 12): um galão americano de gasolina pesa aproximadamente 2,8 kg, mas produz quase 8,9 kg de CO₂." },
      { question: "Porque é que o gasóleo tem um fator mais alto do que a gasolina?", answer: "O gasóleo é mais denso e contém mais carbono por litro, pelo que queimar um litro liberta mais CO₂. Os carros a gasóleo gastam muitas vezes menos combustível na mesma viagem, o que pode compensar o fator mais alto." },
      { question: "Inclui as emissões do fabrico do carro ou do combustível?", answer: "Não. Abrange apenas o CO₂ que sai pelo escape durante a condução. O fabrico do carro e a produção e distribuição do combustível acrescentam outras emissões, que exigem uma avaliação completa do ciclo de vida." },
    ],
    sourcesUsedFor: ["Os fatores de emissão de escape de 8887 g de CO₂ por galão de gasolina e 10 180 g de CO₂ por galão de gasóleo."],
  },
  text: {
    method: "Calcular o combustível a partir de",
    methodOptions: { distance: "Distância e consumo", fuel: "Combustível gasto" },
    distance: "Distância percorrida",
    distanceUnit: "Unidade de distância",
    distanceUnits: { km: "Quilómetros (km)", mi: "Milhas (mi)" },
    economy: "Consumo de combustível",
    economyHelp: "Para um resultado mais realista, use o valor do computador de bordo ou dos talões de combustível.",
    economyUnit: "Unidade de consumo",
    economyUnits: { mpgUs: "Milhas por galão americano (mpg EUA)", mpgUk: "Milhas por galão imperial (mpg RU)", l100km: "Litros aos 100 km (L/100 km)", kmL: "Quilómetros por litro (km/L)" },
    fuelAmount: "Combustível gasto",
    fuelUnit: "Unidade de combustível",
    fuelUnits: { L: "Litros (L)", galUs: "Galões americanos", galUk: "Galões imperiais" },
    fuelType: "Combustível",
    fuelTypes: { gasoline: "Gasolina", diesel: "Gasóleo", custom: "Fator de emissão personalizado" },
    customFactor: "Fator de emissão",
    customFactorHelp: "Quilogramas de CO₂ libertados pela queima de um litro do combustível.",
    trips: "Viagens por ano (opcional)",
    tripsHelp: "Quantas vezes por ano faz esta viagem, para obter um total anual. Para um ano inteiro de condução, introduza a distância anual e 1 viagem.",
    co2: "CO₂ emitido",
    caption: "{fuel} de combustível × {factor}.",
    perKm: "CO₂ por quilómetro",
    perMile: "CO₂ por milha",
    fuelL: "Combustível gasto",
    fuelGal: "Combustível gasto em galões americanos",
    factor: "Fator de emissão usado",
    annual: "CO₂ por ano",
    annualTonnes: "CO₂ por ano em toneladas",
    gallonsUs: "gal EUA",
    notes: {
      tailpipe: "Trata-se apenas do CO₂ do escape. O metano, o óxido nitroso, os fluidos refrigerantes do ar condicionado e as emissões da produção e distribuição do combustível não estão incluídos.",
      electric: "Os carros elétricos não estão abrangidos: não têm emissões de escape, e a sua pegada depende da forma como a eletricidade é produzida.",
      custom: "Com um fator personalizado, o resultado só é tão exato quanto o fator que introduziu.",
    },
  },
};

export default pt;
