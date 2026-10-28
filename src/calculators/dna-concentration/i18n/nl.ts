import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DnaConcentrationText } from "../text/en";

const nl: CalculatorTranslation<DnaConcentrationText> = {
  content: {
    title: "DNA- en RNA-concentratiecalculator",
    shortTitle: "DNA-concentratie",
    summary: "Zet een A260-absorbantiemeting om in een DNA- of RNA-concentratie in ng/µL, met de totale opbrengst en de verhoudingen A260/A280 en A260/A230.",
    metaTitle: "DNA- en RNA-concentratiecalculator – A260 naar ng/µL",
    metaDescription:
      "Reken A260-metingen om naar een DNA- of RNA-concentratie in ng/µL met de factoren 50, 33 en 40 µg/mL, inclusief verdunning, totale opbrengst en zuiverheid.",
    keywords: ["dna-concentratie", "rna-concentratie", "a260", "nucleïnezuur kwantificeren", "260/280-verhouding", "260/230-verhouding", "spectrofotometer", "ng/µl"],
    intro: [
      "Nucleïnezuren absorberen ultraviolet licht het sterkst rond 260 nm. Binnen het lineaire bereik van een spectrofotometer is de absorbantie A260 evenredig met de concentratie, dus één meting en een omrekenfactor geven de hoeveelheid DNA of RNA in een monster.",
      "De standaardfactoren zijn 50 µg/mL per A260-eenheid voor dubbelstrengs DNA, 33 voor enkelstrengs DNA en 40 voor RNA, bij een weglengte van 1 cm. Deze calculator past de factor, de verdunning en de weglengte toe, en geeft daarnaast de totale opbrengst en de zuiverheidsverhoudingen A260/A280 en A260/A230.",
    ],
    howToUse: [
      "Kies het type monster, of vul je eigen omrekenfactor in (bijvoorbeeld een factor die voor een kort oligonucleotide is berekend).",
      "Vul de voor de blanco gecorrigeerde A260-meting in en de weglengte van de cuvet of het instrument.",
      "Vul de verdunningsfactor in als je het monster voor de meting hebt verdund.",
      "Vul eventueel A280, A230 en het volume van de stockoplossing in voor de zuiverheidsverhoudingen en de totale hoeveelheid nucleïnezuur.",
    ],
    formulas: [
      { title: "Concentratie", expression: "c (ng/µL) = A260 ÷ weglengte (cm) × factor × verdunningsfactor", explanation: "De factor is 50 voor dsDNA, 33 voor ssDNA en 40 voor RNA, in µg/mL per absorbantie-eenheid bij 1 cm. 1 µg/mL is gelijk aan 1 ng/µL." },
      { title: "Totale opbrengst", expression: "hoeveelheid (µg) = c (ng/µL) × volume (µL) ÷ 1000", explanation: "De concentratie van de onverdunde stockoplossing maal het volume ervan." },
      { title: "Zuiverheidsverhoudingen", expression: "A260/A280 en A260/A230", explanation: "Voor A260/A280 worden vaak ongeveer 1,8 (DNA) en 2,0 (RNA) genoemd, en voor A260/A230 2,0–2,2. Dit zijn vuistregels, geen strikte grenzen." },
    ],
    examples: [
      {
        title: "Verdund plasmide-DNA in een cuvet van 1 cm",
        steps: ["0,65 ÷ 1 cm × 50 µg/mL × 10 = 325 µg/mL = 325 ng/µL", "In 50 µL: 325 × 50 ÷ 1000 = 16,25 µg", "A260/A280 = 0,65 ÷ 0,36 ≈ 1,81"],
      },
      {
        title: "Een RNA-monster, 1 op 20 verdund",
        steps: ["0,42 × 40 µg/mL × 20 = 336 ng/µL", "A260/A280 = 0,42 ÷ 0,21 = 2,00", "A260/A230 = 0,42 ÷ 0,20 = 2,10", "In 30 µL: 336 × 30 ÷ 1000 = 10,08 µg"],
      },
      {
        title: "Enkelstrengs DNA in een cuvet van 2 mm",
        steps: ["Normaliseren naar 1 cm: 0,18 ÷ 0,2 = 0,9", "0,9 × 33 µg/mL × 1 = 29,7 ng/µL"],
      },
    ],
    assumptions: [
      "De A260-meting is gecorrigeerd voor de blanco en valt binnen het lineaire bereik van het instrument.",
      "De standaardfactoren zijn gemiddelden. De absorbantie van een kort oligonucleotide hangt af van de basevolgorde, dus een factor voor die specifieke sequentie (ingevuld als eigen factor) is nauwkeuriger.",
      "De absorbantie telt alle nucleïnezuren en vrije nucleotiden mee. RNA als verontreiniging in een DNA-monster, of DNA in een RNA-monster, verhoogt het resultaat.",
      "De zuiverheidsverhoudingen zijn veelgenoemde referentiewaarden, geen grenzen voor goed- of afkeuren. Ze verschuiven met de pH en de ionsterkte van de oplossing en met de gebruikte blanco.",
    ],
    faqs: [
      { question: "Waarom is ng/µL hetzelfde als µg/mL?", answer: "Bij beide worden teller en noemer van de eenheid met 1.000 vermenigvuldigd: een microgram is 1.000 nanogram en een milliliter is 1.000 microliter. Dus 325 µg/mL en 325 ng/µL beschrijven dezelfde concentratie." },
      { question: "Wat betekent een lage A260/A280-verhouding?", answer: "Eiwitten en fenol absorberen rond 280 nm, dus een verhouding ruim onder ongeveer 1,8 voor DNA of 2,0 voor RNA wijst vaak op zulke verontreinigingen. De verhouding zegt niets over de vraag of het nucleïnezuur intact is." },
      { question: "Heb ik de weglengte nodig?", answer: "Alleen als die niet 1 cm is. De factoren gaan uit van een weglengte van 1 cm. Veel instrumenten voor microvolumes meten over een kortere weglengte maar geven de absorbantie al genormaliseerd naar 1 cm weer; laat dan de standaardwaarde 1 staan." },
    ],
    sourcesUsedFor: [
      "Het meten van de concentratie van nucleïnezuren uit de absorbantie bij 260 nm met standaard omrekenfactoren.",
      "De veelgenoemde zuiverheidswaarden van ongeveer 1,8 (DNA) en 2,0 (RNA) voor A260/A280, en 2,0–2,2 voor A260/A230.",
    ],
  },
  text: {
    type: "Type monster",
    types: {
      dsDNA: "Dubbelstrengs DNA (50 µg/mL per A260)",
      ssDNA: "Enkelstrengs DNA (33 µg/mL per A260)",
      rna: "RNA (40 µg/mL per A260)",
      custom: "Eigen omrekenfactor",
    },
    sampleNames: { dsDNA: "DNA", ssDNA: "DNA", rna: "RNA" },
    factor: "Omrekenfactor",
    factorHelp: "µg/mL nucleïnezuur dat bij 260 nm over 1 cm een absorbantie van 1,0 geeft, bijv. een waarde die voor een specifiek oligonucleotide is berekend.",
    a260: "Absorbantie bij 260 nm (A260)",
    a260Help: "De voor de blanco gecorrigeerde meting van het gemeten (eventueel verdunde) monster.",
    pathLength: "Weglengte",
    pathLengthHelp: "1 cm voor een standaardcuvet. Veel instrumenten voor microvolumes geven waarden al genormaliseerd naar 1 cm; laat dan 1 staan.",
    dilution: "Verdunningsfactor",
    dilutionHelp: "Totaal volume ÷ volume monster. Voor 5 µL monster in in totaal 50 µL vul je 10 in. Vul 1 in voor een onverdund monster.",
    a280: "Absorbantie bij 280 nm (A280)",
    a230: "Absorbantie bij 230 nm (A230)",
    optionalHelp: "Optioneel. Wordt gebruikt voor een zuiverheidsverhouding.",
    volume: "Volume van het monster",
    volumeHelp: "Optioneel. Volume van de onverdunde stockoplossing, om de totale hoeveelheid erin te schatten.",
    result: "Concentratie nucleïnezuur",
    caption: "A260 ÷ weglengte × omrekenfactor × verdunningsfactor",
    ugPerMl: "Dezelfde concentratie in µg/mL",
    factorUsed: "Gebruikte omrekenfactor",
    a260Normalized: "A260 per 1 cm weglengte",
    totalYield: "Totale hoeveelheid in {volume} µL",
    ratio280: "Verhouding A260/A280",
    ratio230: "Verhouding A260/A230",
    notes: {
      ratio280: {
        near: "De A260/A280-verhouding van {ratio} ligt dicht bij de waarde van ongeveer {reference} die vaak wordt genoemd voor zuiver {sample}.",
        below: "De A260/A280-verhouding van {ratio} ligt onder de waarde van ongeveer {reference} die vaak wordt genoemd voor zuiver {sample}. Lagere verhoudingen kunnen wijzen op eiwit, fenol of andere stoffen die rond 280 nm absorberen.",
        above: "De A260/A280-verhouding van {ratio} ligt boven de waarde van ongeveer {reference} die vaak wordt genoemd voor zuiver {sample}. Iets hogere waarden komen vaak voor; bij DNA kan RNA in het monster de verhouding verhogen.",
      },
      ratio280Generic: "Ter vergelijking: voor A260/A280 worden vaak waarden van ongeveer 1,8 voor zuiver DNA en ongeveer 2,0 voor zuiver RNA genoemd.",
      ratio230: "De A260/A230-verhouding van {ratio} ligt in of boven het bereik van 2,0–2,2 dat vaak wordt genoemd voor zuiver nucleïnezuur.",
      ratio230Low: "De A260/A230-verhouding van {ratio} ligt onder het bereik van 2,0–2,2 dat vaak wordt genoemd voor zuiver nucleïnezuur. Lagere waarden kunnen wijzen op zouten, fenol, detergentia of andere stoffen die rond 230 nm absorberen.",
      range: "De absorbantie per cm ligt buiten ongeveer 0,1–1,0, waar metingen met een standaard cuvetspectrofotometer vaak minder betrouwbaar zijn. Controleer het opgegeven bereik van je instrument en verdun of concentreer het monster zo nodig.",
      general: "De absorbantie bij 260 nm telt alle nucleïnezuren en vrije nucleotiden even zwaar mee, dus ze kan DNA niet van RNA onderscheiden. Zuiverheidsverhoudingen hangen ook af van de pH en de gebruikte blanco.",
    },
  },
};

export default nl;
