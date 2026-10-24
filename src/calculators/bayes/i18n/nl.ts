import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BayesText } from "../text/en";

const nl: CalculatorTranslation<BayesText> = {
  content: {
    title: "Stelling van Bayes-calculator",
    shortTitle: "Stelling van Bayes",
    summary: "Werk een a-priorikans bij met nieuw bewijs en zie het resultaat als natuurlijke frequenties op 10.000 gevallen.",
    metaTitle: "Stelling van Bayes-calculator – a-posteriorikans P(A|B)",
    metaDescription:
      "Bereken P(A|B) uit een a-priorikans, een likelihood en een kans op vals alarm. Zie P(B), P(A|niet B) en terecht en vals positieven op 10.000 gevallen.",
    keywords: ["stelling van Bayes", "regel van Bayes", "a-posteriorikans", "voorwaardelijke kans", "positief voorspellende waarde", "vals positief", "sensitiviteit", "prevalentie"],
    intro: [
      "De stelling van Bayes vertelt je hoeveel je iets moet geloven nadat je bewijs hebt gezien. Ze combineert hoe waarschijnlijk het idee vooraf was (de a-priorikans) met hoeveel vaker het bewijs opduikt als het idee waar is dan als het onwaar is.",
      "Het klassieke voorbeeld is een screeningstest. Zelfs een test die de meeste gevallen opspoort, kan meer valse alarmen dan echte positieven opleveren als de aandoening zeldzaam is. Vul drie percentages in om de bijgewerkte kans te krijgen, plus een uitsplitsing van 10.000 denkbeeldige gevallen waarmee je het resultaat makkelijk met de hand kunt controleren.",
    ],
    howToUse: [
      "Vul de a-priorikans P(A) in: hoe vaak A voorkomt voordat je naar het bewijs kijkt, zoals de prevalentie van een aandoening.",
      "Vul P(B | A) in: hoe vaak het bewijs optreedt als A waar is, zoals de sensitiviteit van een test.",
      "Vul P(B | niet A) in: hoe vaak het bewijs toch optreedt als A onwaar is, zoals het percentage vals-positieven.",
      "Lees P(A | B) af en gebruik dan de tabel met 10.000 gevallen om te zien waar de positieven vandaan komen.",
    ],
    formulas: [
      { title: "Stelling van Bayes", expression: "P(A | B) = P(B | A) · P(A) ÷ P(B)", explanation: "De a-posteriorikans is het deel van alle gevallen met B die ook A hebben." },
      { title: "Totale kans", expression: "P(B) = P(B | A) · P(A) + P(B | niet A) · (1 − P(A))", explanation: "B kan optreden met A (terecht positieven) of zonder A (vals positieven)." },
      { title: "Negatieve uitslag", expression: "P(A | niet B) = (1 − P(B | A)) · P(A) ÷ (1 − P(B))", explanation: "De kans dat A toch waar is als B niet wordt waargenomen (vals negatieven onder alle negatieven)." },
    ],
    examples: [
      {
        title: "Een screeningstest voor een aandoening die 2% van de mensen treft",
        steps: ["Van 10.000 mensen hebben er 200 de aandoening en 95% van hen test positief: 190 terecht positieven.", "Van de 9.800 zonder de aandoening test 8% positief: 784 vals positieven.", "P(A | B) = 190 ÷ (190 + 784) ≈ 19,51%"],
      },
      {
        title: "Een woord dat op spam wijst",
        steps: ["P(B) = 0,30 × 0,40 + 0,02 × 0,60 = 0,132", "P(A | B) = 0,12 ÷ 0,132 ≈ 90,91%"],
      },
      {
        title: "Een heel zeldzame aandoening en een nauwkeurige test",
        steps: ["Van 10.000 mensen: 9,9 terecht positieven en 99,9 vals positieven.", "P(A | B) = 9,9 ÷ 109,8 ≈ 9,02%, ook al is de test in 99% van de gevallen juist."],
      },
    ],
    assumptions: [
      "De drie percentages worden als exact beschouwd. In de praktijk zijn de sensitiviteit en het percentage vals-positieven van een test schattingen, en de a-priorikans hangt af van wie er getest wordt.",
      "De a-priorikans moet de groep beschrijven waaruit het geval komt. Iemand die wegens klachten wordt getest, heeft een hogere a-priorikans dan een willekeurig iemand uit de bevolking.",
      "De diagnostische voorbeelden illustreren alleen de rekenkunde. Voor het interpreteren van een echte medische testuitslag is een arts nodig, die klachten, voorgeschiedenis en vervolgtests kan meewegen.",
    ],
    faqs: [
      { question: "Waarom is P(A | B) zo laag terwijl de test nauwkeurig is?", answer: "Als A zeldzaam is, zijn de weinige echte gevallen in de minderheid ten opzichte van de vele mensen zonder A, en zelfs een klein percentage vals-positieven in die grote groep geeft meer valse alarmen dan terecht positieven." },
      { question: "Hoe passen sensitiviteit en specificiteit bij de invoer?", answer: "De sensitiviteit is P(B | A). De kans op vals alarm P(B | niet A) is 100% min de specificiteit, dus een specificiteit van 97% betekent een kans op vals alarm van 3%." },
      { question: "Wat laat de tabel met 10.000 gevallen zien?", answer: "Hij zet de kansen om in verwachte aantallen terecht positieven, vals positieven, vals negatieven en terecht negatieven. P(A | B) is het aantal terecht positieven gedeeld door alle positieven." },
    ],
    sourcesUsedFor: [
      "Hoe sensitiviteit, het percentage vals-positieven en de prevalentie via een 2×2-tabel samen de voorspellende waarden bepalen.",
      "Voorwaardelijke kansen afgelezen uit een tabel met aantallen.",
    ],
  },
  text: {
    prior: "A-priorikans P(A)",
    priorHelp: "Hoe waarschijnlijk A is vóór enig bewijs, bijvoorbeeld hoe vaak een aandoening voorkomt in de geteste groep.",
    likelihood: "Likelihood P(B | A)",
    likelihoodHelp: "Hoe vaak het bewijs B optreedt als A waar is, bijvoorbeeld de sensitiviteit van een test (percentage terecht positieven).",
    falseAlarm: "Kans op vals alarm P(B | niet A)",
    falseAlarmHelp: "Hoe vaak B optreedt als A onwaar is, bijvoorbeeld het percentage vals-positieven van een test (100% min de specificiteit).",
    zeroEvidence: "Met deze waarden kan het bewijs B nooit optreden (P(B) = 0), dus P(A | B) is niet gedefinieerd. Verhoog P(A) of een van de percentages tot boven 0%.",
    posterior: "A-posteriorikans P(A | B)",
    caption: "De kans dat A waar is nadat B is waargenomen.",
    pB: "Totale kans op het bewijs P(B)",
    pNotAGivenB: "P(niet A | B)",
    pAGivenNotB: "P(A | niet B)",
    undefinedNotB: "Niet gedefinieerd: B treedt altijd op, dus “niet B” komt nooit voor",
    tableCaption: "Op 10.000 gevallen",
    tableColumns: { outcome: "Uitkomst", cases: "Gevallen" },
    rows: {
      tp: "Terecht positieven (A en B)",
      fp: "Vals positieven (niet A, wel B)",
      fn: "Vals negatieven (A, maar niet B)",
      tn: "Terecht negatieven (niet A en niet B)",
    },
    liftNote: "Het waarnemen van B vermenigvuldigt de odds van A met {ratio} (de likelihoodratio P(B | A) ÷ P(B | niet A)).",
    rareNote: "Als A zeldzaam is, kunnen de meeste gevallen met B toch valse alarmen zijn, ook als de test nauwkeurig is.",
    note: "Aantallen op 10.000 zijn verwachte aantallen en kunnen gebroken zijn.",
  },
};

export default nl;
