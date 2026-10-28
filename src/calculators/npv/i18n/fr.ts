import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { NpvText } from "../text/en";

const forms = (one: string, other: string, many: string) => ({ zero: one, one, two: other, few: other, many, other });

const fr: CalculatorTranslation<NpvText> = {
  content: {
    title: "Calculateur de VAN et de TRI",
    shortTitle: "VAN et TRI",
    summary: "Actualisez une série de flux de trésorerie annuels pour obtenir la valeur actuelle nette, le taux de rendement interne, l’indice de profitabilité et le délai de récupération actualisé.",
    metaTitle: "Calculateur de VAN et de TRI – Valeur actuelle nette",
    metaDescription: "Calculez la valeur actuelle nette et le taux de rendement interne d’un investissement selon ses flux annuels, avec l’indice de profitabilité et le délai actualisé.",
    keywords: ["calcul VAN", "valeur actuelle nette", "calcul TRI", "taux de rendement interne", "flux de trésorerie actualisés", "indice de profitabilité", "délai de récupération actualisé", "choix d’investissement"],
    intro: [
      "Une somme reçue plus tard vaut moins que la même somme aujourd’hui, car l’argent d’aujourd’hui pourrait être placé entre-temps. La valeur actuelle nette (VAN) ramène chaque flux de trésorerie futur d’un projet en valeur d’aujourd’hui en l’actualisant à votre taux de rendement exigé, puis soustrait ce que vous payez au départ.",
      "Une VAN positive signifie que le projet devrait rapporter plus que ce taux ; une VAN négative, qu’il rapporte moins. Le taux de rendement interne (TRI) est le taux pour lequel la VAN est exactement nulle : il indique donc le rendement annuel propre au projet. Cette page couvre les deux, il n’y a donc pas de calculateur de TRI séparé.",
    ],
    howToUse: [
      "Choisissez la devise et saisissez l’investissement initial sous forme de montant positif.",
      "Indiquez le flux de trésorerie net de chaque année, en commençant par l’année 1. Utilisez un signe moins pour une année avec une sortie nette, par exemple une grosse réparation.",
      "Saisissez le taux d’actualisation : le rendement annuel que vous exigez ou votre coût du capital.",
      "Lisez la VAN, le TRI, l’indice de profitabilité et le délai de récupération actualisé, et consultez le tableau année par année.",
    ],
    formulas: [
      { title: "Valeur actuelle nette", expression: "VAN = −C₀ + Σ CFₜ ÷ (1 + r)ᵗ", explanation: "C₀ est l’investissement initial, CFₜ le flux de trésorerie à la fin de l’année t et r le taux d’actualisation sous forme décimale. La somme va de l’année 1 à la dernière année." },
      { title: "Taux de rendement interne", expression: "−C₀ + Σ CFₜ ÷ (1 + TRI)ᵗ = 0", explanation: "Trouvé par dichotomie entre −99,99 % et 1 000 % par an. Lorsque les flux changent de signe plus d’une fois, il peut y avoir plusieurs solutions : aucun TRI n’est alors indiqué." },
      { title: "Indice de profitabilité", expression: "IP = (Σ CFₜ ÷ (1 + r)ᵗ) ÷ C₀", explanation: "La valeur actuelle reçue par unité investie. Un IP supérieur à 1 correspond à une VAN positive." },
      { title: "Délai de récupération actualisé", expression: "k + (−cumulₖ) ÷ CF actualiséₖ₊₁", explanation: "k est la dernière année où la valeur actualisée cumulée est encore négative. La fraction suppose que le flux de l’année suivante arrive de façon régulière." },
    ],
    examples: [
      {
        title: "Machine de 50 000 $ générant cinq années de flux, à 8 %",
        steps: [
          "Valeurs actualisées : 12 000 ÷ 1,08 ≈ 11 111,11 ; 15 000 ÷ 1,08² ≈ 12 860,08 ; 18 000 ÷ 1,08³ ≈ 14 288,98 ; 20 000 ÷ 1,08⁴ ≈ 14 700,60 ; 9 000 ÷ 1,08⁵ ≈ 6 125,25",
          "Valeur actuelle des flux ≈ 59 086,02 $",
          "VAN = 59 086,02 − 50 000 ≈ 9 086,02 $, et le TRI est d’environ 14,60 %",
        ],
      },
      {
        title: "Projet de 250 000 € avec un rendement exigé de 12 %",
        steps: [
          "Valeur actuelle des cinq flux ≈ 246 211,12 €",
          "VAN = 246 211,12 − 250 000 ≈ −3 788,88 €",
          "Le TRI est d’environ 11,38 %, juste en dessous du rendement exigé de 12 %, d’où la VAN négative",
        ],
      },
      {
        title: "Flux qui changent deux fois de signe",
        steps: [
          "VAN = −1 000 + 3 000 ÷ 1,1 − 2 200 ÷ 1,1² = −1 000 + 2 727,27 − 1 818,18 ≈ −90,91 $",
          "27,64 % et 72,36 % annulent tous deux la VAN : le TRI est donc indiqué comme non unique",
        ],
      },
    ],
    assumptions: [
      "Chaque flux de trésorerie arrive à la fin de son année, et l’investissement initial est payé au départ (année 0). Un calendrier en milieu d’année ou mensuel donne une VAN différente.",
      "Un seul taux d’actualisation constant est utilisé pour toutes les années. Les impôts, l’inflation et les coûts de financement ne sont inclus que si vous les avez déjà intégrés dans les flux ou dans le taux.",
      "Le TRI suppose que les flux ne changent de signe qu’une seule fois. Avec plusieurs changements de signe, le TRI peut avoir plusieurs valeurs ou aucune, et la VAN est alors l’indicateur le plus fiable.",
      "Il s’agit d’une estimation destinée à comparer des options, et non d’un conseil en investissement ou d’un conseil financier ; elle n’a pas été vérifiée par un professionnel.",
    ],
    faqs: [
      { question: "Quel taux d’actualisation utiliser ?", answer: "Utilisez le rendement que vous pourriez obtenir ailleurs avec un investissement de risque comparable, ou le coût du capital de votre organisation. Un taux plus élevé réduit la valeur des flux lointains : les projets plus risqués reçoivent donc généralement un taux plus élevé." },
      { question: "Pourquoi le TRI et la VAN peuvent-ils se contredire quand je compare des projets ?", answer: "Le TRI est un pourcentage et ne tient pas compte de la taille du projet, alors que la VAN est un montant. Un petit projet peut avoir un TRI plus élevé tout en créant moins de valeur qu’un projet plus important. Lorsque les deux classent les projets différemment, on privilégie généralement la VAN calculée à votre taux exigé." },
      { question: "Pourquoi le TRI est-il indiqué comme non unique ?", answer: "Lorsque les flux alternent plus d’une fois entre sorties et entrées, par exemple avec un coût de dépollution important à la fin, la VAN peut s’annuler pour plusieurs taux. Aucun taux unique ne décrit alors le projet : le calculateur n’indique que la VAN." },
    ],
    sourcesUsedFor: [
      "Les définitions de la valeur actuelle nette et du taux de rendement interne, et les règles d’acceptation ou de rejet associées à chacun.",
      "La formule d’actualisation de la VAN et la définition du TRI comme le taux pour lequel la VAN est nulle.",
    ],
  },
  text: {
    initial: "Investissement initial",
    initialHelp: "Le montant payé au départ (année 0). Saisissez-le sous forme de nombre positif ; il est traité comme une sortie.",
    cashFlows: "Flux de trésorerie annuels",
    cashFlowsHelp: "Flux de trésorerie net à la fin de l’année 1, de l’année 2, etc., séparés par des virgules, des espaces ou des retours à la ligne. Utilisez un signe moins pour une année avec une sortie nette.",
    rate: "Taux d’actualisation",
    rateHelp: "Votre rendement exigé ou votre coût du capital par an.",
    errors: {
      empty: "Saisissez au moins un flux de trésorerie.",
      tooMany: "Saisissez au plus {max} flux de trésorerie.",
      notNumber: "« {token} » n’est pas un nombre. Séparez les valeurs par des virgules, des espaces ou des retours à la ligne.",
      tooLarge: "« {token} » est trop grand.",
    },
    tooBig: "{value} est trop grand. Chaque flux de trésorerie peut valoir au plus {max} en valeur absolue.",
    npv: "Valeur actuelle nette (VAN)",
    caption: "{count} actualisés à {rate} par an, après un investissement initial de {initial}.",
    yearCount: forms("{n} année de flux", "{n} années de flux", "{n} d’années de flux"),
    irr: "Taux de rendement interne (TRI)",
    irrNone: "Introuvable",
    irrNotUnique: "Non unique",
    irrOutOfRange: "Introuvable entre {low} et {high}",
    pvInflows: "Valeur actuelle des flux annuels",
    profitabilityIndex: "Indice de profitabilité (VA des flux ÷ investissement initial)",
    totalUndiscounted: "Total des flux non actualisés (investissement initial compris)",
    payback: "Délai de récupération actualisé",
    paybackYears: forms("{n} an", "{n} ans", "{n} d’années"),
    paybackNever: "Non atteint avec ces flux",
    table: {
      caption: "Flux de trésorerie par année",
      year: "Année",
      cashFlow: "Flux de trésorerie",
      discounted: "Valeur actualisée",
      cumulative: "Valeur actualisée cumulée",
      yearLabel: "Année {n}",
    },
    notes: {
      positive: "Une VAN positive signifie que les flux rapportent plus que le taux d’actualisation, une fois l’investissement initial récupéré.",
      negative: "Une VAN négative signifie que les flux rapportent moins que le taux d’actualisation.",
      zero: "Une VAN nulle signifie que les flux rapportent exactement le taux d’actualisation.",
      irrNone: "Les flux ne changent jamais de signe (ce sont tous des sorties ou tous des entrées) : aucun taux n’annule donc la VAN.",
      irrNotUnique: "Les flux changent de signe plus d’une fois : plusieurs taux peuvent annuler la VAN, ou aucun. Le TRI n’est pas indiqué ; fiez-vous plutôt à la VAN.",
      irrOutOfRange: "Aucun taux compris entre {low} et {high} par an n’annule la VAN.",
      payback: "Le délai de récupération actualisé suppose que le flux de l’année où le cumul devient positif arrive de façon régulière au cours de cette année.",
      timing: "Les flux sont supposés arriver à la fin de chaque année et sont actualisés à un taux constant.",
    },
  },
};

export default fr;
