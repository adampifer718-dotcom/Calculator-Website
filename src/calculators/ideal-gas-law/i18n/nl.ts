import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { IdealGasLawText } from "../text/en";

const nl: CalculatorTranslation<IdealGasLawText> = {
  content: {
    title: "Ideale-gaswetcalculator",
    shortTitle: "Ideale gaswet",
    summary: "Los PV = nRT op voor druk, volume, stofhoeveelheid of temperatuur, met ingebouwde eenhedenomrekening.",
    metaTitle: "Ideale-gaswetcalculator – PV = nRT oplossen",
    metaDescription:
      "Los PV = nRT op voor druk, volume, hoeveelheid gas of temperatuur. Combineer vrij Pa, kPa, bar, atm, mmHg, liter, m³, kelvin, °C en °F.",
    keywords: ["ideale gaswet", "pv=nrt", "gasconstante", "druk", "mol", "kelvin", "gaswetten", "scheikunde"],
    intro: [
      "De ideale gaswet verbindt vier eigenschappen van een gas: druk, volume, stofhoeveelheid in mol en absolute temperatuur. Ken je er drie, dan kun je de vierde berekenen.",
      "Kies de grootheid die je wilt berekenen, vul de andere drie in met de eenheden die je hebt, en de calculator rekent alles om naar SI-eenheden, lost PV = nRT op en rekent het antwoord weer terug.",
    ],
    howToUse: [
      "Kies wat je wilt berekenen: druk, volume, stofhoeveelheid of temperatuur.",
      "Vul de drie bekende waarden in en kies voor elk een eenheid.",
      "Stel met de bijbehorende eenhedenlijst de eenheid in waarin je het antwoord wilt.",
      "Lees de uitkomst af, dezelfde waarde in andere eenheden en het molair volume.",
    ],
    formulas: [
      { title: "Ideale gaswet", expression: "P × V = n × R × T", explanation: "P in pascal, V in kubieke meter, n in mol en T in kelvin." },
      {
        title: "Gasconstante",
        expression: "R = Nₐ × k = 8,31446261815324 J/(mol·K)",
        explanation: "Exact sinds de herdefinitie van het SI in 2019, omdat Nₐ en k vastliggen.",
      },
      {
        title: "Kelvin",
        expression: "T(K) = T(°C) + 273,15 = (T(°F) − 32) × 5/9 + 273,15",
        explanation: "De wet vereist de absolute temperatuur, dus graden Celsius en Fahrenheit worden eerst omgerekend.",
      },
    ],
    examples: [
      {
        title: "Druk van 2 mol in een tank van 50 L bij 25 °C",
        steps: ["T = 25 + 273,15 = 298,15 K en V = 0,05 m³", "P = 2 × 8,314463 × 298,15 ÷ 0,05 ≈ 99.158 Pa", "≈ 99,158 kPa"],
      },
      {
        title: "Volume van 1 mol bij 0 °C en 1 atm",
        steps: ["T = 273,15 K en P = 101.325 Pa", "V = 1 × 8,314463 × 273,15 ÷ 101.325 ≈ 0,022414 m³", "≈ 22,414 L"],
      },
      {
        title: "Temperatuur van 0,5 mol in 10 L bij 200 kPa",
        steps: ["T = 200.000 × 0,01 ÷ (0,5 × 8,314463) ≈ 481,09 K", "481,09 − 273,15 ≈ 207,94 °C"],
      },
    ],
    assumptions: [
      "Het gas wordt als ideaal behandeld: de moleculen nemen geen ruimte in en trekken elkaar niet aan.",
      "Echte gassen wijken merkbaar af bij hoge druk, bij lage temperatuur en dicht bij het punt waarop ze condenseren. Gebruik in die gevallen een toestandsvergelijking zoals die van Van der Waals.",
      "De druk is de absolute druk, geen overdruk. Tel bij een overdrukmeting eerst de atmosferische druk op.",
    ],
    faqs: [
      {
        question: "Waarom moet de temperatuur in kelvin?",
        answer:
          "De wet is evenredig met de absolute temperatuur. Bij 0 °C heeft een gas nog veel thermische energie, dus waarden in Celsius of Fahrenheit zouden verkeerde antwoorden geven. De calculator rekent ze voor je om.",
      },
      {
        question: "Welke waarde van R moet ik gebruiken?",
        answer:
          "In SI-eenheden is R = 8,314462618 J/(mol·K). Met liter en atmosfeer is het ongeveer 0,082057 L·atm/(mol·K). Deze tool rekent intern altijd in SI, dus je hoeft niet te kiezen.",
      },
      {
        question: "Wat is het molair volume van een gas?",
        answer: "Het volume dat één mol inneemt. Voor een ideaal gas bij 0 °C en 1 atm is dat ongeveer 22,414 L; bij 25 °C en 1 bar ongeveer 24,79 L.",
      },
    ],
    sourcesUsedFor: [
      "De exacte waarde van de molaire gasconstante R = Nₐk = 8,314462618… J/(mol·K) en de constante van Avogadro.",
      "De ideale gaswet en waar die bij lage temperatuur en hoge druk tekortschiet.",
    ],
  },
  text: {
    solve: "Bereken",
    solveOptions: { P: "Druk (P)", V: "Volume (V)", n: "Stofhoeveelheid (n)", T: "Temperatuur (T)" },
    pressure: "Druk (P)",
    pressureUnit: "Eenheid van druk",
    pressureUnits: {
      Pa: "Pascal (Pa)",
      kPa: "Kilopascal (kPa)",
      bar: "Bar (bar)",
      atm: "Standaardatmosfeer (atm)",
      mmHg: "Millimeter kwik (mmHg)",
    },
    volume: "Volume (V)",
    volumeUnit: "Eenheid van volume",
    volumeUnits: { L: "Liter (L)", mL: "Milliliter (mL)", m3: "Kubieke meter (m³)" },
    moles: "Hoeveelheid gas (n)",
    temperature: "Temperatuur (T)",
    temperatureUnit: "Eenheid van temperatuur",
    temperatureUnits: { K: "Kelvin (K)", C: "Graden Celsius (°C)", F: "Graden Fahrenheit (°F)" },
    unitHelp: "Voor de grootheid die je berekent, is dit de eenheid van het antwoord.",
    belowAbsoluteZero: "De temperatuur moet boven het absolute nulpunt liggen (0 K = −273,15 °C = −459,67 °F).",
    results: { P: "Druk", V: "Volume", n: "Hoeveelheid gas", T: "Temperatuur" },
    inUnit: "In {unit}",
    molecules: "Aantal moleculen (n × Nₐ)",
    molarVolume: "Molair volume (V ÷ n)",
    note: "Gebruikt R = 8,31446261815324 J/(mol·K). Echte gassen wijken bij hoge druk en lage temperatuur af van dit ideale model, vooral dicht bij condensatie.",
  },
};

export default nl;
