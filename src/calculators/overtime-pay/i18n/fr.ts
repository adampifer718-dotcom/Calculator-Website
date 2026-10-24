import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { OvertimePayText } from "../text/en";

const fr: CalculatorTranslation<OvertimePayText> = {
  content: {
    title: "Calculateur d’heures supplémentaires",
    shortTitle: "Heures supplémentaires",
    summary: "Calculez la paie brute d’une semaine avec heures supplémentaires, majorées de 50 %, avec une part en option payée double et le taux horaire effectif.",
    metaTitle: "Calculateur d’heures supplémentaires – Paie majorée",
    metaDescription:
      "Calculez la paie brute hebdomadaire avec heures supplémentaires : paie normale jusqu’à 40 heures ou votre seuil, majoration de 50 %, heures payées double et taux effectif.",
    keywords: ["heures supplémentaires", "calcul heures supplémentaires", "majoration 50 %", "heures payées double", "paie hebdomadaire", "FLSA", "taux majoré", "40 heures"],
    intro: [
      "La rémunération des heures supplémentaires paie à un taux plus élevé les heures travaillées au-delà d’une semaine normale. Selon la loi fédérale américaine Fair Labor Standards Act, les salariés couverts et non exemptés doivent recevoir au moins une fois et demie leur taux normal pour chaque heure au-delà de 40 heures dans une semaine de travail.",
      "Ce calculateur répartit la semaine entre heures normales et heures supplémentaires, applique votre coefficient de majoration et peut payer une partie des heures supplémentaires au double du taux si votre employeur ou votre contrat le prévoit. Modifiez le seuil ou les coefficients selon les règles qui vous concernent.",
    ],
    howToUse: [
      "Choisissez la devise et saisissez votre taux horaire normal.",
      "Saisissez toutes les heures travaillées dans la semaine.",
      "Gardez le seuil à 40 heures et le coefficient à 1,5 pour la règle fédérale américaine, ou modifiez-les selon votre contrat ou la loi locale.",
      "Si certaines heures supplémentaires sont payées double, indiquez combien. Elles sont comptées parmi les heures supplémentaires.",
      "Lisez la paie brute totale, la répartition entre paie normale et paie des heures supplémentaires, et le taux horaire effectif.",
    ],
    formulas: [
      { title: "Heures normales et heures supplémentaires", expression: "normales = min(H, T) ; supplémentaires = max(0, H − T)", explanation: "H est le nombre d’heures travaillées dans la semaine et T le seuil des heures normales." },
      { title: "Paie brute", expression: "paie = normales × r + (supplémentaires − D) × r × m + D × r × d", explanation: "r est le taux horaire, m le coefficient des heures supplémentaires, D les heures payées double et d leur coefficient." },
      { title: "Taux horaire effectif", expression: "effectif = paie ÷ H", explanation: "Le montant moyen payé pour chaque heure travaillée, majoration comprise." },
    ],
    examples: [
      { title: "46 heures à 22 $ de l’heure", steps: ["Paie normale = 40 × 22 $ = 880 $", "Heures supplémentaires = 6 h × 22 $ × 1,5 = 198 $", "Total = 880 $ + 198 $ = 1 078 $"] },
      {
        title: "52 heures à 18,50 $ dont 4 heures payées double",
        steps: [
          "Paie normale = 40 × 18,50 $ = 740 $",
          "Heures supplémentaires = 12, dont 8 majorées de 50 % : 8 × 27,75 $ = 222 $",
          "Heures payées double = 4 × 37 $ = 148 $",
          "Total = 740 $ + 222 $ + 148 $ = 1 110 $, soit environ 21,35 $ par heure travaillée",
        ],
      },
      { title: "Contrat de 37,5 heures avec heures supplémentaires à 1,25×", steps: ["Paie normale = 37,5 × 16 £ = 600 £", "Heures supplémentaires = 6,5 h × 16 £ × 1,25 = 130 £", "Total = 730 £"] },
    ],
    assumptions: [
      "Il s’agit d’une estimation de la paie brute, avant impôt sur le revenu, cotisations sociales, avantages et autres retenues. Ce n’est pas un conseil juridique ou fiscal, et ce calcul n’a pas été vérifié par un professionnel.",
      "Les règles relatives aux heures supplémentaires varient selon le pays, l’État et le contrat. Certains endroits imposent des heures supplémentaires au-delà d’un nombre d’heures par jour, ou un paiement double après des postes plus longs ; cet outil applique uniquement un seuil hebdomadaire et les heures payées double que vous saisissez.",
      "Selon la règle fédérale américaine, le taux normal peut inclure les primes, commissions et majorations de poste. Ici, le taux normal est le taux horaire que vous saisissez.",
      "Les salariés exemptés, comme de nombreux cadres et professionnels salariés, peuvent ne pas avoir droit du tout aux heures supplémentaires.",
    ],
    faqs: [
      { question: "Que signifie une majoration de 50 % ?", answer: "Chaque heure supplémentaire est payée 1,5 fois le taux normal. À 20 $ de l’heure, une heure supplémentaire rapporte 30 $, soit une majoration de 10 $ en plus de la paie au taux normal." },
      { question: "Mon employeur peut-il faire la moyenne des heures sur deux semaines ?", answer: "Selon la règle fédérale américaine, non. Chaque semaine de travail est une période fixe de 168 heures considérée isolément : 50 heures une semaine et 30 la suivante donnent quand même 10 heures supplémentaires la première semaine." },
      { question: "Les heures payées double s’ajoutent-elles aux heures supplémentaires ?", answer: "Non. Dans ce calculateur, les heures payées double font partie des heures supplémentaires. Si vous avez fait 12 heures supplémentaires dont 4 payées double, les 8 autres sont payées au coefficient des heures supplémentaires." },
    ],
    sourcesUsedFor: [
      "La règle fédérale américaine : les salariés couverts non exemptés reçoivent au moins une fois et demie le taux normal pour les heures au-delà de 40 heures dans une semaine de travail.",
      "La semaine de travail comme période fixe de 168 heures, l’interdiction de faire la moyenne des heures sur plusieurs semaines et la détermination du taux normal.",
    ],
  },
  text: {
    rate: "Taux horaire normal",
    rateHelp: "Le taux de base pour une heure de travail, avant toute majoration pour heures supplémentaires.",
    hours: "Total des heures travaillées dans la semaine",
    threshold: "Seuil des heures normales",
    thresholdHelp: "Heures payées au taux normal avant le début des heures supplémentaires. Selon la règle fédérale américaine, c’est 40 heures par semaine de travail.",
    multiplier: "Coefficient des heures supplémentaires",
    multiplierHelp: "1,5 correspond à une majoration de 50 %.",
    doubleHours: "Heures payées double (facultatif)",
    doubleHoursHelp: "Heures payées au taux double, plus élevé. Elles font partie des heures supplémentaires et ne s’y ajoutent pas. Laissez vide ou à 0 s’il n’y en a pas.",
    doubleMultiplier: "Coefficient des heures payées double",
    errors: {
      doubleExceeds: "Les heures payées double ne peuvent pas dépasser les heures supplémentaires ({overtime} h).",
    },
    grossPay: "Paie brute totale",
    caption: "{hours} h à {rate} de l’heure, avec heures supplémentaires au-delà de {threshold} h à {multiplier}× le taux normal.",
    regularPay: "Paie normale",
    overtimePay: "Paie des heures supplémentaires",
    doublePay: "Paie des heures payées double",
    regularHours: "Heures normales",
    overtimeHours: "Heures supplémentaires (heures payées double comprises)",
    overtimeRate: "Taux horaire des heures supplémentaires",
    doubleRate: "Taux horaire des heures payées double",
    effectiveRate: "Taux horaire effectif",
    notes: {
      noOvertime: "Les heures travaillées ne dépassent pas le seuil : aucune heure supplémentaire n’est due.",
      gross: "Les montants sont des montants bruts, avant impôts et retenues.",
      rules: "Les règles des heures supplémentaires dépendent du pays, de l’État et du contrat de travail ; certains endroits imposent aussi des heures supplémentaires journalières.",
    },
  },
};

export default fr;
