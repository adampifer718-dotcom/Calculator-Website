import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { UptimeSlaText } from "../text/en";

const component = "{n} composant";
const components = "{n} composants";

const fr: CalculatorTranslation<UptimeSlaText> = {
  content: {
    title: "Calculateur de disponibilité et de SLA",
    shortTitle: "Disponibilité / SLA",
    summary: "Convertissez un pourcentage de SLA en indisponibilité autorisée par jour, semaine, mois et an, calculez la disponibilité obtenue à partir des pannes réelles, ou combinez des composants en série ou en parallèle.",
    metaTitle: "Calculateur de disponibilité et de SLA – Pannes et neufs",
    metaDescription:
      "Convertissez un SLA comme 99,9 % en indisponibilité autorisée par jour, semaine, mois et an, mesurez la disponibilité obtenue et combinez des composants.",
    keywords: ["calcul disponibilité", "calculateur SLA", "indisponibilité autorisée", "disponibilité 99,9", "nombre de neuf", "taux de disponibilité", "SLA composite", "temps d’arrêt par mois"],
    intro: [
      "Un accord de niveau de service (SLA) promet souvent une disponibilité comme 99,9 %, les « trois neuf ». Cela semble presque parfait, mais autorise encore environ 43 minutes d’indisponibilité par mois. Exprimer cette marge en temps rend les objectifs plus faciles à comparer et aide à planifier la maintenance.",
      "Ce calculateur convertit un objectif de disponibilité en indisponibilité autorisée pour un jour, une semaine, un mois et un an ; calcule la disponibilité réellement obtenue à partir de l’indisponibilité mesurée ; et combine les disponibilités de plusieurs composants qui dépendent les uns des autres (en série) ou se secourent mutuellement (en parallèle).",
    ],
    howToUse: [
      "Choisissez ce que vous voulez calculer.",
      "Pour l’indisponibilité autorisée, saisissez le pourcentage du SLA. La marge mensuelle s’affiche en premier, suivie d’un tableau pour chaque période.",
      "Pour la disponibilité obtenue, saisissez la durée de la période de mesure et l’indisponibilité totale pendant celle-ci.",
      "Pour plusieurs composants, indiquez leurs disponibilités en pourcentage et choisissez si tous doivent fonctionner (série) ou si un seul suffit (parallèle).",
    ],
    formulas: [
      {
        title: "Indisponibilité autorisée",
        expression: "indisponibilité = (1 − A) × période",
        explanation: "A est la disponibilité sous forme de fraction (99,9 % = 0,999). Une année compte 365 jours et un mois 365 ÷ 12 = 30,42 jours.",
      },
      {
        title: "Disponibilité obtenue",
        expression: "A = 1 − indisponibilité ÷ période",
        explanation: "Les deux durées doivent être dans la même unité ; le calculateur les convertit pour vous.",
      },
      {
        title: "Nombre de neuf",
        expression: "neuf = −log₁₀(1 − A)",
        explanation: "99,9 % donne 3 neuf et 99,95 % environ 3,3. Il n’est pas défini pour 100 %.",
      },
      {
        title: "Composants en série",
        expression: "A = A₁ × A₂ × … × Aₙ",
        explanation: "Chaque composant doit fonctionner : la disponibilité combinée est donc inférieure à celle du plus faible.",
      },
      {
        title: "Composants en parallèle",
        expression: "A = 1 − (1 − A₁) × (1 − A₂) × … × (1 − Aₙ)",
        explanation: "Le système n’est indisponible que lorsque tous les composants redondants sont en panne en même temps.",
      },
    ],
    examples: [
      {
        title: "Indisponibilité mensuelle autorisée par un SLA de 99,9 %",
        steps: ["Un mois compte 365 × 86 400 ÷ 12 = 2 628 000 secondes", "Indisponibilité autorisée = (1 − 0,999) × 2 628 000 = 2 628 s", "2 628 s = 43 min 48 s"],
      },
      {
        title: "25 minutes d’indisponibilité sur un mois de 30 jours",
        steps: ["Période = 30 × 1 440 = 43 200 min", "Part d’indisponibilité = 25 ÷ 43 200 ≈ 0,0579 %", "Disponibilité = 100 % − 0,0579 % ≈ 99,94213 %"],
      },
      {
        title: "Deux serveurs redondants à 99,9 % chacun",
        steps: ["Chaque serveur est en panne 0,1 % du temps", "Les deux sont en panne en même temps 0,001 × 0,001 = 0,000001 du temps", "Disponibilité = 1 − 0,000001 = 99,9999 %, soit 6 neuf"],
      },
    ],
    assumptions: [
      "Une année est comptée comme 365 jours et un mois comme un douzième d’année (environ 30,42 jours). Les contrats peuvent utiliser des mois calendaires, des mois de 30 jours ou des années de 365,25 jours, ce qui modifie légèrement la marge.",
      "Beaucoup de SLA excluent la maintenance planifiée et ne comptent que certains types de pannes. Vérifiez les définitions du contrat avant de comparer des chiffres.",
      "Les disponibilités combinées supposent que les composants tombent en panne indépendamment. L’alimentation, les réseaux, les mises en production ou les fournisseurs partagés rendent les systèmes réels moins disponibles que ne l’indiquent les formules.",
    ],
    faqs: [
      {
        question: "Combien d’indisponibilité autorise 99,99 % ?",
        answer: "Environ 52 minutes 34 secondes par année de 365 jours, soit 4 minutes 23 secondes par mois de 365 ÷ 12 jours. Chaque neuf supplémentaire divise la marge par 10.",
      },
      {
        question: "Pourquoi une chaîne de services fiables est-elle moins fiable que chacun d’eux ?",
        answer: "Lorsqu’une requête a besoin de chaque service de la chaîne, la panne de l’un d’eux suffit à provoquer une interruption. Les disponibilités se multiplient : trois services à 99,9 % donnent environ 99,7 % ensemble, soit environ trois fois plus d’indisponibilité que l’un d’eux.",
      },
      {
        question: "Ajouter un second serveur double-t-il le nombre de neuf ?",
        answer: "Dans le cas idéal, oui : deux serveurs indépendants à 99,9 % donnent 99,9999 %. En pratique, le répartiteur de charge, la base de données et les causes de panne communes demeurent : le gain réel est donc plus faible.",
      },
    ],
    sourcesUsedFor: [
      "La disponibilité temporelle comme temps de fonctionnement ÷ (temps de fonctionnement + indisponibilité), et l’indisponibilité qu’un objectif de disponibilité autorise par période.",
      "La combinaison des disponibilités : le produit pour les composants en série, et un moins le produit des indisponibilités pour les composants redondants.",
      "Des calculs détaillés de disponibilité en série et en parallèle, et l’hypothèse de pannes indépendantes.",
    ],
  },
  text: {
    mode: "Que voulez-vous calculer ?",
    modes: {
      allowed: "Indisponibilité autorisée par un SLA",
      achieved: "Disponibilité à partir de l’indisponibilité",
      composite: "Disponibilité de plusieurs composants",
    },
    sla: "Objectif de disponibilité (SLA)",
    slaHelp: "La disponibilité promise en pourcentage, par exemple 99,9 pour les « trois neuf ».",
    periodLength: "Période de mesure",
    periodUnit: "Unité de la période",
    downtime: "Indisponibilité pendant la période",
    downtimeUnit: "Unité d’indisponibilité",
    timeUnits: { s: "Secondes", min: "Minutes", h: "Heures", d: "Jours", w: "Semaines", mo: "Mois (365 ÷ 12 jours)", y: "Années (365 jours)" },
    components: "Disponibilités des composants (%)",
    componentsHelp: "Une disponibilité par composant, séparées par des virgules, des espaces ou des retours à la ligne, par exemple 99.95, 99.9, 99.99.",
    topology: "Comment les composants sont-ils reliés ?",
    topologies: {
      serial: "En série (tous doivent fonctionner)",
      parallel: "En parallèle (un seul suffit)",
    },
    errors: {
      empty: "Saisissez au moins une disponibilité.",
      tooMany: "Saisissez au plus {max} disponibilités.",
      notNumber: "« {token} » n’est pas un nombre. Séparez les valeurs par des virgules, des espaces ou des retours à la ligne.",
      tooLarge: "« {token} » est trop grand.",
      outOfRange: "{value} n’est pas une disponibilité valide. Chaque valeur doit être comprise entre 0 et 100 %.",
      downtimeTooLong: "L’indisponibilité ne peut pas dépasser la période de mesure.",
    },
    allowedMonth: "Indisponibilité autorisée par mois",
    achievedAvailability: "Disponibilité obtenue",
    compositeAvailability: "Disponibilité combinée",
    captionAllowed: "Pour une disponibilité de {sla}, avec un mois de 365 ÷ 12 jours.",
    captionAchieved: "{downtime} d’indisponibilité sur {period}.",
    captionComposite: "{count} {topology}.",
    componentCount: {
      zero: component,
      one: component,
      two: components,
      few: components,
      many: "{n} de composants",
      other: components,
    },
    topologyCaption: { serial: "en série", parallel: "en parallèle" },
    nines: "Nombre de neuf",
    downtimeYear: "Indisponibilité autorisée par an",
    downtimeYearHours: "Indisponibilité autorisée par an en heures",
    downtimeFraction: "Indisponibilité en part de la période",
    uptime: "Temps de fonctionnement sur la période",
    equivalentMonth: "Même taux d’indisponibilité par mois",
    equivalentYear: "Même taux d’indisponibilité par an",
    serialValue: "Disponibilité combinée en série",
    parallelValue: "Disponibilité combinée en parallèle",
    weakest: "Disponibilité du composant le plus faible",
    table: {
      caption: "Indisponibilité autorisée par période",
      period: "Période",
      downtime: "Indisponibilité autorisée",
      uptime: "Disponibilité requise",
    },
    periods: { day: "Jour", week: "Semaine", month: "Mois (365 ÷ 12 jours)", year: "Année (365 jours)" },
    duration: {
      d: "{n} j",
      h: "{n} h",
      min: "{n} min",
      s: "{n} s",
      pair: "{a} {b}",
    },
    notes: {
      periods: "Une année est comptée comme 365 jours et un mois comme un douzième de celle-ci (30,42 jours). Les contrats peuvent définir la période autrement, par exemple comme un mois calendaire, et excluent souvent la maintenance planifiée.",
      hundred: "Une disponibilité de 100 % n’autorise aucune indisponibilité : le nombre de neuf n’est donc pas défini.",
      zero: "Sans indisponibilité, la disponibilité est de 100 % et le nombre de neuf n’est pas défini.",
      independent: "Ces formules supposent que les composants tombent en panne indépendamment les uns des autres. Les dépendances partagées, comme une alimentation unique ou un même changement de configuration, rendent la disponibilité réelle inférieure à la valeur calculée.",
      parallelHelp: "En parallèle, le système n’est indisponible que lorsque tous les composants sont en panne en même temps : la redondance augmente donc la disponibilité.",
      serialHelp: "En série, le système est indisponible dès qu’un composant est en panne : la disponibilité combinée est donc inférieure à celle du composant le plus faible.",
      allDown: "Au moins un composant a une disponibilité de 0 % : un système en série n’est donc jamais disponible.",
    },
  },
};

export default fr;
