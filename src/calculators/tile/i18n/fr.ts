import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TileText } from "../text/en";

const fr: CalculatorTranslation<TileText> = {
  content: {
    title: "Calculateur de carrelage",
    shortTitle: "Carrelage",
    summary: "Estimez le nombre de carreaux et de boîtes nécessaires pour un sol ou un mur à partir de la surface, de la taille des carreaux, du joint et d’une marge de perte.",
    metaTitle: "Calculateur de carrelage – Combien de carreaux et de boîtes",
    metaDescription:
      "Estimez le nombre de carreaux d’un sol ou d’un mur selon la surface, la taille des carreaux et le joint, avec marge de perte et arrondi aux boîtes entières.",
    keywords: ["calcul carrelage", "combien de carreaux", "carrelage sol", "carrelage mural", "joint de carrelage", "boîtes de carrelage", "perte carrelage", "crédence"],
    intro: [
      "Avant d’acheter du carrelage, il faut un nombre de carreaux, et pas seulement une surface. Ce calculateur divise la surface à couvrir par l’espace occupé par chaque carreau, joint compris, puis ajoute une marge de perte pour les coupes et la casse.",
      "Saisissez les dimensions de la surface et d’un carreau, choisissez une largeur de joint et un pourcentage de perte, et éventuellement le nombre de carreaux par boîte. Vous obtenez le nombre de carreaux à acheter et, si vous avez indiqué la contenance d’une boîte, le nombre de boîtes.",
    ],
    howToUse: [
      "Choisissez les unités US (surface en pieds, carreau et joint en pouces) ou métriques (surface en mètres, carreau et joint en millimètres).",
      "Saisissez la longueur et la largeur de la surface à carreler. Pour une pièce en L, découpez-la en rectangles, faites le calcul pour chacun et additionnez les résultats.",
      "Saisissez la longueur et la largeur du carreau, ainsi que la largeur du joint.",
      "Indiquez une marge de perte et, si vous la connaissez, le nombre de carreaux par boîte.",
      "Lisez le nombre de carreaux nécessaires et de boîtes à acheter.",
    ],
    formulas: [
      { title: "Surface par carreau avec joint", expression: "a = (longueur du carreau + g) × (largeur du carreau + g)", explanation: "Chaque carreau occupe sa propre taille plus une largeur de joint g dans chaque direction." },
      {
        title: "Carreaux nécessaires",
        expression: "carreaux = ⌈surface ÷ a × (1 + perte %)⌉",
        explanation: "Divisez la surface par l’espace occupé par carreau, ajoutez la marge de perte et arrondissez au carreau entier supérieur. Les tailles de carreaux sont converties avec 144 in² par ft² ou 1 000 000 mm² par m².",
      },
      { title: "Boîtes", expression: "boîtes = ⌈carreaux ÷ carreaux par boîte⌉", explanation: "Arrondissez à l’entier supérieur, car les boîtes se vendent entières." },
    ],
    examples: [
      {
        title: "Un sol de 10 × 14 ft avec des carreaux de 18 pouces",
        steps: ["Surface = 10 × 14 = 140 ft²", "Par carreau = 18,25 × 18,25 = 333,0625 in² ≈ 2,3129 ft²", "140 ÷ 2,3129 ≈ 60,53 carreaux ; × 1,10 ≈ 66,58, arrondi à 67 carreaux"],
      },
      {
        title: "Une salle de bains de 3,2 × 2,5 m avec des carreaux de 600 × 300 mm, 8 par boîte",
        steps: ["Surface = 3,2 × 2,5 = 8 m²", "Par carreau = 602 × 302 = 181 804 mm² = 0,181804 m²", "8 ÷ 0,181804 ≈ 44,00 ; × 1,12 ≈ 49,28, arrondi à 50 carreaux", "50 ÷ 8 = 6,25, donc 7 boîtes"],
      },
      {
        title: "Une crédence de 8 × 5 ft avec des carreaux de 4 pouces",
        steps: ["Surface = 8 × 5 = 40 ft²", "Par carreau = 4,0625 × 4,0625 ≈ 16,504 in² ≈ 0,11461 ft²", "40 ÷ 0,11461 ≈ 349,01 ; × 1,15 ≈ 401,36, arrondi à 402 carreaux"],
      },
    ],
    assumptions: [
      "La surface est un simple rectangle. Les poses réelles avec beaucoup de coupes, des frises, des niches ou des motifs comme la pose en diagonale ou en chevrons peuvent demander plus de carreaux que cette estimation.",
      "La marge de perte est à votre choix. Environ 10 % est un point de départ courant pour une pose droite ; c’est une règle empirique usuelle, pas une norme.",
      "L’estimation ne concerne que les carreaux. Elle ne couvre ni la colle, ni le joint, ni les profilés, ni la préparation du support ; pour cela, suivez les instructions des fabricants des carreaux et des produits.",
    ],
    faqs: [
      {
        question: "Pourquoi tenir compte du joint ?",
        answer: "Chaque joint augmente un peu l’espace couvert par chaque carreau, si bien qu’il faut moins de carreaux. Avec de petits carreaux et des joints larges, l’écart peut atteindre plusieurs pour cent.",
      },
      {
        question: "Combien de carrelage en plus faut-il acheter ?",
        answer: "Beaucoup de poseurs ajoutent environ 10 % pour une pose droite, et davantage pour une pose en diagonale, à motifs ou dans une pièce avec de nombreux angles. Garder quelques carreaux de réserve aide aussi pour les réparations futures.",
      },
      {
        question: "Comment mesurer une pièce en L ?",
        answer: "Découpez-la en deux rectangles, faites le calcul pour chacun avec les mêmes réglages de carreaux, puis additionnez les deux nombres de carreaux.",
      },
    ],
    sourcesUsedFor: ["Aire d’un rectangle, utilisée pour la surface à carreler et pour chaque carreau avec son joint."],
  },
  text: {
    units: "Unités",
    unitSystems: { imperial: "US (ft, in)", metric: "Métrique (m, mm)" },
    areaLength: "Longueur de la surface",
    areaWidth: "Largeur de la surface",
    areaHelp: "La surface de sol ou de mur à carreler, mesurée comme un rectangle.",
    tileLength: "Longueur du carreau",
    tileWidth: "Largeur du carreau",
    grout: "Largeur du joint",
    groutHelpImperial: "L’espace entre les carreaux. 1/8 in vaut 0,125 in ; saisissez 0 pour aucun joint.",
    groutHelpMetric: "L’espace entre les carreaux. Saisissez 0 pour aucun joint.",
    waste: "Marge de perte",
    wasteHelp: "Carreaux supplémentaires pour les coupes, la casse et la réserve. Environ 10 % est courant pour une pose droite ; les poses en diagonale et à motifs en demandent davantage.",
    perBox: "Carreaux par boîte (facultatif)",
    perBoxHelp: "Laissez vide si vous achetez les carreaux à l’unité.",
    tilesNeeded: "Carreaux nécessaires",
    caption: "{area} à raison de {perTile} par carreau joint compris, plus {waste} de perte.",
    tilesBeforeWaste: "Carreaux avant perte",
    area: "Surface à carreler",
    tileFootprint: "Surface par carreau avec joint",
    boxes: "Boîtes à acheter",
    boxesCaption: "{boxes} ({tiles})",
    boxesCount: { zero: "{n} boîte", one: "{n} boîte", two: "{n} boîtes", few: "{n} boîtes", many: "{n} de boîtes", other: "{n} boîtes" },
    tilesCount: { zero: "{n} carreau", one: "{n} carreau", two: "{n} carreaux", few: "{n} carreaux", many: "{n} de carreaux", other: "{n} carreaux" },
    spare: "Carreaux de réserve dans les boîtes",
    notes: {
      layout: "Suppose une surface rectangulaire simple. Les poses réelles avec beaucoup de coupes, des frises ou des motifs peuvent demander plus de carreaux.",
      batch: "Achetez si possible tous les carreaux du même lot, car la couleur peut varier d’un lot à l’autre.",
    },
  },
};

export default fr;
