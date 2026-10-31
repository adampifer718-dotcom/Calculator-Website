import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AspectRatioText } from "../text/en";

const fr: CalculatorTranslation<AspectRatioText> = {
  content: {
    title: "Calculateur de format d’image",
    shortTitle: "Format d’image",
    summary: "Trouvez le format (rapport largeur/hauteur) d’une image ou d’un écran, redimensionnez sans déformation, ou calculez la largeur et la hauteur d’un écran à partir de sa diagonale.",
    metaTitle: "Calculateur de format d’image – Rapport, redimension, écran",
    metaDescription:
      "Réduisez une largeur × hauteur à son format d’image, trouvez le format courant le plus proche, redimensionnez au pixel près ou obtenez la taille d’un écran.",
    keywords: ["format d’image", "calcul format 16:9", "redimensionner image format", "taille d’écran", "rapport largeur hauteur", "format 21:9", "dimensions téléviseur diagonale", "ratio d’aspect"],
    intro: [
      "Le format d’image décrit la forme d’une image ou d’un écran : sa largeur comparée à sa hauteur, notée L:H. Une vidéo de 1920 × 1080 et une autre de 3840 × 2160 ont des tailles différentes mais le même format 16:9 : l’une peut donc être mise à l’échelle de l’autre sans être étirée.",
      "Ce calculateur remplit trois fonctions. Il réduit toute largeur et hauteur au plus petit rapport en nombres entiers et le compare aux formats courants ; il calcule le côté manquant lorsque vous redimensionnez à un format donné ; et il convertit la diagonale d’un écran en largeur, hauteur et surface. Pour les rapports entre grandeurs quelconques, voyez le Calculateur de ratio.",
    ],
    howToUse: [
      "Choisissez ce que vous voulez faire.",
      "Pour trouver un format, saisissez la largeur et la hauteur dans la même unité, généralement en pixels. Les décimales sont mises à l’échelle en nombres entiers avant la réduction du rapport.",
      "Pour redimensionner, saisissez le format (par exemple 16 et 9), indiquez si vous connaissez la nouvelle largeur ou la nouvelle hauteur, puis saisissez-la. L’autre côté s’affiche en valeur exacte et arrondi au pixel entier.",
      "Pour un écran, saisissez la diagonale en pouces ou en centimètres et le format. La largeur, la hauteur et la surface s’affichent dans les deux unités.",
    ],
    formulas: [
      {
        title: "Rapport simplifié",
        expression: "L:H = (largeur ÷ g) : (hauteur ÷ g), g = pgcd(largeur, hauteur)",
        explanation: "g est le plus grand commun diviseur, trouvé avec l’algorithme d’Euclide. Les tailles décimales sont d’abord multipliées par une puissance de 10 pour devenir des nombres entiers.",
      },
      {
        title: "Redimensionnement",
        expression: "nouvelle hauteur = nouvelle largeur × H ÷ L ;  nouvelle largeur = nouvelle hauteur × L ÷ H",
        explanation: "Garder le même format revient à multiplier les deux côtés par le même facteur.",
      },
      {
        title: "Taille d’écran",
        expression: "largeur = d × L ÷ √(L² + H²) ;  hauteur = d × H ÷ √(L² + H²)",
        explanation: "La diagonale d est l’hypoténuse d’un triangle rectangle dont les côtés sont dans le rapport L:H. La surface vaut largeur × hauteur.",
      },
      {
        title: "Écart avec un format courant",
        expression: "écart = (largeur ÷ hauteur) ÷ (Lc ÷ Hc) − 1",
        explanation: "Affiché en pourcentage. Le format courant le plus proche est celui dont l’écart est le plus faible.",
      },
    ],
    examples: [
      {
        title: "Un moniteur ultra-large de 2560 × 1080 pixels",
        steps: [
          "pgcd(2560, 1080) = 40",
          "2560 ÷ 40 = 64 et 1080 ÷ 40 = 27 : le format est donc 64:27",
          "64 ÷ 27 ≈ 2,3704 : 1,59 % plus large que « 21:9 » (2,3333) et 0,82 % plus étroit que 2,39:1, le format courant le plus proche",
        ],
      },
      {
        title: "Redimensionner une diapositive 4:3 à une hauteur de 900 pixels",
        steps: ["Nouvelle largeur = 900 × 4 ÷ 3 = 1 200", "Les deux côtés sont déjà des nombres entiers : aucun arrondi n’est nécessaire"],
      },
      {
        title: "Un écran de 81 cm au format 4:3",
        steps: ["√(4² + 3²) = 5", "Largeur = 81 × 4 ÷ 5 = 64,8 cm ; hauteur = 81 × 3 ÷ 5 = 48,6 cm", "Surface = 64,8 × 48,6 = 3 149,28 cm²"],
      },
    ],
    assumptions: [
      "La largeur et la hauteur utilisent la même unité et décrivent des pixels carrés. Certains anciens formats vidéo utilisent des pixels non carrés : leur taille stockée et leur forme affichée diffèrent donc.",
      "La liste des formats courants sert uniquement de comparaison. « 21:9 » en particulier est une appellation commerciale : les écrans de 2560 × 1080 sont en 64:27, et le format cinéma large est souvent indiqué comme 2,39:1.",
      "La diagonale d’un écran se mesure sur l’image visible. Le cadre, les bordures et la courbure des écrans incurvés ne sont pas pris en compte.",
    ],
    faqs: [
      {
        question: "Pourquoi 1366 × 768 n’est-il pas exactement en 16:9 ?",
        answer: "1366 × 768 se réduit à 683:384, soit environ 1,7786:1, à moins de 0,05 % de 16:9 (1,7778:1). Les fabricants d’écrans ont arrondi la largeur à un nombre pratique : il est donc vendu comme du 16:9 même si le rapport réduit ne l’est pas.",
      },
      {
        question: "Comment garder un format exact en redimensionnant ?",
        answer: "Choisissez une largeur multiple de la partie largeur du format. En 16:9, toute largeur multiple de 16, comme 1280 ou 1920, donne une hauteur entière. Les autres largeurs nécessitent un arrondi, qui modifie très légèrement la forme.",
      },
      {
        question: "Un écran 21:9 plus grand affiche-t-il plus qu’un écran 16:9 de même diagonale ?",
        answer: "Pas forcément. À diagonale égale, un écran plus large est moins haut, et sa surface est plus petite. Utilisez le mode taille d’écran pour les deux formats et comparez la hauteur et la surface.",
      },
    ],
    sourcesUsedFor: [
      "Le fait que « 21:9 » soit une appellation commerciale pour des écrans ultra-larges dont le format réel est 64:27 (environ 2,37:1), par exemple 2560 × 1080.",
      "Les résolutions des écrans ultra-larges et leurs rapports exacts, comme 2560 × 1080 (64:27).",
      "La largeur et la hauteur d’un écran à partir de la diagonale et du format, avec le théorème de Pythagore.",
    ],
  },
  text: {
    mode: "Que voulez-vous faire ?",
    modes: {
      simplify: "Trouver le format d’une taille",
      resize: "Redimensionner à un format",
      screen: "Taille d’écran à partir de la diagonale",
    },
    width: "Largeur",
    height: "Hauteur",
    sizeHelp: "En pixels ou dans toute autre unité, à condition que les deux utilisent la même. Les décimales sont acceptées.",
    ratioWidth: "Largeur du format (L)",
    ratioHeight: "Hauteur du format (H)",
    ratioHelp: "Pour 16:9, saisissez 16 et 9. Les formats décimaux comme 2,39:1 fonctionnent aussi.",
    knownSide: "Quel nouveau côté connaissez-vous ?",
    knownSides: { width: "La nouvelle largeur", height: "La nouvelle hauteur" },
    newSize: "Nouvelle taille",
    newSizeHelp: "La largeur ou la hauteur souhaitée, généralement en pixels.",
    diagonal: "Diagonale de l’écran",
    lengthUnit: "Unité de longueur",
    lengthUnits: { in: "Pouces (in)", cm: "Centimètres (cm)" },
    errors: {
      tooPrecise: "Utilisez au plus 6 décimales pour que le rapport puisse être simplifié exactement.",
      tooLarge: "Ces valeurs sont trop grandes pour être simplifiées exactement. Utilisez des nombres plus petits.",
    },
    ratioText: "{w}:{h}",
    sizeText: "{w} × {h}",
    sizeUnitText: "{w} × {h} {unit}",
    primaryRatio: "Format simplifié",
    primaryResize: "Nouvelle taille (pixels entiers)",
    primaryScreen: "Largeur × hauteur de l’écran",
    captionSimplify: "{w} × {h} se réduit à {ratio} en divisant les deux côtés par {gcd}.",
    captionResize: "En gardant le format {ratio} : {side} de {size}.",
    captionScreen: "Une diagonale de {diagonal} {unit} au format {ratio}.",
    sides: { width: "une largeur", height: "une hauteur" },
    decimalRatio: "Rapport décimal (largeur ÷ hauteur)",
    decimalSuffix: ":1",
    nearest: "Format courant le plus proche",
    difference: "Écart avec le format courant le plus proche",
    orientation: "Orientation",
    orientations: { landscape: "Paysage (plus large que haut)", portrait: "Portrait (plus haut que large)", square: "Carré" },
    pixels: "Nombre total de pixels (si la taille est en pixels)",
    inputRatio: "Rapport sous forme irréductible",
    exactWidth: "Largeur exacte",
    exactHeight: "Hauteur exacte",
    roundedWidth: "Largeur arrondie au pixel entier",
    roundedHeight: "Hauteur arrondie au pixel entier",
    roundedRatio: "Rapport décimal après arrondi",
    screenWidth: "Largeur",
    screenHeight: "Hauteur",
    screenArea: "Surface de l’écran",
    otherWidth: "Largeur en {unit}",
    otherHeight: "Hauteur en {unit}",
    otherArea: "Surface en {unit}",
    table: {
      caption: "Formats courants comparés au vôtre",
      ratio: "Format",
      decimal: "Décimal (L ÷ H)",
      difference: "Votre format comparé à celui-ci",
    },
    notes: {
      marketing: "« 21:9 » est une appellation commerciale. Les moniteurs ultra-larges comme le 2560 × 1080 sont en réalité en 64:27 (environ 2,37:1), et le 3440 × 1440 en 43:18 (environ 2,39:1).",
      rounding: "L’arrondi au pixel entier modifie très légèrement la forme. Les largeurs multiples de {w}, ou les hauteurs multiples de {h}, gardent le format exact.",
      roundingSimple: "L’arrondi au pixel entier modifie très légèrement la forme.",
      diagonal: "La taille d’un écran se mesure en diagonale sur l’image visible. Le cadre (bordure) n’est pas inclus, et les écrans incurvés sont mesurés le long de la courbe.",
      difference: "L’écart compare votre rapport décimal à chaque format courant : une valeur positive signifie que votre forme est plus large.",
    },
  },
};

export default fr;
