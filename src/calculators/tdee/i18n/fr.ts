import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TdeeText } from "../text/en";

const fr: CalculatorTranslation<TdeeText> = {
  content: {
    title: "Calculateur de dépense énergétique (TDEE)",
    shortTitle: "TDEE",
    summary: "Estimez votre dépense énergétique totale quotidienne à partir du métabolisme de base de Mifflin-St Jeor et d’un coefficient d’activité, avec tous les niveaux d’activité côte à côte.",
    metaTitle: "Calculateur de TDEE – Dépense énergétique quotidienne",
    metaDescription: "Estimez votre dépense énergétique totale quotidienne en kcal et en kJ avec le métabolisme de base de Mifflin-St Jeor et un niveau d’activité, sur 5 niveaux.",
    keywords: ["TDEE", "dépense énergétique totale", "dépense énergétique journalière", "calories de maintien", "besoins caloriques", "coefficient d’activité", "Mifflin St Jeor", "niveau d’activité physique"],
    intro: [
      "La dépense énergétique totale quotidienne (TDEE, de l’anglais total daily energy expenditure) estime toute l’énergie que vous dépensez en une journée : l’énergie nécessaire au repos plus celle du mouvement, de l’exercice et de la digestion. On l’appelle souvent vos calories de maintien.",
      "Ce calculateur estime d’abord votre métabolisme de base avec l’équation de Mifflin-St Jeor, la même que celle du Calculateur de métabolisme de base, puis le multiplie par un coefficient correspondant à votre niveau d’activité. Les cinq coefficients, de 1,2 à 1,9, sont des conventions largement répandues : considérez le résultat comme une première estimation.",
    ],
    howToUse: [
      "Choisissez les unités métriques ou impériales.",
      "Choisissez le sexe utilisé dans l’équation et saisissez votre âge, votre poids et votre taille.",
      "Choisissez le niveau d’activité qui correspond le mieux à une semaine typique.",
      "Lisez votre TDEE estimé, le métabolisme de base sur lequel il repose et le tableau qui compare tous les niveaux d’activité.",
    ],
    formulas: [
      { title: "Métabolisme de base (Mifflin-St Jeor)", expression: "MB = 10 × poids (kg) + 6,25 × taille (cm) − 5 × âge (années) + s\ns = +5 pour les hommes, −161 pour les femmes", explanation: "Énergie dépensée au repos complet, en kcal par jour." },
      { title: "Dépense énergétique totale quotidienne", expression: "TDEE = MB × coefficient d’activité\nsédentaire 1,2 · légèrement actif 1,375 · modérément actif 1,55 · très actif 1,725 · extrêmement actif 1,9", explanation: "Le coefficient augmente l’énergie de repos pour tenir compte de l’activité quotidienne. Ces valeurs sont des conventions courantes, pas des mesures faites sur vous." },
      { title: "Variation hebdomadaire approximative", expression: "0,5 kg par semaine ≈ 0,5 × 7 700 ÷ 7 = 550 kcal/jour", explanation: "Une règle empirique qui assimile 1 kg de poids corporel à environ 7 700 kcal. L’évolution réelle du poids la suit rarement de près." },
      { title: "Unités d’énergie", expression: "1 kcal = 4,184 kJ", explanation: "La calorie thermochimique." },
    ],
    examples: [
      {
        title: "Femme, 35 ans, 68 kg, 168 cm, modérément active",
        steps: ["MB = 10 × 68 + 6,25 × 168 − 5 × 35 − 161 = 1 394 kcal/jour", "TDEE = 1 394 × 1,55 = 2 160,7 ≈ 2 161 kcal/jour", "En kilojoules : 2 160,7 × 4,184 ≈ 9 040 kJ/jour"],
      },
      {
        title: "Homme, 45 ans, 190 lb, 5 ft 10 in, sédentaire",
        steps: [
          "190 lb = 86,18 kg ; 5 ft 10 in = 70 in = 177,8 cm",
          "MB = 10 × 86,18 + 6,25 × 177,8 − 5 × 45 + 5 ≈ 1 753 kcal/jour",
          "TDEE = 1 753,08 × 1,2 ≈ 2 104 kcal/jour ; l’apport pour perdre 0,5 kg par semaine (≈ 1 554 kcal/jour) est inférieur au métabolisme de base, une remarque s’affiche donc",
        ],
      },
    ],
    assumptions: [
      "Le résultat est une estimation, pas un avis médical ou diététique, et ce calculateur n’a pas encore été vérifié par un professionnel. Parlez-en à un médecin ou à un diététicien avant de modifier votre alimentation.",
      "L’équation de Mifflin-St Jeor a été établie pour des adultes en bonne santé. Elle ne convient pas aux enfants, à la grossesse, à l’allaitement ni aux affections qui modifient le métabolisme, et le métabolisme de base d’une personne peut s’en écarter de 10 % ou plus.",
      "Les coefficients d’activité (de 1,2 à 1,9) sont des conventions largement utilisées pour de grands groupes de modes de vie. Le choix d’un niveau est subjectif, et l’erreur sur le TDEE est plus grande que l’erreur sur le métabolisme de base.",
      "Les chiffres à ±0,5 kg par semaine reposent sur la règle empirique approximative de 7 700 kcal par kg. En pratique, l’évolution du poids dépend de l’eau, de la composition corporelle et de l’adaptation, et ralentit avec le temps.",
    ],
    faqs: [
      { question: "Quelle est la différence entre le métabolisme de base et le TDEE ?", answer: "Le métabolisme de base est l’énergie dépensée au repos complet. Le TDEE y ajoute l’énergie des mouvements quotidiens, de l’exercice et de la digestion ; il est donc toujours supérieur au métabolisme de base." },
      { question: "Quel niveau d’activité choisir ?", answer: "Choisissez le niveau qui correspond à une semaine ordinaire, pas à votre meilleure semaine. Si vous êtes entre deux niveaux, le tableau affiche les deux pour que vous puissiez retenir une valeur intermédiaire. La plupart des personnes qui travaillent assises sont sédentaires ou légèrement actives." },
      { question: "Pourquoi mon TDEE diffère-t-il de celui de ma montre connectée ?", answer: "Les montres et bracelets estiment l’activité à partir des mouvements et de la fréquence cardiaque, alors que ce calculateur utilise un seul coefficient global. Les deux sont des estimations ; suivre votre poids et vos apports pendant plusieurs semaines reste le meilleur moyen de connaître votre vrai niveau de maintien." },
    ],
    sourcesUsedFor: [
      "L’équation de Mifflin-St Jeor pour la dépense énergétique de repos, commune avec le Calculateur de métabolisme de base.",
      "L’estimation de la dépense énergétique totale comme dépense énergétique de repos multipliée par un niveau d’activité physique.",
    ],
  },
  text: {
    units: "Unités",
    unitOptions: { metric: "Métriques (kg, cm)", imperial: "Impériales (lb, ft, in)" },
    sex: "Sexe utilisé dans l’équation",
    sexHelp: "L’équation de Mifflin-St Jeor utilise des constantes distinctes pour les hommes et les femmes.",
    sexes: { male: "Homme", female: "Femme" },
    age: "Âge",
    weight: "Poids",
    height: "Taille",
    heightFt: "Taille (pieds)",
    heightIn: "Taille (pouces)",
    heightZero: "Saisissez une taille supérieure à 0.",
    activity: "Niveau d’activité",
    activityHelp: "Choisissez la description la plus proche d’une semaine typique. Les coefficients sont des conventions approximatives, pas des mesures.",
    activities: {
      sedentary: "Sédentaire (peu ou pas d’exercice)",
      light: "Légèrement actif (exercice léger 1 à 3 jours par semaine)",
      moderate: "Modérément actif (exercice 3 à 5 jours par semaine)",
      very: "Très actif (exercice intense 6 à 7 jours par semaine)",
      extra: "Extrêmement actif (travail physique ou entraînement deux fois par jour)",
    },
    activityShort: { sedentary: "Sédentaire", light: "Légèrement actif", moderate: "Modérément actif", very: "Très actif", extra: "Extrêmement actif" },
    tdee: "Dépense énergétique totale quotidienne",
    caption: "Métabolisme de base de {bmr} kcal/jour × coefficient d’activité {factor}.",
    bmr: "Métabolisme de base (Mifflin-St Jeor)",
    kj: "TDEE en kilojoules",
    multiplier: "Coefficient d’activité",
    lose: "Perte d’environ 0,5 kg (1,1 lb) par semaine",
    gain: "Prise d’environ 0,5 kg (1,1 lb) par semaine",
    kcalDay: "kcal/jour",
    kjDay: "kJ/jour",
    table: {
      caption: "TDEE estimé pour chaque niveau d’activité",
      level: "Niveau d’activité",
      factor: "Coefficient",
      kcal: "kcal/jour",
      kj: "kJ/jour",
    },
    notes: {
      estimate: "Une estimation pour les adultes en bonne santé. La dépense réelle peut s’en écarter de plusieurs centaines de kcal par jour ; il ne s’agit pas d’une prescription diététique.",
      rule: "Les chiffres à ±0,5 kg par semaine reposent sur la règle empirique approximative selon laquelle 1 kg de poids corporel correspond à environ 7 700 kcal (550 kcal par jour pour 0,5 kg par semaine). L’évolution réelle du poids ne la suit pas de près.",
      belowBmr: "L’apport indiqué pour la perte de poids est inférieur à votre métabolisme de base estimé. Manger moins que son métabolisme de base n’est pas recommandé sans l’avis d’un médecin ou d’un diététicien.",
    },
  },
};

export default fr;
