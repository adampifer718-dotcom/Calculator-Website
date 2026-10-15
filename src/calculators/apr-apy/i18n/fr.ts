import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AprApyText } from "../text/en";

const fr: CalculatorTranslation<AprApyText> = {
  content: {
    title: "Calculateur de conversion APR en APY",
    shortTitle: "APR en APY",
    summary: "Convertissez un taux nominal annuel (APR) en rendement annuel effectif (APY), ou l’inverse, pour n’importe quelle fréquence de capitalisation.",
    metaTitle: "Calculateur de conversion APR en APY – Taux annuel effectif",
    metaDescription:
      "Convertissez un APR en APY ou un APY en APR pour une capitalisation annuelle, trimestrielle, mensuelle, quotidienne ou continue, avec un tableau comparatif.",
    keywords: ["apr en apy", "apy en apr", "taux nominal", "taux annuel effectif", "rendement annuel effectif", "taux actuariel", "fréquence de capitalisation", "conversion de taux"],
    intro: [
      "Les banques annoncent deux sortes de taux annuels. L’APR est le taux nominal : le taux par période multiplié par le nombre de périodes. L’APY est le taux effectif : ce dont un solde augmente réellement en un an une fois que les intérêts produisent eux-mêmes des intérêts.",
      "Plus les intérêts sont capitalisés souvent, plus l’APY dépasse l’APR. Cet outil permet de comparer sur une même base un compte d’épargne annoncé en APY et un prêt annoncé en APR.",
    ],
    howToUse: [
      "Choisissez si vous convertissez un APR en APY ou un APY en APR.",
      "Saisissez le taux que vous connaissez, en pourcentage.",
      "Choisissez la fréquence de capitalisation des intérêts.",
      "Lisez le taux converti, le taux appliqué à chaque période et le tableau pour les autres fréquences.",
    ],
    formulas: [
      { title: "APR en APY", expression: "APY = (1 + APR ÷ n)ⁿ − 1", explanation: "n est le nombre de périodes de capitalisation par an, et les deux taux sont exprimés en décimal." },
      { title: "Capitalisation continue", expression: "APY = e^APR − 1", explanation: "La limite lorsque n augmente sans fin ; e ≈ 2,71828." },
      { title: "APY en APR", expression: "APR = n × ((1 + APY)^(1/n) − 1)", explanation: "La formule inverse. En capitalisation continue, APR = ln(1 + APY)." },
      { title: "Taux par période", expression: "i = APR ÷ n", explanation: "Le taux d’intérêt appliqué à chaque étape de capitalisation." },
    ],
    examples: [
      {
        title: "APR de 6 % capitalisé mensuellement",
        steps: ["Taux mensuel = 0,06 ÷ 12 = 0,005", "APY = 1,005¹² − 1", "≈ 0,061678, soit environ 6,1678 %"],
      },
      {
        title: "APY de 5 % reconverti en APR mensuel",
        steps: ["APR = 12 × (1,05^(1/12) − 1)", "= 12 × 0,0040741", "≈ 4,8889 %"],
      },
      {
        title: "APR de 8 % capitalisé en continu",
        steps: ["APY = e^0,08 − 1", "≈ 1,083287 − 1", "≈ 8,3287 %"],
      },
    ],
    assumptions: [
      "Le taux est un taux d’intérêt nominal constant toute l’année, sans dépôt, retrait ni frais.",
      "Pour les prêts aux États-Unis, l’APR communiqué en vertu du Truth in Lending Act (Regulation Z) peut inclure certains frais : il peut donc être plus élevé que le seul taux d’intérêt. Cet outil ne convertit que des taux nominaux.",
      "La capitalisation quotidienne utilise 365 périodes par an. Les banques peuvent utiliser 360 ou 366 jours dans leurs propres calculs.",
      "Ceci ne constitue pas un conseil financier.",
    ],
    faqs: [
      {
        question: "Pourquoi l’APY est-il supérieur à l’APR ?",
        answer: "Chaque fois que des intérêts sont ajoutés, ceux de la période suivante sont calculés sur un solde plus élevé. L’APY tient compte de ce surcroît de croissance, l’APR non. Avec une capitalisation annuelle, les deux sont égaux.",
      },
      {
        question: "Quel taux comparer d’un compte à l’autre ?",
        answer: "Pour l’épargne, comparez les APY entre eux, car ils intègrent déjà la capitalisation. Pour les prêts, comparez l’APR communiqué, qui inclut aussi de nombreux frais.",
      },
      {
        question: "La capitalisation quotidienne change-t-elle beaucoup par rapport à la mensuelle ?",
        answer: "Très peu aux taux courants. Pour un APR de 5 %, la capitalisation mensuelle donne un APY d’environ 5,116 % et la quotidienne d’environ 5,127 %.",
      },
    ],
    sourcesUsedFor: [
      "La façon dont le rendement annuel effectif (APY) reflète la capitalisation sur un an.",
      "La précision selon laquelle l’APR communiqué pour un prêt mesure le coût du crédit et peut différer d’un taux d’intérêt nominal.",
    ],
  },
  text: {
    direction: "Conversion",
    directions: { aprToApy: "APR en APY", apyToApr: "APY en APR" },
    rate: "Taux",
    rateHelp: "Saisissez l’APR (taux annuel nominal) pour obtenir l’APY, ou l’APY (taux annuel effectif) pour obtenir l’APR.",
    compounding: "Capitalisation",
    frequencies: {
      "1": "Annuelle",
      "2": "Semestrielle",
      "4": "Trimestrielle",
      "12": "Mensuelle",
      "52": "Hebdomadaire",
      "365": "Quotidienne",
      continuous: "Continue",
    },
    inSentence: {
      "1": "annuellement",
      "2": "semestriellement",
      "4": "trimestriellement",
      "12": "mensuellement",
      "52": "chaque semaine",
      "365": "quotidiennement",
      continuous: "en continu",
    },
    apy: "Rendement annuel effectif (APY)",
    apr: "Taux annuel nominal (APR)",
    captionToApy: "Un APR de {rate} capitalisé {frequency} donne ce taux annuel effectif.",
    captionToApr: "Le taux nominal qui, capitalisé {frequency}, donne un APY de {rate}.",
    periodRate: "Taux par période de capitalisation",
    periodsPerYear: "Périodes de capitalisation par an",
    difference: "Écart entre l’APY et l’APR",
    tableCaption: "Le même taux avec d’autres fréquences de capitalisation",
    tableColumns: { frequency: "Capitalisation", apy: "APY", apr: "APR" },
    notes: {
      continuous: "La capitalisation continue est la limite d’une capitalisation de plus en plus fréquente ; elle n’a pas de périodes distinctes.",
      regZ: "Pour les prêts aux États-Unis, l’APR communiqué au titre de la Regulation Z peut inclure certains frais en plus des intérêts. Cet outil ne convertit que des taux d’intérêt nominaux : il ne reproduit donc pas un APR incluant les frais d’un prêteur.",
    },
  },
};

export default fr;
