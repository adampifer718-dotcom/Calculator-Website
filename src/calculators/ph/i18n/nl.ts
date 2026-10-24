import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PhText } from "../text/en";

const nl: CalculatorTranslation<PhText> = {
  content: {
    title: "pH-calculator",
    shortTitle: "pH",
    summary: "Bereken pH, pOH, [H⁺] en [OH⁻] uit een waterstofionconcentratie, een pH of pOH, of de concentratie van een sterk zuur, een sterke base of een zwak zuur.",
    metaTitle: "pH-calculator – pH, pOH, [H⁺] en [OH⁻] bij 25 °C",
    metaDescription:
      "Bereken pH en pOH uit [H⁺], uit de concentratie van een sterk zuur of sterke base, of uit de concentratie en Ka of pKa van een zwak zuur, met [H⁺] en [OH⁻].",
    keywords: ["pH berekenen", "pOH berekenen", "waterstofionconcentratie", "pH zwak zuur", "pH sterk zuur", "pKa", "Ka", "zuur of basisch"],
    intro: [
      "De pH geeft aan hoe zuur of basisch een waterige oplossing is. Het is de negatieve logaritme met grondtal 10 van de waterstofionconcentratie, dus elke stap van één pH-eenheid is een factor tien: een oplossing met pH 3 bevat tien keer zoveel H⁺ als een oplossing met pH 4. Bij 25 °C is pH 7 neutraal, lager is zuur en hoger is basisch.",
      "Deze calculator rekent om tussen pH, pOH, [H⁺] en [OH⁻], en berekent de pH van een sterk zuur, een sterke base of een zwak zuur uit de concentratie. De formules voor sterke zuren en basen nemen de ionen van het water zelf mee, zodat ook extreem verdunde oplossingen een zinnige uitkomst geven.",
    ],
    howToUse: [
      "Kies wat je weet: [H⁺], pH, pOH, of de concentratie van een sterk zuur, een sterke base of een zwak zuur.",
      "Vul de waarde in. Concentraties zijn in mol/L en mogen in e-notatie, dus 3,2 × 10⁻⁵ typ je als 3.2e-5.",
      "Vul bij een zwak zuur ook de sterkte in als pKa of Ka.",
      "Lees de pH en pOH af, beide ionconcentraties en of de oplossing zuur, neutraal of basisch is.",
    ],
    formulas: [
      {
        title: "pH en pOH",
        expression: "pH = −log₁₀[H⁺]   pOH = −log₁₀[OH⁻]\npH + pOH = 14   (Kw = [H⁺][OH⁻] = 1,0 × 10⁻¹⁴ bij 25 °C)",
        explanation: "Concentraties zijn in mol/L.",
      },
      {
        title: "Sterk eenwaardig zuur",
        expression: "[H⁺] = (C + √(C² + 4Kw)) ÷ 2",
        explanation:
          "Volgt uit de ladingsbalans [H⁺] = C + [OH⁻]. Voor C ruim boven 10⁻⁶ mol/L is dit gewoon [H⁺] ≈ C. Een sterke base gebruikt dezelfde formule voor [OH⁻].",
      },
      {
        title: "Zwak eenwaardig zuur",
        expression: "Ka = x² ÷ (C − x)   ⇒   x = [H⁺] = (−Ka + √(Ka² + 4·Ka·C)) ÷ 2",
        explanation: "De exacte oplossing van de vierkantsvergelijking, zonder de vereenvoudiging x ≪ C en zonder H⁺ uit water. Ka = 10^(−pKa).",
      },
    ],
    examples: [
      {
        title: "Een zoutzuuroplossing van 0,025 mol/L",
        steps: ["[H⁺] = (0,025 + √(0,025² + 4 × 10⁻¹⁴)) ÷ 2 ≈ 0,025 mol/L", "pH = −log₁₀(0,025) ≈ 1,602", "pOH = 14 − 1,602 = 12,398"],
      },
      {
        title: "Een zwak zuur van 0,05 mol/L met pKa 4,76",
        steps: [
          "Ka = 10^(−4,76) ≈ 1,738 × 10⁻⁵",
          "[H⁺] = (−Ka + √(Ka² + 4 × Ka × 0,05)) ÷ 2 ≈ 9,235 × 10⁻⁴ mol/L",
          "pH = −log₁₀(9,235 × 10⁻⁴) ≈ 3,035, met ongeveer 1,85% van het zuur geïoniseerd",
        ],
      },
      {
        title: "Een oplossing met [H⁺] = 2,5 × 10⁻⁹ mol/L",
        steps: ["pH = −log₁₀(2,5 × 10⁻⁹) ≈ 8,602", "pOH = 14 − 8,602 = 5,398", "De pH is hoger dan 7, dus de oplossing is basisch"],
      },
    ],
    assumptions: [
      "Alles wordt berekend voor 25 °C, waarbij Kw = 1,0 × 10⁻¹⁴ en neutraal water pH 7 heeft. Bij andere temperaturen verandert Kw, en daarmee ook het neutrale punt en pH + pOH.",
      "Er wordt met concentraties gerekend in plaats van activiteiten. Dat werkt goed voor verdunde oplossingen, maar wordt onnauwkeurig boven ongeveer 0,1 mol/L, en pH-waarden onder 0 of boven 14 zijn slechts een ruwe schatting.",
      "Zuren en basen zijn eenwaardig: elk geeft één H⁺ of OH⁻ af. De modus voor zwakke zuren negeert de H⁺ uit water, dus is niet betrouwbaar als het zuur extreem verdund of extreem zwak is.",
    ],
    faqs: [
      {
        question: "Waarom is de pH van 10⁻⁸ mol/L HCl niet 8?",
        answer: "Omdat een zuur water niet basisch kan maken. Bij die verdunning levert het water zelf ongeveer 10⁻⁷ mol/L H⁺, meer dan het zuur. De formule die hier wordt gebruikt neemt de bijdrage van het water mee en geeft een pH van ongeveer 6,98.",
      },
      {
        question: "Wat is het verschil tussen Ka en pKa?",
        answer: "pKa is −log₁₀ van Ka, net zoals pH −log₁₀ van [H⁺] is. Een kleinere pKa (grotere Ka) betekent een sterker zuur. Een pKa van 4,76 komt overeen met een Ka van ongeveer 1,74 × 10⁻⁵.",
      },
      {
        question: "Kan de pH negatief zijn?",
        answer: "Ja. Een sterk zuur dat geconcentreerder is dan 1 mol/L heeft een [H⁺] boven 1, dus een pH onder 0. Bij zulke concentraties wijken echte oplossingen wel sterk af van de eenvoudige formules, dus zie het getal als een ruwe richtlijn.",
      },
    ],
    sourcesUsedFor: [
      "Kw = 1,0 × 10⁻¹⁴ bij 25 °C, pH = −log[H₃O⁺], pOH = −log[OH⁻] en pH + pOH = 14,00.",
      "De zuurconstante Ka en evenwichtsberekeningen voor zwakke zuren, inclusief de ionisatiegraad in procent.",
    ],
  },
  text: {
    mode: "Bereken uit",
    modes: {
      hydrogen: "Waterstofionconcentratie [H⁺]",
      ph: "pH",
      poh: "pOH",
      strongAcid: "Concentratie sterk zuur",
      strongBase: "Concentratie sterke base",
      weakAcid: "Concentratie zwak zuur en Ka",
    },
    hydrogen: "Concentratie [H⁺]",
    concentrationHelp: "In mol/L. Je kunt e-notatie typen, bijv. 2.5e-9 voor 2,5 × 10⁻⁹.",
    ph: "pH",
    poh: "pOH",
    phRangeHelp: "Meestal tussen 0 en 14. Waarden van −2 tot 16 worden geaccepteerd.",
    concentration: "Concentratie (C)",
    concentrationModeHelp:
      "Molaire concentratie in mol/L van een eenwaardig zuur (één H⁺, zoals HCl of azijnzuur) of een base met één OH⁻ (zoals NaOH). E-notatie zoals 1e-8 wordt geaccepteerd.",
    constantType: "Zuursterkte opgegeven als",
    constantTypes: { pka: "pKa", ka: "Ka" },
    ka: "Zuurconstante (Ka)",
    kaHelp: "E-notatie wordt geaccepteerd, bijv. 6.3e-5.",
    pka: "pKa",
    errors: {
      notNumber: "Vul een positief getal in, zoals 0,001 of 1e-3.",
      notPositive: "De waarde moet groter zijn dan 0.",
      tooConcentrated: "Vul hoogstens {max} mol/L in. Voor geconcentreerdere oplossingen zijn de formules niet zinvol.",
      kaTooLarge: "Vul een Ka van hoogstens {max} in. Een zuur dat zo sterk is, gedraagt zich als een sterk zuur.",
    },
    phResult: "pH",
    pohResult: "pOH",
    hResult: "Waterstofionconcentratie [H⁺]",
    ohResult: "Hydroxide-ionconcentratie [OH⁻]",
    ionization: "Ionisatiegraad (%)",
    nature: "Zuur, neutraal of basisch (bij 25 °C)",
    natures: { acidic: "Zuur", neutral: "Neutraal", basic: "Basisch" },
    captions: {
      hydrogen: "pH = −log₁₀[H⁺]",
      ph: "[H⁺] = 10^(−pH)",
      poh: "pH = 14 − pOH",
      strongAcid: "[H⁺] = (C + √(C² + 4Kw)) ÷ 2",
      strongBase: "[OH⁻] = (C + √(C² + 4Kw)) ÷ 2",
      weakAcid: "[H⁺] = (−Ka + √(Ka² + 4·Ka·C)) ÷ 2",
    },
    notes: {
      kw: "Gebruikt Kw = 1,0 × 10⁻¹⁴ bij 25 °C, dus pH + pOH = 14. Concentraties worden gebruikt in plaats van activiteiten.",
      outside:
        "De pH ligt buiten 0–14. Dat gebeurt alleen in zeer geconcentreerde oplossingen, waar concentraties een slechte vervanging voor activiteiten zijn en de uitkomst slechts een benadering is.",
      weak: "De formule voor zwakke zuren negeert de H⁺ die van het water zelf komt.",
      weakDilute: "Het zuur levert minder dan 1 × 10⁻⁶ mol/L H⁺, dus de ionen van het water zelf zijn niet verwaarloosbaar en de werkelijke pH ligt dichter bij 7 dan hier staat.",
      dilute: "De oplossing is zo verdund dat de ionen uit water meetellen. De formule neemt ze mee, daarom blijft de pH aan de juiste kant van 7.",
    },
  },
};

export default nl;
