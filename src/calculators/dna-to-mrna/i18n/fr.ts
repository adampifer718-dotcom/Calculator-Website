import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DnaToMrnaText } from "../text/en";

const leftoverOne = "{n} base à la fin ne forme pas un codon complet et n’est pas traduite.";
const leftoverMany = "{n} bases à la fin ne forment pas un codon complet et ne sont pas traduites.";

const fr: CalculatorTranslation<DnaToMrnaText> = {
  content: {
    title: "Calculateur ADN en ARNm et protéine",
    shortTitle: "ADN en ARNm",
    summary: "Transcrivez une séquence d’ADN en ARNm et traduisez-la en protéine avec le code génétique standard, avec le brin complémentaire et le taux de GC.",
    metaTitle: "Calculateur ADN en ARNm – Transcription et traduction",
    metaDescription:
      "Convertissez un brin d’ADN codant ou matrice en ARNm, puis en protéine en code à une et à trois lettres selon le code génétique standard, avec le taux de GC.",
    keywords: ["ADN en ARNm", "transcription", "traduction", "codon", "code génétique", "complément inverse", "séquence protéique", "acides aminés"],
    intro: [
      "Un gène est copié en ARN messager (transcription), puis l’ARNm est lu trois bases à la fois pour construire une protéine (traduction). Cet outil réalise ces deux étapes pour la séquence d’ADN que vous collez, avec le code génétique standard commun à la plupart des organismes.",
      "L’ARNm a la même séquence que le brin codant (sens), avec de l’uracile (U) à la place de la thymine (T). Si vous disposez plutôt du brin matrice (antisens), l’ARNm est son complément inverse. Vous obtenez aussi le brin d’ADN complémentaire, la protéine en code à une lettre et à trois lettres, le nombre de codons et le taux de GC.",
    ],
    howToUse: [
      "Collez la séquence d’ADN. Majuscules et minuscules sont acceptées, et les espaces, sauts de ligne et numéros de position d’un fichier de séquence sont ignorés.",
      "Indiquez si la séquence est le brin codant ou le brin matrice. Les deux se lisent 5′→3′, comme les séquences sont habituellement écrites.",
      "Choisissez où commence la traduction : à la première base, ou au premier codon d’initiation AUG de l’ARNm.",
      "Choisissez si la traduction s’arrête au premier codon stop, ou si elle continue et marque chaque stop d’un *.",
    ],
    formulas: [
      {
        title: "Transcription (brin codant)",
        expression: "ARNm = brin codant avec T → U",
        explanation: "L’ARNm est synthétisé sur le brin matrice : il correspond donc base pour base au brin codant, sauf que l’ARN utilise U au lieu de T.",
      },
      {
        title: "Transcription (brin matrice)",
        expression: "ARNm = complément inverse de la matrice, avec T → U",
        explanation: "Chaque base est appariée (A–U, T–A, C–G, G–C) et le résultat est inversé pour se lire 5′→3′.",
      },
      {
        title: "Traduction",
        expression: "codon (3 bases) → acide aminé, de l’initiation jusqu’au premier UAA, UAG ou UGA",
        explanation: "Les codons sont recherchés dans le code génétique standard (table de traduction 1 du NCBI). AUG code la méthionine et est le codon d’initiation habituel.",
      },
      {
        title: "Taux de GC",
        expression: "GC % = (G + C) ÷ nombre total de bases × 100",
        explanation: "La part des bases de l’ADN qui sont des guanines ou des cytosines. Elle est identique pour les deux brins.",
      },
    ],
    examples: [
      {
        title: "Un brin codant traduit à partir du premier AUG",
        steps: [
          "Remplacer T par U : GCAUGCCGUGGAAAUAGC.",
          "Le premier AUG commence à la base 3 : le cadre de lecture est donc AUG CCG UGG AAA UAG, et il reste une base (C).",
          "AUG = Met, CCG = Pro, UGG = Trp, AAA = Lys, UAG = stop.",
          "Protéine : MPWK (Met-Pro-Trp-Lys).",
        ],
      },
      {
        title: "Un brin matrice",
        steps: [
          "Complément inverse de TCACTTAGCCAT : ATGGCTAAGTGA.",
          "Remplacer T par U : AUG GCU AAG UGA.",
          "AUG = Met, GCU = Ala, AAG = Lys, UGA = stop, ce qui donne MAK.",
        ],
      },
      {
        title: "Lecture à travers les codons stop",
        steps: [
          "Majuscules, espaces supprimés et T → U : AUG UAA CAG UGG UAG.",
          "AUG = Met, UAA = stop, CAG = Gln, UGG = Trp, UAG = stop.",
          "Avec la lecture continue, la protéine s’affiche M*QW*.",
        ],
      },
    ],
    assumptions: [
      "Le code génétique standard (table de traduction 1 du NCBI) est utilisé. Les mitochondries et certains microbes utilisent d’autres codes, dans lesquels quelques codons ont un autre sens.",
      "La séquence est traitée comme une seule région codante continue. Les introns, l’épissage, l’édition de l’ARN et les autres maturations des gènes réels ne sont pas modélisés.",
      "Seul AUG sert de codon d’initiation lorsque vous partez du premier AUG ; les rares codons d’initiation alternatifs sont ignorés.",
      "Les deux brins sont saisis et affichés 5′→3′. Le brin complémentaire est affiché sous forme de complément inverse, pour se lire lui aussi 5′→3′.",
    ],
    faqs: [
      {
        question: "Quel brin dois-je choisir ?",
        answer: "La plupart des bases de données donnent le brin codant (sens), dont la séquence correspond à l’ARNm, U remplaçant T. Ne choisissez le brin matrice (antisens) que si votre séquence est celle que lit l’ARN polymérase, c’est-à-dire le brin complémentaire de l’ARNm.",
      },
      {
        question: "Pourquoi la protéine s’arrête-t-elle tôt ?",
        answer: "La traduction se termine au premier codon stop (UAA, UAG ou UGA) du cadre de lecture. Si vous attendiez une protéine plus longue, vérifiez le brin et le point de départ choisis, ou passez en lecture continue pour voir où se trouvent les stops.",
      },
      {
        question: "Que sont les bases restantes à la fin ?",
        answer: "Un codon compte trois bases. Si le nombre de bases après le point de départ n’est pas un multiple de trois, la ou les deux dernières bases ne peuvent pas former un codon et ne sont donc pas traduites.",
      },
    ],
    sourcesUsedFor: [
      "La table des codons : l’acide aminé codé par chacun des 64 codons, et les codons stop UAA, UAG et UGA.",
      "La transcription à partir du brin matrice, l’ARNm identique au brin codant avec U à la place de T, et la lecture des codons d’un codon d’initiation à un codon stop.",
    ],
  },
  text: {
    sequence: "Séquence d’ADN",
    sequenceHelp: "Lettres A, C, G et T, en majuscules ou en minuscules. Les espaces, sauts de ligne et numéros de position sont ignorés.",
    strand: "La séquence est le…",
    strands: {
      coding: "Brin codant (sens), 5′→3′",
      template: "Brin matrice (antisens), 5′→3′",
    },
    frame: "Commencer la traduction à",
    frames: {
      first: "La première base",
      aug: "Le premier AUG (codon d’initiation)",
    },
    stops: "À un codon stop",
    stopModes: {
      stop: "Arrêter la traduction",
      readThrough: "Continuer et le marquer d’un *",
    },
    errors: {
      invalidChar: "« {char} » (caractère {position}) n’est pas une base d’ADN. Utilisez uniquement A, C, G et T.",
      empty: "Saisissez au moins une base (A, C, G ou T).",
      tooLong: "Saisissez au plus {max} bases.",
      noAug: "L’ARNm ne contient aucun codon d’initiation AUG. Choisissez « La première base » pour le traduire malgré tout.",
    },
    result: "ARNm (5′→3′)",
    caption: "Groupé en codons depuis le début du cadre de lecture.",
    complement: "Brin d’ADN complémentaire (5′→3′)",
    proteinOne: "Protéine (code à une lettre)",
    proteinThree: "Protéine (code à trois lettres)",
    noProtein: "(aucun codon complet traduit)",
    length: "Longueur de l’ARNm",
    bases: "bases",
    codonsInFrame: "Codons complets dans le cadre de lecture",
    codonsTranslated: "Codons traduits",
    aminoAcids: "Acides aminés de la protéine",
    gc: "Taux de GC",
    notes: {
      stopped: "La traduction s’est arrêtée au codon {codon} ({stop}), un codon stop. La protéine ci-dessus se termine avant lui.",
      noStop: "Aucun codon stop n’a été atteint avant la fin de la séquence : la protéine est peut-être incomplète.",
      readThrough: "Les codons stop ont été lus et sont affichés sous la forme * (Ter dans le code à trois lettres).",
      augStart: "Le premier AUG commence à la base {position} de l’ARNm. Les bases qui le précèdent ne sont pas traduites.",
      leftover: {
        zero: leftoverOne,
        one: leftoverOne,
        two: leftoverMany,
        few: leftoverMany,
        many: leftoverMany,
        other: leftoverMany,
      },
      template: "L’ARNm est le complément inverse du brin matrice saisi, avec U à la place de T.",
      general: "Ce calcul utilise le code génétique standard (table 1 du NCBI) et ignore les introns, l’épissage et les codons d’initiation alternatifs. Les gènes réels peuvent nécessiter un autre code ou une maturation.",
    },
  },
};

export default fr;
