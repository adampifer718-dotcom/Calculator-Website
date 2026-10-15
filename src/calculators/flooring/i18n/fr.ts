import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FlooringText } from "../text/en";

const fr: CalculatorTranslation<FlooringText> = {
  content: {
    title: "Calculateur de revêtement de sol",
    shortTitle: "Revêtement de sol",
    summary: "Calculez combien de boîtes de stratifié, de lames vinyle ou de parquet acheter à partir des dimensions de la pièce, d’une marge de perte et de la surface couverte par boîte, avec un coût facultatif.",
    metaTitle: "Calculateur de revêtement de sol – Stratifié ou vinyle",
    metaDescription:
      "Estimez les boîtes de revêtement de sol à acheter pour une pièce rectangulaire ou en L, avec une marge de perte, la surface par boîte et un prix au m² facultatif.",
    keywords: ["calcul revêtement de sol", "quantité de parquet", "calcul stratifié", "lames vinyle", "boîtes de parquet", "perte parquet", "estimation parquet massif"],
    intro: [
      "Les revêtements de sol se vendent à la boîte, et chaque boîte couvre une surface fixe. Pour savoir combien en acheter, il faut la surface au sol, une marge pour les morceaux perdus lors des coupes et la surface couverte indiquée sur la boîte.",
      "Ce calculateur additionne tout cela pour une pièce rectangulaire ou une pièce en L composée de deux rectangles, arrondit aux boîtes entières et, si vous saisissez un prix, estime le coût. Si vous n’avez besoin que de la surface d’une pièce, le Calculateur de surface en pieds carrés la donne sans boîtes ni perte.",
    ],
    howToUse: [
      "Choisissez les unités US (pieds) ou métriques (mètres).",
      "Saisissez la longueur et la largeur de la pièce. Pour une pièce en L, saisissez d’abord le rectangle principal, puis le plus petit comme seconde zone.",
      "Indiquez la marge de perte : environ 10 % pour une pose droite, environ 15 % pour une pose en diagonale ou en chevrons.",
      "Saisissez la surface couverte par boîte indiquée sur l’emballage et, si vous le souhaitez, le prix au pied carré ou au mètre carré.",
    ],
    formulas: [
      { title: "Surface au sol", expression: "A = L₁ × W₁ + L₂ × W₂", explanation: "Le second rectangle est facultatif ; laissez-le à 0 pour une pièce rectangulaire simple." },
      { title: "Surface avec perte", expression: "A_w = A × (1 + perte ÷ 100)", explanation: "Le supplément couvre les chutes le long des murs, les erreurs de coupe et les lames abîmées." },
      { title: "Boîtes", expression: "boîtes = ⌈A_w ÷ surface par boîte⌉", explanation: "Arrondi à l’entier supérieur, car les revêtements se vendent par boîtes entières." },
      { title: "Coût", expression: "coût = boîtes × surface par boîte × prix par unité de surface", explanation: "Vous payez des boîtes entières : le coût utilise donc la surface contenue dans les boîtes achetées." },
    ],
    examples: [
      {
        title: "Chambre de 14 ft × 12 ft avec des boîtes de 20 ft²",
        steps: ["Surface = 14 × 12 = 168 ft²", "Avec 10 % de perte : 168 × 1,10 = 184,8 ft²", "184,8 ÷ 20 = 9,24, donc 10 boîtes à acheter (200 ft²)"],
      },
      {
        title: "Séjour en L posé en chevrons, en métrique",
        steps: ["Surface = 5 × 4 + 2 × 1,5 = 23 m²", "Avec 15 % de perte : 23 × 1,15 = 26,45 m²", "26,45 ÷ 2,2 ≈ 12,02, donc 13 boîtes à acheter"],
      },
      {
        title: "Bureau avec un prix au pied carré",
        steps: ["Surface = 12 × 10 = 120 ft² ; avec 10 % de perte, 132 ft²", "132 ÷ 23,4 ≈ 5,64, donc 6 boîtes à acheter couvrant 140,4 ft²", "Coût = 140,4 ft² × 3,49 $US ≈ 490,00 $US"],
      },
    ],
    assumptions: [
      "La pièce est un rectangle, ou deux rectangles qui ne se chevauchent pas. Mesurez les autres formes comme plusieurs rectangles et additionnez-les.",
      "Les marges de perte sont des règles empiriques. La longueur des lames, la forme de la pièce et la méthode du poseur modifient la quantité perdue : consultez les recommandations du fabricant pour votre produit.",
      "Les placards, les passages de porte et les zones sous les meubles fixes ne sont inclus que si vous les ajoutez aux mesures.",
      "La sous-couche, les plinthes, les barres de seuil, la colle et la main-d’œuvre ne sont pas incluses dans le coût.",
    ],
    faqs: [
      {
        question: "Combien de revêtement en plus faut-il acheter ?",
        answer: "Environ 10 % est une marge courante pour une pose droite dans une pièce simple. Les poses en diagonale, à bâtons rompus ou en point de Hongrie, ou les pièces avec de nombreux angles, demandent généralement environ 15 % ou plus.",
      },
      {
        question: "Pourquoi garder des boîtes de réserve ?",
        answer: "Les lames restantes permettent de remplacer plus tard les éléments abîmés par un revêtement du même lot de fabrication, dont la couleur et la finition seront identiques.",
      },
      {
        question: "Comment mesurer une pièce en L ?",
        answer: "Découpez le sol en deux rectangles qui ne se chevauchent pas, mesurez la longueur et la largeur de chacun, puis saisissez-les comme pièce et seconde zone.",
      },
    ],
    sourcesUsedFor: ["Le pied international exact (0,3048 m), utilisé pour convertir entre pieds carrés et mètres carrés."],
  },
  text: {
    units: "Unités",
    unitSystems: { imperial: "US (ft, ft²)", metric: "Métrique (m, m²)" },
    length: "Longueur de la pièce",
    width: "Largeur de la pièce",
    length2: "Longueur de la seconde zone",
    width2: "Largeur de la seconde zone",
    secondHelp: "Facultatif. Pour une pièce en L, découpez-la en deux rectangles et saisissez le second ici. Sinon, laissez les deux valeurs à 0.",
    waste: "Marge de perte",
    wasteHelp: "Supplément pour les coupes, les chutes et les lames abîmées. Environ 10 % convient à une pose droite ; comptez environ 15 % pour une pose en diagonale ou en chevrons.",
    coverage: "Surface par boîte",
    coverageHelp: "La surface couverte par une boîte, indiquée sur la boîte ou sur la fiche produit.",
    price: "Prix par unité de surface",
    priceHelp: "Facultatif. Le prix du revêtement au pied carré ou au mètre carré.",
    errors: {
      secondPair: "Saisissez à la fois la longueur et la largeur de la seconde zone, ou mettez les deux à 0.",
    },
    boxes: "Boîtes nécessaires",
    caption: "{area} plus {waste} de perte, à raison de {coverage} par boîte.",
    floorArea: "Surface au sol",
    areaWithWaste: "Surface perte comprise",
    areaBought: "Surface contenue dans les boîtes achetées",
    leftover: "Reste après la pose",
    otherUnit: "Surface au sol dans l’autre unité",
    cost: "Coût du revêtement (boîtes entières)",
    costWithWaste: "Coût de la surface perte comprise",
    notes: {
      squareFootage: "Vous n’avez besoin que de la surface d’une pièce ? Le Calculateur de surface en pieds carrés donne la surface sans boîtes ni perte.",
      extras: "La sous-couche, les plinthes, les barres de seuil et la colle ne sont pas incluses.",
    },
  },
};

export default fr;
