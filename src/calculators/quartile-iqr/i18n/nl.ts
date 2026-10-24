import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { QuartileText } from "../text/en";

const values = { zero: "{n} waarden", one: "{n} waarde", two: "{n} waarden", few: "{n} waarden", many: "{n} waarden", other: "{n} waarden" };

const nl: CalculatorTranslation<QuartileText> = {
  content: {
    title: "Kwartiel- en IQR-calculator",
    shortTitle: "Kwartielen",
    summary: "Bereken de kwartielen, de interkwartielafstand, de vijfgetallensamenvatting, de grenzen op 1,5 × IQR en de uitschieters van een dataset, met twee gangbare kwartielmethoden.",
    metaTitle: "Kwartiel- en IQR-calculator – samenvatting en uitschieters",
    metaDescription:
      "Bereken Q1, de mediaan, Q3 en de interkwartielafstand van een lijst getallen, met de vijfgetallensamenvatting, grenzen op 1,5 × IQR en uitschieters.",
    keywords: ["kwartielen berekenen", "interkwartielafstand", "IQR berekenen", "vijfgetallensamenvatting", "Q1 Q3", "uitschieters", "boxplot", "1,5 IQR-regel"],
    intro: [
      "Kwartielen verdelen gesorteerde gegevens in vier groepen van ongeveer gelijke grootte. Onder het eerste kwartiel Q1 ligt een kwart van de waarden, onder de mediaan Q2 de helft en onder het derde kwartiel Q3 driekwart. De interkwartielafstand, IQR = Q3 − Q1, is de spreiding van de middelste helft van de gegevens en wordt, anders dan de variatiebreedte, nauwelijks beïnvloed door een paar extreme waarden.",
      "Plak een lijst getallen om de IQR te krijgen, de vijfgetallensamenvatting voor boxplots en de grenzen op 1,5 × IQR die mogelijke uitschieters aanwijzen. Er zijn twee kwartielmethoden, omdat leerboeken, rekenmachines en software het niet allemaal eens zijn; voor het gemiddelde en de modus gebruik je de Gemiddelde-, mediaan- en moduscalculator.",
    ],
    howToUse: [
      "Plak of typ minstens 4 getallen, gescheiden door puntkomma's, spaties of nieuwe regels. Ze hoeven niet gesorteerd te zijn.",
      "Kies de kwartielmethode: inclusief om overeen te komen met Excel KWARTIEL.INC, NumPy en R, of mediaan van de helften om overeen te komen met een TI-83 of veel schoolboeken.",
      "Lees de IQR, de kwartielen en de grenzen af.",
      "Bekijk de lijst met uitschieters voor waarden buiten de grenzen.",
    ],
    formulas: [
      { title: "Inclusief (lineaire interpolatie)", expression: "h = (n − 1) × p\nQ = x₍⌊h⌋₎ + (h − ⌊h⌋)(x₍⌊h⌋+1₎ − x₍⌊h⌋₎)", explanation: "x₍₀₎ ≤ x₍₁₎ ≤ … zijn de gesorteerde waarden, geteld vanaf 0, met p = 0,25 voor Q1 en 0,75 voor Q3. Dit is type 7 van Hyndman en Fan, de standaard in R en NumPy en KWARTIEL.INC in Excel." },
      { title: "Mediaan van de helften", expression: "Q1 = mediaan van de onderste helft\nQ3 = mediaan van de bovenste helft", explanation: "Bij een oneven aantal waarden blijft de mediaan zelf buiten beide helften. Dit is de methode van de rekenmachines TI-83 en TI-84." },
      { title: "Interkwartielafstand en grenzen", expression: "IQR = Q3 − Q1\nondergrens = Q1 − 1,5 × IQR\nbovengrens = Q3 + 1,5 × IQR", explanation: "Waarden buiten de grenzen worden aangemerkt als mogelijke uitschieters; het zijn de punten die in een boxplot apart worden getekend." },
    ],
    examples: [
      {
        title: "Elf levertijden in minuten, inclusieve methode",
        steps: ["n = 11, dus h = 10 × 0,25 = 2,5 voor Q1: halverwege 17 en 18, Q1 = 17,5", "h = 10 × 0,75 = 7,5 voor Q3: halverwege 26 en 29, Q3 = 27,5", "IQR = 27,5 − 17,5 = 10; de grenzen zijn 2,5 en 42,5, dus 58 is een uitschieter"],
      },
      {
        title: "Dezelfde gegevens met de methode mediaan van de helften",
        steps: ["De mediaan is 22; laat die weg, dan zijn de helften 12, 15, 17, 18, 21 en 24, 26, 29, 31, 58", "Q1 = 17 en Q3 = 29", "IQR = 29 − 17 = 12; de grenzen zijn −1 en 47, dus 58 is nog steeds een uitschieter"],
      },
      {
        title: "Acht pH-metingen, inclusieve methode",
        steps: ["h = 7 × 0,25 = 1,75: Q1 = 4,1 + 0,75 × (4,4 − 4,1) = 4,325", "h = 7 × 0,75 = 5,25: Q3 = 6,3 + 0,25 × (7,7 − 6,3) = 6,65", "IQR = 6,65 − 4,325 = 2,325, met grenzen 0,8375 en 10,1375: geen uitschieters"],
      },
    ],
    assumptions: [
      "Er bestaat geen eenduidige definitie van kwartielen. De twee methoden hier zijn de meest gebruikte; andere, zoals KWARTIEL.EXC in Excel, kunnen bij kleine datasets iets andere waarden geven.",
      "De regel van 1,5 × IQR is een afspraak om waarden aan te wijzen die een tweede blik verdienen. Hij bewijst niet dat een waarde een fout is.",
      "Er worden tot 10.000 getallen geaccepteerd. Resultaten worden getoond met hoogstens 10 significante cijfers.",
    ],
    faqs: [
      { question: "Waarom geven verschillende rekenmachines verschillende kwartielen?", answer: "Omdat er meerdere definities zijn. Voor 1, 2, 3, 4, 5, 6 geeft de inclusieve methode Q1 = 2,25, terwijl de methode mediaan van de helften Q1 = 2 geeft. Bij grote datasets liggen de methoden dicht bij elkaar." },
      { question: "Wat is de vijfgetallensamenvatting?", answer: "Het minimum, Q1, de mediaan, Q3 en het maximum. Samen beschrijven ze het midden, de spreiding en de variatiebreedte van de gegevens, en het is precies wat een boxplot tekent." },
      { question: "Is de mediaan van de helften hetzelfde als de hinges van Tukey?", answer: "Niet helemaal. De hinges van Tukey nemen bij een oneven aantal waarden de mediaan in beide helften op, terwijl de TI-83-methode die hier wordt gebruikt hem weglaat. Bij een even aantal waarden zijn ze gelijk." },
    ],
    sourcesUsedFor: [
      "De binnengrenzen Q1 − 1,5 × IQR en Q3 + 1,5 × IQR om uitschieters aan te wijzen.",
      "De verschillende definities van steekproefkwantielen die Hyndman en Fan (1996) vergelijken, waaronder lineaire interpolatie.",
    ],
  },
  text: {
    data: "Gegevens",
    dataHelp: "Minstens 4 getallen, gescheiden door puntkomma's, spaties of nieuwe regels (bijvoorbeeld 3,2; 4,1; 4,4). Gebruik de komma als decimaalteken; een komma gevolgd door een spatie scheidt ook waarden. De volgorde maakt niet uit.",
    errors: {
      empty: "Vul minstens 4 getallen in.",
      tooMany: "Vul hoogstens {max} getallen in.",
      notNumber: "“{token}” is geen getal. Scheid waarden met puntkomma's, spaties of nieuwe regels.",
      tooLarge: "“{token}” is te groot.",
    },
    tooFew: "Vul minstens 4 getallen in om kwartielen te vinden; je hebt er {count} ingevuld.",
    method: "Kwartielmethode",
    methods: {
      inclusive: "Inclusief, lineaire interpolatie (Excel KWARTIEL.INC, NumPy, R type 7)",
      exclusive: "Mediaan van de helften, zonder mediaan (zoals TI-83)",
    },
    methodHelp: "Leerboeken en programma's definiëren kwartielen net iets anders. Bij kleine datasets kunnen de resultaten verschillen.",
    iqr: "Interkwartielafstand (IQR)",
    caption: "Q3 − Q1 voor {count}, met de methode {method}.",
    methodShort: { inclusive: "inclusief", exclusive: "mediaan van de helften" },
    valueCount: values,
    min: "Minimum",
    q1: "Eerste kwartiel (Q1)",
    median: "Mediaan (Q2)",
    q3: "Derde kwartiel (Q3)",
    max: "Maximum",
    lowerFence: "Ondergrens (Q1 − 1,5 × IQR)",
    upperFence: "Bovengrens (Q3 + 1,5 × IQR)",
    outliers: "Uitschieters",
    noOutliers: "Geen",
    moreOutliers: "{list} en nog {count}",
    outlierCount: "Aantal uitschieters",
    summaryTable: "Vijfgetallensamenvatting",
    colStatistic: "Kengetal",
    colValue: "Waarde",
    noOutliersNote: "Er liggen geen waarden buiten de grenzen, dus volgens de regel van 1,5 × IQR hebben de gegevens geen uitschieters.",
    outliersNote: "Waarden onder de ondergrens of boven de bovengrens worden aangemerkt als mogelijke uitschieters. Controleer ze voordat je iets verwijdert: een uitschieter kan een echte, belangrijke waarneming zijn.",
  },
};

export default nl;
