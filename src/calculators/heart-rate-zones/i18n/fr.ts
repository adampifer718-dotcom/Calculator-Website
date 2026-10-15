import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HeartRateZonesText } from "../text/en";

const fr: CalculatorTranslation<HeartRateZonesText> = {
  content: {
    title: "Calculateur de zones de fréquence cardiaque",
    shortTitle: "Zones de fréquence cardiaque",
    summary: "Estimez votre fréquence cardiaque maximale à partir de votre âge et obtenez cinq zones d’entraînement en battements par minute, en pourcentage du maximum ou avec la méthode de Karvonen.",
    metaTitle: "Calculateur de zones de fréquence cardiaque – FC max et zones",
    metaDescription:
      "Estimez la fréquence cardiaque maximale avec 220 − âge ou la formule de Tanaka et obtenez cinq zones d’entraînement en bpm, en % du maximum ou avec la méthode de Karvonen.",
    keywords: ["zones de fréquence cardiaque", "fréquence cardiaque cible", "fréquence cardiaque maximale", "FC max", "formule de Karvonen", "zones d’entraînement", "zone de combustion des graisses", "réserve de fréquence cardiaque"],
    intro: [
      "Les zones de fréquence cardiaque découpent l’intensité de l’effort en tranches établies à partir de votre fréquence cardiaque maximale. S’entraîner dans une zone donnée aide à doser les sorties faciles, les efforts réguliers ou les fractionnés intenses sans deviner.",
      "Ce calculateur estime votre fréquence cardiaque maximale à partir de votre âge, ou utilise un maximum que vous avez mesuré, et le transforme en cinq zones en battements par minute. Il affiche aussi les plages d’intensité modérée et soutenue proposées par l’American Heart Association.",
    ],
    howToUse: [
      "Saisissez votre âge et choisissez une formule de fréquence cardiaque maximale.",
      "Si vous connaissez votre maximum réel grâce à une épreuve d’effort, saisissez-le ; il remplace la formule.",
      "Pour utiliser la méthode de Karvonen, saisissez votre fréquence cardiaque au repos et choisissez Karvonen comme méthode de calcul des zones.",
      "Lisez votre maximum estimé et la plage en bpm de chaque zone dans le tableau.",
    ],
    formulas: [
      { title: "Fréquence cardiaque maximale (Fox)", expression: "FCmax = 220 − âge", explanation: "La règle empirique traditionnelle." },
      { title: "Fréquence cardiaque maximale (Tanaka)", expression: "FCmax = 208 − 0,7 × âge", explanation: "Issue d’une analyse de 351 études publiée en 2001 ; elle donne des valeurs plus élevées que 220 − âge chez les adultes plus âgés." },
      { title: "Pourcentage du maximum", expression: "cible = FCmax × intensité", explanation: "Chaque zone couvre 10 points de pourcentage, de 50–60 % (zone 1) à 90–100 % (zone 5)." },
      {
        title: "Karvonen (réserve de fréquence cardiaque)",
        expression: "cible = FCrepos + intensité × (FCmax − FCrepos)",
        explanation: "La réserve de fréquence cardiaque est FCmax − FCrepos. Cette méthode donne des cibles plus élevées aux faibles intensités que la méthode du pourcentage du maximum.",
      },
    ],
    examples: [
      {
        title: "40 ans avec 220 − âge",
        steps: ["FCmax = 220 − 40 = 180 bpm", "Zone 2 (60–70 %) = 108–126 bpm", "Plage modérée de l’AHA (50–70 %) = 90–126 bpm ; soutenue (70–85 %) = 126–153 bpm"],
      },
      {
        title: "55 ans avec la formule de Tanaka",
        steps: ["FCmax = 208 − 0,7 × 55 = 169,5 bpm, affiché 170 bpm", "Zone 3 (70–80 %) = 118,65–135,6, arrondi à 119–136 bpm", "220 − âge donnerait 165 bpm, un peu moins"],
      },
      {
        title: "30 ans, fréquence cardiaque au repos de 60 bpm, Karvonen",
        steps: ["FCmax = 220 − 30 = 190 bpm ; réserve = 190 − 60 = 130 bpm", "Bas de la zone 3 = 60 + 0,7 × 130 = 151 bpm ; haut = 60 + 0,8 × 130 = 164 bpm", "La zone 3 va donc de 151 à 164 bpm"],
      },
    ],
    assumptions: [
      "Ces résultats sont des estimations, et non un avis médical, et ce calculateur n’a pas été vérifié par un professionnel.",
      "Les formules basées sur l’âge décrivent des moyennes de population. La fréquence cardiaque maximale réelle d’une personne peut s’écarter de l’estimation de 10 bpm ou plus : un maximum mesuré est donc plus précis.",
      "Les médicaments comme les bêtabloquants, ainsi que la chaleur, la déshydratation, la caféine et la maladie, modifient la fréquence cardiaque. Des zones fondées sur un maximum estimé peuvent ne pas vous convenir.",
      "Si vous avez une maladie cardiaque, d’autres problèmes de santé ou des symptômes comme une douleur thoracique ou des vertiges, parlez-en à un médecin avant de commencer un exercice intense.",
      "Les noms des zones et les tranches de 10 points sont une convention courante ; les entraîneurs et les appareils utilisent plusieurs systèmes de zones différents.",
    ],
    faqs: [
      {
        question: "Quelle formule de fréquence cardiaque maximale utiliser ?",
        answer: "220 − âge est simple et très répandue. La formule de Tanaka, 208 − 0,7 × âge, a été ajustée sur un ensemble de données beaucoup plus large et donne des valeurs plus élevées chez les adultes plus âgés. Aucune ne remplace un maximum mesuré lors d’une épreuve d’effort encadrée.",
      },
      {
        question: "Qu’est-ce que la méthode de Karvonen ?",
        answer: "Elle fixe les cibles à partir de la réserve de fréquence cardiaque, c’est-à-dire l’écart entre vos fréquences cardiaques maximale et de repos. Comme elle tient compte de votre fréquence au repos, elle peut mieux convenir aux personnes dont la fréquence cardiaque au repos est basse qu’un simple pourcentage du maximum.",
      },
      {
        question: "Quelle fréquence cardiaque correspond à un exercice modéré ?",
        answer: "L’American Heart Association indique environ 50–70 % de la fréquence cardiaque maximale pour une activité d’intensité modérée et environ 70–85 % pour une activité soutenue. Le calculateur affiche ces deux plages en battements par minute.",
      },
    ],
    sourcesUsedFor: [
      "L’équation 208 − 0,7 × âge pour la fréquence cardiaque maximale.",
      "Les plages cibles d’environ 50–70 % de la fréquence cardiaque maximale pour une activité modérée et d’environ 70–85 % pour une activité soutenue, et l’estimation 220 − âge.",
    ],
  },
  text: {
    age: "Âge",
    ageSuffix: "ans",
    formula: "Formule de fréquence cardiaque maximale",
    formulas: { fox: "220 − âge", tanaka: "208 − 0,7 × âge (Tanaka)" },
    formulaHelp: "Les deux formules estiment une moyenne pour les personnes de votre âge. La version de Tanaka donne des valeurs plus élevées chez les adultes plus âgés.",
    measuredMax: "Fréquence cardiaque maximale mesurée",
    measuredMaxHelp: "Facultatif. Si vous connaissez votre maximum grâce à une épreuve d’effort, saisissez-le ici ; il remplace la formule.",
    resting: "Fréquence cardiaque au repos",
    restingHelp: "Facultatif, mais nécessaire pour la méthode de Karvonen. Comptez votre pouls pendant une minute entière au réveil, avant de vous lever.",
    method: "Méthode de calcul des zones",
    methods: { percentMax: "Pourcentage de la fréquence cardiaque maximale", karvonen: "Karvonen (réserve de fréquence cardiaque)" },
    methodHelp: "La méthode de Karvonen applique les pourcentages à l’écart entre votre fréquence cardiaque maximale et votre fréquence au repos, puis rajoute la fréquence au repos.",
    errors: {
      restingRequired: "Saisissez votre fréquence cardiaque au repos pour utiliser la méthode de Karvonen.",
      restingTooHigh: "La fréquence cardiaque au repos doit être inférieure à la fréquence cardiaque maximale ({max} bpm).",
    },
    maxHr: "Fréquence cardiaque maximale estimée",
    maxHrMeasured: "Fréquence cardiaque maximale (mesurée)",
    captionFormula: "Estimée avec {formula} pour un âge de {age} ans.",
    captionMeasured: "Votre maximum mesuré, utilisé à la place d’une formule.",
    zonesCaption: "Zones d’entraînement cardiaque",
    zonesCaptionKarvonen: "Zones d’entraînement cardiaque (Karvonen)",
    columns: { zone: "Zone", intensity: "Intensité", heartRate: "Fréquence cardiaque" },
    zoneNames: ["Zone 1 – très légère", "Zone 2 – légère", "Zone 3 – modérée", "Zone 4 – intense", "Zone 5 – maximale"],
    percentRange: "{low}–{high}",
    bpmRange: "{low}–{high} bpm",
    ahaModerate: "Intensité modérée selon l’AHA ({range} du max)",
    ahaVigorous: "Intensité soutenue selon l’AHA ({range} du max)",
    reserve: "Réserve de fréquence cardiaque",
    notes: {
      aha: "L’American Heart Association suggère environ 50–70 % de la fréquence cardiaque maximale pour une activité modérée et environ 70–85 % pour une activité soutenue. Ces plages sont exprimées en pourcentage de la fréquence cardiaque maximale.",
      restingIgnored: "La fréquence cardiaque au repos n’est utilisée que par la méthode de Karvonen.",
      estimate: "Les formules donnent des moyennes de population ; votre maximum réel peut différer de 10 bpm ou plus. Les médicaments comme les bêtabloquants abaissent la fréquence cardiaque.",
      doctor: "Si vous avez une maladie cardiaque ou d’autres problèmes de santé, parlez-en à un médecin avant de commencer un exercice intense.",
    },
  },
};

export default fr;
