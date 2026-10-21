import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { StandardDeviationText } from "../text/en";

const nl: CalculatorTranslation<StandardDeviationText> = {
  content: {
    title: "Standaarddeviatiecalculator",
    shortTitle: "Standaarddeviatie",
    summary: "Bereken de standaarddeviatie van een steekproef of populatie, de variantie en de standaardfout uit een reeks gegevens.",
    metaTitle: "Standaarddeviatie berekenen – steekproef en populatie",
    metaDescription:
      "Bereken de standaarddeviatie van een steekproef of populatie, de variantie, het gemiddelde en de standaardfout van het gemiddelde uit een lijst getallen.",
    keywords: ["standaarddeviatie", "standaardafwijking", "variantie", "steekproef", "populatie", "spreiding", "statistiek", "standaardfout"],
    intro: [
      "De standaarddeviatie meet hoe sterk waarden rond het gemiddelde gespreid zijn. Een kleine waarde betekent dat de gegevens dicht bij elkaar liggen; een grote dat ze ver uiteen liggen.",
      "Kies steekproef als je gegevens een deel van een grotere groep zijn. Dat is meestal het geval.",
    ],
    howToUse: [
      "Vul je getallen in, gescheiden door puntkomma's, spaties of nieuwe regels.",
      "Kies steekproef of populatie.",
      "Lees de standaarddeviatie, de variantie, het gemiddelde en de standaardfout af.",
    ],
    formulas: [
      {
        title: "Standaarddeviatie van een steekproef",
        expression: "s = √(Σ(x − x̄)² ÷ (n − 1))",
        explanation: "Delen door n − 1 (de correctie van Bessel) corrigeert de vertekening bij het schatten van de spreiding uit een steekproef.",
      },
      {
        title: "Standaarddeviatie van een populatie",
        expression: "σ = √(Σ(x − μ)² ÷ n)",
        explanation: "Gebruik deze als je gegevens van elk lid van de groep hebt.",
      },
      {
        title: "Standaardfout van het gemiddelde",
        expression: "SE = s ÷ √n",
        explanation: "Hoe nauwkeurig het steekproefgemiddelde het populatiegemiddelde schat.",
      },
    ],
    examples: [
      { title: "Populatie: 2; 4; 4; 4; 5; 5; 7; 9", steps: ["Gemiddelde = 5; de gekwadrateerde afwijkingen tellen op tot 32", "σ = √(32 ÷ 8) = 2"] },
      { title: "Steekproef: 2; 4; 4; 4; 5; 5; 7; 9", steps: ["De gekwadrateerde afwijkingen tellen op tot 32", "s = √(32 ÷ 7) ≈ 2,138"] },
    ],
    assumptions: [
      "Accepteert maximaal 10.000 getallen. Een steekproef heeft er minstens twee nodig.",
      "Gebruikt een numeriek stabiele berekening in twee doorgangen.",
      "De uitkomsten worden met 10 significante cijfers weergegeven.",
    ],
    faqs: [
      {
        question: "Moet ik de standaarddeviatie van een steekproef of van een populatie gebruiken?",
        answer: "Gebruik steekproef (n − 1) als je gegevens een steekproef uit een grotere groep zijn, en populatie (n) alleen als je de hele groep hebt.",
      },
      { question: "Wat is variantie?", answer: "Het kwadraat van de standaarddeviatie, in gekwadrateerde eenheden." },
      { question: "Wat betekent een standaarddeviatie van 0?", answer: "Dat alle waarden gelijk zijn." },
    ],
    sourcesUsedFor: ["Formules voor de standaarddeviatie van een steekproef en van een populatie."],
  },
  text: {
    data: "Gegevens",
    dataHelp:
      "Scheid de getallen met puntkomma's, spaties of nieuwe regels (bijvoorbeeld 1,5; 2,25; 3). Gebruik de komma als decimaalteken; een komma gevolgd door een spatie scheidt ook waarden.",
    errors: {
      empty: "Vul minstens één getal in.",
      tooMany: "Vul hoogstens {max} getallen in.",
      notNumber: "“{token}” is geen getal. Scheid waarden met puntkomma's, spaties of nieuwe regels.",
      tooLarge: "“{token}” is te groot.",
    },
    kind: "De gegevens zijn een",
    kinds: { sample: "Steekproef (delen door n − 1)", population: "Volledige populatie (delen door n)" },
    needTwo: "Een steekproef heeft minstens twee waarden nodig.",
    sampleSd: "Standaarddeviatie van de steekproef (s)",
    populationSd: "Standaarddeviatie van de populatie (σ)",
    sampleVariance: "Variantie van de steekproef (s²)",
    populationVariance: "Variantie van de populatie (σ²)",
    mean: "Gemiddelde",
    count: "Aantal (n)",
    standardError: "Standaardfout van het gemiddelde",
  },
};

export default nl;
