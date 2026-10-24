import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DueDateText } from "../text/en";

const weeks = { zero: "{n} semaine", one: "{n} semaine", two: "{n} semaines", few: "{n} semaines", many: "{n} de semaines", other: "{n} semaines" };
const days = { zero: "{n} jour", one: "{n} jour", two: "{n} jours", few: "{n} jours", many: "{n} de jours", other: "{n} jours" };

const fr: CalculatorTranslation<DueDateText> = {
  content: {
    title: "Calculateur de date d’accouchement",
    shortTitle: "Date d’accouchement",
    summary: "Estimez la date prévue d’accouchement à partir des dernières règles, de la date de conception ou d’un transfert d’embryon en FIV, avec l’âge gestationnel du jour et les dates des trimestres.",
    metaTitle: "Calculateur de date d’accouchement – Règles, conception, FIV",
    metaDescription: "Estimez votre date d’accouchement à partir du premier jour de vos dernières règles, de la conception ou d’un transfert d’embryon (FIV), avec l’âge gestationnel.",
    keywords: ["date d’accouchement", "calcul date d’accouchement", "date prévue d’accouchement", "terme de grossesse", "règle de Naegele", "âge gestationnel", "date d’accouchement FIV", "semaines de grossesse"],
    intro: [
      "La plupart des grossesses sont datées à partir du premier jour des dernières règles, même si la conception a généralement lieu environ deux semaines plus tard. Une grossesse typique dure environ 40 semaines, soit 280 jours, à partir de cette date.",
      "Ce calculateur estime la date d’accouchement à partir des dernières règles (en tenant compte de la durée de votre cycle), d’une date de conception connue ou d’un transfert d’embryon en FIV. Il indique aussi à combien de semaines de grossesse vous êtes à une date choisie, le trimestre en cours et les dates de fin de chaque trimestre.",
    ],
    howToUse: [
      "Choisissez la base du calcul : les dernières règles, la conception ou un transfert en FIV.",
      "Saisissez la date. Pour les dernières règles, indiquez aussi la durée habituelle de votre cycle ; pour une FIV, choisissez l’âge de l’embryon au moment du transfert.",
      "Gardez la date du jour ou choisissez une autre date pour voir l’âge gestationnel à ce jour-là.",
      "Lisez la date d’accouchement estimée, l’âge gestationnel, le trimestre et les dates des trimestres.",
    ],
    formulas: [
      { title: "À partir des dernières règles (règle de Naegele, ajustée au cycle)", expression: "Date d’accouchement = premier jour des dernières règles + 280 jours + (durée du cycle − 28)", explanation: "Pour un cycle de 28 jours, cela fait exactement 40 semaines. Un cycle plus long décale l’ovulation, et donc la date d’accouchement, plus tard." },
      { title: "À partir de la conception", expression: "Date d’accouchement = date de conception + 266 jours", explanation: "266 jours font 38 semaines, la durée habituelle entre la fécondation et la naissance." },
      { title: "À partir d’un transfert en FIV", expression: "Date d’accouchement = date du transfert + 266 jours − âge de l’embryon (3 ou 5 jours)", explanation: "Au moment du transfert, l’embryon avait déjà 3 ou 5 jours depuis la fécondation." },
      { title: "Âge gestationnel", expression: "Âge gestationnel = date − (date d’accouchement − 280 jours), en semaines et jours", explanation: "Compté à partir de la date qui aurait été le premier jour des dernières règles, selon la convention clinique habituelle." },
    ],
    examples: [
      {
        title: "Dernières règles le 1er juin 2026, cycle de 28 jours",
        steps: ["1er juin 2026 + 280 jours = 8 mars 2027", "Le 24 octobre 2026 : 145 jours = 20 semaines et 5 jours", "C’est le deuxième trimestre (de 14 semaines 0 jour à 27 semaines 6 jours)"],
      },
      {
        title: "Dernières règles le 10 mars 2026, cycle de 32 jours",
        steps: ["10 mars 2026 + 280 + (32 − 28) = 284 jours = 19 décembre 2026", "La datation commence alors le 14 mars 2026 (date d’accouchement − 280 jours)", "Le 24 octobre 2026 : 224 jours = 32 semaines et 0 jour, troisième trimestre"],
      },
      {
        title: "Embryon de 5 jours transféré le 20 juin 2026",
        steps: ["266 − 5 = 261 jours", "20 juin 2026 + 261 jours = 8 mars 2027", "C’est la même date que pour des dernières règles commençant le 1er juin 2026"],
      },
    ],
    assumptions: [
      "La date d’accouchement est une estimation, pas un avis médical, et ce calculateur n’a pas encore été vérifié par un professionnel. Seule une faible part des bébés naît le jour prévu ; la plupart arrivent dans les deux semaines environ autour de cette date.",
      "Une échographie de datation en début de grossesse est plus précise qu’une estimation fondée sur les dates et peut modifier la date d’accouchement. C’est votre sage-femme ou votre médecin qui fixe la date retenue pour votre suivi.",
      "L’ajustement au cycle suppose une ovulation environ 14 jours avant les règles suivantes. Il ne tient pas compte des cycles irréguliers, d’une contraception hormonale récente ni de dates incertaines.",
      "Les trimestres sont définis ainsi : jusqu’à 13 semaines 6 jours, de 14 semaines 0 jour à 27 semaines 6 jours, et à partir de 28 semaines 0 jour. Certaines sources placent ces limites une semaine plus tôt ou plus tard.",
    ],
    faqs: [
      { question: "Pourquoi la grossesse est-elle comptée à partir des dernières règles et non de la conception ?", answer: "Le premier jour des dernières règles est généralement connu, alors que le jour de la conception ne l’est pas. Compter à partir de cette date est une convention ancienne : au moment de la conception, une grossesse en est donc déjà à environ 2 semaines." },
      { question: "Comment la durée du cycle modifie-t-elle la date d’accouchement ?", answer: "Dans un cycle de 28 jours, l’ovulation a lieu vers le 14e jour. Dans un cycle plus long, elle est plus tardive : la date d’accouchement est donc repoussée du même nombre de jours. Un cycle plus court l’avance." },
      { question: "La date d’accouchement peut-elle changer ?", answer: "Oui. Une échographie précoce peut donner une autre date, et votre soignant peut la mettre à jour, en général une seule fois, d’après cet examen." },
    ],
    sourcesUsedFor: [
      "Le fait que l’échographie du premier trimestre est la méthode la plus précise pour confirmer la date d’accouchement, et que les grossesses obtenues par FIV sont datées à partir du transfert.",
      "Le calcul de 280 jours (40 semaines) à partir du premier jour des dernières règles, l’ajustement pour les cycles plus longs ou plus courts que 28 jours, et le fait qu’une échographie de datation donne une date plus précise.",
    ],
  },
  text: {
    method: "Calculer à partir de",
    methods: { lmp: "Premier jour des dernières règles", conception: "Date de conception", ivf: "Date du transfert d’embryon (FIV)" },
    lmp: "Premier jour de vos dernières règles",
    cycle: "Durée moyenne du cycle",
    cycleHelp: "Nombre de jours entre le premier jour des règles et le premier jour des règles suivantes. Indiquez 28 en cas de doute.",
    daysSuffix: "jours",
    conception: "Date de conception",
    conceptionHelp: "En général connue seulement de façon approximative, par exemple grâce au suivi de l’ovulation.",
    transfer: "Date du transfert d’embryon",
    embryoAge: "Âge de l’embryon au transfert",
    embryoAges: { "3": "Embryon de 3 jours", "5": "Embryon de 5 jours (blastocyste)" },
    asOf: "Âge gestationnel au",
    asOfHelp: "La date du jour par défaut. Modifiez-la pour voir où en est la grossesse à une autre date.",
    units: { weeks, days },
    weeksDays: "{weeks} et {days}",
    dueDate: "Date d’accouchement estimée",
    caption: "{days} jours après {from}.",
    captionFrom: { lmp: "le premier jour des dernières règles, ajusté à la durée du cycle", conception: "la date de conception", ivf: "la date du transfert" },
    gestationalAge: "Âge gestationnel",
    trimester: "Trimestre",
    trimesters: { first: "Premier trimestre", second: "Deuxième trimestre", third: "Troisième trimestre" },
    notStarted: "Pas encore commencée à cette date",
    firstEnds: "Fin du premier trimestre (13 semaines 6 jours)",
    secondEnds: "Fin du deuxième trimestre (27 semaines 6 jours)",
    thirdStarts: "Début du troisième trimestre (28 semaines 0 jour)",
    daysToDue: "Jours restants avant la date d’accouchement",
    startDate: "Début de la datation de la grossesse (0 semaine 0 jour)",
    notes: {
      estimate: "Une simple estimation : seule une faible part des bébés naît à la date prévue, et la plupart arrivent dans les deux semaines environ avant ou après. Une échographie de datation peut la modifier.",
      beforeStart: "La date choisie est antérieure au début de la datation de la grossesse : il n’y a donc pas encore d’âge gestationnel.",
      pastDue: "La date choisie tombe le jour de la date d’accouchement estimée ou après.",
      veryLate: "La date choisie correspond à plus de 42 semaines de grossesse. Vérifiez que les dates sont correctes.",
      clinician: "L’âge gestationnel est compté à partir du premier jour des dernières règles, même lorsque la date provient de la conception ou du transfert. C’est votre sage-femme ou votre médecin qui fixe la date d’accouchement officielle.",
    },
    errors: { range: "Cette date donne une date d’accouchement en dehors de la plage prise en charge." },
  },
};

export default fr;
