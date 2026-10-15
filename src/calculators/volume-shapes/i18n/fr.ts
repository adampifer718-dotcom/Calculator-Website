import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { VolumeShapesText } from "../text/en";

const fr: CalculatorTranslation<VolumeShapesText> = {
  content: {
    title: "Calculateur de volume",
    shortTitle: "Volume",
    summary: "Calculez le volume d’un cube, d’un pavé, d’un cylindre, d’une sphère, d’une demi-sphère, d’un cône ou d’une pyramide à base carrée, avec le résultat en litres, en mètres cubes et en gallons US.",
    metaTitle: "Calculateur de volume – Cylindre, sphère, cône et plus",
    metaDescription:
      "Calculez le volume d’un cube, pavé, cylindre, sphère, demi-sphère, cône ou pyramide carrée en mm, cm, m, in ou ft, avec litres et gallons US.",
    keywords: ["calcul volume", "volume d’un cylindre", "volume d’une sphère", "volume d’un cône", "volume pyramide", "mètres cubes", "litres", "pieds cubes"],
    intro: [
      "Le volume est l’espace occupé par un solide. Ce calculateur couvre sept solides courants, du simple cube au cône ou à la pyramide à base carrée, pour dimensionner une cuve, une jardinière, une boîte ou une figure d’exercice.",
      "Choisissez une forme et une unité de longueur, puis saisissez les dimensions demandées. Le résultat s’affiche dans cette unité au cube et est aussi converti en litres, en mètres cubes et en gallons US, ce qui aide à savoir quelle quantité de liquide ou de matériau tient à l’intérieur.",
    ],
    howToUse: [
      "Choisissez la forme.",
      "Choisissez l’unité de vos mesures. Toutes les dimensions doivent être dans la même unité.",
      "Saisissez les dimensions affichées pour cette forme. Pour les formes rondes, utilisez le rayon, c’est-à-dire la moitié du diamètre.",
      "Lisez le volume et ses conversions en litres, en mètres cubes et en gallons US.",
    ],
    formulas: [
      { title: "Cube et pavé droit", expression: "V = a³\nV = l × w × h", explanation: "Un cube a trois arêtes égales a ; pour un pavé, on multiplie la longueur, la largeur et la hauteur." },
      { title: "Cylindre et cône", expression: "V = πr²h\nV = 1/3 πr²h", explanation: "Un cône contient exactement le tiers du cylindre de même rayon de base r et de même hauteur h." },
      { title: "Sphère et demi-sphère", expression: "V = 4/3 πr³\nV = 2/3 πr³", explanation: "Une demi-sphère est la moitié d’une sphère de rayon r." },
      { title: "Pyramide à base carrée", expression: "V = 1/3 a²h", explanation: "Le tiers de l’aire de base a² multipliée par la hauteur perpendiculaire h." },
      { title: "Conversions d’unités", expression: "1 m³ = 1 000 L\n1 gal US = 3,785411784 L", explanation: "Le volume dans votre unité au cube est converti en mètres cubes avec le facteur de longueur exact, puis en litres et en gallons." },
    ],
    examples: [
      {
        title: "Une cuve d’eau cylindrique de 1,2 m de haut et 0,5 m de rayon",
        steps: ["V = π × 0,5² × 1,2", "= π × 0,3 ≈ 0,94248 m³", "0,94248 m³ × 1 000 ≈ 942,48 L, soit environ 248,98 gal US"],
      },
      {
        title: "Une boule de 4 pouces de rayon",
        steps: ["V = 4/3 × π × 4³", "= 4/3 × π × 64 ≈ 268,08 in³", "Soit environ 4,39 L ou 1,16 gal US"],
      },
      {
        title: "Une pyramide à base carrée de 9 cm de côté et 15 cm de haut",
        steps: ["Aire de base = 9² = 81 cm²", "V = 1/3 × 81 × 15 = 405 cm³", "405 cm³ = 0,405 L"],
      },
    ],
    assumptions: [
      "Les formes sont idéales : les arêtes sont droites, les formes rondes sont parfaitement circulaires, et le cylindre, le cône et la pyramide sont droits (le sommet se trouve exactement au-dessus du centre de la base).",
      "Le résultat correspond à l’espace délimité par les dimensions extérieures. Pour un récipient à parois épaisses, mesurez l’intérieur pour connaître sa contenance.",
      "Les gallons US sont des gallons liquides de 3,785411784 L. Les gallons impériaux ne sont pas affichés.",
    ],
    faqs: [
      {
        question: "Comment trouver le volume si je ne connais que le diamètre ?",
        answer: "Divisez le diamètre par deux pour obtenir le rayon, puis saisissez le rayon. Un pot de 30 cm de large a un rayon de 15 cm.",
      },
      {
        question: "Combien de litres y a-t-il dans un mètre cube ?",
        answer: "Exactement 1 000. Un litre est le volume d’un cube de 10 cm de côté, donc 1 000 cm³ font 1 L.",
      },
      {
        question: "Pourquoi un cône vaut-il le tiers d’un cylindre ?",
        answer: "Un cône se rétrécit régulièrement jusqu’à une pointe, et la somme de ses tranches circulaires de la base au sommet donne exactement le tiers de πr²h. Le même raisonnement montre qu’une pyramide vaut le tiers du pavé de même base et de même hauteur.",
      },
    ],
    sourcesUsedFor: [
      "Formules de volume du pavé droit, du cylindre, de la sphère et du cône.",
      "Le gallon US de 231 pouces cubes (3,785411784 L) et le pouce de 2,54 cm.",
    ],
  },
  text: {
    shape: "Forme",
    shapes: {
      cube: "Cube",
      box: "Pavé droit (parallélépipède rectangle)",
      cylinder: "Cylindre",
      sphere: "Sphère",
      hemisphere: "Demi-sphère",
      cone: "Cône",
      pyramid: "Pyramide à base carrée",
    },
    unit: "Unité de longueur",
    unitHelp: "Saisissez toutes les dimensions dans cette unité. Le volume s’affiche dans la même unité au cube.",
    units: { mm: "Millimètres (mm)", cm: "Centimètres (cm)", m: "Mètres (m)", in: "Pouces (in)", ft: "Pieds (ft)" },
    edge: "Longueur d’arête (a)",
    length: "Longueur (l)",
    width: "Largeur (w)",
    height: "Hauteur (h)",
    heightHelp: "La hauteur perpendiculaire, de la base jusqu’au sommet en ligne droite.",
    radius: "Rayon (r)",
    radiusHelp: "La moitié du diamètre.",
    baseSide: "Côté de la base (a)",
    volume: "Volume",
    formula: {
      cube: "V = a³",
      box: "V = l × w × h",
      cylinder: "V = πr²h",
      sphere: "V = 4/3 πr³",
      hemisphere: "V = 2/3 πr³",
      cone: "V = 1/3 πr²h",
      pyramid: "V = 1/3 a²h",
    },
    liters: "En litres",
    cubicMeters: "En mètres cubes",
    usGallons: "En gallons US",
    note: "1 litre vaut 1 000 cm³ et 1 gallon US vaut 3,785411784 litres.",
  },
};

export default fr;
