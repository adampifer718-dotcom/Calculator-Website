import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HardyWeinbergText } from "../text/en";

const nl: CalculatorTranslation<HardyWeinbergText> = {
  content: {
    title: "Hardy-Weinberg-calculator",
    shortTitle: "Hardy-Weinberg",
    summary: "Bepaal allel- en genotypefrequenties uit de frequentie van een recessieve eigenschap, of toets genotypeaantallen aan het evenwicht.",
    metaTitle: "Hardy-Weinberg-calculator – allelfrequenties en χ²-toets",
    metaDescription:
      "Bereken p, q, p², 2pq en q² uit het aandeel mensen met een recessieve eigenschap, of toets waargenomen aantallen AA, Aa en aa met een chikwadraattoets.",
    keywords: ["hardy-weinberg", "allelfrequentie", "genotypefrequentie", "p2 2pq q2", "dragerfrequentie", "populatiegenetica", "chikwadraat"],
    intro: [
      "Het Hardy-Weinbergprincipe zegt dat allel- en genotypefrequenties van generatie op generatie constant blijven zolang er geen evolutionaire krachten werken. Voor een gen met twee allelen, A met frequentie p en a met frequentie q, komen de genotypen dan voor in de verhoudingen p², 2pq en q².",
      "Gebruik de eerste modus als je weet hoe vaak een recessieve eigenschap voorkomt, bijvoorbeeld om te schatten hoeveel mensen drager zijn. Gebruik de tweede modus om te controleren of genotypeaantallen uit een steekproef passen bij de verhoudingen die het principe voorspelt.",
    ],
    howToUse: [
      "Kies een vertrekpunt: de frequentie van het recessieve fenotype of genotypeaantallen.",
      "Vul in de fenotypemodus het aandeel individuen met de recessieve eigenschap in als percentage.",
      "Vul in de aantallenmodus in hoeveel AA-, Aa- en aa-individuen je hebt waargenomen.",
      "Lees de allelfrequenties, de genotypetabel en, bij aantallen, de uitkomst van de chikwadraattoets af.",
    ],
    formulas: [
      { title: "Evenwichtsverhoudingen", expression: "p + q = 1;  p² + 2pq + q² = 1", explanation: "p² is het aandeel AA, 2pq het aandeel Aa en q² het aandeel aa." },
      { title: "Uit het recessieve fenotype", expression: "q = √q²;  p = 1 − q", explanation: "Alleen aa-individuen vertonen een recessieve eigenschap, dus hun aandeel is gelijk aan q²." },
      { title: "Uit genotypeaantallen", expression: "p = (2·AA + Aa) ÷ (2N)", explanation: "Elk individu draagt twee allelen; N is het totale aantal individuen." },
      {
        title: "Chikwadraattoets",
        expression: "χ² = Σ (O − E)² ÷ E;  p-waarde = erfc(√(χ² ÷ 2))",
        explanation: "E = p²N, 2pqN en q²N. Bij 1 vrijheidsgraad heeft de p-waarde deze gesloten vorm.",
      },
    ],
    examples: [
      {
        title: "Een recessieve aandoening bij 1 op de 2500 mensen",
        steps: ["q² = 0,0004, dus q = 0,02 en p = 0,98", "2pq = 2 × 0,98 × 0,02 = 0,0392", "Ongeveer 3,92% van de mensen, zo'n 1 op de 25,5, is drager"],
      },
      {
        title: "Een recessieve eigenschap bij 9% van een populatie",
        steps: ["q = √0,09 = 0,3 en p = 0,7", "p² = 49%, 2pq = 42%, q² = 9%"],
      },
      {
        title: "Toets van 298 AA, 489 Aa en 213 aa",
        steps: [
          "N = 1000 en p = (2 × 298 + 489) ÷ 2000 = 0,5425",
          "Verwachte aantallen ≈ 294,31, 496,39 en 209,31",
          "χ² ≈ 0,2215, p-waarde ≈ 0,638: verenigbaar met evenwicht",
        ],
      },
    ],
    assumptions: [
      "Het model gaat uit van een grote populatie met willekeurige paring, zonder mutatie, migratie of selectie op het gen.",
      "De fenotypemodus gaat uit van één gen met twee allelen, volledige dominantie en een populatie die al in evenwicht is.",
      "De fenotypefrequentie wordt ingevuld als percentage (0–100), niet als fractie tussen 0 en 1.",
      "De chikwadraattoets is een benadering die het best werkt als elk verwacht aantal minstens 5 is.",
    ],
    faqs: [
      {
        question: "Waarom kan ik niet gewoon het dominante fenotype tellen?",
        answer:
          "Mensen met AA en Aa zien er hetzelfde uit, dus het dominante fenotype is een mengsel van twee genotypen. Het recessieve fenotype is zuiver aa, en daarom is q² het vertrekpunt.",
      },
      {
        question: "Wat betekent een kleine p-waarde?",
        answer:
          "Onder 0,05 wijken de waargenomen genotypeaantallen meer af dan toeval alleen meestal verklaart. Mogelijke oorzaken zijn inteelt, selectie, migratie, populatiestructuur of fouten bij het genotyperen.",
      },
      {
        question: "Waarom heeft de toets maar 1 vrijheidsgraad?",
        answer:
          "Er zijn drie genotypeklassen. Eén vrijheidsgraad valt weg omdat de aantallen samen N moeten zijn, en nog één omdat de allelfrequentie p uit dezelfde gegevens wordt geschat.",
      },
    ],
    sourcesUsedFor: ["Het Hardy-Weinbergprincipe, p² + 2pq + q² = 1 en de aannames ervan."],
  },
  text: {
    mode: "Uitgaan van",
    modeOptions: { phenotype: "Frequentie van het recessieve fenotype", counts: "Genotypeaantallen" },
    q2: "Aandeel met de recessieve eigenschap (q²)",
    q2Help: "Vul een percentage in: 1 op de 2500 mensen is 0,04%.",
    countAA: "AA-individuen (homozygoot dominant)",
    countAa: "Aa-individuen (heterozygoot)",
    countaa: "aa-individuen (homozygoot recessief)",
    noIndividuals: "Vul minstens één individu in.",
    carrier: "Dragerfrequentie (2pq)",
    carrierRatio: "Dragers",
    oneIn: "Ongeveer 1 op de {n}",
    none: "Geen",
    alleleA: "Frequentie van allel A (p)",
    allelea: "Frequentie van allel a (q)",
    total: "Totaal aantal individuen (N)",
    chiSquare: "Chikwadraat (χ², 1 vrijheidsgraad)",
    pValue: "p-waarde",
    verdict: "Toetsuitkomst bij een significantieniveau van 5%",
    consistent: "Geen significante afwijking van het evenwicht",
    departure: "Significante afwijking van het evenwicht",
    genotypes: { AA: "AA (homozygoot dominant)", Aa: "Aa (heterozygoot)", aa: "aa (homozygoot recessief)" },
    frequencyCaption: "Verwachte genotypefrequenties",
    countsCaption: "Waargenomen en verwachte aantallen",
    colGenotype: "Genotype",
    colFrequency: "Frequentie",
    colPercent: "Percentage",
    colObserved: "Waargenomen",
    colExpected: "Verwacht",
    phenotypeNote: "Gaat ervan uit dat de populatie in Hardy-Weinbergevenwicht is, zodat q = √q².",
    monomorphic: "Er is maar één allel aanwezig, dus elk genotype komt overeen met het verwachte aantal en de chikwadraattoets is niet van toepassing.",
    smallExpected:
      "Minstens één verwacht aantal is kleiner dan 5, dus de p-waarde van de chikwadraattoets is slechts een ruwe indicatie. Een exacte toets is betrouwbaarder bij kleine steekproeven.",
    countsNote:
      "De verwachte aantallen zijn p²N, 2pqN en q²N. De toets heeft 1 vrijheidsgraad: 3 genotypeklassen min 1, min nog 1 voor de geschatte allelfrequentie.",
  },
};

export default nl;
