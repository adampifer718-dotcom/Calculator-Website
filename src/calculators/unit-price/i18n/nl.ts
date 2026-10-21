import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { UnitPriceText } from "../text/en";

const nl: CalculatorTranslation<UnitPriceText> = {
  content: {
    title: "Eenheidsprijscalculator",
    shortTitle: "Eenheidsprijs",
    summary: "Vergelijk twee verpakkingen op prijs per kilogram, liter of stuk en zie welke de beste koop is.",
    metaTitle: "Eenheidsprijscalculator – prijs per kilo of liter vergelijken",
    metaDescription:
      "Vergelijk twee producten op eenheidsprijs per kg, per liter of per stuk, ook als er één in ounces of gallons is, en zie hoeveel het goedkopere bespaart.",
    keywords: ["eenheidsprijs", "prijs per eenheid", "prijs per kilo", "kiloprijs", "literprijs", "prijzen vergelijken", "beste koop", "boodschappen vergelijken"],
    intro: [
      "Een grotere verpakking is niet altijd goedkoper per gram. De eenheidsprijs, de prijs gedeeld door de hoeveelheid, is de eerlijke manier om twee formaten of twee merken te vergelijken.",
      "Vul van elk product de prijs en de hoeveelheid in. Hoeveelheden kunnen in metrische of Amerikaanse eenheden; beide worden eerst naar een gemeenschappelijke eenheid omgerekend en dan vergeleken.",
    ],
    howToUse: [
      "Kies de valuta voor de prijzen.",
      "Vul voor product A de prijs, de hoeveelheid in de verpakking en de eenheid in.",
      "Doe hetzelfde voor product B, met een eenheid van dezelfde soort: gewicht, volume of aantal.",
      "Lees af welk product goedkoper is, de prijs van elk per kilogram, liter of stuk, en het bespaarde percentage.",
    ],
    formulas: [
      { title: "Eenheidsprijs", expression: "eenheidsprijs = prijs ÷ hoeveelheid", explanation: "De hoeveelheid wordt eerst omgerekend naar kilogram, liter of stuks." },
      {
        title: "Bespaard percentage",
        expression: "besparing = (hoogste − laagste) ÷ hoogste × 100",
        explanation: "Hoeveel minder je per eenheid betaalt als je het goedkopere product kiest.",
      },
      {
        title: "Amerikaanse eenheden",
        expression: "1 oz = 28,349523125 g; 1 lb = 453,59237 g; 1 fl oz = 29,5735295625 mL; 1 gal = 3,785411784 L",
        explanation: "Exacte definities, zodat de vergelijking niet van afronding afhangt.",
      },
    ],
    examples: [
      {
        title: "500 g voor $3,49 tegenover 1 kg voor $5,99",
        steps: ["A: 3,49 ÷ 0,5 kg = $6,98 per kg", "B: 5,99 ÷ 1 kg = $5,99 per kg", "B bespaart (6,98 − 5,99) ÷ 6,98 ≈ 14,18%"],
      },
      {
        title: "64 fl oz sap voor $4,29 tegenover 1,75 L voor $3,19",
        steps: ["64 fl oz = 64 × 29,5735295625 mL ≈ 1,8927 L", "A: 4,29 ÷ 1,8927 ≈ $2,27 per L", "B: 3,19 ÷ 1,75 ≈ $1,82 per L, ongeveer 19,58% goedkoper"],
      },
      {
        title: "12 eieren voor $3,60 tegenover 18 eieren voor $5,58",
        steps: ["A: 3,60 ÷ 12 = $0,30 per ei", "B: 5,58 ÷ 18 = $0,31 per ei", "A bespaart (0,31 − 0,30) ÷ 0,31 ≈ 3,23%"],
      },
    ],
    assumptions: [
      "Beide producten zijn voor jou even bruikbaar: dezelfde kwaliteit, en je gebruikt de grotere verpakking helemaal op.",
      "Ounces zijn avoirdupois-gewichtsounces, en fluid ounces en gallons zijn Amerikaanse maten. Britse imperiale pints en gallons zijn groter en staan niet in de lijst.",
      "Prijzen worden vergeleken zoals ingevuld; belastingen, statiegeld en kortingsbonnen worden niet meegerekend.",
      "De gekozen valuta verandert alleen de opmaak.",
    ],
    faqs: [
      {
        question: "Kan ik een product dat per gewicht wordt verkocht vergelijken met een product per volume?",
        answer: "Niet direct. Gram en milliliter komen alleen overeen bij vloeistoffen die op water lijken, daarom vraagt de calculator om eenheden van dezelfde soort. Kijk op het etiket: op veel verpakkingen staan beide.",
      },
      {
        question: "Waarom vergelijken per kilogram of per liter in plaats van per gram?",
        answer: "Prijzen per gram zijn piepklein en lastig te lezen. Per kilogram of per liter krijg je getallen van dezelfde orde als op de schapkaartjes, en de volgorde blijft hoe dan ook gelijk.",
      },
      {
        question: "Klopt de eenheidsprijs op het schapkaartje altijd?",
        answer: "Meestal wel, maar winkels gebruiken soms verschillende eenheden op naast elkaar liggende kaartjes, zoals per 100 gram op het ene en per kilo op het andere. Als je beide producten hier invult, staan ze in dezelfde eenheid.",
      },
    ],
    sourcesUsedFor: [
      "Hoe eenheidsprijzen in de detailhandel worden uitgedrukt per eenheid van gewicht, volume of aantal.",
      "Exacte omrekenfactoren voor de avoirdupois-ounce en het pond en voor de Amerikaanse fluid ounce en gallon.",
    ],
  },
  text: {
    priceA: "Prijs product A",
    quantityA: "Hoeveelheid product A",
    unitA: "Eenheid product A",
    priceB: "Prijs product B",
    quantityB: "Hoeveelheid product B",
    unitB: "Eenheid product B",
    quantityHelp: "De hoeveelheid in de verpakking, zoals 500 voor een zak van 500 g.",
    units: {
      g: "Gram (g)",
      kg: "Kilogram (kg)",
      oz: "Ounce (oz)",
      lb: "Pond (lb)",
      mL: "Milliliter (mL)",
      L: "Liter (L)",
      floz: "Amerikaanse fluid ounce (fl oz)",
      gal: "Amerikaanse gallon (gal)",
      item: "Stuks (aantal)",
    },
    perUnit: { mass: "kg", volume: "L", count: "stuk" },
    kindMismatch: "Product B moet op dezelfde manier gemeten worden als product A: allebei op gewicht, allebei op volume of allebei op aantal.",
    aCheaper: "Product A is goedkoper per eenheid",
    bCheaper: "Product B is goedkoper per eenheid",
    same: "Beide kosten hetzelfde per eenheid",
    result: "Beste koop",
    caption: "{a} voor product A en {b} voor product B, per {unit}.",
    unitPriceA: "Prijs product A per {unit}",
    unitPriceB: "Prijs product B per {unit}",
    saving: "Besparing per eenheid met het goedkopere product",
    difference: "Prijsverschil per {unit}",
    notes: {
      compare: "Prijzen worden per {unit} vergeleken nadat beide hoeveelheden naar dezelfde eenheid zijn omgerekend.",
      waste: "Een lagere eenheidsprijs is alleen een besparing als je de grotere hoeveelheid opmaakt voordat die bederft.",
    },
  },
};

export default nl;
