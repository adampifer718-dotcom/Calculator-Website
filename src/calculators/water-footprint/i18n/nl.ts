import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WaterFootprintText } from "../text/en";

const nl: CalculatorTranslation<WaterFootprintText> = {
  content: {
    title: "Douchewatercalculator",
    shortTitle: "Waterverbruik douche",
    summary: "Schat hoeveel water de douches in je huishouden per jaar gebruiken, de energie en kosten om het te verwarmen, en wat een zuinigere douchekop zou besparen.",
    metaTitle: "Douchewatercalculator – liter, gallon en kWh per jaar",
    metaDescription:
      "Schat het jaarlijkse waterverbruik van je douche uit doorstroming, douchetijd en frequentie, met de energie en kosten van het verwarmen en de besparing.",
    keywords: ["douchewater berekenen", "waterverbruik douche", "liter per douchebeurt", "waterbesparende douchekop", "energiekosten douchen", "watervoetafdruk", "doorstroming douche"],
    intro: [
      "Douchen is in de meeste huizen een van de grotere waterverbruikers, en omdat het water wordt verwarmd, is het ook een merkbaar deel van de energierekening. Hoeveel je verbruikt, hangt van maar een paar dingen af: de doorstroming van de douchekop, hoe lang elke douchebeurt duurt en hoe vaak er wordt gedoucht.",
      "Vul die gegevens in om het waterverbruik per douchebeurt, per week en per jaar te schatten. Voeg de watertemperaturen en je energieprijs toe om de energie en kosten van het verwarmen te schatten, en vul een tweede doorstroming in om te zien wat een andere douchekop zou besparen.",
    ],
    howToUse: [
      "Vul de doorstroming van je douchekop in, in Amerikaanse gallons of liters per minuut. Weet je die niet, meet dan hoe lang het duurt om een emmer met een bekende inhoud te vullen en deel.",
      "Vul de duur van een gemiddelde douchebeurt in, het aantal douchebeurten per persoon per week en het aantal personen.",
      "Vul eventueel de doorstroming in van een douchekop die je overweegt, om de besparing te zien.",
      "Laat voor een energieschatting de energieoptie aan staan en vul de inlaat- en douchetemperatuur in, het rendement van de verwarming en, als je wilt, je prijs per kWh.",
    ],
    formulas: [
      { title: "Water per jaar", expression: "V(jaar) = doorstroming × minuten × douchebeurten per week × personen × 52,1775", explanation: "52,1775 is het aantal weken in een gemiddeld gregoriaans jaar (365,2425 ÷ 7). Het resultaat staat in de eenheid van de doorstroming: gallons of liters." },
      { title: "Verwarmingsenergie", expression: "E (kWh) = V (L) × 1 kg/L × 4,186 kJ/(kg·K) × (T(douche) − T(inlaat)) ÷ 3.600 ÷ rendement", explanation: "4,186 kJ verwarmt 1 kg water met 1 °C, en 3.600 kJ is 1 kWh. Het rendement wordt als percentage ingevuld en als fractie gebruikt." },
      { title: "Besparing", expression: "bespaard = V(huidig) − V(nieuw)", explanation: "De bespaarde energie en kosten volgen met dezelfde formule uit het bespaarde water." },
    ],
    examples: [
      {
        title: "Eén persoon, dagelijks 8 minuten douchen bij 2,5 gpm",
        steps: ["Per douchebeurt = 2,5 × 8 = 20 gal", "Per week = 20 × 7 = 140 gal", "Per jaar = 140 × 52,1775 = 7.304,85 gal, ongeveer 27.652 L"],
      },
      {
        title: "Drie personen, 9 L/min, overstappen op een kop van 6 L/min",
        steps: [
          "Per week = 9 × 6 × 5 × 3 = 810 L, dus per jaar = 810 × 52,1775 ≈ 42.263,78 L",
          "Verwarmingsenergie = 42.263,78 × 4,186 × (38 − 15) ÷ 3.600 ÷ 0,90 ≈ 1.256 kWh per jaar",
          "Met 6 L/min: 540 × 52,1775 ≈ 28.175,85 L, een besparing van ongeveer 14.088 L en 419 kWh per jaar",
        ],
      },
      {
        title: "Twee personen, douchebeurten van 10 minuten, verwarming in °F en een energieprijs",
        steps: [
          "Per jaar = 2,5 × 10 × 7 × 2 × 52,1775 = 18.262,125 gal ≈ 69.130 L",
          "Temperatuurstijging = (100 − 55) × 5/9 = 25 K, dus energie ≈ 69.130 × 4,186 × 25 ÷ 3.600 ÷ 0,90 ≈ 2.233 kWh, wat ongeveer $357 per jaar kost",
          "Een kop van 1,8 gpm bespaart ongeveer 5.113 gal en ongeveer $100 per jaar",
        ],
      },
    ],
    assumptions: [
      "De doorstroming wordt voor de hele douchebeurt constant verondersteld. De werkelijke doorstroming hangt af van de waterdruk en hoe ver de kraan openstaat, dus een gemeten waarde is beter dan de opgegeven waarde.",
      "Een jaar telt 52,1775 weken (365,2425 ÷ 7). Weken van huis of seizoensveranderingen in gewoonten worden niet gemodelleerd.",
      "De energieschatting verwarmt al het douchewater van de inlaattemperatuur naar de douchetemperatuur. Warmteverlies uit leidingen en de boiler wordt genegeerd, dus het werkelijke verbruik is meestal wat hoger.",
      "Kosten voor drinkwater en riolering zijn niet meegerekend; alleen de energie voor het verwarmen wordt geprijsd.",
    ],
    faqs: [
      { question: "Hoeveel water gebruikt een douchekop?", answer: "In de Verenigde Staten mogen nieuwe douchekoppen hoogstens 2,5 gallon (ongeveer 9,5 liter) per minuut gebruiken. Koppen met het WaterSense-label van de EPA gebruiken 2,0 gallon per minuut of minder. Oudere koppen kunnen meer gebruiken, dus de jouwe meten is de beste manier om het te weten." },
      { question: "Hoe meet ik de doorstroming van mijn douche?", answer: "Houd een emmer met een bekende inhoud onder de douche op je normale stand en meet hoe lang het vullen duurt. Deel het volume door de tijd in minuten; bijvoorbeeld 10 liter in 75 seconden is 10 ÷ 1,25 = 8 L/min." },
      { question: "Wat bespaart meer: korter douchen of een waterbesparende kop?", answer: "Beide verlagen het waterverbruik naar verhouding. Van 10 naar 8 minuten bespaart 20%, net als van 2,5 naar 2,0 gpm. De calculator toont het effect van allebei, dus je kunt beide proberen." },
    ],
    sourcesUsedFor: [
      "Het WaterSense-maximum van 2,0 gallon per minuut en het federale maximum van 2,5 gpm voor douchekoppen.",
      "Het federale maximale waterverbruik van 2,5 gallon per minuut voor douchekoppen.",
      "De soortelijke warmte van water, 1 cal/(g·°C) = 4,186 J/(g·°C).",
    ],
  },
  text: {
    flow: "Doorstroming van de douchekop",
    flowHelp: "2,5 Amerikaanse gallon per minuut (ongeveer 9,5 L/min) is het federale maximum in de VS voor nieuwe douchekoppen; koppen met het WaterSense-label gebruiken 2,0 gpm (ongeveer 7,6 L/min) of minder. Je kunt de jouwe meten door te timen hoe lang het vullen van een emmer duurt.",
    flowUnit: "Eenheid van doorstroming",
    flowUnits: { gpm: "Amerikaanse gallon per minuut (gpm)", lpm: "Liter per minuut (L/min)" },
    minutes: "Minuten per douchebeurt",
    showersPerWeek: "Douchebeurten per week, per persoon",
    people: "Aantal personen",
    newFlow: "Nieuwe doorstroming om te vergelijken (optioneel)",
    newFlowHelp: "De doorstroming van een douchekop die je overweegt, in dezelfde eenheid als hierboven.",
    energy: "Energie voor het verwarmen schatten",
    energyOptions: { yes: "Ja", no: "Nee" },
    tempUnit: "Eenheid van temperatuur",
    tempUnits: { C: "Celsius (°C)", F: "Fahrenheit (°F)" },
    inletTemp: "Temperatuur van het koude inlaatwater",
    inletTempHelp: "De temperatuur van het water dat de verwarming binnenkomt. 15 °C (59 °F) is een gangbaar voorbeeld; het verschilt per klimaat en seizoen.",
    showerTemp: "Douchetemperatuur",
    showerTempHelp: "De temperatuur van het gemengde water bij de douchekop. 38 °C (ongeveer 100 °F) is een gangbare, comfortabele douche.",
    efficiency: "Rendement van de waterverwarming",
    efficiencyHelp: "Het deel van de gebruikte energie dat als warmte in het water terechtkomt. 90% is een voorbeeld; oudere gasgeisers en -boilers zitten vaak lager en warmtepompen kunnen ruim boven 100% uitkomen.",
    price: "Energieprijs per kWh (optioneel)",
    priceHelp: "Je prijs per kWh elektriciteit, of van gas omgerekend naar kWh, voor de jaarlijkse kosten.",
    errors: {
      showerAboveInlet: "De douchetemperatuur moet hoger zijn dan de inlaattemperatuur.",
      inletRange: "Vul een inlaattemperatuur in tussen 0 °C (32 °F) en 40 °C (104 °F).",
      showerRange: "Vul een douchetemperatuur in van hoogstens 60 °C (140 °F).",
    },
    annual: "Douchewater per jaar",
    caption: "{flow} × {minutes} min × {showers} douchebeurten per week × {people} × {weeks} weken per jaar.",
    annualOther: "Douchewater per jaar in andere eenheden",
    perWeek: "Douchewater per week",
    perShower: "Water per douchebeurt",
    energyYear: "Verwarmingsenergie per jaar",
    costYear: "Verwarmingskosten per jaar",
    newAnnual: "Water per jaar met de nieuwe doorstroming",
    waterSaved: "Bespaard water per jaar",
    energySaved: "Bespaarde energie per jaar",
    costSaved: "Bespaarde kosten per jaar",
    peopleCount: { zero: "{n} personen", one: "{n} persoon", two: "{n} personen", few: "{n} personen", many: "{n} personen", other: "{n} personen" },
    notes: {
      weeks: "Een jaar wordt gerekend als 52,1775 weken (365,2425 dagen ÷ 7, het gemiddelde gregoriaanse jaar).",
      energy: "Verwarmingsenergie = liter × 1 kg/L × 4,186 kJ/(kg·K) × temperatuurstijging ÷ 3.600 ÷ rendement. Warmteverlies uit leidingen en de boiler is niet meegerekend.",
      moreWater: "De nieuwe doorstroming is hoger dan de huidige, dus de besparing is negatief: er zou meer water worden gebruikt.",
    },
  },
};

export default nl;
