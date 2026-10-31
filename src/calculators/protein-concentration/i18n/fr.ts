import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ProteinConcentrationText } from "../text/en";

const fr: CalculatorTranslation<ProteinConcentrationText> = {
  content: {
    title: "Calculateur de concentration en protéines (A280)",
    shortTitle: "Concentration en protéines",
    summary: "Convertissez une absorbance A280 en concentration protéique en mg/mL et en µM avec la loi de Beer-Lambert, à partir d’un coefficient d’extinction molaire ou massique.",
    metaTitle: "Calculateur de concentration en protéines – A280 en mg/mL",
    metaDescription:
      "Convertissez une A280 en concentration protéique en mg/mL et en µM avec un coefficient d’extinction molaire ou massique, ou estimez ε à partir de Trp, Tyr et cystines.",
    keywords: ["concentration en protéines", "A280", "coefficient d’extinction", "loi de Beer-Lambert", "coefficient d’absorption molaire", "dosage des protéines", "mg/mL", "tryptophane tyrosine"],
    intro: [
      "Les protéines absorbent la lumière ultraviolette vers 280 nm, surtout grâce aux acides aminés aromatiques tryptophane et tyrosine, avec une petite contribution des ponts disulfure (cystines). Selon la loi de Beer-Lambert, l’absorbance est proportionnelle à la concentration, au trajet optique et à un coefficient d’extinction propre à chaque protéine.",
      "Ce calculateur convertit une lecture A280 en concentration. Vous pouvez fournir un coefficient d’extinction molaire ε avec la masse moléculaire, un coefficient d’extinction massique (l’absorbance d’une solution à 1 mg/mL), ou le nombre de Trp, de Tyr et de cystines de la séquence pour estimer ε.",
    ],
    howToUse: [
      "Choisissez comment vous fournissez le coefficient d’extinction.",
      "Saisissez l’A280 corrigée du blanc, le trajet optique et le facteur de dilution si vous avez dilué l’échantillon avant la mesure.",
      "Saisissez ε et la masse moléculaire, le coefficient d’extinction massique, ou le nombre de tryptophanes, de tyrosines et de ponts disulfure, ainsi que la masse moléculaire.",
      "Saisissez éventuellement le volume de la solution mère pour obtenir la quantité totale de protéine.",
    ],
    formulas: [
      {
        title: "Loi de Beer-Lambert",
        expression: "c (M) = A × dilution ÷ (ε × l)",
        explanation: "A est l’absorbance mesurée, ε le coefficient d’extinction molaire en M⁻¹ cm⁻¹ et l le trajet optique en cm.",
      },
      {
        title: "Concentration massique",
        expression: "c (mg/mL) = c (M) × MM (g/mol)",
        explanation: "Des moles par litre multipliées par des grammes par mole donnent des grammes par litre, soit des milligrammes par millilitre.",
      },
      {
        title: "Coefficient d’extinction massique",
        expression: "c (mg/mL) = A × dilution ÷ (E0.1% × l), avec E0.1% = ε ÷ MM",
        explanation: "E0.1% est l’absorbance d’une solution à 1 mg/mL (0,1 %) sur 1 cm.",
      },
      {
        title: "ε estimé (Pace et al. 1995)",
        expression: "ε₂₈₀ = 5 500 × nTrp + 1 490 × nTyr + 125 × nCystine",
        explanation: "En M⁻¹ cm⁻¹, pour une protéine repliée dans l’eau. Une cystine est un pont disulfure entre deux cystéines.",
      },
    ],
    examples: [
      {
        title: "À partir d’un coefficient d’extinction molaire connu",
        steps: [
          "c = 0,72 ÷ (43 824 × 1) = 1,643 × 10⁻⁵ M = 16,43 µM.",
          "mg/mL = 1,643 × 10⁻⁵ mol/L × 66 463 g/mol = 1,092 g/L = 1,092 mg/mL.",
          "Dans 2 mL : 1,092 × 2 ≈ 2,18 mg.",
        ],
      },
      {
        title: "Estimation de ε à partir de la séquence",
        steps: [
          "ε = 5 500 × 6 + 1 490 × 3 + 125 × 4 = 37 970 M⁻¹ cm⁻¹.",
          "c = 0,5 ÷ 37 970 = 1,317 × 10⁻⁵ M = 13,17 µM.",
          "mg/mL = 1,317 × 10⁻⁵ × 14 307 ≈ 0,1884 mg/mL.",
        ],
      },
      {
        title: "Avec un coefficient d’extinction massique, un trajet court et une dilution",
        steps: ["Correction de la dilution : 0,88 × 4 = 3,52.", "mg/mL = 3,52 ÷ (1,45 × 0,5 cm) ≈ 4,855 mg/mL."],
      },
    ],
    assumptions: [
      "La lecture A280 est corrigée par un blanc du même tampon et se situe dans la plage linéaire de l’appareil. Beaucoup de spectrophotomètres perdent leur linéarité aux fortes absorbances : diluez donc les échantillons très concentrés.",
      "Le coefficient d’extinction s’applique à votre protéine dans son tampon. Les estimations fondées sur la composition en acides aminés sont assez fiables pour les protéines qui contiennent du tryptophane, et moins fiables pour celles qui n’en ont pas ; mesurer ε vaut mieux que le prédire.",
      "Toutes les substances qui absorbent à 280 nm sont prises en compte, y compris les acides nucléiques, certains tampons et la lumière diffusée par les agrégats. Elles donnent un résultat trop élevé.",
      "Le facteur de dilution est appliqué à l’absorbance avant le calcul de la concentration : le résultat concerne donc la solution mère non diluée.",
    ],
    faqs: [
      {
        question: "Pourquoi les mg/mL sont-ils égaux aux g/L ?",
        answer: "Un millilitre est un millième de litre et un milligramme un millième de gramme : les deux millièmes s’annulent. C’est pourquoi la molarité (mol/L) multipliée par la masse moléculaire (g/mol) donne directement des mg/mL.",
      },
      {
        question: "Et si je ne connais pas le coefficient d’extinction ?",
        answer: "Si vous connaissez la séquence, comptez les tryptophanes, les tyrosines et les ponts disulfure, et utilisez le mode d’estimation. Pour un mélange inconnu, on utilise parfois un coefficient d’extinction massique d’environ 1,0 comme repère grossier, mais le résultat peut alors être faux d’un facteur important.",
      },
      {
        question: "Faut-il compter les cystéines ou les cystines ?",
        answer: "Les cystines : chaque pont disulfure entre deux cystéines compte une fois. Les cystéines libres (thiols réduits) absorbent très peu à 280 nm. Pour une protéine entièrement réduite, saisissez 0 cystine.",
      },
    ],
    sourcesUsedFor: [
      "L’estimation ε₂₈₀ = 5 500 × Trp + 1 490 × Tyr + 125 × cystine pour une protéine repliée dans l’eau, et sa moindre fiabilité pour les protéines sans tryptophane.",
      "Le calcul de la concentration à partir de l’A280 avec un coefficient d’extinction massique, et le repère approximatif selon lequel une solution protéique à 1 mg/mL donne une A280 d’environ 1,0 sur 1 cm.",
    ],
  },
  text: {
    mode: "Coefficient d’extinction",
    modes: {
      molar: "ε molaire (M⁻¹ cm⁻¹) et masse moléculaire",
      mass: "Coefficient d’extinction massique E0.1% (1 mg/mL)",
      residues: "Estimer ε à partir du nombre de Trp, Tyr et cystines",
    },
    a280: "Absorbance à 280 nm (A280)",
    a280Help: "La lecture corrigée du blanc de l’échantillon mesuré (éventuellement dilué).",
    pathLength: "Trajet optique",
    pathLengthHelp: "1 cm pour une cuve standard. Gardez 1 si votre appareil donne déjà une absorbance ramenée à 1 cm.",
    dilution: "Facteur de dilution",
    dilutionHelp: "Volume total ÷ volume d’échantillon, si vous avez dilué l’échantillon avant la mesure. Saisissez 1 sans dilution.",
    epsilon: "Coefficient d’extinction molaire ε",
    epsilonHelp: "À 280 nm, en M⁻¹ cm⁻¹, par exemple d’après la séquence de la protéine ou une fiche de base de données.",
    mw: "Masse moléculaire",
    mwHelp: "En daltons (g/mol). 1 kDa = 1 000 Da.",
    mwOptional: "Masse moléculaire (facultatif)",
    mwOptionalHelp: "Facultatif, en daltons (g/mol). Nécessaire pour la concentration molaire (µM).",
    e01: "Coefficient d’extinction massique E0.1%",
    e01Help: "L’absorbance à 280 nm d’une solution à 1 mg/mL sur 1 cm. Environ 1,0 est une valeur approximative courante pour les protéines inconnues.",
    trp: "Résidus de tryptophane (Trp, W)",
    tyr: "Résidus de tyrosine (Tyr, Y)",
    cystine: "Cystines (ponts disulfure)",
    cystineHelp: "Le nombre de ponts disulfure, reliant chacun deux cystéines. Les cystéines libres n’absorbent presque pas à 280 nm.",
    volume: "Volume de l’échantillon",
    volumeHelp: "Facultatif. Volume de la solution mère non diluée, pour obtenir la quantité totale de protéine.",
    errors: {
      noChromophores: "Sans Trp, Tyr ni cystine, ε à 280 nm est nul et la concentration ne peut pas être calculée. Utilisez une autre méthode.",
    },
    result: "Concentration en protéines",
    caption: "A280 × dilution ÷ (ε × trajet optique)",
    micromolar: "Concentration molaire",
    totalMass: "Protéine totale dans {volume} mL",
    epsilonUsed: "ε molaire utilisé",
    e01Used: "Coefficient d’extinction massique E0.1% utilisé",
    a280Normalized: "A280 pour un trajet de 1 cm (telle que mesurée)",
    notes: {
      range: "L’absorbance mesurée par cm dépasse environ 1,5. Beaucoup de spectrophotomètres ne sont plus linéaires aux fortes absorbances : vérifiez la plage de votre appareil et envisagez de diluer l’échantillon.",
      low: "L’absorbance mesurée par cm est inférieure à environ 0,1, où les lectures sont souvent moins précises par rapport au bruit et aux erreurs de blanc.",
      pace: "ε = 5 500 × Trp + 1 490 × Tyr + 125 × cystine est une estimation pour une protéine repliée dans l’eau (Pace et al., 1995). Elle est moins fiable pour les protéines sans tryptophane.",
      noTrp: "Cette protéine ne contient pas de tryptophane : le ε estimé est donc moins fiable.",
      general: "L’A280 prend en compte toutes les substances qui absorbent à 280 nm, y compris les acides nucléiques et d’autres contaminants, et suppose que le coefficient d’extinction convient à votre protéine.",
    },
  },
};

export default fr;
