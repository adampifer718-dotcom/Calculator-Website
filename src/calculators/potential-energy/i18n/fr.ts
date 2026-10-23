import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PotentialEnergyText } from "../text/en";

const fr: CalculatorTranslation<PotentialEnergyText> = {
  content: {
    title: "Calculateur d’énergie potentielle",
    shortTitle: "Énergie potentielle",
    summary: "Calculez l’énergie potentielle de pesanteur (m·g·h) ou l’énergie stockée dans un ressort (½·k·x²), ou résolvez l’une ou l’autre formule pour la valeur manquante.",
    metaTitle: "Calculateur d’énergie potentielle – Ep = mgh et ½kx²",
    metaDescription:
      "Calculez l’énergie potentielle de pesanteur à partir de la masse, de la hauteur et de la gravité, ou l’énergie élastique d’un ressort, et trouvez m, h, k ou x.",
    keywords: ["énergie potentielle", "énergie potentielle de pesanteur", "Ep = mgh", "énergie potentielle élastique", "énergie d’un ressort", "1/2 kx²", "joules", "calcul énergie potentielle"],
    intro: [
      "L’énergie potentielle est l’énergie stockée du fait de la position d’un objet ou de sa déformation. Hissez une caisse de 12 kg sur une plateforme de 2,5 m et vous y stockez environ 294 joules, qu’elle restitue sous forme de mouvement si elle tombe. Comprimez un ressort et il stocke une énergie qu’il libère quand on le relâche.",
      "Ce calculateur traite les deux cas. Pour la pesanteur, il utilise Ep = m·g·h, avec la gravité de la Terre, de la Lune, de Mars ou une valeur personnalisée. Pour un ressort, il utilise Ep = ½·k·x². Vous pouvez aussi résoudre chaque formule à l’envers pour trouver la masse, la hauteur, la raideur du ressort ou le déplacement.",
    ],
    howToUse: [
      "Choisissez l’énergie potentielle de pesanteur ou l’énergie potentielle élastique.",
      "Choisissez la grandeur à calculer. Le champ correspondant disparaît.",
      "Saisissez les autres valeurs et choisissez leurs unités. Pour la pesanteur, choisissez un astre ou saisissez votre propre valeur.",
      "Lisez le résultat dans l’unité choisie, ainsi que la même valeur dans les autres unités.",
    ],
    formulas: [
      { title: "Énergie potentielle de pesanteur", expression: "Ep = m × g × h", explanation: "Avec m en kilogrammes, g en m/s² et h en mètres, Ep est en joules. h est mesurée à partir d’un niveau de référence que vous choisissez." },
      { title: "Énergie potentielle élastique", expression: "Ep = ½ × k × x²", explanation: "k est la raideur du ressort en N/m et x l’allongement ou la compression par rapport à la longueur à vide, en mètres." },
      { title: "Résolution à l’envers", expression: "m = Ep ÷ (g·h)   h = Ep ÷ (m·g)\nk = 2·Ep ÷ x²   x = √(2·Ep ÷ k)", explanation: "Les mêmes formules, réarrangées pour l’inconnue." },
      { title: "Unités d’énergie", expression: "1 kJ = 1 000 J   1 Wh = 3 600 J   1 kWh = 3 600 000 J\n1 ft·lbf = 1,3558179483314 J", explanation: "Un pied-livre-force vaut 0,3048 m × 4,4482216152605 N, deux valeurs exactes." },
    ],
    examples: [
      { title: "Hisser une caisse de 12 kg sur une plateforme de 2,5 m", steps: ["Ep = m × g × h", "= 12 × 9,80665 × 2,5", "= 294,1995 J (environ 0,29 kJ)"] },
      { title: "À quelle hauteur 1 kWh peut-il hisser une voiture de 1 000 kg ?", steps: ["1 kWh = 3 600 000 J", "h = Ep ÷ (m × g) = 3 600 000 ÷ (1 000 × 9,80665)", "≈ 367,10 m"] },
      { title: "Un ressort de 400 N/m comprimé de 15 cm", steps: ["15 cm = 0,15 m", "Ep = ½ × 400 × 0,15²", "= 200 × 0,0225 = 4,5 J"] },
    ],
    assumptions: [
      "La gravité est considérée comme constante sur toute la hauteur, ce qui est exact près de la surface d’une planète. Pour des hauteurs de plusieurs centaines de kilomètres, la diminution de la gravité avec la distance devient importante.",
      "Pour la Terre, la pesanteur normale de 9,80665 m/s² est utilisée ; elle est exacte par définition. La gravité réelle varie légèrement avec la latitude et l’altitude. Les valeurs de la Lune et de Mars sont des valeurs moyennes en surface tirées des fiches de la NASA.",
      "Le ressort est idéal : il suit la loi de Hooke et n’est pas étiré au-delà de sa limite d’élasticité. Les frottements, la résistance de l’air et l’énergie perdue sous forme de chaleur sont ignorés.",
    ],
    faqs: [
      { question: "À partir d’où faut-il mesurer la hauteur ?", answer: "À partir de n’importe quel niveau choisi comme zéro, comme le sol, le terrain ou le dessus d’une table. L’énergie potentielle dépend de ce choix, mais pas la variation d’énergie entre deux hauteurs, et c’est cette variation qui compte en pratique." },
      { question: "Quel est le lien entre énergie potentielle et énergie cinétique ?", answer: "Quand un objet tombe sans résistance de l’air, son énergie potentielle se transforme en énergie cinétique. Une caisse de 12 kg lâchée de 2,5 m atteint le sol avec environ 294 J d’énergie cinétique, à une vitesse de √(2gh) ≈ 7,0 m/s." },
      { question: "Le fait que le ressort soit étiré ou comprimé change-t-il quelque chose ?", answer: "Non. L’énergie dépend de x², donc étirer ou comprimer un ressort idéal de la même distance stocke la même énergie." },
    ],
    sourcesUsedFor: [
      "Énergie potentielle de pesanteur près de la surface de la Terre (mgh), énergie potentielle élastique d’un ressort (½kx²) et choix du niveau zéro.",
      "La gravité à la surface de la Lune, 1,62 m/s².",
      "La gravité moyenne à la surface de Mars, 3,73 m/s².",
    ],
  },
  text: {
    mode: "Type d’énergie potentielle",
    modes: { gravitational: "De pesanteur (m·g·h)", elastic: "Élastique, ressort (½·k·x²)" },
    solve: "Calculer",
    gSolveOptions: { energy: "Énergie potentielle (Ep)", mass: "Masse (m)", height: "Hauteur (h)" },
    eSolveOptions: { energy: "Énergie stockée (Ep)", k: "Raideur du ressort (k)", x: "Allongement ou compression (x)" },
    mass: "Masse (m)",
    massUnit: "Unité de masse",
    massUnits: { kg: "Kilogrammes (kg)", g: "Grammes (g)", lb: "Livres (lb)" },
    height: "Hauteur au-dessus du niveau de référence (h)",
    heightHelp: "Mesurée à partir du niveau que vous prenez comme zéro, par exemple le sol ou le terrain.",
    heightUnit: "Unité de hauteur",
    heightUnits: { m: "Mètres (m)", cm: "Centimètres (cm)", ft: "Pieds (ft)" },
    gravity: "Gravité (g)",
    gravityOptions: { earth: "Terre, pesanteur normale (9,80665 m/s²)", moon: "Lune (1,62 m/s²)", mars: "Mars (3,73 m/s²)", custom: "Valeur personnalisée" },
    customG: "Gravité personnalisée",
    energy: "Énergie potentielle (Ep)",
    energyUnit: "Unité d’énergie",
    energyUnits: { J: "Joules (J)", kJ: "Kilojoules (kJ)", Wh: "Wattheures (Wh)", kWh: "Kilowattheures (kWh)", ftlbf: "Pieds-livres-force (ft·lbf)" },
    k: "Raideur du ressort (k)",
    kHelp: "La rigidité du ressort : la force en newtons nécessaire pour l’allonger d’un mètre.",
    x: "Allongement ou compression (x)",
    xHelp: "La distance par rapport à la longueur à vide du ressort. La compression et l’allongement stockent la même énergie.",
    xUnit: "Unité de déplacement",
    xUnits: { m: "Mètres (m)", cm: "Centimètres (cm)", in: "Pouces (in)" },
    results: {
      gEnergy: "Énergie potentielle de pesanteur",
      mass: "Masse nécessaire",
      height: "Hauteur nécessaire",
      eEnergy: "Énergie potentielle élastique",
      k: "Raideur nécessaire",
      x: "Allongement ou compression nécessaire",
    },
    captions: {
      gEnergy: "Ep = m × g × h",
      mass: "m = Ep ÷ (g × h)",
      height: "h = Ep ÷ (m × g)",
      eEnergy: "Ep = ½ × k × x²",
      k: "k = 2 × Ep ÷ x²",
      x: "x = √(2 × Ep ÷ k)",
    },
    inUnit: "En {unit}",
    weight: "Poids (force de pesanteur, m × g)",
    fallSpeed: "Vitesse après une chute de hauteur h (sans résistance de l’air)",
    springForce: "Force du ressort pour ce déplacement (k × x)",
    notes: {
      reference: "L’énergie potentielle est mesurée par rapport à la hauteur choisie comme zéro. Seules les différences de hauteur comptent.",
      gravity: "Utilise g = {g} m/s², considérée comme constante sur toute la hauteur.",
      hooke: "Suppose un ressort idéal qui suit la loi de Hooke (F = k × x) et n’est pas étiré au-delà de sa limite d’élasticité.",
    },
  },
};

export default fr;
