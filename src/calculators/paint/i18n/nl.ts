import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PaintText } from "../text/en";

const nl: CalculatorTranslation<PaintText> = {
  content: {
    title: "Verfcalculator voor muren",
    shortTitle: "Verf",
    summary: "Schat hoeveel gallon of liter muurverf je nodig hebt op basis van de muurafmetingen, deuren, ramen, het aantal lagen en het rendement.",
    metaTitle: "Verfcalculator – Liters of gallons voor je muren",
    metaDescription:
      "Bereken hoeveel muurverf je moet kopen in liter of gallon uit de lengte en hoogte van de muren, min deuren en ramen, voor elk aantal lagen en elk rendement.",
    keywords: [
      "verfcalculator",
      "hoeveel verf nodig",
      "liter verf",
      "rendement verf",
      "muurverf berekenen",
      "verf per m2",
      "aantal verflagen",
    ],
    intro: [
      "Verf kopen is makkelijker als je weet hoeveel oppervlakte je gaat schilderen. Tel de breedtes van de muren op, vermenigvuldig met de hoogte, trek de deuren en ramen eraf en deel door het oppervlak dat een liter of gallon van je verf dekt.",
      "De calculator doet dat voor elk aantal lagen en toont zowel de exacte hoeveelheid als het hele aantal liters of gallons dat je moet kopen.",
    ],
    howToUse: [
      "Kies Amerikaanse eenheden (voet en gallon) of metrische eenheden (meter en liter).",
      "Vul de totale lengte in van de muren die je schildert en hun hoogte. Voor een hele kamer is de totale lengte de omtrek.",
      "Vul in hoeveel deuren en ramen er zijn. Pas de standaardmaten van de openingen aan als die van jou groter of kleiner zijn.",
      "Stel het aantal lagen en het rendement op je verfblik in en lees af hoeveel verf je nodig hebt.",
    ],
    formulas: [
      {
        title: "Te schilderen oppervlak",
        expression: "A = L × H − (deuren × oppervlak deur) − (ramen × oppervlak raam)",
        explanation: "L is de gezamenlijke breedte van de muren en H hun hoogte.",
      },
      {
        title: "Benodigde verf",
        expression: "verf = A × lagen ÷ rendement",
        explanation: "Het rendement is het oppervlak dat één gallon of liter in één laag dekt, volgens de fabrikant.",
      },
      {
        title: "Te kopen hoeveelheid",
        expression: "kopen = ⌈verf⌉",
        explanation: "Naar boven afgerond op een hele gallon of liter. Grotere emmers en kleinere quarts brengen het totaal dichter bij wat je nodig hebt.",
      },
    ],
    examples: [
      {
        title: "Slaapkamer van 14 ft × 12 ft met muren van 9 ft, twee lagen",
        steps: [
          "Muurlengte = 14 + 12 + 14 + 12 = 52 ft; muuroppervlak = 52 × 9 = 468 ft²",
          "Openingen = 2 × 20 + 3 × 15 = 85 ft², dus het te schilderen oppervlak is 383 ft²",
          "Verf = 383 × 2 ÷ 350 ≈ 2,19 gal, dus koop 3 gallon",
        ],
      },
      {
        title: "Metrische kamer met 16 m muur van 2,5 m hoog",
        steps: [
          "Muuroppervlak = 16 × 2,5 = 40 m²",
          "Openingen = 1,9 + 2 × 1,4 = 4,7 m², dus er blijft 35,3 m² te schilderen",
          "Verf = 35,3 × 2 ÷ 10 = 7,06 L, dus koop 8 L",
        ],
      },
      {
        title: "Eén accentmuur, één laag van een verf met hoog rendement",
        steps: [
          "Oppervlak = 14 × 9 = 126 ft²",
          "Verf = 126 × 1 ÷ 400 = 0,315 gal, dus één gallon (een quart van 0,25 gal komt net te kort)",
        ],
      },
    ],
    assumptions: [
      "De Amerikaanse standaardwaarde van 350 ft² per gallon ligt aan de onderkant van het bereik van 350–400 ft² dat vaak voor muurverf wordt genoemd. De metrische standaardwaarde van 10 m² per liter is een gangbare waarde op etiketten. Het rendement verschilt per product, glansgraad en ondergrond, dus gebruik het getal op je blik.",
      "Ruwe, poreuze, geplamuurde of nog niet eerder geschilderde ondergronden nemen meer verf op, en van donker naar licht gaan kan een extra laag of een grondverf vragen.",
      "De maten van deuren en ramen zijn standaardwaarden. Muren worden behandeld als vlakke rechthoeken met één hoogte; reken puntgevels of schuine plafonds apart uit.",
    ],
    faqs: [
      {
        question: "Hoeveel lagen verf heb ik nodig?",
        answer: "Twee lagen is het gebruikelijke advies voor een egale afwerking, vooral over een andere kleur. Eén laag kan genoeg zijn als je een muur in goede staat in dezelfde kleur overschildert.",
      },
      {
        question: "Moet ik deuren en ramen aftrekken?",
        answer: "Ja, voor een nauwkeurigere schatting. Schilder je de deuren of het houtwerk ook, schat die dan apart, want lakverf voor houtwerk is meestal een ander product.",
      },
      {
        question: "Hoeveel oppervlak dekt een gallon verf?",
        answer: "De meeste muurverven vermelden ongeveer 350–400 ft² per gallon per laag op gladde, voorbehandelde muren, wat neerkomt op ongeveer 8,5–10 m² per liter. Kijk op het etiket van je product, want het rendement verschilt.",
      },
    ],
    sourcesUsedFor: [
      "Gangbaar rendement van muurverf van ongeveer 350–400 ft² per gallon per laag, gebruikt voor de Amerikaanse standaardwaarde.",
    ],
  },
  text: {
    units: "Eenheden",
    unitSystems: { imperial: "VS (ft, gal)", metric: "Metrisch (m, L)" },
    length: "Totale muurlengte",
    lengthHelp: "Tel de breedtes op van alle muren die je schildert. Voor een hele kamer is dit de omtrek.",
    height: "Muurhoogte",
    doors: "Aantal deuren",
    doorArea: "Oppervlak van één deur",
    windows: "Aantal ramen",
    windowArea: "Oppervlak van één raam",
    openingHelp: "Er staat een standaardwaarde ingevuld; meet je eigen maten op voor een nauwkeurigere schatting.",
    coats: "Aantal lagen",
    coverage: "Rendement",
    coverageHelp: "Het oppervlak dat één eenheid verf in één laag dekt. Kijk op het etiket of het technische blad van je verf: gestructureerde, poreuze of ongeschilderde ondergronden hebben meer verf nodig.",
    errors: {
      openings: "De deuren en ramen zijn samen minstens zo groot als het hele muuroppervlak. Controleer de aantallen, de maten van de openingen en de muurafmetingen.",
    },
    paintNeeded: "Benodigde verf",
    caption: "{area} geschilderd met {coats} bij {coverage}.",
    coatsCount: { zero: "{n} lagen", one: "{n} laag", two: "{n} lagen", few: "{n} lagen", many: "{n} lagen", other: "{n} lagen" },
    wallArea: "Totaal muuroppervlak",
    openingArea: "Deuren en ramen",
    paintableArea: "Te schilderen oppervlak (één laag)",
    totalCoverage: "Te dekken oppervlak, alle lagen",
    wholeGallons: "Hele gallons om te kopen",
    wholeLiters: "Hele liters om te kopen",
    inLiters: "In liter",
    inGallons: "In Amerikaanse gallon",
    notes: {
      cans: "Verf wordt verkocht in vaste blikmaten; rond naar boven af en houd wat extra over om bij te werken.",
      surfaces: "Plafonds, houtwerk en grondverf zijn niet meegerekend. Tel ze apart op als je ze ook schildert.",
    },
  },
};

export default nl;
