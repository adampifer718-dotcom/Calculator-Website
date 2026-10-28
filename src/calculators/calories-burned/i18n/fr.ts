import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CaloriesBurnedText } from "../text/en";

const fr: CalculatorTranslation<CaloriesBurnedText> = {
  content: {
    title: "Calculateur de calories brûlées",
    shortTitle: "Calories brûlées",
    summary: "Estimez les calories brûlées en marchant, en courant, à vélo, en nageant et lors d’autres activités à partir des valeurs MET, du poids corporel et de la durée.",
    metaTitle: "Calculateur de calories brûlées – Méthode MET par activité",
    metaDescription: "Estimez les calories brûlées en marche, course, vélo, natation et autres activités à partir des valeurs MET publiées, de votre poids et de la durée.",
    keywords: ["calories brûlées", "dépense calorique", "calories sport", "MET", "équivalent métabolique", "dépense énergétique", "kcal par heure"],
    intro: [
      "Le MET (équivalent métabolique) compare le coût énergétique d’une activité à celui de la position assise au calme. La marche rapide vaut environ 4 MET : elle consomme donc à peu près quatre fois plus d’énergie que le repos.",
      "Ce calculateur multiplie la valeur MET d’une activité par votre poids corporel et par la durée pour estimer les calories brûlées. Choisissez l’une des activités courantes, dont les valeurs proviennent du Compendium of Physical Activities, ou saisissez votre propre valeur MET.",
    ],
    howToUse: [
      "Choisissez une activité, ou choisissez une valeur MET personnalisée et saisissez-la.",
      "Saisissez votre poids corporel en kilogrammes ou en livres.",
      "Saisissez la durée de l’activité en heures et en minutes.",
      "Lisez les calories brûlées estimées, leur équivalent en kilojoules et le rythme horaire.",
    ],
    formulas: [
      { title: "Méthode MET", expression: "kcal = MET × poids (kg) × durée (h)", explanation: "Repose sur la convention selon laquelle 1 MET vaut environ 1 kcal par kilogramme de poids corporel et par heure." },
      { title: "Au-delà du repos", expression: "kcal nettes = (MET − 1) × poids (kg) × durée (h)", explanation: "Exclut l’énergie que vous auriez de toute façon dépensée au repos." },
      { title: "Unités", expression: "1 lb = 0,45359237 kg · 1 kcal = 4,184 kJ", explanation: "Facteurs de conversion exacts." },
    ],
    examples: [
      {
        title: "Marche rapide de 45 minutes à 70 kg",
        steps: ["Marche rapide (3,5 mph) = 4,3 MET", "4,3 × 70 × 0,75 = 225,75 ≈ 226 kcal", "En kilojoules : 225,75 × 4,184 ≈ 945 kJ"],
      },
      {
        title: "Course à 6 mph pendant 1 h 30 min à 180 lb",
        steps: ["180 lb × 0,45359237 = 81,65 kg", "9,8 × 81,65 × 1,5 ≈ 1 200 kcal", "Soit environ 800 kcal par heure"],
      },
      {
        title: "Activité personnalisée de 6,5 MET pendant 2 heures à 55 kg",
        steps: ["6,5 × 55 × 2 = 715 kcal", "Au-delà du repos : (6,5 − 1) × 55 × 2 = 605 kcal"],
      },
    ],
    assumptions: [
      "Le résultat est une estimation, pas un avis médical, et ce calculateur n’a pas encore été vérifié par un professionnel. Consultez un médecin avant de commencer un nouveau programme d’exercice.",
      "Les valeurs MET sont des moyennes pour la population adulte. La condition physique, la technique, le terrain, la composition corporelle et la température modifient la dépense réelle : les résultats individuels varient donc.",
      "Le calcul utilise la convention 1 MET ≈ 1 kcal par kg et par heure. La dépense de repos mesurée varie d’une personne à l’autre, ce qui ajoute à l’incertitude.",
      "Les valeurs MET proviennent du Compendium of Physical Activities de 2011. La mise à jour de 2024 a modifié certaines activités ; les chiffres d’autres outils peuvent donc légèrement différer.",
    ],
    faqs: [
      { question: "Qu’est-ce qu’un MET ?", answer: "Un MET est le coût énergétique d’une activité rapporté à celui de la position assise au calme. Une activité de 6 MET consomme environ six fois l’énergie du repos." },
      { question: "Pourquoi le poids corporel compte-t-il ?", answer: "Déplacer un corps plus lourd demande plus d’énergie : pour la même activité et la même durée, une personne plus lourde brûle donc plus de calories." },
      { question: "Les chiffres des montres connectées sont-ils plus précis ?", answer: "Les montres ajoutent les données de fréquence cardiaque, ce qui peut aider, mais ce sont aussi des estimations. Les deux méthodes servent surtout à comparer des activités plutôt qu’à fournir des chiffres exacts." },
    ],
    sourcesUsedFor: [
      "Les valeurs MET des activités proposées et la convention selon laquelle 1 MET vaut environ 1 kcal par kg et par heure.",
      "Le contexte de l’édition actuelle du Compendium, qui a révisé certaines valeurs MET ; consultez pacompendium.com pour la valeur la plus récente d’une activité.",
    ],
  },
  text: {
    activity: "Activité",
    activityHelp: "Les valeurs MET sont des moyennes pour adultes issues du Compendium of Physical Activities.",
    activities: {
      walking: "Marche, 3,0 mph (4,8 km/h), sur terrain plat",
      brisk: "Marche rapide, 3,5 mph (5,6 km/h)",
      hiking: "Randonnée en terrain varié",
      run5: "Course à pied, 5 mph (8 km/h, 12 min/mile)",
      run6: "Course à pied, 6 mph (9,7 km/h, 10 min/mile)",
      cycleLeisure: "Vélo de loisir, moins de 10 mph (16 km/h)",
      cycleModerate: "Vélo, 12 à 13,9 mph (19 à 22 km/h), effort modéré",
      swimModerate: "Natation en longueurs, crawl, effort léger ou modéré",
      swimVigorous: "Natation en longueurs, crawl, rapide, effort intense",
      weightsLight: "Musculation, effort léger ou modéré",
      weightsVigorous: "Musculation, effort intense",
      yoga: "Yoga, hatha",
      tennis: "Tennis, en général",
      soccer: "Football, loisir",
      jumpRope: "Corde à sauter, rythme modéré",
      gardening: "Jardinage, en général",
      custom: "Valeur MET personnalisée",
    },
    customMet: "Valeur MET",
    customMetHelp: "Équivalent métabolique de l’activité : 1 correspond à la position assise au calme ; la marche rapide vaut environ 4.",
    weight: "Poids corporel",
    weightRange: "Saisissez un poids corporel compris entre 20 et 700 kg (environ 45 à 1 540 lb).",
    weightUnit: "Unité de poids",
    weightUnits: { kg: "Kilogrammes (kg)", lb: "Livres (lb)" },
    hours: "Heures",
    minutes: "Minutes",
    timeZero: "Saisissez une durée supérieure à 0.",
    timeMax: "Saisissez une durée de 24 heures au maximum.",
    calories: "Calories brûlées",
    caption: "{met} MET × {kg} kg × {hours} h.",
    kj: "En kilojoules",
    perHour: "Calories par heure",
    metUsed: "Valeur MET utilisée",
    aboveRest: "Au-delà du repos (MET − 1)",
    kcal: "kcal",
    kcalHour: "kcal/h",
    notes: {
      estimate: "Les valeurs MET sont des moyennes pour adultes ; votre propre dépense dépend de votre condition physique, de votre technique, de votre composition corporelle et des conditions, et peut nettement différer.",
      gross: "Le total inclut l’énergie que vous auriez dépensée au repos pendant la même durée. Le chiffre « au-delà du repos » l’exclut.",
    },
  },
};

export default fr;
