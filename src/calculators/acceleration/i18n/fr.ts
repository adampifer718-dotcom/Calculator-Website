import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AccelerationText } from "../text/en";

const fr: CalculatorTranslation<AccelerationText> = {
  content: {
    title: "Calculateur d’accélération",
    shortTitle: "Accélération",
    summary: "Calculez l’accélération à partir d’une variation de vitesse, d’une distance et d’un temps, ou d’une force et d’une masse, en m/s², ft/s² et g.",
    metaTitle: "Calculateur d’accélération – Vitesse, distance ou force",
    metaDescription:
      "Calculez l’accélération à partir d’une variation de vitesse, d’une distance et d’un temps, ou d’une force et d’une masse (a = F/m), en m/s², ft/s² et g.",
    keywords: ["calcul accélération", "formule accélération", "m/s2", "décélération", "force g", "a = F/m", "0 à 100 km/h", "cinématique"],
    intro: [
      "L’accélération mesure la rapidité avec laquelle la vitesse change. Une voiture qui passe de l’arrêt à 100 km/h en 8 secondes gagne environ 3,5 mètres par seconde de vitesse chaque seconde, ce qui s’écrit 3,5 m/s².",
      "Ce calculateur détermine l’accélération de trois façons : à partir d’une vitesse initiale et d’une vitesse finale sur une durée, à partir de la distance parcourue pendant une durée, ou à partir de la force nette exercée sur un objet et de sa masse. Le résultat s’affiche en m/s², en ft/s² et en multiple de la pesanteur normale g.",
    ],
    howToUse: [
      "Choisissez ce que vous connaissez : une variation de vitesse, une distance et un temps, ou une force et une masse.",
      "Choisissez les unités de vitesse et de distance lorsqu’elles sont demandées. Le temps est toujours en secondes, la force en newtons et la masse en kilogrammes.",
      "Saisissez les valeurs. Une vitesse négative correspond à un mouvement dans le sens opposé.",
      "Lisez l’accélération. Un résultat négatif signifie que l’objet ralentit.",
    ],
    formulas: [
      { title: "À partir d’une variation de vitesse", expression: "a = (v − v₀) ÷ t", explanation: "L’accélération moyenne sur la durée t, où v₀ est la vitesse initiale et v la vitesse finale." },
      { title: "À partir de la distance et du temps", expression: "d = v₀t + ½at²  ⇒  a = 2(d − v₀t) ÷ t²", explanation: "Valable lorsque l’accélération reste constante sur tout l’intervalle." },
      { title: "À partir de la force et de la masse", expression: "a = F ÷ m", explanation: "Deuxième loi de Newton, avec la force nette F en newtons et la masse m en kilogrammes." },
      { title: "Conversions d’unités", expression: "1 ft/s² = 0,3048 m/s²\n1 g = 9,80665 m/s²", explanation: "Les vitesses sont d’abord converties en m/s (1 km/h = 1/3,6 m/s, 1 mph = 0,44704 m/s)." },
    ],
    examples: [
      {
        title: "Une voiture qui passe de 0 à 100 km/h en 8 secondes",
        steps: ["100 km/h = 100 ÷ 3,6 ≈ 27,778 m/s", "a = (27,778 − 0) ÷ 8 ≈ 3,472 m/s²", "Soit environ 0,354 g"],
      },
      {
        title: "Freinage de 60 mph jusqu’à l’arrêt en 4 secondes",
        steps: ["60 mph = 60 × 0,44704 = 26,8224 m/s", "a = (0 − 26,8224) ÷ 4 = −6,7056 m/s²", "Le signe moins indique une décélération d’environ 0,684 g"],
      },
      {
        title: "Une poussée de 450 N sur une luge de 75 kg",
        steps: ["a = F ÷ m", "= 450 ÷ 75 = 6 m/s²"],
      },
    ],
    assumptions: [
      "Le mouvement est rectiligne, et les vitesses et forces dans le sens opposé sont saisies comme des valeurs négatives.",
      "La méthode par variation de vitesse donne l’accélération moyenne sur l’intervalle. La méthode par distance et temps suppose une accélération constante.",
      "La méthode par force et masse utilise la force nette, une fois soustraits le frottement, la traînée et les autres forces opposées.",
    ],
    faqs: [
      {
        question: "Que signifie une accélération négative ?",
        answer: "Elle signifie que l’accélération est orientée dans le sens négatif. Pour un objet qui avance, cela veut dire qu’il ralentit, ce que l’on appelle souvent une décélération.",
      },
      {
        question: "Que vaut 1 g ?",
        answer: "C’est l’accélération normale de la pesanteur, définie comme exactement 9,80665 m/s² (environ 32,17 ft/s²). Exprimer une accélération en g la compare à l’attraction de la pesanteur à la surface de la Terre.",
      },
      {
        question: "Pourquoi l’accélération se mesure-t-elle en m/s² ?",
        answer: "L’accélération est une variation de vitesse (m/s) par unité de temps (s) : son unité est donc le mètre par seconde par seconde, noté m/s².",
      },
    ],
    sourcesUsedFor: [
      "Définition de l’accélération moyenne comme variation de vitesse divisée par le temps écoulé, et son unité SI m/s².",
      "Deuxième loi de Newton, F = ma.",
      "L’accélération normale de la pesanteur, 9,80665 m/s².",
    ],
  },
  text: {
    mode: "Calculer à partir de",
    modes: { velocity: "Variation de vitesse", distance: "Distance et temps", force: "Force et masse" },
    speedUnit: "Unité de vitesse",
    speedUnits: { ms: "Mètres par seconde (m/s)", kmh: "Kilomètres par heure (km/h)", mph: "Miles par heure (mph)", fts: "Pieds par seconde (ft/s)" },
    initialVelocity: "Vitesse initiale (v₀)",
    initialHelp: "Utilisez une valeur négative pour un mouvement dans le sens opposé.",
    finalVelocity: "Vitesse finale (v)",
    time: "Temps (t)",
    distanceUnit: "Unité de distance",
    distanceUnits: { m: "Mètres (m)", km: "Kilomètres (km)", ft: "Pieds (ft)", mi: "Miles (mi)" },
    distance: "Distance parcourue (d)",
    distanceHelp: "Le déplacement en ligne droite pendant la durée t.",
    force: "Force nette (F)",
    forceHelp: "La somme de toutes les forces qui agissent sur l’objet, en newtons.",
    mass: "Masse (m)",
    acceleration: "Accélération",
    formula: { velocity: "a = (v − v₀) ÷ t", distance: "a = 2(d − v₀t) ÷ t²", force: "a = F ÷ m" },
    inFeet: "En pieds par seconde carrée",
    inG: "En pesanteurs normales (g)",
    distanceCovered: "Distance parcourue",
    finalVelocityResult: "Vitesse finale",
    notes: {
      negative: "L’accélération est négative : l’objet ralentit (décélère) s’il se déplace dans le sens positif.",
      zero: "Accélération nulle : la vitesse ne change pas.",
      constant: "Suppose que l’accélération est constante pendant tout l’intervalle de temps.",
      average: "Il s’agit de l’accélération moyenne sur l’intervalle ; l’accélération à un instant donné peut être plus élevée ou plus faible.",
      g: "1 g est l’accélération normale de la pesanteur, 9,80665 m/s², valeur exacte par définition.",
    },
  },
};

export default fr;
