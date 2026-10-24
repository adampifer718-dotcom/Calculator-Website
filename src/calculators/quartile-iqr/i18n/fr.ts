import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { QuartileText } from "../text/en";

const fr: CalculatorTranslation<QuartileText> = {
  content: {
    title: "Calculateur de quartiles et d’écart interquartile",
    shortTitle: "Quartiles",
    summary: "Trouvez les quartiles, l’écart interquartile, le résumé en cinq valeurs, les barrières à 1,5 × IQR et les valeurs aberrantes d’une série, avec deux méthodes de quartiles courantes.",
    metaTitle: "Calculateur de quartiles – IQR et valeurs aberrantes",
    metaDescription: "Trouvez Q1, la médiane, Q3 et l’écart interquartile d’une liste de nombres, avec le résumé en cinq valeurs, les barrières à 1,5 × IQR et les valeurs aberrantes.",
    keywords: ["calcul quartiles", "écart interquartile", "IQR", "résumé en cinq valeurs", "Q1 Q3", "valeurs aberrantes", "boîte à moustaches", "règle 1,5 IQR"],
    intro: [
      "Les quartiles partagent des données triées en quatre groupes d’effectifs à peu près égaux. Un quart des valeurs se trouve sous le premier quartile Q1, la moitié sous la médiane Q2 et les trois quarts sous le troisième quartile Q3. L’écart interquartile, IQR = Q3 − Q1, mesure la dispersion de la moitié centrale des données et, contrairement à l’étendue, il est à peine influencé par quelques valeurs extrêmes.",
      "Collez une liste de nombres pour obtenir l’IQR, le résumé en cinq valeurs utilisé pour les boîtes à moustaches et les barrières à 1,5 × IQR qui signalent les valeurs aberrantes possibles. Deux méthodes de quartiles sont proposées, car les manuels, les calculatrices et les logiciels ne s’accordent pas tous ; pour la moyenne et le mode, utilisez le calculateur de moyenne, médiane et mode.",
    ],
    howToUse: [
      "Collez ou saisissez au moins 4 nombres, séparés par des points-virgules, des espaces ou des retours à la ligne. Ils n’ont pas besoin d’être triés.",
      "Choisissez la méthode de quartiles : inclusive pour correspondre à QUARTILE.INC d’Excel, à NumPy et à R, ou médiane des moitiés pour correspondre à une TI-83 ou à de nombreux manuels scolaires.",
      "Lisez l’IQR, les quartiles et les barrières.",
      "Consultez la liste des valeurs aberrantes situées hors des barrières.",
    ],
    formulas: [
      { title: "Méthode inclusive (interpolation linéaire)", expression: "h = (n − 1) × p\nQ = x₍⌊h⌋₎ + (h − ⌊h⌋)(x₍⌊h⌋+1₎ − x₍⌊h⌋₎)", explanation: "x₍₀₎ ≤ x₍₁₎ ≤ … sont les valeurs triées numérotées à partir de 0, p = 0,25 pour Q1 et 0,75 pour Q3. C’est le type 7 de Hyndman et Fan, la méthode par défaut de R et de NumPy et celle de QUARTILE.INC d’Excel." },
      { title: "Médiane des moitiés", expression: "Q1 = médiane de la moitié inférieure\nQ3 = médiane de la moitié supérieure", explanation: "Avec un nombre impair de valeurs, la médiane elle-même est exclue des deux moitiés. C’est la méthode des calculatrices TI-83 et TI-84." },
      { title: "Écart interquartile et barrières", expression: "IQR = Q3 − Q1\nbarrière inférieure = Q1 − 1,5 × IQR\nbarrière supérieure = Q3 + 1,5 × IQR", explanation: "Les valeurs situées hors des barrières sont signalées comme aberrantes possibles ; ce sont les points dessinés à part sur une boîte à moustaches." },
    ],
    examples: [
      {
        title: "Onze délais de livraison en minutes, méthode inclusive",
        steps: ["n = 11, donc h = 10 × 0,25 = 2,5 pour Q1 : à mi-chemin entre 17 et 18, Q1 = 17,5", "h = 10 × 0,75 = 7,5 pour Q3 : à mi-chemin entre 26 et 29, Q3 = 27,5", "IQR = 27,5 − 17,5 = 10 ; les barrières valent 2,5 et 42,5, donc 58 est une valeur aberrante"],
      },
      {
        title: "Les mêmes données avec la méthode de la médiane des moitiés",
        steps: ["La médiane vaut 22 ; on l’exclut, ce qui donne les moitiés 12 ; 15 ; 17 ; 18 ; 21 et 24 ; 26 ; 29 ; 31 ; 58", "Q1 = 17 et Q3 = 29", "IQR = 29 − 17 = 12 ; les barrières valent −1 et 47, donc 58 reste une valeur aberrante"],
      },
      {
        title: "Huit mesures de pH, méthode inclusive",
        steps: ["h = 7 × 0,25 = 1,75 : Q1 = 4,1 + 0,75 × (4,4 − 4,1) = 4,325", "h = 7 × 0,75 = 5,25 : Q3 = 6,3 + 0,25 × (7,7 − 6,3) = 6,65", "IQR = 6,65 − 4,325 = 2,325, avec des barrières à 0,8375 et 10,1375 : aucune valeur aberrante"],
      },
    ],
    assumptions: [
      "Il n’existe pas de définition unique des quartiles. Les deux méthodes proposées sont les plus courantes ; d’autres, comme QUARTILE.EXC d’Excel, peuvent donner des valeurs légèrement différentes pour les petites séries.",
      "La règle des 1,5 × IQR est une convention qui signale les valeurs à examiner de plus près. Elle ne prouve pas qu’une valeur est une erreur.",
      "Jusqu’à 10 000 nombres sont acceptés. Les résultats sont affichés avec au plus 10 chiffres significatifs.",
    ],
    faqs: [
      { question: "Pourquoi des calculatrices différentes donnent-elles des quartiles différents ?", answer: "Parce qu’il existe plusieurs définitions. Pour 1, 2, 3, 4, 5, 6, la méthode inclusive donne Q1 = 2,25, alors que la méthode de la médiane des moitiés donne Q1 = 2. Pour de grandes séries, les méthodes donnent des résultats très proches." },
      { question: "Qu’est-ce que le résumé en cinq valeurs ?", answer: "Le minimum, Q1, la médiane, Q3 et le maximum. Ensemble, ils décrivent le centre, la dispersion et l’étendue des données, et c’est exactement ce que représente une boîte à moustaches." },
      { question: "La médiane des moitiés est-elle identique aux charnières de Tukey ?", answer: "Pas tout à fait. Les charnières de Tukey incluent la médiane dans les deux moitiés lorsque le nombre de valeurs est impair, alors que la méthode TI-83 utilisée ici l’exclut. Pour un nombre pair de valeurs, elles sont identiques." },
    ],
    sourcesUsedFor: [
      "Barrières intérieures Q1 − 1,5 × IQR et Q3 + 1,5 × IQR pour signaler les valeurs aberrantes.",
      "Les différentes définitions des quantiles d’échantillon comparées par Hyndman et Fan (1996), dont l’interpolation linéaire.",
    ],
  },
  text: {
    data: "Série de données",
    dataHelp: "Au moins 4 nombres, séparés par des points-virgules, des espaces ou des retours à la ligne. L’ordre n’a pas d’importance. Utilisez la virgule décimale ; une virgule suivie d’une espace sépare aussi les valeurs.",
    errors: {
      empty: "Saisissez au moins 4 nombres.",
      tooMany: "Saisissez au maximum {max} nombres.",
      notNumber: "« {token} » n’est pas un nombre. Utilisez la virgule décimale et séparez les valeurs par des points-virgules, des espaces ou des retours à la ligne.",
      tooLarge: "« {token} » est trop grand.",
    },
    tooFew: "Saisissez au moins 4 nombres pour calculer les quartiles ; vous en avez saisi {count}.",
    method: "Méthode de quartiles",
    methods: {
      inclusive: "Inclusive, interpolation linéaire (QUARTILE.INC d’Excel, NumPy, R type 7)",
      exclusive: "Médiane des moitiés, médiane exclue (style TI-83)",
    },
    methodHelp: "Les manuels et les logiciels ne définissent pas tous les quartiles de la même façon. Les résultats peuvent différer pour les petites séries.",
    iqr: "Écart interquartile (IQR)",
    caption: "Q3 − Q1 pour {count}, avec la méthode {method}.",
    methodShort: { inclusive: "inclusive", exclusive: "de la médiane des moitiés" },
    valueCount: { zero: "{n} valeur", one: "{n} valeur", two: "{n} valeurs", few: "{n} valeurs", many: "{n} de valeurs", other: "{n} valeurs" },
    min: "Minimum",
    q1: "Premier quartile (Q1)",
    median: "Médiane (Q2)",
    q3: "Troisième quartile (Q3)",
    max: "Maximum",
    lowerFence: "Barrière inférieure (Q1 − 1,5 × IQR)",
    upperFence: "Barrière supérieure (Q3 + 1,5 × IQR)",
    outliers: "Valeurs aberrantes",
    noOutliers: "Aucune",
    moreOutliers: "{list} et {count} autres",
    outlierCount: "Nombre de valeurs aberrantes",
    summaryTable: "Résumé en cinq valeurs",
    colStatistic: "Statistique",
    colValue: "Valeur",
    noOutliersNote: "Aucune valeur ne se trouve hors des barrières : selon la règle des 1,5 × IQR, la série ne comporte pas de valeur aberrante.",
    outliersNote: "Les valeurs inférieures à la barrière inférieure ou supérieures à la barrière supérieure sont signalées comme aberrantes possibles. Vérifiez-les avant de supprimer quoi que ce soit : une valeur aberrante peut être une observation réelle et importante.",
  },
};

export default fr;
