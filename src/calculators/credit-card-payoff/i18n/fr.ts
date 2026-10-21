import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CreditCardPayoffText } from "../text/en";

const years = { zero: "{n} an", one: "{n} an", two: "{n} ans", few: "{n} ans", many: "{n} d’années", other: "{n} ans" };
const months = { zero: "{n} mois", one: "{n} mois", two: "{n} mois", few: "{n} mois", many: "{n} de mois", other: "{n} mois" };

const fr: CalculatorTranslation<CreditCardPayoffText> = {
  content: {
    title: "Calculateur de remboursement de carte de crédit",
    shortTitle: "Remboursement de carte de crédit",
    summary: "Découvrez combien de mois une mensualité fixe met à solder une carte de crédit, ou la mensualité nécessaire pour la solder à une date donnée.",
    metaTitle: "Remboursement de carte de crédit – Durée et intérêts",
    metaDescription:
      "Estimez en combien de temps une mensualité fixe solde une carte de crédit et les intérêts payés, ou la mensualité pour la rembourser en un nombre de mois donné.",
    keywords: ["remboursement carte de crédit", "rembourser carte de crédit", "intérêts carte de crédit", "remboursement de dette", "durée de remboursement", "mensualité carte de crédit", "APR carte de crédit", "taux annuel nominal"],
    intro: [
      "Les intérêts d’une carte de crédit s’appliquent au solde que vous reportez : une petite mensualité peut donc vous maintenir endetté pendant des années. Ce calculateur montre l’effet d’un paiement fixe chaque mois.",
      "Choisissez si vous voulez savoir combien de temps prendra votre paiement, ou combien vous devez payer chaque mois pour solder la carte en un nombre de mois choisi. Un tableau annuel montre comment le solde diminue et quelle part des intérêts revient à l’émetteur de la carte.",
    ],
    howToUse: [
      "Choisissez la devise des montants.",
      "Choisissez ce que vous cherchez : la durée de remboursement ou la mensualité nécessaire.",
      "Saisissez le solde actuel et l’APR (taux annuel nominal) de la carte.",
      "Saisissez votre mensualité fixe, ou le nombre de mois au bout duquel vous voulez ne plus avoir de dette.",
      "Lisez le résultat, les intérêts totaux et le tableau année par année.",
    ],
    formulas: [
      {
        title: "Intérêts mensuels",
        expression: "intérêts = solde × APR ÷ 12",
        explanation: "Chaque mois, les intérêts s’ajoutent au solde, puis le paiement est déduit. Le dernier paiement correspond simplement à ce qui reste.",
      },
      {
        title: "Mensualité pour une date cible",
        expression: "PMT = B × i ÷ (1 − (1 + i)^(−n))",
        explanation: "B est le solde, i = APR ÷ 12 en décimal et n le nombre de mois. À un APR de 0 %, PMT = B ÷ n.",
      },
      {
        title: "Quand un paiement est trop faible",
        expression: "paiement ≤ B × i",
        explanation: "Si le paiement ne dépasse pas les intérêts du premier mois, le solde ne diminue jamais.",
      },
    ],
    examples: [
      {
        title: "3 200 $US à un APR de 19,99 %, en payant 120 $US par mois",
        steps: [
          "Taux mensuel = 19,99 % ÷ 12 ≈ 1,666 %",
          "Premier mois : intérêts ≈ 53,31 $US, donc 66,69 $US sur les 120 $US réduisent le solde",
          "En répétant mois après mois, le 36e paiement est partiel, d’environ 66,69 $US",
          "Intérêts totaux ≈ 1 066,69 $US",
        ],
      },
      {
        title: "6 500 $US à un APR de 24,5 %, soldés en 36 mois",
        steps: ["i = 0,245 ÷ 12 ≈ 0,020417 ; n = 36", "PMT = 6 500 × i ÷ (1 − (1 + i)^−36)", "≈ 256,72 $US par mois, soit environ 2 742 $US d’intérêts au total"],
      },
      {
        title: "1 500 $US à un taux promotionnel de 0 %, soldés en 10 mois",
        steps: ["Aucun intérêt : le solde est réparti en parts égales", "PMT = 1 500 ÷ 10 = 150 $US"],
      },
    ],
    assumptions: [
      "Les intérêts sont capitalisés chaque mois au taux APR ÷ 12. De nombreux émetteurs appliquent un taux périodique quotidien au solde quotidien moyen : les relevés réels différeront donc légèrement.",
      "Il n’y a ni nouveaux achats, ni avances de fonds, ni frais, ni taux de pénalité, ni changement de taux, et chaque paiement est effectué à temps.",
      "Les paiements ne sont pas arrondis au centime et les taux promotionnels sont supposés durer pendant toute la période.",
      "Il s’agit d’une estimation, et non d’un conseil financier, et elle n’a pas été vérifiée par un professionnel. Consultez votre contrat de carte et votre relevé pour connaître les chiffres qui s’appliquent à vous.",
    ],
    faqs: [
      {
        question: "Pourquoi une petite mensualité prend-elle autant de temps ?",
        answer: "La plus grande partie d’une petite mensualité est absorbée par les intérêts. Seul le reste réduit le solde : celui-ci baisse donc lentement et continue de générer des intérêts. Même une augmentation modeste du paiement peut réduire fortement la durée et les intérêts.",
      },
      {
        question: "Pourquoi la durée de remboursement indiquée sur mon relevé est-elle différente ?",
        answer: "Les relevés supposent en général que vous ne payez que le minimum, qui diminue à mesure que le solde baisse, et les émetteurs calculent généralement les intérêts au jour le jour. Ce calculateur suppose le même paiement fixe chaque mois et des intérêts mensuels.",
      },
      {
        question: "Et si mon paiement est inférieur aux intérêts ?",
        answer: "Le solde ne diminue alors jamais, et le calculateur affiche une erreur. Vous devez payer plus que les intérêts du premier mois, indiqués dans le message d’erreur, avant qu’une partie du paiement ne réduise ce que vous devez.",
      },
    ],
    sourcesUsedFor: [
      "Les mentions de durée de remboursement et de paiement sur 36 mois figurant sur les relevés de carte aux États-Unis, qui supposent elles aussi l’absence de nouveaux achats.",
      "Ce que signifie le taux annuel effectif global (APR) d’une carte de crédit.",
    ],
  },
  text: {
    mode: "Chercher",
    modes: { payment: "Durée de remboursement", months: "Mensualité nécessaire" },
    balance: "Solde de la carte",
    balanceHelp: "Le montant que vous devez sur la carte aujourd’hui.",
    apr: "Taux annuel nominal sur les achats (APR)",
    aprHelp: "Le taux d’intérêt annuel indiqué sur votre relevé.",
    payment: "Mensualité",
    paymentHelp: "Le même montant payé chaque mois jusqu’à ce que le solde soit remboursé.",
    months: "Rembourser en",
    monthsHelp: "Nombre de mensualités, de 1 à 600.",
    monthsSuffix: "mois",
    errors: {
      neverPaid: "Ce paiement ne couvre pas les intérêts du premier mois, soit {interest} : le solde ne serait jamais remboursé. Saisissez un paiement plus élevé.",
      tooLong: "Avec ce paiement, il faudrait plus de 1 200 mois (100 ans) pour rembourser la carte. Saisissez un paiement plus élevé.",
    },
    units: { years, months },
    yearsMonths: "{years} et {months}",
    timeToPayoff: "Durée de remboursement",
    captionPayment: "En payant {payment} par mois sur {balance} à un APR de {apr} : environ {duration}.",
    requiredPayment: "Mensualité nécessaire",
    captionMonths: "Rembourse {balance} à un APR de {apr} en {duration}.",
    totalInterest: "Intérêts totaux",
    totalPaid: "Total payé",
    lastPayment: "Dernier paiement (partiel)",
    firstInterest: "Intérêts du premier mois",
    numberOfPayments: "Nombre de paiements",
    tableCaption: "Solde par année",
    tableColumns: { year: "Année", interest: "Intérêts payés", paid: "Paiements effectués", balance: "Solde en fin d’année" },
    notes: {
      monthly: "Les intérêts sont ajoutés chaque mois au taux APR ÷ 12. De nombreux émetteurs calculent les intérêts sur le solde quotidien moyen : les chiffres de votre relevé différeront donc légèrement.",
      noPurchases: "L’estimation suppose qu’il n’y a ni nouveaux achats, ni frais, ni changement de taux pendant le remboursement de la carte.",
      zeroRate: "À un APR de 0 %, le solde est simplement réparti en paiements égaux.",
    },
  },
};

export default fr;
