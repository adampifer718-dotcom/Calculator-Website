import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RoofingText } from "../text/en";

const fr: CalculatorTranslation<RoofingText> = {
  content: {
    title: "Calculateur de toiture",
    shortTitle: "Toiture",
    summary: "Estimez la surface de toiture, les squares et les paquets de bardeaux d’un toit simple à deux pans ou à quatre pans, à partir de l’emprise du bâtiment, du débord et de la pente.",
    metaTitle: "Calculateur de toiture – Surface, squares et paquets de bardeaux",
    metaDescription: "Estimez la surface du toit selon l’emprise, le débord et la pente, puis les squares, paquets de bardeaux et rouleaux de sous-couche à acheter, pertes comprises.",
    keywords: ["calcul toiture", "surface de toit", "calcul bardeaux", "paquets de bardeaux", "square de toiture", "pente de toit", "rouleaux de sous-couche", "coefficient de pente"],
    intro: [
      "Les matériaux de couverture se vendent au square : un square couvre 100 ft² (environ 9,29 m²) de toit. Un toit en pente a une surface plus grande que l’emprise qu’il recouvre : la surface en plan est donc multipliée par un coefficient de pente qui augmente avec l’inclinaison du toit.",
      "Saisissez la longueur et la largeur du bâtiment, le débord et la pente pour estimer la surface du toit, le nombre de squares et de paquets de bardeaux et, si vous le souhaitez, les rouleaux de sous-couche. Une marge de perte couvre les coupes, les rangs de départ et les faîtières.",
    ],
    howToUse: [
      "Choisissez les unités US (pieds) ou métriques (mètres).",
      "Saisissez la longueur et la largeur du bâtiment, ainsi que le débord du toit au-delà des murs.",
      "Saisissez la pente sous forme de hauteur pour 12 de projection horizontale (par exemple 6 pour un toit 6/12), ou sous forme d’angle.",
      "Choisissez deux pans ou quatre pans et vérifiez la marge de perte ; les toits à quatre pans sont réglés par défaut sur 15 % en raison des coupes supplémentaires.",
      "Vérifiez le nombre de paquets par square pour vos bardeaux et, si vous le souhaitez, saisissez la couverture d’un rouleau de sous-couche.",
    ],
    formulas: [
      { title: "Surface en plan", expression: "plan = (L + 2 × débord) × (l + 2 × débord)", explanation: "L et l sont la longueur et la largeur extérieures du bâtiment." },
      { title: "Coefficient de pente", expression: "coefficient = √(1 + (hauteur ÷ 12)²)", explanation: "Pour un toit 6/12, le coefficient vaut √1,25 ≈ 1,118. À partir d’un angle θ, le coefficient vaut 1 ÷ cos θ." },
      { title: "Surface du toit et squares", expression: "surface = plan × coefficient ; squares = surface × (1 + pertes) ÷ 100 ft²", explanation: "Les surfaces métriques sont converties avec 1 ft² = 0,09290304 m²." },
      { title: "Paquets et rouleaux", expression: "paquets = ⌈squares × paquets par square⌉ ; rouleaux = ⌈surface avec pertes ÷ couverture d’un rouleau⌉", explanation: "Les deux sont arrondis à l’unité supérieure." },
    ],
    examples: [
      {
        title: "Maison de 40 × 30 ft, débord de 1 ft, toit à deux pans 6/12",
        steps: [
          "Surface en plan = 42 × 32 = 1 344 ft²",
          "Surface du toit = 1 344 × √1,25 ≈ 1 502,64 ft²",
          "Avec 10 % de pertes : 1 652,90 ft², soit 16,53 squares",
          "Paquets = ⌈16,53 × 3⌉ = 50",
        ],
      },
      {
        title: "Maison de 12 × 9 m, débord de 0,5 m, toit à quatre pans de 30°",
        steps: [
          "Surface en plan = 13 × 10 = 130 m²",
          "Coefficient de pente = 1 ÷ cos 30° ≈ 1,1547, donc surface du toit ≈ 150,11 m²",
          "Avec 15 % de pertes : 172,63 m² ÷ 0,09290304 ≈ 1 858,15 ft², soit 18,58 squares",
          "Paquets = ⌈18,58 × 3⌉ = 56",
        ],
      },
      {
        title: "50 × 28 ft, débord de 1,5 ft, toit 8/12 avec sous-couche",
        steps: [
          "Surface en plan = 53 × 31 = 1 643 ft²",
          "Coefficient de pente = √(1 + (8 ÷ 12)²) ≈ 1,2019, donc surface du toit ≈ 1 974,64 ft²",
          "Avec 12 % de pertes : 2 211,60 ft², soit 22,12 squares et ⌈66,35⌉ = 67 paquets",
          "Sous-couche à 400 ft² par rouleau : ⌈5,53⌉ = 6 rouleaux",
        ],
      },
    ],
    assumptions: [
      "Le toit est un simple rectangle en plan, avec la même pente sur tous les versants. Les lucarnes, noues, cheminées, fenêtres de toit, plans en L et versants de pentes différentes demandent des matériaux supplémentaires et doivent être mesurés section par section.",
      "Un toit à quatre pans et un toit à deux pans sur la même emprise et avec la même pente ont la même surface ; la marge de perte par défaut plus élevée du toit à quatre pans tient compte de ses coupes supplémentaires.",
      "Le nombre de paquets par square et la couverture de la sous-couche varient selon les produits. Utilisez les valeurs imprimées sur l’emballage.",
      "Il s’agit uniquement d’une estimation des matériaux. La charpente, la ventilation, le classement au feu et les détails de pose doivent respecter les instructions du fabricant et la réglementation locale de construction.",
    ],
    faqs: [
      { question: "Qu’est-ce qu’un square de toiture ?", answer: "Un square correspond à 100 ft² de surface de toit, soit une zone de 10 × 10 ft. Les couvreurs nord-américains chiffrent et commandent les bardeaux au square ; 1 square vaut environ 9,29 m²." },
      { question: "Combien de paquets de bardeaux faut-il par square ?", answer: "Beaucoup de bardeaux d’asphalte sont conditionnés à trois paquets par square, mais des produits plus lourds peuvent être vendus en quatre paquets plus petits, voire davantage. L’étiquette du paquet indique sa couverture : vérifiez-la et ajustez le nombre de paquets par square." },
      { question: "Pourquoi la surface du toit est-elle plus grande que la maison ?", answer: "Parce que le toit est en pente et déborde des murs. Un toit 6/12 a une surface environ 12 % plus grande que sa surface en plan, et un toit 12/12 environ 41 % plus grande, avant même l’ajout du débord." },
    ],
    sourcesUsedFor: [
      "Le square de toiture de 100 ft² et le conditionnement courant de trois paquets de bardeaux par square, qui varie selon les produits.",
      "La méthode générale d’estimation des matériaux de couverture à partir de la surface du toit, des squares et d’une marge de perte.",
    ],
  },
  text: {
    units: "Unités",
    unitSystems: { imperial: "US (ft)", metric: "Métriques (m)" },
    length: "Longueur du bâtiment",
    lengthHelp: "La longueur extérieure de l’emprise du bâtiment, sans le débord.",
    width: "Largeur du bâtiment",
    overhang: "Débord (avant-toits et rives)",
    overhangHelp: "La distance dont le toit dépasse des murs de chaque côté. Elle est ajoutée aux deux extrémités de la longueur et de la largeur.",
    pitchMode: "Pente du toit indiquée en",
    pitchModes: { rise: "Hauteur pour 12", angle: "Angle" },
    rise: "Hauteur pour 12 de projection horizontale",
    riseHelp: "Pour un toit 6 pour 12 (6/12), saisissez 6. La hauteur et la projection utilisent la même unité.",
    angle: "Angle du toit",
    roofType: "Type de toit",
    roofTypes: { gable: "Deux pans", hip: "Quatre pans" },
    roofTypeHelp: "Avec la même pente sur tous les versants, un toit à deux pans et un toit à quatre pans sur la même emprise ont la même surface. Les toits à quatre pans demandent plus de coupes : leur marge de perte par défaut est donc plus élevée.",
    waste: "Marge de perte",
    wasteHelp: "Supplément pour les coupes, les rangs de départ, les faîtières, les arêtiers et les erreurs.",
    bundles: "Paquets par square",
    bundlesHelp: "Beaucoup de bardeaux d’asphalte sont vendus à 3 paquets par square (100 ft²), mais certains produits diffèrent. Vérifiez la couverture imprimée sur le paquet.",
    rollCoverage: "Couverture d’un rouleau de sous-couche (facultatif)",
    rollCoverageHelp: "La couverture nette imprimée sur l’étiquette du rouleau, chevauchements déduits. Laissez vide pour ne pas calculer le nombre de rouleaux.",
    errors: {
      angle: "L’angle du toit doit être inférieur à 90°.",
    },
    squares: "Squares de toiture (pertes comprises)",
    caption: "{area} de toit plus {waste} de pertes ; 1 square = 100 ft² (9,29 m²).",
    planArea: "Emprise, débord compris",
    pitchFactor: "Coefficient de pente (surface du toit ÷ surface en plan)",
    pitchText: "Pente",
    pitchValue: "{rise} pour 12",
    angleOut: "Angle du toit",
    roofArea: "Surface du toit",
    roofAreaOther: "Surface du toit dans d’autres unités",
    areaWithWaste: "Surface du toit, pertes comprises",
    squaresNoWaste: "Squares avant pertes",
    bundlesOut: "Paquets de bardeaux",
    rolls: "Rouleaux de sous-couche",
    notes: {
      hip: "Un toit à quatre pans ayant la même pente sur les quatre versants a la même surface qu’un toit à deux pans sur la même emprise ; il demande simplement plus de pièces coupées et d’arêtiers.",
      shape: "Le calcul suppose un toit rectangulaire simple. Les lucarnes, noues, cheminées, fenêtres de toit et plans en L demandent des matériaux supplémentaires ; dans ces cas, mesurez chaque section séparément.",
      bundles: "Les paquets sont arrondis au paquet entier supérieur. Les faîtières, bandes de départ, larmiers, solins et clous ne sont pas inclus.",
    },
  },
};

export default fr;
