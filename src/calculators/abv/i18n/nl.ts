import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AbvText } from "../text/en";

const nl: CalculatorTranslation<AbvText> = {
  content: {
    title: "Alcoholpercentagecalculator (ABV)",
    shortTitle: "Alcoholpercentage uit SG",
    summary: "Schat het alcoholgehalte van zelfgebrouwen bier, wijn of cider uit de begin- en einddichtheid, in soortelijk gewicht of graden Plato.",
    metaTitle: "Alcoholpercentagecalculator – ABV uit OG en FG",
    metaDescription:
      "Schat het alcoholpercentage van zelfgebrouwen bier uit begin- en einddichtheid (SG of °Plato) met de standaard- en alternatieve formule, plus ABW en vergistingsgraad.",
    keywords: ["alcoholpercentage berekenen", "abv calculator", "begindichtheid", "einddichtheid", "bier brouwen", "hydrometer", "graden plato", "vergistingsgraad"],
    intro: [
      "Gist zet suiker om in alcohol en koolzuur, en omdat alcohol lichter is dan water, daalt de dichtheid van bier, wijn of cider tijdens de vergisting. Thuisbrouwers meten die dichtheid met een hydrometer of refractometer voor en na de vergisting, als begindichtheid (OG) en einddichtheid (FG).",
      "Vul de twee metingen in, als soortelijk gewicht of in graden Plato, om het alcoholpercentage (ABV) te schatten. De calculator toont de gangbare standaardformule, een alternatieve formule die veel brouwers verkiezen voor zware bieren, een benaderd alcoholgewichtspercentage en de schijnbare vergistingsgraad.",
    ],
    howToUse: [
      "Kies of je metingen in soortelijk gewicht (zoals 1,050) of in graden Plato (zoals 12 °P) zijn.",
      "Vul de begindichtheid in, gemeten voordat de gist werd toegevoegd.",
      "Vul de einddichtheid in, gemeten toen de vergisting klaar was.",
      "Lees het alcoholpercentage volgens de standaardformule af en vergelijk het met de alternatieve formule eronder.",
    ],
    formulas: [
      { title: "Standaardformule", expression: "ABV = (OG − FG) × 131,25", explanation: "De meest gebruikte schatting bij het thuisbrouwen. Voor OG 1,050 en FG 1,010 geeft die 0,040 × 131,25 = 5,25%." },
      { title: "Alternatieve formule", expression: "ABV = 76,08 × (OG − FG) ÷ (1,775 − OG) × FG ÷ 0,794", explanation: "Toegeschreven aan Ritchie Products (Zymurgy, 1995). Voor zware bieren geeft deze hogere waarden dan de standaardformule." },
      { title: "Plato naar soortelijk gewicht", expression: "SG = 1 + P ÷ (258,6 − (P ÷ 258,2) × 227,1)", explanation: "Gebruikt als de metingen in graden Plato zijn. 12 °P is ongeveer 1,0484." },
      { title: "Alcoholgewichtspercentage en vergistingsgraad", expression: "ABW ≈ ABV × 0,789 ÷ FG;  vergistingsgraad = (OG − FG) ÷ (OG − 1) × 100", explanation: "0,789 is de dichtheid van ethanol ten opzichte van water bij 20 °C. De vergistingsgraad is schijnbaar omdat alcohol de hydrometermeting onder het werkelijk resterende extract drukt." },
    ],
    examples: [
      {
        title: "Een pale ale van 1,050 naar 1,010",
        steps: ["Daling = 1,050 − 1,010 = 0,040", "ABV = 0,040 × 131,25 = 5,25%", "Schijnbare vergistingsgraad = 0,040 ÷ 0,050 = 80%"],
      },
      {
        title: "Een zwaar bier van 1,092 naar 1,021",
        steps: [
          "Standaard: (1,092 − 1,021) × 131,25 ≈ 9,32%",
          "Alternatief: 76,08 × 0,071 ÷ (1,775 − 1,092) × 1,021 ÷ 0,794 ≈ 10,17%",
          "Bij deze sterkte verschillen de twee formules bijna één procentpunt",
        ],
      },
      {
        title: "Een lager gemeten in Plato: 12 °P naar 2,5 °P",
        steps: ["OG = 1 + 12 ÷ (258,6 − (12 ÷ 258,2) × 227,1) ≈ 1,04838", "FG = 1 + 2,5 ÷ (258,6 − (2,5 ÷ 258,2) × 227,1) ≈ 1,00975", "ABV = (1,04838 − 1,00975) × 131,25 ≈ 5,07%"],
      },
    ],
    assumptions: [
      "Dit is alleen een schatting voor thuisbrouwers. Het is niet geschikt voor wettelijke of commerciële etikettering, waarvoor een gekalibreerde laboratoriummethode nodig is.",
      "Er wordt geen temperatuurcorrectie voor de hydrometer toegepast. Corrigeer je metingen eerst naar de kalibratietemperatuur van de hydrometer.",
      "De metingen worden opgevat als echte soortelijke gewichten. Een refractometermeting die is gedaan nadat de vergisting is begonnen, wordt door alcohol vertekend en vereist een aparte correctie.",
      "Suiker die bij het bottelen is toegevoegd, of suiker die is toegevoegd nadat de begindichtheid is gemeten, wordt niet meegerekend.",
    ],
    faqs: [
      { question: "Welke formule moet ik gebruiken?", answer: "Voor de meeste bieren tussen ongeveer 1,040 en 1,060 geven de twee vrijwel dezelfde uitkomst. Bij zwaardere bieren lopen ze uiteen, en veel brouwers verkiezen dan de alternatieve formule. Geen van beide vervangt een laboratoriummeting." },
      { question: "Wat is het verschil tussen ABV en ABW?", answer: "ABV is het alcoholvolume als percentage van het volume van de drank. ABW is het alcoholgewicht als percentage van het gewicht van de drank. Alcohol is lichter dan water, dus ABW is lager, bij een gewoon bier ongeveer 80% van de ABV." },
      { question: "Wat is de schijnbare vergistingsgraad?", answer: "Het is het deel van de begindichtheid boven 1,000 dat tijdens de vergisting is verdwenen. Hij heet schijnbaar omdat alcohol een lagere dichtheid heeft dan water en de eindmeting lager maakt dan het werkelijk resterende suikergehalte." },
    ],
    sourcesUsedFor: [
      "De standaardformule ABV = (OG − FG) × 131,25, de alternatieve formule 76,08 (OG − FG) ÷ (1,775 − OG) × FG ÷ 0,794, en het uitgewerkte voorbeeld OG 1,092, FG 1,021.",
      "De omrekening SG = 1 + P ÷ (258,6 − (P ÷ 258,2) × 227,1).",
      "De herkomst van de alternatieve formule (Ritchie Products, Zymurgy 1995).",
      "Het omrekenen tussen ABV en ABW met het soortelijk gewicht van de drank en de dichtheid van ethanol (ongeveer 0,789).",
    ],
  },
  text: {
    scale: "Schaal voor de dichtheid",
    scales: { sg: "Soortelijk gewicht (SG)", plato: "Graden Plato (°P)" },
    og: "Begindichtheid (OG)",
    ogHelp: "Het soortelijk gewicht voor de vergisting, bijvoorbeeld 1,050. Toegestaan bereik 0,980 tot 1,200.",
    fg: "Einddichtheid (FG)",
    fgHelp: "Het soortelijk gewicht na de vergisting, bijvoorbeeld 1,010.",
    ogPlato: "Beginextract",
    ogPlatoHelp: "De begindichtheid in graden Plato, bijvoorbeeld 12.",
    fgPlato: "Schijnbaar eindextract",
    fgPlatoHelp: "De laatste hydrometermeting in graden Plato, bijvoorbeeld 2,5. Bij zeer droge bieren kan die iets onder 0 liggen.",
    errors: {
      fgAboveOg: "De einddichtheid kan niet hoger zijn dan de begindichtheid.",
      sgRange: "Dit komt overeen met een soortelijk gewicht van {sg}, buiten het toegestane bereik van 0,980 tot 1,200.",
    },
    abv: "Alcoholpercentage (standaardformule)",
    caption: "OG {og} − FG {fg} = {drop} dichtheidspunten.",
    abvAlt: "Alcoholpercentage (alternatieve formule)",
    abw: "Alcoholgewichtspercentage (benaderd)",
    attenuation: "Schijnbare vergistingsgraad",
    ogSg: "Begindichtheid als SG",
    fgSg: "Einddichtheid als SG",
    notes: {
      estimate: "Dit is een schatting voor thuisbrouwers op basis van hydrometermetingen, geen cijfer voor wettelijke etikettering. Er wordt geen temperatuurcorrectie voor de hydrometer toegepast.",
      high: "Bij zware wort geven de twee formules duidelijk verschillende uitkomsten. Veel brouwers verkiezen bij hoge dichtheden de alternatieve formule.",
      noAttenuation: "Voor de schijnbare vergistingsgraad is een begindichtheid boven 1,000 nodig.",
    },
  },
};

export default nl;
