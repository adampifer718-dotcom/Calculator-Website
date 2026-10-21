import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SampleSizeText } from "../text/en";

const nl: CalculatorTranslation<SampleSizeText> = {
  content: {
    title: "Steekproefgroottecalculator",
    shortTitle: "Steekproefgrootte",
    summary:
      "Bereken hoeveel enquêtereacties je nodig hebt voor een bepaald betrouwbaarheidsniveau en een bepaalde foutmarge, met een optionele populatiegrootte.",
    metaTitle: "Steekproefgroottecalculator – Benodigde respons",
    metaDescription:
      "Bereken hoeveel volledige reacties je nodig hebt op basis van betrouwbaarheid, foutmarge en verwachte proportie, met correctie voor een eindige populatie.",
    keywords: [
      "steekproefgrootte",
      "steekproefgrootte berekenen",
      "steekproef enquête",
      "hoeveel respondenten",
      "foutmarge",
      "betrouwbaarheidsniveau",
      "eindigepopulatiecorrectie",
      "representatieve steekproef",
    ],
    intro: [
      "Voordat je een enquête of peiling uitzet, moet je beslissen hoeveel mensen je ondervraagt. Met te weinig reacties is het resultaat breed en onzeker; met te veel verspil je tijd en geld. Deze calculator vindt het kleinste aantal volledige reacties waarmee je een percentage schat met de precisie die je kiest.",
      "Kies een betrouwbaarheidsniveau, de foutmarge die je kunt accepteren en, als je die hebt, je beste schatting van het resultaat. Is de groep die je onderzoekt klein, zoals de 600 medewerkers van een bedrijf, vul dan ook de grootte in: de correctie voor een eindige populatie verlaagt het benodigde aantal.",
    ],
    howToUse: [
      "Kies een betrouwbaarheidsniveau. 95% is de meest gebruikte keuze.",
      "Vul de foutmarge in procentpunten in, bijvoorbeeld 5 voor ±5 punten.",
      "Vul de proportie in die je verwacht. Laat die op 50% staan als je het niet zeker weet: dat geeft de grootste steekproef.",
      "Vul eventueel de populatiegrootte in. Laat het veld leeg voor een grote of onbekende populatie.",
      "Lees de benodigde steekproefgrootte af. Die wordt altijd naar boven afgerond op een hele reactie.",
    ],
    formulas: [
      {
        title: "Steekproefgrootte voor een grote populatie",
        expression: "n₀ = z*² × p × (1 − p) ÷ E²",
        explanation:
          "z* is de kritieke waarde voor het betrouwbaarheidsniveau (1,96 voor 95%), p de verwachte proportie en E de foutmarge, beide als decimaal getal.",
      },
      {
        title: "Correctie voor een eindige populatie",
        expression: "n = n₀ ÷ (1 + (n₀ − 1) ÷ N)",
        explanation: "N is de populatiegrootte. De correctie doet ertoe als de steekproef een merkbaar deel van de populatie is.",
      },
      {
        title: "Afronding",
        expression: "steekproefgrootte = ⌈n⌉",
        explanation: "Het resultaat wordt naar boven afgerond, omdat naar beneden afronden een iets grotere foutmarge zou geven dan gevraagd.",
      },
    ],
    examples: [
      {
        title: "Een landelijke peiling met 95% betrouwbaarheid en ±5 punten",
        steps: ["z* = 1,95996 voor 95% betrouwbaarheid", "n₀ = 1,95996² × 0,5 × 0,5 ÷ 0,05² ≈ 384,15", "Naar boven afgerond: 385 volledige reacties"],
      },
      {
        title: "Een personeelsenquête onder 2.400 medewerkers met 99% betrouwbaarheid, ±3 punten en 30% verwacht",
        steps: [
          "z* = 2,57583 voor 99% betrouwbaarheid",
          "n₀ = 2,57583² × 0,3 × 0,7 ÷ 0,03² ≈ 1.548,14",
          "n = 1.548,14 ÷ (1 + 1.547,14 ÷ 2.400) ≈ 941,32",
          "Naar boven afgerond: 942 reacties",
        ],
      },
      {
        title: "Een defectpercentage van 12% schatten met 90% betrouwbaarheid en ±4 punten",
        steps: ["z* = 1,64485 voor 90% betrouwbaarheid", "n₀ = 1,64485² × 0,12 × 0,88 ÷ 0,04² ≈ 178,57", "Naar boven afgerond: 179 onderdelen om te inspecteren"],
      },
    ],
    assumptions: [
      "De formule gaat uit van een enkelvoudige aselecte steekproef: elk lid van de populatie heeft dezelfde kans om gekozen te worden.",
      "De steekproef wordt bepaald voor het schatten van één proportie (een percentage ja/nee-antwoorden), niet van een gemiddelde of een verschil tussen groepen.",
      "Gebaseerd op de normale benadering van de steekproefverdeling van een proportie, die goed werkt als het verwachte aantal ja- en nee-antwoorden elk minstens ongeveer 10 is.",
      "Het resultaat is het aantal volledige reacties. Non-respons, uitval en onbruikbare antwoorden zijn niet meegenomen, dus benader meer mensen.",
      "De kritieke waarden komen uit een numerieke inversie van de normale verdeling, nauwkeurig tot ongeveer negen significante cijfers.",
    ],
    faqs: [
      {
        question: "Waarom geeft 50% de grootste steekproef?",
        answer:
          "Het product p × (1 − p) is het grootst bij p = 0,5, waar het 0,25 is. Elke andere verwachte proportie heeft minder reacties nodig voor dezelfde foutmarge, dus 50% is de veilige keuze als je geen eerdere schatting hebt.",
      },
      {
        question: "Heeft een grotere populatie een veel grotere steekproef nodig?",
        answer:
          "Eigenlijk niet. Bij een grote populatie verandert de benodigde steekproef nauwelijks: bij 95% betrouwbaarheid en ±5 punten heb je 383 reacties nodig voor een populatie van 100.000 en 385 voor een populatie van 100 miljoen. De populatiegrootte doet er alleen toe als je een flink deel ervan ondervraagt.",
      },
      {
        question: "Hoeveel mensen moet ik uitnodigen?",
        answer:
          "Deel de steekproefgrootte door het responspercentage dat je verwacht. Heb je 385 volledige reacties nodig en verwacht je dat 20% van de mensen reageert, nodig dan ongeveer 385 ÷ 0,20 ≈ 1.925 mensen uit.",
      },
    ],
    sourcesUsedFor: [
      "Steekproefgrootte voor het schatten van een proportie, n = z²·p(1 − p)/E², en het gebruik van p = 0,5 zonder eerdere schatting.",
      "Wanneer en waarom de correctie voor een eindige populatie wordt toegepast.",
    ],
  },
  text: {
    level: "Betrouwbaarheidsniveau",
    levelHelp: "Hoe zeker je wilt zijn dat de werkelijke proportie binnen de foutmarge valt.",
    levelOptions: { "80": "80%", "90": "90%", "95": "95%", "98": "98%", "99": "99%" },
    margin: "Foutmarge",
    marginHelp: "De ±-afstand die je kunt accepteren, in procentpunten. Zo betekent 5 dat het ±5 punten is.",
    proportion: "Verwachte proportie",
    proportionHelp:
      "Je beste schatting van het deel dat ‘ja’ antwoordt. Gebruik 50% als je geen idee hebt: dat geeft de grootste, veiligste steekproef.",
    proportionMax: "Moet kleiner zijn dan 100%.",
    population: "Populatiegrootte (optioneel)",
    populationHelp: "Het totale aantal mensen of items waaruit je een steekproef zou kunnen trekken. Laat leeg voor een heel grote of onbekende populatie.",
    sampleSize: "Benodigde steekproefgrootte",
    caption: "Volledige reacties nodig bij {level} betrouwbaarheid en ±{margin}.",
    infinite: "Steekproefgrootte vóór correctie (n₀)",
    infiniteRounded: "n₀ naar boven afgerond",
    critical: "Kritieke waarde (z*)",
    correction: "Correctie voor eindige populatie",
    correctionApplied: "Toegepast (populatie van {population})",
    correctionNotApplied: "Niet toegepast (geen populatiegrootte opgegeven)",
    share: "Deel van de populatie in de steekproef",
    responseNote:
      "Dit is het aantal volledige reacties. Verwacht je dat maar een deel van de mensen reageert, deel dan door het verwachte responspercentage om te weten hoeveel mensen je moet uitnodigen.",
    wholePopulation: "De steekproef omvat (bijna) de hele populatie, dus het kan eenvoudiger zijn om iedereen te ondervragen.",
  },
};

export default nl;
