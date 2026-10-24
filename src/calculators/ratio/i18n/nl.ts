import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RatioText } from "../text/en";

const nl: CalculatorTranslation<RatioText> = {
  content: {
    title: "Verhoudingscalculator",
    shortTitle: "Verhouding",
    summary: "Vereenvoudig een verhouding van twee of drie termen, los een evenredigheid op voor een ontbrekende term of verdeel een bedrag volgens een verhouding.",
    metaTitle: "Verhoudingscalculator – vereenvoudigen, oplossen en verdelen",
    metaDescription:
      "Vereenvoudig verhoudingen met gehele of decimale termen, vind de ontbrekende term in A : B = C : x of verdeel een bedrag in twee of drie delen.",
    keywords: ["verhouding berekenen", "verhouding vereenvoudigen", "evenredigheid", "ontbrekende term", "verdelen naar verhouding", "kruislings vermenigvuldigen", "verhouding 1 op n"],
    intro: [
      "Een verhouding vergelijkt hoeveelheden: 3 : 4 betekent drie delen van het ene op elke vier delen van het andere. Verhoudingen kom je tegen in recepten, bij het mengen van beton of verf, in kaartschalen, schermformaten en bij het delen van kosten.",
      "Deze calculator doet de drie dingen die het vaakst nodig zijn. Hij vereenvoudigt een verhouding van twee of drie termen tot de kleinste gehele getallen, ook als de termen decimalen zijn; hij lost een evenredigheid A : B = C : x op voor de ontbrekende term; en hij verdeelt een bedrag in delen volgens een verhouding.",
    ],
    howToUse: [
      "Kies de taak.",
      "Om te vereenvoudigen of te verdelen vul je twee of drie positieve termen in. Laat de derde term leeg voor een verhouding met twee delen.",
      "Om een ontbrekende term te vinden vul je A, B en C in uit A : B = C : x.",
      "Om te verdelen vul je ook het te verdelen bedrag in en lees je het aandeel van elk deel af in de tabel.",
    ],
    formulas: [
      { title: "Vereenvoudigen", expression: "A : B : C = (A ÷ g) : (B ÷ g) : (C ÷ g)", explanation: "g is de grootste gemene deler van de termen. Decimale termen worden eerst met dezelfde macht van 10 vermenigvuldigd, zodat ze gehele getallen worden: 1,5 : 2,25 wordt 150 : 225." },
      { title: "Ontbrekende term", expression: "A : B = C : x  ⇒  x = B × C ÷ A", explanation: "Twee verhoudingen zijn gelijk als hun kruisproducten gelijk zijn, A × x = B × C. A mag niet 0 zijn." },
      { title: "Een bedrag verdelen", expression: "aandeel van deel i = bedrag × term i ÷ (som van de termen)", explanation: "Elk deel krijgt het deel van het totaal dat zijn term is van de som van alle termen." },
      { title: "Vorm 1 : n", expression: "A : B = 1 : (B ÷ A)", explanation: "Door elke term door de eerste te delen krijg je een eenheidsverhouding, handig voor schalen en mengvoorschriften." },
    ],
    examples: [
      {
        title: "Vereenvoudig 1,5 : 2,25 : 3",
        steps: ["Vermenigvuldig elke term met 100: 150 : 225 : 300", "De grootste gemene deler is 75", "150 ÷ 75 : 225 ÷ 75 : 300 ÷ 75 = 2 : 3 : 4"],
      },
      {
        title: "Een recept omrekenen: bij 4 eieren hoort 7 dl melk; hoeveel melk bij 10 eieren?",
        steps: ["4 : 7 = 10 : x", "x = 7 × 10 ÷ 4", "x = 17,5 dl melk"],
      },
      {
        title: "Verdeel 700 in de verhouding 2 : 3 : 5",
        steps: ["Totaal aantal delen = 2 + 3 + 5 = 10, dus één deel is 700 ÷ 10 = 70", "Aandelen: 2 × 70 = 140, 3 × 70 = 210, 5 × 70 = 350", "Controle: 140 + 210 + 350 = 700"],
      },
    ],
    assumptions: [
      "Termen om te vereenvoudigen en te verdelen moeten positief zijn. Decimalen worden exact verwerkt op basis van de cijfers die je typt, tot 40 cijfers per term.",
      "De modus voor de ontbrekende term accepteert alle getallen, ook negatieve, zolang A niet 0 is.",
      "Aandelen worden getoond met hoogstens 4 decimalen en niet afgerond op hele eenheden, dus bij geld of personen moet je het laatste aandeel misschien met de hand aanpassen.",
    ],
    faqs: [
      { question: "Hoe vereenvoudig ik een verhouding met decimalen?", answer: "Vermenigvuldig alle termen met dezelfde macht van 10 tot het gehele getallen zijn en deel ze dan door hun grootste gemene deler. 0,6 : 0,8 wordt 6 : 8, wat te vereenvoudigen is tot 3 : 4." },
      { question: "Wat is het verschil tussen een verhouding en een breuk?", answer: "Een breuk vergelijkt een deel met het geheel, terwijl een verhouding ook delen met elkaar kan vergelijken. In een klas met 12 meisjes en 18 jongens is de verhouding meisjes tot jongens 2 : 3, maar het aandeel meisjes is 12/30 = 2/5." },
      { question: "Hoe verdeel ik een rekening volgens een verhouding?", answer: "Kies “Een bedrag verdelen volgens een verhouding”, vul de rekening in en het aandeel van elke persoon in de verhouding. Bij 90 verdeeld als 1 : 2 is het totaal 3 delen van 30, dus de aandelen zijn 30 en 60." },
    ],
    sourcesUsedFor: ["Definitie van een evenredigheid en het oplossen ervan voor een onbekende term."],
  },
  text: {
    mode: "Taak",
    modes: {
      simplify: "Een verhouding vereenvoudigen",
      missing: "Een ontbrekende term vinden (A : B = C : x)",
      divide: "Een bedrag verdelen volgens een verhouding",
    },
    termA: "Eerste term (A)",
    termB: "Tweede term (B)",
    termC: "Derde term (optioneel)",
    termHelp: "Een positief getal. Decimalen zoals 1,5 zijn toegestaan.",
    termInvalid: "Vul een positief getal in, zoals 4 of 1,5.",
    termTooLong: "Vul hoogstens 40 cijfers in.",
    propA: "A",
    propB: "B",
    propC: "C",
    propHelp: "Lost A : B = C : x op voor x.",
    propAZero: "A mag niet 0 zijn, omdat x = B × C ÷ A.",
    amount: "Te verdelen bedrag",
    amountHelp: "Elke hoeveelheid: geld, grammen, liters, personen of minuten.",
    simplified: "Vereenvoudigde verhouding",
    simplifiedCaption: "{original} in de kleinste gehele termen.",
    decimalValue: "Decimale waarde (A ÷ B)",
    oneToN: "Vorm 1 : n",
    totalParts: "Totaal aantal delen",
    missingTerm: "Ontbrekende term x",
    missingCaption: "{a} : {b} = {c} : x",
    proportion: "Volledige evenredigheid",
    ratioValue: "Waarde van de verhouding (B ÷ A)",
    shares: "Aandelen",
    sharesCaption: "{amount} verdeeld in de verhouding {ratio}.",
    sharesTable: "Hoe het bedrag wordt verdeeld",
    colPart: "Deel",
    colTerm: "Term van de verhouding",
    colShare: "Aandeel",
    colPercent: "Procent van het totaal",
    partN: "Deel {n}",
    decimalNote: "Decimale termen worden eerst met dezelfde macht van 10 vermenigvuldigd tot gehele getallen en daarna gedeeld door hun grootste gemene deler.",
  },
};

export default nl;
