import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RecipeScalerText } from "../text/en";

const nl: CalculatorTranslation<RecipeScalerText> = {
  content: {
    title: "Receptomrekencalculator voor porties",
    shortTitle: "Recept omrekenen",
    summary: "Schaal de hoeveelheden in een recept op of af naar elk gewenst aantal porties.",
    metaTitle: "Recept omrekenen naar porties – Ingrediënten aanpassen",
    metaDescription:
      "Reken elk recept om naar een nieuw aantal porties. Plak je ingrediëntenlijst en krijg de aangepaste hoeveelheden, weergegeven als makkelijk af te meten breuken.",
    keywords: ["recept omrekenen", "porties berekenen", "ingrediënten aanpassen", "recept voor meer personen", "recept verdubbelen", "half recept"],
    intro: [
      "Een recept schalen betekent elke hoeveelheid met dezelfde factor vermenigvuldigen: het gewenste aantal porties gedeeld door het oorspronkelijke aantal porties.",
      "Plak je ingrediëntenlijst en elke hoeveelheid wordt opnieuw berekend en waar mogelijk getoond als een breuk die je in de keuken gebruikt.",
    ],
    howToUse: [
      "Vul in voor hoeveel porties het recept is.",
      "Vul in hoeveel porties je wilt.",
      "Plak de ingrediënten, één per regel, beginnend met de hoeveelheid.",
      "Lees de schaalfactor en de aangepaste lijst af.",
    ],
    formulas: [
      { title: "Schaalfactor", expression: "factor = gewenste porties ÷ oorspronkelijke porties", explanation: "Bijvoorbeeld 6 ÷ 4 = 1,5." },
      { title: "Nieuwe hoeveelheid", expression: "nieuwe hoeveelheid = oorspronkelijke hoeveelheid × factor", explanation: "Geldt voor elk ingrediënt dat met een hoeveelheid begint." },
    ],
    examples: [
      { title: "Een recept voor 4 porties omrekenen naar 6", steps: ["Factor = 6 ÷ 4 = 1,5", "2 kopjes → 3 kopjes; 3/4 kopje → 1 1/8 kopjes"] },
      { title: "Een recept voor 8 porties omrekenen naar 2", steps: ["Factor = 2 ÷ 8 = 0,25", "4 eieren → 1 ei"] },
    ],
    assumptions: [
      "De hoeveelheid moet aan het begin van de regel staan, als geheel getal, decimaal getal, breuk (1/2), gemengd getal (1 1/2) of symbool zoals ½.",
      "Eenheden worden niet omgerekend; geschaalde hoeveelheden houden hun oorspronkelijke eenheid.",
      "Bereidingstijd, vormmaat, rijsmiddel en kruiden schalen niet altijd lineair mee; pas ze naar smaak aan en controleer of het gerecht gaar is.",
    ],
    faqs: [
      { question: "Hoe maak ik een half recept?", answer: "Gebruik een factor van 0,5 door als gewenste porties de helft van het oorspronkelijke aantal in te vullen." },
      { question: "En de eieren dan?", answer: "Rond af op het dichtstbijzijnde hele ei, of klop een ei los en gebruik er afgewogen een deel van." },
      {
        question: "Veranderen de baktijden?",
        answer: "Vaak wel. Een grotere of kleinere vorm verandert de baktijd, dus controleer eerder en pas aan.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    original: "Recept is voor",
    desired: "Ik wil serveren voor",
    ingredients: "Ingrediënten (één per regel)",
    ingredientsHelp: "Begin elke regel met de hoeveelheid, bijv. „1 1/2 kopje bloem”. Regels zonder hoeveelheid blijven zoals ze zijn.",
    defaultIngredients: "2 kopjes bloem\n1 1/2 tl bakpoeder\n3/4 kopje suiker\n2 eieren\n1 kopje melk\nZout naar smaak",
    factor: "Schaalfactor",
    caption: "Vermenigvuldig elke hoeveelheid met {factor}.",
    tableCaption: "Geschaalde ingrediënten",
    original_: "Origineel",
    scaled: "Geschaald",
    note: "Ingrediënten die per stuk gaan, zoals eieren, moeten mogelijk worden afgerond. Baktijden en vormmaten schalen niet evenredig mee.",
  },
};

export default nl;
