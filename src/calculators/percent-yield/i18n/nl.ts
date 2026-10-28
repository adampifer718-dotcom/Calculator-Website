import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PercentYieldText } from "../text/en";

const nl: CalculatorTranslation<PercentYieldText> = {
  content: {
    title: "Rendementscalculator voor chemische reacties",
    shortTitle: "Procentueel rendement",
    summary: "Bereken het procentuele rendement van een reactie uit de werkelijke en theoretische opbrengst, of bereken de theoretische opbrengst uit het aantal mol en een kloppende reactievergelijking.",
    metaTitle: "Rendementscalculator: procentueel rendement en opbrengst",
    metaDescription:
      "Bereken het procentuele rendement uit de werkelijke en theoretische opbrengst, of de theoretische opbrengst uit mol beperkende stof, coëfficiënten en formule.",
    keywords: ["rendement berekenen", "procentueel rendement", "theoretische opbrengst", "werkelijke opbrengst", "beperkende reactant", "stoichiometrie", "scheikunde practicum"],
    intro: [
      "De theoretische opbrengst is de hoeveelheid product die een kloppende reactievergelijking voorspelt als de beperkende reactant volledig is verbruikt. De werkelijke opbrengst is wat je opvangt. Het procentuele rendement vergelijkt die twee en laat zien hoe efficiënt de reactie en de opwerking waren.",
      "Als je de theoretische opbrengst al kent, vul je beide massa's in. Anders vul je het aantal mol van de beperkende reactant in, de coëfficiënten uit de kloppende reactievergelijking en de formule of molaire massa van het product, en berekent de calculator eerst de theoretische opbrengst.",
    ],
    howToUse: [
      "Kies of je de theoretische opbrengst kent of die wilt laten berekenen uit het aantal mol.",
      "Kies de eenheid van massa en vul de werkelijke opbrengst in die je hebt opgevangen.",
      "Vul de theoretische opbrengst in, of het aantal mol beperkende reactant, beide coëfficiënten en de formule van het product (of de molaire massa ervan).",
      "Lees het procentuele rendement, de theoretische opbrengst en het massaverlies af.",
    ],
    formulas: [
      { title: "Procentueel rendement", expression: "rendement = werkelijke opbrengst ÷ theoretische opbrengst × 100%", explanation: "Beide opbrengsten moeten in dezelfde eenheid staan, zodat de eenheden tegen elkaar wegvallen." },
      { title: "Theoretische opbrengst uit mol", expression: "theoretisch (g) = n(beperkend) × (coëfficiënt product ÷ coëfficiënt reactant) × M(product)", explanation: "De verhouding van de coëfficiënten zet mol beperkende reactant om in mol product; de molaire massa zet mol om in gram." },
      { title: "Massaverlies", expression: "verlies = theoretische opbrengst − werkelijke opbrengst", explanation: "Ook weergegeven als aandeel van de theoretische opbrengst, wat gelijk is aan 100% min het rendement." },
    ],
    examples: [
      {
        title: "Kristallen uit een synthese in het lab",
        steps: ["Rendement = 4,25 g ÷ 5,6 g × 100%", "≈ 75,89%", "Massaverlies = 5,6 − 4,25 = 1,35 g"],
      },
      {
        title: "Aspirine uit 0,0200 mol salicylzuur",
        steps: ["Eén salicylzuur geeft één aspirine, dus de verhouding is 1 ÷ 1.", "M(C9H8O4) = 9 × 12,011 + 8 × 1,008 + 4 × 15,999 = 180,159 g/mol", "Theoretische opbrengst = 0,0200 × 180,159 ≈ 3,6032 g", "Rendement = 2,95 ÷ 3,6032 × 100% ≈ 81,87%"],
      },
      {
        title: "Ammoniak met waterstof als beperkende reactant",
        steps: ["N₂ + 3 H₂ → 2 NH₃, dus 0,90 mol H₂ × 2 ÷ 3 = 0,60 mol NH₃", "Theoretische opbrengst = 0,60 × 17,031 = 10,2186 g", "Rendement = 8,1 ÷ 10,2186 × 100% ≈ 79,27%"],
      },
    ],
    assumptions: [
      "De beperkende reactant is bekend. Weet je het niet zeker, bereken dan hoeveel product elke reactant zou kunnen geven; de reactant die het minste product geeft, is beperkend.",
      "De reactievergelijking klopt en geeft één hoofdproduct. Bijproducten worden niet meegeteld.",
      "Molaire massa's uit een formule gebruiken de verkorte standaardatoommassa's van de IUPAC. De resultaten zijn maar zo nauwkeurig als de massa's die je meet.",
      "De werkelijke opbrengst moet het droge, gezuiverde product zijn. Oplosmiddel of verontreinigingen laten het rendement hoger lijken dan het is.",
    ],
    faqs: [
      { question: "Kan het rendement hoger zijn dan 100%?", answer: "Niet bij een zuiver, droog product, want massa kan niet ontstaan. Een resultaat boven 100% betekent meestal dat het product nog nat is, verontreinigingen of niet-gereageerde uitgangsstof bevat, of dat een massa verkeerd is gemeten of genoteerd." },
      { question: "Waarom is mijn rendement lager dan verwacht?", answer: "Nevenreacties verbruiken reactanten, veel reacties stoppen voordat ze volledig zijn verlopen, en er gaat altijd wat product verloren bij het filtreren, overbrengen of herkristalliseren. Rendementen ruim onder 100% zijn normaal, vooral bij syntheses in meerdere stappen." },
      { question: "Gebruik ik mol of gram?", answer: "Het rendement zelf vergelijkt massa's (of mol) van het product, en de eenheid valt weg. Voor de theoretische opbrengst heb je mol nodig, omdat de coëfficiënten van een kloppende reactievergelijking hoeveelheden in mol aan elkaar koppelen, niet in gram." },
    ],
    sourcesUsedFor: ["De definities van theoretische opbrengst, werkelijke opbrengst, procentueel rendement en beperkende reactant."],
  },
  text: {
    mode: "Theoretische opbrengst",
    modes: { direct: "Die weet ik", stoichiometry: "Bereken die uit het aantal mol" },
    unit: "Eenheid van massa",
    actual: "Werkelijke opbrengst",
    actualHelp: "De massa product die je werkelijk hebt opgevangen (bij voorkeur droog en zuiver).",
    theoretical: "Theoretische opbrengst",
    theoreticalHelp: "De massa product die de kloppende reactievergelijking voorspelt, in dezelfde eenheid als de werkelijke opbrengst.",
    moles: "Aantal mol beperkende reactant",
    molesHelp: "De reactant die als eerste op is. Deel de massa door de molaire massa om het aantal mol te krijgen.",
    reactantCoef: "Coëfficiënt van de beperkende reactant",
    productCoef: "Coëfficiënt van het product",
    coefHelp: "Uit de kloppende reactievergelijking. In N₂ + 3 H₂ → 2 NH₃ heeft H₂ coëfficiënt 3 en NH₃ coëfficiënt 2.",
    massSource: "Molaire massa van het product uit",
    massSources: { formula: "Chemische formule", molarMass: "Waarde van de molaire massa" },
    formula: "Formule van het product",
    formulaHelp: "Elementsymbolen zijn hoofdlettergevoelig, bijv. C9H8O4 of Ca(OH)2. De molaire massa wordt berekend uit de standaardatoommassa's.",
    molarMass: "Molaire massa van het product",
    formulaErrors: {
      empty: "Vul een chemische formule in.",
      tooLong: "De formule is te lang. Gebruik hoogstens 200 tekens.",
      invalidChar: "Ongeldig teken “{token}” op positie {position}. Gebruik alleen elementsymbolen, getallen, haakjes en hydraatpunten.",
      lowercase: "Onverwachte kleine letter “{token}” op positie {position}. Elementsymbolen beginnen met een hoofdletter, bijv. Na of Cl.",
      unknownElement: "Onbekend elementsymbool “{token}” op positie {position}.",
      noStandardWeight: "{token} (positie {position}) heeft geen standaardatoommassa, dus de molaire massa kan niet worden berekend.",
      unclosed: "Haakjes kloppen niet: de “{token}” op positie {position} wordt nergens gesloten.",
      unexpectedClose: "Haakjes kloppen niet: bij de “{token}” op positie {position} hoort geen openingshaakje.",
      mismatched: "Haakjes passen niet bij elkaar: de “{token}” op positie {position} hoort niet bij het haakje dat hij sluit.",
      emptyGroup: "De groep tussen haakjes die begint op positie {position} is leeg.",
      zeroCount: "Het aantal op positie {position} is nul. Aantallen moeten hele getallen van minstens 1 zijn.",
      misplacedNumber: "Het getal op positie {position} hoort niet bij een element of groep.",
      misplacedDot: "De hydraatpunt op positie {position} moet tussen twee delen van de formule staan, bijv. CuSO4·5H2O.",
      tooManyAtoms: "De formule heeft te veel atomen. Gebruik in totaal hoogstens 1.000.000 atomen.",
    },
    result: "Procentueel rendement",
    caption: "Werkelijke opbrengst ÷ theoretische opbrengst × 100",
    theoreticalResult: "Theoretische opbrengst",
    productMoles: "Theoretisch aantal mol product",
    molarMassUsed: "Gebruikte molaire massa van het product",
    loss: "Massaverlies (theoretisch − werkelijk)",
    excess: "Massa boven de theoretische opbrengst",
    lossPercent: "Verloren aandeel van de theoretische opbrengst",
    excessPercent: "Aandeel boven de theoretische opbrengst",
    notes: {
      over100: "Een rendement boven 100% is natuurkundig niet mogelijk voor een zuiver, droog product. Meestal betekent het dat het product nog nat is of verontreinigingen of resten reagens bevat, of dat een massa of hoeveelheid verkeerd is gemeten.",
      zero: "Er is geen product opgevangen, dus het rendement is 0%.",
      general: "Gebruikelijke oorzaken van een rendement onder 100% zijn nevenreacties, reacties die niet volledig verlopen en product dat verloren gaat bij het overbrengen, filtreren of zuiveren.",
    },
  },
};

export default nl;
