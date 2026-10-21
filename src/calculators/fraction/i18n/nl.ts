import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FractionText } from "../text/en";

const nl: CalculatorTranslation<FractionText> = {
  content: {
    title: "Breukencalculator",
    shortTitle: "Breuken",
    summary: "Tel breuken en gemengde getallen op, trek ze af, vermenigvuldig of deel ze, met het antwoord vereenvoudigd en als decimaal getal.",
    metaTitle: "Breukencalculator – optellen, aftrekken, vermenigvuldigen",
    metaDescription:
      "Tel breuken, gemengde getallen en decimale getallen op, trek ze af, vermenigvuldig of deel ze. Krijg het exacte antwoord vereenvoudigd, als gemengd getal en als decimaal.",
    keywords: ["breuken", "breuken berekenen", "gemengde getallen", "breuken vereenvoudigen", "breuken optellen", "breuken delen", "onvereenvoudigbare breuk"],
    intro: [
      "Vul twee getallen in als breuk (3/4), gemengd getal (1 1/2), geheel getal of decimaal getal, kies een bewerking en krijg het exacte antwoord.",
      "De calculator rekent met exacte gehele tellers en noemers, zodat de uitkomst geen afrondingsfouten bevat. Het resultaat wordt volledig vereenvoudigd en ook als gemengd getal en als decimaal getal getoond.",
    ],
    howToUse: [
      "Vul het eerste getal in, bijvoorbeeld 1/2 of 2 1/4.",
      "Kies optellen, aftrekken, vermenigvuldigen of delen.",
      "Vul het tweede getal in.",
      "Lees de vereenvoudigde breuk, het gemengde getal en het decimale getal af.",
    ],
    formulas: [
      {
        title: "Optellen en aftrekken",
        expression: "a/b ± c/d = (a × d ± c × b) ÷ (b × d)",
        explanation: "Breng beide breuken op een gemeenschappelijke noemer en tel de tellers op of trek ze af.",
      },
      { title: "Vermenigvuldigen", expression: "a/b × c/d = (a × c) ÷ (b × d)", explanation: "Vermenigvuldig de tellers met elkaar en de noemers met elkaar." },
      {
        title: "Delen",
        expression: "a/b ÷ c/d = (a × d) ÷ (b × c)",
        explanation: "Vermenigvuldig met het omgekeerde van de tweede breuk. Delen door nul is niet gedefinieerd.",
      },
      {
        title: "Vereenvoudigen",
        expression: "n/d = (n ÷ g) ÷ (d ÷ g), g = ggd(n, d)",
        explanation: "Deel teller en noemer door hun grootste gemene deler.",
      },
    ],
    examples: [
      { title: "1/2 + 1/3", steps: ["1/2 + 1/3 = (1 × 3 + 1 × 2) ÷ (2 × 3)", "= 5/6 ≈ 0,8333"] },
      { title: "2 1/4 × 4/3", steps: ["2 1/4 = 9/4", "9/4 × 4/3 = 36/12 = 3"] },
    ],
    assumptions: [
      "Gehele getallen, breuken, gemengde getallen en eindige decimale getallen worden omgezet in exacte breuken; 0,75 wordt 3/4.",
      "Tellers en noemers zijn beperkt tot 1.000.000.000.000 om de uitkomsten leesbaar te houden.",
      "Een negatief gemengd getal zoals −1 1/2 betekent −(1 + 1/2).",
    ],
    faqs: [
      {
        question: "Hoe vul ik een gemengd getal in?",
        answer: "Typ het gehele getal, een spatie en de breuk, bijvoorbeeld 2 1/4. Zet bij een negatieve waarde het minteken vooraan: -2 1/4.",
      },
      {
        question: "Hoe vereenvoudig ik een breuk?",
        answer: "Vul de breuk in als eerste getal, kies vermenigvuldigen en vul 1 in als tweede getal. De uitkomst wordt volledig vereenvoudigd getoond.",
      },
      {
        question: "Waarom verschilt het decimale getal van de breuk?",
        answer: "Sommige breuken, zoals 1/3, hebben een decimale ontwikkeling die nooit ophoudt. De breuk is exact; het decimale getal wordt voor de weergave afgerond.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    a: "Eerste getal",
    aHelp: "Een breuk (3/4), gemengd getal (1 1/2), geheel getal of decimaal getal.",
    b: "Tweede getal",
    bHelp: "Dezelfde notaties als bij het eerste getal.",
    operation: "Bewerking",
    operations: { add: "Optellen (+)", subtract: "Aftrekken (−)", multiply: "Vermenigvuldigen (×)", divide: "Delen (÷)" },
    errors: {
      invalid: "Vul een breuk in zoals 3/4, een gemengd getal zoals 1 1/2, een geheel getal of een decimaal getal.",
      zeroDenominator: "Een noemer kan niet 0 zijn.",
      tooLarge: "Gebruik tellers en noemers van hoogstens {max}.",
      divideByZero: "Je kunt niet door nul delen.",
    },
    result: "Vereenvoudigde uitkomst",
    caption: "{a} {op} {b} = {result}",
    mixed: "Als gemengd getal",
    decimal: "Als decimaal getal",
    note: "Breuken worden vereenvoudigd door te delen door de grootste gemene deler. Het decimale getal wordt alleen voor de weergave afgerond.",
  },
};

export default nl;
