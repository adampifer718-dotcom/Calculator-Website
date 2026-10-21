import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MeanMedianModeText } from "../text/en";

const nl: CalculatorTranslation<MeanMedianModeText> = {
  content: {
    title: "Gemiddelde-, mediaan- en moduscalculator",
    shortTitle: "Gemiddelde, mediaan, modus",
    summary: "Bepaal het gemiddelde, de mediaan, de modus, het bereik en de som van een reeks getallen.",
    metaTitle: "Gemiddelde, mediaan en modus berekenen",
    metaDescription:
      "Bereken het gemiddelde, de mediaan, de modus, het bereik en de som van een dataset. Plak getallen gescheiden door puntkomma's, spaties of nieuwe regels.",
    keywords: ["gemiddelde", "mediaan", "modus", "gemiddelde berekenen", "bereik", "dataset", "statistiek", "centrummaten"],
    intro: [
      "Het gemiddelde, de mediaan en de modus zijn drie manieren om het midden van een dataset te beschrijven. Ze kunnen sterk verschillen als de gegevens scheef verdeeld zijn of uitschieters bevatten.",
      "Plak of typ je getallen om alle drie te zien, plus het bereik en de som.",
    ],
    howToUse: [
      "Vul je getallen in, gescheiden door puntkomma's, spaties of nieuwe regels.",
      "Lees het gemiddelde, de mediaan, de modus, het bereik en de som af.",
    ],
    formulas: [
      { title: "Gemiddelde", expression: "gemiddelde = som van de waarden ÷ aantal waarden", explanation: "Het rekenkundig gemiddelde." },
      {
        title: "Mediaan",
        expression: "De middelste waarde na sorteren; bij een even aantal het gemiddelde van de twee middelste waarden",
        explanation: "Weinig gevoelig voor uitschieters.",
      },
      { title: "Modus", expression: "De waarde(n) die het vaakst voorkomen", explanation: "Een dataset kan meerdere modi hebben of geen enkele." },
    ],
    examples: [
      { title: "2, 4, 4, 5, 7, 9", steps: ["Som = 31; gemiddelde = 31 ÷ 6 ≈ 5,17", "Mediaan = (4 + 5) ÷ 2 = 4,5; modus = 4"] },
      { title: "10, 20, 30", steps: ["Gemiddelde = 60 ÷ 3 = 20", "Mediaan = 20; geen modus"] },
    ],
    assumptions: ["Accepteert maximaal 10.000 getallen.", "De uitkomsten worden met 10 significante cijfers weergegeven."],
    faqs: [
      {
        question: "Wanneer gebruik ik de mediaan in plaats van het gemiddelde?",
        answer: "Als de gegevens scheef verdeeld zijn of uitschieters hebben, zoals inkomens of huizenprijzen; de mediaan wordt minder beïnvloed door extreme waarden.",
      },
      { question: "Kan er meer dan één modus zijn?", answer: "Ja. Als meerdere waarden even vaak het meest voorkomen, zijn ze allemaal modi." },
      { question: "En als geen enkel getal vaker voorkomt?", answer: "Dan is er geen modus." },
    ],
    sourcesUsedFor: ["Definities van het gemiddelde, de mediaan en de modus."],
  },
  text: {
    data: "Dataset",
    dataHelp:
      "Scheid de waarden met puntkomma's, spaties of nieuwe regels (bijvoorbeeld 1,5; 2,25; 3). Gebruik de komma als decimaalteken; een komma gevolgd door een spatie scheidt ook waarden.",
    errors: {
      empty: "Vul minstens één getal in.",
      tooMany: "Vul hoogstens {max} getallen in.",
      notNumber: "“{token}” is geen getal. Scheid waarden met puntkomma's, spaties of nieuwe regels.",
      tooLarge: "“{token}” is te groot.",
    },
    mean: "Gemiddelde",
    caption: "{count} waarden.",
    median: "Mediaan",
    mode: "Modus",
    modes: "Modi",
    noMode: "Geen modus (alle waarden komen één keer voor)",
    range: "Bereik",
    sum: "Som",
  },
};

export default nl;
