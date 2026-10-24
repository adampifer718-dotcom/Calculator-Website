import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CarCo2Text } from "../text/en";

const nl: CalculatorTranslation<CarCo2Text> = {
  content: {
    title: "CO₂-calculator voor autoritten",
    shortTitle: "CO₂-uitstoot auto",
    summary:
      "Schat de CO₂-uitstoot uit de uitlaat van een benzine- of dieselauto uit de afstand en het verbruik of de verbruikte brandstof, per rit en per jaar.",
    metaTitle: "CO₂-calculator voor autoritten – CO₂-voetafdruk van rijden",
    metaDescription:
      "Schat de CO₂-uitstoot van een rit met een benzine- of dieselauto uit afstand en mpg of L/100 km, met factoren van de US EPA, per km, per mijl en per jaar.",
    keywords: ["CO2 auto berekenen", "CO2-uitstoot auto", "CO2 per km", "CO2-voetafdruk rijden", "uitstoot benzine per liter", "uitstoot diesel per liter", "uitlaatgassen", "emissiefactor brandstof"],
    intro: [
      "Bij het verbranden van brandstof wordt de koolstof erin omgezet in kooldioxide. Omdat bijna alle koolstof in benzine of diesel als CO₂ eindigt, hangt de uitstoot uit de uitlaat van een auto vooral af van hoeveel brandstof hij verbruikt, ongeacht merk of model.",
      "Deze calculator berekent de verbruikte brandstof uit de afstand en het verbruik van je auto (of neemt de hoeveelheid brandstof direct over) en vermenigvuldigt die met de emissiefactor van de US EPA. Eén Amerikaanse gallon benzine geeft ongeveer 8,9 kg CO₂, meer dan de brandstof zelf weegt, omdat het grootste deel van de massa afkomstig is van zuurstof uit de lucht.",
    ],
    howToUse: [
      "Kies of je uitgaat van de afstand en het verbruik, of van de hoeveelheid verbruikte brandstof.",
      "Vul de afstand in en het verbruik van je auto in mpg (VS of VK), L/100 km of km/L, of vul de verbruikte brandstof in.",
      "Kies benzine, diesel of een eigen emissiefactor in kg CO₂ per liter.",
      "Vul eventueel in hoe vaak per jaar je de rit maakt om het jaartotaal te zien.",
    ],
    formulas: [
      { title: "Uitgestoten CO₂", expression: "CO₂ = verbruikte brandstof × emissiefactor", explanation: "Met de brandstof in liter en de factor in kg CO₂ per liter." },
      {
        title: "Verbruikte brandstof",
        expression: "brandstof = afstand ÷ mpg × liter per gallon, of afstand × L/100 km ÷ 100",
        explanation: "1 Amerikaanse gallon = 3,785411784 L, 1 imperiale gallon = 4,54609 L en 1 mijl = precies 1,609344 km. Voor km/L geldt brandstof = afstand ÷ km/L.",
      },
      {
        title: "EPA-factoren per liter",
        expression: "benzine 8,887 ÷ 3,785411784 ≈ 2,3477 kg/L; diesel 10,180 ÷ 3,785411784 ≈ 2,6893 kg/L",
        explanation: "De EPA-waarden per gallon, exact omgerekend naar liter.",
      },
    ],
    examples: [
      {
        title: "Een rit van 250 mijl bij 30 mpg met een benzineauto",
        steps: ["Brandstof = 250 ÷ 30 = 8,333 Amerikaanse gallon", "CO₂ = 8,333 × 8,887 kg ≈ 74,06 kg", "Dat is ongeveer 296 g CO₂ per mijl"],
      },
      {
        title: "400 km met een dieselauto die 6,5 L/100 km verbruikt",
        steps: ["Brandstof = 400 × 6,5 ÷ 100 = 26 L", "Factor = 10,180 ÷ 3,785411784 ≈ 2,6893 kg CO₂/L", "CO₂ = 26 × 2,6893 ≈ 69,92 kg, ongeveer 174,8 g per km"],
      },
      {
        title: "Een tank van 45 L benzine, 52 keer per jaar getankt",
        steps: ["CO₂ per tank = 45 × 2,3477 ≈ 105,65 kg", "Per jaar = 105,65 × 52 ≈ 5.494 kg, ongeveer 5,49 ton"],
      },
    ],
    assumptions: [
      "Alleen de CO₂ uit de uitlaat wordt meegeteld. Methaan en lachgas uit de uitlaatgassen, lekkende koudemiddelen en de uitstoot bij het winnen, raffineren en vervoeren van de brandstof zijn niet meegenomen, dus de volledige voetafdruk is hoger.",
      "De factoren voor benzine en diesel zijn die van de US EPA. Brandstoffen met bijgemengde ethanol of biodiesel, en brandstoffen in andere landen, kunnen iets afwijken; gebruik een eigen factor als je een betere hebt.",
      "Elektrische auto's vallen buiten deze calculator: ze stoten niets uit via een uitlaat, en hun voetafdruk hangt af van de stroommix waar ze worden opgeladen.",
      "De uitkomst is maar zo goed als het verbruik dat je invult. Het werkelijke verbruik is vaak hoger dan de officiële testwaarden, vooral bij koud weer, op hoge snelheid en bij korte ritten.",
    ],
    faqs: [
      {
        question: "Hoe kan een gallon benzine meer CO₂ opleveren dan de gallon zelf weegt?",
        answer:
          "Elk koolstofatoom in de brandstof verbindt zich met twee zuurstofatomen uit de lucht. Zuurstof is zwaarder dan koolstof, dus de CO₂ weegt ongeveer 3,7 keer zoveel als de koolstof die erin zit (44 ÷ 12): een Amerikaanse gallon benzine weegt ruwweg 2,8 kg, maar levert bijna 8,9 kg CO₂ op.",
      },
      {
        question: "Waarom heeft diesel een hogere factor dan benzine?",
        answer:
          "Diesel heeft een hogere dichtheid en bevat meer koolstof per liter, dus bij het verbranden van een liter komt meer CO₂ vrij. Dieselauto's verbruiken vaak minder brandstof voor dezelfde rit, wat de hogere factor kan compenseren.",
      },
      {
        question: "Zit de uitstoot van het maken van de auto of de brandstof erbij?",
        answer:
          "Nee. Het gaat alleen om de CO₂ die tijdens het rijden uit de uitlaat komt. De productie van de auto en het produceren en leveren van de brandstof zorgen voor extra uitstoot, waarvoor je een volledige levenscyclusanalyse nodig hebt.",
      },
    ],
    sourcesUsedFor: ["De emissiefactoren voor de uitlaat van 8.887 g CO₂ per gallon benzine en 10.180 g CO₂ per gallon diesel."],
  },
  text: {
    method: "Bereken de brandstof uit",
    methodOptions: { distance: "Afstand en verbruik", fuel: "Verbruikte brandstof" },
    distance: "Gereden afstand",
    distanceUnit: "Eenheid van afstand",
    distanceUnits: { km: "Kilometer (km)", mi: "Mijl (mi)" },
    economy: "Brandstofverbruik",
    economyHelp: "Gebruik het cijfer van je boordcomputer of je tankbonnen voor de meest realistische uitkomst.",
    economyUnit: "Eenheid van verbruik",
    economyUnits: {
      mpgUs: "Mijl per Amerikaanse gallon (mpg US)",
      mpgUk: "Mijl per imperiale gallon (mpg UK)",
      l100km: "Liter per 100 km (L/100 km)",
      kmL: "Kilometer per liter (km/L)",
    },
    fuelAmount: "Verbruikte brandstof",
    fuelUnit: "Eenheid van brandstof",
    fuelUnits: { L: "Liter (L)", galUs: "Amerikaanse gallon", galUk: "Imperiale gallon" },
    fuelType: "Brandstof",
    fuelTypes: { gasoline: "Benzine", diesel: "Diesel", custom: "Eigen emissiefactor" },
    customFactor: "Emissiefactor",
    customFactorHelp: "Kilogram CO₂ die vrijkomt bij het verbranden van één liter van de brandstof.",
    trips: "Ritten per jaar (optioneel)",
    tripsHelp: "Hoe vaak per jaar je deze rit maakt, voor een jaartotaal. Voor een heel jaar rijden vul je de jaarlijkse afstand en 1 rit in.",
    co2: "Uitgestoten CO₂",
    caption: "{fuel} brandstof × {factor}.",
    perKm: "CO₂ per kilometer",
    perMile: "CO₂ per mijl",
    fuelL: "Verbruikte brandstof",
    fuelGal: "Verbruikte brandstof in Amerikaanse gallon",
    factor: "Gebruikte emissiefactor",
    annual: "CO₂ per jaar",
    annualTonnes: "CO₂ per jaar in ton",
    gallonsUs: "US gal",
    notes: {
      tailpipe:
        "Dit is alleen de CO₂ uit de uitlaat. Methaan, lachgas, koudemiddelen uit de airco en de uitstoot bij het produceren en leveren van de brandstof zijn niet meegenomen.",
      electric: "Elektrische auto's vallen hier niet onder: ze hebben geen uitlaatemissies, en hun voetafdruk hangt af van hoe de stroom wordt opgewekt.",
      custom: "Met een eigen factor is de uitkomst maar zo nauwkeurig als de factor die je invult.",
    },
  },
};

export default nl;
