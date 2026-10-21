import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FlooringText } from "../text/en";

const nl: CalculatorTranslation<FlooringText> = {
  content: {
    title: "Vloercalculator",
    shortTitle: "Vloer",
    summary:
      "Bereken hoeveel pakken laminaat, PVC-vloer of houten vloer je nodig hebt op basis van de afmetingen van de kamer, een snijverlies en de dekking per pak, eventueel met de kosten.",
    metaTitle: "Vloercalculator – pakken laminaat of PVC",
    metaDescription:
      "Schat hoeveel pakken vloer je moet kopen voor een rechthoekige of L-vormige kamer, met snijverlies, de dekking per pak en eventueel een prijs per oppervlakte.",
    keywords: ["vloercalculator", "hoeveel vloer nodig", "laminaat berekenen", "pvc-vloer berekenen", "pakken laminaat", "snijverlies vloer", "houten vloer schatting"],
    intro: [
      "Vloeren worden per pak verkocht en elk pak dekt een vaste oppervlakte. Om te weten hoeveel je moet kopen, heb je de vloeroppervlakte nodig, een marge voor stukken die bij het zagen verloren gaan, en de dekking die op het pak staat.",
      "Deze calculator telt dat op voor een rechthoekige kamer of een L-vormige kamer die uit twee rechthoeken bestaat, rondt af naar hele pakken en schat de kosten als je een prijs invult. Heb je alleen de oppervlakte van een kamer nodig, dan geeft de oppervlaktecalculator die zonder pakken of snijverlies.",
    ],
    howToUse: [
      "Kies Amerikaanse eenheden (voet) of metrische eenheden (meter).",
      "Vul de lengte en breedte van de kamer in. Bij een L-vormige kamer vul je eerst de grote rechthoek in en daarna de kleinere als tweede deel.",
      "Stel het snijverlies in: ongeveer 10% voor recht leggen, ongeveer 15% voor diagonaal of visgraat.",
      "Vul de dekking per pak van de verpakking in en eventueel de prijs per vierkante voet of vierkante meter.",
    ],
    formulas: [
      {
        title: "Vloeroppervlakte",
        expression: "A = L₁ × B₁ + L₂ × B₂",
        explanation: "De tweede rechthoek is optioneel; laat die op 0 staan voor een gewone rechthoekige kamer.",
      },
      {
        title: "Oppervlakte met snijverlies",
        expression: "A_v = A × (1 + verlies ÷ 100)",
        explanation: "Het extra deel dekt restjes langs de muren, zaagfouten en beschadigde planken.",
      },
      { title: "Pakken", expression: "pakken = ⌈A_v ÷ dekking per pak⌉", explanation: "Naar boven afgerond, omdat vloeren per heel pak worden verkocht." },
      {
        title: "Kosten",
        expression: "kosten = pakken × dekking per pak × prijs per oppervlakte",
        explanation: "Je betaalt voor hele pakken, dus de kosten gaan uit van de oppervlakte in de pakken die je koopt.",
      },
    ],
    examples: [
      {
        title: "Slaapkamer van 14 ft × 12 ft met pakken van 20 ft²",
        steps: ["Oppervlakte = 14 × 12 = 168 ft²", "Met 10% snijverlies: 168 × 1,10 = 184,8 ft²", "184,8 ÷ 20 = 9,24, dus koop 10 pakken (200 ft²)"],
      },
      {
        title: "L-vormige woonkamer in visgraat, metrisch",
        steps: ["Oppervlakte = 5 × 4 + 2 × 1,5 = 23 m²", "Met 15% snijverlies: 23 × 1,15 = 26,45 m²", "26,45 ÷ 2,2 ≈ 12,02, dus koop 13 pakken"],
      },
      {
        title: "Thuiskantoor met een prijs per vierkante voet",
        steps: [
          "Oppervlakte = 12 × 10 = 120 ft²; met 10% snijverlies 132 ft²",
          "132 ÷ 23,4 ≈ 5,64, dus koop 6 pakken die samen 140,4 ft² dekken",
          "Kosten = 140,4 ft² × $ 3,49 ≈ $ 490,00",
        ],
      },
    ],
    assumptions: [
      "De kamer is één rechthoek of twee rechthoeken die niet overlappen. Meet andere vormen op als meerdere rechthoeken en tel ze op.",
      "De marges voor snijverlies zijn vuistregels. Plankenlengte, de vorm van de kamer en de werkwijze van de legger bepalen hoeveel er verloren gaat, dus raadpleeg de richtlijnen van de fabrikant voor je product.",
      "Inbouwkasten, deuropeningen en ruimte onder vaste kasten tellen alleen mee als je ze bij de maten optelt.",
      "Ondervloer, plinten, overgangsprofielen, lijm en arbeidsloon zitten niet in de kosten.",
    ],
    faqs: [
      {
        question: "Hoeveel extra vloer moet ik kopen?",
        answer:
          "Ongeveer 10% is een gangbare marge voor recht leggen in een eenvoudige kamer. Diagonaal, visgraat en Hongaarse punt, of kamers met veel hoeken, vragen meestal ongeveer 15% of meer.",
      },
      {
        question: "Waarom zou ik reservepakken bewaren?",
        answer: "Met overgebleven planken kun je later beschadigde stukken vervangen door vloer uit dezelfde productiepartij, waarvan kleur en afwerking overeenkomen.",
      },
      {
        question: "Hoe meet ik een L-vormige kamer op?",
        answer: "Verdeel de vloer in twee rechthoeken die niet overlappen, meet van elk de lengte en breedte en vul ze in als de kamer en het tweede deel.",
      },
    ],
    sourcesUsedFor: ["De exacte internationale voet (0,3048 m) die wordt gebruikt om vierkante voet en vierkante meter om te rekenen."],
  },
  text: {
    units: "Eenheden",
    unitSystems: { imperial: "Amerikaans (ft, ft²)", metric: "Metrisch (m, m²)" },
    length: "Lengte van de kamer",
    width: "Breedte van de kamer",
    length2: "Lengte van het tweede deel",
    width2: "Breedte van het tweede deel",
    secondHelp: "Optioneel. Verdeel een L-vormige kamer in twee rechthoeken en vul de tweede hier in. Laat anders beide op 0 staan.",
    waste: "Snijverlies",
    wasteHelp: "Extra voor zaagsneden, restjes en beschadigde stukken. Ongeveer 10% past bij recht leggen; neem ongeveer 15% voor diagonaal of visgraat.",
    coverage: "Dekking per pak",
    coverageHelp: "De oppervlakte die één pak dekt, zoals vermeld op het pak of de productpagina.",
    price: "Prijs per oppervlakte-eenheid",
    priceHelp: "Optioneel. De prijs van de vloer per vierkante voet of vierkante meter.",
    errors: {
      secondPair: "Vul zowel de lengte als de breedte van het tweede deel in, of zet beide op 0.",
    },
    boxes: "Benodigde pakken",
    caption: "{area} plus {waste} snijverlies, bij {coverage} per pak.",
    floorArea: "Vloeroppervlakte",
    areaWithWaste: "Oppervlakte inclusief snijverlies",
    areaBought: "Oppervlakte in de gekochte pakken",
    leftover: "Reserve na het leggen",
    otherUnit: "Vloeroppervlakte in andere eenheden",
    cost: "Kosten van de vloer (hele pakken)",
    costWithWaste: "Kosten van de oppervlakte inclusief snijverlies",
    notes: {
      squareFootage: "Alleen de oppervlakte van een kamer nodig? De oppervlaktecalculator geeft die zonder pakken of snijverlies.",
      extras: "Ondervloer, plinten, overgangsprofielen en lijm zijn niet inbegrepen.",
    },
  },
};

export default nl;
