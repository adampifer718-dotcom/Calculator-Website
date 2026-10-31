import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ProteinConcentrationText } from "../text/en";

const nl: CalculatorTranslation<ProteinConcentrationText> = {
  content: {
    title: "Eiwitconcentratiecalculator (A280)",
    shortTitle: "Eiwitconcentratie",
    summary: "Reken een A280-absorbantie met de wet van Lambert-Beer om naar een eiwitconcentratie in mg/mL en µM, uit een molaire of massa-extinctiecoëfficiënt.",
    metaTitle: "Eiwitconcentratiecalculator – A280 naar mg/mL",
    metaDescription:
      "Reken A280-metingen om naar eiwitconcentratie in mg/mL en µM met een molaire of massa-extinctiecoëfficiënt, of schat ε uit Trp, Tyr en cystines.",
    keywords: ["eiwitconcentratie", "a280", "extinctiecoëfficiënt", "wet van lambert-beer", "molaire absorptiecoëfficiënt", "eiwitbepaling", "mg/ml", "tryptofaan tyrosine"],
    intro: [
      "Eiwitten absorberen ultraviolet licht rond 280 nm, vooral door de aromatische aminozuren tryptofaan en tyrosine, met een kleine bijdrage van disulfidebruggen (cystines). Volgens de wet van Lambert-Beer is de absorbantie evenredig met de concentratie, de weglengte en een extinctiecoëfficiënt die voor elk eiwit anders is.",
      "Deze calculator rekent een A280-meting om naar een concentratie. Je kunt een molaire extinctiecoëfficiënt ε met het molecuulgewicht opgeven, een massa-extinctiecoëfficiënt (de absorbantie van een oplossing van 1 mg/mL), of het aantal Trp, Tyr en cystines in de sequentie om ε te schatten.",
    ],
    howToUse: [
      "Kies hoe je de extinctiecoëfficiënt opgeeft.",
      "Vul de blanco-gecorrigeerde A280 in, de weglengte en de verdunningsfactor als je het monster voor de meting hebt verdund.",
      "Vul ε en het molecuulgewicht in, de massa-extinctiecoëfficiënt, of het aantal tryptofanen, tyrosines en disulfidebruggen plus het molecuulgewicht.",
      "Vul eventueel het volume van de stockoplossing in om de totale hoeveelheid eiwit te krijgen.",
    ],
    formulas: [
      { title: "Wet van Lambert-Beer", expression: "c (M) = A × verdunning ÷ (ε × l)", explanation: "A is de gemeten absorbantie, ε de molaire extinctiecoëfficiënt in M⁻¹ cm⁻¹ en l de weglengte in cm." },
      { title: "Massaconcentratie", expression: "c (mg/mL) = c (M) × MW (g/mol)", explanation: "Mol per liter maal gram per mol geeft gram per liter, en dat is gelijk aan milligram per milliliter." },
      { title: "Massa-extinctiecoëfficiënt", expression: "c (mg/mL) = A × verdunning ÷ (E0.1% × l), met E0.1% = ε ÷ MW", explanation: "E0.1% is de absorbantie van een oplossing van 1 mg/mL (0,1%) over 1 cm." },
      { title: "Geschatte ε (Pace et al. 1995)", expression: "ε₂₈₀ = 5.500 × nTrp + 1.490 × nTyr + 125 × nCystine", explanation: "In M⁻¹ cm⁻¹, voor een gevouwen eiwit in water. Een cystine is een disulfidebrug tussen twee cysteïnes." },
    ],
    examples: [
      {
        title: "Uit een bekende molaire extinctiecoëfficiënt",
        steps: [
          "c = 0,72 ÷ (43.824 × 1) = 1,643 × 10⁻⁵ M = 16,43 µM.",
          "mg/mL = 1,643 × 10⁻⁵ mol/L × 66.463 g/mol = 1,092 g/L = 1,092 mg/mL.",
          "In 2 mL: 1,092 × 2 ≈ 2,18 mg.",
        ],
      },
      {
        title: "ε schatten uit de sequentie",
        steps: [
          "ε = 5.500 × 6 + 1.490 × 3 + 125 × 4 = 37.970 M⁻¹ cm⁻¹.",
          "c = 0,5 ÷ 37.970 = 1,317 × 10⁻⁵ M = 13,17 µM.",
          "mg/mL = 1,317 × 10⁻⁵ × 14.307 ≈ 0,1884 mg/mL.",
        ],
      },
      {
        title: "Met een massa-extinctiecoëfficiënt, een korte weglengte en een verdunning",
        steps: ["Corrigeer voor de verdunning: 0,88 × 4 = 3,52.", "mg/mL = 3,52 ÷ (1,45 × 0,5 cm) ≈ 4,855 mg/mL."],
      },
    ],
    assumptions: [
      "De A280-meting is blanco-gecorrigeerd tegen dezelfde buffer en ligt binnen het lineaire bereik van het instrument. Veel spectrofotometers zijn bij hoge absorbantie niet meer lineair, dus zeer geconcentreerde monsters moet je verdunnen.",
      "De extinctiecoëfficiënt geldt voor jouw eiwit in zijn buffer. Schattingen uit de aminozuursamenstelling zijn redelijk betrouwbaar voor eiwitten met tryptofaan en minder betrouwbaar voor eiwitten zonder; ε meten is beter dan voorspellen.",
      "Alle stoffen die bij 280 nm absorberen, tellen mee, waaronder nucleïnezuren, sommige buffers en licht dat door aggregaten wordt verstrooid. Daardoor valt het resultaat te hoog uit.",
      "De verdunningsfactor wordt op de absorbantie toegepast voordat de concentratie wordt berekend, dus het resultaat geldt voor de onverdunde stockoplossing.",
    ],
    faqs: [
      { question: "Waarom is mg/mL gelijk aan g/L?", answer: "Een milliliter is een duizendste liter en een milligram is een duizendste gram, dus de twee duizendsten vallen tegen elkaar weg. Daarom geeft molariteit (mol/L) maal het molecuulgewicht (g/mol) direct mg/mL." },
      { question: "Wat als ik de extinctiecoëfficiënt niet weet?", answer: "Ken je de sequentie, tel dan de tryptofanen, tyrosines en disulfidebruggen en gebruik de schattingsmodus. Voor een onbekend mengsel wordt soms een massa-extinctiecoëfficiënt van ongeveer 1,0 als ruwe richtlijn gebruikt, maar het resultaat kan er een flinke factor naast zitten." },
      { question: "Moet ik cysteïnes of cystines tellen?", answer: "Cystines: elke disulfidebrug tussen twee cysteïnes telt één keer. Vrije cysteïnes (gereduceerde thiolen) absorberen nauwelijks bij 280 nm. Vul voor een volledig gereduceerd eiwit 0 cystines in." },
    ],
    sourcesUsedFor: [
      "De schatting ε₂₈₀ = 5.500 × Trp + 1.490 × Tyr + 125 × cystine voor een gevouwen eiwit in water, en de lagere betrouwbaarheid ervan voor eiwitten zonder tryptofaan.",
      "Het berekenen van de concentratie uit A280 met een massa-extinctiecoëfficiënt, en de ruwe vuistregel dat een eiwitoplossing van 1 mg/mL over 1 cm een A280 van ongeveer 1,0 geeft.",
    ],
  },
  text: {
    mode: "Extinctiecoëfficiënt",
    modes: {
      molar: "Molaire ε (M⁻¹ cm⁻¹) en molecuulgewicht",
      mass: "Massa-extinctiecoëfficiënt E0.1% (1 mg/mL)",
      residues: "ε schatten uit het aantal Trp, Tyr en cystines",
    },
    a280: "Absorbantie bij 280 nm (A280)",
    a280Help: "De blanco-gecorrigeerde meting van het gemeten (eventueel verdunde) monster.",
    pathLength: "Weglengte",
    pathLengthHelp: "1 cm voor een standaardcuvet. Laat 1 staan als je instrument de absorbantie al genormaliseerd naar 1 cm geeft.",
    dilution: "Verdunningsfactor",
    dilutionHelp: "Totaal volume ÷ monstervolume, als je het monster voor de meting hebt verdund. Vul 1 in als er niet verdund is.",
    epsilon: "Molaire extinctiecoëfficiënt ε",
    epsilonHelp: "Bij 280 nm, in M⁻¹ cm⁻¹, bijvoorbeeld uit de sequentie van het eiwit of een database.",
    mw: "Molecuulgewicht",
    mwHelp: "In dalton (g/mol). 1 kDa = 1.000 Da.",
    mwOptional: "Molecuulgewicht (optioneel)",
    mwOptionalHelp: "Optioneel, in dalton (g/mol). Nodig voor de molaire concentratie (µM).",
    e01: "Massa-extinctiecoëfficiënt E0.1%",
    e01Help: "De absorbantie bij 280 nm van een oplossing van 1 mg/mL over 1 cm. Ongeveer 1,0 is een gangbare ruwe waarde voor onbekende eiwitten.",
    trp: "Tryptofaanresiduen (Trp, W)",
    tyr: "Tyrosineresiduen (Tyr, Y)",
    cystine: "Cystines (disulfidebruggen)",
    cystineHelp: "Het aantal disulfidebruggen, die elk twee cysteïnes verbinden. Vrije cysteïnes absorberen nauwelijks bij 280 nm.",
    volume: "Monstervolume",
    volumeHelp: "Optioneel. Volume van de onverdunde stockoplossing, om de totale hoeveelheid eiwit te berekenen.",
    errors: {
      noChromophores: "Zonder Trp, Tyr of cystine is ε bij 280 nm nul en kan de concentratie niet worden berekend. Gebruik een andere methode.",
    },
    result: "Eiwitconcentratie",
    caption: "A280 × verdunning ÷ (ε × weglengte)",
    micromolar: "Molaire concentratie",
    totalMass: "Totaal eiwit in {volume} mL",
    epsilonUsed: "Gebruikte molaire ε",
    e01Used: "Gebruikte massa-extinctiecoëfficiënt E0.1%",
    a280Normalized: "A280 per 1 cm weglengte (zoals gemeten)",
    notes: {
      range: "De gemeten absorbantie per cm ligt boven ongeveer 1,5. Veel spectrofotometers zijn bij hoge absorbantie niet meer lineair, dus controleer het bereik van je instrument en overweeg het monster te verdunnen.",
      low: "De gemeten absorbantie per cm ligt onder ongeveer 0,1, waar metingen vaak minder nauwkeurig zijn ten opzichte van ruis en blancofouten.",
      pace: "ε = 5.500 × Trp + 1.490 × Tyr + 125 × cystine is een schatting voor een gevouwen eiwit in water (Pace et al., 1995). Voor eiwitten zonder tryptofaan is die minder betrouwbaar.",
      noTrp: "Dit eiwit bevat geen tryptofaan, dus de geschatte ε is minder betrouwbaar.",
      general: "A280 telt elke stof mee die bij 280 nm absorbeert, waaronder nucleïnezuren en andere verontreinigingen, en gaat ervan uit dat de extinctiecoëfficiënt klopt voor jouw eiwit.",
    },
  },
};

export default nl;
