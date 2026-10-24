import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ForceText } from "../text/en";

const fr: CalculatorTranslation<ForceText> = {
  content: {
    title: "Calculateur de force (F = ma)",
    shortTitle: "Force",
    summary: "Résolvez la deuxième loi de Newton pour la force, la masse ou l’accélération, en newtons, livres-force, kilogrammes, livres ou g.",
    metaTitle: "Calculateur de force (F = ma) – Force, masse ou accélération",
    metaDescription: "Résolvez F = ma pour la force, la masse ou l’accélération en N, kN, lbf ou dyn, kg, g, lb ou t, et m/s², ft/s² ou g, avec le résultat dans chaque unité.",
    keywords: ["calcul de force", "F = ma", "deuxième loi de Newton", "principe fondamental de la dynamique", "newton", "livre-force", "masse", "accélération"],
    intro: [
      "La deuxième loi de Newton relie trois grandeurs : la force nette exercée sur un objet, sa masse et l’accélération qui en résulte. Poussez deux fois plus fort et l’accélération double ; poussez un objet deux fois plus lourd avec la même force et il accélère deux fois moins.",
      "Choisissez la valeur à trouver et saisissez les deux autres. Le calculateur accepte les unités métriques et américaines, affiche la réponse dans chaque unité de sa catégorie et donne l’équivalent en poids de la force : la masse qui exercerait cette force sur une balance sous la pesanteur normale.",
    ],
    howToUse: [
      "Choisissez la valeur à trouver : force, masse ou accélération.",
      "Saisissez les deux valeurs connues et choisissez une unité pour chacune.",
      "Dans la liste d’unités de la valeur recherchée, choisissez l’unité souhaitée pour la réponse.",
      "Lisez le résultat, ses équivalents dans les autres unités et l’équivalent en poids de la force.",
    ],
    formulas: [
      { title: "Force", expression: "F = m × a", explanation: "La force nette est égale à la masse multipliée par l’accélération. 1 N communique à 1 kg une accélération de 1 m/s²." },
      { title: "Masse", expression: "m = F ÷ a", explanation: "Divisez la force par l’accélération qu’elle produit." },
      { title: "Accélération", expression: "a = F ÷ m", explanation: "Divisez la force nette par la masse." },
      { title: "Facteurs d’unités", expression: "1 lbf = 0,45359237 kg × 9,80665 m/s² = 4,4482216152605 N ; 1 dyn = 10⁻⁵ N ; 1 g = 9,80665 m/s²", explanation: "Valeurs exactes par définition. L’équivalent en poids vaut |F| ÷ 9,80665 m/s²." },
    ],
    examples: [
      {
        title: "Force pour accélérer une voiture de 1 350 kg à 2,8 m/s²",
        steps: ["F = 1 350 kg × 2,8 m/s² = 3 780 N", "3 780 N ÷ 1 000 = 3,78 kN"],
      },
      {
        title: "Masse d’une caisse qu’une poussée de 600 N accélère à 1,5 m/s²",
        steps: ["m = 600 N ÷ 1,5 m/s²", "= 400 kg"],
      },
      {
        title: "Accélération en g d’un chariot de 20 lb tiré avec 30 lbf",
        steps: ["30 lbf = 133,4466 N et 20 lb = 9,0718 kg", "a = 133,4466 ÷ 9,0718 ≈ 14,71 m/s²", "14,71 ÷ 9,80665 = 1,5 g, car une livre-force est le poids d’une livre sous la pesanteur normale"],
      },
    ],
    assumptions: [
      "F est la force nette : la somme vectorielle de toutes les forces qui agissent sur l’objet, frottement et traînée compris. L’outil traite la force et l’accélération le long d’une seule droite ; une valeur négative indique donc le sens opposé.",
      "La masse est constante. Les fusées qui brûlent du carburant, ou d’autres systèmes qui gagnent ou perdent de la masse, nécessitent la forme de la loi fondée sur la quantité de mouvement.",
      "La mécanique classique s’applique, ce qui est précis pour des vitesses très inférieures à celle de la lumière.",
      "L’unité d’accélération g et l’équivalent en poids utilisent la pesanteur normale, 9,80665 m/s². La pesanteur locale diffère légèrement.",
    ],
    faqs: [
      { question: "Qu’est-ce qu’un newton ?", answer: "L’unité SI de force. Un newton communique à une masse de 1 kg une accélération de 1 m/s². Sur Terre, un objet de 1 kg pèse environ 9,81 N." },
      { question: "Quelle est la différence entre livre et livre-force ?", answer: "La livre (lb) est une unité de masse ; la livre-force (lbf) est le poids d’une livre sous la pesanteur normale, soit 4,4482216152605 N. Elles portent le même nom, c’est pourquoi 1 lbf appliquée à 1 lb donne exactement 1 g." },
      { question: "Pourquoi ma réponse est-elle négative ?", answer: "Une force ou une accélération négative est dirigée dans le sens opposé à celui que vous avez choisi comme positif, comme une force de freinage opposée au sens du déplacement." },
    ],
    sourcesUsedFor: [
      "Deuxième loi de Newton : la force extérieure nette est égale à la masse multipliée par l’accélération.",
      "1 lbf = 4,4482216152605 N, d’après la livre et la pesanteur normale 9,80665 m/s².",
    ],
  },
  text: {
    solve: "Trouver",
    solveOptions: { force: "Force (F)", mass: "Masse (m)", acceleration: "Accélération (a)" },
    force: "Force (F)",
    forceHelp: "Force nette. Une valeur négative signifie qu’elle est dirigée dans le sens opposé.",
    forceUnit: "Unité de force",
    forceUnits: { N: "Newtons (N)", kN: "Kilonewtons (kN)", lbf: "Livres-force (lbf)", dyn: "Dynes (dyn)" },
    mass: "Masse (m)",
    massUnit: "Unité de masse",
    massUnits: { kg: "Kilogrammes (kg)", g: "Grammes (g)", lb: "Livres (lb)", t: "Tonnes (t)" },
    acceleration: "Accélération (a)",
    accelerationHelp: "Une valeur négative signifie que l’accélération est dirigée dans le sens opposé (ralentissement).",
    accelerationUnit: "Unité d’accélération",
    accelerationUnits: { ms2: "Mètres par seconde carrée (m/s²)", fts2: "Pieds par seconde carrée (ft/s²)", g: "Pesanteur normale (g = 9,80665 m/s²)" },
    unitHelp: "Pour la valeur recherchée, c’est l’unité de la réponse.",
    zeroAcceleration: "L’accélération ne peut pas valoir 0 pour trouver la masse.",
    zeroForce: "La force ne peut pas valoir 0 pour trouver la masse.",
    signMismatch: "La force et l’accélération doivent être dirigées dans le même sens (avoir le même signe), car la masse est positive.",
    results: { force: "Force", mass: "Masse", acceleration: "Accélération" },
    inUnit: "En {unit}",
    weightKg: "Équivalent en poids : masse qui pèse autant sous la pesanteur normale",
    weightLb: "Équivalent en poids, en livres",
    weightNote: "L’équivalent en poids vaut |F| ÷ g₀ avec g₀ = 9,80665 m/s² : la masse qu’indiquerait une balance soumise à cette force sur Terre.",
    note: "F est la force nette (totale) qui agit sur l’objet. S’il y a plusieurs forces, additionnez-les d’abord comme des vecteurs.",
  },
};

export default fr;
