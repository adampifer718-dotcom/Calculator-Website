import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ForceText } from "../text/en";

const nl: CalculatorTranslation<ForceText> = {
  content: {
    title: "Krachtcalculator (F = ma)",
    shortTitle: "Kracht",
    summary: "Los de tweede wet van Newton op voor kracht, massa of versnelling, in newton, pond-kracht, kilogram, pond of g.",
    metaTitle: "Krachtcalculator (F = ma) – kracht, massa of versnelling",
    metaDescription:
      "Los F = ma op voor kracht, massa of versnelling. Gebruik N, kN, lbf of dyn, kg, g, lb of t, en m/s², ft/s² of g, en zie het resultaat in elke eenheid.",
    keywords: ["kracht berekenen", "F = ma", "tweede wet van Newton", "newton", "pond-kracht", "massa", "versnelling", "nettokracht"],
    intro: [
      "De tweede wet van Newton verbindt drie grootheden: de nettokracht op een voorwerp, de massa ervan en de versnelling die daaruit volgt. Duw twee keer zo hard en de versnelling verdubbelt; duw iets dat twee keer zo zwaar is met dezelfde kracht en het versnelt half zoveel.",
      "Kies de waarde die je wilt vinden en vul de andere twee in. De calculator werkt met metrische en Amerikaanse eenheden, toont het antwoord in elke eenheid van die soort en geeft het gewichtsequivalent van de kracht: de massa die onder standaardzwaartekracht met die kracht op een weegschaal zou drukken.",
    ],
    howToUse: [
      "Kies wat je wilt vinden: kracht, massa of versnelling.",
      "Vul de twee bekende waarden in en kies voor elk een eenheid.",
      "Kies in de eenhedenlijst van de gezochte waarde de eenheid waarin je het antwoord wilt.",
      "Lees het resultaat af, de andere eenheden en het gewichtsequivalent van de kracht.",
    ],
    formulas: [
      { title: "Kracht", expression: "F = m × a", explanation: "Nettokracht is massa maal versnelling. 1 N geeft 1 kg een versnelling van 1 m/s²." },
      { title: "Massa", expression: "m = F ÷ a", explanation: "Deel de kracht door de versnelling die ze veroorzaakt." },
      { title: "Versnelling", expression: "a = F ÷ m", explanation: "Deel de nettokracht door de massa." },
      { title: "Omrekeningsfactoren", expression: "1 lbf = 0,45359237 kg × 9,80665 m/s² = 4,4482216152605 N; 1 dyn = 10⁻⁵ N; 1 g = 9,80665 m/s²", explanation: "Per definitie exact. Het gewichtsequivalent is |F| ÷ 9,80665 m/s²." },
    ],
    examples: [
      {
        title: "Kracht om een auto van 1.350 kg te versnellen met 2,8 m/s²",
        steps: ["F = 1.350 kg × 2,8 m/s² = 3.780 N", "3.780 N ÷ 1.000 = 3,78 kN"],
      },
      {
        title: "Massa van een krat dat een duw van 600 N versnelt met 1,5 m/s²",
        steps: ["m = 600 N ÷ 1,5 m/s²", "= 400 kg"],
      },
      {
        title: "Versnelling van een karretje van 20 lb dat met 30 lbf wordt getrokken, in g",
        steps: ["30 lbf = 133,4466 N en 20 lb = 9,0718 kg", "a = 133,4466 ÷ 9,0718 ≈ 14,71 m/s²", "14,71 ÷ 9,80665 = 1,5 g, omdat één pond-kracht het gewicht is van één pond onder standaardzwaartekracht"],
      },
    ],
    assumptions: [
      "F is de nettokracht: de vectorsom van alle krachten op het voorwerp, inclusief wrijving en luchtweerstand. De tool behandelt kracht en versnelling langs één lijn, dus een negatieve waarde betekent de tegenovergestelde richting.",
      "De massa is constant. Raketten die brandstof verbruiken, of andere systemen die massa winnen of verliezen, vragen om de impulsvorm van de wet.",
      "De klassieke mechanica geldt; die is nauwkeurig bij snelheden ver onder de lichtsnelheid.",
      "De versnellingseenheid g en het gewichtsequivalent gebruiken de standaardzwaartekracht, 9,80665 m/s². De plaatselijke zwaartekracht wijkt daar iets van af.",
    ],
    faqs: [
      { question: "Wat is een newton?", answer: "De SI-eenheid van kracht. Eén newton geeft een massa van 1 kg een versnelling van 1 m/s². Op aarde weegt een voorwerp van 1 kg ongeveer 9,81 N." },
      { question: "Wat is het verschil tussen pond en pond-kracht?", answer: "Een pond (lb) is een eenheid van massa; een pond-kracht (lbf) is het gewicht van één pond onder standaardzwaartekracht, 4,4482216152605 N. Ze delen een naam, en daarom geeft 1 lbf op 1 lb precies 1 g." },
      { question: "Waarom is mijn antwoord negatief?", answer: "Een negatieve kracht of versnelling wijst in de richting tegengesteld aan de richting die je als positief hebt gekozen, zoals een remkracht tegen de rijrichting in." },
    ],
    sourcesUsedFor: [
      "De tweede wet van Newton: de netto externe kracht is gelijk aan massa maal versnelling.",
      "1 lbf = 4,4482216152605 N, uit het pond en de standaardzwaartekracht 9,80665 m/s².",
    ],
  },
  text: {
    solve: "Bereken",
    solveOptions: { force: "Kracht (F)", mass: "Massa (m)", acceleration: "Versnelling (a)" },
    force: "Kracht (F)",
    forceHelp: "Nettokracht. Een negatieve waarde betekent dat ze de andere kant op wijst.",
    forceUnit: "Eenheid van kracht",
    forceUnits: { N: "Newton (N)", kN: "Kilonewton (kN)", lbf: "Pond-kracht (lbf)", dyn: "Dyne (dyn)" },
    mass: "Massa (m)",
    massUnit: "Eenheid van massa",
    massUnits: { kg: "Kilogram (kg)", g: "Gram (g)", lb: "Pond (lb)", t: "Ton (t)" },
    acceleration: "Versnelling (a)",
    accelerationHelp: "Een negatieve waarde betekent dat de versnelling de andere kant op wijst (afremmen).",
    accelerationUnit: "Eenheid van versnelling",
    accelerationUnits: { ms2: "Meter per seconde kwadraat (m/s²)", fts2: "Voet per seconde kwadraat (ft/s²)", g: "Standaardzwaartekracht (g = 9,80665 m/s²)" },
    unitHelp: "Voor de waarde die je zoekt, is dit de eenheid van het antwoord.",
    zeroAcceleration: "De versnelling mag niet 0 zijn als je de massa zoekt.",
    zeroForce: "De kracht mag niet 0 zijn als je de massa zoekt.",
    signMismatch: "De kracht en de versnelling moeten dezelfde kant op wijzen (hetzelfde teken hebben), omdat massa positief is.",
    results: { force: "Kracht", mass: "Massa", acceleration: "Versnelling" },
    inUnit: "In {unit}",
    weightKg: "Gewichtsequivalent: massa die onder standaardzwaartekracht zoveel weegt",
    weightLb: "Gewichtsequivalent in pond",
    weightNote: "Het gewichtsequivalent is |F| ÷ g₀ met g₀ = 9,80665 m/s²: de massa die een weegschaal op aarde onder deze kracht zou aangeven.",
    note: "F is de netto (totale) kracht op het voorwerp. Bij meerdere krachten tel je ze eerst als vectoren op.",
  },
};

export default nl;
