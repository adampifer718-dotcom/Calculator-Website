import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HalfLifeText } from "../text/en";

const nl: CalculatorTranslation<HalfLifeText> = {
  content: {
    title: "Halveringstijdcalculator",
    shortTitle: "Halveringstijd",
    summary: "Los exponentieel verval op voor de resterende hoeveelheid, de beginhoeveelheid, de halveringstijd of de verstreken tijd.",
    metaTitle: "Halveringstijdcalculator – resterende hoeveelheid en tijd",
    metaDescription:
      "Los N = N₀(1/2)^(t/T) op voor de resterende hoeveelheid, de beginhoeveelheid, de halveringstijd of de verstreken tijd, met vervalconstante en levensduur.",
    keywords: ["halveringstijd", "radioactief verval", "exponentieel verval", "vervalconstante", "gemiddelde levensduur", "koolstofdatering", "eerste-ordekinetiek"],
    intro: [
      "De halveringstijd is de tijd waarin de helft van een vervallende hoeveelheid verdwijnt. Na één halveringstijd is er nog 50% over, na twee 25%, na drie 12,5%, enzovoort.",
      "Dezelfde regel beschrijft radioactieve isotopen en elk ander proces met eerste-ordeverval. Vul drie van de vier waarden in om de ontbrekende te vinden. De calculator toont ook de vervalconstante, de gemiddelde levensduur en het resterende aandeel.",
    ],
    howToUse: [
      "Kies wat je wilt berekenen: de resterende hoeveelheid, de beginhoeveelheid, de halveringstijd of de verstreken tijd.",
      "Vul de andere waarden in. Hoeveelheden en tijden mogen in elke eenheid, zolang elk paar dezelfde eenheid gebruikt.",
      "Lees de uitkomst af in diezelfde eenheden, samen met het aantal halveringstijden en de vervalconstante.",
    ],
    formulas: [
      { title: "Vervalwet", expression: "N = N₀ × (1/2)^(t ÷ T½)", explanation: "N₀ is de beginhoeveelheid, t de verstreken tijd en T½ de halveringstijd." },
      {
        title: "Halveringstijd en verstreken tijd",
        expression: "T½ = t × ln 2 ÷ ln(N₀ ÷ N);  t = T½ × log₂(N₀ ÷ N)",
        explanation: "De vervalwet omgeschreven met logaritmen.",
      },
      {
        title: "Vervalconstante en gemiddelde levensduur",
        expression: "λ = ln 2 ÷ T½;  τ = 1 ÷ λ = T½ ÷ ln 2",
        explanation: "λ is het deel dat per tijdseenheid vervalt; τ is de gemiddelde levensduur, ongeveer 1,4427 halveringstijden.",
      },
    ],
    examples: [
      {
        title: "40 g kobalt-60 na 15,81 jaar (T½ = 5,27 jaar)",
        steps: ["t ÷ T½ = 15,81 ÷ 5,27 = 3 halveringstijden", "N = 40 × (1/2)³ = 5 g"],
      },
      {
        title: "Halveringstijd als 1200 tellingen in 36 uur dalen tot 150",
        steps: ["N₀ ÷ N = 1200 ÷ 150 = 8", "T½ = 36 × ln 2 ÷ ln 8 = 36 ÷ 3 = 12 uur"],
      },
      {
        title: "Ouderdom van een monster met nog 30% van zijn koolstof-14 (T½ = 5730 jaar)",
        steps: ["N₀ ÷ N = 100 ÷ 30 ≈ 3,333", "t = 5730 × log₂(3,333) ≈ 9952,8 jaar"],
      },
    ],
    assumptions: [
      "Het verval is van de eerste orde: de halveringstijd blijft gelijk, hoeveel materiaal er ook over is.",
      "Grote monsters volgen de curve nauwkeurig; bij een handvol atomen is verval willekeurig en is de uitkomst alleen een gemiddelde.",
      "Dit is een algemeen wiskundig hulpmiddel. Het geeft geen advies over medicatie, dosering of stralingsveiligheid; vraag daarvoor een deskundige.",
    ],
    faqs: [
      {
        question: "Maakt de tijdseenheid uit?",
        answer: "Alleen in de zin dat de halveringstijd en de verstreken tijd dezelfde eenheid moeten hebben. Vul beide in dagen of beide in jaren in, en de uitkomst komt in die eenheid.",
      },
      { question: "Hoeveel is er over na 10 halveringstijden?", answer: "(1/2)¹⁰ = 1/1024, oftewel net iets minder dan 0,1% van de beginhoeveelheid." },
      {
        question: "Wat is het verschil tussen halveringstijd en gemiddelde levensduur?",
        answer:
          "De halveringstijd is het moment waarop de helft van het materiaal verdwenen is. De gemiddelde levensduur is de gemiddelde tijd voordat één atoom vervalt, en die is langer: ongeveer 1,4427 keer de halveringstijd.",
      },
    ],
    sourcesUsedFor: ["Eerste-ordeverval, de definitie van halveringstijd en λ = ln 2 ÷ T½."],
  },
  text: {
    solve: "Bereken",
    solveOptions: { N: "Resterende hoeveelheid (N)", N0: "Beginhoeveelheid (N₀)", T: "Halveringstijd (T½)", t: "Verstreken tijd (t)" },
    initial: "Beginhoeveelheid (N₀)",
    remaining: "Resterende hoeveelheid (N)",
    amountHelp: "Elke eenheid (gram, atomen, becquerel…), zolang N en N₀ dezelfde gebruiken.",
    halfLife: "Halveringstijd (T½)",
    elapsed: "Verstreken tijd (t)",
    timeHelp: "Elke tijdseenheid, zolang t en T½ dezelfde gebruiken.",
    remainingTooLarge: "De resterende hoeveelheid kan niet groter zijn dan de beginhoeveelheid (N ≤ N₀).",
    remainingMustDrop: "Om de halveringstijd te berekenen moet de resterende hoeveelheid kleiner zijn dan de beginhoeveelheid.",
    timeMustBePositive: "Om de halveringstijd te berekenen moet de verstreken tijd groter zijn dan 0.",
    tooManyHalfLives: "Dat zijn te veel halveringstijden: de beginhoeveelheid zou te groot worden om weer te geven.",
    results: { N: "Resterende hoeveelheid", N0: "Beginhoeveelheid", T: "Halveringstijd", t: "Verstreken tijd" },
    amountCaption: "In dezelfde eenheid als de andere hoeveelheid.",
    timeCaption: "In dezelfde tijdseenheid als de andere tijdswaarde.",
    percentRemaining: "Percentage resterend (N ÷ N₀)",
    halfLives: "Aantal halveringstijden (t ÷ T½)",
    decayConstant: "Vervalconstante λ = ln 2 ÷ T½ (per tijdseenheid)",
    meanLifetime: "Gemiddelde levensduur τ = 1 ÷ λ (tijdseenheid)",
    note: "Gaat uit van eenvoudig exponentieel verval (eerste orde) met een constante halveringstijd.",
  },
};

export default nl;
