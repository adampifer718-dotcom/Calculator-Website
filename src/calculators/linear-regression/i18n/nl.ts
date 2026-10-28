import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { LinearRegressionText } from "../text/en";

const nl: CalculatorTranslation<LinearRegressionText> = {
  content: {
    title: "Lineaire-regressiecalculator",
    shortTitle: "Lineaire regressie",
    summary: "Pas een kleinste-kwadratenlijn ŷ = a + bx aan op gepaarde gegevens, met r², de standaardfout van de helling, een t-toets en voorspellingen.",
    metaTitle: "Lineaire-regressiecalculator – kleinste kwadraten en r²",
    metaDescription:
      "Plak gepaarde X- en Y-gegevens voor de kleinste-kwadratenlijn ŷ = a + bx, r en r², de standaardfout van de helling, t- en p-waarde en een voorspelling.",
    keywords: ["lineaire regressie", "kleinste kwadraten", "regressielijn", "regressievergelijking", "helling", "intercept", "r kwadraat", "standaardfout helling"],
    intro: [
      "Enkelvoudige lineaire regressie zoekt de rechte lijn die de ene variabele, Y, het best voorspelt uit een andere, X. De gewone kleinste-kwadratenlijn is de lijn waarbij de som van de gekwadrateerde verticale afstanden tussen de punten en de lijn zo klein mogelijk is.",
      "Vul gepaarde waarnemingen in en de calculator geeft de vergelijking ŷ = a + bx, hoeveel van de variatie de lijn verklaart (r²), de standaardfout van de helling met een t-toets of de helling nul zou kunnen zijn, en eventueel een voorspelling. Heb je alleen de sterkte van het verband nodig, dan geeft de calculator voor de correlatiecoëfficiënt los de r van Pearson en de ρ van Spearman.",
    ],
    howToUse: [
      "Typ de X-waarden (de voorspeller) in het eerste vak, gescheiden door komma's, spaties of nieuwe regels.",
      "Typ de bijbehorende Y-waarden (de respons) in het tweede vak, in dezelfde volgorde. Je hebt minstens 3 paren nodig.",
      "Vul eventueel een x-waarde in om de voorspelde ŷ te krijgen.",
      "Lees de vergelijking af en bekijk daarna r² en de p-waarde voor de helling.",
    ],
    formulas: [
      { title: "Helling en intercept", expression: "b = Σ(xᵢ − x̄)(yᵢ − ȳ) ÷ Σ(xᵢ − x̄)²,  a = ȳ − b·x̄", explanation: "De kleinste-kwadratenlijn gaat altijd door het punt van de gemiddelden (x̄, ȳ)." },
      { title: "Residuele standaardfout", expression: "s = √[Σ(yᵢ − ŷᵢ)² ÷ (n − 2)]", explanation: "De gebruikelijke verticale afstand van de punten tot de lijn, in eenheden van Y. Twee vrijheidsgraden gaan op aan a en b." },
      { title: "Standaardfout en t-toets van de helling", expression: "SE(b) = s ÷ √Σ(xᵢ − x̄)²,  t = b ÷ SE(b),  df = n − 2", explanation: "De tweezijdige p-waarde uit de t-verdeling van Student toetst de nulhypothese dat de werkelijke helling 0 is." },
      { title: "Determinatiecoëfficiënt", expression: "r² = 1 − Σ(yᵢ − ŷᵢ)² ÷ Σ(yᵢ − ȳ)²", explanation: "Het deel van de variatie in Y dat de lijn verklaart. Bij enkelvoudige regressie is dit gelijk aan het kwadraat van de r van Pearson." },
    ],
    examples: [
      {
        title: "Studie-uren per week en examencijfers",
        steps: ["x̄ = 4,5, ȳ = 66,125; Σ(x − x̄)² = 42 en Σ(x − x̄)(y − ȳ) = 171,5", "b = 171,5 ÷ 42 ≈ 4,08333 en a = 66,125 − 4,08333 × 4,5 = 47,75", "r² ≈ 0,9935; SE(b) ≈ 0,1349, t ≈ 30,28 bij 6 vrijheidsgraden, p ≈ 8,6 × 10⁻⁸"],
      },
      {
        title: "Prijs van een tweedehandsauto naar leeftijd",
        steps: ["De prijs daalt naarmate de leeftijd stijgt, dus de helling is negatief: b ≈ −1.245,26 per jaar.", "a ≈ 24.998,8, de geschatte prijs van een nieuwe auto.", "Bij 5 jaar: ŷ ≈ 24.998,78 − 1.245,26 × 5 ≈ 18.772,5"],
      },
      {
        title: "IJklijn voor een sensor",
        steps: ["b = 5510 ÷ 1750 ≈ 3,14857 signaaleenheden per concentratie-eenheid", "a ≈ 2,28571, het signaal van een blanco", "r² ≈ 0,9990 en de residuele standaardfout is ongeveer 2,08"],
      },
    ],
    assumptions: [
      "Het verband is binnen het bereik van de gegevens ongeveer lineair. Een gebogen patroon vraagt om een ander model, ook als r² hoog lijkt.",
      "De p-waarde en de standaardfouten gaan uit van onafhankelijke waarnemingen met residuen die ongeveer normaal verdeeld zijn en een constante spreiding hebben.",
      "X wordt behandeld alsof het zonder fout is gemeten; alleen verticale afstanden worden geminimaliseerd. Als je X en Y verwisselt, krijg je een andere lijn.",
      "Uitschieters en punten met extreme X-waarden kunnen de lijn sterk beïnvloeden. Voorspellingen buiten het waargenomen X-bereik zijn extrapolaties.",
    ],
    faqs: [
      { question: "Wat is het verschil met de correlatiecoëfficiënt?", answer: "Correlatie geeft één getal voor de sterkte en richting van een lineair verband en behandelt X en Y gelijk. Regressie geeft een vergelijking die Y voorspelt uit X, met een helling in eenheden van Y per eenheid van X. Gebruik de calculator voor de correlatiecoëfficiënt als je alleen r nodig hebt." },
      { question: "Wat betekent de p-waarde voor de helling?", answer: "Het is de kans op een helling die minstens zo ver van 0 ligt als Y in werkelijkheid niet lineair met X zou veranderen. Een kleine p-waarde (bijvoorbeeld onder 0,05) wijst op een echte lineaire trend; ze zegt niets over hoe groot of belangrijk die trend is." },
      { question: "Waarom moeten de X-waarden verschillen?", answer: "De helling deelt door de spreiding van de X-waarden. Als alle X-waarden gelijk zijn, is die spreiding nul en zou elke verticale lijn passen, dus kan er geen helling worden berekend." },
    ],
    sourcesUsedFor: [
      "De kleinste-kwadratenlijn, de helling en het intercept ervan, en de determinatiecoëfficiënt.",
      "De standaarddeviatie (standaardfout) van de helling bij een lineaire kleinste-kwadratenaanpassing.",
    ],
  },
  text: {
    x: "X-waarden (voorspeller)",
    xHelp: "Eén waarde per waarneming, gescheiden door komma's, spaties of nieuwe regels.",
    y: "Y-waarden (respons)",
    yHelp: "Eén waarde per waarneming, in dezelfde volgorde als de X-waarden.",
    x0: "Voorspel y bij x =",
    x0Help: "Optioneel. Een x-waarde waarvoor ŷ uit de aangepaste lijn wordt geschat.",
    errors: {
      empty: "Vul minstens één getal in.",
      tooMany: "Vul hoogstens {max} getallen in.",
      notNumber: "“{token}” is geen getal. Scheid waarden met komma's, spaties of nieuwe regels.",
      tooLarge: "“{token}” is te groot.",
    },
    tooBig: "{value} is te groot. Elk getal mag hoogstens {max} groot zijn.",
    tooFew: "Vul minstens {min} paren waarden in.",
    countMismatch: "Vul één Y-waarde in voor elke X-waarde: je hebt er {x} en {y}.",
    xCount: { zero: "{n} X-waarden", one: "{n} X-waarde", two: "{n} X-waarden", few: "{n} X-waarden", many: "{n} X-waarden", other: "{n} X-waarden" },
    yCount: { zero: "{n} Y-waarden", one: "{n} Y-waarde", two: "{n} Y-waarden", few: "{n} Y-waarden", many: "{n} Y-waarden", other: "{n} Y-waarden" },
    pairCount: { zero: "{n} paren", one: "{n} paar", two: "{n} paren", few: "{n} paren", many: "{n} paren", other: "{n} paren" },
    constantX: "Alle X-waarden zijn gelijk, dus er kan geen lijn worden aangepast. Minstens twee X-waarden moeten verschillen.",
    equationLabel: "Regressielijn",
    equation: "ŷ = {a} {sign} {b}x",
    caption: "Kleinste-kwadratenaanpassing op {count}.",
    slope: "Helling (b)",
    intercept: "Intercept (a)",
    rSquared: "Determinatiecoëfficiënt (r²)",
    r: "Correlatiecoëfficiënt (r)",
    slopeSe: "Standaardfout van de helling",
    tStat: "t-waarde voor de helling",
    tInfinite: "Oneindig (perfecte aanpassing)",
    df: "Vrijheidsgraden (n − 2)",
    pValue: "Tweezijdige p-waarde (H₀: helling = 0)",
    residualSe: "Residuele standaardfout",
    prediction: "Voorspelde ŷ bij x = {x0}",
    notDefined: "Niet gedefinieerd (alle Y-waarden zijn gelijk)",
    perfectNote: "De punten liggen precies op een rechte lijn, dus de residuen en de standaardfouten zijn 0 en de p-waarde is 0.",
    constantYNote: "Alle Y-waarden zijn gelijk, dus de lijn is vlak (helling 0) en r, r² en de toets van de helling zijn niet gedefinieerd.",
    extrapolationNote: "De x-waarde ligt buiten het bereik van de gegevens. Voorspellingen buiten de waargenomen X-waarden (extrapolatie) kunnen ver ernaast zitten als het verband verandert.",
    note: "De p-waarde gaat ervan uit dat de residuen onafhankelijk zijn en ongeveer normaal verdeeld met een constante spreiding. Een goede aanpassing bewijst niet dat X de oorzaak van Y is.",
  },
};

export default nl;
