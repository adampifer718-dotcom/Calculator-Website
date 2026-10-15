import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DensityText } from "../text/en";

const fr: CalculatorTranslation<DensityText> = {
  content: {
    title: "Calculateur de masse volumique",
    shortTitle: "Masse volumique",
    summary: "Calculez la masse volumique à partir de la masse et du volume, ou retrouvez une masse ou un volume, en unités métriques ou américaines.",
    metaTitle: "Calculateur de masse volumique – Résoudre ρ = m/V",
    metaDescription: "Résolvez ρ = m/V pour la masse volumique, la masse ou le volume. Grammes, kilogrammes ou livres, cm³, litres, m³ ou ft³ ; résultat en kg/m³, g/cm³ et lb/ft³.",
    keywords: ["masse volumique", "densité", "calcul masse volumique", "masse", "volume", "rho", "kg/m3", "g/cm3", "densité relative"],
    intro: [
      "La masse volumique indique la quantité de masse contenue dans un volume donné. Un litre d’eau a une masse d’environ un kilogramme, alors qu’un litre d’acier en pèse près de huit.",
      "Ce calculateur réarrange ρ = m/V pour trouver celle des trois valeurs qui manque. Les unités sont converties automatiquement, et la réponse s’affiche aussi en kg/m³, g/cm³ et lb/ft³, ou dans les autres unités de masse ou de volume.",
    ],
    howToUse: [
      "Choisissez la valeur à trouver : masse volumique, masse ou volume.",
      "Saisissez les deux valeurs connues et choisissez une unité pour chacune.",
      "Dans la liste d’unités de la valeur recherchée, choisissez l’unité souhaitée pour la réponse.",
      "Lisez le résultat, ses équivalents dans d’autres unités et la comparaison avec l’eau.",
    ],
    formulas: [
      { title: "Masse volumique", expression: "ρ = m ÷ V", explanation: "La masse divisée par le volume qu’elle occupe." },
      { title: "Masse", expression: "m = ρ × V", explanation: "Multipliez la masse volumique par le volume." },
      { title: "Volume", expression: "V = m ÷ ρ", explanation: "Divisez la masse par la masse volumique." },
      { title: "Facteurs d’unités", expression: "1 g/cm³ = 1 000 kg/m³ ≈ 62,428 lb/ft³", explanation: "D’après les définitions exactes 1 lb = 0,45359237 kg et 1 ft³ = 0,028316846592 m³." },
    ],
    examples: [
      { title: "Un bloc de métal de 810 g et 300 cm³", steps: ["ρ = 810 g ÷ 300 cm³", "= 2,7 g/cm³, soit 2 700 kg/m³"] },
      { title: "Masse de 2,5 L d’huile à 0,92 g/cm³", steps: ["0,92 g/cm³ = 920 kg/m³ et 2,5 L = 0,0025 m³", "m = 920 × 0,0025 = 2,3 kg"] },
      { title: "Volume de 39,25 kg d’acier à 7 850 kg/m³", steps: ["V = 39,25 ÷ 7 850 = 0,005 m³", "0,005 m³ = 5 L"] },
    ],
    assumptions: [
      "Le matériau est considéré comme homogène : une seule masse volumique décrit tout l’échantillon.",
      "La comparaison avec l’eau utilise 1 000 kg/m³. L’eau réelle est un peu moins dense à température ambiante (environ 998 kg/m³ à 20 °C).",
      "La masse volumique des liquides et des gaz dépend de la température et de la pression. Utilisez une valeur mesurée dans vos conditions.",
    ],
    faqs: [
      { question: "1 g/cm³ équivaut-il à 1 g/mL ?", answer: "Oui. Un centimètre cube et un millilitre représentent le même volume, les deux unités sont donc identiques." },
      { question: "Comment convertir des g/cm³ en kg/m³ ?", answer: "Multipliez par 1 000. Par exemple, 2,7 g/cm³ font 2 700 kg/m³." },
      { question: "Qu’est-ce que la densité relative ?", answer: "C’est la masse volumique d’un matériau divisée par celle de l’eau. Au-dessus de 1, le matériau coule dans l’eau ; en dessous de 1, il flotte." },
    ],
    sourcesUsedFor: [
      "Définition ρ = m/V et unité SI kg/m³.",
      "Facteurs de conversion de la livre, du pied cube et des lb/ft³.",
    ],
  },
  text: {
    solve: "Trouver",
    solveOptions: { density: "Masse volumique (ρ)", mass: "Masse (m)", volume: "Volume (V)" },
    mass: "Masse (m)",
    massUnit: "Unité de masse",
    massUnits: { g: "Grammes (g)", kg: "Kilogrammes (kg)", lb: "Livres (lb)" },
    volume: "Volume (V)",
    volumeUnit: "Unité de volume",
    volumeUnits: { cm3: "Centimètres cubes (cm³ = mL)", L: "Litres (L)", m3: "Mètres cubes (m³)", ft3: "Pieds cubes (ft³)" },
    density: "Masse volumique (ρ)",
    densityUnit: "Unité de masse volumique",
    densityUnits: { gcm3: "Grammes par centimètre cube (g/cm³)", kgm3: "Kilogrammes par mètre cube (kg/m³)", lbft3: "Livres par pied cube (lb/ft³)" },
    unitHelp: "Pour la valeur recherchée, c’est l’unité de la réponse.",
    results: { density: "Masse volumique", mass: "Masse", volume: "Volume" },
    inUnit: "En {unit}",
    relative: "Par rapport à l’eau (1 000 kg/m³)",
    floats: "Moins dense que l’eau : flotterait dans de l’eau pure.",
    sinks: "Plus dense que l’eau : coulerait dans de l’eau pure.",
    note: "1 cm³ équivaut à 1 mL. La masse volumique des liquides et des gaz varie avec la température, et celle des gaz aussi avec la pression.",
  },
};

export default fr;
