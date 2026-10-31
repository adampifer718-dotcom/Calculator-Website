import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ShannonIndexText } from "../text/en";

const nl: CalculatorTranslation<ShannonIndexText> = {
  content: {
    title: "Calculator voor de Shannon-diversiteitsindex",
    shortTitle: "Shannon-diversiteitsindex",
    summary: "Bereken de Shannon-diversiteitsindex H′, de evenness van Pielou, het effectieve aantal soorten en de Simpson-indices uit het aantal individuen per soort.",
    metaTitle: "Shannon-diversiteitsindex – H′ en evenness berekenen",
    metaDescription:
      "Bereken de Shannon-index H′ uit soortentellingen in ln, log2 of log10, met de evenness J′ van Pielou, het effectieve aantal soorten en de Simpson-indices.",
    keywords: ["shannon-index", "shannon-wiener-index", "soortendiversiteit", "biodiversiteitsindex", "evenness pielou", "simpson-index", "soortenrijkdom", "ecologie"],
    intro: [
      "De Shannon-index H′ (ook Shannon-Wiener- of Shannon-Weaver-index genoemd) meet de diversiteit van een levensgemeenschap aan de hand van het aantal getelde individuen per soort. Hij stijgt met het aantal soorten en met hoe gelijkmatig de individuen over die soorten verdeeld zijn, en is 0 als er maar één soort voorkomt.",
      "Deze calculator geeft H′ in het grondtal van de logaritme dat je kiest, de evenness J′ van Pielou, het effectieve aantal soorten en de Simpson-index met de Gini-Simpson- en inverse vorm, plus een tabel met het aandeel van elke soort in het totaal.",
    ],
    howToUse: [
      "Vul voor elke soort het aantal getelde individuen in, één telling per soort, gescheiden door komma's, spaties of nieuwe regels.",
      "Kies het grondtal van de logaritme. De natuurlijke logaritme is in de ecologie het gebruikelijkst; grondtal 2 geeft H′ in bits.",
      "Lees H′ en de andere indices af. Tellingen van nul zijn toegestaan maar worden genegeerd, en het resultaat vermeldt hoeveel het er waren.",
    ],
    formulas: [
      { title: "Shannon-index", expression: "H′ = −Σ pᵢ log pᵢ, met pᵢ = nᵢ ÷ N", explanation: "nᵢ is het aantal individuen van soort i en N het totaal. Alleen soorten met nᵢ > 0 tellen mee." },
      { title: "Evenness van Pielou", expression: "J′ = H′ ÷ log S", explanation: "S is het aantal aanwezige soorten. J′ loopt van bijna 0 (één soort domineert) tot 1 (alle soorten even talrijk) en vereist S ≥ 2." },
      { title: "Effectief aantal soorten", expression: "D₁ = grondtal^H′ (e^H′ voor de natuurlijke logaritme)", explanation: "Het aantal even talrijke soorten dat dezelfde H′ zou geven. Het hangt niet af van het grondtal." },
      { title: "Simpson-index", expression: "D = Σ nᵢ(nᵢ − 1) ÷ (N(N − 1)); Gini-Simpson = 1 − D; invers = 1 ÷ D", explanation: "D is de kans dat twee willekeurig getrokken individuen, zonder terugleggen, tot dezelfde soort behoren." },
    ],
    examples: [
      {
        title: "Zes vogelsoorten langs een transect",
        steps: [
          "N = 100, dus de aandelen zijn 0,42, 0,27, 0,15, 0,09, 0,05 en 0,02.",
          "H′ = −(0,42 ln 0,42 + 0,27 ln 0,27 + … + 0,02 ln 0,02) ≈ 1,4472.",
          "J′ = 1,4472 ÷ ln 6 ≈ 0,808; effectief aantal e^1,4472 ≈ 4,25 soorten.",
          "Simpson-D = (42·41 + 27·26 + 15·14 + 9·8 + 5·4 + 2·1) ÷ (100·99) = 2.728 ÷ 9.900 ≈ 0,2756.",
        ],
      },
      {
        title: "Kwadranttellingen met afwezige soorten, in bits",
        steps: [
          "De twee nullen worden genegeerd: S = 5 soorten en N = 80 individuen.",
          "H′ = −Σ pᵢ log₂ pᵢ ≈ 2,0478 bits.",
          "J′ = 2,0478 ÷ log₂ 5 ≈ 0,882.",
        ],
      },
      {
        title: "Een gemeenschap gedomineerd door één soort, grondtal 10",
        steps: ["p = 0,60, 0,25, 0,10, 0,05.", "H′ = −Σ pᵢ log₁₀ pᵢ ≈ 0,4487.", "Effectief aantal 10^0,4487 ≈ 2,81 soorten."],
      },
    ],
    assumptions: [
      "De tellingen zijn een aselecte steekproef van de levensgemeenschap, en elk individu is tot op soort gedetermineerd. Zeldzame soorten worden in kleine steekproeven makkelijk gemist, wat H′ verlaagt.",
      "H′ gebruikt de waargenomen aandelen direct, zonder de correcties voor kleine steekproeven die sommige studies toepassen.",
      "Waarden in verschillende grondtallen verschillen een constante factor (H′ in bits = H′ in nats ÷ ln 2), dus vergelijk alleen indices met hetzelfde grondtal.",
      "De Simpson-index gebruikt hier de vorm voor eindige steekproeven, nᵢ(nᵢ − 1) ÷ (N(N − 1)). Sommige teksten gebruiken in plaats daarvan Σ pᵢ², wat bij kleine steekproeven iets andere waarden geeft.",
    ],
    faqs: [
      { question: "Wat is een hoge Shannon-index?", answer: "Er is geen vaste schaal: H′ groeit met het aantal soorten en de evenness, en het maximum is log S. Daarom zijn de evenness J′ (H′ ÷ log S) en het effectieve aantal soorten vaak makkelijker te interpreteren en te vergelijken." },
      { question: "Waarom worden tellingen van nul genegeerd?", answer: "Een soort zonder individuen heeft pᵢ = 0, en de term pᵢ log pᵢ gaat naar 0 als pᵢ kleiner wordt, dus hij draagt niets bij aan H′. Hij telt ook niet mee voor de soortenrijkdom S." },
      { question: "Hoe verschilt de Shannon-index van die van Simpson?", answer: "Beide combineren soortenrijkdom en evenness, maar de Simpson-index geeft de algemene soorten meer gewicht, terwijl H′ gevoeliger is voor zeldzame soorten. Als je beide rapporteert, of het effectieve aantal soorten, krijg je een vollediger beeld." },
    ],
    sourcesUsedFor: [
      "De Shannon-index H′ = −Σ pᵢ ln pᵢ met pᵢ = nᵢ ÷ N, en een uitgewerkt voorbeeld van de Shannon- en Simpson-index.",
      "De Simpson-index uit tellingen, Σ n(n − 1) ÷ (N(N − 1)).",
      "Evenness als H′ gedeeld door het maximum, log S, dat wordt bereikt als alle soorten even talrijk zijn.",
    ],
  },
  text: {
    counts: "Getelde individuen per soort",
    countsHelp: "Eén geheel getal per soort, gescheiden door komma's, spaties of nieuwe regels. Nullen worden genegeerd.",
    base: "Grondtal van de logaritme",
    bases: { e: "Natuurlijke logaritme (ln), de gebruikelijke keuze", "2": "Grondtal 2 (bits)", "10": "Grondtal 10" },
    errors: {
      empty: "Vul minstens één telling in.",
      tooMany: "Vul hoogstens {max} tellingen in.",
      notNumber: "„{token}” is geen getal. Scheid tellingen met komma's, spaties of nieuwe regels.",
      tooLarge: "„{token}” is te groot.",
      notInteger: "{value} is geen geheel getal. Vul het aantal individuen van elke soort in.",
      negative: "Tellingen kunnen niet negatief zijn ({value}).",
      countTooLarge: "Elke telling mag hoogstens {max} zijn.",
      allZero: "Vul minstens één telling groter dan nul in.",
    },
    result: "Shannon-index H′",
    caption: "H′ = −Σ pᵢ log pᵢ, met {log}",
    logNames: { e: "de natuurlijke logaritme", "2": "log met grondtal 2", "10": "log met grondtal 10" },
    richness: "Soortenrijkdom S",
    total: "Totaal aantal individuen N",
    evenness: "Evenness van Pielou J′",
    effective: "Effectief aantal soorten",
    simpson: "Simpson-index D",
    giniSimpson: "Gini-Simpson-index (1 − D)",
    inverseSimpson: "Inverse Simpson-index (1 ÷ D)",
    notAvailable: "Niet gedefinieerd voor deze tellingen",
    table: {
      caption: "Aandelen per soort",
      species: "Soort",
      count: "Aantal",
      proportion: "Aandeel pᵢ",
      term: "−pᵢ log pᵢ",
      label: "Soort {n}",
    },
    notes: {
      zeros: "Genegeerde tellingen van nul: {count}. Soorten zonder individuen dragen niet bij aan H′ of S.",
      single: "Maar één soort heeft individuen, dus H′ is 0 en de evenness is niet gedefinieerd.",
      simpsonUndefined: "Voor de Simpson-index zijn in totaal minstens 2 individuen nodig.",
      simpsonZero: "Elke soort heeft precies één individu, dus Simpsons D is 0 en de inverse is niet gedefinieerd.",
      truncated: "De tabel toont de eerste {shown} soorten met individuen.",
      general: "H′ hangt af van het grondtal van de logaritme: waarden in verschillende grondtallen verschillen een constante factor, maar de evenness J′ en het effectieve aantal soorten niet. Vergelijk indices alleen als ze hetzelfde grondtal en dezelfde steekproefinspanning gebruiken.",
    },
  },
};

export default nl;
