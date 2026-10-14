import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ConcreteText } from "../text/en";

const fr: CalculatorTranslation<ConcreteText> = {
  content: {
    title: "Calculateur de béton",
    shortTitle: "Béton",
    summary: "Estimez la quantité de béton à commander pour des dalles, semelles, poteaux ronds et tubes creux, avec une marge de perte facultative.",
    metaTitle: "Calculateur de béton – Volume de dalle, poteau et tube",
    metaDescription:
      "Estimez le volume de béton d’une dalle, d’une semelle, d’un poteau rond ou d’un tube en mètres cubes, yards cubes, pieds cubes et litres, avec une marge de perte.",
    keywords: ["calcul béton", "volume de béton", "calcul dalle béton", "béton m3", "semelle de fondation", "poteau béton", "béton prêt à l’emploi", "quantité de béton"],
    intro: [
      "Le béton se commande au volume. Saisissez les dimensions d’une dalle, d’une semelle, d’un poteau rond ou d’un tube creux pour savoir combien il vous en faut, dans les unités utilisées par les fournisseurs.",
      "Une marge de perte facultative couvre les pertes au coulage, les irrégularités du sol et les coffrages qui se déforment vers l’extérieur, afin que la livraison ne soit pas insuffisante.",
    ],
    howToUse: [
      "Choisissez la forme et le système d’unités, métrique ou américain.",
      "Saisissez les dimensions : les grandes longueurs en mètres ou en pieds, l’épaisseur et les diamètres en centimètres ou en pouces.",
      "Saisissez le nombre d’éléments identiques à couler.",
      "Réglez la marge de perte (5 à 10 % est courant) et lisez le volume à commander.",
    ],
    formulas: [
      { title: "Dalle ou semelle", expression: "V = longueur × largeur × épaisseur", explanation: "Un bloc rectangulaire. Convertissez d’abord toutes les dimensions dans la même unité." },
      { title: "Poteau rond", expression: "V = π × (diamètre ÷ 2)² × hauteur", explanation: "Un cylindre, comme un poteau coulé dans un coffrage en carton." },
      { title: "Tube creux", expression: "V = π × ((extérieur ÷ 2)² − (intérieur ÷ 2)²) × hauteur", explanation: "Le cylindre extérieur moins le noyau creux." },
      { title: "Avec la perte", expression: "Commande = V × nombre d’éléments × (1 + perte % ÷ 100)", explanation: "1 yd³ = 0,764555 m³ et 1 m³ = 1 000 L." },
    ],
    examples: [
      {
        title: "Dalle de terrasse de 4 m × 3 m, 10 cm d’épaisseur, 10 % de perte",
        steps: ["V = 4 m × 3 m × 0,10 m = 1,2 m³", "Avec 10 % de perte : 1,2 × 1,10 = 1,32 m³"],
      },
      {
        title: "Dalle de garage de 10 ft × 10 ft, 4 in d’épaisseur, sans perte",
        steps: ["V = 10 ft × 10 ft × 4/12 ft = 33,33 ft³", "33,33 ft³ ÷ 27 = 1,235 yd³"],
      },
    ],
    assumptions: [
      "Les formes sont des rectangles et des cylindres parfaits ; mesurez les coffrages réels, car le sol et les coffrages sont rarement parfaitement plans ou droits.",
      "La marge de perte est un pourcentage du volume exact ; elle ne tient pas compte des armatures, qui déplacent une petite quantité de béton.",
      "Il s’agit uniquement d’une estimation de volume, et non d’un conseil d’ingénierie ni d’un dimensionnement structurel. L’épaisseur, le ferraillage et la résistance du béton doivent respecter les normes locales ou l’avis d’un ingénieur.",
    ],
    faqs: [
      { question: "Combien de béton supplémentaire faut-il commander ?", answer: "Une marge de 5 à 10 % est courante pour une dalle sur sol préparé ; une excavation irrégulière peut nécessiter davantage. Manquer de béton en plein coulage crée des reprises fragiles : les fournisseurs recommandent donc généralement d’arrondir au-dessus." },
      { question: "Combien de pieds cubes y a-t-il dans un yard cube ?", answer: "27, car un yard mesure 3 pieds et 3 × 3 × 3 = 27. Un yard cube représente environ 0,765 mètre cube." },
      { question: "Puis-je l’utiliser pour des sacs de béton prêt à gâcher ?", answer: "Oui : divisez le volume par le rendement indiqué sur le sac, qui varie selon les produits, puis arrondissez au-dessus." },
    ],
    sourcesUsedFor: ["Facteurs de conversion exacts entre pieds, pouces, mètres, yards cubes et mètres cubes."],
  },
  text: {
    shape: "Forme",
    shapes: { slab: "Dalle ou semelle", column: "Poteau rond", tube: "Tube creux" },
    units: "Unités",
    unitSystems: { metric: "Métriques (m, cm)", imperial: "Américaines (ft, in)" },
    length: "Longueur",
    width: "Largeur",
    thickness: "Épaisseur",
    diameter: "Diamètre",
    outerDiameter: "Diamètre extérieur",
    innerDiameter: "Diamètre intérieur",
    height: "Hauteur",
    quantity: "Nombre d’éléments identiques",
    waste: "Marge de perte",
    wasteHelp: "Marge pour les pertes au coulage, les irrégularités du sol et le surcreusement. 5 à 10 % est courant ; saisissez 0 pour le volume exact.",
    errors: { inner: "Le diamètre intérieur doit être inférieur au diamètre extérieur." },
    volume: "Béton à commander",
    caption: "{exact} sans la marge de perte de {waste}.",
    exact: "Volume exact (sans perte)",
    inCubicMetres: "En mètres cubes",
    inCubicYards: "En yards cubes",
    inCubicFeet: "En pieds cubes",
    inLitres: "En litres",
    notes: {
      order: "Le béton prêt à l’emploi se vend au mètre cube ou au yard cube ; arrondissez au palier de commande minimal de votre fournisseur.",
      structural: "Cet outil estime uniquement le volume. L’épaisseur de la dalle, le ferraillage, la résistance du béton et les dimensions des semelles doivent respecter les règles de construction locales ou les plans d’un ingénieur.",
    },
  },
};

export default fr;
