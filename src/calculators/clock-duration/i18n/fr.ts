import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ClockDurationText } from "../text/en";

const fr: CalculatorTranslation<ClockDurationText> = {
  content: {
    title: "Calculateur d’heures travaillées",
    shortTitle: "Heures travaillées",
    summary: "Comptez les heures et minutes entre une heure de début et une heure de fin, moins une pause non payée, y compris pour les postes de nuit, en heures décimales et avec la paie en option.",
    metaTitle: "Calculateur d’heures travaillées – Durée entre deux horaires",
    metaDescription:
      "Calculez les heures entre deux horaires, pauses déduites, même après minuit. Obtenez la durée en h:mm, en heures décimales pour vos relevés et la paie au taux horaire.",
    keywords: ["calcul heures travaillées", "calculateur d’heures", "calcul durée de travail", "temps entre deux heures", "feuille de temps", "heures décimales", "poste de nuit", "calcul horaire"],
    intro: [
      "Combien dure un poste de 9 h 00 à 17 h 30 avec une demi-heure de pause déjeuner ? Compter les heures à la main est source d’erreurs, surtout quand le poste se termine après minuit ou qu’il faut le total en heures décimales pour une feuille de temps.",
      "Saisissez une heure de début et une heure de fin au format 24 heures ou am/pm, ajoutez la pause non payée, et ce calculateur affiche le temps travaillé en heures et minutes, en heures décimales et en minutes au total. Ajoutez un taux horaire pour voir la paie du poste.",
    ],
    howToUse: [
      "Saisissez l’heure de début, par exemple 9:00, 09:00 ou 9 am.",
      "Saisissez l’heure de fin. Si elle est antérieure au début, le poste est considéré comme se terminant le lendemain.",
      "Saisissez la pause non payée en minutes, ou 0 s’il n’y en a pas.",
      "Si vous le souhaitez, choisissez une devise et saisissez votre taux horaire.",
      "Lisez le temps travaillé, les heures décimales pour votre feuille de temps et la paie.",
    ],
    formulas: [
      { title: "Écart entre les horaires", expression: "écart = fin − début   (ajouter 24 h si fin ≤ début)", explanation: "Les deux horaires sont d’abord convertis en minutes après minuit." },
      { title: "Temps travaillé", expression: "travaillé = écart − pause", explanation: "La pause non payée est soustraite de l’écart." },
      { title: "Heures décimales et paie", expression: "heures décimales = minutes travaillées ÷ 60\npaie = heures décimales × taux horaire", explanation: "Par exemple, 7 h 30 min font 450 ÷ 60 = 7,5 heures." },
    ],
    examples: [
      { title: "Une journée de 9 h 00 à 17 h 30 avec 30 minutes de pause déjeuner", steps: ["9:00 = 540 min et 17:30 = 1 050 min après minuit", "Écart = 1 050 − 540 = 510 min", "Travaillé = 510 − 30 = 480 min = 8:00, soit 8 heures décimales"] },
      {
        title: "Un poste de nuit de 22:00 à 6:15 avec 45 minutes de pause, à 18,50 $ de l’heure",
        steps: ["6:15 est avant 22:00, le poste passe donc minuit : 375 + 1 440 − 1 320 = 495 min", "Travaillé = 495 − 45 = 450 min = 7:30, soit 7,5 heures", "Paie = 7,5 × 18,50 $ = 138,75 $"],
      },
      { title: "Une matinée de 8:45 à 12:10 sans pause", steps: ["8:45 = 525 min et 12:10 = 730 min", "Travaillé = 730 − 525 = 205 min", "205 min = 3:25, soit environ 3,42 heures décimales"] },
    ],
    assumptions: [
      "Un poste dure moins de 24 heures. Si l’heure de fin est identique ou antérieure à l’heure de début, elle est considérée comme étant le lendemain.",
      "Les changements d’heure (heure d’été/heure d’hiver) pendant le poste sont ignorés : un poste de nuit qui en comprend un est faussé d’une heure.",
      "La paie est une simple estimation du salaire brut : heures × taux. Elle n’inclut pas les majorations d’heures supplémentaires, les impôts ni les règles d’arrondi de votre employeur. Pour les heures supplémentaires hebdomadaires, utilisez le calculateur d’heures supplémentaires.",
    ],
    faqs: [
      { question: "Comment convertir des heures et minutes en heures décimales ?", answer: "Divisez les minutes par 60 et ajoutez-les aux heures. 7 heures 30 minutes font 7 + 30 ÷ 60 = 7,5 heures, et 3 heures 25 minutes environ 3,42 heures." },
      { question: "Comment saisir un poste qui se termine après minuit ?", answer: "Saisissez simplement l’heure de fin réelle, par exemple 6:15 ou 6:15 am. Quand l’heure de fin est antérieure à l’heure de début, le calculateur ajoute 24 heures et affiche une remarque." },
      { question: "Quels formats d’heure puis-je saisir ?", answer: "Les heures au format 24 heures comme 9:30, 09:30 ou 21:30, et les heures au format 12 heures avec am ou pm comme 9:30 pm, 9 pm ou 9 am. Les minutes, si elles sont indiquées, doivent comporter deux chiffres." },
    ],
    sourcesUsedFor: ["L’heure (60 minutes) et la minute (60 secondes) utilisées pour convertir entre heure d’horloge et heures décimales."],
  },
  text: {
    start: "Heure de début",
    end: "Heure de fin",
    timeHelp: "Saisissez une heure au format 24 heures comme 9:30, 09:30 ou 21:30, ou au format 12 heures avec am/pm comme 9:30 pm ou 9 am.",
    breakMinutes: "Pause non payée",
    breakHelp: "Durée totale des pauses non payées en minutes, par exemple la pause déjeuner. Saisissez 0 s’il n’y en a pas.",
    rate: "Taux horaire (facultatif)",
    rateHelp: "Laissez vide si vous n’avez besoin que des heures.",
    errors: {
      format: "Saisissez une heure comme 9:30, 21:30, 9:30 pm ou 9 am.",
      hour24: "L’heure doit être comprise entre 0 et 23.",
      hour12: "Avec am ou pm, l’heure doit être comprise entre 1 et 12.",
      minute: "Les minutes doivent être comprises entre 00 et 59.",
      breakTooLong: "La pause doit être plus courte que la durée entre le début et la fin ({span}).",
    },
    worked: "Temps travaillé",
    caption: "De {start} à {end}, moins {break} min de pause",
    decimalHours: "Heures décimales",
    totalMinutes: "Total en minutes",
    span: "Durée entre le début et la fin",
    pay: "Paie pour ce poste",
    notes: {
      overnight: "L’heure de fin n’est pas après l’heure de début : le poste est donc considéré comme se prolongeant après minuit, jusqu’au lendemain (24 heures ajoutées).",
      fullDay: "Le début et la fin sont identiques : la durée est donc comptée comme 24 heures complètes.",
      rounding: "La paie correspond aux heures décimales × taux, avant impôts, majorations d’heures supplémentaires ou règles d’arrondi éventuelles de votre employeur.",
    },
  },
};

export default fr;
