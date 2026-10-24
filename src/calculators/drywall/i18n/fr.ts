import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DrywallText } from "../text/en";

const fr: CalculatorTranslation<DrywallText> = {
  content: {
    title: "Calculateur de plaques de plâtre",
    shortTitle: "Plaques de plâtre",
    summary: "Estimez le nombre de plaques de plâtre nécessaires pour les murs et, en option, le plafond, ouvertures déduites, avec une marge pour les chutes.",
    metaTitle: "Calculateur de plaques de plâtre – Combien en acheter",
    metaDescription:
      "Calculez combien de plaques de plâtre 4×8, 4×10 ou 4×12 ft (ou métriques) acheter pour murs et plafond, portes et fenêtres déduites, avec une marge de chutes.",
    keywords: ["plaques de plâtre", "calcul placo", "nombre de plaques de plâtre", "plaque BA13", "cloison sèche", "enduit à joints", "plâtrerie", "devis plaques de plâtre"],
    intro: [
      "Les plaques de plâtre, aussi appelées placoplâtre ou placo, sont vendues en formats fixes. Pour savoir combien en acheter, calculez la surface des murs (et du plafond si vous le doublez), retirez les portes et fenêtres, ajoutez une marge pour les chutes et divisez par la surface d’une plaque.",
      "Ce calculateur le fait pour les formats courants américains et métriques et arrondit au nombre entier de plaques supérieur. Il donne aussi une estimation approximative de l’enduit à joints prêt à l’emploi nécessaire pour traiter les joints.",
    ],
    howToUse: [
      "Choisissez les unités américaines (pieds) ou métriques (mètres).",
      "Saisissez la longueur totale des murs à couvrir et leur hauteur. Pour une pièce entière, la longueur totale est le périmètre.",
      "Indiquez si le plafond est inclus ; si oui, saisissez la longueur et la largeur de la pièce.",
      "Saisissez le nombre de portes et de fenêtres, et ajustez leurs dimensions types si nécessaire.",
      "Choisissez le format des plaques et une marge pour les chutes, puis lisez le nombre de plaques à acheter.",
    ],
    formulas: [
      { title: "Surface nette", expression: "A = L × H + longueur du plafond × largeur du plafond − ouvertures", explanation: "L est la longueur totale des murs et H leur hauteur. Les ouvertures correspondent au nombre de portes et de fenêtres multiplié par leur surface." },
      { title: "Plaques nécessaires", expression: "plaques = ⌈A × (1 + chutes) ÷ surface d’une plaque⌉", explanation: "Arrondi à la plaque entière supérieure. Une plaque de 4 × 8 ft couvre 32 ft² et une plaque de 1,2 × 2,4 m couvre 2,88 m²." },
      { title: "Enduit à joints (approximatif)", expression: "enduit ≈ A × 9 gal ÷ 1 000 ft² (≈ 0,37 L/m²)", explanation: "Une règle empirique pour l’enduit prêt à l’emploi ; la fiche technique du produit donne une valeur plus juste." },
    ],
    examples: [
      { title: "Murs d’une pièce avec 50 ft de murs de 8 ft de haut", steps: ["Surface des murs = 50 × 8 = 400 ft²", "Ouvertures = 20 + 2 × 15 = 50 ft², donc une surface nette de 350 ft²", "Avec 10 % de chutes : 385 ft² ÷ 32 ft² ≈ 12,03, donc 13 plaques à acheter"] },
      {
        title: "Pièce de 14 × 12 ft avec murs de 9 ft et plafond, plaques de 4 × 12",
        steps: [
          "Murs = 52 × 9 = 468 ft² ; plafond = 14 × 12 = 168 ft²",
          "Ouvertures = 2 × 20 + 2 × 15 = 70 ft², donc une surface nette de 566 ft²",
          "Avec 12 % de chutes : 633,92 ft² ÷ 48 ft² ≈ 13,21, donc 14 plaques à acheter",
          "Enduit à joints ≈ 566 × 9 ÷ 1 000 ≈ 5,1 gal",
        ],
      },
      {
        title: "Pièce métrique avec 15,6 m de murs de 2,6 m de haut, plafond compris",
        steps: [
          "Murs = 15,6 × 2,6 = 40,56 m² ; plafond = 4,5 × 3,3 = 14,85 m²",
          "Ouvertures = 1,9 + 1,4 = 3,3 m², donc une surface nette de 52,11 m²",
          "Avec 10 % de chutes : 57,32 m² ÷ 2,88 m² ≈ 19,9, donc 20 plaques à acheter",
        ],
      },
    ],
    assumptions: [
      "Les murs et plafonds sont traités comme des rectangles plans. Calculez séparément les pignons, plafonds inclinés et sous-faces, puis ajoutez-les à la longueur des murs ou comme surface de plafond supplémentaire.",
      "Le calcul se fonde sur la surface. Un calepinage plaque par plaque peut demander quelques plaques de plus, surtout quand la hauteur du mur ne convient pas à la longueur des plaques.",
      "Les dimensions des portes et fenêtres sont des valeurs types. Mesurez les vôtres pour une estimation plus précise.",
      "La quantité d’enduit à joints est approximative et repose sur une règle empirique d’un fabricant pour l’enduit prêt à l’emploi. Les vis, la bande à joints et les cornières d’angle ne sont pas estimées.",
    ],
    faqs: [
      { question: "Quelle marge prévoir pour les chutes de plaques de plâtre ?", answer: "Environ 10 % est courant pour des pièces rectangulaires simples. Les pièces avec beaucoup d’angles, d’ouvertures, de plafonds inclinés ou de courtes sections de mur produisent plus de chutes : 15 % ou plus est alors plus sûr." },
      { question: "Faut-il utiliser des plaques plus longues ?", answer: "Des plaques plus longues, comme 4 × 12 ft, signifient moins de joints à bander et à enduire, ce qui fait gagner du temps et de l’enduit. Elles sont plus lourdes et plus difficiles à passer par les portes et dans les escaliers : elles conviennent donc aux pièces dégagées et aux équipes de deux personnes." },
      { question: "Faut-il déduire les fenêtres et les portes ?", answer: "Oui, pour la surface. Beaucoup de poseurs posent les plaques par-dessus les petites ouvertures et les découpent ensuite ; la marge pour les chutes couvre alors les chutes." },
    ],
    sourcesUsedFor: ["La règle empirique d’environ deux seaux de 4,5 gallons d’enduit à joints prêt à l’emploi pour traiter 1 000 ft² de plaques de plâtre."],
  },
  text: {
    units: "Unités",
    unitSystems: { imperial: "US (ft)", metric: "Métrique (m)" },
    length: "Longueur totale des murs",
    lengthHelp: "Additionnez les largeurs de tous les murs à couvrir. Pour une pièce entière, c’est le périmètre.",
    height: "Hauteur des murs",
    ceiling: "Inclure le plafond ?",
    ceilingOptions: { no: "Non", yes: "Oui" },
    roomLength: "Longueur de la pièce (plafond)",
    roomWidth: "Largeur de la pièce (plafond)",
    doors: "Nombre de portes",
    doorArea: "Surface d’une porte",
    windows: "Nombre de fenêtres",
    windowArea: "Surface d’une fenêtre",
    openingHelp: "Une valeur type est préremplie ; mesurez la vôtre pour une estimation plus précise.",
    sheet: "Format des plaques",
    waste: "Marge pour les chutes",
    wasteHelp: "Supplément pour les chutes, les erreurs et les plaques abîmées. Environ 10 % convient aux pièces rectangulaires simples ; prévoyez davantage en cas de nombreux angles, ouvertures ou plafonds inclinés.",
    errors: { openings: "Les portes et fenêtres couvrent au moins toute la surface des murs. Vérifiez leur nombre, leurs dimensions et celles des murs." },
    sheets: "Plaques de plâtre nécessaires",
    caption: "{area} de plaques plus {waste} de chutes, en plaques de {sheet} ({sheetArea} chacune).",
    wallArea: "Surface des murs",
    ceilingArea: "Surface du plafond",
    openingArea: "Portes et fenêtres",
    netArea: "Surface nette à couvrir",
    areaWithWaste: "Surface chutes comprises",
    sheetArea: "Surface d’une plaque",
    compound: "Enduit à joints, approximatif (prêt à l’emploi)",
    notes: {
      compound: "La quantité d’enduit à joints repose sur une règle empirique d’environ 9 gallons américains (deux seaux de 4,5 gallons) d’enduit prêt à l’emploi pour 1 000 ft² de plaques, soit environ 0,37 L par m². La quantité varie selon le produit et le niveau de finition : consultez la fiche technique du produit.",
      layout: "Il s’agit d’une estimation par la surface. Un calepinage plaque par plaque, surtout pour les murs hauts et autour des ouvertures, peut modifier le nombre.",
      extras: "Les vis, la bande à joints et les cornières d’angle ne sont pas comprises.",
    },
  },
};

export default fr;
