import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RoofPitchText } from "../text/en";

const fr: CalculatorTranslation<RoofPitchText> = {
  content: {
    title: "Calculateur de pente de toit",
    shortTitle: "Pente de toit",
    summary: "Convertissez la hauteur et la portée d’un toit, ou son angle, en pente sur 12, en degrés, en pourcentage et en longueur de chevron.",
    metaTitle: "Calculateur de pente de toit – X sur 12, angle et chevron",
    metaDescription: "Convertissez hauteur et portée ou un angle de toit en pente en pouces sur 12, en degrés et en pourcentage, avec le coefficient et la longueur de chevron.",
    keywords: ["pente de toit", "pente de toiture", "inclinaison toit", "calcul pente toiture", "pente 4/12", "angle de toit", "longueur de chevron", "coefficient de pente"],
    intro: [
      "La pente d’un toit s’exprime souvent en hauteur pour 12 de portée : un toit à 6 sur 12 s’élève de 6 pouces pour chaque 12 pouces parcourus à l’horizontale. La même pente peut aussi se décrire par un angle en degrés ou par un pourcentage.",
      "Saisissez une hauteur et une portée mesurées, ou un angle tiré d’un plan, et le calculateur donne les trois formes. Ajoutez la portée horizontale du toit pour obtenir la longueur du chevron, du nu du mur jusqu’au faîtage.",
    ],
    howToUse: [
      "Indiquez si vous connaissez la hauteur et la portée, ou l’angle.",
      "Saisissez la hauteur et la portée dans la même unité, ou l’angle en degrés.",
      "Si vous le souhaitez, saisissez la portée du toit, soit la moitié de la largeur du bâtiment, pour obtenir la longueur du chevron.",
      "Lisez la pente sur 12, l’angle, la pente en pourcentage et les valeurs du chevron.",
    ],
    formulas: [
      { title: "Pente sur 12", expression: "pente = 12 × hauteur ÷ portée", explanation: "Ramène la pente à une portée de 12 unités." },
      { title: "Angle", expression: "θ = arctan(hauteur ÷ portée)", explanation: "Dans l’autre sens, hauteur ÷ portée = tan θ." },
      { title: "Pente en pourcentage", expression: "pente = 100 × hauteur ÷ portée", explanation: "Un toit à 12 sur 12 correspond à une pente de 100 %, soit 45°." },
      { title: "Longueur de chevron", expression: "chevron = portée du toit × √(1 + (hauteur ÷ portée)²)", explanation: "Théorème de Pythagore : la racine carrée est le coefficient de longueur du chevron." },
    ],
    examples: [
      { title: "6 pouces de hauteur pour 12 pouces de portée", steps: ["pente = 12 × 6 ÷ 12 = 6 sur 12", "θ = arctan(0,5) ≈ 26,57°, pente de 50 %", "coefficient = √1,25 ≈ 1,1180"] },
      { title: "5 ft de hauteur pour 8 ft, avec une portée de toit de 14 ft", steps: ["pente = 12 × 5 ÷ 8 = 7,5 sur 12", "coefficient = √(1 + 0,625²) ≈ 1,1792", "chevron = 14 × 1,1792 ≈ 16,509 ft"] },
      { title: "Un toit à 30°", steps: ["hauteur ÷ portée = tan 30° ≈ 0,5774", "pente = 12 × 0,5774 ≈ 6,93 sur 12", "pente ≈ 57,74 %"] },
    ],
    assumptions: [
      "Il s’agit uniquement de géométrie. Le dimensionnement des chevrons, le calcul de structure, les pentes minimales selon le matériau de couverture et les règles de construction locales relèvent d’un professionnel qualifié.",
      "La hauteur et la portée doivent être dans la même unité. La longueur du chevron utilise l’unité choisie et n’inclut ni débord, ni planche de faîtage, ni marge de coupe.",
      "Le toit est assimilé à un plan droit, avec un chevron rectiligne du nu du mur jusqu’au faîtage.",
    ],
    faqs: [
      { question: "Que signifie une pente de 4/12 ?", answer: "Le toit s’élève de 4 unités pour chaque 12 unités de portée horizontale, soit environ 18,43° ou une pente de 33,3 %." },
      { question: "« Pitch » et « slope » désignent-ils la même chose ?", answer: "Dans l’usage courant, oui. Au sens strict, certains charpentiers définissent le « pitch » comme la hauteur totale divisée par la largeur totale du bâtiment, ce qui donne la moitié de la pente hauteur sur portée. Ce calculateur utilise la hauteur pour 12 de portée." },
      { question: "Comment mesurer la hauteur et la portée ?", answer: "Tenez un niveau à l’horizontale contre le toit ou un chevron, marquez 12 pouces le long du niveau, puis mesurez verticalement depuis ce repère jusqu’à la surface du toit. Cette distance verticale est la hauteur pour 12." },
    ],
    sourcesUsedFor: ["Expression de la pente d’un toit en hauteur pour 12 unités de portée, et définition de la portée."],
  },
  text: {
    mode: "Point de départ",
    modeOptions: { riseRun: "Hauteur et portée", angle: "Angle" },
    unit: "Unité de longueur",
    units: { in: "Pouces (in)", ft: "Pieds (ft)", cm: "Centimètres (cm)", m: "Mètres (m)" },
    rise: "Hauteur",
    riseHelp: "Hauteur verticale gagnée sur la portée.",
    run: "Portée",
    runHelp: "Distance horizontale, dans la même unité que la hauteur.",
    angle: "Angle du toit",
    angleTooSteep: "L’angle doit être inférieur à 90°.",
    roofRun: "Portée du toit (facultatif)",
    roofRunHelp: "La moitié de la largeur du bâtiment, de l’extérieur du mur jusqu’à l’aplomb du faîtage. Sert au calcul de la longueur du chevron.",
    pitch: "Pente du toit",
    pitchText: "{rise} sur 12",
    pitchCaption: "Pouces de hauteur pour 12 pouces de portée (toute unité convient, tant que les deux sont identiques).",
    angleOut: "Angle",
    slopePercent: "Pente",
    multiplier: "Coefficient de longueur du chevron",
    rafter: "Longueur du chevron (sans débord)",
    roofRise: "Hauteur sur la portée du toit",
    note: "La longueur du chevron se mesure le long de la pente, du nu du mur jusqu’au faîtage, sans débord, planche de faîtage ni marge de coupe.",
  },
};

export default fr;
