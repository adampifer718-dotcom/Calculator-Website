import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ZScoreText } from "../text/en";

const nl: CalculatorTranslation<ZScoreText> = {
  content: {
    title: "Z-scorecalculator",
    shortTitle: "Z-score",
    summary: "Standaardiseer een waarde als z-score en vind het percentiel en de staartkansen onder de normale verdeling.",
    metaTitle: "Z-score berekenen – percentiel en normale kansen",
    metaDescription:
      "Zet een waarde om in een z-score op basis van gemiddelde en standaarddeviatie, en vind het percentiel, de rechterstaartkans en de tweezijdige kans.",
    keywords: ["z-score", "z-waarde", "standaardscore", "standaardiseren", "normale verdeling", "percentiel", "standaarddeviaties van het gemiddelde", "klokkromme"],
    intro: [
      "Een z-score geeft aan hoeveel standaarddeviaties een waarde boven of onder het gemiddelde ligt. Een z-score van 0 is precies gemiddeld, positieve scores liggen boven het gemiddelde en negatieve eronder.",
      "Omdat z-scores de oorspronkelijke eenheden wegnemen, kun je er resultaten op verschillende schalen mee vergelijken, zoals twee toetsen met een verschillend gemiddelde. Zijn de gegevens ongeveer normaal verdeeld, dan geeft de z-score ook het aandeel waarden onder of boven de jouwe.",
    ],
    howToUse: [
      "Vul de waarde in die je wilt opzoeken.",
      "Vul het gemiddelde en de standaarddeviatie in van de groep waartoe ze behoort. De standaarddeviatie moet positief zijn.",
      "Lees de z-score af en de positie in gewone woorden.",
      "Gebruik het percentiel voor het aandeel waarden onder x, P(X > x) voor het aandeel erboven en de tweezijdige kans voor een tweezijdige toets.",
    ],
    formulas: [
      { title: "Z-score", expression: "z = (x − μ) ÷ σ", explanation: "μ is het gemiddelde en σ de standaarddeviatie van de verdeling." },
      {
        title: "Percentiel",
        expression: "P(X < x) = Φ(z)",
        explanation: "Φ is de cumulatieve verdelingsfunctie van de standaardnormale verdeling: de oppervlakte onder de klokkromme links van z.",
      },
      {
        title: "Rechterstaart",
        expression: "P(X > x) = 1 − Φ(z) = Φ(−z)",
        explanation: "De oppervlakte rechts van z. Ze wordt berekend als Φ(−z) om bij grote z nauwkeurig te blijven.",
      },
      {
        title: "Tweezijdige kans",
        expression: "P(|Z| > |z|) = 2·Φ(−|z|)",
        explanation: "De kans op een waarde die minstens zo ver van het gemiddelde ligt, in welke richting dan ook.",
      },
    ],
    examples: [
      {
        title: "Een examenscore van 1310 bij een gemiddelde van 1050 en σ = 210",
        steps: [
          "z = (1310 − 1050) ÷ 210 = 260 ÷ 210 ≈ 1,2381",
          "Φ(1,2381) ≈ 0,8922, dus de score ligt rond het 89e percentiel",
          "Ongeveer 10,78% van de scores is hoger",
        ],
      },
      {
        title: "Een onderdeel van 58 mm bij een gemiddelde van 70 mm en σ = 8 mm",
        steps: ["z = (58 − 70) ÷ 8 = −1,5", "Φ(−1,5) ≈ 0,0668, dus ongeveer 6,68% van de onderdelen is korter", "Tweezijdige kans = 2 × 0,0668 ≈ 0,1336"],
      },
    ],
    assumptions: [
      "De z-score zelf geldt voor elke verdeling, maar het percentiel en de kansen gaan ervan uit dat de gegevens normaal verdeeld zijn.",
      "Het gemiddelde en de standaarddeviatie die je invult, worden behandeld als de echte populatiewaarden. Bij een kleine steekproef met een geschatte σ kan een t-verdeling geschikter zijn.",
      "Normale kansen worden berekend met een numerieke benadering die tot ongeveer zeven significante cijfers nauwkeurig is.",
    ],
    faqs: [
      {
        question: "Wat is een goede z-score?",
        answer: "Dat hangt af van wat er gemeten wordt. Bij toetsscores is een hogere z-score beter; bij iets als reactietijd is lager beter. Bij een normale verdeling ligt ongeveer 68% van de waarden tussen z = −1 en z = 1, en ongeveer 95% tussen −2 en 2.",
      },
      {
        question: "Kan een z-score negatief zijn?",
        answer: "Ja. Een negatieve z-score betekent dat de waarde onder het gemiddelde ligt. Zo ligt z = −2 twee standaarddeviaties onder het gemiddelde.",
      },
      {
        question: "Hoe zet ik een z-score om in een percentiel?",
        answer: "Bepaal de oppervlakte onder de standaardnormale kromme links van z. Deze calculator doet dat voor je: z = 1,6 geeft ongeveer 94,52%, dus de waarde is hoger dan zo'n 94,5% van de verdeling.",
      },
    ],
    sourcesUsedFor: ["Definitie van de z-score, z = (x − μ)/σ, en de standaardnormale verdeling."],
  },
  text: {
    x: "Waarde (x)",
    xHelp: "De waarneming die je wilt standaardiseren.",
    mean: "Gemiddelde (μ)",
    sd: "Standaarddeviatie (σ)",
    sdHelp: "Moet groter zijn dan 0.",
    z: "Z-score",
    above: "{n} standaarddeviaties boven het gemiddelde",
    below: "{n} standaarddeviaties onder het gemiddelde",
    atMean: "Precies op het gemiddelde",
    position: "Positie",
    percentile: "Percentiel, P(X < x)",
    upper: "P(X > x)",
    twoTailed: "Tweezijdig P(|Z| > |z|)",
    note: "De kansen gaan ervan uit dat de waarden een normale verdeling volgen met dit gemiddelde en deze standaarddeviatie.",
    unusual: "|z| is groter dan 3, wat bij normaal verdeelde gegevens zeer ongebruikelijk is. Controleer op een invoerfout of een uitschieter.",
  },
};

export default nl;
