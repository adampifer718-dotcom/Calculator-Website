import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CarCo2Text } from "../text/en";

const fr: CalculatorTranslation<CarCo2Text> = {
  content: {
    title: "Calculateur d’émissions de CO₂ en voiture",
    shortTitle: "CO₂ en voiture",
    summary: "Estimez le CO₂ émis à l’échappement par une voiture essence ou diesel, à partir de la distance et de la consommation ou du carburant utilisé, par trajet et par an.",
    metaTitle: "Calculateur d’émissions de CO₂ en voiture – Empreinte carbone",
    metaDescription: "Estimez le CO₂ à l’échappement d’un trajet en voiture essence ou diesel selon la distance et la consommation, avec les facteurs de l’EPA, par km, par mile et par an.",
    keywords: ["calcul CO2 voiture", "empreinte carbone voiture", "émissions CO2 par km", "CO2 par litre d’essence", "CO2 diesel par litre", "émissions d’un trajet", "bilan carbone voiture"],
    intro: [
      "La combustion d’un carburant transforme son carbone en dioxyde de carbone. Comme presque tout le carbone de l’essence ou du gazole finit sous forme de CO₂, les émissions à l’échappement d’une voiture dépendent surtout de la quantité de carburant brûlée, quels que soient la marque ou le modèle.",
      "Ce calculateur détermine le carburant consommé à partir de la distance et de la consommation de votre voiture (ou prend directement la quantité de carburant) et le multiplie par le facteur d’émission de l’EPA américaine. Un gallon US d’essence produit environ 8,9 kg de CO₂, soit plus que la masse du carburant lui-même, car l’essentiel de cette masse provient de l’oxygène de l’air.",
    ],
    howToUse: [
      "Choisissez de partir de la distance et de la consommation, ou de la quantité de carburant utilisée.",
      "Saisissez la distance et la consommation de votre voiture en mpg (US ou UK), en L/100 km ou en km/L, ou saisissez le carburant utilisé.",
      "Choisissez essence, gazole ou un facteur d’émission personnalisé en kg de CO₂ par litre.",
      "Saisissez éventuellement le nombre de fois par an où vous faites ce trajet pour voir le total annuel.",
    ],
    formulas: [
      { title: "CO₂ émis", expression: "CO₂ = carburant utilisé × facteur d’émission", explanation: "Avec le carburant en litres et le facteur en kg de CO₂ par litre." },
      { title: "Carburant utilisé", expression: "carburant = distance ÷ mpg × litres par gallon, ou distance × L/100 km ÷ 100", explanation: "1 gallon US = 3,785411784 L, 1 gallon impérial = 4,54609 L et 1 mile = 1,609344 km exactement. En km/L, carburant = distance ÷ km/L." },
      { title: "Facteurs de l’EPA par litre", expression: "essence 8,887 ÷ 3,785411784 ≈ 2,3477 kg/L ; gazole 10,180 ÷ 3,785411784 ≈ 2,6893 kg/L", explanation: "Les valeurs de l’EPA par gallon, converties exactement en litres." },
    ],
    examples: [
      {
        title: "Un trajet de 250 miles à 30 mpg en voiture essence",
        steps: ["Carburant = 250 ÷ 30 = 8,333 gallons US", "CO₂ = 8,333 × 8,887 kg ≈ 74,06 kg", "Soit environ 296 g de CO₂ par mile"],
      },
      {
        title: "400 km en voiture diesel consommant 6,5 L/100 km",
        steps: ["Carburant = 400 × 6,5 ÷ 100 = 26 L", "Facteur = 10,180 ÷ 3,785411784 ≈ 2,6893 kg CO₂/L", "CO₂ = 26 × 2,6893 ≈ 69,92 kg, soit environ 174,8 g par km"],
      },
      {
        title: "Un plein de 45 L d’essence, 52 fois par an",
        steps: ["CO₂ par plein = 45 × 2,3477 ≈ 105,65 kg", "Par an = 105,65 × 52 ≈ 5 494 kg, soit environ 5,49 tonnes"],
      },
    ],
    assumptions: [
      "Seul le CO₂ à l’échappement est compté. Le méthane et le protoxyde d’azote des gaz d’échappement, les fuites de fluide frigorigène et les émissions en amont liées à l’extraction, au raffinage et au transport du carburant ne sont pas inclus : l’empreinte totale est donc plus élevée.",
      "Les facteurs de l’essence et du gazole sont ceux de l’EPA américaine. Les carburants mélangés à de l’éthanol ou à du biodiesel, ainsi que les carburants d’autres pays, peuvent légèrement différer ; utilisez un facteur personnalisé si vous en avez un plus juste.",
      "Les voitures électriques sortent du cadre de ce calculateur : elles n’émettent rien à l’échappement, et leur empreinte dépend du mix électrique là où elles sont rechargées.",
      "Le résultat ne vaut que ce que vaut la consommation saisie. La consommation réelle est souvent supérieure aux valeurs d’homologation, surtout par temps froid, à vitesse élevée et sur les trajets courts.",
    ],
    faqs: [
      { question: "Comment un gallon d’essence peut-il produire plus de CO₂ que son propre poids ?", answer: "Chaque atome de carbone du carburant se lie à deux atomes d’oxygène de l’air. L’oxygène est plus lourd que le carbone : le CO₂ pèse donc environ 3,7 fois plus que le carbone qu’il contient (44 ÷ 12). Un gallon US d’essence pèse environ 2,8 kg mais produit près de 8,9 kg de CO₂." },
      { question: "Pourquoi le gazole a-t-il un facteur plus élevé que l’essence ?", answer: "Le gazole est plus dense et contient plus de carbone par litre : brûler un litre libère donc davantage de CO₂. Les voitures diesel consomment souvent moins pour un même trajet, ce qui peut compenser ce facteur plus élevé." },
      { question: "Les émissions liées à la fabrication de la voiture ou du carburant sont-elles incluses ?", answer: "Non. Le calcul ne couvre que le CO₂ sortant du pot d’échappement pendant la conduite. La fabrication de la voiture ainsi que la production et la distribution du carburant ajoutent d’autres émissions, qui nécessitent une analyse du cycle de vie complète." },
    ],
    sourcesUsedFor: ["Les facteurs d’émission à l’échappement de 8 887 g de CO₂ par gallon d’essence et de 10 180 g de CO₂ par gallon de gazole."],
  },
  text: {
    method: "Calculer le carburant à partir",
    methodOptions: { distance: "De la distance et de la consommation", fuel: "Du carburant utilisé" },
    distance: "Distance parcourue",
    distanceUnit: "Unité de distance",
    distanceUnits: { km: "Kilomètres (km)", mi: "Miles (mi)" },
    economy: "Consommation de carburant",
    economyHelp: "Utilisez la valeur de votre ordinateur de bord ou de vos tickets de carburant pour un résultat plus réaliste.",
    economyUnit: "Unité de consommation",
    economyUnits: { mpgUs: "Miles par gallon US (mpg US)", mpgUk: "Miles par gallon impérial (mpg UK)", l100km: "Litres aux 100 km (L/100 km)", kmL: "Kilomètres par litre (km/L)" },
    fuelAmount: "Carburant utilisé",
    fuelUnit: "Unité de carburant",
    fuelUnits: { L: "Litres (L)", galUs: "Gallons US", galUk: "Gallons impériaux" },
    fuelType: "Carburant",
    fuelTypes: { gasoline: "Essence", diesel: "Gazole (diesel)", custom: "Facteur d’émission personnalisé" },
    customFactor: "Facteur d’émission",
    customFactorHelp: "Kilogrammes de CO₂ libérés par la combustion d’un litre de carburant.",
    trips: "Trajets par an (facultatif)",
    tripsHelp: "Le nombre de fois par an où vous faites ce trajet, pour obtenir un total annuel. Pour une année de conduite, saisissez la distance annuelle et 1 trajet.",
    co2: "CO₂ émis",
    caption: "{fuel} de carburant × {factor}.",
    perKm: "CO₂ par kilomètre",
    perMile: "CO₂ par mile",
    fuelL: "Carburant utilisé",
    fuelGal: "Carburant utilisé en gallons US",
    factor: "Facteur d’émission utilisé",
    annual: "CO₂ par an",
    annualTonnes: "CO₂ par an en tonnes",
    gallonsUs: "gal US",
    notes: {
      tailpipe: "Il s’agit uniquement du CO₂ à l’échappement. Le méthane, le protoxyde d’azote, les fluides frigorigènes de la climatisation et les émissions liées à la production et à la distribution du carburant ne sont pas inclus.",
      electric: "Les voitures électriques ne sont pas prises en compte : elles n’ont pas d’émissions à l’échappement, et leur empreinte dépend de la manière dont l’électricité est produite.",
      custom: "Avec un facteur personnalisé, le résultat n’est précis que si le facteur saisi l’est aussi.",
    },
  },
};

export default fr;
