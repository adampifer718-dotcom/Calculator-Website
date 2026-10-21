import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PercentErrorText } from "../text/en";

const nl: CalculatorTranslation<PercentErrorText> = {
  content: {
    title: "Procentuele-foutcalculator",
    shortTitle: "Procentuele fout",
    summary: "Vergelijk een gemeten waarde met de werkelijke waarde via de procentuele fout, met de absolute fout en de relatieve fout met teken.",
    metaTitle: "Procentuele fout berekenen – Gemeten vs. werkelijke waarde",
    metaDescription:
      "Bereken de procentuele fout tussen een gemeten en een werkelijke waarde, met de absolute fout, de relatieve fout met teken en of je te hoog of te laag zat.",
    keywords: [
      "procentuele fout",
      "foutpercentage",
      "relatieve fout",
      "absolute fout",
      "experimentele waarde",
      "theoretische waarde",
      "practicumverslag",
      "nauwkeurigheid",
    ],
    intro: [
      "De procentuele fout geeft aan hoe ver een meting afwijkt van de waarde die eruit had moeten komen, als deel van die werkelijke waarde. Het is een gangbare manier om de nauwkeurigheid van practicumwerk uit te drukken.",
      "Vul in wat je hebt gemeten en de geaccepteerde waarde. Naast de procentuele fout laat de calculator ook de grootte van de fout zelf zien en of je resultaat te hoog of te laag uitkwam.",
    ],
    howToUse: [
      "Vul de gemeten (experimentele) waarde in.",
      "Vul de werkelijke (geaccepteerde of theoretische) waarde in, in dezelfde eenheid. Die mag niet 0 zijn.",
      "Lees de procentuele fout af. Hoe kleiner het percentage, hoe nauwkeuriger de meting.",
      "Gebruik de relatieve fout met teken of de regel over de richting om te zien of je te hoog of te laag zat.",
    ],
    formulas: [
      {
        title: "Procentuele fout",
        expression: "procentuele fout = |gemeten − werkelijk| ÷ |werkelijk| × 100%",
        explanation: "De grootte van de fout als percentage van de werkelijke waarde. Altijd nul of positief.",
      },
      { title: "Absolute fout", expression: "absolute fout = |gemeten − werkelijk|", explanation: "De fout in de oorspronkelijke meeteenheid." },
      {
        title: "Relatieve fout met teken",
        expression: "relatieve fout = (gemeten − werkelijk) ÷ |werkelijk| × 100%",
        explanation: "Positief als de meting te hoog is en negatief als ze te laag is.",
      },
    ],
    examples: [
      {
        title: "De valversnelling meten met een slinger",
        steps: [
          "Absolute fout = |9,62 − 9,81| = 0,19 m/s²",
          "Procentuele fout = 0,19 ÷ 9,81 × 100% ≈ 1,9368%",
          "De relatieve fout met teken is ongeveer −1,9368%, dus de meting is te laag.",
        ],
      },
      {
        title: "De geluidssnelheid timen",
        steps: ["Absolute fout = |342,5 − 343| = 0,5 m/s", "Procentuele fout = 0,5 ÷ 343 × 100% ≈ 0,1458%"],
      },
      {
        title: "Een negatieve referentiewaarde: de elektrodepotentiaal van zink",
        steps: [
          "Absolute fout = |−0,79 − (−0,76)| = 0,03 V",
          "Procentuele fout = 0,03 ÷ |−0,76| × 100% ≈ 3,9474%",
          "De meting ligt onder de geaccepteerde waarde, dus de relatieve fout met teken is ongeveer −3,9474%.",
        ],
      },
    ],
    assumptions: [
      "Beide waarden gebruiken dezelfde eenheid. De procentuele fout heeft geen eenheid, maar de absolute fout staat in de eenheid die je hebt ingevuld.",
      "Er wordt gedeeld door de absolute waarde van de werkelijke waarde, dus de procentuele fout blijft positief, ook als de referentiewaarde negatief is.",
      "De procentuele fout is niet zinvol voor grootheden op een intervalschaal met een willekeurig nulpunt, zoals temperaturen in °C of °F, tenzij je een reden hebt om met dat nulpunt te vergelijken. Kelvin vermijdt dit probleem.",
    ],
    faqs: [
      {
        question: "Kan de procentuele fout negatief zijn?",
        answer:
          "Volgens de gangbare definitie niet, omdat die de absolute waarde van het verschil gebruikt. Sommige opleidingen houden het teken aan om de richting te laten zien; die versie staat hier als relatieve fout met teken.",
      },
      {
        question: "Wat is een goede procentuele fout?",
        answer:
          "Dat hangt af van het experiment en de meetapparatuur. Bij veel schoolpractica geldt een paar procent als een goed resultaat, terwijl precisiemetingen veel lager mikken. Vraag na welke tolerantie je opleiding of methode verwacht.",
      },
      {
        question: "Wat is het verschil tussen procentuele fout en procentueel verschil?",
        answer:
          "De procentuele fout vergelijkt een meting met een bekende werkelijke waarde. Het procentuele verschil vergelijkt twee metingen met elkaar, meestal door te delen door hun gemiddelde, als geen van beide de referentie is.",
      },
    ],
    sourcesUsedFor: ["Definitie van de procentuele fout als de absolute fout gedeeld door de geaccepteerde waarde, maal 100%."],
  },
  text: {
    measured: "Gemeten waarde",
    measuredHelp: "De experimentele of waargenomen waarde.",
    trueValue: "Werkelijke waarde",
    trueHelp: "De geaccepteerde, theoretische of referentiewaarde. Mag niet 0 zijn.",
    trueZero: "De werkelijke waarde mag niet 0 zijn, omdat de procentuele fout erdoor deelt.",
    percentError: "Procentuele fout",
    absoluteError: "Absolute fout |gemeten − werkelijk|",
    relativeError: "Relatieve fout met teken",
    direction: "Richting",
    over: "De meting ligt boven de werkelijke waarde (overschatting).",
    under: "De meting ligt onder de werkelijke waarde (onderschatting).",
    exact: "De meting komt overeen met de werkelijke waarde.",
    note: "De procentuele fout gebruikt de grootte van de fout en is dus nooit negatief. De relatieve fout met teken behoudt de richting.",
  },
};

export default nl;
