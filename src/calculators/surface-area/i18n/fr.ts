import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SurfaceAreaText } from "../text/en";

const fr: CalculatorTranslation<SurfaceAreaText> = {
  content: {
    title: "Calculateur d’aire de surface",
    shortTitle: "Aire de surface",
    summary: "Calculez l’aire totale, l’aire latérale et l’aire de base d’un cube, d’un pavé, d’un cylindre, d’une sphère, d’une demi-sphère, d’un cône ou d’une pyramide à base carrée.",
    metaTitle: "Calculateur d’aire de surface – Pavé, cylindre, cône, sphère",
    metaDescription:
      "Calculez l’aire totale de sept solides, ainsi que l’aire latérale, l’aire de base et l’apothème, en mm, cm, m, in ou ft, avec le total en m² et ft².",
    keywords: ["aire de surface", "surface d’un cylindre", "aire latérale", "surface d’un cône", "surface d’une sphère", "apothème", "aire totale pyramide", "calcul surface solide"],
    intro: [
      "L’aire de surface est l’aire totale de toutes les faces ou surfaces courbes d’un solide. Elle indique la quantité de peinture, d’emballage, de tôle ou de tissu nécessaire pour recouvrir entièrement un objet.",
      "Choisissez l’un des sept solides et saisissez ses dimensions dans une seule unité. En plus du total, le calculateur affiche l’aire latérale (les côtés sans les extrémités), l’aire de base et, pour les cônes et les pyramides, l’apothème. Le total est aussi donné en mètres carrés et en pieds carrés.",
    ],
    howToUse: [
      "Choisissez la forme.",
      "Choisissez l’unité de vos mesures.",
      "Saisissez les dimensions affichées pour cette forme, en utilisant le rayon (la moitié du diamètre) pour les formes rondes et la hauteur perpendiculaire pour les cônes et les pyramides.",
      "Lisez l’aire totale et les aires partielles affichées en dessous.",
    ],
    formulas: [
      { title: "Cube et pavé droit", expression: "A = 6a²\nA = 2(lw + lh + wh)", explanation: "Additionnez les aires des six faces rectangulaires." },
      { title: "Cylindre", expression: "A = 2πr² + 2πrh", explanation: "Deux disques aux extrémités plus la face courbe, qui se déroule en un rectangle de 2πr de large et h de haut." },
      { title: "Sphère et demi-sphère", expression: "A = 4πr²\nA = 2πr² + πr² = 3πr²", explanation: "Une demi-sphère fermée possède la moitié de la surface courbe de la sphère plus sa base plane circulaire." },
      { title: "Cône", expression: "s = √(r² + h²)\nA = πr² + πrs", explanation: "Le disque de base plus la surface latérale πrs, où s est l’apothème (génératrice)." },
      { title: "Pyramide à base carrée", expression: "s = √((a/2)² + h²)\nA = a² + 2as", explanation: "La base carrée plus quatre triangles, chacun de base a et de hauteur s (l’apothème d’une face)." },
    ],
    examples: [
      {
        title: "Un carton d’expédition de 30 × 20 × 10 cm",
        steps: ["lw = 600, lh = 300, wh = 200", "A = 2 × (600 + 300 + 200) = 2 200 cm²", "2 200 cm² = 0,22 m²"],
      },
      {
        title: "Un cône de 0,6 m de rayon et 0,8 m de haut",
        steps: ["s = √(0,6² + 0,8²) = 1 m", "Base = π × 0,36 ≈ 1,131 m², latérale = π × 0,6 × 1 ≈ 1,885 m²", "A ≈ 1,131 + 1,885 ≈ 3,016 m²"],
      },
      {
        title: "Une pyramide à base carrée de 6 ft de côté et 4 ft de haut",
        steps: ["s = √(3² + 4²) = 5 ft", "Latérale = 2 × 6 × 5 = 60 ft², base = 36 ft²", "A = 36 + 60 = 96 ft²"],
      },
    ],
    assumptions: [
      "Les formes sont idéales et droites : le sommet des cônes et des pyramides se trouve exactement au-dessus du centre de la base, et les formes rondes sont des cercles parfaits.",
      "Les totaux concernent des solides fermés. Un cylindre comprend ses deux extrémités, un cône et une pyramide comprennent leur base, et une demi-sphère comprend sa face plane. Pour les formes ouvertes, utilisez l’aire latérale ou l’aire courbe.",
      "Les objets réels ont des joints, des recouvrements et une épaisseur. Prévoyez une marge lors de l’achat du matériau pour en tenir compte.",
    ],
    faqs: [
      {
        question: "Quelle est la différence entre aire latérale et aire totale ?",
        answer: "L’aire latérale ne compte que les côtés. L’aire totale y ajoute la base et, pour les prismes et les cylindres, le dessus également.",
      },
      {
        question: "Qu’est-ce que l’apothème ?",
        answer: "C’est la distance mesurée le long de la surface inclinée, du bord de la base jusqu’au sommet. Elle est plus longue que la hauteur verticale et se déduit du théorème de Pythagore.",
      },
      {
        question: "Comment convertir des cm² en m² ?",
        answer: "Divisez par 10 000, car un mètre vaut 100 cm et l’aire varie avec le carré : 100 × 100 = 10 000.",
      },
    ],
    sourcesUsedFor: [
      "Formules d’aire de surface du pavé droit, du cylindre, de la sphère et du cône.",
      "Application détaillée des formules d’aire du cylindre et de la sphère.",
    ],
  },
  text: {
    shape: "Forme",
    shapes: {
      cube: "Cube",
      box: "Pavé droit (parallélépipède rectangle)",
      cylinder: "Cylindre (fermé)",
      sphere: "Sphère",
      hemisphere: "Demi-sphère (avec base plane)",
      cone: "Cône (avec base)",
      pyramid: "Pyramide à base carrée (avec base)",
    },
    unit: "Unité de longueur",
    unitHelp: "Saisissez toutes les dimensions dans cette unité. Les aires s’affichent dans la même unité au carré.",
    units: { mm: "Millimètres (mm)", cm: "Centimètres (cm)", m: "Mètres (m)", in: "Pouces (in)", ft: "Pieds (ft)" },
    edge: "Longueur d’arête (a)",
    length: "Longueur (l)",
    width: "Largeur (w)",
    height: "Hauteur (h)",
    heightHelp: "La hauteur perpendiculaire, mesurée verticalement depuis la base, et non le long du côté incliné.",
    radius: "Rayon (r)",
    radiusHelp: "La moitié du diamètre.",
    baseSide: "Côté de la base (a)",
    total: "Aire totale",
    formula: {
      cube: "A = 6a²",
      box: "A = 2(lw + lh + wh)",
      cylinder: "A = 2πr² + 2πrh",
      sphere: "A = 4πr²",
      hemisphere: "A = 3πr²",
      cone: "A = πr² + πr√(r² + h²)",
      pyramid: "A = a² + 2a√((a/2)² + h²)",
    },
    lateral: "Aire latérale (côtés seulement)",
    curved: "Aire de la surface courbe",
    base: "Aire de la base",
    eachEnd: "Aire de chaque disque d’extrémité",
    face: "Aire d’une face",
    slant: "Apothème",
    inSquareMeters: "Total en mètres carrés",
    inSquareFeet: "Total en pieds carrés",
    note: "L’aire latérale exclut les faces du dessus et du dessous : c’est ce qu’il faut pour une étiquette, un mur ou un habillage latéral.",
  },
};

export default fr;
