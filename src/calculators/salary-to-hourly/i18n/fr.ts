import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SalaryToHourlyText } from "../text/en";

const fr: CalculatorTranslation<SalaryToHourlyText> = {
  content: {
    title: "Calculateur de salaire horaire",
    shortTitle: "Salaire en taux horaire",
    summary: "Convertissez une rémunération brute annuelle, mensuelle, toutes les deux semaines ou autre en taux horaire selon votre propre emploi du temps.",
    metaTitle: "Calculateur de salaire horaire – Convertir toute période de paie",
    metaDescription:
      "Convertissez un salaire en taux horaire. Saisissez une rémunération brute annuelle, mensuelle, bimensuelle, hebdomadaire ou journalière et votre temps de travail.",
    keywords: ["salaire horaire", "convertir salaire annuel en horaire", "taux horaire brut", "salaire mensuel en horaire", "calcul salaire par heure", "brut horaire"],
    intro: [
      "Ce calculateur convertit une rémunération brute versée selon n’importe quelle période de paie courante en équivalent horaire. Elle indique aussi ce que représente cette même rémunération par an, par mois, par demi-mois, par quinzaine, par semaine et par jour travaillé.",
      "Le résultat dépend de l’emploi du temps saisi. Un salaire de 60 000 $US correspond à environ 28,85 $US de l’heure pour 40 heures par semaine sur 52 semaines, mais à environ 30,77 $US de l’heure pour 37,5 heures par semaine.",
    ],
    howToUse: [
      "Saisissez le montant de votre rémunération brute, avant impôts et cotisations.",
      "Choisissez la fréquence à laquelle vous percevez ce montant : annuelle, mensuelle, bimensuelle, toutes les deux semaines, hebdomadaire, journalière ou horaire.",
      "Indiquez vos heures payées par semaine, vos jours travaillés par semaine et vos semaines payées par an. Les valeurs par défaut sont 40 heures, 5 jours et 52 semaines.",
      "Consultez l’équivalent horaire et le détail complet par période de paie. Les résultats se mettent à jour pendant la saisie.",
    ],
    formulas: [
      {
        title: "Ramener le montant à l’année",
        expression:
          "Rémunération annuelle = montant × périodes par an\nAnnuelle = 1, Mensuelle = 12, Bimensuelle = 24, Toutes les deux semaines = 26\nHebdomadaire = semaines par an\nJournalière = jours travaillés par semaine × semaines par an\nHoraire = heures par semaine × semaines par an",
        explanation:
          "Les rémunérations annuelles, mensuelles, bimensuelles et versées toutes les deux semaines utilisent un nombre fixe de périodes dans l’année. Les rémunérations hebdomadaires, journalières et horaires sont annualisées selon l’emploi du temps saisi.",
      },
      {
        title: "Diviser par les heures payées",
        expression: "Heures annuelles = heures par semaine × semaines par an\nÉquivalent horaire = rémunération annuelle ÷ heures annuelles",
        explanation: "L’équivalent horaire répartit uniformément la rémunération brute annualisée sur chaque heure payée de l’année.",
      },
      {
        title: "Autres périodes de paie",
        expression: "Rémunération par période = rémunération annuelle ÷ périodes par an",
        explanation: "Le tableau de détail divise le montant annualisé par le nombre de chaque période. Les valeurs ne sont arrondies qu’à l’affichage.",
      },
    ],
    examples: [
      {
        title: "Salaire annuel de 60 000 $US, à temps plein",
        steps: ["Heures annuelles = 40 × 52 = 2 080", "Taux horaire = 60 000 $US ÷ 2 080 = 28,846… $US"],
      },
      {
        title: "4 500 $US par mois",
        steps: ["Rémunération annuelle = 4 500 $US × 12 = 54 000 $US", "Heures annuelles = 40 × 52 = 2 080", "Taux horaire = 54 000 $US ÷ 2 080 = 25,961… $US"],
      },
      {
        title: "2 000 $US toutes les deux semaines à 37,5 heures par semaine",
        steps: ["Rémunération annuelle = 2 000 $US × 26 = 52 000 $US", "Heures annuelles = 37,5 × 52 = 1 950", "Taux horaire = 52 000 $US ÷ 1 950 = 26,666… $US"],
      },
      {
        title: "250 $US par jour, 4 jours par semaine, 48 semaines payées",
        steps: ["Rémunération annuelle = 250 $US × 4 × 48 = 48 000 $US", "Heures annuelles = 32 × 48 = 1 536", "Taux horaire = 48 000 $US ÷ 1 536 = 31,25 $US"],
      },
    ],
    assumptions: [
      "Tous les montants sont bruts, avant impôt sur le revenu, cotisations sociales, cotisations retraite et autres retenues. Ce calculateur n’estime ni les impôts ni le salaire net.",
      "Les rémunérations mensuelles, bimensuelles et versées toutes les deux semaines sont annualisées avec 12, 24 et 26 périodes par an, quel que soit le nombre de semaines par an saisi.",
      "Les rémunérations hebdomadaires, journalières et horaires sont annualisées avec vos semaines par an, vos jours travaillés par semaine et vos heures par semaine.",
      "Les heures supplémentaires, primes, commissions, avantages et pauses non payées ne sont pas pris en compte, sauf si vous les ajoutez au montant.",
      "Le choix d’une devise ne modifie que le symbole et la mise en forme. Aucune conversion de change n’est effectuée.",
      "Les résultats sont arrondis à l’affichage. Les calculs sont effectués en pleine précision.",
    ],
    faqs: [
      {
        question: "Comment convertir mon salaire annuel en taux horaire ?",
        answer:
          "Divisez le salaire annuel par le nombre d’heures payées dans l’année. À 40 heures par semaine sur 52 semaines, cela fait 2 080 heures : un salaire de 50 000 $US correspond donc à 50 000 $US ÷ 2 080 ≈ 24,04 $US de l’heure.",
      },
      {
        question: "Pourquoi une paie toutes les deux semaines est-elle multipliée par 26 plutôt que par 2 × les semaines par an ?",
        answer:
          "Une paie toutes les deux semaines donne 26 versements dans une année type. Les salaires mensuels, bimensuels et versés toutes les deux semaines sont généralement fixes par versement ; ils sont donc annualisés avec un nombre calendaire de périodes plutôt qu’avec les semaines payées saisies.",
      },
      {
        question: "Quelle est la différence entre une paie bimensuelle et une paie toutes les deux semaines ?",
        answer:
          "Une paie bimensuelle est versée deux fois par mois, soit 24 versements par an. Une paie toutes les deux semaines est versée tous les quatorze jours, soit 26 versements par an. Pour un même salaire annuel, chaque versement toutes les deux semaines est donc plus petit qu’un versement bimensuel.",
      },
      {
        question: "Le taux horaire obtenu correspond-il à mon salaire net ?",
        answer:
          "Non. Le résultat est une rémunération brute, avant impôts et retenues. Votre salaire net dépend de votre situation fiscale, de vos avantages et des prélèvements, que ce calculateur n’estime pas.",
      },
      {
        question: "Faut-il utiliser 52 semaines par an ?",
        answer:
          "Utilisez 52 si vous êtes payé chaque semaine de l’année, jours fériés et congés payés compris. Si certaines semaines ne sont pas payées, saisissez uniquement les semaines payées. Une année civile compte environ 52,14 semaines, valeur que vous pouvez aussi saisir.",
      },
      {
        question: "Changer de devise convertit-il le montant ?",
        answer: "Non. Le réglage de devise ne modifie que la mise en forme des nombres. Saisissez les montants dans la devise dans laquelle vous êtes payé.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    amount: "Montant de la rémunération brute",
    amountHelp: "Rémunération avant impôts et retenues.",
    period: "Période de paie",
    periodHelp: "Fréquence à laquelle vous percevez le montant ci-dessus.",
    primary: "Équivalent horaire",
    caption: "Rémunération brute par heure, convertie depuis la période de paie : {period}.",
    annual: "Rémunération brute annuelle",
    annualHours: "Heures payées par an",
  },
};

export default fr;
