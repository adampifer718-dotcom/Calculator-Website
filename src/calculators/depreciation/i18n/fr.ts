import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DepreciationText } from "../text/en";

const fr: CalculatorTranslation<DepreciationText> = {
  content: {
    title: "Calculateur d’amortissement",
    shortTitle: "Amortissement",
    summary: "Établissez un plan d’amortissement annuel selon la méthode linéaire, dégressive ou de la somme des chiffres des années (SYD).",
    metaTitle: "Calculateur d’amortissement – Linéaire, dégressif et SYD",
    metaDescription:
      "Calculez l’amortissement annuel et la valeur comptable en linéaire, en dégressif à 200 % ou 150 % ou par somme des chiffres des années, avec le plan complet.",
    keywords: ["calcul amortissement", "amortissement linéaire", "amortissement dégressif", "dégressif à taux double", "somme des chiffres des années", "valeur comptable", "plan d’amortissement", "valeur résiduelle"],
    intro: [
      "L’amortissement répartit le coût d’un bien durable, comme une machine, un véhicule ou un ordinateur, sur les années pendant lesquelles il est utilisé. Chaque année, une partie du coût devient une charge, et la valeur comptable du bien diminue jusqu’à atteindre la valeur résiduelle prévue.",
      "Ce calculateur compare quatre méthodes comptables courantes. La méthode linéaire impute le même montant chaque année. Les méthodes dégressives et la somme des chiffres des années imputent davantage les premières années et moins ensuite, ce qui convient aux biens qui perdent vite de leur valeur.",
    ],
    howToUse: [
      "Choisissez la devise et saisissez le coût du bien.",
      "Saisissez la valeur résiduelle attendue à la fin de sa durée d’utilisation, ou 0.",
      "Saisissez la durée d’utilisation en années entières.",
      "Choisissez une méthode et lisez l’amortissement de la première année ainsi que le plan complet de l’amortissement, de l’amortissement cumulé et de la valeur comptable.",
    ],
    formulas: [
      { title: "Linéaire", expression: "D = (C − S) ÷ N", explanation: "C est le coût, S la valeur résiduelle et N la durée d’utilisation en années. La dotation est la même chaque année." },
      { title: "Dégressif", expression: "Dₖ = min(Bₖ₋₁ × f ÷ N, Bₖ₋₁ − S)", explanation: "Bₖ₋₁ est la valeur comptable au début de l’année k et f vaut 2 (dégressif à taux double) ou 1,5. La dernière année, la dotation correspond à ce qui reste au-dessus de la valeur résiduelle." },
      { title: "Somme des chiffres des années", expression: "Dₖ = (C − S) × (N − k + 1) ÷ (N(N + 1) ÷ 2)", explanation: "Pour une durée de 5 ans, la somme des chiffres vaut 15, et les fractions annuelles sont donc 5/15, 4/15, 3/15, 2/15 et 1/15." },
      { title: "Valeur comptable", expression: "Bₖ = C − (D₁ + … + Dₖ)", explanation: "Le coût moins l’amortissement cumulé. Elle se termine à la valeur résiduelle." },
    ],
    examples: [
      { title: "Linéaire : fourgon à 30 000 $, valeur résiduelle 3 000 $, 5 ans", steps: ["Base amortissable = 30 000 − 3 000 = 27 000 $", "Amortissement annuel = 27 000 ÷ 5 = 5 400 $", "Valeur comptable après la 5ᵉ année = 3 000 $"] },
      {
        title: "Dégressif à taux double : équipement à 12 000 $, valeur résiduelle 1 500 $, 5 ans",
        steps: [
          "Taux = 2 ÷ 5 = 40 % de la valeur comptable chaque année",
          "Année 1 = 12 000 × 0,40 = 4 800 $, il reste 7 200 $",
          "Années 2 à 4 = 2 880 $, 1 728 $ et 1 036,80 $, il reste 1 555,20 $",
          "L’année 5 prend les 55,20 $ restants pour que la valeur comptable finisse à 1 500 $",
        ],
      },
      { title: "Somme des chiffres des années : machine à 50 000 €, valeur résiduelle 5 000 €, 10 ans", steps: ["Somme des chiffres = 10 × 11 ÷ 2 = 55", "Année 1 = 45 000 × 10 ÷ 55 ≈ 8 181,82 €", "Année 2 = 45 000 × 9 ÷ 55 ≈ 7 363,64 €"] },
    ],
    assumptions: [
      "Il s’agit de méthodes comptables appliquées en années pleines : une année entière d’amortissement est comptée la première année, sans convention de demi-année, de mi-trimestre ou de mi-mois.",
      "Aux États-Unis, l’amortissement fiscal de la plupart des biens professionnels utilise le MACRS, décrit dans la publication 946 de l’IRS, avec ses propres durées de recouvrement, conventions et tables de pourcentages. Cet outil ne calcule ni le MACRS, ni la section 179, ni l’amortissement bonus, et les autres pays ont leurs propres règles fiscales.",
      "En dégressif, la valeur comptable ne descend jamais sous la valeur résiduelle et le montant restant est pris la dernière année. Certaines entreprises passent plutôt au linéaire en cours de route ; cet outil ne le fait pas.",
      "Il s’agit d’une estimation, et non d’un conseil fiscal ou comptable, et ce calcul n’a pas été vérifié par un professionnel.",
    ],
    faqs: [
      { question: "Quelle méthode d’amortissement choisir ?", answer: "La méthode linéaire est la plus simple et la plus courante pour les états financiers. Les méthodes accélérées conviennent aux biens qui perdent l’essentiel de leur valeur ou de leur utilité au début, comme les véhicules et les ordinateurs. Votre comptable et les règles locales déterminent celles que vous pouvez utiliser sur le plan fiscal." },
      { question: "Pourquoi la dernière année du dégressif est-elle différente ?", answer: "Un pourcentage fixe d’un solde décroissant n’atteint jamais exactement la valeur résiduelle. Le calculateur prend ce qui reste au-dessus de la valeur résiduelle la dernière année, ce qui peut être plus ou moins que l’année précédente." },
      { question: "La valeur résiduelle est-elle soustraite avant d’appliquer le taux dégressif ?", answer: "Non. Le taux dégressif s’applique à la valeur comptable totale. La valeur résiduelle sert seulement de plancher : la valeur comptable ne peut pas descendre en dessous." },
    ],
    sourcesUsedFor: ["Le fait que l’amortissement fiscal américain de la plupart des biens professionnels utilise le MACRS, qui diffère des méthodes comptables calculées ici, ainsi que les notions générales d’amortissement linéaire et dégressif."],
  },
  text: {
    cost: "Coût du bien",
    costHelp: "Le prix d’achat plus les frais de mise en service du bien, comme la livraison et l’installation.",
    salvage: "Valeur résiduelle",
    salvageHelp: "Ce que vous pensez que le bien vaudra à la fin de sa durée d’utilisation. Saisissez 0 s’il n’aura aucune valeur.",
    life: "Durée d’utilisation",
    method: "Méthode",
    methods: {
      straightLine: "Linéaire",
      declining200: "Dégressif à taux double (200 %)",
      declining150: "Dégressif à 150 %",
      sumOfYears: "Somme des chiffres des années",
    },
    errors: {
      salvage: "La valeur résiduelle doit être inférieure au coût du bien.",
    },
    firstYear: "Amortissement de la première année",
    caption: "{method} : coût de {cost}, valeur résiduelle de {salvage}, {life}.",
    lifeYears: { zero: "{n} an", one: "{n} an", two: "{n} ans", few: "{n} ans", many: "{n} d’années", other: "{n} ans" },
    base: "Base amortissable (coût − valeur résiduelle)",
    rateStraight: "Taux appliqué (part de la base amortissable par an)",
    rateDeclining: "Taux appliqué chaque année à la valeur comptable",
    rateSumOfYears: "Fraction de la base amortissable la première année",
    total: "Amortissement total sur la durée",
    finalYear: "Amortissement de la dernière année",
    table: {
      caption: "Plan d’amortissement",
      year: "Année",
      depreciation: "Amortissement",
      accumulated: "Amortissement cumulé",
      bookValue: "Valeur comptable en fin d’année",
      yearLabel: "Année {n}",
    },
    notes: {
      fullYear: "Une année entière d’amortissement est comptée la première année, quelle que soit la date d’achat.",
      declining: "La dotation de chaque année est le taux multiplié par la valeur comptable en début d’année, limitée pour que la valeur comptable ne descende jamais sous la valeur résiduelle. Le reste est pris la dernière année.",
      macrs: "L’amortissement fiscal américain utilise le MACRS (publication 946 de l’IRS), que cet outil ne calcule pas.",
    },
  },
};

export default fr;
