import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CoffeeRatioText } from "../text/en";

const fr: CalculatorTranslation<CoffeeRatioText> = {
  content: {
    title: "Calculateur de ratio café/eau",
    shortTitle: "Ratio café/eau",
    summary: "Calculez la quantité de café moulu à utiliser pour une quantité d’eau donnée, ou la quantité d’eau pour votre café, en filtre, à la cafetière à piston, en espresso et en cold brew.",
    metaTitle: "Calculateur de ratio café/eau – Grammes de café par tasse",
    metaDescription: "Combien de grammes de café pour votre eau, ou d’eau pour votre café ? Ratios modifiables pour filtre, cafetière à piston, espresso et cold brew.",
    keywords: ["ratio café eau", "dosage café", "combien de café par tasse", "ratio café filtre", "ratio cafetière à piston", "ratio cold brew", "ratio espresso", "grammes de café"],
    intro: [
      "Le ratio café/eau est le moyen le plus simple d’obtenir un café au goût constant. Il s’écrit 1 : n, c’est-à-dire n grammes d’eau pour chaque gramme de café moulu : à 1:16, 20 g de café vont avec 320 g d’eau. Plus n est petit, plus le café est fort.",
      "Choisissez une méthode d’extraction pour partir d’un ratio courant, ajustez-le à votre goût, et le calculateur détermine le café nécessaire pour votre eau ou l’eau nécessaire pour votre café, en grammes, en millilitres, en onces liquides ou en tasses.",
    ],
    howToUse: [
      "Choisissez la méthode d’extraction. Son ratio courant est prérempli ; modifiez-le si vous aimez votre café plus fort ou plus léger.",
      "Choisissez de calculer le café à partir de l’eau, ou l’eau à partir du café.",
      "Saisissez la quantité et choisissez son unité. Le résultat s’affiche dans l’unité choisie pour l’autre ingrédient.",
      "Pesez le café sur une balance de cuisine pour des résultats plus réguliers.",
    ],
    formulas: [
      { title: "Café à partir de l’eau", expression: "café (g) = eau (g) ÷ n", explanation: "Pour un ratio de 1 : n. L’eau est comptée à 1 g par mL." },
      { title: "Eau à partir du café", expression: "eau (g) = café (g) × n", explanation: "1 tasse US = 8 fl oz US = 236,5882365 mL, et 1 oz = 28,349523125 g." },
      { title: "Concentration en grammes par litre", expression: "g/L = café (g) ÷ eau (mL) × 1 000", explanation: "Un ratio de 1:18 correspond à environ 55,6 g de café par litre d’eau." },
    ],
    examples: [
      {
        title: "Café filtre manuel avec 500 mL d’eau à 1:16",
        steps: ["500 mL d’eau pèsent 500 g", "Café = 500 ÷ 16 = 31,25 g"],
      },
      {
        title: "Cafetière à piston avec 30 g de café à 1:12, eau en tasses",
        steps: ["Eau = 30 × 12 = 360 g = 360 mL", "En tasses US : 360 ÷ 236,588 ≈ 1,52 tasse"],
      },
      {
        title: "Concentré de cold brew avec 4 tasses d’eau à 1:8",
        steps: ["4 tasses US = 4 × 236,588 ≈ 946,35 mL d’eau", "Café = 946,35 ÷ 8 ≈ 118,29 g, soit environ 4,17 oz"],
      },
    ],
    assumptions: [
      "Les ratios proposés pour chaque méthode sont des points de départ courants, pas des règles. Le goût, le degré de torréfaction, la finesse de mouture et le temps d’infusion modifient tous le ratio idéal.",
      "L’eau est comptée à 1 g par mL. Le café moulu retient une partie de l’eau : vous obtenez donc un peu moins de café infusé que d’eau utilisée.",
      "Pour l’espresso, le ratio compare le café sec au poids de la boisson dans la tasse, comme le font habituellement les baristas.",
      "Les quantités de café sont exprimées en poids. Les doseurs et les cuillères contiennent des quantités variables selon la mouture et la torréfaction ; ils ne sont donc pas convertis.",
    ],
    faqs: [
      { question: "Quel est le meilleur ratio café/eau ?", answer: "Il n’existe pas de ratio idéal unique. Pour le café filtre, beaucoup commencent entre 1:15 et 1:17 puis ajustent ; la recommandation Golden Cup de la Specialty Coffee Association, souvent citée, correspond à environ 1:18. Si le café est trop faible, diminuez n ; s’il est trop fort, augmentez-le." },
      { question: "Combien de café faut-il pour une tasse ?", answer: "Pour une tasse US (environ 237 mL) à 1:16, utilisez environ 14,8 g de café. Beaucoup de mugs contiennent plus qu’une tasse US : mesurez le volume du vôtre pour un résultat plus juste." },
      { question: "Pourquoi peser le café plutôt que d’utiliser une mesurette ?", answer: "Une mesurette de café peut peser des quantités très différentes selon le grain, la torréfaction et la finesse de mouture. Peser à la fois le café et l’eau permet de reproduire beaucoup plus facilement une tasse que vous avez aimée." },
    ],
    sourcesUsedFor: ["La recommandation Golden Cup, largement citée, d’environ 55 g de café par litre d’eau (environ 1:18), donnée uniquement à titre de comparaison."],
  },
  text: {
    method: "Méthode d’extraction",
    methods: {
      drip: "Filtre (machine ou manuel)",
      frenchPress: "Cafetière à piston",
      espresso: "Espresso",
      coldBrew: "Concentré de cold brew",
      custom: "Ratio personnalisé",
    },
    ratio: "Ratio 1 : n (eau par gramme de café)",
    ratioHelp: {
      drip: "Les ratios courants pour le café filtre vont d’environ 1:15 (plus fort) à 1:17 (plus léger). Ajustez-le à votre goût.",
      frenchPress: "Un ratio courant pour la cafetière à piston est d’environ 1:12. Ajustez-le à votre goût.",
      espresso: "Pour l’espresso, le ratio compare généralement le café au poids de la boisson dans la tasse ; environ 1:2 est un point de départ courant.",
      coldBrew: "Environ 1:8 donne un concentré que l’on dilue généralement avant de le boire.",
      custom: "Grammes d’eau pour chaque gramme de café moulu.",
    },
    solve: "Calculer",
    solveOptions: { coffee: "Le café à partir de l’eau", water: "L’eau à partir du café" },
    water: "Quantité d’eau",
    waterUnit: "Unité d’eau",
    waterUnits: { mL: "Millilitres (mL)", g: "Grammes (g)", floz: "Onces liquides US (fl oz)", cup: "Tasses US" },
    coffee: "Quantité de café moulu",
    coffeeUnit: "Unité de café",
    coffeeUnits: { g: "Grammes (g)", oz: "Onces (oz)" },
    coffeeNeeded: "Café moulu nécessaire",
    waterNeeded: "Eau nécessaire",
    caption: "Pour un ratio de {ratio} : {coffee} de café pour {water} d’eau.",
    ratioText: "1:{n}",
    ratioOut: "Ratio café/eau",
    coffeeG: "Café en grammes",
    coffeeOz: "Café en onces",
    waterMl: "Eau en mL (= grammes)",
    waterFloz: "Eau en onces liquides US",
    waterCups: "Eau en tasses US",
    strength: "Café par litre d’eau",
    cupsUnit: "tasses",
    notes: {
      golden: "À titre de comparaison, la recommandation Golden Cup de la Specialty Coffee Association, largement citée, est d’environ 55 g de café par litre d’eau, soit à peu près 1:18. Considérez tout ratio comme un point de départ et ajustez-le à votre goût.",
      espresso: "Pour l’espresso, le ratio compare généralement le café sec au poids de la boisson finie, et non à l’eau qui traverse la mouture : la quantité affichée est donc le poids de boisson visé.",
      coldBrew: "Le concentré de cold brew est fort ; on le dilue généralement avec de l’eau ou du lait, selon son goût, avant de le boire.",
      water: "L’eau est comptée à 1 g par mL. Une partie de l’eau reste dans le marc : le café infusé est donc un peu moins abondant que l’eau utilisée.",
    },
  },
};

export default fr;
