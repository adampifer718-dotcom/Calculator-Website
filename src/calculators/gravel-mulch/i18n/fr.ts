import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { GravelMulchText } from "../text/en";

const fr: CalculatorTranslation<GravelMulchText> = {
  content: {
    title: "Calculateur de gravier et de paillis",
    shortTitle: "Gravier et paillis",
    summary: "Calculez combien de verges cubes ou de mètres cubes de gravier, de pierre concassée ou de paillis commander, avec le poids, le nombre de sacs et le coût.",
    metaTitle: "Calculateur de gravier et de paillis – Volume, poids et sacs",
    metaDescription:
      "Estimez le gravier, la pierre concassée ou le paillis pour une surface rectangulaire ou ronde en yd³ ou m³, avec le poids en tonnes, les sacs et le coût.",
    keywords: ["calcul gravier", "calcul paillis", "quantité de gravier", "gravier m³", "tonnes de gravier", "pierre concassée", "sacs de paillis", "aménagement paysager"],
    intro: [
      "Le gravier, la pierre concassée et le paillis se vendent au volume (verges cubes ou mètres cubes) ou au poids (tonnes courtes américaines ou tonnes métriques). Pour savoir combien commander, multipliez la surface à couvrir par l’épaisseur de la couche, puis utilisez la masse volumique apparente du matériau pour convertir ce volume en poids.",
      "Ce calculateur gère les massifs rectangulaires et ronds en unités américaines ou métriques, et affiche le volume dans les deux systèmes, le poids, le nombre de sacs si vous achetez en sacs, et le coût selon un prix à la tonne ou à la verge cube.",
    ],
    howToUse: [
      "Choisissez les unités américaines (pieds et pouces) ou métriques (mètres et centimètres).",
      "Choisissez un rectangle ou un cercle et saisissez ses dimensions.",
      "Saisissez l’épaisseur de la couche à étaler.",
      "Choisissez le matériau. Une masse volumique apparente type est préremplie ; remplacez-la par la valeur de votre fournisseur si vous l’avez.",
      "Si vous le souhaitez, saisissez une taille de sac et un prix à la tonne courte ou à la verge cube (à la tonne ou au m³ en métrique) pour voir les sacs et le coût.",
    ],
    formulas: [
      { title: "Surface", expression: "A = L × l, ou A = π × d² ÷ 4 pour un cercle", explanation: "L et l sont la longueur et la largeur, d le diamètre." },
      { title: "Volume", expression: "V = A × épaisseur", explanation: "En pieds et pouces, V (ft³) = A × épaisseur (in) ÷ 12 et 1 yd³ = 27 ft³. En mètres et centimètres, V (m³) = A × épaisseur (cm) ÷ 100." },
      { title: "Poids", expression: "poids = V × masse volumique apparente", explanation: "1 tonne courte = 2 000 lb ; 1 tonne = 1 000 kg." },
      { title: "Sacs", expression: "sacs = ⌈V ÷ taille du sac⌉", explanation: "Arrondi au sac entier supérieur." },
    ],
    examples: [
      { title: "Allée en gravier de 20 ft × 4 ft, 3 in d’épaisseur", steps: ["Volume = 20 × 4 × 3 ÷ 12 = 20 ft³", "= 20 ÷ 27 ≈ 0,74 yd³", "Poids = 20 × 100 = 2 000 lb = 1 tonne courte, soit environ 45 $ à 45 $ la tonne courte"] },
      { title: "Massif rond de 3 m de diamètre avec 8 cm d’écorces en sacs de 50 L", steps: ["Surface = π × 3² ÷ 4 ≈ 7,07 m²", "Volume = 7,07 × 0,08 ≈ 0,565 m³ (565 L)", "Sacs = 565 ÷ 50 ≈ 11,3, donc 12 sacs à acheter ; poids ≈ 170 kg"] },
      { title: "Dalle en pierre concassée de 12 ft × 10 ft, 4 in d’épaisseur, à 38 $ la verge cube", steps: ["Volume = 12 × 10 × 4 ÷ 12 = 40 ft³ ≈ 1,48 yd³", "Poids = 40 × 92,6 = 3 704 lb ≈ 1,85 tonne courte", "Coût = 1,48 × 38 $ ≈ 56,30 $"] },
    ],
    assumptions: [
      "Les masses volumiques apparentes sont des valeurs types pour un matériau en vrac et sec, arrondies à partir de tables publiées. Les valeurs réelles varient selon le type de roche, l’humidité, la granulométrie et le compactage ; un matériau mouillé peut peser nettement plus. Renseignez-vous auprès de votre fournisseur.",
      "La surface est considérée comme plane et la couche d’épaisseur uniforme. Les couches de fondation compactées demandent plus de matériau en vrac que leur volume fini.",
      "Les prix sont ceux que vous saisissez ; le coût exclut la livraison, les taxes, les bordures et le géotextile.",
    ],
    faqs: [
      { question: "Quelle épaisseur de gravier ou de paillis prévoir ?", answer: "Le paillis décoratif est souvent étalé sur environ 2 à 4 in (5 à 10 cm) d’épaisseur et le gravier décoratif sur 2 à 3 in. Les allées carrossables et les chemins avec une fondation compactée demandent des couches plus épaisses ; suivez les recommandations propres à votre projet." },
      { question: "Combien de pieds carrés couvre une verge cube ?", answer: "Une verge cube couvre 324 ft² sur 1 in d’épaisseur, 108 ft² sur 3 in et 81 ft² sur 4 in. Divisez 324 par l’épaisseur en pouces." },
      { question: "Pourquoi mon fournisseur annonce-t-il un poids différent ?", answer: "La masse volumique apparente dépend de la pierre, de la taille des morceaux et de l’humidité du matériau. Les fournisseurs connaissent le poids de leurs propres produits : utilisez leur valeur pour commander à la tonne." },
    ],
    sourcesUsedFor: [
      "Les poids types d’environ 2 700 lb par verge cube pour le gravier et 2 500 lb par verge cube pour la pierre concassée, utilisés pour les masses volumiques par défaut.",
      "Un poids type d’environ 500 lb par verge cube pour les copeaux de bois broyés, utilisé pour la valeur par défaut du paillis.",
    ],
  },
  text: {
    units: "Unités",
    unitSystems: { imperial: "US (ft, in)", metric: "Métrique (m, cm)" },
    shape: "Forme de la surface",
    shapes: { rectangle: "Rectangle", circle: "Cercle" },
    length: "Longueur",
    width: "Largeur",
    diameter: "Diamètre",
    depth: "Épaisseur",
    depthHelp: "L’épaisseur finie de la couche. Le gravier et le paillis décoratifs sont souvent étalés sur environ 2 à 4 in (5 à 10 cm).",
    material: "Matériau",
    materials: { gravel: "Gravier", crushedStone: "Pierre concassée", woodMulch: "Copeaux de bois ou paillis d’écorces", custom: "Autre (saisir la masse volumique)" },
    density: "Masse volumique apparente",
    densityHelp: "Poids par unité de volume en vrac. Une valeur type est préremplie ; la valeur de votre fournisseur pour le produit exact est préférable, car l’humidité et la granulométrie la modifient.",
    bag: "Taille du sac (facultatif)",
    bagHelp: "Remplissez ce champ pour voir combien de sacs acheter au lieu d’une livraison en vrac.",
    priceBasis: "Le prix est exprimé",
    priceBases: { weight: "À la tonne courte / tonne", volume: "À la verge cube / au m³" },
    price: "Prix (facultatif)",
    priceHelp: "Laissez vide pour ne pas estimer le coût.",
    volume: "Volume nécessaire",
    caption: "{area} sur {depth} d’épaisseur.",
    area: "Surface couverte",
    volumeCubicFeet: "Volume en pieds cubes",
    volumeOther: "Volume dans l’autre système",
    weightShortTons: "Poids en tonnes courtes américaines",
    weightTonnes: "Poids en tonnes métriques",
    weightPounds: "Poids en livres",
    weightKilograms: "Poids en kilogrammes",
    bags: "Sacs nécessaires",
    shortTonUnit: "tn courte",
    cost: "Coût estimé",
    notes: {
      density: "Le poids utilise une masse volumique apparente de {density}. Les masses volumiques varient selon l’humidité, la granulométrie et le compactage ; renseignez-vous auprès de votre fournisseur.",
      order: "Les fournisseurs vendent généralement par quantités fixes : arrondissez la commande au-dessus et prévoyez un peu de marge pour le tassement et les irrégularités du sol.",
      shortTon: "Une tonne courte américaine vaut 2 000 lb (907,18474 kg) ; une tonne métrique vaut 1 000 kg.",
    },
  },
};

export default fr;
