import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { QuadraticText } from "../text/en";

const nl: CalculatorTranslation<QuadraticText> = {
  content: {
    title: "Calculator voor kwadratische vergelijkingen",
    shortTitle: "Kwadratische vergelijking",
    summary: "Los ax² + bx + c = 0 op met reële of complexe wortels, samen met de discriminant, de top en de symmetrieas.",
    metaTitle: "Kwadratische vergelijking oplossen – Wortels en top",
    metaDescription:
      "Los elke kwadratische vergelijking ax² + bx + c = 0 op: reële of complexe wortels, de discriminant en wat die betekent, de top en de symmetrieas.",
    keywords: [
      "kwadratische vergelijking",
      "tweedegraadsvergelijking",
      "abc-formule",
      "vergelijking oplossen",
      "discriminant",
      "top van de parabool",
      "complexe wortels",
      "algebra",
    ],
    intro: [
      "Een kwadratische vergelijking heeft de vorm ax² + bx + c = 0, waarbij a niet nul is. De grafiek is een parabool, en de wortels zijn de punten waar die parabool de x-as snijdt.",
      "Vul de drie coëfficiënten in om beide wortels tegelijk te krijgen. Raakt de parabool de x-as nooit, dan geeft de calculator het paar complexe wortels. Hij toont ook de discriminant, de top en de symmetrieas.",
    ],
    howToUse: [
      "Herschrijf de vergelijking zodat één kant 0 is; zo wordt 3x² = 7x + 6 bijvoorbeeld 3x² − 7x − 6 = 0.",
      "Vul a, b en c in. Neem mintekens mee en gebruik 0 voor een ontbrekende term.",
      "Lees de wortels af. Reële wortels staan van groot naar klein; complexe wortels als reëel deel ± imaginair deel.",
      "Gebruik de discriminant, de top en de symmetrieas om de parabool te schetsen of je werk te controleren.",
    ],
    formulas: [
      { title: "Abc-formule", expression: "x = (−b ± √(b² − 4ac)) ÷ 2a", explanation: "Geeft beide wortels. De ± levert één wortel met + en één met −." },
      {
        title: "Discriminant",
        expression: "D = b² − 4ac",
        explanation: "Bij D > 0 zijn er twee reële wortels, bij D = 0 één dubbele wortel en bij D < 0 twee complex geconjugeerde wortels.",
      },
      {
        title: "Stabiele vorm die in de berekening wordt gebruikt",
        expression: "q = −½(b + sign(b)·√D),  x₁ = q ÷ a,  x₂ = c ÷ q",
        explanation:
          "Algebraïsch gelijk aan de abc-formule, maar zonder het aftrekken van twee bijna gelijke getallen, wat precisie kost als b² veel groter is dan 4ac.",
      },
      { title: "Complexe wortels", expression: "x = −b ÷ 2a ± (√(−D) ÷ 2|a|)·i", explanation: "Gebruikt als D < 0; i is de imaginaire eenheid, met i² = −1." },
      {
        title: "Top en as",
        expression: "h = −b ÷ 2a,  k = −D ÷ 4a,  as: x = h",
        explanation: "De top (h, k) is het keerpunt van de parabool. k is de waarde van ax² + bx + c bij x = h.",
      },
      {
        title: "Som en product van de wortels",
        expression: "x₁ + x₂ = −b ÷ a,  x₁·x₂ = c ÷ a",
        explanation: "Dit zijn de formules van Vieta. Ze gelden ook voor complexe wortels.",
      },
    ],
    examples: [
      {
        title: "Twee reële wortels: 3x² − 7x − 6 = 0",
        steps: ["D = (−7)² − 4·3·(−6) = 49 + 72 = 121", "√D = 11, dus x = (7 ± 11) ÷ 6", "x₁ = 18 ÷ 6 = 3 en x₂ = −4 ÷ 6 ≈ −0,6667"],
      },
      {
        title: "Eén dubbele wortel: 4x² + 12x + 9 = 0",
        steps: ["D = 12² − 4·4·9 = 144 − 144 = 0", "x = −12 ÷ (2·4) = −1,5", "De parabool raakt de x-as alleen in de top (−1,5; 0)."],
      },
      {
        title: "Complexe wortels: x² − 2x + 10 = 0",
        steps: ["D = (−2)² − 4·1·10 = 4 − 40 = −36", "Reëel deel: −(−2) ÷ 2 = 1", "Imaginair deel: √36 ÷ 2 = 3, dus x = 1 ± 3i"],
      },
    ],
    assumptions: [
      "De coëfficiënten zijn reële getallen. Vergelijkingen met complexe coëfficiënten worden niet ondersteund.",
      "Resultaten worden getoond met 10 significante cijfers. Een discriminant die alleen door een minieme afrondingsfout van nul afwijkt, wordt als precies nul behandeld, zodat de dubbele wortel wordt gemeld.",
      "Heel grote of heel kleine coëfficiënten worden berekend met drijvendekommagetallen in dubbele precisie, dus de laatste cijfers van extreme resultaten kunnen afwijken van exacte rekenkunde.",
    ],
    faqs: [
      {
        question: "Wat als a gelijk is aan 0?",
        answer:
          "Dan is er geen x²-term en is de vergelijking lineair: bx + c = 0, met als enige oplossing x = −c ÷ b. De calculator vraagt om een a die niet nul is, omdat de abc-formule anders door nul zou delen.",
      },
      {
        question: "Wat betekent een negatieve discriminant?",
        answer: "De parabool snijdt de x-as nooit, dus er zijn geen reële oplossingen. De twee oplossingen zijn complexe getallen die alleen verschillen in het teken van hun imaginaire deel.",
      },
      {
        question: "Waarom gebruikt de calculator niet gewoon de formule uit het schoolboek?",
        answer:
          "Als b² veel groter is dan 4ac, trekt −b + √D twee bijna gelijke getallen van elkaar af en gaan er cijfers verloren. De stabiele vorm berekent eerst de grootste wortel en haalt de kleinste uit het product van de wortels, c ÷ a, waardoor de volledige precisie behouden blijft.",
      },
    ],
    sourcesUsedFor: ["De abc-formule en hoe de discriminant het aantal en het soort oplossingen voorspelt."],
  },
  text: {
    a: "Coëfficiënt a",
    aHelp: "Het getal voor x². Mag niet 0 zijn.",
    b: "Coëfficiënt b",
    bHelp: "Het getal voor x. Gebruik 0 als er geen x-term is.",
    c: "Constante c",
    cHelp: "Het getal zonder x. Gebruik 0 als dat er niet is.",
    aZero: "Coëfficiënt a mag niet 0 zijn. Met a = 0 is de vergelijking lineair, niet kwadratisch.",
    roots: "Wortels",
    twoRoots: "x₁ = {x1}, x₂ = {x2}",
    oneRoot: "x = {x} (dubbele wortel)",
    complexRoots: "x = {re} ± {im}i",
    imaginaryRoots: "x = ±{im}i",
    discriminant: "Discriminant (b² − 4ac)",
    meaning: "Wat de discriminant betekent",
    meanings: {
      positive: "Positief: twee verschillende reële wortels",
      zero: "Nul: één dubbele reële wortel",
      negative: "Negatief: geen reële wortels, twee complex geconjugeerde wortels",
    },
    vertex: "Top (h, k)",
    vertexValue: "({h}, {k})",
    axis: "Symmetrieas",
    axisValue: "x = {h}",
    sum: "Som van de wortels (−b/a)",
    product: "Product van de wortels (c/a)",
    opensUp: "De parabool is een dalparabool, dus de top is het laagste punt.",
    opensDown: "De parabool is een bergparabool, dus de top is het hoogste punt.",
  },
};

export default nl;
