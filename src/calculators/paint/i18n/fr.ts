import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PaintText } from "../text/en";

const fr: CalculatorTranslation<PaintText> = {
  content: {
    title: "Calculateur de peinture",
    shortTitle: "Peinture",
    summary: "Estimez combien de gallons ou de litres de peinture murale il vous faut selon la taille des murs, les portes, les fenêtres, le nombre de couches et le rendement.",
    metaTitle: "Calculateur de peinture – Litres ou gallons pour vos murs",
    metaDescription: "Calculez la quantité de peinture murale à acheter en litres ou en gallons selon la longueur et la hauteur des murs, moins portes et fenêtres, couches et rendement.",
    keywords: ["calcul peinture", "quantité de peinture", "combien de litres de peinture", "rendement peinture", "peinture murale", "nombre de couches", "surface à peindre"],
    intro: [
      "Acheter de la peinture est plus simple quand on connaît la surface à couvrir. Additionnez les largeurs des murs, multipliez par la hauteur, retirez les portes et les fenêtres, puis divisez par la surface couverte par un gallon ou un litre de votre peinture.",
      "Le calculateur fait ce calcul pour n’importe quel nombre de couches et affiche à la fois la quantité exacte et le nombre entier de gallons ou de litres à acheter.",
    ],
    howToUse: [
      "Choisissez les unités américaines (pieds et gallons) ou métriques (mètres et litres).",
      "Saisissez la longueur totale des murs à peindre et leur hauteur. Pour une pièce entière, la longueur totale est le périmètre.",
      "Saisissez le nombre de portes et de fenêtres. Ajustez les dimensions types des ouvertures si les vôtres sont plus grandes ou plus petites.",
      "Indiquez le nombre de couches et le rendement inscrit sur votre pot de peinture, puis lisez la quantité nécessaire.",
    ],
    formulas: [
      { title: "Surface à peindre", expression: "A = L × H − (portes × surface d’une porte) − (fenêtres × surface d’une fenêtre)", explanation: "L est la largeur cumulée des murs et H leur hauteur." },
      { title: "Peinture nécessaire", expression: "peinture = A × couches ÷ rendement", explanation: "Le rendement est la surface couverte par un gallon ou un litre en une couche, selon le fabricant." },
      { title: "Quantité à acheter", expression: "achat = ⌈peinture⌉", explanation: "Arrondi au gallon ou au litre entier supérieur. Des seaux plus grands ou des pots plus petits permettent de se rapprocher de la quantité nécessaire." },
    ],
    examples: [
      {
        title: "Chambre de 14 ft × 12 ft avec des murs de 9 ft, deux couches",
        steps: [
          "Longueur des murs = 14 + 12 + 14 + 12 = 52 ft ; surface des murs = 52 × 9 = 468 ft²",
          "Ouvertures = 2 × 20 + 3 × 15 = 85 ft², donc la surface à peindre est de 383 ft²",
          "Peinture = 383 × 2 ÷ 350 ≈ 2,19 gal, donc achetez 3 gallons",
        ],
      },
      {
        title: "Pièce en métrique avec 16 m de murs, 2,5 m de haut",
        steps: ["Surface des murs = 16 × 2,5 = 40 m²", "Ouvertures = 1,9 + 2 × 1,4 = 4,7 m², donc 35,3 m² à peindre", "Peinture = 35,3 × 2 ÷ 10 = 7,06 L, donc achetez 8 L"],
      },
      {
        title: "Un mur d’accent, une seule couche d’une peinture à fort rendement",
        steps: ["Surface = 14 × 9 = 126 ft²", "Peinture = 126 × 1 ÷ 400 = 0,315 gal, donc un gallon (un quart de gallon, 0,25 gal, serait juste un peu insuffisant)"],
      },
    ],
    assumptions: [
      "La valeur américaine par défaut de 350 ft² par gallon se situe en bas de la fourchette de 350 à 400 ft² couramment indiquée pour la peinture murale. La valeur métrique par défaut de 10 m² par litre est une valeur d’étiquette courante. Le rendement varie selon le produit, la finition et le support : utilisez le chiffre indiqué sur votre pot.",
      "Les surfaces rugueuses, poreuses, rebouchées ou jamais peintes absorbent davantage de peinture, et passer d’une couleur foncée à une couleur claire peut demander une couche supplémentaire ou une sous-couche.",
      "Les dimensions des portes et des fenêtres sont des valeurs types. Les murs sont traités comme des rectangles plats de hauteur unique ; pour les pignons ou les plafonds en pente, calculez ces surfaces séparément.",
    ],
    faqs: [
      { question: "Combien de couches de peinture faut-il ?", answer: "Deux couches sont généralement recommandées pour un rendu uniforme, surtout sur une couleur différente. Une seule couche peut suffire pour repeindre dans la même couleur une surface en bon état." },
      { question: "Faut-il déduire les portes et les fenêtres ?", answer: "Oui, pour une estimation plus précise. Si vous peignez aussi les portes ou les boiseries, estimez-les à part, car la peinture pour boiseries est généralement un autre produit." },
      { question: "Quelle surface couvre un gallon de peinture ?", answer: "La plupart des peintures murales indiquent environ 350 à 400 ft² par gallon et par couche sur des murs lisses et préparés, soit environ 8,5 à 10 m² par litre. Vérifiez l’étiquette de votre produit, car le rendement varie." },
    ],
    sourcesUsedFor: ["Rendement type de la peinture murale, environ 350 à 400 ft² par gallon et par couche, utilisé pour la valeur américaine par défaut."],
  },
  text: {
    units: "Unités",
    unitSystems: { imperial: "Américaines (ft, gal)", metric: "Métriques (m, L)" },
    length: "Longueur totale des murs",
    lengthHelp: "Additionnez les largeurs de tous les murs à peindre. Pour une pièce entière, c’est le périmètre.",
    height: "Hauteur des murs",
    doors: "Nombre de portes",
    doorArea: "Surface d’une porte",
    windows: "Nombre de fenêtres",
    windowArea: "Surface d’une fenêtre",
    openingHelp: "Une valeur type est préremplie ; mesurez vos ouvertures pour une estimation plus précise.",
    coats: "Nombre de couches",
    coverage: "Rendement",
    coverageHelp: "La surface couverte par une unité de peinture en une couche. Consultez l’étiquette ou la fiche technique de votre peinture : les surfaces texturées, poreuses ou jamais peintes demandent plus de peinture.",
    errors: { openings: "Les portes et fenêtres couvrent au moins toute la surface des murs. Vérifiez les nombres, les dimensions des ouvertures et celles des murs." },
    paintNeeded: "Peinture nécessaire",
    caption: "{area} peints en {coats} à {coverage}.",
    coatsCount: { zero: "{n} couche", one: "{n} couche", two: "{n} couches", few: "{n} couches", many: "{n} de couches", other: "{n} couches" },
    wallArea: "Surface totale des murs",
    openingArea: "Portes et fenêtres",
    paintableArea: "Surface à peindre (une couche)",
    totalCoverage: "Surface à couvrir, toutes couches",
    wholeGallons: "Gallons entiers à acheter",
    wholeLiters: "Litres entiers à acheter",
    inLiters: "En litres",
    inGallons: "En gallons américains",
    notes: {
      cans: "La peinture se vend en pots de contenance fixe ; arrondissez au-dessus et gardez-en un peu pour les retouches.",
      surfaces: "Les plafonds, les boiseries et la sous-couche ne sont pas inclus. Ajoutez-les séparément si vous les peignez.",
    },
  },
};

export default fr;
