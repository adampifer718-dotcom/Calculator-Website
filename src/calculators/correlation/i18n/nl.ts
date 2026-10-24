import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CorrelationText } from "../text/en";

const nl: CalculatorTranslation<CorrelationText> = {
  content: {
    title: "Calculator voor de correlatiecoëfficiënt",
    shortTitle: "Correlatie",
    summary: "Meet hoe sterk twee lijsten getallen samen bewegen met Pearsons r, Spearmans ρ, r² en een significantietoets.",
    metaTitle: "Correlatiecoëfficiënt berekenen – Pearson r en Spearman ρ",
    metaDescription:
      "Plak gepaarde X- en Y-gegevens en krijg Pearsons r, r², de t-waarde en p-waarde, de rangcorrelatie van Spearman en de steekproefcovariantie.",
    keywords: ["correlatiecoëfficiënt", "correlatie berekenen", "pearson r", "spearman rho", "rangcorrelatie", "r kwadraat", "covariantie", "lineair verband"],
    intro: [
      "Een correlatiecoëfficiënt vat in één getal tussen −1 en +1 samen hoe nauw twee gemeten grootheden een rechtlijnig patroon volgen. Waarden dicht bij +1 betekenen dat grotere X-waarden samengaan met grotere Y-waarden; waarden dicht bij −1 betekenen het omgekeerde; waarden dicht bij 0 betekenen dat er weinig lineair patroon is.",
      "Vul gepaarde waarnemingen in, zoals uren oefenen en toetsscores. De calculator geeft Pearsons r met r², een t-toets of de correlatie nul zou kunnen zijn, de rangcorrelatie van Spearman voor monotone maar gebogen patronen en de steekproefcovariantie.",
    ],
    howToUse: [
      "Typ de X-waarden in het eerste vak, gescheiden door puntkomma's, spaties of nieuwe regels.",
      "Typ de bijbehorende Y-waarden in het tweede vak, in dezelfde volgorde. Beide lijsten moeten evenveel waarden hebben, minstens 3.",
      "Lees Pearsons r en r² af en kijk dan naar de p-waarde om te zien of het patroon makkelijk toeval zou kunnen zijn.",
      "Vergelijk r met Spearmans ρ. Een ρ die veel dichter bij ±1 ligt dan r wijst op een gebogen maar steeds stijgend of dalend verband.",
    ],
    formulas: [
      { title: "Pearsons r", expression: "r = Σ(xᵢ − x̄)(yᵢ − ȳ) ÷ √[Σ(xᵢ − x̄)² · Σ(yᵢ − ȳ)²]", explanation: "De som van de kruisproducten van de afwijkingen, geschaald met de spreiding van elke lijst. Ligt tussen −1 en +1." },
      { title: "Significantietoets", expression: "t = r·√[(n − 2) ÷ (1 − r²)], df = n − 2", explanation: "De tweezijdige p-waarde komt uit de t-verdeling van Student. Ze toetst de nulhypothese dat de correlatie in de populatie 0 is." },
      { title: "Spearmans ρ", expression: "ρ = Pearsons r van de rangnummers", explanation: "Elke lijst wordt vervangen door haar rangnummers; gelijke waarden krijgen het gemiddelde van de rangen die ze beslaan." },
      { title: "Steekproefcovariantie", expression: "cov = Σ(xᵢ − x̄)(yᵢ − ȳ) ÷ (n − 1)", explanation: "De ongeschaalde gezamenlijke variatie, in eenheden van X maal eenheden van Y." },
    ],
    examples: [
      {
        title: "Uren oefenen en quizscores",
        steps: ["x̄ = 6, ȳ = 65,1667; Σ kruisproducten = 151, Σ(x − x̄)² = 42, Σ(y − ȳ)² = 550,8333", "r = 151 ÷ √(42 × 550,8333) ≈ 0,9928", "t = 0,9928 × √(4 ÷ 0,01444) ≈ 16,52 met 4 df, p ≈ 0,0000785"],
      },
      {
        title: "Buitentemperatuur en wekelijkse stookkosten",
        steps: ["De kosten dalen als de temperatuur stijgt, dus de kruisproducten zijn grotendeels negatief.", "r ≈ −0,9924 en r² ≈ 0,9849", "Beide lijsten hebben precies de omgekeerde volgorde, dus Spearmans ρ = −1."],
      },
      {
        title: "Een gebogen maar steeds stijgend patroon (y = x²)",
        steps: ["Pearsons r ≈ 0,9789, omdat de punten van een rechte lijn afbuigen.", "De rangnummers van x en y zijn gelijk, dus Spearmans ρ = 1."],
      },
    ],
    assumptions: [
      "Pearsons r meet alleen lineaire samenhang. Een sterk gebogen verband kan een bescheiden r geven; Spearmans ρ vangt elk consequent stijgend of dalend patroon.",
      "De p-waarde gaat ervan uit dat de paren onafhankelijk zijn en, voor Pearsons r, dat de gegevens ongeveer bivariaat normaal verdeeld zijn. Uitschieters kunnen r sterk veranderen.",
      "De labels voor de sterkte zijn een gangbare vuistregel (|r| onder 0,1 verwaarloosbaar, vanaf 0,1 zwak, 0,4 matig, 0,7 sterk, 0,9 zeer sterk). Vakgebieden verschillen in wat ze sterk noemen.",
      "Correlatie betekent geen oorzakelijk verband: een derde factor, toeval of omgekeerde causaliteit kan een samenhang verklaren.",
    ],
    faqs: [
      { question: "Wat is het verschil tussen r en r²?", answer: "r geeft de richting en sterkte van een lineair patroon. r² is het deel van de variatie in Y dat een rechte-lijnfit op X verklaart, dus r = 0,8 betekent r² = 0,64, ofwel 64%." },
      { question: "Wanneer gebruik ik Spearman in plaats van Pearson?", answer: "Gebruik Spearmans ρ als de gegevens rangnummers zijn, als het verband monotoon maar niet recht is, of als uitschieters Pearsons r kunnen vertekenen." },
      { question: "Waarom moeten de lijsten minstens drie waarden en enige variatie hebben?", answer: "Door twee punten past elke lijn perfect, en de toets heeft n − 2 ≥ 1 vrijheidsgraden nodig. Als alle X- of alle Y-waarden gelijk zijn, deelt de formule door nul en is r niet gedefinieerd." },
    ],
    sourcesUsedFor: [
      "Toetsen of r van nul verschilt, met n − 2 vrijheidsgraden.",
      "Definitie van de correlatiecoëfficiënt als maat voor lineaire samenhang tussen −1 en +1.",
    ],
  },
  text: {
    x: "X-waarden",
    xHelp: "Eén waarde per waarneming, gescheiden door puntkomma's, spaties of nieuwe regels. Gebruik de komma als decimaalteken; een komma gevolgd door een spatie scheidt ook waarden.",
    y: "Y-waarden",
    yHelp: "Eén waarde per waarneming, in dezelfde volgorde als de X-waarden.",
    errors: {
      empty: "Vul minstens één getal in.",
      tooMany: "Vul hoogstens {max} getallen in.",
      notNumber: "“{token}” is geen getal. Scheid waarden met puntkomma's, spaties of nieuwe regels.",
      tooLarge: "“{token}” is te groot.",
    },
    tooBig: "{value} is te groot. Elk getal mag hoogstens {max} groot zijn.",
    tooFew: "Vul minstens {min} paren waarden in.",
    countMismatch: "Vul bij elke X-waarde één Y-waarde in: je hebt er {x} en {y}.",
    xCount: { zero: "{n} X-waarden", one: "{n} X-waarde", two: "{n} X-waarden", few: "{n} X-waarden", many: "{n} X-waarden", other: "{n} X-waarden" },
    yCount: { zero: "{n} Y-waarden", one: "{n} Y-waarde", two: "{n} Y-waarden", few: "{n} Y-waarden", many: "{n} Y-waarden", other: "{n} Y-waarden" },
    pairCount: { zero: "{n} paren", one: "{n} paar", two: "{n} paren", few: "{n} paren", many: "{n} paren", other: "{n} paren" },
    constantX: "Alle X-waarden zijn gelijk, dus de correlatie is niet gedefinieerd. Minstens twee X-waarden moeten verschillen.",
    constantY: "Alle Y-waarden zijn gelijk, dus de correlatie is niet gedefinieerd. Minstens twee Y-waarden moeten verschillen.",
    pearson: "Correlatiecoëfficiënt van Pearson (r)",
    caption: "Gebaseerd op {count}.",
    rSquared: "Determinatiecoëfficiënt (r²)",
    tStat: "t-waarde",
    tInfinite: "Oneindig (perfecte correlatie)",
    df: "Vrijheidsgraden (n − 2)",
    pValue: "Tweezijdige p-waarde (H₀: geen correlatie)",
    spearman: "Rangcorrelatie van Spearman (ρ)",
    covariance: "Steekproefcovariantie",
    strength: "Sterkte en richting (vuistregel)",
    describe: "{strength}, {direction}",
    strengths: { negligible: "Verwaarloosbaar", weak: "Zwak", moderate: "Matig", strong: "Sterk", veryStrong: "Zeer sterk", perfect: "Perfect" },
    directions: { positive: "positief", negative: "negatief", none: "geen richting" },
    perfectNote: "De punten liggen precies op een rechte lijn, dus |r| = 1 en de p-waarde is 0.",
    smallNote: "Met maar een paar paren kan zelfs een grote r door toeval ontstaan. Kijk naar de p-waarde.",
    note: "Correlatie meet hoe nauw twee variabelen samen bewegen. Ze laat niet zien dat de ene de andere veroorzaakt.",
  },
};

export default nl;
