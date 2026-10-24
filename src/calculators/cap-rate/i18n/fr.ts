import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CapRateText } from "../text/en";

const fr: CalculatorTranslation<CapRateText> = {
  content: {
    title: "Calculateur de taux de capitalisation",
    shortTitle: "Taux de capitalisation",
    summary: "Trouvez le taux de capitalisation d’un bien locatif à partir de ses revenus, de la vacance et des charges d’exploitation, ou sa valeur à partir d’un taux cible.",
    metaTitle: "Calculateur de taux de capitalisation – NOI et prix du bien",
    metaDescription:
      "Calculez le taux de capitalisation d’un bien locatif à partir des loyers, de la vacance et des charges, ou estimez sa valeur à partir du NOI et d’un taux cible.",
    keywords: ["taux de capitalisation", "cap rate", "revenu net d’exploitation", "NOI", "bien locatif", "méthode par le revenu", "investissement immobilier", "valeur d’un bien"],
    intro: [
      "Le taux de capitalisation (cap rate) compare le revenu qu’un bien produit avec ce qu’il vaut. C’est le revenu net d’exploitation d’une année divisé par la valeur ou le prix du bien, exprimé en pourcentage.",
      "Les investisseurs l’utilisent pour comparer rapidement des biens, quel que soit leur mode de financement. Saisissez les loyers, la vacance et les charges courantes pour obtenir le taux de capitalisation, ou changez de mode pour convertir un revenu net d’exploitation et un taux cible en valeur indicative.",
    ],
    howToUse: [
      "Choisissez de calculer le taux de capitalisation ou la valeur, et sélectionnez la devise.",
      "Pour le taux, saisissez la valeur du bien ou le prix demandé, les loyers bruts annuels, la provision pour vacance et les charges d’exploitation annuelles.",
      "Pour la valeur, saisissez le revenu net d’exploitation et le taux de capitalisation visé.",
      "Lisez le taux de capitalisation ou la valeur, ainsi que le revenu brut effectif, le NOI et le ratio de charges.",
    ],
    formulas: [
      { title: "Revenu brut effectif", expression: "RBE = revenu brut × (1 − vacance)", explanation: "La vacance est la part du revenu perdue à cause des logements vides et des loyers impayés." },
      { title: "Revenu net d’exploitation", expression: "NOI = RBE − charges d’exploitation", explanation: "Les charges d’exploitation excluent les mensualités d’emprunt, l’amortissement et l’impôt sur le revenu." },
      { title: "Taux de capitalisation", expression: "taux = NOI ÷ valeur × 100 %", explanation: "Le rendement annuel avant impôt que le bien rapporterait à un acheteur payant comptant." },
      { title: "Valeur à partir d’un taux", expression: "valeur = NOI ÷ taux", explanation: "Divisez par le taux exprimé en décimal : 6 % donne 0,06." },
    ],
    examples: [
      { title: "Duplex d’une valeur de 450 000 $", steps: ["RBE = 48 000 × 0,95 = 45 600 $", "NOI = 45 600 − 16 000 = 29 600 $", "Taux = 29 600 ÷ 450 000 ≈ 6,58 %"] },
      { title: "Petit immeuble d’appartements à 720 000 $", steps: ["RBE = 62 400 × 0,92 = 57 408 $", "NOI = 57 408 − 21 500 = 35 908 $", "Taux = 35 908 ÷ 720 000 ≈ 4,99 %"] },
      { title: "Valeur d’un commerce avec un NOI de 41 250 $ à un taux de 5,75 %", steps: ["Valeur = 41 250 ÷ 0,0575", "≈ 717 391,30 $"] },
    ],
    assumptions: [
      "Le taux de capitalisation ignore le financement, l’impôt sur le revenu, les travaux d’amélioration et l’évolution future des loyers ou de la valeur. C’est un instantané du revenu d’une année.",
      "Le résultat dépend entièrement des revenus et des charges que vous saisissez. Utilisez des charges d’exploitation réalistes sur une année complète, y compris la gestion et l’entretien même si vous les assurez vous-même.",
      "Un revenu net d’exploitation négatif est accepté et donne un taux de capitalisation négatif, ce qui signifie que le bien ne couvre pas ses charges courantes.",
      "Il s’agit d’une estimation, et non d’un conseil en investissement ou financier, et ce calcul n’a pas été vérifié par un professionnel.",
    ],
    faqs: [
      { question: "Qu’est-ce qu’un bon taux de capitalisation ?", answer: "Il n’existe pas de chiffre idéal unique. Les taux de capitalisation dépendent de l’emplacement, du type de bien, de son état et des taux d’intérêt. Un taux plus élevé signifie plus de revenu pour le prix payé, mais généralement aussi plus de risque ou moins de croissance attendue." },
      { question: "Pourquoi les mensualités d’emprunt sont-elles exclues des charges d’exploitation ?", answer: "Le taux de capitalisation décrit le bien, pas le prêt de l’acheteur. Exclure le financement permet de comparer les biens équitablement. Pour inclure le prêt, regardez plutôt le rendement sur fonds propres (cash-on-cash) ou le ROI." },
      { question: "Pourquoi un taux de capitalisation plus bas augmente-t-il la valeur ?", answer: "La valeur est le NOI divisé par le taux de capitalisation. Pour un même NOI de 40 000 $, un taux de 5 % donne 800 000 $ et un taux de 8 % donne 500 000 $ : les acheteurs qui acceptent des taux plus bas paient donc plus cher." },
    ],
    sourcesUsedFor: [
      "Le taux de capitalisation comme rapport entre le revenu net d’exploitation et la valeur, et valeur = revenu ÷ taux.",
      "La relation I = R × V entre le revenu net d’exploitation, le taux de capitalisation global et la valeur.",
    ],
  },
  text: {
    mode: "Calculer",
    modes: { rate: "Taux de capitalisation à partir du revenu", value: "Valeur à partir d’un taux cible" },
    value: "Valeur ou prix du bien",
    gross: "Revenu locatif brut annuel",
    grossHelp: "Tous les loyers que le bien rapporterait sur un an s’il était entièrement loué, plus les autres revenus comme le stationnement ou la buanderie.",
    vacancy: "Vacance et impayés",
    vacancyHelp: "La part du revenu brut que vous pensez perdre à cause des logements vides et des loyers impayés.",
    expenses: "Charges d’exploitation annuelles",
    expensesHelp: "Taxe foncière, assurance, entretien, gestion, services publics à votre charge et autres frais courants similaires. N’incluez pas les mensualités d’emprunt, l’amortissement ni l’impôt sur le revenu.",
    noi: "Revenu net d’exploitation (NOI) annuel",
    noiHelp: "Le revenu après vacance et charges d’exploitation, avant mensualités d’emprunt et impôt sur le revenu.",
    targetRate: "Taux de capitalisation visé",
    errors: {
      noiPositive: "Le revenu net d’exploitation doit être supérieur à 0 pour calculer une valeur.",
    },
    capRate: "Taux de capitalisation",
    capCaption: "Revenu net d’exploitation de {noi} pour une valeur de {value}.",
    propertyValue: "Valeur indicative du bien",
    valueCaption: "{noi} de revenu net d’exploitation capitalisé à {rate}.",
    egi: "Revenu brut effectif",
    noiResult: "Revenu net d’exploitation (NOI)",
    monthlyNoi: "NOI mensuel",
    expenseRatio: "Ratio de charges d’exploitation (sur le revenu brut effectif)",
    grm: "Multiplicateur de revenu brut (valeur ÷ revenu brut)",
    valuePerPoint: "Variation de valeur si le taux est inférieur d’un point",
    notes: {
      negative: "Les charges d’exploitation dépassent le revenu après vacance : le NOI et le taux de capitalisation sont donc négatifs, et le bien ne couvre pas ses charges courantes.",
      financing: "Le taux de capitalisation ignore le financement, l’impôt sur le revenu et l’évolution future de la valeur.",
    },
  },
};

export default fr;
