import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ElectricityCostText } from "../text/en";

const fr: CalculatorTranslation<ElectricityCostText> = {
  content: {
    title: "Calculateur de coût d’électricité",
    shortTitle: "Coût d’électricité",
    summary: "Calculez combien coûte le fonctionnement d’un appareil à partir de sa puissance, de sa durée d’utilisation et du prix de votre électricité.",
    metaTitle: "Calculateur de coût d’électricité – Coût par appareil",
    metaDescription: "Calculez la consommation en kWh et le coût de fonctionnement d’un appareil par jour, sur la période et par an, selon sa puissance et votre tarif.",
    keywords: ["coût électricité appareil", "calcul consommation kWh", "prix du kWh", "consommation électrique", "facture d’électricité", "puissance en watts"],
    intro: [
      "L’électricité est facturée au kilowattheure (kWh) : l’énergie d’une puissance de 1 000 watts pendant une heure. Multipliez l’énergie consommée par votre prix du kWh pour obtenir le coût.",
      "La puissance figure sur l’étiquette de l’appareil, et votre tarif sur votre facture d’électricité.",
    ],
    howToUse: [
      "Saisissez la puissance nominale en watts.",
      "Indiquez combien d’heures par jour l’appareil fonctionne et pendant combien de jours.",
      "Saisissez votre prix du kWh.",
      "Consultez le coût et l’énergie consommée.",
    ],
    formulas: [
      { title: "Énergie", expression: "kWh = watts × heures par jour × jours ÷ 1 000", explanation: "Convertit les wattheures en kilowattheures." },
      { title: "Coût", expression: "coût = kWh × prix du kWh", explanation: "Utilise le prix de l’énergie de votre tarif." },
    ],
    examples: [
      {
        title: "Un appareil de 100 W, 5 heures par jour pendant 30 jours à 0,15 $US/kWh",
        steps: ["100 × 5 × 30 ÷ 1 000 = 15 kWh", "15 × 0,15 $US = 2,25 $US"],
      },
      {
        title: "Un radiateur de 1 500 W, 1 heure par jour pendant 30 jours à 0,20 $US/kWh",
        steps: ["1 500 × 1 × 30 ÷ 1 000 = 45 kWh", "45 × 0,20 $US = 9,00 $US"],
      },
    ],
    assumptions: [
      "Suppose que l’appareil consomme toute sa puissance nominale lorsqu’il est allumé. Les thermostats, les cycles de fonctionnement et les charges variables consomment généralement moins.",
      "L’abonnement, les taxes, les tarifs heures pleines/heures creuses et la consommation en veille ne sont pas inclus.",
      "Le choix d’une devise ne modifie que la mise en forme.",
    ],
    faqs: [
      { question: "Qu’est-ce qu’un kilowattheure ?", answer: "L’énergie consommée par un appareil de 1 000 watts fonctionnant pendant une heure." },
      { question: "Où trouver la puissance d’un appareil ?", answer: "Sur sa plaque signalétique ou dans sa notice. Si seule l’intensité en ampères est indiquée, multipliez-la par la tension pour obtenir une puissance approximative." },
      { question: "Comment réduire les coûts de fonctionnement ?", answer: "Utilisez des appareils économes, réduisez la durée d’utilisation et vérifiez si votre contrat propose des heures creuses moins chères." },
    ],
    sourcesUsedFor: ["Définition des watts et des kilowattheures, et mode de facturation de la consommation d’électricité."],
  },
  text: {
    power: "Puissance nominale",
    powerHelp: "Indiquée sur l’étiquette, par ex. 100 W. Comptez 1 000 W par kW.",
    hours: "Utilisation par jour",
    days: "Nombre de jours",
    rate: "Prix de l’électricité par kWh",
    cost: "Coût pour {days} jours",
    energy: "Énergie consommée",
    perDay: "Coût par jour",
    perYear: "Coût par an (365 jours)",
    note: "Suppose que l’appareil consomme sa puissance nominale dès qu’il est allumé. L’utilisation réelle varie souvent, et la consommation en veille n’est pas incluse.",
  },
};

export default fr;
