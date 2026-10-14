import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HourlyToSalaryText } from "../text/en";

const fr: CalculatorTranslation<HourlyToSalaryText> = {
  content: {
    title: "Calculateur de taux horaire en salaire",
    shortTitle: "Taux horaire en salaire",
    summary: "Convertissez un taux horaire en salaire brut annuel, mensuel, bimensuel, toutes les deux semaines, hebdomadaire et journalier selon votre horaire.",
    metaTitle: "Taux horaire en salaire – Brut annuel, mensuel et hebdo",
    metaDescription:
      "Convertissez un taux horaire en salaire annuel et obtenez le brut mensuel, bimensuel, toutes les deux semaines, hebdomadaire et journalier selon vos heures.",
    keywords: ["taux horaire en salaire annuel", "salaire horaire brut", "convertir taux horaire", "salaire brut annuel", "salaire mensuel brut", "calcul salaire par heure"],
    intro: [
      "Utilisez ce calculateur pour voir ce que représente un taux horaire sur une année et pour chaque période de paie courante.",
      "Il permet de comparer une offre d’emploi payée à l’heure avec un poste au salaire fixe, ou de vérifier comment un temps partiel ou des semaines non payées modifient votre revenu brut annuel.",
    ],
    howToUse: [
      "Saisissez votre taux horaire avant impôts et cotisations.",
      "Indiquez vos heures payées par semaine et vos semaines payées par an.",
      "Indiquez vos jours travaillés par semaine pour obtenir un montant journalier exact.",
      "Consultez l’équivalent en salaire annuel et le détail pour chaque période de paie.",
    ],
    formulas: [
      {
        title: "Salaire annuel",
        expression: "Salaire annuel = taux horaire × heures par semaine × semaines par an",
        explanation: "Multiplier par les semaines payées, et non par les semaines du calendrier, permet d’exclure les congés non rémunérés.",
      },
      {
        title: "Autres périodes de paie",
        expression: "Mensuel = annuel ÷ 12\nBimensuel = annuel ÷ 24\nToutes les deux semaines = annuel ÷ 26\nHebdomadaire = annuel ÷ semaines par an\nJournalier = annuel ÷ (jours travaillés par semaine × semaines par an)",
        explanation: "Chaque période divise le même montant annuel, de sorte que les chiffres restent cohérents entre eux.",
      },
    ],
    examples: [
      {
        title: "25 $US de l’heure, à temps plein",
        steps: ["Heures annuelles = 40 × 52 = 2 080", "Salaire annuel = 25 $US × 2 080 = 52 000 $US"],
      },
      {
        title: "18,50 $US de l’heure, 30 heures par semaine, 50 semaines payées",
        steps: ["Heures annuelles = 30 × 50 = 1 500", "Salaire annuel = 18,50 $US × 1 500 = 27 750 $US"],
      },
      {
        title: "40 $US de l’heure, 37,5 heures par semaine, 48 semaines payées",
        steps: ["Heures annuelles = 37,5 × 48 = 1 800", "Salaire annuel = 40 $US × 1 800 = 72 000 $US"],
      },
    ],
    assumptions: [
      "Les résultats sont des montants bruts, avant impôts et cotisations. Le salaire net n’est pas estimé.",
      "Chaque heure payée l’est au même taux. Les majorations d’heures supplémentaires, pourboires, primes et majorations de poste ne sont pas incluses.",
      "Les montants mensuel, bimensuel et toutes les deux semaines divisent le total annuel par 12, 24 et 26.",
      "Le choix d’une devise ne modifie que la mise en forme. Aucune conversion de change n’est effectuée.",
      "Les résultats sont arrondis à l’affichage. Les calculs utilisent la précision complète.",
    ],
    faqs: [
      {
        question: "Combien représentent 20 $US de l’heure par an ?",
        answer: "À raison de 40 heures par semaine pendant 52 semaines, 20 $US de l’heure correspondent à 20 $US × 2 080 = 41 600 $US brut par an.",
      },
      {
        question: "Combien d’heures de travail compte une année ?",
        answer:
          "Un temps plein de 40 heures par semaine pendant 52 semaines donne 2 080 heures payées. Modifiez les heures par semaine ou les semaines payées selon votre situation.",
      },
      {
        question: "Comment tenir compte des congés non payés ?",
        answer: "Réduisez le nombre de semaines payées par an. Par exemple, deux semaines non payées reviennent à saisir 50 semaines.",
      },
      {
        question: "Pourquoi le montant mensuel n’équivaut-il pas à quatre semaines de salaire ?",
        answer:
          "Un mois dure en moyenne plus de quatre semaines. Le salaire mensuel correspond au total annuel divisé par 12, soit environ 4,33 semaines de salaire sur une base de 52 semaines par an.",
      },
      {
        question: "S’agit-il de mon salaire net ?",
        answer: "Non. Ce sont des montants bruts, avant impôt sur le revenu et autres prélèvements, que ce calculateur n’estime pas.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    hourlyRate: "Taux horaire",
    hourlyRateHelp: "Rémunération brute par heure, avant impôts et cotisations.",
    primary: "Équivalent en salaire annuel",
    caption: "Rémunération brute annuelle pour le taux horaire et l’horaire saisis.",
    monthly: "Salaire brut mensuel",
    annualHours: "Heures payées par an",
  },
};

export default fr;
