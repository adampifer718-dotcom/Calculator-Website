import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ResistorColorCodeText } from "../text/en";

const fr: CalculatorTranslation<ResistorColorCodeText> = {
  content: {
    title: "Calculateur de code couleur des résistances",
    shortTitle: "Code couleur des résistances",
    summary: "Lisez la valeur, la tolérance et le coefficient de température d’une résistance à 4, 5 ou 6 bandes d’après ses couleurs, ou trouvez les bandes de couleur d’une résistance.",
    metaTitle: "Code couleur des résistances – 4, 5 et 6 bandes",
    metaDescription:
      "Décodez les couleurs des résistances à 4, 5 ou 6 bandes en ohms, tolérance et coefficient de température, ou trouvez les bandes pour une valeur comme 4.7k.",
    keywords: ["code couleur résistance", "calcul code couleur résistance", "résistance 4 bandes", "résistance 5 bandes", "résistance 6 bandes", "couleurs résistance en ohms", "CEI 60062", "tolérance résistance"],
    intro: [
      "Les petites résistances traversantes sont trop petites pour qu’on y imprime une valeur : elles portent donc des bandes de couleur. La norme internationale CEI 60062 attribue à chaque couleur un chiffre de 0 (noir) à 9 (blanc) ; les bandes qui suivent les chiffres donnent un multiplicateur en puissance de dix, la tolérance et, sur les composants de précision, le coefficient de température.",
      "Choisissez 4, 5 ou 6 bandes et sélectionnez les couleurs pour lire la résistance, sa plage de tolérance et son coefficient de température. Ou faites l’inverse : saisissez une valeur comme 4.7k et obtenez les couleurs d’une résistance à 4 ou 5 bandes.",
    ],
    howToUse: [
      "Pour lire une résistance, choisissez « Couleurs vers valeur » et le nombre de bandes. Tenez la résistance avec la bande de tolérance (souvent or, argent ou un peu à l’écart) à droite.",
      "Sélectionnez les couleurs de gauche à droite : les bandes de chiffres, le multiplicateur, la tolérance et, sur les composants à 6 bandes, le coefficient de température. Chaque liste n’affiche que les couleurs valables pour cette bande.",
      "Pour trouver les couleurs d’une valeur, choisissez « Valeur vers couleurs », saisissez la résistance (par exemple 470, 4.7k, 4k7 ou 2.2M), puis choisissez 4 ou 5 bandes et une tolérance.",
    ],
    formulas: [
      {
        title: "Résistance",
        expression: "R = (chiffres significatifs) × 10ⁿ Ω",
        explanation: "Deux bandes de chiffres sur une résistance à 4 bandes, trois sur celles à 5 et 6 bandes. La bande multiplicatrice fixe n, de −2 (argent) et −1 (or) à 9 (blanc).",
      },
      {
        title: "Plage de tolérance",
        expression: "R_min = R × (1 − tol) ;  R_max = R × (1 + tol)",
        explanation: "Par exemple ±5 % pour l’or. Sans bande de tolérance, la tolérance est de ±20 %.",
      },
      {
        title: "Coefficient de température",
        expression: "ΔR = R × TCR × ΔT",
        explanation: "Le TCR s’exprime en parties par million par kelvin : 100 ppm/K signifie que la résistance varie de 0,1 % pour une variation de 10 K.",
      },
    ],
    examples: [
      {
        title: "Jaune, violet, rouge, or (4 bandes)",
        steps: ["Chiffres : jaune 4, violet 7, donc 47", "Multiplicateur rouge : × 100, donc 4 700 Ω = 4,7 kΩ", "Tolérance or ±5 % : de 4 465 Ω à 4 935 Ω"],
      },
      {
        title: "Marron, noir, noir, rouge, marron, rouge (6 bandes)",
        steps: [
          "Chiffres : 1, 0, 0, donc 100",
          "Multiplicateur rouge : × 100, donc 10 000 Ω = 10 kΩ",
          "Tolérance marron ±1 % : de 9,9 kΩ à 10,1 kΩ",
          "Sixième bande rouge : 50 ppm/K, soit environ 5 Ω de plus ou de moins tous les 10 K",
        ],
      },
      {
        title: "Couleurs de 4k7 sur une résistance à 5 bandes, 1 %",
        steps: ["4k7 = 4 700 Ω = 470 × 10¹", "Chiffres 4, 7, 0 : jaune, violet, noir", "Multiplicateur 10¹ : marron ; tolérance 1 % : marron"],
      },
    ],
    assumptions: [
      "La signification des couleurs suit la norme CEI 60062 pour les chiffres, les multiplicateurs, les couleurs de tolérance courantes et la bande de coefficient de température. Certaines couleurs rarement utilisées et des variantes anciennes ou propres à un fabricant ne sont pas incluses.",
      "La conversion valeur vers couleurs n’accepte que les valeurs que le nombre de bandes de chiffres choisi peut représenter exactement, à partir de 0,1 Ω. Elle ne vérifie pas si la valeur appartient à une série E normalisée.",
      "Les couleurs sont difficiles à distinguer sous certains éclairages et sur des composants anciens ou abîmés par la chaleur. Un multimètre donne la valeur définitive.",
    ],
    faqs: [
      {
        question: "Par quelle extrémité commencer la lecture ?",
        answer: "Commencez par l’extrémité où les bandes sont plus proches du bord, et gardez à droite la bande de tolérance, souvent or ou argent, un peu à l’écart ou plus large. L’or et l’argent ne commencent jamais le code : si l’une de ces couleurs se trouve à une extrémité, lisez depuis l’autre.",
      },
      {
        question: "Quelle est la différence entre les résistances à 4, 5 et 6 bandes ?",
        answer: "Une résistance à 4 bandes a deux chiffres significatifs, donc des valeurs comme 4,7 kΩ. Une résistance à 5 bandes en a trois, pour des valeurs de précision comme 4,99 kΩ, et généralement une tolérance plus serrée. Une résistance à 6 bandes ajoute au code à 5 bandes une bande de coefficient de température.",
      },
      {
        question: "Pourquoi ne puis-je pas obtenir les couleurs de 4.99k avec 4 bandes ?",
        answer: "4.99k comporte trois chiffres significatifs, mais un code à 4 bandes n’a que deux bandes de chiffres. Choisissez 5 bandes, ou arrondissez à la valeur la plus proche que deux chiffres peuvent représenter.",
      },
    ],
    sourcesUsedFor: [
      "Le fait que les couleurs du noir au blanc indiquent les chiffres de 0 à 9 et, avec l’or et l’argent, les bandes de multiplicateur, de tolérance et de coefficient de température.",
      "Les couleurs de tolérance : marron ±1 %, rouge ±2 %, vert ±0,5 %, bleu ±0,25 %, violet ±0,1 %, or ±5 % et argent ±10 %.",
      "Le fait qu’une résistance à 4 bandes sans bande de tolérance soit à ±20 %.",
      "Les couleurs de coefficient de température de la sixième bande en ppm/K.",
    ],
  },
  text: {
    mode: "Que voulez-vous faire ?",
    modes: { decode: "Couleurs vers valeur", encode: "Valeur vers couleurs" },
    bands: "Nombre de bandes",
    bandCounts: { "4": "4 bandes", "5": "5 bandes", "6": "6 bandes" },
    encodeBandCounts: { "4": "4 bandes (2 chiffres)", "5": "5 bandes (3 chiffres)" },
    band1: "Bande 1 : premier chiffre",
    band2: "Bande 2 : deuxième chiffre",
    band3: "Bande 3 : troisième chiffre",
    multiplier: "Bande multiplicatrice",
    tolerance: "Bande de tolérance",
    tcr: "Bande de coefficient de température (6e bande)",
    value: "Résistance",
    valueHelp: "Par exemple 470, 4.7k, 4k7, 2.2M ou 0.47. Utilisez k pour kilo, M pour méga et G pour giga ; R ou un point décimal marque la position de la virgule. Une virgule fonctionne aussi comme séparateur décimal.",
    colors: {
      black: "Noir",
      brown: "Marron",
      red: "Rouge",
      orange: "Orange",
      yellow: "Jaune",
      green: "Vert",
      blue: "Bleu",
      violet: "Violet",
      grey: "Gris",
      white: "Blanc",
      gold: "Or",
      silver: "Argent",
      none: "Aucune (pas de bande)",
    },
    colorOption: "{color} – {meaning}",
    errors: {
      invalidValue: "Saisissez une résistance comme 470, 4.7k, 4k7 ou 2.2M.",
      ambiguousM: "Utilisez un M majuscule pour les mégohms. Pour les valeurs inférieures à 1 Ω, utilisez un nombre décimal comme 0.47 ou R47.",
      zero: "La résistance doit être supérieure à 0 Ω.",
      tooManyDigits: "{value} nécessite {digits} chiffres significatifs, mais une résistance à {bands} bandes n’en affiche que {max}. Choisissez 5 bandes ou arrondissez la valeur.",
      tooSmall: "Cette valeur est trop petite pour le code couleur. Le plus petit multiplicateur est l’argent (× 0,01).",
      tooLarge: "Cette valeur est trop grande pour le code couleur. Le plus grand multiplicateur est le blanc (× 1 000 000 000).",
      noneNeedsFour: "Seules les résistances à 4 bandes peuvent ne pas avoir de bande de tolérance (±20 %). Choisissez une couleur de tolérance.",
    },
    valueText: "{value} {prefix}Ω",
    resistance: "Résistance",
    bandsResult: "Bandes de couleur",
    captionDecode: "{bands} : {digits} × {multiplier}, tolérance ±{tolerance}.",
    captionEncode: "{value} en résistance à {bands} bandes avec une tolérance de ±{tolerance}.",
    bandSeparator: " – ",
    ohms: "Résistance en ohms",
    toleranceResult: "Tolérance",
    toleranceText: "±{value}",
    minimum: "Minimum dans la tolérance",
    maximum: "Maximum dans la tolérance",
    tcrResult: "Coefficient de température",
    tcrText: "{value} ppm/K",
    tcrChange: "Variation pour une hausse de température de 10 K (10 °C)",
    significantDigits: "Chiffres significatifs",
    multiplierResult: "Multiplicateur",
    table: {
      caption: "Bande par bande",
      band: "Bande",
      color: "Couleur",
      meaning: "Signification",
      bandLabel: "Bande {n}",
    },
    meanings: {
      digit: "Chiffre {n}",
      multiplier: "× {n}",
      tolerance: "Tolérance ±{n}",
      tcr: "{n} ppm/K",
    },
    notes: {
      reading: "Lisez depuis l’extrémité où les bandes sont regroupées ; la bande de tolérance est généralement à l’écart et souvent plus large. L’or et l’argent ne sont jamais la première bande.",
      noTolerance: "Sans bande de tolérance, la résistance est à ±20 %.",
      colors: "Certaines couleurs se ressemblent sous certains éclairages, en particulier le rouge, l’orange et le marron, ou le gris et le blanc. En cas de doute, mesurez la résistance avec un multimètre.",
      tcr: "Le coefficient de température indique de combien la résistance varie avec la température : {value} signifie une variation de {percent} tous les 10 K.",
    },
  },
};

export default fr;
