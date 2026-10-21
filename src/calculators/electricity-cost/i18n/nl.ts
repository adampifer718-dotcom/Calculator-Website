import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ElectricityCostText } from "../text/en";

const nl: CalculatorTranslation<ElectricityCostText> = {
  content: {
    title: "Stroomkostencalculator",
    shortTitle: "Stroomkosten",
    summary: "Bereken wat een apparaat aan stroom kost op basis van het vermogen, het aantal gebruiksuren en je stroomprijs.",
    metaTitle: "Stroomkostencalculator – verbruikskosten van apparaten",
    metaDescription:
      "Bereken het stroomverbruik in kWh en de kosten van elk apparaat per dag, per periode en per jaar op basis van het vermogen en je tarief.",
    keywords: ["stroomkosten", "kwh", "energiekosten", "apparaat", "vermogen", "watt", "energierekening", "verbruikskosten"],
    intro: [
      "Elektriciteit wordt per kilowattuur (kWh) afgerekend: 1000 watt gedurende één uur. Vermenigvuldig het verbruik met je prijs per kWh en je weet de kosten.",
      "Het vermogen staat op het typeplaatje van het apparaat en je tarief op je energierekening.",
    ],
    howToUse: [
      "Vul het vermogen in watt in.",
      "Vul in hoeveel uur per dag het apparaat aanstaat en gedurende hoeveel dagen.",
      "Vul je prijs per kWh in.",
      "Lees de kosten en het energieverbruik af.",
    ],
    formulas: [
      { title: "Energie", expression: "kWh = watt × uren per dag × dagen ÷ 1000", explanation: "Rekent wattuur om naar kilowattuur." },
      { title: "Kosten", expression: "kosten = kWh × prijs per kWh", explanation: "Gebruikt het energietarief van je contract." },
    ],
    examples: [
      {
        title: "Een apparaat van 100 W, 5 uur per dag gedurende 30 dagen tegen $ 0,15/kWh",
        steps: ["100 × 5 × 30 ÷ 1000 = 15 kWh", "15 × $ 0,15 = $ 2,25"],
      },
      {
        title: "Een kachel van 1500 W, 1 uur per dag gedurende 30 dagen tegen $ 0,20/kWh",
        steps: ["1500 × 1 × 30 ÷ 1000 = 45 kWh", "45 × $ 0,20 = $ 9,00"],
      },
    ],
    assumptions: [
      "Er wordt aangenomen dat het apparaat zijn volledige nominale vermogen opneemt zolang het aanstaat. Thermostaten, aan-uitcycli en wisselende belasting verbruiken meestal minder.",
      "Vaste kosten, belastingen, dag- en nachttarieven en sluipverbruik zijn niet meegerekend.",
      "Het kiezen van een valuta verandert alleen de weergave.",
    ],
    faqs: [
      { question: "Wat is een kilowattuur?", answer: "De energie die een apparaat van 1000 watt verbruikt als het één uur aanstaat." },
      {
        question: "Waar vind ik het vermogen van een apparaat?",
        answer: "Op het typeplaatje of in de handleiding. Staat alleen de stroomsterkte in ampère vermeld, vermenigvuldig die dan met de spanning voor een benadering van het vermogen.",
      },
      {
        question: "Hoe verlaag ik de verbruikskosten?",
        answer: "Gebruik zuinige apparaten, laat ze minder uren aanstaan en kijk of je contract goedkopere daluren heeft.",
      },
    ],
    sourcesUsedFor: ["Definitie van watt en kilowattuur en hoe stroomverbruik wordt gefactureerd."],
  },
  text: {
    power: "Vermogen",
    powerHelp: "Van het typeplaatje, bijv. 100 W. Reken 1000 W per kW.",
    hours: "Gebruik per dag",
    days: "Aantal dagen",
    rate: "Stroomprijs per kWh",
    cost: "Kosten voor {days} dagen",
    energy: "Energieverbruik",
    perDay: "Kosten per dag",
    perYear: "Kosten per jaar (365 dagen)",
    note: "Er wordt aangenomen dat het apparaat zijn nominale vermogen opneemt zolang het aanstaat. Het werkelijke verbruik wisselt vaak, en sluipverbruik is niet meegerekend.",
  },
};

export default nl;
