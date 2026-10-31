import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TaktTimeText } from "../text/en";

const unit = "{n} unité";
const units = "{n} unités";

const fr: CalculatorTranslation<TaktTimeText> = {
  content: {
    title: "Calculateur de takt time",
    shortTitle: "Takt time",
    summary: "Calculez le takt time, le rythme de production nécessaire pour satisfaire la demande client, à partir de la durée des équipes, des pauses, du nombre d’équipes et de la demande, avec le nombre minimal d’opérateurs.",
    metaTitle: "Calculateur de takt time – Rythme de production par unité",
    metaDescription:
      "Calculez le takt time selon la durée d’équipe, les pauses, les équipes par jour et la demande client, avec les unités par heure et le minimum d’opérateurs.",
    keywords: ["calcul takt time", "formule takt time", "temps takt", "lean manufacturing", "temps d’ouverture disponible", "demande client", "temps de cycle et takt time", "équilibrage de ligne"],
    intro: [
      "Le takt time est le rythme qu’une ligne de production doit tenir pour fabriquer exactement ce dont les clients ont besoin : si les clients veulent 645 unités par jour avec 860 minutes de temps de travail, une unité doit sortir de la ligne toutes les 80 secondes. Le mot vient de l’allemand Takt, la mesure en musique.",
      "Ce calculateur détermine le temps net disponible à partir de la durée des équipes, des pauses, du nombre d’équipes et des jours travaillés, le divise par la demande, et affiche le takt time en secondes et en minutes. Avec le contenu de travail total par unité, il estime le nombre minimal d’opérateurs, et avec un temps de cycle mesuré, il indique si la ligne peut suivre le rythme.",
    ],
    howToUse: [
      "Saisissez la durée d’une équipe en heures et minutes, et les pauses planifiées par équipe en minutes.",
      "Saisissez le nombre d’équipes par jour et le nombre de jours travaillés sur la période pour laquelle vous avez une demande.",
      "Saisissez la demande client pour cette période.",
      "Ajoutez éventuellement le contenu de travail total par unité et le temps de cycle réel, tous deux en secondes, pour voir le nombre minimal d’opérateurs et savoir si la ligne suit le takt.",
    ],
    formulas: [
      {
        title: "Temps net disponible",
        expression: "disponible = (durée d’équipe − pauses) × équipes par jour × jours",
        explanation: "En minutes. Seul compte le temps pendant lequel la ligne est censée tourner.",
      },
      {
        title: "Takt time",
        expression: "takt = temps disponible ÷ demande client",
        explanation: "Affiché en secondes par unité. Les unités par heure valent 3 600 ÷ takt.",
      },
      {
        title: "Nombre minimal d’opérateurs",
        expression: "opérateurs = ⌈contenu de travail ÷ takt⌉",
        explanation: "Le travail manuel total par unité divisé par le takt time, arrondi à la personne ou au poste entier supérieur.",
      },
    ],
    examples: [
      {
        title: "Deux équipes de 8 heures pour 645 unités par jour",
        steps: ["Disponible = (480 − 50) × 2 × 1 = 860 min = 51 600 s", "Takt = 51 600 ÷ 645 = 80 s par unité (1:20)", "Opérateurs = ⌈300 ÷ 80⌉ = ⌈3,75⌉ = 4"],
      },
      {
        title: "Une demande hebdomadaire de 1 400 unités sur une équipe",
        steps: [
          "Disponible = (450 − 30) × 1 × 5 = 2 100 min = 126 000 s",
          "Takt = 126 000 ÷ 1 400 = 90 s par unité",
          "Un cycle réel de 95 s dépasse le takt de 5 s : on peut donc fabriquer environ 1 326 unités au lieu de 1 400",
        ],
      },
      {
        title: "Une équipe de 10 heures pour 216 unités",
        steps: ["Disponible = 600 − 60 = 540 min = 32 400 s", "Takt = 32 400 ÷ 216 = 150 s par unité, soit 2:30", "Unités par heure = 3 600 ÷ 150 = 24"],
      },
    ],
    assumptions: [
      "Le takt time est fixé par la demande, et non par l’équipement. Il suppose que la demande est répartie uniformément sur la période.",
      "Seules les pauses sont retirées de l’équipe. Incluez dans les pauses la maintenance planifiée, les réunions ou le temps de démarrage si la ligne ne tourne pas à ces moments-là.",
      "Le nombre minimal d’opérateurs est une borne inférieure. Un travail inégal, les déplacements et la variabilité des temps de tâche en demandent généralement davantage.",
    ],
    faqs: [
      {
        question: "Quelle est la différence entre takt time et temps de cycle ?",
        answer: "Le takt time est le rythme exigé par les clients : temps disponible divisé par la demande. Le temps de cycle est la durée réelle du processus par unité. Si le temps de cycle dépasse le takt time, la ligne ne peut pas suivre sans heures supplémentaires ni changements.",
      },
      {
        question: "Le takt time doit-il inclure les pannes ?",
        answer: "Non. Le takt time utilise le temps disponible prévu. Les arrêts imprévus ralentissent la ligne : le temps de cycle doit donc être inférieur au takt pour leur laisser de la marge. Le taux de rendement synthétique (TRS) mesure ces pertes.",
      },
      {
        question: "Et si la demande change au cours du mois ?",
        answer: "Recalculez le takt pour chaque période avec sa propre demande. Beaucoup d’usines revoient le takt time chaque semaine ou chaque mois et rééquilibrent le travail entre les postes lorsqu’il change beaucoup.",
      },
    ],
    sourcesUsedFor: [
      "La définition du takt time comme temps de production disponible divisé par la demande client.",
      "Le temps net disponible après les pauses, et la comparaison du temps de cycle avec le takt time.",
    ],
  },
  text: {
    shiftHours: "Durée d’équipe : heures",
    shiftMinutes: "Durée d’équipe : minutes",
    breaks: "Pauses par équipe",
    breaksHelp: "Pauses, repas et réunions planifiés pendant lesquels la ligne ne tourne pas, en minutes par équipe.",
    shifts: "Équipes par jour",
    days: "Jours travaillés sur la période",
    daysHelp: "Utilisez 1 pour une demande quotidienne, 5 pour une demande hebdomadaire sur une semaine de cinq jours, et ainsi de suite.",
    demand: "Demande client sur la période",
    demandHelp: "Le nombre d’unités dont les clients ont besoin sur la même période.",
    workContent: "Contenu de travail total par unité (facultatif)",
    workContentHelp: "La somme de tous les temps de travail manuel nécessaires pour fabriquer une unité, en secondes. Donne le nombre minimal d’opérateurs ou de postes.",
    actualCycle: "Temps de cycle réel (facultatif)",
    actualCycleHelp: "Le temps mesuré du poste le plus lent, en secondes par unité, à comparer au takt time.",
    minutes: "min",
    seconds: "s",
    units: "unités",
    errors: {
      noShift: "Saisissez une durée d’équipe supérieure à 0 minute.",
      breaksTooLong: "Les pauses doivent être plus courtes que l’équipe.",
      tooManyHours: "Les équipes totalisent plus de 24 heures par jour.",
    },
    takt: "Takt time",
    perUnit: "s par unité",
    caption: "{available} de temps disponible ÷ {demand}.",
    demandUnits: {
      zero: unit,
      one: unit,
      two: units,
      few: units,
      many: "{n} d’unités",
      other: units,
    },
    minutesText: "{n} min",
    taktClock: "Takt time (m:ss)",
    clockText: "{m}:{ss}",
    clockTextHours: "{h}:{mm}:{ss}",
    unitsPerHour: "Unités par heure de temps disponible",
    available: "Temps net disponible sur la période",
    availablePerShift: "Temps disponible par équipe",
    operators: "Nombre minimal d’opérateurs ou de postes",
    capacity: "Unités possibles au temps de cycle réel",
    gap: "Temps de cycle réel moins takt time",
    meetsTakt: "La ligne peut-elle suivre le takt ?",
    verdict: {
      yes: "Oui : le temps de cycle reste dans le takt time",
      no: "Non : le temps de cycle dépasse le takt time",
    },
    notes: {
      operators: "Nombre minimal d’opérateurs = contenu de travail ÷ takt time, arrondi à l’entier supérieur ({ratio} → {operators}). Les lignes réelles en demandent généralement plus, car le travail ne peut pas être parfaitement équilibré.",
      slower: "À ce temps de cycle, la ligne fabrique environ {capacity} sur la période, en deçà de la demande de {demand}. Les options sont notamment de raccourcir le cycle, d’ajouter un poste ou d’allonger le temps disponible.",
      faster: "Le temps de cycle laisse {gap} de marge par unité, ce qui absorbe les petites perturbations.",
      plannedStops: "Seules les pauses sont retirées de l’équipe. Si vous prévoyez aussi de la maintenance ou des réunions, incluez-les dans les pauses pour un takt time plus réaliste.",
    },
  },
};

export default fr;
