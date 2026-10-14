import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PercentageIncreaseText } from "../text/en";

const fr: CalculatorTranslation<PercentageIncreaseText> = {
  content: {
    title: "Calculateur d’augmentation en pourcentage",
    shortTitle: "Augmentation en %",
    summary: "Calculez l’augmentation ou la diminution en pourcentage entre une valeur initiale et une nouvelle valeur.",
    metaTitle: "Calculateur d’augmentation en pourcentage – Variation en %",
    metaDescription:
      "Calculez l’augmentation ou la diminution en pourcentage entre deux nombres : variation en %, variation absolue et formule, avec des exemples détaillés.",
    keywords: ["pourcentage d’augmentation", "taux de variation", "calcul variation en pourcentage", "pourcentage de baisse", "évolution en pourcentage", "hausse de prix"],
    intro: [
      "Saisissez une valeur initiale et une nouvelle valeur pour voir de combien elle a varié en pourcentage. Un résultat positif indique une augmentation, un résultat négatif une diminution.",
      "Usages courants : augmentations de salaire, variations de prix, croissance des ventes et progression des résultats aux examens.",
    ],
    howToUse: [
      "Saisissez la valeur initiale (de départ).",
      "Saisissez la nouvelle valeur.",
      "Consultez la variation en pourcentage, la variation absolue et la nouvelle valeur en pourcentage de la valeur initiale.",
    ],
    formulas: [
      {
        title: "Variation en pourcentage",
        expression: "Variation % = (nouvelle valeur − valeur initiale) ÷ |valeur initiale| × 100",
        explanation:
          "La variation est mesurée par rapport à l’ampleur de la valeur initiale. L’utilisation de la valeur absolue garde un signe cohérent lorsque la valeur initiale est négative.",
      },
      {
        title: "Variation absolue",
        expression: "Variation = nouvelle valeur − valeur initiale",
        explanation: "L’écart, exprimé dans la même unité que vos valeurs.",
      },
    ],
    examples: [
      {
        title: "De 80 à 100",
        steps: ["Variation = 100 − 80 = 20", "20 ÷ 80 × 100 = 25 % d’augmentation"],
      },
      {
        title: "De 250 à 200",
        steps: ["Variation = 200 − 250 = −50", "−50 ÷ 250 × 100 = −20 %, soit une diminution de 20 %"],
      },
      {
        title: "De −50 à −25",
        steps: ["Variation = −25 − (−50) = 25", "25 ÷ |−50| × 100 = 50 % d’augmentation"],
      },
    ],
    assumptions: [
      "La valeur initiale ne peut pas être 0, car une variation à partir de zéro n’a pas de pourcentage défini.",
      "Lorsque la valeur initiale est négative, la variation est divisée par sa valeur absolue.",
      "Les résultats sont arrondis à l’affichage. Les calculs sont effectués en pleine précision.",
    ],
    faqs: [
      {
        question: "Comment calculer une augmentation en pourcentage ?",
        answer: "Soustrayez la valeur initiale de la nouvelle valeur, divisez par la valeur initiale, puis multipliez par 100. De 50 à 65 : (65 − 50) ÷ 50 × 100 = 30 %.",
      },
      {
        question: "Comment calculer une diminution en pourcentage ?",
        answer: "Utilisez la même formule. Un résultat négatif indique une diminution. De 120 à 90 : (90 − 120) ÷ 120 × 100 = −25 %.",
      },
      {
        question: "Une hausse de 50 % suivie d’une baisse de 50 % ramène-t-elle au point de départ ?",
        answer: "Non. 100 augmenté de 50 % donne 150, et 150 diminué de 50 % donne 75. Chaque variation est calculée à partir d’une valeur de départ différente.",
      },
      {
        question: "Que se passe-t-il si la valeur initiale est nulle ?",
        answer: "La variation en pourcentage n’est pas définie, car on ne peut pas diviser par zéro. Indiquez plutôt la variation absolue.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    original: "Valeur initiale",
    originalHelp: "La valeur de départ. Elle ne peut pas être 0.",
    newValue: "Nouvelle valeur",
    newValueHelp: "La valeur après la variation.",
    originalZero: "La valeur initiale ne peut pas être 0. Une variation à partir de 0 n’a pas de pourcentage.",
    primary: "Variation en pourcentage",
    noChange: "Les valeurs sont égales : il n’y a aucune variation.",
    increase: "Une augmentation de {from} à {to}.",
    decrease: "Une diminution de {from} à {to}.",
    absolute: "Variation absolue",
    ratio: "Nouvelle valeur en % de la valeur initiale",
    formula: "Formule : ({to} − {from}) ÷ |{from}| × 100.",
    negativeNote: "La valeur initiale est négative : la variation est donc mesurée par rapport à sa valeur absolue.",
  },
};

export default fr;
